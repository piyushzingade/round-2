import type { SectionHeaderSection as SectionHeaderSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SectionHeaderSection({ data }: { data: SectionHeaderSectionType }) {
  const centered = data.alignment === "center";

  return (
    <Section className="bg-white">
      <Container>
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">{data.title}</h1>
          {data.description ? <p className="mt-5 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
      </Container>
    </Section>
  );
}
