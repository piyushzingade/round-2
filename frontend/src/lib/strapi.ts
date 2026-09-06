import type { CMSSection, LandingPage, LandingPageSummary } from "@/types/cms";

const DEFAULT_STRAPI_URL = "http://localhost:1337";

type JsonRecord = Record<string, unknown>;

type StrapiListResponse = {
  data?: unknown;
};

export class StrapiUnavailableError extends Error {
  constructor(message = "Strapi is unavailable") {
    super(message);
    this.name = "StrapiUnavailableError";
  }
}

function getStrapiUrl() {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? DEFAULT_STRAPI_URL).replace(/\/$/, "");
}

function getHeaders(): HeadersInit {
  const token = process.env.STRAPI_API_TOKEN;

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function numberValue(value: unknown) {
  return typeof value === "number" ? value : 0;
}

function unwrapEntity(entity: unknown): JsonRecord | null {
  if (!isRecord(entity)) {
    return null;
  }

  const attributes = entity.attributes;

  return isRecord(attributes) ? { ...entity, ...attributes } : entity;
}

function normalizePage(entity: unknown): LandingPage | null {
  const page = unwrapEntity(entity);

  if (!page) {
    return null;
  }

  const name = stringValue(page.name);
  const slug = stringValue(page.slug);

  if (!name || !slug) {
    return null;
  }

  return {
    id: numberValue(page.id),
    documentId: stringValue(page.documentId),
    name,
    slug,
    seoTitle: stringValue(page.seoTitle) ?? null,
    seoDescription: stringValue(page.seoDescription) ?? null,
    publishedAt: stringValue(page.publishedAt) ?? null,
    sections: Array.isArray(page.sections) ? (page.sections as CMSSection[]) : [],
  };
}

function normalizeSummary(entity: unknown): LandingPageSummary | null {
  const page = normalizePage(entity);

  if (!page) {
    return null;
  }

  return {
    id: page.id,
    documentId: page.documentId,
    name: page.name,
    slug: page.slug,
    publishedAt: page.publishedAt,
  };
}

function landingPagePopulateParams() {
  const params = new URLSearchParams();

  params.set("status", "published");
  params.set("populate[sections][on][sections.navbar][populate][links]", "true");
  params.set("populate[sections][on][sections.navbar][populate][cta]", "true");
  params.set("populate[sections][on][sections.hero][populate][primaryCTA]", "true");
  params.set("populate[sections][on][sections.hero][populate][secondaryCTA]", "true");
  params.set("populate[sections][on][sections.feature-grid][populate][features]", "true");
  params.set("populate[sections][on][sections.stats][populate][stats]", "true");
  params.set("populate[sections][on][sections.testimonial][populate]", "*");
  params.set("populate[sections][on][sections.cta][populate][cta]", "true");
  params.set("populate[sections][on][sections.footer][populate][links]", "true");

  return params;
}

async function strapiFetch(path: string, params: URLSearchParams) {
  const url = `${getStrapiUrl()}${path}?${params.toString()}`;

  let response: Response;

  try {
    response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 5 },
    });
  } catch {
    throw new StrapiUnavailableError();
  }

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }

    throw new StrapiUnavailableError(`Strapi request failed with ${response.status}`);
  }

  return (await response.json()) as StrapiListResponse;
}

export async function getLandingPageBySlug(slug: string): Promise<LandingPage | null> {
  const params = landingPagePopulateParams();
  params.set("filters[slug][$eq]", slug);
  params.set("pagination[pageSize]", "1");

  const json = await strapiFetch("/api/landing-pages", params);

  if (!json || !Array.isArray(json.data)) {
    return null;
  }

  return normalizePage(json.data[0]);
}

export async function getLandingPages(): Promise<LandingPageSummary[]> {
  const params = new URLSearchParams();
  params.set("status", "published");
  params.set("fields[0]", "name");
  params.set("fields[1]", "slug");
  params.set("fields[2]", "publishedAt");
  params.set("pagination[pageSize]", "25");
  params.set("sort[0]", "name:asc");

  const json = await strapiFetch("/api/landing-pages", params);

  if (!json || !Array.isArray(json.data)) {
    return [];
  }

  return json.data.map(normalizeSummary).filter((page): page is LandingPageSummary => Boolean(page));
}
