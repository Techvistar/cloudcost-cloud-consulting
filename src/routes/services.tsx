import { FinalCTA } from "@/components/site/CTA";
import { Section } from "@/components/site/Section";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
    Award,
    CheckCircle2,
    Compass,
    Lock,
    MoveRight,
    Server,
    TrendingDown,
    Workflow,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cloudcost" },
      { name: "description", content: "Comprehensive cloud services: FinOps consulting, cost optimization, managed services, migration, architecture design, security, and AWS Well-Architected reviews." },
      { property: "og:title", content: "Services — Cloudcost" },
      { property: "og:description", content: "Expert cloud consulting services for enterprise infrastructure transformation." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: TrendingDown,
    title: "Cost & Performance Optimization",
    desc: "Maximize performance. Minimize cloud spend.",
    fullDesc: "We analyze your cloud infrastructure and eliminate inefficiencies to ensure you get the best value from your cloud investment.",
    bullets: [
      "Cloud cost audit & usage analysis",
      "Identify unused / underutilized resources",
      "Performance tuning for applications & workloads",
      "Continuous monitoring & optimization",
      "Multi-cloud optimization (AWS, Azure, GCP)"
    ],
    focus: "Balancing cost, performance, and reliability using data-driven insights and best practices.",
  },
  {
    icon: Server,
    title: "Cloud Managed Services",
    desc: "End-to-end management of your cloud infrastructure.",
    fullDesc: "Reduce operational overhead while ensuring your systems remain secure, scalable, and always available.",
    bullets: [
      "24/7 monitoring & alerting",
      "Infrastructure automation",
      "Security & compliance management",
      "Backup & disaster recovery",
      "Ongoing optimization"
    ],
    focus: "Secure, highly available, and fully managed environments.",
  },
  {
    icon: MoveRight,
    title: "Cloud Migration",
    desc: "Seamlessly move to the cloud without risk or downtime.",
    fullDesc: "Includes:",
    bullets: [
      "Lift & shift migration",
      "Hybrid cloud setup",
      "Re-architecture for cost efficiency",
      "Application & database migration"
    ],
    focus: "Optimized migration outcomes with minimal disruption.",
  },
  {
    icon: Compass,
    title: "Cloud Architecture Design",
    desc: "Build scalable and future-ready cloud infrastructure.",
    fullDesc: "Includes:",
    bullets: [
      "Infrastructure & platform strategy",
      "Secure and resilient architecture",
      "Scalability planning",
      "AWS best practices implementation"
    ],
    focus: "Security, resilience, and performance.",
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    desc: "Accelerate development with automated pipelines.",
    fullDesc: "Includes:",
    bullets: [
      "CI/CD pipeline setup",
      "Automated deployments",
      "Infrastructure as Code",
      "Testing & monitoring pipelines"
    ],
    focus: "Full lifecycle automation from code to production.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Protect your cloud infrastructure and stay compliant.",
    fullDesc: "Includes:",
    bullets: [
      "Security audits & assessments",
      "Compliance frameworks (ISO, SOC2, etc.)",
      "Risk mitigation strategies",
      "Data protection"
    ],
    focus: "Securing sensitive data and ensuring compliance.",
  },
  {
    icon: Award,
    title: "AWS Well-Architected Review",
    desc: "Evaluate and improve your cloud setup using AWS best practices.",
    fullDesc: "Based on 6 pillars:",
    bullets: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
      "Sustainability"
    ],
    focus: "Secure, scalable, and efficient infrastructure.",
  },
];

// Animation variants for service cards
const serviceVariants = [
  {
    initial: { opacity: 0, x: -100, rotateY: -90 },
    animate: { opacity: 1, x: 0, rotateY: 0 },
    hover: { scale: 1.05, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100 },
    hover: { scale: 1.08, y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }
  },
  {
    initial: { opacity: 0, scale: 0.5, rotate: 180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { type: "spring", stiffness: 200, damping: 15 },
    hover: { scale: 1.1, rotate: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, x: 100, rotateX: 90 },
    animate: { opacity: 1, x: 0, rotateX: 0 },
    hover: { scale: 1.05, rotateX: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  },
  {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 150 },
    hover: { scale: 1.07, y: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
  },
  {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 120, damping: 20 },
    hover: { scale: 1.05, rotate: 3, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }
  },
  {
    initial: { opacity: 0, rotateY: 180 },
    animate: { opacity: 1, rotateY: 0 },
    hover: { scale: 1.06, rotateY: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }
  }
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-55" />
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-orb" />
        <div className="pointer-events-none absolute -right-24 top-28 h-[18rem] w-[18rem] rounded-full bg-gold/15 blur-3xl animate-orb" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Our Services
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            Comprehensive Cloud <span className="text-gradient">Consulting Solutions</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            From cost optimization to full infrastructure management — expert cloud consulting services tailored to your business needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={serviceVariants[i].initial}
              animate={serviceVariants[i].animate}
              whileHover={serviceVariants[i].hover}
              transition={serviceVariants[i].transition || { duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group card-panel overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-emerald hover:border-primary/30"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-sm">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm font-medium text-primary">{s.desc}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.fullDesc}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                Focus: {s.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
