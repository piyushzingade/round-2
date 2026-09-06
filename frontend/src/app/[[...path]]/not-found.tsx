import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50">
      <Container className="max-w-2xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">Page not found</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">This CMS page is not published</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Check the path in Strapi, publish the page, or choose a published page from the preview list.
          </p>
          <Link href="/admin-preview" className="mt-6 inline-flex font-semibold text-slate-950 hover:text-cyan-700">
            Open page list
          </Link>
        </div>
      </Container>
    </main>
  );
}
