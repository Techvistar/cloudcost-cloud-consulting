import awsLogo from "@/assets/aws.svg";
import azureLogo from "@/assets/azure.svg";

const partners: { name: string; slug: string; color: string; url: string }[] = [
  { name: "Amazon Web Services", slug: "amazonaws", color: "FF9900", url: "https://aws.amazon.com/" },
  { name: "Microsoft Azure", slug: "azure", color: "0078D4", url: "https://azure.microsoft.com/" },
  { name: "Google Cloud", slug: "googlecloud", color: "4285F4", url: "https://cloud.google.com/" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5", url: "https://kubernetes.io/" },
  { name: "Datadog", slug: "datadog", color: "632CA6", url: "https://www.datadoghq.com/" },
  { name: "Snowflake", slug: "snowflake", color: "29B5E8", url: "https://www.snowflake.com/" },
  { name: "Databricks", slug: "databricks", color: "FF3621", url: "https://www.databricks.com/" },
  { name: "Terraform", slug: "terraform", color: "7B42BC", url: "https://www.terraform.io/" },
  { name: "Grafana", slug: "grafana", color: "F46800", url: "https://grafana.com/" },
  { name: "MongoDB", slug: "mongodb", color: "47A248", url: "https://www.mongodb.com/" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020", url: "https://www.cloudflare.com/" },
  { name: "GitHub", slug: "github", color: "181717", url: "https://github.com/" },
];

export function PartnerMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="border-y border-border/60 bg-muted/40 py-14">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Cloud platforms and technologies we work with
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 px-10">
          {items.map((p, i) => {
            const localLogo = p.slug === "amazonaws" ? awsLogo : p.slug === "azure" ? azureLogo : undefined;
            return (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 shrink-0 items-center gap-3 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                title={p.name}
              >
                <img
                  src={localLogo ?? `https://cdn.simpleicons.org/${p.slug}/${p.color}`}
                  alt={p.name}
                  loading="lazy"
                  className="h-8 w-8 min-w-[32px] object-contain"
                />
                <span className="font-display text-xl font-semibold text-foreground/80 md:text-2xl">
                  {p.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
