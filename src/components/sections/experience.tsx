"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/data/site";
import { useLanguage } from "@/components/layout/language-provider";

export function Experience() {
  const { locale } = useLanguage();
  const content = getLocalizedContent(locale);

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={content.sectionHeadings.experience.eyebrow}
              title={content.sectionHeadings.experience.title}
              description={content.sectionHeadings.experience.description}
            />
          </Reveal>

          <div className="space-y-4">
            {content.experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.role}`} delay={0.06 * index}>
                <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:from-slate-900/95 dark:to-slate-900/70 dark:hover:border-slate-700 h-full flex flex-col">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-500 to-cyan-500 opacity-70" />

                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {job.company}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {job.location}
                      </p>
                    </div>
                    <p className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                      {job.duration}
                    </p>
                  </div>

                  <ul className="relative mt-5 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300 flex-grow">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-400"
                          aria-hidden="true"
                        />
                        <span className="text-balance">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {job.website ? (
                    <div className="relative mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 hover:shadow-md"
                      >
                        {content.sectionHeadings.experience.viewCompany}
                      </a>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
