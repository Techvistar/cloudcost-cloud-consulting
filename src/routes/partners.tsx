import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Cloudcost" },
      { name: "description", content: "Meet our vetted FinOps partners competing to optimize your cloud spend: pump.co, cast.ai, archera.ai, spendbase.co and more." },
      { property: "og:title", content: "Cloudcost FinOps Partner Network" },
      { property: "og:description", content: "Top FinOps experts across AWS, Azure and GCP." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "pump.co", spec: "AWS Cost Optimization", desc: "Automated AWS savings via group buying and commitment management." },
  { name: "appsquadz", spec: "Cloud Managed Services", desc: "End-to-end managed cloud operations with FinOps practices baked in." },
  { name: "cast.ai", spec: "Kubernetes Optimization", desc: "Autonomous Kubernetes cost & performance optimization across clouds." },
  { name: "usage.ai", spec: "RI & Savings Plans", desc: "AI-driven Reserved Instance and Savings Plans management for AWS." },
  { name: "archera.ai", spec: "Commitment Insurance", desc: "Guaranteed savings with flexible 30-day commitments and analytics." },
  { name: "spendbase.co", spec: "SaaS & Cloud Spend", desc: "Unified cloud and SaaS spend management with negotiated discounts." },
];

// Animation variants for partner cards
const partnerVariants = [
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 100 },
    hover: { scale: 1.05, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.05, rotateY: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, rotate: 10 },
    animate: { opacity: 1, rotate: 0 },
    transition: { type: "spring", stiffness: 120 },
    hover: { scale: 1.05, rotate: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, y: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  }
];

function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Partner Network
          </span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Top FinOps experts, <span className="text-gradient">competing for you</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Every partner is vetted for technical depth, transparent pricing, and proven savings outcomes.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={partnerVariants[i].initial}
              animate={partnerVariants[i].animate}
              whileHover={partnerVariants[i].hover}
              transition={partnerVariants[i].transition || { duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-emerald"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary font-display text-xl font-bold text-primary-foreground shadow-emerald">
                {p.name[0].toUpperCase()}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{p.name}</h3>
              <span className="mt-1 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {p.spec}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Available in marketplace <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
