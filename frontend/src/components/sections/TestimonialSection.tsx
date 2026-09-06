/* eslint-disable @next/next/no-img-element */
import type { TestimonialSection as TestimonialSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function TestimonialSection({ data }: { data: TestimonialSectionType }) {
  return (
    <Section className="bg-slate-50">
      <Container>
        <figure className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 text-center sm:p-10">
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.imageAlt ?? ""}
              className="mx-auto mb-6 h-16 w-16 rounded-full object-cover"
            />
          ) : null}
          <blockquote className="text-2xl font-semibold leading-10 tracking-normal text-slate-950">
            &ldquo;{data.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-slate-600">
            <span className="font-semibold text-slate-950">{data.customerName}</span>
            {data.customerRole || data.company ? (
              <span>
                {" "}
                · {[data.customerRole, data.company].filter(Boolean).join(", ")}
              </span>
            ) : null}
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
