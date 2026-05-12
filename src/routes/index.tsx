import { FinalCTA } from "@/components/site/CTA";
import { PartnerMarquee } from "@/components/site/Marquee";
import { Section } from "@/components/site/Section";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "../assets/hero-bg.png";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  FileText,
  Headphones,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloudcost — Enterprise Cloud Consulting & Cost Optimization" },
      {
        name: "description",
        content: "Transform your cloud infrastructure with expert consulting services. Cost optimization, migration, architecture design, and 24/7 managed operations across AWS, Azure, and GCP.",
      },
      { property: "og:title", content: "Cloudcost — Enterprise Cloud Consulting & Cost Optimization" },
      {
        property: "og:description",
        content: "Enterprise-grade cloud consulting and cost optimization services for AWS, Azure, and GCP infrastructure.",
      },
    ],
  }),
  component: HomePage,
});

const valueProps = [
  {
    icon: FileText,
    title: "Multi-Cloud Expertise",
    desc: "Comprehensive support across AWS, Azure, and GCP with deep platform knowledge and best practices.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade security measures and compliance frameworks to protect your cloud infrastructure.",
  },
  {
    icon: TrendingDown,
    title: "Performance Optimization",
    desc: "Data-driven insights and automation to maximize performance while minimizing costs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "24/7 expert support and managed services to ensure your systems remain secure and available.",
  },
];

const steps = [
  { n: "01", t: "Assessment & Planning", d: "Comprehensive analysis of your current infrastructure and requirements to develop a tailored cloud strategy." },
  { n: "02", t: "Design & Implementation", d: "Expert architecture design and seamless implementation of cloud solutions with minimal disruption." },
  { n: "03", t: "Optimization & Support", d: "Continuous monitoring, optimization, and ongoing support to ensure peak performance and cost efficiency." },
];

// Animation variants for value props cards
const valuePropVariants = [
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.05, rotateY: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.05, rotateY: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, rotateX: 10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  }
];

// Animation variants for steps cards
const stepVariants = [
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100 },
    hover: { scale: 1.05, y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }
  },
  {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 200, damping: 10 },
    hover: { scale: 1.1, rotate: 2, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { type: "spring", stiffness: 150 },
    hover: { scale: 1.05, rotateY: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  }
];

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "110px"]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: "min(88vh, 100svh)", display: "flex", alignItems: "center" }}>
        {/* Parallax wallpaper */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale: 1.28,
            y: bgY,
          }}
        />
        {/* Premium cream overlay — preserves green/gold tones, ensures readability */}
        <div className="pointer-events-none absolute inset-0 bg-hero-overlay" />

        <div className="relative w-full mx-auto max-w-[1100px] px-4 sm:px-6 pb-14 sm:pb-28 md:pb-36 pt-14 sm:pt-24 md:pt-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/30 bg-white/85 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-primary shadow-soft backdrop-blur-md"
            >
              <Sparkles className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> Cloud Cost Optimization
            </motion.span>
            <h1 className="hero-heading mx-auto mt-6 sm:mt-8 max-w-[22ch] font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-black leading-[1.02] tracking-tight text-foreground">
              Reduce Your{" "}
              <span className="text-gradient-hero">Cloud Spend</span>
            </h1>
            <p className="mx-auto mt-5 sm:mt-8 max-w-[660px] text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
              Enterprise-grade cloud optimization, migration, and managed services. Get competing FinOps quotes from top partners within days. Transform your infrastructure across AWS, Azure, and GCP.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-11 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="group btn-hero btn-hero-primary relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative inline-flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/services"
                className="btn-hero btn-hero-secondary"
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-primary" /> AWS, Azure, GCP</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-primary" /> Enterprise Security</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-primary" /> 24/7 Support</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PartnerMarquee />

      {/* Value props - alternating bg */}
      <div className="bg-gradient-to-b from-transparent via-muted/40 to-transparent">
        <Section
          eyebrow="Why Choose Us"
          title={<>Enterprise Cloud <span className="text-gradient">Consulting Excellence</span></>}
          subtitle="Comprehensive cloud solutions delivered by certified experts with proven track records across major cloud platforms."
        >
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <motion.div
                key={v.title}
                initial={valuePropVariants[i].initial}
                animate={valuePropVariants[i].animate}
                whileHover={valuePropVariants[i].hover}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group card-panel overflow-hidden p-5 sm:p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald"
              >
                <div className="absolute inset-x-0 -top-px mx-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-[#F8F6EF] border border-[rgba(148,163,184,0.16)] shadow-[0_14px_30px_-18px_rgba(16,185,129,0.18)]">
                  <div className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full border border-[rgba(16,185,129,0.14)] bg-[#F8F6EF]">
                    <v.icon className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-900" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Process */}
      <Section
        eyebrow="Our Process"
        title={<>From Assessment to <span className="text-gradient">Optimization</span></>}
        subtitle="A proven methodology for transforming your cloud infrastructure with minimal risk and maximum efficiency."
      >
        <div className="relative grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
          <div className="absolute left-1/2 top-16 hidden h-px w-[calc(100%_-_4rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={stepVariants[i].initial}
              animate={stepVariants[i].animate}
              whileHover={stepVariants[i].hover}
              transition={stepVariants[i].transition || { duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group card-panel relative p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="font-display text-4xl sm:text-5xl font-black text-gradient">{s.n}</div>
                <div className="grid h-10 sm:h-11 w-10 sm:w-11 place-items-center rounded-2xl bg-primary/10 text-primary shadow-soft flex-shrink-0">
                  {i === 0 ? <ShieldCheck className="h-4.5 sm:h-5 w-4.5 sm:w-5" /> : i === 1 ? <Layers className="h-4.5 sm:h-5 w-4.5 sm:w-5" /> : <TrendingDown className="h-4.5 sm:h-5 w-4.5 sm:w-5" />}
                </div>
              </div>
              <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-20 z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-primary md:grid">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-foreground"
          >
            Explore Our Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
