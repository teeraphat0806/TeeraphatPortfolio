import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.4),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_28%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <Reveal className="space-y-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                  {site.location}
                </p>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Open to opportunities
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-slate-50">
                {site.name}
                <span className="mt-3 block bg-gradient-to-r from-slate-500 to-sky-600 bg-clip-text text-slate-500 dark:from-slate-300 dark:to-sky-300 dark:text-transparent">
                  {site.role}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                {site.intro}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-1.5 shadow-sm ring-1 ring-black/5 dark:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-15 w-15"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
    -1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 
    3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
    0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
    0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 
    1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23 
    .655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 
    0 4.61-2.805 5.625-5.475 5.92.43.37.823 1.102.823 2.222 
    0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 
    21.795 24 17.297 24 12c0-6.63-5.373-12-12-12z"
                    />
                  </svg>
                </span>

                <span>teeraphat0806</span>
              </a>

              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              {site.strengths.map((strength) => (
                <span
                  key={strength.title}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  {strength.title}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-slate-200/60 via-white to-sky-100/70 blur-2xl dark:from-sky-500/20 dark:via-slate-900 dark:to-cyan-500/10" />
            <div className="animate-float rounded-[2rem] border border-slate-200  p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,#020617,#0f172a_55%,#1e293b)] p-5 text-white sm:p-8">
                <div className="grid gap-6 sm:gap-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 sm:text-sm">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono uppercase tracking-[0.22em]">
                      Developer Profile
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      Next.js / TypeScript
                    </span>
                  </div>

                  <div className="grid place-items-center">
                    <Image
                      src={site.profileImage}
                      alt="Profile illustration for Teerapat Jirapasnitilert"
                      width={360}
                      height={360}
                      priority
                      sizes="(max-width: 1024px) 85vw, 360px"
                      className="h-auto w-full max-w-sm drop-shadow-[0_16px_28px_rgba(15,23,42,0.28)]"
                    />
                  </div>

                  <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-3 sm:gap-4 sm:p-5">
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-300">
                        Focus
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Product engineering
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-300">
                        Stack
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Frontend + backend
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-300">
                        Availability
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Open to opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
