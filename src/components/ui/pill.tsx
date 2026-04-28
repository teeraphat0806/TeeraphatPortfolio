import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
