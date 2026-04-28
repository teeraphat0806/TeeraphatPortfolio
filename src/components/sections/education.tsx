import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Education"
              title="Academic background and core coursework."
              description="Useful context for recruiters who want a quick view of technical foundation and graduation timeline."
            />
          </Reveal>

          <Reveal>
            <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-soft dark:border-slate-800 dark:from-slate-900/95 dark:to-slate-900/70 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500" />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200 dark:bg-slate-50 dark:ring-slate-700">
                    <Image
                      src="/logos/kmutnb-logo.png"
                      alt="KMUTNB logo"
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                      University
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-[1.7rem]">
                      {education.school}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                      {education.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-500">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Graduation
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-950 dark:text-slate-50">
                      {education.expectedGraduation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {education.coursework.map((course, index) => (
                  <div
                    key={course}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-sm font-semibold text-white shadow-sm">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Coursework
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-950 dark:text-slate-50">
                        {course}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {education.transcriptUrl ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={education.transcriptUrl}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-bg-amber-300 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    Download Transcript
                  </a>
                </div>
              ) : null}
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
