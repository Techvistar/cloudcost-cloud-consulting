import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Layers, Unlock, Users, Receipt, BarChart3, Trophy } from "lucide-react";
import { Section } from "@/components/site/Section";
import { PartnerMarquee } from "@/components/site/Marquee";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fixcloudcost — Save up to 60% on AWS, Azure & GCP bills" },
      { name: "description", content: "Get competing quotes from top FinOps partners and reduce cloud cost by up to 60%. Read-only access. No migrations. No lock-ins." },
      { property: "og:title", content: "Fixcloudcost — Save up to 60% on cloud bills" },
      { property: "og:description", content: "Multiple FinOps partners. One best quote. Zero migrations." },
    ],
  }),
  component: HomePage,
});

const customers = [
  "Explorex", "Zomentum", "Sigmoid", "Beinex", "Terrapay", "Razorlabs",
  "Northstar", "Loopwise", "Quantia", "Vertexa", "Helio", "Bytemark",
];

const valueProps = [
  { icon: BarChart3, title: "Compare multiple quotes", desc: "Side-by-side proposals from vetted FinOps experts in days." },
  { icon: ShieldCheck, title: "Read-only access", desc: "Bank-grade security. Partners only see billing, never your infra." },
  { icon: Unlock, title: "No lock-ins", desc: "Pick the best deal — switch partners anytime, zero penalties." },
  { icon: Users, title: "FinOps experts network", desc: "Pre-vetted specialists for AWS, Azure and GCP optimization." },
];

const stats = [
  { v: "60%", l: "Max savings" },
  { v: "200+", l: "Businesses served" },
  { v: "$14M+", l: "Cloud spend optimized" },
  { v: "6+", l: "FinOps partners" },
];

const steps = [
  { n: "01", t: "Share your cloud bill", d: "Grant secure read-only billing access in minutes." },
  { n: "02", t: "Partners analyze & quote", d: "Top FinOps providers compete with optimization plans." },
  { n: "03", t: "Choose the best deal", d: "Pick the proposal that maximizes your savings." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Trophy className="h-3.5 w-3.5" /> The FinOps marketplace for cloud savings
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Save up to <span className="text-gradient">60%</span> on your cloud bills
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Multiple FinOps partners compete to optimize your AWS, Azure and GCP spend.
              You get the best quote — without infrastructure changes or vendor lock-ins.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-transform hover:scale-[1.03]"
              >
                Get My Savings <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Read-only access</span>
              <span className="flex items-center gap-2"><Unlock className="h-4 w-4 text-primary" /> No lock-ins</span>
              <span className="flex items-center gap-2"><Layers className="h-4 w-4 text-primary" /> No migrations</span>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* Customers */}
      <Section
        eyebrow="Customers"
        title={<>Loved by <span className="text-gradient">200+ companies</span></>}
        subtitle="From scale-ups to enterprises optimizing multi-cloud spend."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {customers.map((c) => (
            <div
              key={c}
              className="group rounded-xl border border-border bg-card px-4 py-6 text-center font-display text-base font-semibold text-muted-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
            >
              {c}
            </div>
          ))}
        </div>
      </Section>

      {/* Value props */}
      <Section
        eyebrow="Why Fixcloudcost"
        title={<>One marketplace. <span className="text-gradient">All the leverage.</span></>}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-emerald"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats band */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-muted/40 p-8 shadow-soft md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl font-bold text-gradient md:text-5xl">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <Section
        eyebrow="How it works"
        title={<>Savings in <span className="text-gradient">3 simple steps</span></>}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-emerald"
            >
              <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See the full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
