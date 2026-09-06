import type { ComponentType } from "react";
import type { CMSSection } from "@/types/cms";
import { componentRegistry, isRegisteredComponent } from "@/lib/componentRegistry";

export function PageRenderer({ sections }: { sections: CMSSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.isVisible === false) {
          return null;
        }

        if (!isRegisteredComponent(section.__component)) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Unknown CMS section type: ${section.__component}`);
          }

          return null;
        }

        const Component = componentRegistry[section.__component] as ComponentType<{ data: CMSSection }>;

        return <Component key={`${section.__component}-${section.id ?? index}`} data={section} />;
      })}
    </>
  );
}
