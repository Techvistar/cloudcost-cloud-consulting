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
  { v: "$14M+", l: "Cloud spend optimized" },
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

        <div className="relative mx-auto max-w-[1280px] px-6 pb-32 pt-20 md:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
            {/* LEFT */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> The FinOps marketplace for cloud savings
              </span>
              <h1 className="mt-7 font-display text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Save up to <span className="text-gradient">60%</span><br />
                on your cloud bills
              </h1>
              <p className="mt-7 max-w-[640px] text-lg text-muted-foreground md:text-xl">
                Multiple FinOps partners compete to optimize your AWS, Azure and GCP spend.
                You get the best quote — without infrastructure changes or vendor lock-ins.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Read-only access</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No lock-ins</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No migrations</span>
              </div>
            </div>

            {/* RIGHT - Dashboard mockup */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary-glow/10 to-gold/20 blur-2xl" />
              <div className="relative rounded-3xl border border-border/80 bg-card p-5 shadow-emerald">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-emerald-deep text-primary-foreground">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Cloud Savings</div>
                      <div className="text-xs text-muted-foreground">Live partner quotes</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" /> Live
                  </span>
                </div>

                {/* Big number */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-emerald-deep p-5 text-primary-foreground shadow-soft">
                    <div className="flex items-center gap-1.5 text-xs opacity-80">
                      <TrendingDown className="h-3.5 w-3.5" /> Projected savings
                    </div>
                    <div className="mt-2 font-display text-4xl font-black">58%</div>
                    <div className="mt-1 text-xs opacity-80">$84,200 / month</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <DollarSign className="h-3.5 w-3.5" /> Current spend
                    </div>
                    <div className="mt-2 font-display text-4xl font-black">$145K</div>
                    <div className="mt-1 text-xs text-muted-foreground">AWS · Azure · GCP</div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">Spend trajectory</span>
                    <span className="text-muted-foreground">Last 6 months</span>
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-1.5">
                    {[60, 75, 70, 85, 65, 38].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary-glow" style={{ height: `${h}%`, opacity: 0.4 + i * 0.1 }} />
                    ))}
                  </div>
                </div>

                {/* Partner quotes */}
                <div className="mt-4 space-y-2">
                  {[
                    { n: "Pump.co", s: "58%", t: "Best match", g: true },
                    { n: "Cast.ai", s: "52%", t: "RI optimized" },
                    { n: "Archera.ai", s: "47%", t: "Spot strategy" },
                  ].map((p) => (
                    <div key={p.n} className={`flex items-center justify-between rounded-xl border p-3 ${p.g ? "border-primary/40 bg-primary/5" : "border-border bg-muted/30"}`}>
                      <div className="flex items-center gap-3">
                        <div className={`grid h-8 w-8 place-items-center rounded-lg ${p.g ? "bg-gradient-emerald-deep text-primary-foreground" : "bg-card border border-border"}`}>
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{p.n}</div>
                          <div className="text-xs text-muted-foreground">{p.t}</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gradient">{p.s}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-24 hidden rounded-2xl border border-border bg-card p-3 shadow-emerald lg:flex animate-float">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold text-gold-foreground">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Avg. savings</div>
                    <div className="text-sm font-bold">$84K / month</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 hidden rounded-2xl border border-border bg-card p-3 shadow-emerald lg:flex animate-float-delay">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                    <LineChart className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Quotes ready in</div>
                    <div className="text-sm font-bold">3–5 days</div>
                  </div>
                </div>
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
