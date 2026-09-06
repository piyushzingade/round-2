import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CMSPageView } from "@/components/CMSPageView";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGlobalSiteSettings, getPageByPath, StrapiUnavailableError } from "@/lib/strapi";

type CmsPathPageProps = {
  params: Promise<{ path?: string[] }>;
};

function pathFromParams(path?: string[]) {
  return path && path.length > 0 ? `/${path.join("/")}` : "/";
}

function buildMetadataTitle(pageTitle?: string | null, fallback?: string | null) {
  return pageTitle ?? fallback ?? "WFYI Technology";
}

export async function generateMetadata({ params }: CmsPathPageProps): Promise<Metadata> {
  const { path } = await params;
  const cmsPath = pathFromParams(path);

  try {
    const [page, settings] = await Promise.all([getPageByPath(cmsPath), getGlobalSiteSettings()]);

    if (!page) {
      return {
        title: "Page not found | WFYI",
      };
    }

    const title = buildMetadataTitle(page.seoTitle, settings?.defaultSeoTitle);
    const description = page.seoDescription ?? settings?.defaultSeoDescription ?? undefined;
    const canonical = page.canonicalURL ?? `${settings?.canonicalBaseUrl ?? ""}${page.path}`;
    const ogTitle = page.openGraphTitle ?? title;
    const ogDescription = page.openGraphDescription ?? description;
    const ogImage = page.openGraphImage ?? settings?.openGraphImage;

    return {
      title,
      description,
      alternates: canonical ? { canonical } : undefined,
      robots: page.noIndex ? { index: false, follow: false } : undefined,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: canonical,
        images: ogImage ? [{ url: ogImage.url, width: ogImage.width ?? undefined, height: ogImage.height ?? undefined }] : undefined,
      },
    };
  } catch {
    return {
      title: "CMS unavailable | WFYI",
    };
  }
}

function CMSUnavailable() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50">
      <Container className="max-w-2xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">CMS unavailable</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">Start Strapi to view WFYI pages</h1>
          <p className="mt-4 leading-7 text-slate-600">
            The frontend is running, but it cannot reach the Strapi API. Start the CMS from the `cms` folder and refresh.
          </p>
          <div className="mt-6">
            <Button href="/admin-preview" variant="outline">
              View page list
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default async function CmsPathPage({ params }: CmsPathPageProps) {
  const { path } = await params;
  const cmsPath = pathFromParams(path);
  let page;
  let settings;

  try {
    [page, settings] = await Promise.all([getPageByPath(cmsPath), getGlobalSiteSettings()]);
  } catch (error) {
    if (error instanceof StrapiUnavailableError) {
      return <CMSUnavailable />;
    }

    throw error;
  }

  if (!page) {
    notFound();
  }

  return <CMSPageView page={page} settings={settings} />;
}
