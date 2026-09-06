import type { ComponentType } from "react";
import type {
  CMSSection,
  CTASection,
  FeatureGridSection,
  FooterSection,
  HeroSection,
  NavbarSection,
  StatsSection,
  TestimonialSection,
} from "@/types/cms";
import { CTASection as CTASectionComponent } from "@/components/sections/CTASection";
import { FeatureGridSection as FeatureGridSectionComponent } from "@/components/sections/FeatureGridSection";
import { FooterSection as FooterSectionComponent } from "@/components/sections/FooterSection";
import { HeroSection as HeroSectionComponent } from "@/components/sections/HeroSection";
import { NavbarSection as NavbarSectionComponent } from "@/components/sections/NavbarSection";
import { StatsSection as StatsSectionComponent } from "@/components/sections/StatsSection";
import { TestimonialSection as TestimonialSectionComponent } from "@/components/sections/TestimonialSection";

type SectionComponent<TSection extends CMSSection> = ComponentType<{ data: TSection }>;

export const componentRegistry = {
  "sections.navbar": NavbarSectionComponent as SectionComponent<NavbarSection>,
  "sections.hero": HeroSectionComponent as SectionComponent<HeroSection>,
  "sections.feature-grid": FeatureGridSectionComponent as SectionComponent<FeatureGridSection>,
  "sections.stats": StatsSectionComponent as SectionComponent<StatsSection>,
  "sections.testimonial": TestimonialSectionComponent as SectionComponent<TestimonialSection>,
  "sections.cta": CTASectionComponent as SectionComponent<CTASection>,
  "sections.footer": FooterSectionComponent as SectionComponent<FooterSection>,
};

export type RegisteredComponent = keyof typeof componentRegistry;

export function isRegisteredComponent(component: string): component is RegisteredComponent {
  return component in componentRegistry;
}
