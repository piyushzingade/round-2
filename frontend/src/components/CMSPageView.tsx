import type { CMSPage, SiteSettings } from "@/types/cms";
import { PageRenderer } from "@/components/PageRenderer";
import { FooterSection } from "@/components/sections/FooterSection";
import { NavbarSection } from "@/components/sections/NavbarSection";

export function CMSPageView({ page, settings }: { page: CMSPage; settings: SiteSettings | null }) {
  return (
    <>
      {page.showNavbar && settings?.navbar ? <NavbarSection data={settings.navbar} /> : null}
      <main>
        <PageRenderer sections={page.sections} />
      </main>
      {page.showFooter && settings?.footer ? <FooterSection data={settings.footer} /> : null}
    </>
  );
}
