import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import { ShieldCheck, FileBarChart, Handshake, Lock, Zap, Eye } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Cloudcost" },
      { name: "description", content: "Share read-only billing access, let multiple FinOps partners compete, then pick the best savings plan. No migrations, no lock-ins, no risk." },
      { property: "og:title", content: "How Cloudcost Works" },
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

// Animation variants for steps
const stepVariantsHIW = [
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100 },
    hover: { scale: 1.02, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  }
];

// Animation variants for trust cards
const trustVariants = [
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, rotate: 2, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 120 },
    hover: { scale: 1.05, y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  }
];

function HowItWorks() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-55" />
        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-orb" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl animate-orb" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Process
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
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
            <motion.div
              key={s.n}
              initial={stepVariantsHIW[i].initial}
              animate={stepVariantsHIW[i].animate}
              whileHover={stepVariantsHIW[i].hover}
              transition={stepVariantsHIW[i].transition || { duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group card-panel relative grid gap-6 p-8 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-emerald">
                {s.n}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">{s.t}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              <ul className="space-y-3 md:min-w-[220px]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              {i < steps.length - 1 && (
                <div className="absolute -bottom-4 left-12 hidden h-8 w-px bg-gradient-to-b from-primary to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust" title="Built for enterprise peace of mind">
        <div className="grid gap-5 md:grid-cols-3">
          {trust.map((t, i) => (
            <motion.div
              key={t.t}
              initial={trustVariants[i].initial}
              animate={trustVariants[i].animate}
              whileHover={trustVariants[i].hover}
              transition={trustVariants[i].transition || { duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-panel rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{t.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
