/* eslint-disable @next/next/no-img-element */
import type { HeroSection as HeroSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

function HeroActions({ data }: { data: HeroSectionType }) {
  if (!data.primaryCTA && !data.secondaryCTA) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {data.primaryCTA ? (
        <Button href={data.primaryCTA.url} size="lg">
          {data.primaryCTA.label}
        </Button>
      ) : null}
      {data.secondaryCTA ? (
        <Button href={data.secondaryCTA.url} variant="outline" size="lg">
          {data.secondaryCTA.label}
        </Button>
      ) : null}
    </div>
  );
}

export function HeroSection({ data }: { data: HeroSectionType }) {
  const isCentered = data.variant === "centered";

  return (
    <Section className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] pb-20 pt-14 sm:pt-20">
      <Container>
        <div className={isCentered ? "mx-auto max-w-4xl text-center" : "grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]"}>
          <div className={isCentered ? "flex flex-col items-center" : ""}>
            {data.eyebrow ? (
              <p className="mb-5 inline-flex rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-cyan-700">
                {data.eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              {data.headline}
            </h1>
            {data.description ? (
              <p className={`mt-6 max-w-2xl text-lg leading-8 text-slate-600 ${isCentered ? "mx-auto" : ""}`}>
                {data.description}
              </p>
            ) : null}
            <div className={`mt-8 ${isCentered ? "flex justify-center" : ""}`}>
              <HeroActions data={data} />
            </div>
          </div>

          {!isCentered && data.imageUrl ? (
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-cyan-100/50" aria-hidden="true" />
              <img
                src={data.imageUrl}
                alt={data.imageAlt ?? ""}
                className="relative aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover shadow-sm"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
