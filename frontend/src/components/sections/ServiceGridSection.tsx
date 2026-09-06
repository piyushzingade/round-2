import type { FeatureIcon, ServiceGridSection as ServiceGridSectionType } from "@/types/cms";
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

export function ServiceGridSection({ data }: { data: ServiceGridSectionType }) {
  const cards = data.cards ?? [];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-2xl">
          {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
          {data.description ? <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <Card key={card.id ?? card.title}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                  {iconLabels[card.icon ?? "workflow"]}
                </div>
                <div>
                  {card.badge ? <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-700">{card.badge}</p> : null}
                  <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                  {card.description ? <p className="mt-3 leading-7 text-slate-600">{card.description}</p> : null}
                  {card.link ? <a href={card.link.url} className="mt-5 inline-flex text-sm font-semibold text-cyan-800 hover:text-slate-950">{card.link.label}</a> : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
