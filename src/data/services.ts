import type { ServiceBlockContent } from "@/components/site/FeaturedSolutionsSection";

export type ServiceCategoryMeta = {
  id: string;
  label: string;
  description: string;
  services: ServiceBlockContent[];
};

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "platform",
    label: "Cloud Platform",
    description:
      "Optimize spend, migrate with confidence, and run production workloads with enterprise-grade managed operations.",
    services: [
      {
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
        focus:
          "Balancing cost, performance, and reliability using data-driven insights and best practices.",
      },
      {
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
    ],
  },
  {
    id: "finops",
    label: "FinOps Marketplace",
    description:
      "Our curated partner network competes for your business—transparent quotes, read-only access, and savings you can measure.",
    services: [
      {
        title: "Quote Comparison",
        desc: "Side-by-side FinOps proposals in one view.",
        fullDesc:
          "Compare competing offers from vetted partners with clear breakdowns of projected savings, fees, contract terms, and implementation scope.",
        bullets: [
          "Normalized comparison across all partner bids",
          "Savings, risk, and break-even analysis",
          "Coverage for AWS, Azure, and GCP environments",
          "No obligation until you select a partner",
          "Decisions delivered in days—not months",
        ],
        focus: "Outcome: confident partner selection backed by data.",
      },
      {
        title: "Read-Only Access",
        desc: "Billing visibility only. Zero production risk.",
        fullDesc:
          "Partners analyze spend through read-only billing and CUR access. Your workloads, data, and architecture remain completely untouched.",
        bullets: [
          "Cross-account roles with least-privilege access",
          "No changes to infrastructure or applications",
          "No data migration or agent deployment required",
          "Audit-friendly access model for security teams",
          "Enterprise-grade encryption and access controls",
        ],
        focus: "Outcome: accurate proposals without operational exposure.",
      },
      {
        title: "Sign & Save",
        desc: "Formalize savings with clarity before you commit.",
        fullDesc:
          "Once you choose a partner, we help structure commitments—Reserved Instances, Savings Plans, and enterprise agreements—aligned to your usage profile.",
        bullets: [
          "RI, SP, and commitment strategy tailored to usage",
          "Contract, SLA, and fee transparency before signing",
          "Savings validated against an agreed baseline",
          "Ongoing reviews as usage patterns evolve",
          "No lock-ins beyond terms you explicitly approve",
        ],
        focus: "Outcome: signed agreements with measurable savings from day one.",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering & Governance",
    description:
      "Modern delivery practices, security at scale, and AWS Well-Architected excellence for teams building in the cloud.",
    services: [
      {
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
    ],
  },
];
