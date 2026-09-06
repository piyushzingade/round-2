# CMS-Driven Website MVP

This repo demonstrates a small CMS-driven page system for WFYI Technology and its FylFlix compliance platform. Marketing and Sales manage structured content in Strapi while Engineering controls the page renderer, component library, and Tailwind design system in Next.js.

## Problem

Marketing teams often need developers for page copy, CTAs, images, section order, service pages, resource pages, and campaign pages. That slows launches down and turns routine content changes into engineering work.

## Solution

Strapi stores structured page content: paths, SEO fields, visibility toggles, approved sections, section order, copy, CTAs, and media. Next.js fetches published CMS content and renders it through reusable React components. Editors control what appears; the frontend controls how it looks.

```text
Marketing / Sales
   ↓
Strapi CMS
   ↓
Structured Page Content
   ↓
Strapi API
   ↓
Next.js
   ↓
PageRenderer
   ↓
Component Registry
   ↓
Design System
```

## What Is Included

- Strapi 5 Community Edition with SQLite for local development.
- A `Page` collection using Draft & Publish and a Dynamic Zone of approved sections.
- A `Site Setting` single type for global brand, default SEO, navbar, and footer content.
- Centralized Next.js catch-all routing with `[[...path]]`, so CMS records can own `/`, `/about`, `/careers`, `/gst`, and `/resources/gst-guide`.
- A legacy `/landing/[slug]` route that redirects old slug-based records to their CMS-managed path.
- A small `/admin-preview` frontend page that lists CMS pages and links to published or draft views.
- A secure local draft preview route at `/preview/...` using `STRAPI_PREVIEW_SECRET`.
- Reusable section components for hero, headers, features, services, stats, testimonials, image/content, logo cloud, FAQ, rich text, sidebar resources, jobs, CTA, navbar, and footer.

## Why This Scales

1,000 pages does not mean 1,000 React files.

```text
1 route resolver
+
1 renderer
+
reusable components
+
1,000 CMS records
```

Adding a new page is a content operation in Strapi. Engineers only get involved when the team wants a new approved component or variant.

## Running Locally

Use Node 20, 22, 23, 24, or 25 for best Strapi SQLite compatibility.

Terminal 1:

```bash
cd cms
cp .env.example .env
npm install
npm run develop
```

Open Strapi at [http://localhost:1337](http://localhost:1337), create the first admin user, and open Content Manager. The bootstrap script seeds:

- `/` - WFYI Technology home
- `/about` - company overview
- `/careers` - hiring page
- `/gst` - focused GST campaign page
- `/resources/gst-guide` - nested resource page
- `/partners/summer` - draft campaign page

Terminal 2:

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open:

- Frontend: [http://localhost:3000](http://localhost:3000)
- GST campaign: [http://localhost:3000/gst](http://localhost:3000/gst)
- GST guide: [http://localhost:3000/resources/gst-guide](http://localhost:3000/resources/gst-guide)
- Page list: [http://localhost:3000/admin-preview](http://localhost:3000/admin-preview)

## Environment

Frontend:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
STRAPI_PREVIEW_SECRET=local-preview-secret
```

CMS:

```bash
STRAPI_PREVIEW_SECRET=local-preview-secret
```

No paid services are required. The API token is optional for local public-read development.

## Demo Flow

1. Open Strapi.
2. Open the published page at `/gst` or `/`.
3. Change the hero headline or CTA text.
4. Add, remove, hide, or reorder an approved section.
5. Publish.
6. Refresh the matching frontend URL.
7. The content updates while layout, spacing, typography, colors, and component behavior remain controlled by React and Tailwind.

To prove the scaling model, create a new Strapi Page with path `/financial-services`, add approved sections, publish it, and open [http://localhost:3000/financial-services](http://localhost:3000/financial-services). No new React route file is required.

## CMS Rules

Editors can control:

- page name and path
- SEO title and description
- navbar/footer visibility
- section order and visibility
- approved component variants
- copy, CTAs, links, media, alt text, and captions

Editors cannot control:

- arbitrary CSS
- Tailwind class names
- raw HTML
- JavaScript
- custom margins, colors, font sizes, or layout positioning

## Adding a Component

1. Create a Strapi section component under `cms/src/components/sections`.
2. Add it to the Page Dynamic Zone in `cms/src/api/landing-page/content-types/landing-page/schema.json`.
3. Create the matching React section component in `frontend/src/components/sections`.
4. Add its TypeScript shape in `frontend/src/types/cms.ts`.
5. Register it in `frontend/src/lib/componentRegistry.ts`.

The CMS should store content and approved variants only. Styling decisions stay in the frontend.

## Future Production Architecture

This MVP intentionally avoids production infrastructure. A production version could add:

- PostgreSQL
- CDN caching
- object storage or Cloudinary for media
- Strapi webhooks and Next.js revalidation
- RBAC and approvals
- richer authenticated preview
- monitoring, backups, and audit trails
