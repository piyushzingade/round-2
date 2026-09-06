import type { Core } from '@strapi/strapi';

const landingPages = [
  {
    name: 'AI Platform',
    slug: 'ai-platform',
    seoTitle: 'AI Platform | AtlasIQ',
    seoDescription: 'A governed AI platform for enterprise teams building reliable automation.',
    sections: [
      {
        __component: 'sections.navbar',
        logoText: 'AtlasIQ',
        links: [
          { label: 'Platform', url: '/landing/ai-platform' },
          { label: 'Healthcare', url: '/landing/ai-for-healthcare' },
          { label: 'Sales', url: '/landing/sales-automation' },
        ],
        cta: { label: 'Book a Demo', url: '/demo' },
      },
      {
        __component: 'sections.hero',
        variant: 'centered',
        eyebrow: 'Enterprise AI Platform',
        headline: 'Launch trusted AI workflows without losing governance',
        description:
          'AtlasIQ gives teams reusable AI building blocks, observability, and approval paths for production work.',
        primaryCTA: { label: 'Start Building', url: '/signup' },
        secondaryCTA: { label: 'View Healthcare Demo', url: '/landing/ai-for-healthcare' },
      },
      {
        __component: 'sections.feature-grid',
        title: 'Designed for teams that need control',
        description: 'Reusable capabilities help every department move faster without fragmenting the brand or stack.',
        features: [
          {
            icon: 'workflow',
            title: 'Reusable workflows',
            description: 'Package repeatable AI tasks into approved workflows that teams can launch safely.',
          },
          {
            icon: 'shield',
            title: 'Governed outputs',
            description: 'Review, monitor, and improve AI-assisted work from one operational layer.',
          },
          {
            icon: 'chart',
            title: 'Operational visibility',
            description: 'Track usage and outcomes so leaders can understand what is working.',
          },
        ],
      },
      {
        __component: 'sections.cta',
        variant: 'brand',
        headline: 'Build the AI operating layer your teams can trust',
        description: 'Start with one workflow and expand department by department.',
        cta: { label: 'Talk to Sales', url: '/demo' },
      },
      {
        __component: 'sections.footer',
        companyName: 'AtlasIQ',
        links: [
          { label: 'Privacy', url: '/privacy' },
          { label: 'Security', url: '/security' },
          { label: 'Contact', url: '/contact' },
        ],
        copyright: '2026 AtlasIQ. All rights reserved.',
      },
    ],
  },
  {
    name: 'AI for Healthcare',
    slug: 'ai-for-healthcare',
    seoTitle: 'AI for Healthcare Teams | AtlasIQ',
    seoDescription: 'Help healthcare operations teams coordinate work, protect consistency, and move faster with AI.',
    sections: [
      {
        __component: 'sections.navbar',
        logoText: 'AtlasIQ',
        links: [
          { label: 'Platform', url: '/landing/ai-platform' },
          { label: 'Solutions', url: '#features' },
          { label: 'Results', url: '#results' },
        ],
        cta: { label: 'Book a Demo', url: '/demo' },
      },
      {
        __component: 'sections.hero',
        variant: 'split',
        eyebrow: 'AI for Healthcare Operations',
        headline: 'AI built for modern healthcare teams',
        description:
          'Coordinate intake, documentation, and follow-up workflows with approved AI components that keep clinical and operations teams aligned.',
        primaryCTA: { label: 'Learn More', url: '/demo' },
        secondaryCTA: { label: 'See Platform', url: '/landing/ai-platform' },
        imageUrl:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Healthcare team reviewing operational data',
      },
      {
        __component: 'sections.feature-grid',
        title: 'Give every campaign the same trusted foundation',
        description:
          'Marketing can adjust the message for each audience while product and design keep the experience consistent.',
        features: [
          {
            icon: 'lock',
            title: 'Approved messaging blocks',
            description: 'Structure high-converting pages with content fields instead of free-form layout control.',
          },
          {
            icon: 'workflow',
            title: 'Faster campaign launches',
            description: 'Create, reorder, and publish healthcare-specific sections without waiting on a sprint.',
          },
          {
            icon: 'users',
            title: 'Consistent buyer journeys',
            description: 'Keep CTAs, spacing, and hierarchy reliable across every healthcare landing page.',
          },
        ],
      },
      {
        __component: 'sections.stats',
        title: 'Built for measurable operating impact',
        stats: [
          { value: '42%', label: 'faster campaign updates' },
          { value: '10K+', label: 'monthly workflows supported' },
          { value: '99.9%', label: 'frontend uptime target' },
        ],
      },
      {
        __component: 'sections.testimonial',
        quote:
          'Our marketing team can tailor healthcare campaigns in Strapi, publish updates, and still know every page will look like our product.',
        customerName: 'Maya Chen',
        customerRole: 'VP of Growth',
        company: 'Northstar Health',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        imageAlt: 'Portrait of Maya Chen',
      },
      {
        __component: 'sections.cta',
        variant: 'brand',
        headline: 'Ready to launch healthcare campaigns faster?',
        description: 'Give Marketing control over content while Engineering protects the system.',
        cta: { label: 'Book a Demo', url: '/demo' },
      },
      {
        __component: 'sections.footer',
        companyName: 'AtlasIQ',
        links: [
          { label: 'Platform', url: '/landing/ai-platform' },
          { label: 'Security', url: '/security' },
          { label: 'Contact', url: '/contact' },
        ],
        copyright: '2026 AtlasIQ. All rights reserved.',
      },
    ],
  },
  {
    name: 'Sales Automation',
    slug: 'sales-automation',
    seoTitle: 'Sales Automation Landing Pages | AtlasIQ',
    seoDescription: 'Reusable landing page components for sales-led AI automation campaigns.',
    sections: [
      {
        __component: 'sections.navbar',
        logoText: 'AtlasIQ',
        links: [
          { label: 'Platform', url: '/landing/ai-platform' },
          { label: 'Healthcare', url: '/landing/ai-for-healthcare' },
          { label: 'Sales', url: '/landing/sales-automation' },
        ],
        cta: { label: 'Talk to Sales', url: '/demo' },
      },
      {
        __component: 'sections.hero',
        variant: 'split',
        eyebrow: 'AI for Revenue Teams',
        headline: 'Turn sales playbooks into repeatable AI workflows',
        description:
          'Help reps personalize outreach, summarize accounts, and follow up faster with governed landing-page campaigns.',
        primaryCTA: { label: 'Talk to Sales', url: '/demo' },
        secondaryCTA: { label: 'Explore Platform', url: '/landing/ai-platform' },
        imageUrl:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Revenue team discussing sales automation',
      },
      {
        __component: 'sections.stats',
        title: 'Built for lean growth teams',
        stats: [
          { value: '3x', label: 'more campaign variants' },
          { value: '60%', label: 'less developer dependency' },
          { value: '1', label: 'shared renderer' },
        ],
      },
      {
        __component: 'sections.cta',
        variant: 'light',
        headline: 'Create the next sales campaign in Strapi',
        description: 'Add approved sections, publish, and let the frontend renderer do the rest.',
        cta: { label: 'View Demo Page', url: '/landing/sales-automation' },
      },
      {
        __component: 'sections.footer',
        companyName: 'AtlasIQ',
        links: [
          { label: 'Privacy', url: '/privacy' },
          { label: 'Contact', url: '/contact' },
        ],
        copyright: '2026 AtlasIQ. All rights reserved.',
      },
    ],
  },
];

async function seedLandingPages(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::landing-page.landing-page').findMany({
    fields: ['slug'],
    status: 'draft',
    limit: 100,
  });
  const existingSlugs = new Set(existing.map((page) => page.slug));

  for (const page of landingPages) {
    if (existingSlugs.has(page.slug)) {
      continue;
    }

    await strapi.documents('api::landing-page.landing-page').create({
      data: page as never,
      status: 'published',
    });
  }
}

async function enablePublicLandingPageRead(strapi: Core.Strapi) {
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
    },
  });
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await enablePublicLandingPageRead(strapi);
    await seedLandingPages(strapi);
  },
};
