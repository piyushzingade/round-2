/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { NavbarSection as NavbarSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NavbarSection({ data }: { data: NavbarSectionType }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold tracking-tight text-slate-950">
            {data.logoImageUrl ? (
              <img src={data.logoImageUrl} alt={data.logoText} className="h-8 w-8 rounded-md object-cover" />
            ) : (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm text-white">
                {data.logoText.slice(0, 1)}
              </span>
            )}
            <span className="truncate">{data.logoText}</span>
          </Link>

          {data.links && data.links.length > 0 ? (
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              {data.links.map((link) => (
                <Link key={`${link.label}-${link.url}`} href={link.url} className="hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}

          {data.cta ? (
            <Button href={data.cta.url} size="sm">
              {data.cta.label}
            </Button>
          ) : null}
        </div>
        {data.links && data.links.length > 0 ? (
          <nav
            aria-label="Mobile navigation"
            className="-mx-5 flex gap-5 overflow-x-auto border-t border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 md:hidden"
          >
            {data.links.map((link) => (
              <Link key={`${link.label}-${link.url}`} href={link.url} className="shrink-0 hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
