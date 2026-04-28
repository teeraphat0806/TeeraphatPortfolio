import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Crafting elegant software with product thinking and strong technical execution."
              description={site.summary}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {site.strengths.map((strength, index) => (
                  <Reveal key={strength.title} delay={0.05 * index}>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                      <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                        {strength.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {strength.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
