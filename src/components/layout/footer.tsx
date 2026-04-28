import { Container } from "@/components/ui/container";
import { socialLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
