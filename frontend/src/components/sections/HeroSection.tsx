import Image from "next/image";
import type { HeroSection as HeroSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

function HeroActions({ data }: { data: HeroSectionType }) {
  if (!data.primaryCTA && !data.secondaryCTA) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {data.primaryCTA ? (
        <Button href={data.primaryCTA.url} size="lg" target={data.primaryCTA.openInNewTab ? "_blank" : undefined}>
          {data.primaryCTA.label}
        </Button>
      ) : null}
      {data.secondaryCTA ? (
        <Button
          href={data.secondaryCTA.url}
          variant="outline"
          size="lg"
          target={data.secondaryCTA.openInNewTab ? "_blank" : undefined}
        >
          {data.secondaryCTA.label}
        </Button>
      ) : null}
    </div>
  );
}

function ProductPanel({ data }: { data: HeroSectionType }) {
  const imageSource = getImageSource(data.image, data.imageUrl);
  const imageSize = getImageSize(data.image);

  if (imageSource) {
    return (
      <Image
        src={imageSource}
        alt={getImageAlt(data.image, data.imageAlt)}
        width={imageSize.width}
        height={imageSize.height}
        priority
        className="aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover shadow-sm"
      />
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="rounded-md border border-slate-200 bg-slate-950 p-4 text-white">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-sm font-semibold text-cyan-200">FylFlix service index</span>
          <span className="rounded-md bg-white/10 px-2 py-1 text-xs">Live model</span>
        </div>
        <div className="grid gap-3">
          {["Legal Documents", "Tax and Compliance", "Business Registration", "Managed Services"].map(
            (label, index) => (
              <div key={label} className="flex items-center justify-between rounded-md bg-white/5 px-4 py-3">
                <span className="text-sm text-slate-200">{label}</span>
                <span className="text-sm font-semibold text-white">{[168, 31, 13, 5][index]}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ data }: { data: HeroSectionType }) {
  const isCentered = data.variant === "centered";
  const isMinimal = data.variant === "minimal";
  const trustItems = Array.isArray(data.trustItems) ? data.trustItems : [];

  return (
    <Section className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] pb-20 pt-14 sm:pt-20">
      <Container>
        <div
          className={
            isCentered || isMinimal
              ? "mx-auto max-w-4xl text-center"
              : "grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]"
          }
        >
          <div className={isCentered || isMinimal ? "flex flex-col items-center" : ""}>
            {data.eyebrow ? (
              <p className="mb-5 inline-flex rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-cyan-700">
                {data.eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              {data.headline}
            </h1>
            {data.description ? (
              <p className={`mt-6 max-w-2xl text-lg leading-8 text-slate-600 ${isCentered || isMinimal ? "mx-auto" : ""}`}>
                {data.description}
              </p>
            ) : null}
            <div className={`mt-8 ${isCentered || isMinimal ? "flex justify-center" : ""}`}>
              <HeroActions data={data} />
            </div>
            {trustItems.length > 0 ? (
              <div className={`mt-8 flex flex-wrap gap-2 ${isCentered || isMinimal ? "justify-center" : ""}`}>
                {trustItems.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {!isCentered && !isMinimal ? (
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-cyan-100/50" aria-hidden="true" />
              <div className="relative">
                <ProductPanel data={data} />
                {data.imageCaption ? <p className="mt-3 text-sm text-slate-500">{data.imageCaption}</p> : null}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
