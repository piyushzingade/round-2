import type { CMSImage, CMSPage, CMSSection, PageSummary, SiteSettings } from "@/types/cms";

const DEFAULT_STRAPI_URL = "http://localhost:1337";
const RESERVED_PREFIXES = ["/api", "/admin-preview", "/_next", "/favicon.ico", "/landing", "/preview"];

type JsonRecord = Record<string, unknown>;
type ContentStatus = "published" | "draft";

type StrapiResponse = {
  data?: unknown;
};

export class StrapiUnavailableError extends Error {
  constructor(message = "Strapi is unavailable") {
    super(message);
    this.name = "StrapiUnavailableError";
  }
}

export function normalizeCmsPath(path: string) {
  const trimmed = path.trim().toLowerCase();
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const collapsed = withSlash.replace(/\/+/g, "/");

  return collapsed.length > 1 ? collapsed.replace(/\/$/, "") : "/";
}

export function isReservedCmsPath(path: string) {
  const normalized = normalizeCmsPath(path);

  return RESERVED_PREFIXES.some((prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`));
}

function getStrapiUrl() {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? DEFAULT_STRAPI_URL).replace(/\/$/, "");
}

function getHeaders(status: ContentStatus): HeadersInit {
  const headers: Record<string, string> = {};
  const token = process.env.STRAPI_API_TOKEN;
  const previewSecret = process.env.STRAPI_PREVIEW_SECRET;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (status === "draft" && previewSecret) {
    headers["x-preview-secret"] = previewSecret;
  }

  return headers;
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function unwrapEntity(entity: unknown): JsonRecord | null {
  if (!isRecord(entity)) {
    return null;
  }

  const attributes = entity.attributes;

  return isRecord(attributes) ? { ...entity, ...attributes } : entity;
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function numberValue(value: unknown) {
  return typeof value === "number" ? value : 0;
}

function booleanValue(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function normalizeImage(value: unknown): CMSImage | null {
  const media = unwrapEntity(value);

  if (!media) {
    return null;
  }

  const url = stringValue(media.url);

  if (!url) {
    return null;
  }

  const absoluteUrl = url.startsWith("http") ? url : `${getStrapiUrl()}${url}`;

  return {
    url: absoluteUrl,
    alternativeText: stringValue(media.alternativeText) ?? null,
    width: typeof media.width === "number" ? media.width : null,
    height: typeof media.height === "number" ? media.height : null,
  };
}

function normalizeImagesInObject<T extends JsonRecord>(value: T): T {
  const image = normalizeImage(value.image);
  const logo = normalizeImage(value.logo);
  const openGraphImage = normalizeImage(value.openGraphImage);

  return {
    ...value,
    ...(image ? { image } : {}),
    ...(logo ? { logo } : {}),
    ...(openGraphImage ? { openGraphImage } : {}),
  };
}

function normalizeSection(section: unknown): CMSSection | null {
  const value = unwrapEntity(section);

  if (!value || typeof value.__component !== "string") {
    return null;
  }

  return normalizeImagesInObject(value) as CMSSection;
}

function normalizePage(entity: unknown): CMSPage | null {
  const page = normalizeImagesInObject(unwrapEntity(entity) ?? {});
  const name = stringValue(page.name);
  const slug = stringValue(page.slug);
  const path = stringValue(page.path);

  if (!name || !slug || !path) {
    return null;
  }

  return {
    id: numberValue(page.id),
    documentId: stringValue(page.documentId),
    name,
    slug,
    path,
    pageType: stringValue(page.pageType) as CMSPage["pageType"],
    template: stringValue(page.template) as CMSPage["template"],
    showNavbar: booleanValue(page.showNavbar, true),
    showFooter: booleanValue(page.showFooter, true),
    seoTitle: stringValue(page.seoTitle) ?? null,
    seoDescription: stringValue(page.seoDescription) ?? null,
    canonicalURL: stringValue(page.canonicalURL) ?? null,
    noIndex: booleanValue(page.noIndex, false),
    openGraphTitle: stringValue(page.openGraphTitle) ?? null,
    openGraphDescription: stringValue(page.openGraphDescription) ?? null,
    openGraphImage: normalizeImage(page.openGraphImage),
    publishedAt: stringValue(page.publishedAt) ?? null,
    sections: Array.isArray(page.sections)
      ? page.sections.map(normalizeSection).filter((section): section is CMSSection => Boolean(section))
      : [],
  };
}

function normalizeSummary(entity: unknown): PageSummary | null {
  const page = normalizePage(entity);

  if (!page) {
    return null;
  }

  return {
    id: page.id,
    documentId: page.documentId,
    name: page.name,
    slug: page.slug,
    path: page.path,
    pageType: page.pageType,
    publishedAt: page.publishedAt,
    showNavbar: page.showNavbar,
    showFooter: page.showFooter,
  };
}

function normalizeSiteSettings(entity: unknown): SiteSettings | null {
  const settings = normalizeImagesInObject(unwrapEntity(entity) ?? {});
  const brandName = stringValue(settings.brandName);

  if (!brandName) {
    return null;
  }

  return {
    brandName,
    brandDescription: stringValue(settings.brandDescription) ?? null,
    defaultSeoTitle: stringValue(settings.defaultSeoTitle) ?? null,
    defaultSeoDescription: stringValue(settings.defaultSeoDescription) ?? null,
    canonicalBaseUrl: stringValue(settings.canonicalBaseUrl) ?? null,
    openGraphImage: normalizeImage(settings.openGraphImage),
    navbar: normalizeSection(settings.navbar) as SiteSettings["navbar"],
    footer: normalizeSection(settings.footer) as SiteSettings["footer"],
  };
}

function pagePopulateParams(status: ContentStatus) {
  const params = new URLSearchParams();

  params.set("status", status);
  params.set("populate[openGraphImage]", "true");
  params.set("populate[sections][on][sections.hero][populate]", "*");
  params.set("populate[sections][on][sections.section-header][populate]", "*");
  params.set("populate[sections][on][sections.feature-grid][populate][features][populate][link]", "true");
  params.set("populate[sections][on][sections.image-content][populate]", "*");
  params.set("populate[sections][on][sections.stats][populate][stats]", "true");
  params.set("populate[sections][on][sections.testimonial][populate]", "*");
  params.set("populate[sections][on][sections.testimonials][populate][testimonials][populate]", "*");
  params.set("populate[sections][on][sections.logo-cloud][populate][logos][populate][image]", "true");
  params.set("populate[sections][on][sections.service-grid][populate][cards][populate][link]", "true");
  params.set("populate[sections][on][sections.product-showcase][populate][products][populate]", "*");
  params.set("populate[sections][on][sections.faq][populate][items]", "true");
  params.set("populate[sections][on][sections.rich-text][populate]", "*");
  params.set("populate[sections][on][sections.sidebar-layout][populate][sidebarItems]", "true");
  params.set("populate[sections][on][sections.job-list][populate][jobs]", "true");
  params.set("populate[sections][on][sections.cta][populate]", "*");

  return params;
}

function siteSettingsParams() {
  const params = new URLSearchParams();

  params.set("status", "published");
  params.set("populate[openGraphImage]", "true");
  params.set("populate[navbar][populate][logo]", "true");
  params.set("populate[navbar][populate][navigationItems][populate][children]", "true");
  params.set("populate[navbar][populate][cta]", "true");
  params.set("populate[navbar][populate][secondaryCTA]", "true");
  params.set("populate[footer][populate][linkGroups][populate][links]", "true");
  params.set("populate[footer][populate][legalLinks]", "true");
  params.set("populate[footer][populate][links]", "true");

  return params;
}

async function strapiFetch(path: string, params: URLSearchParams, status: ContentStatus = "published") {
  const url = `${getStrapiUrl()}${path}?${params.toString()}`;

  let response: Response;

  try {
    response = await fetch(url, {
      headers: getHeaders(status),
      next: { revalidate: status === "published" ? 5 : 0 },
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

  return (await response.json()) as StrapiResponse;
}

export async function getPageByPath(path: string, status: ContentStatus = "published"): Promise<CMSPage | null> {
  const normalizedPath = normalizeCmsPath(path);

  if (isReservedCmsPath(normalizedPath)) {
    return null;
  }

  const params = pagePopulateParams(status);
  params.set("filters[path][$eq]", normalizedPath);
  params.set("pagination[pageSize]", "1");

  const json = await strapiFetch("/api/landing-pages", params, status);

  if (!json || !Array.isArray(json.data)) {
    return null;
  }

  return normalizePage(json.data[0]);
}

export async function getLandingPageBySlug(slug: string): Promise<CMSPage | null> {
  const params = pagePopulateParams("published");
  params.set("filters[slug][$eq]", slug);
  params.set("pagination[pageSize]", "1");

  const json = await strapiFetch("/api/landing-pages", params);

  if (!json || !Array.isArray(json.data)) {
    return null;
  }

  return normalizePage(json.data[0]);
}

export async function getPublishedPages(): Promise<PageSummary[]> {
  const params = new URLSearchParams();
  params.set("status", "published");
  params.set("fields[0]", "name");
  params.set("fields[1]", "slug");
  params.set("fields[2]", "path");
  params.set("fields[3]", "pageType");
  params.set("fields[4]", "publishedAt");
  params.set("fields[5]", "showNavbar");
  params.set("fields[6]", "showFooter");
  params.set("pagination[pageSize]", "100");
  params.set("sort[0]", "path:asc");

  const json = await strapiFetch("/api/landing-pages", params);

  if (!json || !Array.isArray(json.data)) {
    return [];
  }

  return json.data.map(normalizeSummary).filter((page): page is PageSummary => Boolean(page));
}

export async function getPreviewPages(): Promise<PageSummary[]> {
  const params = new URLSearchParams();
  params.set("status", "draft");
  params.set("fields[0]", "name");
  params.set("fields[1]", "slug");
  params.set("fields[2]", "path");
  params.set("fields[3]", "pageType");
  params.set("fields[4]", "publishedAt");
  params.set("fields[5]", "showNavbar");
  params.set("fields[6]", "showFooter");
  params.set("pagination[pageSize]", "100");
  params.set("sort[0]", "path:asc");

  const json = await strapiFetch("/api/landing-pages", params, "draft");

  if (!json || !Array.isArray(json.data)) {
    return [];
  }

  return json.data.map(normalizeSummary).filter((page): page is PageSummary => Boolean(page));
}

export async function getGlobalSiteSettings(): Promise<SiteSettings | null> {
  const json = await strapiFetch("/api/site-setting", siteSettingsParams());

  return normalizeSiteSettings(json?.data);
}

export const getLandingPages = getPublishedPages;
