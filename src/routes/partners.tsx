import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import partnersWallpaper from "../assets/partners.png";
import pumpLogo      from "../assets/pmp.co.svg";
import appsquadzLogo from "../assets/appsqaudz-logo.svg";
import milkstrawLogo from "../assets/milkstraw.png";
import usageLogo     from "../assets/usage-ai.png";
import archeraLogo   from "../assets/archera.png";
import spendbaseLogo from "../assets/spendbase.co.png";

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
  { name: "pump.co",       spec: "AWS Cost Optimization",  desc: "Automated AWS savings via group buying and commitment management.",   color: "#16A34A", logo: pumpLogo      },
  { name: "appsquadz",    spec: "Cloud Managed Services",  desc: "End-to-end managed cloud operations with FinOps practices baked in.", color: "#2563EB", logo: appsquadzLogo },
  { name: "milkstraw",    spec: "Kubernetes Optimization", desc: "Autonomous Kubernetes cost & performance optimization across clouds.", color: "#7C3AED", logo: milkstrawLogo },
  { name: "usage.ai",     spec: "RI & Savings Plans",      desc: "AI-driven Reserved Instance and Savings Plans management for AWS.",   color: "#059669", logo: usageLogo     },
  { name: "archera.ai",   spec: "Commitment Insurance",    desc: "Guaranteed savings with flexible 30-day commitments and analytics.",  color: "#4F46E5", logo: archeraLogo   },
  { name: "spendbase.co", spec: "SaaS & Cloud Spend",      desc: "Unified cloud and SaaS spend management with negotiated discounts.",  color: "#0284C7", logo: spendbaseLogo },
];

/* Clean staggered fade-up — no rotateY / rotate */
const cardAnim = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  whileHover: { y: -5 },
});

function PartnersPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-background"
        style={{
          backgroundImage: `url(${partnersWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20 md:py-32 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-3 py-1 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
            Partner Network
          </span>
          <h1 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Top FinOps experts, <span className="text-gradient">competing for you</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
            Every partner is vetted for technical depth, transparent pricing, and proven savings outcomes.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              {...cardAnim(i)}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-soft transition-all duration-300 hover:border-transparent hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)]"
            >
              {/* Logo */}
              <div className="flex h-10 sm:h-12 items-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 sm:h-10 w-auto max-w-[200px] object-contain object-left"
                  loading="lazy"
                />
              </div>

              {/* Spec tag */}
              <span
                className="mt-4 sm:mt-5 w-fit rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide"
                style={{ background: `${p.color}12`, color: p.color }}
              >
                {p.spec}
              </span>

              {/* Description */}
              <p className="mt-3 sm:mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              {/* Hover CTA */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ color: p.color }}>
                Available in marketplace <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
