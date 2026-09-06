export type CMSImage = {
  url: string;
  alternativeText?: string | null;
  width?: number | null;
  height?: number | null;
};

export type CTA = {
  id?: number;
  label: string;
  url: string;
  openInNewTab?: boolean | null;
};

export type LinkItem = {
  id?: number;
  label: string;
  url: string;
};

export type NavItem = {
  id?: number;
  label: string;
  url?: string | null;
  type?: "link" | "dropdown" | null;
  children?: LinkItem[];
};

export type FeatureIcon =
  | "shield"
  | "workflow"
  | "chart"
  | "users"
  | "lock"
  | "spark"
  | "tax"
  | "legal"
  | "registration"
  | "finance"
  | "security"
  | "document";

type BaseSection = {
  id?: number;
  __component: string;
  isVisible?: boolean | null;
};

export type NavbarSection = BaseSection & {
  __component: "sections.navbar";
  logoText: string;
  logo?: CMSImage | null;
  logoImageUrl?: string | null;
  navigationItems?: NavItem[];
  links?: LinkItem[];
  cta?: CTA | null;
  secondaryCTA?: CTA | null;
};

export type FooterSection = BaseSection & {
  __component: "sections.footer";
  companyName: string;
  description?: string | null;
  linkGroups?: Array<{
    id?: number;
    title: string;
    links?: LinkItem[];
  }>;
  links?: LinkItem[];
  legalLinks?: LinkItem[];
  copyright?: string | null;
};

export type HeroSection = BaseSection & {
  __component: "sections.hero";
  variant: "centered" | "split" | "product" | "minimal";
  eyebrow?: string | null;
  headline: string;
  description?: string | null;
  primaryCTA?: CTA | null;
  secondaryCTA?: CTA | null;
  image?: CMSImage | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  imageCaption?: string | null;
  trustItems?: string[] | null;
};

export type SectionHeaderSection = BaseSection & {
  __component: "sections.section-header";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  alignment?: "left" | "center" | null;
};

export type FeatureGridSection = BaseSection & {
  __component: "sections.feature-grid";
  variant?: "3-column" | "2-column" | "icon-cards" | "minimal" | null;
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  features?: Array<{
    id?: number;
    icon?: FeatureIcon | null;
    title: string;
    description: string;
    link?: CTA | null;
  }>;
};

export type ImageContentSection = BaseSection & {
  __component: "sections.image-content";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  image?: CMSImage | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  cta?: CTA | null;
  imagePosition?: "left" | "right" | null;
};

export type StatsSection = BaseSection & {
  __component: "sections.stats";
  eyebrow?: string | null;
  title?: string | null;
  stats?: Array<{
    id?: number;
    value: string;
    label: string;
    description?: string | null;
  }>;
};

export type TestimonialItem = {
  id?: number;
  quote: string;
  personName?: string | null;
  customerName?: string | null;
  role?: string | null;
  customerRole?: string | null;
  company?: string | null;
  image?: CMSImage | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  highlight?: string | null;
};

export type TestimonialSection = BaseSection &
  TestimonialItem & {
    __component: "sections.testimonial";
  };

export type TestimonialsSection = BaseSection & {
  __component: "sections.testimonials";
  eyebrow?: string | null;
  title?: string | null;
  testimonials?: TestimonialItem[];
};

export type LogoCloudSection = BaseSection & {
  __component: "sections.logo-cloud";
  title?: string | null;
  logos?: Array<{
    id?: number;
    name: string;
    image?: CMSImage | null;
    alt?: string | null;
    url?: string | null;
  }>;
};

export type ServiceGridSection = BaseSection & {
  __component: "sections.service-grid";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  cards?: Array<{
    id?: number;
    icon?: FeatureIcon | null;
    title: string;
    description?: string | null;
    link?: CTA | null;
    badge?: string | null;
  }>;
};

export type ProductShowcaseSection = BaseSection & {
  __component: "sections.product-showcase";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  products?: Array<{
    id?: number;
    name: string;
    description?: string | null;
    image?: CMSImage | null;
    imageUrl?: string | null;
    url?: string | null;
    cta?: CTA | null;
    features?: string[] | null;
  }>;
};

export type FAQSection = BaseSection & {
  __component: "sections.faq";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  items?: Array<{
    id?: number;
    question: string;
    answer: string;
  }>;
};

export type RichTextSection = BaseSection & {
  __component: "sections.rich-text";
  eyebrow?: string | null;
  title?: string | null;
  content: string;
};

export type SidebarLayoutSection = BaseSection & {
  __component: "sections.sidebar-layout";
  sidebarTitle: string;
  sidebarItems?: Array<{
    id?: number;
    label: string;
    url: string;
    icon?: FeatureIcon | null;
  }>;
  content: string;
  variant?: "sticky" | "standard" | null;
};

export type JobListSection = BaseSection & {
  __component: "sections.job-list";
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  jobs?: Array<{
    id?: number;
    title: string;
    location?: string | null;
    employmentType?: "full-time" | "part-time" | "contract" | "internship" | null;
    description?: string | null;
    requirements?: string[] | null;
    jobId?: string | null;
    applyURL?: string | null;
    status?: "open" | "closed" | null;
  }>;
};

export type CTASection = BaseSection & {
  __component: "sections.cta";
  variant: "default" | "brand" | "dark" | "minimal" | "light";
  eyebrow?: string | null;
  headline: string;
  description?: string | null;
  cta?: CTA | null;
  primaryCTA?: CTA | null;
  secondaryCTA?: CTA | null;
};

export type KnownSection =
  | NavbarSection
  | FooterSection
  | HeroSection
  | SectionHeaderSection
  | FeatureGridSection
  | ImageContentSection
  | StatsSection
  | TestimonialSection
  | TestimonialsSection
  | LogoCloudSection
  | ServiceGridSection
  | ProductShowcaseSection
  | FAQSection
  | RichTextSection
  | SidebarLayoutSection
  | JobListSection
  | CTASection;

export type UnknownSection = BaseSection & Record<string, unknown>;

export type CMSSection = KnownSection | UnknownSection;

export type CMSPage = {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  path: string;
  pageType?: "standard" | "landing" | "campaign" | "article-index" | "careers" | "legal" | null;
  template?: "standard" | "marketing" | "careers" | "content" | "campaign" | null;
  showNavbar: boolean;
  showFooter: boolean;
  seoTitle?: string | null;
  seoDescription?: string | null;
  canonicalURL?: string | null;
  noIndex?: boolean | null;
  openGraphTitle?: string | null;
  openGraphDescription?: string | null;
  openGraphImage?: CMSImage | null;
  publishedAt?: string | null;
  sections: CMSSection[];
};

export type SiteSettings = {
  brandName: string;
  brandDescription?: string | null;
  defaultSeoTitle?: string | null;
  defaultSeoDescription?: string | null;
  canonicalBaseUrl?: string | null;
  openGraphImage?: CMSImage | null;
  navbar?: NavbarSection | null;
  footer?: FooterSection | null;
};

export type PageSummary = Pick<
  CMSPage,
  "id" | "documentId" | "name" | "slug" | "path" | "pageType" | "publishedAt" | "showNavbar" | "showFooter"
>;
