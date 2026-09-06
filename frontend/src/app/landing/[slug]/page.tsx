import { notFound, redirect } from "next/navigation";
import { getLandingPageBySlug } from "@/lib/strapi";

type LegacyLandingPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyLandingPage({ params }: LegacyLandingPageProps) {
  const { slug } = await params;
  const page = await getLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  redirect(page.path);
}
