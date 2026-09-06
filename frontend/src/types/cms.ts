export type CTA = {
  id?: number;
  label: string;
  url: string;
};

export type LinkItem = {
  id?: number;
  label: string;
  url: string;
};

export type FeatureIcon = "shield" | "workflow" | "chart" | "users" | "lock" | "spark";

type BaseSection = {
  id?: number;
  __component: string;
};

export type NavbarSection = BaseSection & {
  __component: "sections.navbar";
  logoText: string;
  logoImageUrl?: string | null;
  links?: LinkItem[];
  cta?: CTA | null;
};

export type HeroSection = BaseSection & {
  __component: "sections.hero";
  variant: "centered" | "split";
  eyebrow?: string | null;
  headline: string;
  description?: string | null;
  primaryCTA?: CTA | null;
  secondaryCTA?: CTA | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export type FeatureGridSection = BaseSection & {
  __component: "sections.feature-grid";
  title: string;
  description?: string | null;
  features?: Array<{
    id?: number;
    icon?: FeatureIcon | null;
    title: string;
    description: string;
  }>;
};

export type StatsSection = BaseSection & {
  __component: "sections.stats";
  title?: string | null;
  stats?: Array<{
    id?: number;
    value: string;
    label: string;
  }>;
};

export type TestimonialSection = BaseSection & {
  __component: "sections.testimonial";
  quote: string;
  customerName: string;
  customerRole?: string | null;
  company?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export type CTASection = BaseSection & {
  __component: "sections.cta";
  variant: "light" | "brand";
  headline: string;
  description?: string | null;
  cta?: CTA | null;
};

export type FooterSection = BaseSection & {
  __component: "sections.footer";
  companyName: string;
  links?: LinkItem[];
  copyright?: string | null;
};

export type KnownSection =
  | NavbarSection
  | HeroSection
  | FeatureGridSection
  | StatsSection
  | TestimonialSection
  | CTASection
  | FooterSection;

export type UnknownSection = BaseSection & Record<string, unknown>;

export type CMSSection = KnownSection | UnknownSection;

export type LandingPage = {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  publishedAt?: string | null;
  sections: CMSSection[];
};

export type LandingPageSummary = Pick<
  LandingPage,
  "id" | "documentId" | "name" | "slug" | "publishedAt"
>;
