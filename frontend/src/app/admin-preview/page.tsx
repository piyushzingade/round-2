import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getPreviewPages, getPublishedPages, StrapiUnavailableError } from "@/lib/strapi";
import type { PageSummary } from "@/types/cms";

export const metadata = {
  title: "CMS Pages Preview | WFYI",
};

function PreviewLink({ page }: { page: PageSummary }) {
  const secret = process.env.STRAPI_PREVIEW_SECRET;

  if (!secret) {
    return <span className="text-sm text-slate-400">Preview disabled</span>;
  }

  return (
    <Link
      href={`/preview${page.path === "/" ? "" : page.path}?secret=${encodeURIComponent(secret)}`}
      className="font-semibold text-slate-950 hover:text-cyan-700"
    >
      Preview
    </Link>
  );
}

export default async function AdminPreviewPage() {
  let pages: PageSummary[] = [];
  let cmsUnavailable = false;

  try {
    const [published, previewable] = await Promise.all([getPublishedPages(), getPreviewPages()]);
    const merged = new Map<string, PageSummary>();

    for (const page of previewable) {
      merged.set(page.documentId ?? `${page.id}`, page);
    }

    for (const page of published) {
      merged.set(page.documentId ?? `${page.id}`, page);
    }

    pages = Array.from(merged.values()).sort((a, b) => a.path.localeCompare(b.path));
  } catch (error) {
    if (error instanceof StrapiUnavailableError) {
      cmsUnavailable = true;
    } else {
      throw error;
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">Developer demo</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-normal text-slate-950">CMS Pages</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Strapi remains the CMS. This page only demonstrates which CMS-managed URLs the frontend can resolve.
            </p>
          </div>
          <Button href="/">View WFYI Home</Button>
        </div>

        {cmsUnavailable ? (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
            Strapi is not reachable at the configured URL. Start the CMS with `npm run develop` in `cms`.
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="hidden grid-cols-[1fr_1fr_auto_auto_auto] gap-4 border-b border-slate-200 px-5 py-3 text-sm font-semibold text-slate-500 md:grid">
              <span>Name</span>
              <span>Path</span>
              <span>Status</span>
              <span>Layout</span>
              <span>Action</span>
            </div>
            {pages.map((page) => {
              const isPublished = Boolean(page.publishedAt);

              return (
                <div
                  key={page.documentId ?? page.id}
                  className="grid gap-3 border-b border-slate-100 px-5 py-4 last:border-b-0 md:grid-cols-[1fr_1fr_auto_auto_auto] md:items-center"
                >
                  <div>
                    <p className="font-semibold text-slate-950">{page.name}</p>
                    <p className="text-sm text-slate-500">{page.pageType ?? "standard"}</p>
                  </div>
                  <p className="font-mono text-sm text-slate-600">{page.path}</p>
                  <span
                    className={`w-fit rounded-md px-3 py-1 text-sm font-semibold ${
                      isPublished ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {isPublished ? "Published" : "Draft"}
                  </span>
                  <p className="text-sm text-slate-500">
                    {page.showNavbar ? "Nav" : "No nav"} / {page.showFooter ? "Footer" : "No footer"}
                  </p>
                  {isPublished ? (
                    <Link href={page.path} className="font-semibold text-slate-950 hover:text-cyan-700">
                      View
                    </Link>
                  ) : (
                    <PreviewLink page={page} />
                  )}
                </div>
              );
            })}
            {pages.length === 0 ? <div className="px-5 py-8 text-slate-600">No CMS pages were returned by Strapi.</div> : null}
          </div>
        )}
      </Container>
    </main>
  );
}
