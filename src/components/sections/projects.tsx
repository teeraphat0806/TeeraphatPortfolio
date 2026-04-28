"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GitHubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/data/site";
import { useLanguage } from "@/components/layout/language-provider";

export function Projects() {
  const { locale } = useLanguage();
  const content = getLocalizedContent(locale);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={content.sectionHeadings.projects.eyebrow}
              title={content.sectionHeadings.projects.title}
              description={content.sectionHeadings.projects.description}
            />
          </Reveal>

          <div className="grid gap-6">
            {content.projects.map((project, index) => (
              <Reveal key={project.name} delay={0.06 * index}>
                <article className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-[250px] overflow-hidden border-b border-slate-200 bg-slate-950 dark:border-slate-800 lg:min-h-[360px] lg:border-b-0 lg:border-r">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex h-full flex-col p-6 lg:p-8">
                      <div>
                        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                          {content.sectionHeadings.projects.featuredLabel}
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                          {project.name}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          {content.sectionHeadings.projects.highlightsLabel}
                        </p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span
                                className="mt-2 h-2 w-2 rounded-full bg-sky-500"
                                aria-hidden="true"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 space-y-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300"
                        >
                          <GitHubIcon className="h-5 w-5" />
                          {content.sectionHeadings.projects.githubButton}
                        </a>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {content.sectionHeadings.projects.repositoryLabel}{" "}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="break-all font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-white"
                          >
                            {project.githubUrl}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
