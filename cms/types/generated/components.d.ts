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
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    primaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    variant: Schema.Attribute.Enumeration<
      ['default', 'brand', 'dark', 'minimal', 'light']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'brand'>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    displayName: 'Feature Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['3-column', '2-column', 'icon-cards', 'minimal']
    > &
      Schema.Attribute.DefaultTo<'3-column'>;
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
    description: Schema.Attribute.Text;
    legalLinks: Schema.Attribute.Component<'shared.footer-link', true>;
    linkGroups: Schema.Attribute.Component<'shared.link-group', true>;
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
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageCaption: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    primaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
    trustItems: Schema.Attribute.JSON;
    variant: Schema.Attribute.Enumeration<
      ['centered', 'split', 'product', 'minimal']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'split'>;
  };
}

export interface SectionsImageContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_contents';
  info: {
    displayName: 'Image + Content';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-link', false>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    imageUrl: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsJobList extends Struct.ComponentSchema {
  collectionName: 'components_sections_job_lists';
  info: {
    displayName: 'Careers / Jobs Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    jobs: Schema.Attribute.Component<'shared.job-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_clouds';
  info: {
    displayName: 'Logo / Trust Section';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    logos: Schema.Attribute.Component<'shared.logo-item', true>;
    title: Schema.Attribute.String;
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
    logo: Schema.Attribute.Media<'images'>;
    logoImageUrl: Schema.Attribute.String;
    logoText: Schema.Attribute.String & Schema.Attribute.Required;
    navigationItems: Schema.Attribute.Component<'shared.nav-item', true>;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-link', false>;
  };
}

export interface SectionsProductShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_showcases';
  info: {
    displayName: 'Product Showcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    products: Schema.Attribute.Component<'shared.product-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich Text / Content';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_headers';
  info: {
    displayName: 'Section Header';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServiceGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_grids';
  info: {
    displayName: 'Cards / Service Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.service-card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSidebarLayout extends Struct.ComponentSchema {
  collectionName: 'components_sections_sidebar_layouts';
  info: {
    displayName: 'Sidebar Layout';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sidebarItems: Schema.Attribute.Component<'shared.sidebar-item', true>;
    sidebarTitle: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['sticky', 'standard']> &
      Schema.Attribute.DefaultTo<'sticky'>;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
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
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    personName: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_blocks';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    testimonials: Schema.Attribute.Component<'sections.testimonial', true>;
    title: Schema.Attribute.String;
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
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
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
    link: Schema.Attribute.Component<'shared.cta-link', false>;
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

export interface SharedJobItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_job_items';
  info: {
    displayName: 'Job Item';
  };
  attributes: {
    applyURL: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    employmentType: Schema.Attribute.Enumeration<
      ['full-time', 'part-time', 'contract', 'internship']
    > &
      Schema.Attribute.DefaultTo<'full-time'>;
    jobId: Schema.Attribute.String;
    location: Schema.Attribute.String;
    requirements: Schema.Attribute.JSON;
    status: Schema.Attribute.Enumeration<['open', 'closed']> &
      Schema.Attribute.DefaultTo<'open'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_groups';
  info: {
    displayName: 'Link Group';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.footer-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_items';
  info: {
    displayName: 'Logo Item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    description: 'Top-level navigation item. Dropdown behavior is controlled by React.';
    displayName: 'Navigation Item';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.nav-link', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['link', 'dropdown']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link'>;
    url: Schema.Attribute.String;
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

export interface SharedProductItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_items';
  info: {
    displayName: 'Product Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-link', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['tax', 'legal', 'registration', 'finance', 'security', 'workflow']
    > &
      Schema.Attribute.DefaultTo<'workflow'>;
    link: Schema.Attribute.Component<'shared.cta-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSidebarItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebar_items';
  info: {
    displayName: 'Sidebar Item';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['document', 'tax', 'legal', 'finance', 'security']
    > &
      Schema.Attribute.DefaultTo<'document'>;
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
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.image-content': SectionsImageContent;
      'sections.job-list': SectionsJobList;
      'sections.logo-cloud': SectionsLogoCloud;
      'sections.navbar': SectionsNavbar;
      'sections.product-showcase': SectionsProductShowcase;
      'sections.rich-text': SectionsRichText;
      'sections.section-header': SectionsSectionHeader;
      'sections.service-grid': SectionsServiceGrid;
      'sections.sidebar-layout': SectionsSidebarLayout;
      'sections.stats': SectionsStats;
      'sections.testimonial': SectionsTestimonial;
      'sections.testimonials': SectionsTestimonials;
      'shared.cta-link': SharedCtaLink;
      'shared.faq-item': SharedFaqItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.footer-link': SharedFooterLink;
      'shared.job-item': SharedJobItem;
      'shared.link-group': SharedLinkGroup;
      'shared.logo-item': SharedLogoItem;
      'shared.nav-item': SharedNavItem;
      'shared.nav-link': SharedNavLink;
      'shared.product-item': SharedProductItem;
      'shared.service-card': SharedServiceCard;
      'shared.sidebar-item': SharedSidebarItem;
      'shared.stat-item': SharedStatItem;
    }
  }
}
