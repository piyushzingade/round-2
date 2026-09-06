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
};

export function FeatureGridSection({ data }: { data: FeatureGridSectionType }) {
  const features = data.features ?? [];

  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
          {data.description ? <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
        {features.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.id ?? feature.title} className="min-h-56">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-sm font-bold text-cyan-700">
                  {iconLabels[feature.icon ?? "spark"]}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
