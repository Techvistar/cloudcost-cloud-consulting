import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
