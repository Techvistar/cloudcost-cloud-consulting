import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { ShieldCheck, FileBarChart, Handshake, Lock, Zap, Eye } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Fixcloudcost" },
      { name: "description", content: "Share read-only billing access, let multiple FinOps partners compete, then pick the best contract. No migrations, no risk." },
      { property: "og:title", content: "How Fixcloudcost works" },
      { property: "og:description", content: "Three steps from cloud bill to verified savings." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    n: "01",
    icon: Eye,
    t: "Share Billing Access",
    d: "Grant secure read-only access to your cloud billing data. Partners see costs — never your infrastructure or workloads.",
    points: ["AWS / Azure / GCP supported", "SOC2-aligned access controls", "Revoke anytime"],
  },
  {
    n: "02",
    icon: Handshake,
    t: "Multiple Partners Compete",
    d: "Vetted FinOps partners analyze your spend and submit detailed optimization quotes — within days, not months.",
    points: ["Side-by-side proposals", "Transparent pricing", "Specialists matched to your stack"],
  },
  {
    n: "03",
    icon: FileBarChart,
    t: "Choose the Best Contract",
    d: "Pick the proposal with the highest verified savings. Onboard the partner — no infrastructure changes required.",
    points: ["No lock-ins or penalties", "Performance-based agreements", "Switch partners anytime"],
  },
];

const trust = [
  { icon: ShieldCheck, t: "Bank-grade security", d: "Read-only by default with full audit logs." },
  { icon: Lock, t: "No risk", d: "No migrations, no infrastructure changes, no downtime." },
  { icon: Zap, t: "Fast time-to-savings", d: "First proposals typically within 5–7 business days." },
];

function HowItWorks() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Process
          </span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            From cloud bill to <span className="text-gradient">verified savings</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            A simple three-step process designed for finance and engineering leaders who want results — not endless RFPs.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-emerald">
                {s.n}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold">{s.t}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
              <ul className="space-y-2 md:min-w-[220px]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              {i < steps.length - 1 && (
                <div className="absolute -bottom-4 left-12 hidden h-8 w-px bg-gradient-to-b from-primary to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust" title="Built for enterprise peace of mind">
        <div className="grid gap-5 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
