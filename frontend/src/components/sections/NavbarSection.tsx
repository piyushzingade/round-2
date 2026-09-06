import Image from "next/image";
import Link from "next/link";
import type { NavbarSection as NavbarSectionType, NavItem } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getImageAlt, getImageSize, getImageSource } from "@/lib/cmsImage";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
    >
      {label}
    </Link>
  );
}

function NavItemView({ item }: { item: NavItem }) {
  const children = item.children ?? [];

  if (item.type === "dropdown" && children.length > 0) {
    return (
      <details className="group relative">
        <summary className="list-none rounded-sm text-sm font-medium text-slate-600 transition-colors hover:cursor-pointer hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">
          {item.label}
          <span className="ml-1 text-xs text-slate-400" aria-hidden="true">
            v
          </span>
        </summary>
        <div className="absolute left-0 top-8 z-30 min-w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
          {children.map((child) => (
            <Link
              key={`${child.label}-${child.url}`}
              href={child.url}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </details>
    );
  }

  return <NavLink href={item.url ?? "/"} label={item.label} />;
}

export function NavbarSection({ data }: { data: NavbarSectionType }) {
  const navItems: NavItem[] = data.navigationItems?.length
    ? data.navigationItems
    : (data.links ?? []).map((link) => ({ ...link, type: "link" }));
  const logoSource = getImageSource(data.logo, data.logoImageUrl);
  const logoSize = getImageSize(data.logo, 64, 64);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold tracking-tight text-slate-950">
            {logoSource ? (
              <Image
                src={logoSource}
                alt={getImageAlt(data.logo, data.logoText)}
                width={logoSize.width}
                height={logoSize.height}
                className="h-8 w-8 shrink-0 rounded-md object-contain"
              />
            ) : (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm text-white">
                {data.logoText.slice(0, 1)}
              </span>
            )}
            <span className="truncate">{data.logoText}</span>
          </Link>

          {navItems.length > 0 ? (
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <NavItemView key={`${item.label}-${item.url ?? "dropdown"}`} item={item} />
              ))}
            </nav>
          ) : null}

          <div className="flex shrink-0 items-center gap-3">
            {data.secondaryCTA ? (
              <Button href={data.secondaryCTA.url} variant="outline" size="sm" className="hidden sm:inline-flex">
                {data.secondaryCTA.label}
              </Button>
            ) : null}
            {data.cta ? (
              <Button href={data.cta.url} size="sm">
                {data.cta.label}
              </Button>
            ) : null}
          </div>
        </div>
        {navItems.length > 0 ? (
          <nav
            aria-label="Mobile navigation"
            className="-mx-5 flex gap-5 overflow-x-auto border-t border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={`${item.label}-${item.url ?? "dropdown"}`}
                href={item.url ?? item.children?.[0]?.url ?? "/"}
                className="shrink-0 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
