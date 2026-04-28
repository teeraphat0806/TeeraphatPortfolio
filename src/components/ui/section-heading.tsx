type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
