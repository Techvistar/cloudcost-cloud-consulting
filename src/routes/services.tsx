import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowRightLeft,
    BarChart3,
    Check,
    ClipboardCheck,
    GitBranch,
    Network,
    Server,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
const serviceWallpaper = "/service-wallpaper.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cloudcost" },
      {
        name: "description",
        content:
          "Comprehensive cloud services: FinOps consulting, cost optimization, managed services, migration, architecture design, security, and AWS Well-Architected reviews.",
      },
      { property: "og:title", content: "Services — Cloudcost" },
      {
        property: "og:description",
        content: "Expert cloud consulting services for enterprise infrastructure transformation.",
      },
    ],
  }),
  component: ServicesPage,
});

/* ─── Service data (content unchanged) ─── */
const services = [
  {
    icon: BarChart3,
    title: "Cost & Performance Optimization",
    desc: "Maximize performance. Minimize cloud spend.",
    fullDesc:
      "We analyze your cloud infrastructure and eliminate inefficiencies to ensure you get the best value from your cloud investment.",
    bullets: [
      "Cloud cost audit & usage analysis",
      "Identify unused / underutilized resources",
      "Performance tuning for applications & workloads",
      "Continuous monitoring & optimization",
      "Multi-cloud optimization (AWS, Azure, GCP)",
    ],
    focus: "Balancing cost, performance, and reliability using data-driven insights and best practices.",
  },
  {
    icon: Server,
    title: "Cloud Managed Services",
    desc: "End-to-end management of your cloud infrastructure.",
    fullDesc:
      "Reduce operational overhead while ensuring your systems remain secure, scalable, and always available.",
    bullets: [
      "24/7 monitoring & alerting",
      "Infrastructure automation",
      "Security & compliance management",
      "Backup & disaster recovery",
      "Ongoing optimization",
    ],
    focus: "Secure, highly available, and fully managed environments.",
  },
  {
    icon: ArrowRightLeft,
    title: "Cloud Migration",
    desc: "Seamlessly move to the cloud without risk or downtime.",
    fullDesc: "Includes:",
    bullets: [
      "Lift & shift migration",
      "Hybrid cloud setup",
      "Re-architecture for cost efficiency",
      "Application & database migration",
    ],
    focus: "Optimized migration outcomes with minimal disruption.",
  },
  {
    icon: Network,
    title: "Cloud Architecture Design",
    desc: "Build scalable and future-ready cloud infrastructure.",
    fullDesc: "Includes:",
    bullets: [
      "Infrastructure & platform strategy",
      "Secure and resilient architecture",
      "Scalability planning",
      "AWS best practices implementation",
    ],
    focus: "Security, resilience, and performance.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    desc: "Accelerate development with automated pipelines.",
    fullDesc: "Includes:",
    bullets: [
      "CI/CD pipeline setup",
      "Automated deployments",
      "Infrastructure as Code",
      "Testing & monitoring pipelines",
    ],
    focus: "Full lifecycle automation from code to production.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Protect your cloud infrastructure and stay compliant.",
    fullDesc: "Includes:",
    bullets: [
      "Security audits & assessments",
      "Compliance frameworks (ISO, SOC2, etc.)",
      "Risk mitigation strategies",
      "Data protection",
    ],
    focus: "Securing sensitive data and ensuring compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "AWS Well-Architected Review",
    desc: "Evaluate and improve your cloud setup using AWS best practices.",
    fullDesc: "Based on 6 pillars:",
    bullets: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
      "Sustainability",
    ],
    focus: "Secure, scalable, and efficient infrastructure.",
  },
];

/* ─── Floating particle positions ─── */
const particles = [
  { x: "7%",  y: "22%", r: 2.5, dur: 7,   del: 0 },
  { x: "91%", y: "14%", r: 2,   dur: 9,   del: 1.2 },
  { x: "18%", y: "74%", r: 3,   dur: 8,   del: 0.5 },
  { x: "82%", y: "68%", r: 2,   dur: 6.5, del: 2 },
  { x: "49%", y: "8%",  r: 2,   dur: 7.5, del: 1.8 },
  { x: "63%", y: "88%", r: 2.5, dur: 8.5, del: 0.3 },
  { x: "34%", y: "55%", r: 1.5, dur: 6,   del: 2.5 },
];

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0   },
};

const stagger = (i: number) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ═══════════════════════════════════════════
   SERVICE CARD
═══════════════════════════════════════════ */
function ServiceCard({ s, i }: { s: (typeof services)[0]; i: number }) {
  return (
    <motion.article
      variants={stagger(i)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px" }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-7 transition-shadow duration-300 hover:shadow-[0_20px_56px_-16px_oklch(0.30_0.05_165_/_0.18)] hover:border-primary/25"
    >
      {/* Hover gradient wash — fades in on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.035] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon container */}
      <div className="relative mb-4 sm:mb-6 flex h-12 sm:h-14 w-12 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-primary/6 shadow-sm ring-1 ring-primary/12 transition-all duration-300 group-hover:from-primary/26 group-hover:to-primary/10 group-hover:ring-primary/22">
        <s.icon className="h-5 sm:h-6 w-5 sm:w-6 text-primary" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="font-display text-base sm:text-[17px] font-bold leading-snug tracking-tight text-foreground">
        {s.title}
      </h3>

      {/* Subtitle */}
      <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[13px] font-semibold text-primary/90">{s.desc}</p>

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] leading-relaxed text-muted-foreground">{s.fullDesc}</p>

      {/* Bullets */}
      <ul className="mt-4 sm:mt-5 flex flex-col gap-2">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] leading-relaxed text-foreground/80">
            <span className="mt-[2px] sm:mt-[3px] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-2.5 w-2.5 text-primary" strokeWidth={2.5} />
            </span>
            {b}
          </li>
        ))}
      </ul>

      {/* Focus footer */}
      <div className="mt-auto border-t border-border/60 pt-4 sm:pt-5">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-primary/75">
          {s.focus}
        </p>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
function ServicesPage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative overflow-hidden bg-background"
        style={{
          backgroundImage: `url(${serviceWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
        {/* Mesh radial gradients */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: [
              "radial-gradient(ellipse 72% 55% at 50% -8%, oklch(0.36 0.10 162 / 0.13) 0%, transparent 70%)",
              "radial-gradient(ellipse 50% 40% at 90% 50%, oklch(0.82 0.13 80 / 0.08) 0%, transparent 65%)",
              "radial-gradient(ellipse 45% 35% at 10% 80%, oklch(0.50 0.14 160 / 0.07) 0%, transparent 65%)",
            ].join(", "),
          }}
        />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

        {/* Floating particles */}
        {particles.map((p, idx) => (
          <motion.span
            key={idx}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-primary/30"
            style={{ left: p.x, top: p.y, width: p.r * 2, height: p.r * 2 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-28 md:py-36 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-primary">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading mt-5 sm:mt-7 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-black leading-[1.04] tracking-tight text-foreground"
          >
            Comprehensive Cloud{" "}
            <span className="text-gradient-hero">Consulting Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 sm:mt-7 max-w-xl text-sm sm:text-[15px] md:text-base leading-relaxed text-muted-foreground"
          >
            From cost optimization to full infrastructure management — expert cloud consulting
            services tailored to your business needs.
          </motion.p>

          {/* Decorative bottom fade */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-background))",
            }}
          />
        </div>
      </section>

      {/* ══════════════ CARDS ══════════════ */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 pb-3 sm:pb-6 pt-2 sm:pt-4">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-12 sm:py-20 md:py-28">
        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 162) 0%, oklch(0.28 0.09 162) 40%, oklch(0.20 0.06 165) 100%)",
          }}
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-25" />

          {/* Radial light source — top center */}
          <div
            className="pointer-events-none absolute left-1/2 -top-32 h-80 w-96 -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.50 0.14 160 / 0.28) 0%, transparent 70%)",
            }}
          />

          {/* Gold orb — right */}
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.82 0.13 80 / 0.18) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          {/* Emerald orb — left */}
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.58 0.15 160 / 0.22) 0%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          {/* Animated wave lines */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 400"
          >
            {[0, 1, 2].map((n) => (
              <motion.path
                key={n}
                d={`M0,${140 + n * 55} C200,${100 + n * 55} 400,${190 + n * 55} 600,${140 + n * 55} C800,${90 + n * 55} 1000,${185 + n * 55} 1200,${140 + n * 55}`}
                fill="none"
                stroke="white"
                strokeWidth={n === 1 ? 0.6 : 0.35}
                strokeOpacity={n === 1 ? 0.12 : 0.07}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 + n * 0.5, delay: n * 0.3, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Floating CTA particles */}
          {[
            { x: "5%",  y: "20%", r: 2, dur: 6,   del: 0 },
            { x: "95%", y: "70%", r: 1.5, dur: 8, del: 1 },
            { x: "88%", y: "18%", r: 2, dur: 7,   del: 2 },
            { x: "12%", y: "78%", r: 1.5, dur: 9, del: 0.5 },
            { x: "50%", y: "90%", r: 2, dur: 6.5, del: 1.5 },
          ].map((p, idx) => (
            <motion.span
              key={idx}
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full bg-white/20"
              style={{ left: p.x, top: p.y, width: p.r * 2, height: p.r * 2 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Content */}
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16 text-center text-primary-foreground md:px-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Start optimizing today
              </span>

              <h2 className="mt-6 sm:mt-7 font-display text-3xl sm:text-4xl font-black leading-[1.04] tracking-tight md:text-5xl lg:text-[3.5rem]">
                Ready to reduce your{" "}
                <span className="text-gradient-gold">cloud spend?</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-primary-foreground/85 md:text-base">
                Get side-by-side savings proposals from top FinOps partners — in days, not months.
                No migrations. No lock-ins.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.50 0.14 160), oklch(0.40 0.12 162))",
                    boxShadow: "0 4px 24px -4px oklch(0.40 0.12 162 / 0.60), 0 1px 3px oklch(0.30 0.09 162 / 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 36px -4px oklch(0.40 0.12 162 / 0.75), 0 2px 8px oklch(0.30 0.09 162 / 0.30)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 24px -4px oklch(0.40 0.12 162 / 0.60), 0 1px 3px oklch(0.30 0.09 162 / 0.25)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  Get My Savings
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/22 bg-white/8 px-8 py-4 text-[15px] font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/14 hover:text-white hover:-translate-y-0.5"
                >
                  How It Works
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
