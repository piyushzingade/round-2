import Image from "next/image";
import Link from "next/link";
import type { LogoCloudSection as LogoCloudSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

export function LogoCloudSection({ data }: { data: LogoCloudSectionType }) {
  const logos = data.logos ?? [];

  if (logos.length === 0) {
    return null;
  }

  return (
    <Section className="bg-white py-10 sm:py-12">
      <Container>
        {data.title ? <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">{data.title}</p> : null}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo) => {
            const source = getImageSource(logo.image);
            const size = getImageSize(logo.image, 160, 80);
            const content = (
              <div className="flex min-h-20 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 text-center text-sm font-semibold text-slate-600">
                {source ? (
                  <Image src={source} alt={getImageAlt(logo.image, logo.alt ?? logo.name)} width={size.width} height={size.height} className="max-h-10 w-auto object-contain" />
                ) : (
                  logo.name
                )}
              </div>
            );

            return logo.url ? (
              <Link key={logo.id ?? logo.name} href={logo.url}>
                {content}
              </Link>
            ) : (
              <div key={logo.id ?? logo.name}>{content}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
