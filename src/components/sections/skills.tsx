"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  BackendIcon,
  DatabaseIcon,
  FrontendIcon,
  ToolsIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/data/site";
import { useLanguage } from "@/components/layout/language-provider";

const skillIcons = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  database: DatabaseIcon,
  tools: ToolsIcon,
} as const;

const categoryTheme = {
  frontend: {
    accent: "from-sky-500 to-cyan-500",
    glow: "bg-sky-500/10",
  },
  backend: {
    accent: "from-amber-500 to-orange-500",
    glow: "bg-amber-500/10",
  },
  database: {
    accent: "from-fuchsia-500 to-pink-500",
    glow: "bg-fuchsia-500/10",
  },
  tools: {
    accent: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500/10",
  },
} as const;

function getInitials(label: string) {
  return label
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Skills() {
  const { locale } = useLanguage();
  const content = getLocalizedContent(locale);

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={content.sectionHeadings.skills.eyebrow}
              title={content.sectionHeadings.skills.title}
              description={content.sectionHeadings.skills.description}
            />
          </Reveal>

          <div
            className="grid gap-6 xl:grid-cols-2"
            style={{ gridAutoRows: "1fr" }}
          >
            {content.skillGroups.map((group, index) => (
              <Reveal key={group.category} delay={0.05 * index}>
                <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-white/10 dark:from-[#171717] dark:to-[#121212] dark:hover:border-white/20 h-full">
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${categoryTheme[group.icon as keyof typeof categoryTheme].glow}`}
                  />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
                      <div className="flex items-center gap-4">
                        {(() => {
                          const Icon =
                            skillIcons[group.icon as keyof typeof skillIcons];

                          return (
                            <span
                              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${categoryTheme[group.icon as keyof typeof categoryTheme].accent} text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105`}
                            >
                              <Icon className="h-7 w-7" />
                            </span>
                          );
                        })()}

                        <div>
                          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                            {group.category}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {group.items.length}{" "}
                            {locale === "th" ? "ทักษะ" : "skills"}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full bg-gradient-to-r ${categoryTheme[group.icon as keyof typeof categoryTheme].accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm`}
                      >
                        {content.sectionHeadings.skills.itemCaption}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 flex-grow">
                      {group.items.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 text-slate-950 shadow-sm ring-1 ring-black/5  dark:text-white dark:ring-white/5">
                            {item.logoUrl ? (
                              <Image
                                src={item.logoUrl}
                                alt={item.label}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                              />
                            ) : (
                              <span
                                className={`bg-gradient-to-br ${categoryTheme[group.icon as keyof typeof categoryTheme].accent} bg-clip-text text-sm font-bold text-transparent`}
                              >
                                {getInitials(item.label)}
                              </span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-[0.98rem] font-medium text-slate-950 dark:text-slate-50">
                              {item.label}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                              {content.sectionHeadings.skills.itemCaption}
                            </p>
                          </div>
                        </div>
                      ))}
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
