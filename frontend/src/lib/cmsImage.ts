import type { CMSImage } from "@/types/cms";

export function getImageSource(image?: CMSImage | null, imageUrl?: string | null) {
  return image?.url ?? imageUrl ?? null;
}

export function getImageAlt(image?: CMSImage | null, fallback?: string | null) {
  return fallback ?? image?.alternativeText ?? "";
}

export function getImageSize(image?: CMSImage | null, fallbackWidth = 1200, fallbackHeight = 900) {
  return {
    width: image?.width ?? fallbackWidth,
    height: image?.height ?? fallbackHeight,
  };
}
