import type { Core } from '@strapi/strapi';

type SeedPage = {
  name: string;
  slug: string;
  path: string;
  pageType: string;
  template: string;
  showNavbar: boolean;
  showFooter: boolean;
  seoTitle: string;
  seoDescription: string;
  canonicalURL?: string;
  noIndex?: boolean;
  openGraphTitle?: string;
  openGraphDescription?: string;
  sections: Array<Record<string, unknown>>;
};

const siteSettings = {
  brandName: 'WFYI',
  brandDescription:
    'We Follow Your Imagination. Shaping the future of enterprise with AI and financial intelligence.',
  defaultSeoTitle: 'WFYI Technology | Finance, Tax and Compliance Intelligence',
  defaultSeoDescription:
    'WFYI Technology builds AI-assisted finance, tax, GST, legal, compliance and managed services workflows.',
  canonicalBaseUrl: 'https://wfyi.ai',
  navbar: {
    logoText: 'WFYI',
    navigationItems: [
      {
        label: 'Products',
        type: 'dropdown',
        children: [
          { label: 'FylFlix', url: '/products/fylflix' },
          { label: 'Compliance Hub', url: '/gst' },
        ],
      },
      {
        label: 'Solutions',
        type: 'dropdown',
        children: [
          { label: 'Tax and GST', url: '/gst' },
          { label: 'Legal Services', url: '/legal' },
          { label: 'Business Registration', url: '/start-a-business' },
        ],
      },
      {
        label: 'Company',
        type: 'dropdown',
        children: [
          { label: 'About', url: '/about' },
          { label: 'Careers', url: '/careers' },
        ],
      },
      { label: 'Resources', type: 'link', url: '/resources/gst-guide' },
    ],
    cta: { label: 'Talk to us', url: '/contact' },
    secondaryCTA: { label: 'See FylFlix', url: '/products/fylflix', openInNewTab: false },
  },
  footer: {
    companyName: 'WFYI',
    description:
      'We Follow Your Imagination. AI-assisted finance, tax, legal and compliance workflows for modern businesses.',
    linkGroups: [
      {
        title: 'Products',
        links: [{ label: 'FylFlix', url: '/products/fylflix' }],
      },
      {
        title: 'Resources',
        links: [
          { label: 'GST Guide', url: '/resources/gst-guide' },
          { label: 'Tax and Compliance', url: '/gst' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', url: '/about' },
          { label: 'Careers', url: '/careers' },
          { label: 'Contact', url: '/contact' },
        ],
      },
    ],
    legalLinks: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Use', url: '/terms' },
      { label: 'Data Deletion', url: '/data-deletion' },
    ],
    copyright: '2026 WFYI Technology Pvt. Ltd. All rights reserved.',
  },
};

const pages: SeedPage[] = [
  {
    name: 'Home',
    slug: 'home',
    path: '/',
    pageType: 'standard',
    template: 'marketing',
    showNavbar: true,
    showFooter: true,
    seoTitle: 'WFYI Technology | Finance, Tax and Compliance Intelligence',
    seoDescription:
      'Start, manage and grow with legal, tax, GST and compliance covered through WFYI and FylFlix.',
    openGraphTitle: 'WFYI Technology',
    openGraphDescription: 'Finance, tax and compliance - intelligently connected.',
    sections: [
      {
        __component: 'sections.hero',
        isVisible: true,
        variant: 'product',
        eyebrow: 'WFYI Technology',
        headline: 'Start, manage and grow with legal, tax and compliance covered.',
        description:
          'FylFlix brings tax, legal, registrations and managed finance workflows into one structured operating layer for growing teams.',
        primaryCTA: { label: 'See what FylFlix does', url: '/products/fylflix' },
        secondaryCTA: { label: 'Talk to us', url: '/contact' },
        trustItems: ['GST workflows', 'ITR support', 'Legal services', 'Managed finance'],
      },
      {
        __component: 'sections.logo-cloud',
        isVisible: true,
        title: 'Built around trust, security and professional oversight',
        logos: [
          { name: 'Compliance-first workflows', alt: 'Compliance-first workflows' },
          { name: 'Financial expert review', alt: 'Financial expert review' },
          { name: 'Secure document handling', alt: 'Secure document handling' },
          { name: 'AI-assisted operations', alt: 'AI-assisted operations' },
        ],
      },
      {
        __component: 'sections.service-grid',
        isVisible: true,
        eyebrow: 'Inside FylFlix',
        title: 'Five practices. One controlled experience.',
        description:
          'Sample service categories for the CMS demo. Replace these with verified operational data in production.',
        cards: [
          {
            icon: 'legal',
            badge: 'Legal',
            title: 'Legal Documents',
            description: 'Templates and professional workflows for contracts, notices and business documents.',
            link: { label: 'Explore legal', url: '/legal' },
          },
          {
            icon: 'tax',
            badge: 'Tax',
            title: 'Tax and GST Compliance',
            description: 'Structured flows for GST, ITR, TDS and recurring compliance tasks.',
            link: { label: 'Explore GST', url: '/gst' },
          },
          {
            icon: 'registration',
            badge: 'Registration',
            title: 'Business Registration',
            description: 'Guided registration workflows for founders and operators starting new entities.',
            link: { label: 'Start a business', url: '/start-a-business' },
          },
          {
            icon: 'finance',
            badge: 'Managed',
            title: 'Managed Financial Services',
            description: 'Bookkeeping, CFO support and finance operating cadence for growing teams.',
            link: { label: 'View services', url: '/managed-services' },
          },
        ],
      },
      {
        __component: 'sections.product-showcase',
        isVisible: true,
        eyebrow: 'Built by WFYI',
        title: 'One company. Practical finance workflows.',
        description: 'FylFlix is the first product surface in this demo page-builder architecture.',
        products: [
          {
            name: 'FylFlix Compliance Hub',
            description: 'A service index and workflow hub for tax, GST, legal and registration tasks.',
            url: '/products/fylflix',
            cta: { label: 'See FylFlix', url: '/products/fylflix' },
            features: ['Service discovery', 'Document workflows', 'Professional handoff'],
          },
          {
            name: 'Tally Connector',
            description: 'A conceptual WFYI surface for connecting business finance data to compliance workflows.',
            url: '/products/fylflix',
            cta: { label: 'Learn more', url: '/products/fylflix' },
            features: ['Ledger sync', 'GST review', 'Operational visibility'],
          },
        ],
      },
      {
        __component: 'sections.faq',
        isVisible: true,
        eyebrow: 'FAQs',
        title: 'Before you ask.',
        description: 'A controlled FAQ section that Marketing can add, remove and reorder in Strapi.',
        items: [
          {
            question: 'What does WFYI build?',
            answer:
              'WFYI builds AI-assisted workflows for finance, tax, GST, legal, compliance and managed financial services.',
          },
          {
            question: 'Can Marketing change this page without React changes?',
            answer:
              'Yes. The CMS controls content and section order. React and Tailwind continue to control layout, styling and behavior.',
          },
          {
            question: 'Can editors add arbitrary styles?',
            answer:
              'No. Editors choose approved components and variants only; arbitrary CSS, HTML, JavaScript and Tailwind classes are not stored in the CMS.',
          },
        ],
      },
      {
        __component: 'sections.cta',
        isVisible: true,
        variant: 'dark',
        eyebrow: 'Ready when you are',
        headline: 'Clarity, in one click.',
        description:
          'Create a page in Strapi, publish it, and let the WFYI frontend renderer keep the experience consistent.',
        primaryCTA: { label: 'Talk to us', url: '/contact' },
        secondaryCTA: { label: 'Explore GST', url: '/gst' },
        cta: { label: 'Talk to us', url: '/contact' },
      },
    ],
  },
  {
    name: 'Careers',
    slug: 'careers',
    path: '/careers',
    pageType: 'careers',
    template: 'careers',
    showNavbar: true,
    showFooter: true,
    seoTitle: 'Careers at WFYI Technology',
    seoDescription: 'Join WFYI Technology and help build finance, tax, legal and compliance products.',
    sections: [
      {
        __component: 'sections.hero',
        isVisible: true,
        variant: 'minimal',
        eyebrow: 'Careers',
        headline: 'Build the financial operating layer for ambitious teams.',
        description:
          'Join a small team working across AI-assisted finance, tax, legal and compliance workflows.',
        primaryCTA: { label: 'View open roles', url: '#open-roles' },
      },
      {
        __component: 'sections.feature-grid',
        isVisible: true,
        variant: '3-column',
        eyebrow: 'Culture',
        title: 'The work is practical, exacting and user-first.',
        description: 'A lightweight values section for the CMS demo. Replace with real hiring copy as needed.',
        features: [
          {
            icon: 'workflow',
            title: 'Own useful problems',
            description: 'Work on financial workflows where clarity and reliability matter.',
          },
          {
            icon: 'shield',
            title: 'Build with trust',
            description: 'Compliance and secure handling shape product decisions from the start.',
          },
          {
            icon: 'users',
            title: 'Stay close to users',
            description: 'Design for founders, finance teams, tax professionals and legal operators.',
          },
        ],
      },
      {
        __component: 'sections.job-list',
        isVisible: true,
        eyebrow: 'Open roles',
        title: 'Current openings',
        description: 'Sample roles for the MVP; connect a real ATS later if needed.',
        jobs: [
          {
            title: 'Frontend Engineer',
            location: 'India / Remote',
            employmentType: 'full-time',
            description: 'Build responsive interfaces for CMS-driven marketing and product surfaces.',
            requirements: ['React and TypeScript', 'Strong UX judgment', 'Accessibility fundamentals'],
            jobId: 'WFYI-FE-001',
            applyURL: '/contact',
            status: 'open',
          },
          {
            title: 'Compliance Operations Specialist',
            location: 'Bengaluru',
            employmentType: 'full-time',
            description: 'Help shape workflows across tax, GST and managed finance operations.',
            requirements: ['Tax or compliance operations', 'Clear written communication'],
            jobId: 'WFYI-OPS-001',
            applyURL: '/contact',
            status: 'open',
          },
        ],
      },
      {
        __component: 'sections.cta',
        isVisible: true,
        variant: 'minimal',
        headline: 'Do thoughtful work with practical impact.',
        description: 'Tell us what you want to build at WFYI.',
        cta: { label: 'Contact hiring', url: '/contact' },
      },
    ],
  },
  {
    name: 'About WFYI',
    slug: 'about-wfyi',
    path: '/about',
    pageType: 'standard',
    template: 'standard',
    showNavbar: true,
    showFooter: true,
    seoTitle: 'About WFYI Technology',
    seoDescription: 'WFYI Technology builds AI-assisted products for finance, tax, legal and compliance teams.',
    sections: [
      {
        __component: 'sections.section-header',
        isVisible: true,
        alignment: 'center',
        eyebrow: 'About WFYI',
        title: 'We Follow Your Imagination.',
        description:
          'WFYI Technology builds intelligent tools for finance, tax, real estate, legal and compliance teams.',
      },
      {
        __component: 'sections.rich-text',
        isVisible: true,
        title: 'Our direction',
        content:
          'WFYI focuses on practical workflows where business operators need speed, clarity and professional accountability.\n\n## Focus areas\n- Finance and tax workflows\n- GST and ITR support journeys\n- Legal and registration services\n- Managed financial operations',
      },
      {
        __component: 'sections.cta',
        isVisible: true,
        variant: 'default',
        headline: 'Explore the platform approach.',
        description: 'Reusable CMS sections let teams create pages without creating new route files.',
        cta: { label: 'View FylFlix', url: '/products/fylflix' },
      },
    ],
  },
  {
    name: 'GST Campaign',
    slug: 'gst-campaign',
    path: '/gst',
    pageType: 'campaign',
    template: 'campaign',
    showNavbar: false,
    showFooter: true,
    seoTitle: 'GST Compliance Workflows | WFYI',
    seoDescription: 'A sample GST campaign page built from approved WFYI CMS sections.',
    sections: [
      {
        __component: 'sections.hero',
        isVisible: true,
        variant: 'split',
        eyebrow: 'GST and Tax Compliance',
        headline: 'Compliance without the operational chaos.',
        description:
          'Create campaign pages for GST, ITR and tax workflows in Strapi while the WFYI frontend keeps every section polished.',
        primaryCTA: { label: 'Book a compliance walkthrough', url: '/contact' },
        secondaryCTA: { label: 'Read GST guide', url: '/resources/gst-guide' },
        trustItems: ['GST registration', 'TDS returns', 'ITR workflows', 'Compliance calendar'],
      },
      {
        __component: 'sections.stats',
        isVisible: true,
        eyebrow: 'Workflow proof',
        title: 'Use verified metrics only.',
        stats: [
          {
            value: '5',
            label: 'service practices',
            description: 'Sample category count used for this CMS demo.',
          },
          {
            value: '1',
            label: 'page renderer',
            description: 'Every CMS path resolves through one frontend renderer.',
          },
          {
            value: '0',
            label: 'custom route files',
            description: 'Marketing can publish this page without a dedicated React route.',
          },
        ],
      },
      {
        __component: 'sections.service-grid',
        isVisible: true,
        title: 'Common compliance workflows',
        description: 'CMS-editable cards with approved icon and layout options.',
        cards: [
          {
            icon: 'tax',
            title: 'GST Registration',
            description: 'Guide users through GST registration requirements and document collection.',
            link: { label: 'Start GST', url: '/contact' },
          },
          {
            icon: 'workflow',
            title: 'TDS Return Filing',
            description: 'Create recurring compliance campaign pages without touching frontend code.',
            link: { label: 'Talk to us', url: '/contact' },
          },
          {
            icon: 'finance',
            title: 'Income Tax Notice Reply',
            description: 'Explain complex service journeys with consistent CMS-managed sections.',
            link: { label: 'Get help', url: '/contact' },
          },
        ],
      },
      {
        __component: 'sections.faq',
        isVisible: true,
        title: 'GST questions',
        items: [
          {
            question: 'Can this campaign hide the navbar?',
            answer: 'Yes. This sample page has showNavbar turned off while retaining the global footer.',
          },
          {
            question: 'Can Marketing add this FAQ section?',
            answer: 'Yes. FAQ is an approved Dynamic Zone component rendered through the central registry.',
          },
        ],
      },
      {
        __component: 'sections.cta',
        isVisible: true,
        variant: 'brand',
        headline: 'Build the next compliance page safely.',
        description: 'Editors control content and order. Engineering controls the system.',
        cta: { label: 'Contact WFYI', url: '/contact' },
      },
    ],
  },
  {
    name: 'GST Guide',
    slug: 'gst-guide',
    path: '/resources/gst-guide',
    pageType: 'standard',
    template: 'content',
    showNavbar: true,
    showFooter: true,
    seoTitle: 'GST Guide | WFYI Resources',
    seoDescription: 'A sample nested CMS page for GST resource content.',
    sections: [
      {
        __component: 'sections.section-header',
        isVisible: true,
        alignment: 'left',
        eyebrow: 'Resources',
        title: 'GST guide for growing teams',
        description:
          'This nested page proves that /resources/gst-guide resolves through the CMS path system.',
      },
      {
        __component: 'sections.sidebar-layout',
        isVisible: true,
        variant: 'sticky',
        sidebarTitle: 'In this guide',
        sidebarItems: [
          { label: 'Overview', url: '#overview', icon: 'document' },
          { label: 'Registration', url: '#registration', icon: 'tax' },
          { label: 'Compliance', url: '#compliance', icon: 'finance' },
        ],
        content:
          '## Overview\nGST workflows need accurate data, documents and deadlines. A CMS resource page lets Marketing keep guidance current without editing React files.\n\n## Registration\nUse structured sections for service pages and longer rich text for explanatory resources.\n\n## Compliance\nThe frontend sanitizes and formats CMS rich text into a controlled typography system.',
      },
      {
        __component: 'sections.cta',
        isVisible: true,
        variant: 'minimal',
        headline: 'Need help with GST workflows?',
        description: 'Talk to WFYI about structuring compliance operations.',
        cta: { label: 'Contact us', url: '/contact' },
      },
    ],
  },
  {
    name: 'Partner Campaign Draft',
    slug: 'partner-campaign-draft',
    path: '/partners/summer',
    pageType: 'campaign',
    template: 'campaign',
    showNavbar: false,
    showFooter: false,
    seoTitle: 'Draft Partner Campaign | WFYI',
    seoDescription: 'Draft sample that should not render publicly until published.',
    noIndex: true,
    sections: [
      {
        __component: 'sections.hero',
        isVisible: true,
        variant: 'minimal',
        eyebrow: 'Draft campaign',
        headline: 'This draft should not be publicly visible.',
        description: 'Use preview mode with a server-side secret to inspect draft content.',
        primaryCTA: { label: 'Preview only', url: '/contact' },
      },
    ],
  },
];

async function seedSiteSettings(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::site-setting.site-setting' as never).findFirst({
    status: 'draft',
  });

  if (existing) {
    return;
  }

  await strapi.documents('api::site-setting.site-setting' as never).create({
    data: siteSettings as never,
    status: 'published',
  });
}

async function seedPages(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::landing-page.landing-page').findMany({
    fields: ['path'] as never,
    status: 'draft',
    limit: 200,
  });
  const existingPaths = new Set(
    existing.map((page) => (page as { path?: string }).path).filter(Boolean)
  );

  for (const page of pages) {
    if (existingPaths.has(page.path)) {
      continue;
    }

    await strapi.documents('api::landing-page.landing-page').create({
      data: page as never,
      status: page.slug === 'partner-campaign-draft' ? 'draft' : 'published',
    });
  }
}

async function enablePublicRead(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    return;
  }

  const roleService = strapi.plugin('users-permissions').service('role');
  const role = await roleService.findOne(publicRole.id);

  await roleService.updateRole(publicRole.id, {
    ...role,
    permissions: {
      ...role.permissions,
      'api::landing-page': {
        controllers: {
          'landing-page': {
            find: { enabled: true, policy: '' },
            findOne: { enabled: true, policy: '' },
          },
        },
      },
      'api::site-setting': {
        controllers: {
          'site-setting': {
            find: { enabled: true, policy: '' },
          },
        },
      },
    },
  });
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await enablePublicRead(strapi);
    await seedSiteSettings(strapi);
    await seedPages(strapi);
  },
};
