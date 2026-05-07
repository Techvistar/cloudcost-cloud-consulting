import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Layers, Unlock, Users, BarChart3, Trophy,
  Sparkles, TrendingDown, CheckCircle2, Cloud, Zap, LineChart, DollarSign,
} from "lucide-react";
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
  { icon: BarChart3, title: "Compare multiple quotes", desc: "Side-by-side proposals from vetted FinOps experts in days, not months." },
  { icon: ShieldCheck, title: "Read-only access", desc: "Bank-grade security. Partners only see billing — never your infrastructure." },
  { icon: Unlock, title: "No lock-ins, ever", desc: "Pick the best deal. Switch partners anytime, with zero penalties." },
  { icon: Users, title: "Vetted FinOps experts", desc: "Pre-screened specialists for AWS, Azure and GCP optimization." },
];

const stats = [
  { v: "60%", l: "Maximum savings" },
  { v: "200+", l: "Businesses served" },
  { v: "₹120Cr+", l: "Cloud spend optimized" },
  { v: "6+", l: "FinOps partners" },
];

const steps = [
  { n: "01", t: "Share your cloud bill", d: "Grant secure read-only billing access to AWS, Azure or GCP in minutes." },
  { n: "02", t: "Partners analyze & quote", d: "Top FinOps providers compete with detailed optimization plans and pricing." },
  { n: "03", t: "Choose the best deal", d: "Pick the proposal that maximizes your savings — no migrations, no lock-ins." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Floating orbs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-orb" />
        <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl animate-orb" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl animate-glow-pulse" />

        <div className="relative mx-auto max-w-[1100px] px-6 pb-32 pt-24 text-center md:pt-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> The FinOps marketplace for cloud savings
            </span>
            <h1 className="mx-auto mt-7 max-w-[20ch] font-display text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Save up to <span className="text-gradient">60%</span> on your cloud bills
            </h1>
            <p className="mx-auto mt-7 max-w-[680px] text-lg text-muted-foreground md:text-xl">
              Multiple FinOps partners compete to optimize your AWS, Azure and GCP spend.
              You get the best quote — without infrastructure changes or vendor lock-ins.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-emerald-deep px-8 py-4 text-base font-semibold text-primary-foreground shadow-emerald transition-all hover:shadow-glow hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Get My Savings <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition-all hover:bg-card hover:border-primary/40"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Read-only access</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No lock-ins</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No migrations</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* Customers */}
      <Section
        eyebrow="Customers"
        title={<>Trusted by <span className="text-gradient">200+ cloud-native companies</span></>}
        subtitle="From scale-ups to enterprises optimizing multi-cloud spend at scale."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {customers.map((c) => (
            <div
              key={c}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card px-4 py-7 text-center font-display text-base font-semibold text-muted-foreground shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-foreground hover:shadow-emerald"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-transparent to-gold/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-primary/5 group-hover:to-gold/5" />
              {c}
            </div>
          ))}
        </div>
      </Section>

      {/* Value props - alternating bg */}
      <div className="bg-gradient-to-b from-transparent via-muted/40 to-transparent">
        <Section
          eyebrow="Why Fixcloudcost"
          title={<>One marketplace. <span className="text-gradient">All the leverage.</span></>}
          subtitle="Built for CTOs, DevOps and finance leaders who want real savings — not another dashboard."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <div
                key={v.title}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="absolute inset-x-0 -top-px mx-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-emerald-deep text-primary-foreground shadow-soft">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Stats band */}
      <section className="mx-auto max-w-[1280px] px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-emerald-deep p-10 text-primary-foreground shadow-emerald md:p-14">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((s) => (
              <div key={s.l} className="px-4 text-center">
                <div className="font-display text-5xl font-black md:text-6xl">{s.v}</div>
                <div className="mt-2 text-sm opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <Section
        eyebrow="How it works"
        title={<>Savings in <span className="text-gradient">3 simple steps</span></>}
        subtitle="From cloud bill to side-by-side proposals — usually in less than a week."
      >
        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald"
            >
              <div className="flex items-start justify-between">
                <div className="font-display text-6xl font-black text-gradient">{s.n}</div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  {i === 0 ? <ShieldCheck className="h-5 w-5" /> : i === 1 ? <Users className="h-5 w-5" /> : <Trophy className="h-5 w-5" />}
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-20 z-10 hidden h-7 w-7 place-items-center rounded-full border border-border bg-background text-primary md:grid">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
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
