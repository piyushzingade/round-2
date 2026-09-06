import type { RichTextSection as RichTextSectionType } from "@/types/cms";
import { RichText } from "@/components/RichText";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function RichTextSection({ data }: { data: RichTextSectionType }) {
  return (
    <Section className="bg-white">
      <Container className="max-w-3xl">
        {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
        {data.title ? <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2> : null}
        <div className={data.title ? "mt-6" : ""}>
          <RichText content={data.content} />
        </div>
      </Container>
    </Section>
  );
}
