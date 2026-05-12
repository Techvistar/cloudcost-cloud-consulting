import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileCheck,
  FileText,
  Search,
  Users2,
} from "lucide-react";
import howItWorksWallpaper from "../assets/how-it-works.png";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
});

const steps = [
  {
    n: "01",
    day: "Day 1",
    t: "Discovery call",
    d: "A 20-minute call to understand your cloud footprint, contracts, and savings goals.",
    Icon: Search,
  },
  {
    n: "02",
    day: "Day 1–2",
    t: "Read-only billing access",
    d: "Connect AWS, Azure, or GCP via cross-account roles. We never touch workloads.",
    Icon: FileText,
  },
  {
    n: "03",
    day: "Day 2–4",
    t: "Partner bidding",
    d: "Our FinOps partner network — pump.co, Archenova, Usageal, Spendbase.co, Cast.ai, AppSquadz — competes for your spend.",
    Icon: Users2,
  },
  {
    n: "04",
    day: "Day 5",
    t: "Quote comparison",
    d: "We deliver a side-by-side breakdown of every offer with risk, term, and break-even analysis.",
    Icon: BarChart3,
  },
  {
    n: "05",
    day: "Day 6–7",
    t: "Sign & save",
    d: "Pick the best deal. We handle paperwork, onboarding, and ongoing rebalancing.",
    Icon: FileCheck,
  },
];

const COLORS = ["#F97316", "#F59E0B", "#84CC16", "#10B981", "#064E3B"];

function CloudCard({
  step,
  index,
  side,
}: {
  step: (typeof steps)[0];
  index: number;
  side: "left" | "right";
}) {
  const color = COLORS[index];
  const isLeft = side === "left";
  const { Icon } = step;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -6, scale: 1.005 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-[460px] group"
    >
      {/* ICON BUBBLE - Positioned near the top */}
      <div
        className={`absolute top-6 sm:top-8 z-20 hidden md:flex h-20 sm:h-24 w-20 sm:w-24 items-center justify-center rounded-full bg-white shadow-xl border border-slate-50 transition-all duration-300
        ${isLeft ? "-left-10 sm:-left-12" : "-right-10 sm:-right-12"}`}
      >
        <div
          className="flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-full bg-white shadow-inner transition-transform duration-300 group-hover:scale-105"
          style={{ border: `1px solid ${color}15` }}
        >
          <Icon size={24} color={color} strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative">
        {/* MAIN BODY */}
        <div
          className="relative z-0 overflow-hidden rounded-2xl sm:rounded-[45px] bg-white p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-shadow duration-300 group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          style={{ border: `1px solid ${color}10` }}
        >
          {/* STEP NUMBER */}
          <div
            className="absolute right-4 sm:right-8 top-2 sm:top-4 text-6xl sm:text-[90px] font-black opacity-[0.04] leading-none select-none"
            style={{ color }}
          >
            {step.n}
          </div>

          <div className={`relative z-10 flex flex-col gap-3 sm:gap-4 ${isLeft ? "pr-2 sm:pr-4" : "pl-2 sm:pl-4"}`}>
            <span
              className="w-fit rounded-full px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider"
              style={{ background: `${color}10`, color }}
            >
              {step.day}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] leading-tight">{step.t}</h3>
            <p className="text-[13px] sm:text-[15px] leading-relaxed text-slate-500 font-medium">{step.d}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineNode({ i }: { i: number }) {
  const color = COLORS[i];
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Dashed Ring */}
      <div className="h-12 w-12 rounded-full border-2 border-dashed border-slate-200" />
      {/* Inner Node */}
      <div
        className="absolute h-6 w-6 rounded-full border-[4px] border-white shadow-md z-10"
        style={{ backgroundColor: color, boxShadow: `0 0 0 4px ${color}20` }}
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <main
      className="relative min-h-screen bg-[#FCFBF7] font-sans selection:bg-green-100"
      style={{
        backgroundImage: `url(${howItWorksWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[rgba(250,248,242,0.78)]" />
      {/* Background SVG Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 800" fill="none">
          <path d="M0 100 C 400 300 1000 0 1440 200" stroke="#E5E7EB" strokeWidth="1" fill="none" />
          <path
            d="M0 400 C 500 200 900 600 1440 400"
            stroke="#E5E7EB"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-12 sm:pt-20 md:pt-24 pb-16 sm:pb-28 md:pb-32">
        {/* Header */}
        <div className="mb-12 sm:mb-20 md:mb-28 max-w-2xl">
          <span className="inline-block rounded-full border border-slate-200 px-3 sm:px-5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-slate-500 uppercase">
            Our Process
          </span>
          <h1 className="mt-8 sm:mt-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#064E3B] leading-[1.05]">
            Your savings journey <br />
            <span className="text-[#84CC16]">in 7 days.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-[18px] leading-relaxed text-slate-500 font-medium">
            A clear, no-nonsense process. <br />
            No migrations. No infra changes. <br />
            Just smarter pricing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient Vertical Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 opacity-60"
            style={{ background: `linear-gradient(to bottom, ${COLORS.join(",")})` }}
          />

          <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
              >
                {/* Mobile layout: node anchored left, card fills remaining width */}
                <div className="flex items-start gap-4 md:hidden">
                  <div className="flex-shrink-0 z-10 pt-2">
                    <TimelineNode i={i} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CloudCard step={step} index={i} side="right" />
                  </div>
                </div>

                {/* Desktop: Left slot */}
                <div className="hidden md:flex justify-end md:pr-16">
                  {i % 2 === 0 ? (
                    <CloudCard step={step} index={i} side="left" />
                  ) : (
                    <div />
                  )}
                </div>

                {/* Desktop: Node */}
                <div className="hidden md:block z-10 py-4">
                  <TimelineNode i={i} />
                </div>

                {/* Desktop: Right slot */}
                <div className="hidden md:flex justify-start md:pl-16">
                  {i % 2 !== 0 ? (
                    <CloudCard step={step} index={i} side="right" />
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 sm:mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto rounded-full bg-[#064E3B] px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-2xl hover:scale-105 transition-transform"
          >
            Start the process →
          </Link>
          <Link
            to="/partners"
            className="w-full sm:w-auto rounded-full bg-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-slate-700 shadow-lg border border-slate-100 hover:bg-slate-50 transition-colors"
          >
            See who's in the network
          </Link>
        </div>
      </section>
    </main>
  );
}
