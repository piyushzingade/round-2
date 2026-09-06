import Link from "next/link";
import type { FooterSection as FooterSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";

export function FooterSection({ data }: { data: FooterSectionType }) {
  const linkGroups = data.linkGroups ?? [];
  const looseLinks = data.links ?? [];
  const legalLinks = data.legalLinks ?? [];

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-slate-950">{data.companyName}</p>
            {data.description ? <p className="mt-3 leading-7 text-slate-600">{data.description}</p> : null}
          </div>
          <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.id ?? group.title}>
                <h2 className="text-sm font-semibold text-slate-950">{group.title}</h2>
                <div className="mt-4 grid gap-3 text-sm text-slate-600">
                  {(group.links ?? []).map((link) => (
                    <Link key={`${link.label}-${link.url}`} href={link.url} className="hover:text-slate-950">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          {data.copyright ? <p>{data.copyright}</p> : null}
          <div className="flex flex-wrap gap-5">
            {[...looseLinks, ...legalLinks].map((link) => (
              <Link key={`${link.label}-${link.url}`} href={link.url} className="hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
