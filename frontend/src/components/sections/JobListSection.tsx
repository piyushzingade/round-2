import type { JobListSection as JobListSectionType } from "@/types/cms";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function JobListSection({ data }: { data: JobListSectionType }) {
  const jobs = (data.jobs ?? []).filter((job) => job.status !== "closed");

  return (
    <Section id="open-roles" className="bg-slate-50">
      <Container>
        <div className="max-w-2xl">
          {data.eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-700">{data.eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{data.title}</h2>
          {data.description ? <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p> : null}
        </div>
        <div className="mt-10 grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id ?? job.jobId ?? job.title}>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{job.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">{[job.location, job.employmentType].filter(Boolean).join(" / ")}</p>
                  {job.description ? <p className="mt-4 max-w-3xl leading-7 text-slate-600">{job.description}</p> : null}
                </div>
                {job.applyURL ? <Button href={job.applyURL} variant="outline">Apply</Button> : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
