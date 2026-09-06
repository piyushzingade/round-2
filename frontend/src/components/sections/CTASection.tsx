import type { CTASection as CTASectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CTASection({ data }: { data: CTASectionType }) {
  const isDark = data.variant === "brand" || data.variant === "dark";
  const primary = data.primaryCTA ?? data.cta;

  return (
    <Section className={isDark ? "bg-white" : "bg-slate-50"}>
      <Container>
        <div
          className={`rounded-lg border p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 ${
            isDark ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-950"
          }`}
        >
          <div className="max-w-2xl">
            {data.eyebrow ? (
              <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${isDark ? "text-cyan-200" : "text-cyan-700"}`}>
                {data.eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">{data.headline}</h2>
            {data.description ? (
              <p className={`mt-4 text-lg leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {data.description}
              </p>
            ) : null}
          </div>
          {primary || data.secondaryCTA ? (
            <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
              {primary ? (
                <Button
                  href={primary.url}
                  variant={isDark ? "secondary" : "primary"}
                  size="lg"
                  target={primary.openInNewTab ? "_blank" : undefined}
                >
                  {primary.label}
                </Button>
              ) : null}
              {data.secondaryCTA ? (
                <Button
                  href={data.secondaryCTA.url}
                  variant={isDark ? "secondary" : "outline"}
                  size="lg"
                  target={data.secondaryCTA.openInNewTab ? "_blank" : undefined}
                >
                  {data.secondaryCTA.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
