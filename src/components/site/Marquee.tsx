const partners = ["pump.co", "appsquadz", "cast.ai", "usage.ai", "archera.ai", "spendbase.co", "vantage.sh", "cloudzero"];

export function PartnerMarquee() {
  const items = [...partners, ...partners, ...partners];
  return (
    <div className="border-y border-border/60 bg-muted/40 py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted FinOps optimization partners
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-20 px-10">
          {items.map((p, i) => (
            <div
              key={i}
              className="font-display text-2xl font-bold text-muted-foreground/60 grayscale transition-all hover:grayscale-0 hover:text-primary md:text-3xl"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
