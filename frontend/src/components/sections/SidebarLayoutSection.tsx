import Link from "next/link";
import type { SidebarLayoutSection as SidebarLayoutSectionType } from "@/types/cms";
import { RichText } from "@/components/RichText";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SidebarLayoutSection({ data }: { data: SidebarLayoutSectionType }) {
  const items = data.sidebarItems ?? [];

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className={data.variant === "sticky" ? "lg:sticky lg:top-24 lg:self-start" : ""}>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h2 className="font-semibold text-slate-950">{data.sidebarTitle}</h2>
              <nav aria-label={data.sidebarTitle} className="mt-4 flex gap-3 overflow-x-auto lg:grid">
                {items.map((item) => (
                  <Link key={item.id ?? item.url} href={item.url} className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-950">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
          <article className="min-w-0 max-w-3xl">
            <RichText content={data.content} />
          </article>
        </div>
      </Container>
    </Section>
  );
}
