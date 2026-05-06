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
    <section className={`mx-auto max-w-[1280px] px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-16 max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] md:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-5 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
