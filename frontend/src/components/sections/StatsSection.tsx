import type { StatsSection as StatsSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function StatsSection({ data }: { data: StatsSectionType }) {
  const stats = data.stats ?? [];

  if (stats.length === 0) {
    return null;
  }

  return (
    <Section id="results" className="bg-slate-950 text-white">
      <Container>
        {data.title ? <h2 className="max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">{data.title}</h2> : null}
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id ?? stat.label} className="bg-slate-950 p-6 sm:p-8">
              <p className="text-4xl font-semibold tracking-normal text-cyan-200">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
