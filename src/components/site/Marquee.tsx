const partners: { name: string; slug: string; color: string }[] = [
  { name: "Amazon Web Services", slug: "amazonwebservices", color: "FF9900" },
  { name: "Microsoft Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Datadog", slug: "datadog", color: "632CA6" },
  { name: "Snowflake", slug: "snowflake", color: "29B5E8" },
  { name: "Databricks", slug: "databricks", color: "FF3621" },
  { name: "Terraform", slug: "terraform", color: "7B42BC" },
  { name: "Grafana", slug: "grafana", color: "F46800" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "GitHub", slug: "github", color: "181717" },
];

export function PartnerMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="border-y border-border/60 bg-muted/40 py-14">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted FinOps optimization partners
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 px-10">
          {items.map((p, i) => (
            <div
              key={i}
              className="group flex h-10 shrink-0 items-center gap-3 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              title={p.name}
            >
              <img
                src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`}
                alt={p.name}
                loading="lazy"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-xl font-semibold text-foreground/80 md:text-2xl">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
