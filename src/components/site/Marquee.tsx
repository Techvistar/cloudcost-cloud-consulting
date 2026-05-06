const partners = ["pump.co", "appsquadz", "cast.ai", "usage.ai", "archera.ai", "spendbase.co"];

export function PartnerMarquee() {
  const items = [...partners, ...partners, ...partners];
  return (
    <div className="border-y border-border/60 bg-muted/30 py-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted FinOps partners in our network
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {items.map((p, i) => (
            <div
              key={i}
              className="font-display text-2xl font-bold text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
