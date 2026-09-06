import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getLandingPages, StrapiUnavailableError } from "@/lib/strapi";
import type { LandingPageSummary } from "@/types/cms";

export const metadata = {
  title: "Landing Pages Preview | AtlasIQ",
};

export default async function AdminPreviewPage() {
  let pages: LandingPageSummary[] = [];
  let cmsUnavailable = false;

  try {
    pages = await getLandingPages();
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
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">Frontend preview</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-normal text-slate-950">Landing Pages</h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              This is a small frontend index for demos. Strapi remains the CMS where content is created, edited, and published.
            </p>
          </div>
          <Button href="/landing/ai-for-healthcare">View Healthcare Page</Button>
        </div>

        {cmsUnavailable ? (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
            Strapi is not reachable at the configured URL. Start the CMS with `npm run develop` in `cms`.
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-slate-200 px-5 py-3 text-sm font-semibold text-slate-500">
              <span>Name</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {pages.map((page) => (
              <div key={page.documentId ?? page.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4">
                <div>
                  <p className="font-semibold text-slate-950">{page.name}</p>
                  <p className="text-sm text-slate-500">/landing/{page.slug}</p>
                </div>
                <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Published</span>
                <Link href={`/landing/${page.slug}`} className="font-semibold text-slate-950 hover:text-cyan-700">
                  View
                </Link>
              </div>
            ))}
            {pages.length === 0 ? (
              <div className="px-5 py-8 text-slate-600">No published landing pages were returned by Strapi.</div>
            ) : null}
          </div>
        )}
      </Container>
    </main>
  );
}
