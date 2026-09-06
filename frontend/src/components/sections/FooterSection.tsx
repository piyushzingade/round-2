import Link from "next/link";
import type { FooterSection as FooterSectionType } from "@/types/cms";
import { Container } from "@/components/ui/Container";

export function FooterSection({ data }: { data: FooterSectionType }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <Container>
        <div className="flex flex-col gap-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-950">{data.companyName}</p>
            {data.copyright ? <p className="mt-1">{data.copyright}</p> : null}
          </div>
          {data.links && data.links.length > 0 ? (
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
              {data.links.map((link) => (
                <Link key={`${link.label}-${link.url}`} href={link.url} className="hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
