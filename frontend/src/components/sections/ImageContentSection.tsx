import Image from "next/image";
import type { ImageContentSection as ImageContentSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

export function ImageContentSection({ data }: { data: ImageContentSectionType }) {
  const imageSource = getImageSource(data.image, data.imageUrl);
  const imageSize = getImageSize(data.image);
  const imageFirst = data.imagePosition === "left";

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className={imageFirst ? "lg:order-2" : ""}>
            {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
            <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
            {data.description ? <p className="mt-5 text-lg leading-8 text-slate-600">{data.description}</p> : null}
            {data.cta ? (
              <div className="mt-7">
                <Button href={data.cta.url} variant="outline" target={data.cta.openInNewTab ? "_blank" : undefined}>
                  {data.cta.label}
                </Button>
              </div>
            ) : null}
          </div>
          <div className={imageFirst ? "lg:order-1" : ""}>
            {imageSource ? (
              <Image
                src={imageSource}
                alt={getImageAlt(data.image, data.imageAlt)}
                width={imageSize.width}
                height={imageSize.height}
                className="aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover"
              />
            ) : (
              <div className="aspect-[4/3] rounded-lg border border-dashed border-slate-300 bg-slate-50" aria-hidden="true" />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
