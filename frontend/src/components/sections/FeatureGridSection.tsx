import type { FeatureGridSection as FeatureGridSectionType, FeatureIcon } from "@/types/cms";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const iconLabels: Record<FeatureIcon, string> = {
  shield: "S",
  workflow: "W",
  chart: "C",
  users: "U",
  lock: "L",
  spark: "*",
  tax: "T",
  legal: "L",
  registration: "R",
  finance: "F",
  security: "S",
  document: "D",
};

export function FeatureGridSection({ data }: { data: FeatureGridSectionType }) {
  const features = data.features ?? [];

  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="max-w-2xl">
          {data.eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
          {data.description ? <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
        {features.length > 0 ? (
          <div className={`mt-10 grid gap-4 ${data.variant === "2-column" ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {features.map((feature) => (
              <Card key={feature.id ?? feature.title} className="min-h-56">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-sm font-bold text-cyan-700">
                  {iconLabels[feature.icon ?? "spark"]}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                {feature.link ? (
                  <a href={feature.link.url} className="mt-5 inline-flex text-sm font-semibold text-cyan-800 hover:text-slate-950">
                    {feature.link.label}
                  </a>
                ) : null}
              </Card>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
