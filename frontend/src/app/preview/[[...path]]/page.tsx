import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CMSPageView } from "@/components/CMSPageView";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGlobalSiteSettings, getPageByPath, StrapiUnavailableError } from "@/lib/strapi";

type PreviewPageProps = {
  params: Promise<{ path?: string[] }>;
  searchParams: Promise<{ secret?: string }>;
};

function pathFromParams(path?: string[]) {
  return path && path.length > 0 ? `/${path.join("/")}` : "/";
}

export const metadata: Metadata = {
  title: "Preview | WFYI",
  robots: {
    index: false,
    follow: false,
  },
};

function PreviewDenied() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50">
      <Container className="max-w-2xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">Preview locked</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">Draft preview requires a secret</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Public visitors cannot access draft CMS content. Use a preview URL with the configured server-side secret.
          </p>
          <div className="mt-6">
            <Button href="/admin-preview" variant="outline">
              Back to page list
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default async function PreviewPage({ params, searchParams }: PreviewPageProps) {
  const [{ path }, { secret }] = await Promise.all([params, searchParams]);

  if (!process.env.STRAPI_PREVIEW_SECRET || secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return <PreviewDenied />;
  }

  let page;
  let settings;

  try {
    [page, settings] = await Promise.all([getPageByPath(pathFromParams(path), "draft"), getGlobalSiteSettings()]);
  } catch (error) {
    if (error instanceof StrapiUnavailableError) {
      return <PreviewDenied />;
    }

    throw error;
  }

  if (!page) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-amber-200 bg-amber-50 px-5 py-2 text-center text-sm font-semibold text-amber-950">
        Draft preview
      </div>
      <CMSPageView page={page} settings={settings} />
    </>
  );
}
