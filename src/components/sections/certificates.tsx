"use client";

import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/data/site";
import { useLanguage } from "@/components/layout/language-provider";

export function Certificates() {
  const { locale } = useLanguage();
  const content = getLocalizedContent(locale);

  return (
    <section id="certificates" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={content.sectionHeadings.certificates.eyebrow}
              title={content.sectionHeadings.certificates.title}
              description={content.sectionHeadings.certificates.description}
            />
          </Reveal>

          <div
            className="grid gap-6 lg:grid-cols-2"
            style={{ gridAutoRows: "1fr" }}
          >
            {content.certificates.map((certificate, index) => (
              <Reveal key={certificate.title} delay={0.05 * index}>
                <article className="h-full flex rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
                  <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center h-full w-full">
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                      <a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${certificate.title} image in new tab`}
                        className="block"
                      >
                        <Image
                          src={certificate.image}
                          alt={certificate.title}
                          width={900}
                          height={640}
                          className="h-auto w-full rounded-[1.15rem]"
                        />
                      </a>
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col">
                      <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl  text-white bg-white dark:text-slate-950 overflow-hidden">
                          {certificate.icon ? (
                            <Image
                              src={certificate.icon}
                              alt={`${certificate.title} icon`}
                              width={20}
                              height={20}
                              className="h-10 w-10 object-contain"
                            />
                          ) : null}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
                              {certificate.title}
                            </h3>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-sky-500/15 dark:text-sky-300">
                              {certificate.status}
                            </span>
                          </div>
                          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                            {certificate.issuer}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                            {certificate.note}
                          </p>
                        </div>
                      </div>
                      {/* spacer to push any action/footer to bottom when present */}
                      <div className="mt-auto" />
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
