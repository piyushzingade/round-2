import Image from "next/image";
import type { ProductShowcaseSection as ProductShowcaseSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

export function ProductShowcaseSection({ data }: { data: ProductShowcaseSectionType }) {
  const products = data.products ?? [];

  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-2xl">
          {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
          {data.description ? <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {products.map((product) => {
            const imageSource = getImageSource(product.image, product.imageUrl);
            const imageSize = getImageSize(product.image, 900, 600);

            return (
              <article key={product.id ?? product.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                {imageSource ? (
                  <Image src={imageSource} alt={getImageAlt(product.image, product.name)} width={imageSize.width} height={imageSize.height} className="aspect-video w-full object-cover" />
                ) : (
                  <div className="border-b border-slate-200 bg-slate-950 p-5 text-white">
                    <p className="text-sm text-cyan-200">app.fylflix.wfyi.ai</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {(product.features ?? ["Compliance", "Documents", "Filings", "Insights"]).slice(0, 4).map((feature) => (
                        <div key={feature} className="rounded-md bg-white/10 p-3 text-sm">{feature}</div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{product.name}</h3>
                  {product.description ? <p className="mt-3 leading-7 text-slate-600">{product.description}</p> : null}
                  {product.cta ? (
                    <div className="mt-6">
                      <Button href={product.cta.url} variant="outline" target={product.cta.openInNewTab ? "_blank" : undefined}>{product.cta.label}</Button>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
