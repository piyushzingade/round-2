import type { CTASection as CTASectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CTASection({ data }: { data: CTASectionType }) {
  const isBrand = data.variant === "brand";

  return (
    <Section className={isBrand ? "bg-white" : "bg-slate-50"}>
      <Container>
        <div
          className={`rounded-lg border p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 ${
            isBrand
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-950"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">{data.headline}</h2>
            {data.description ? (
              <p className={`mt-4 text-lg leading-8 ${isBrand ? "text-slate-300" : "text-slate-600"}`}>
                {data.description}
              </p>
            ) : null}
          </div>
          {data.cta ? (
            <div className="mt-8 shrink-0 lg:mt-0">
              <Button href={data.cta.url} variant={isBrand ? "secondary" : "primary"} size="lg">
                {data.cta.label}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
