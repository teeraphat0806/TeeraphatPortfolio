"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-colors dark:border-slate-800/80 dark:bg-slate-950/70">
      <Container className="flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200 dark:ring-slate-800">
            <Image
              src={site.profileImage}
              alt={`${site.name} profile photo`}
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-950 dark:text-slate-50">
              {site.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-slate-200 bg-white/95 lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <Container className="py-4">
              <nav className="grid gap-3" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
