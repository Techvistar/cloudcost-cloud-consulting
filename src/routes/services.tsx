import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import {
  TrendingDown, Server, MoveRight, Compass, Workflow, Lock, CheckCircle2, Award,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fixcloudcost" },
      { name: "description", content: "Cloud cost optimization, managed services, migration, architecture, DevOps, security and AWS Well-Architected reviews from top FinOps partners." },
      { property: "og:title", content: "Services — Fixcloudcost" },
      { property: "og:description", content: "Premium cloud services delivered by vetted FinOps partners." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: TrendingDown,
    title: "Cost & Performance Optimization",
    desc: "Cut cloud spend by up to 60% while improving performance.",
    bullets: ["Rightsizing & autoscaling", "Reserved Instance / Savings Plans", "Idle & waste elimination"],
    primary: true,
  },
  {
    icon: Server,
    title: "Cloud Managed Services",
    desc: "24/7 expert operations across AWS, Azure and GCP.",
    bullets: ["Monitoring & alerting", "Patch & update management", "Incident response"],
  },
  {
    icon: MoveRight,
    title: "Cloud Migration",
    desc: "Move workloads with zero downtime and predictable cost.",
    bullets: ["Lift-shift-optimize", "Database migration", "Hybrid & multi-cloud"],
  },
  {
    icon: Compass,
    title: "Cloud Architecture Design",
    desc: "Future-proof, cost-efficient, scalable architecture.",
    bullets: ["Reference architectures", "Cost-aware design", "High availability"],
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    desc: "Ship faster with automated, reliable pipelines.",
    bullets: ["CI/CD pipelines", "Infrastructure as Code", "GitOps workflows"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Harden your cloud with continuous compliance.",
    bullets: ["IAM & least privilege", "SOC2 / ISO / HIPAA", "Threat detection"],
  },
  {
    icon: Award,
    title: "AWS Well-Architected Review",
    desc: "Full assessment across all six AWS pillars.",
    bullets: ["Operational Excellence", "Security & Reliability", "Performance, Cost, Sustainability"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Premium cloud services, <span className="text-gradient">competitive quotes</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            From cost optimization to full migrations — get proposals from the FinOps partners best suited for the job.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-emerald ${
                s.primary
                  ? "border-primary/40 bg-gradient-to-br from-primary/10 to-card"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {s.primary && (
                <span className="absolute right-5 top-5 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-foreground">
                  Most popular
                </span>
              )}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-emerald">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
