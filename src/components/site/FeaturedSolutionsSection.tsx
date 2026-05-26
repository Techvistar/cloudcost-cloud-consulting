import { m } from "@/components/motion/MotionProvider";
import { Check } from "lucide-react";
import costPerfImg from "@/assets/Cost and performance optimization.jpeg";
import managedImg from "@/assets/Cloud Managed Services.jpeg";
import migrationImg from "@/assets/Cloud Migration.jpeg";

type FeaturedService = {
  title: string;
  desc: string;
  fullDesc: string;
  bullets: string[];
  focus: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function FeaturedBlock({
  service,
  image,
  imageRight,
  index,
}: {
  service: FeaturedService;
  image: string;
  imageRight: boolean;
  index: number;
}) {
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
    >
      <div
        className={`order-1 flex justify-center px-2 sm:px-4 ${imageRight ? "md:order-2" : "md:order-1"}`}
      >
        <div className="group relative w-full max-w-[min(100%,420px)]">
          <div
            className="pointer-events-none absolute inset-6 rounded-[2rem] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.50 0.14 160 / 0.22) 0%, transparent 72%)",
              filter: "blur(28px)",
            }}
            aria-hidden
          />
          <m.div
            className="relative animate-float"
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 260, damping: 22 } }}
          >
            <img
              src={image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full object-contain drop-shadow-[0_24px_48px_-12px_oklch(0.32_0.09_162_/_0.28)]"
            />
          </m.div>
        </div>
      </div>

      <div className={`order-2 ${imageRight ? "md:order-1" : "md:order-2"}`}>
        <div className="relative glass-panel overflow-hidden rounded-2xl border border-primary/12 bg-card/75 p-6 shadow-soft backdrop-blur-md transition-shadow duration-300 hover:border-primary/20 hover:shadow-[0_24px_64px_-24px_oklch(0.32_0.09_162_/_0.22)] sm:rounded-[1.75rem] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent sm:rounded-[1.75rem]" />
          <div className="relative">
            <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.65rem]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-primary/90 sm:text-[15px]">{service.desc}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {service.fullDesc}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85 sm:text-[15px]"
                >
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-2.5 w-2.5 text-primary" strokeWidth={2.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border/60 pt-5 sm:mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/75 sm:text-xs">
                {service.focus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export function FeaturedSolutionsSection({
  services,
}: {
  services: FeaturedService[];
}) {
  const [costPerf, managed, migration] = services;

  const blocks = [
    { service: costPerf, image: costPerfImg, imageRight: false },
    { service: managed, image: managedImg, imageRight: true },
    { service: migration, image: migrationImg, imageRight: false },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.36 0.10 162 / 0.09) 0%, transparent 65%)",
            "radial-gradient(ellipse 45% 40% at 100% 60%, oklch(0.50 0.14 160 / 0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 35% at 0% 80%, oklch(0.82 0.13 80 / 0.05) 0%, transparent 65%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
            FEATURED SOLUTIONS
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-[1.06] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl">
            Enterprise Cloud Optimization Services
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
            Smart cloud infrastructure solutions designed for performance, scalability, and cost
            efficiency.
          </p>
        </m.div>

        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-24">
          {blocks.map((block, i) => (
            <FeaturedBlock
              key={block.service.title}
              service={block.service}
              image={block.image}
              imageRight={block.imageRight}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
