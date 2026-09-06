import Image from "next/image";
import type { TestimonialItem, TestimonialSection as TestimonialSectionType, TestimonialsSection as TestimonialsSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const imageSource = getImageSource(item.image, item.imageUrl);
  const imageSize = getImageSize(item.image, 160, 160);
  const name = item.personName ?? item.customerName;
  const role = item.role ?? item.customerRole;

  return (
    <figure className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-4">
        {imageSource ? (
          <Image
            src={imageSource}
            alt={getImageAlt(item.image, item.imageAlt ?? name ?? "Customer")}
            width={imageSize.width}
            height={imageSize.height}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
            {(name ?? "W").slice(0, 1)}
          </div>
        )}
        <figcaption>
          {name ? <p className="font-semibold text-slate-950">{name}</p> : null}
          {role || item.company ? <p className="text-sm text-slate-500">{[role, item.company].filter(Boolean).join(", ")}</p> : null}
        </figcaption>
      </div>
      {item.highlight ? <p className="mt-5 text-sm font-semibold text-cyan-700">{item.highlight}</p> : null}
      <blockquote className="mt-4 leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</blockquote>
    </figure>
  );
}

export function TestimonialSection({ data }: { data: TestimonialSectionType }) {
  return (
    <Section className="bg-slate-50">
      <Container className="max-w-4xl">
        <TestimonialCard item={data} />
      </Container>
    </Section>
  );
}

export function TestimonialsSection({ data }: { data: TestimonialsSectionType }) {
  const testimonials = data.testimonials ?? [];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-10 max-w-2xl">
          {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
          {data.title ? <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2> : null}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id ?? item.quote} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
