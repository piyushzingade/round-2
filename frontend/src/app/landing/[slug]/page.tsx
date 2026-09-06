import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/PageRenderer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getLandingPageBySlug, StrapiUnavailableError } from "@/lib/strapi";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const page = await getLandingPageBySlug(slug);

    if (!page) {
      return {
        title: "Landing page not found",
      };
    }

    return {
      title: page.seoTitle ?? page.name,
      description: page.seoDescription ?? undefined,
    };
  } catch {
    return {
      title: "Landing page unavailable",
    };
  }
}

function CMSUnavailable() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50">
      <Container className="max-w-2xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">CMS unavailable</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">Start Strapi to view this page</h1>
          <p className="mt-4 leading-7 text-slate-600">
            The frontend is working, but it cannot reach the Strapi API. Run `npm run develop` in the `cms` folder,
            then refresh this route.
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

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  let page;

  try {
    page = await getLandingPageBySlug(slug);
  } catch (error) {
    if (error instanceof StrapiUnavailableError) {
      return <CMSUnavailable />;
    }

    throw error;
  }

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageRenderer sections={page.sections} />
    </main>
  );
}
