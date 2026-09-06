import type { ComponentType } from "react";
import type {
  CMSSection,
  CTASection,
  FAQSection,
  FeatureGridSection,
  FooterSection,
  HeroSection,
  ImageContentSection,
  JobListSection,
  LogoCloudSection,
  NavbarSection,
  ProductShowcaseSection,
  RichTextSection,
  SectionHeaderSection,
  ServiceGridSection,
  SidebarLayoutSection,
  StatsSection,
  TestimonialSection,
  TestimonialsSection,
} from "@/types/cms";
import { CTASection as CTASectionComponent } from "@/components/sections/CTASection";
import { FAQSection as FAQSectionComponent } from "@/components/sections/FAQSection";
import { FeatureGridSection as FeatureGridSectionComponent } from "@/components/sections/FeatureGridSection";
import { FooterSection as FooterSectionComponent } from "@/components/sections/FooterSection";
import { HeroSection as HeroSectionComponent } from "@/components/sections/HeroSection";
import { ImageContentSection as ImageContentSectionComponent } from "@/components/sections/ImageContentSection";
import { JobListSection as JobListSectionComponent } from "@/components/sections/JobListSection";
import { LogoCloudSection as LogoCloudSectionComponent } from "@/components/sections/LogoCloudSection";
import { NavbarSection as NavbarSectionComponent } from "@/components/sections/NavbarSection";
import { ProductShowcaseSection as ProductShowcaseSectionComponent } from "@/components/sections/ProductShowcaseSection";
import { RichTextSection as RichTextSectionComponent } from "@/components/sections/RichTextSection";
import { SectionHeaderSection as SectionHeaderSectionComponent } from "@/components/sections/SectionHeaderSection";
import { ServiceGridSection as ServiceGridSectionComponent } from "@/components/sections/ServiceGridSection";
import { SidebarLayoutSection as SidebarLayoutSectionComponent } from "@/components/sections/SidebarLayoutSection";
import { StatsSection as StatsSectionComponent } from "@/components/sections/StatsSection";
import {
  TestimonialSection as TestimonialSectionComponent,
  TestimonialsSection as TestimonialsSectionComponent,
} from "@/components/sections/TestimonialSection";

type SectionComponent<TSection extends CMSSection> = ComponentType<{ data: TSection }>;

export const componentRegistry = {
  "sections.navbar": NavbarSectionComponent as SectionComponent<NavbarSection>,
  "sections.footer": FooterSectionComponent as SectionComponent<FooterSection>,
  "sections.hero": HeroSectionComponent as SectionComponent<HeroSection>,
  "sections.section-header": SectionHeaderSectionComponent as SectionComponent<SectionHeaderSection>,
  "sections.feature-grid": FeatureGridSectionComponent as SectionComponent<FeatureGridSection>,
  "sections.image-content": ImageContentSectionComponent as SectionComponent<ImageContentSection>,
  "sections.stats": StatsSectionComponent as SectionComponent<StatsSection>,
  "sections.testimonial": TestimonialSectionComponent as SectionComponent<TestimonialSection>,
  "sections.testimonials": TestimonialsSectionComponent as SectionComponent<TestimonialsSection>,
  "sections.logo-cloud": LogoCloudSectionComponent as SectionComponent<LogoCloudSection>,
  "sections.service-grid": ServiceGridSectionComponent as SectionComponent<ServiceGridSection>,
  "sections.product-showcase": ProductShowcaseSectionComponent as SectionComponent<ProductShowcaseSection>,
  "sections.faq": FAQSectionComponent as SectionComponent<FAQSection>,
  "sections.rich-text": RichTextSectionComponent as SectionComponent<RichTextSection>,
  "sections.sidebar-layout": SidebarLayoutSectionComponent as SectionComponent<SidebarLayoutSection>,
  "sections.job-list": JobListSectionComponent as SectionComponent<JobListSection>,
  "sections.cta": CTASectionComponent as SectionComponent<CTASection>,
};

export type RegisteredComponent = keyof typeof componentRegistry;

export function isRegisteredComponent(component: string): component is RegisteredComponent {
  return component in componentRegistry;
}
