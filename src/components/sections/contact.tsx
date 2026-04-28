import { GitHubIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactItems, site } from "@/data/site";

export function Contact() {
  const iconMap = {
    phone: PhoneIcon,
    github: GitHubIcon,
    mail: MailIcon,
  } as const;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Keep in Touch"
              description="Stay updated with my latest projects and insights. Feel free to reach out if you have any questions or want to connect."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="grid gap-4">
                {contactItems.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];

                  return (
                    <Reveal key={item.label} delay={0.04 * index}>
                      <a
                        href={item.href}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700 dark:hover:bg-slate-950"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                            {item.label}
                          </span>
                          <span className="block truncate text-base font-semibold text-slate-950 dark:text-slate-50">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {site.location}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                  Direct Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-flex text-sm font-semibold text-slate-950 transition hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-300"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
