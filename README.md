# CMS-Driven Landing Page MVP

This repo demonstrates a small landing-page system where Marketing and Sales edit content in Strapi while Engineering controls the visual system in Next.js, React, TypeScript, and Tailwind.

## Problem

Marketing teams often need developers for every landing-page headline, CTA, image, section order, or campaign page. That slows campaigns down and turns content edits into engineering work.

## Solution

Strapi stores structured content: page names, slugs, SEO fields, section order, section visibility, copy, CTAs, and image URLs. Next.js renders that content through approved React components and shared Tailwind primitives. Marketing controls what appears; the frontend controls how it looks.

```text
Marketing
   ↓
Strapi
   ↓
API
   ↓
Next.js
   ↓
PageRenderer
   ↓
Component Registry
   ↓
Design System
```

## Why This Scales

1,000 landing pages should not mean 1,000 React page files.

```text
1 renderer
+
reusable components
+
1,000 CMS records
```

The MVP includes a single dynamic route, `/landing/[slug]`, so new published Strapi records render without adding frontend routes.

## Running Locally

Use Node 20, 22, 23, 24, or 25 for best Strapi SQLite compatibility.

Terminal 1:

```bash
cd cms
cp .env.example .env
npm install
npm run develop
```

Open Strapi at [http://localhost:1337](http://localhost:1337), create the first admin user, and open Content Manager > Landing Pages. The project seeds:

- AI Platform
- AI for Healthcare
- Sales Automation

Terminal 2:

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Healthcare demo: [http://localhost:3000/landing/ai-for-healthcare](http://localhost:3000/landing/ai-for-healthcare)
- Page list: [http://localhost:3000/admin-preview](http://localhost:3000/admin-preview)

## Demo Flow

1. Open Strapi.
2. Open `AI for Healthcare`.
3. Change the hero headline from `AI built for modern healthcare teams` to `Transform healthcare operations with AI`.
4. Change the primary CTA from `Learn More` to `Book a Demo`.
5. Optionally add, remove, or reorder an approved section.
6. Publish.
7. Refresh `/landing/ai-for-healthcare`.
8. The content updates while the design remains consistent.

To prove scalability, create a new Strapi Landing Page with slug `ai-for-financial-services`, add approved sections, publish it, and open `/landing/ai-for-financial-services`. No new React route is required.

## Adding a Component

1. Create a Strapi component under `cms/src/components/sections`.
2. Add it to the Landing Page Dynamic Zone in `cms/src/api/landing-page/content-types/landing-page/schema.json`.
3. Create the matching React section component in `frontend/src/components/sections`.
4. Add its type to `frontend/src/types/cms.ts`.
5. Register it in `frontend/src/lib/componentRegistry.ts`.

The CMS should store content and approved variants only. Do not store Tailwind classes, raw HTML, arbitrary colors, or layout values in Strapi.

## Future Production Architecture

This MVP intentionally does not implement production infrastructure. A production version could add PostgreSQL, CDN caching, object storage, Strapi webhooks, Next.js revalidation, RBAC, preview mode, monitoring, and backups.
