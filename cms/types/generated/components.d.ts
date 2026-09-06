import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['light', 'brand']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'brand'>;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    displayName: 'Feature Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    copyright: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.footer-link', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Primary landing page hero with approved layout variants.';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    primaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    variant: Schema.Attribute.Enumeration<['centered', 'split']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'split'>;
  };
}

export interface SectionsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_sections_navbars';
  info: {
    description: 'Top navigation. Marketing controls labels and destinations only.';
    displayName: 'Navbar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-link', false>;
    links: Schema.Attribute.Component<'shared.nav-link', true>;
    logoImageUrl: Schema.Attribute.String;
    logoText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    company: Schema.Attribute.String;
    customerName: Schema.Attribute.String & Schema.Attribute.Required;
    customerRole: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedCtaLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_links';
  info: {
    description: 'Approved call-to-action content. Styling is controlled by the frontend.';
    displayName: 'CTA Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      ['shield', 'workflow', 'chart', 'users', 'lock', 'spark']
    > &
      Schema.Attribute.DefaultTo<'spark'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.cta': SectionsCta;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.navbar': SectionsNavbar;
      'sections.stats': SectionsStats;
      'sections.testimonial': SectionsTestimonial;
      'shared.cta-link': SharedCtaLink;
      'shared.feature-item': SharedFeatureItem;
      'shared.footer-link': SharedFooterLink;
      'shared.nav-link': SharedNavLink;
      'shared.stat-item': SharedStatItem;
    }
  }
}
