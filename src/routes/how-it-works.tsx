import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, FilePenLine, Receipt, Search, Users2 } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
});

/** Page + hero */
const FOREST = "#06402B";
const HEADING_LIME = "#5CB338";
const PAGE_BG = "#FDFCF8";

/** Screenshot: single orange accent for line, nodes, badges, icons */
const ACCENT_ORANGE = "#F97316";

const steps = [
  {
    n: "01",
    day: "Day 1",
    title: "Discovery call",
    body: "A 20-minute call to understand your cloud footprint, contracts, and savings goals.",
    Icon: Search,
  },
  {
    n: "02",
    day: "Day 1–2",
    title: "Read-only billing access",
    body: "Connect AWS, Azure, or GCP via cross-account roles. We never touch workloads.",
    Icon: Receipt,
  },
  {
    n: "03",
    day: "Day 2–4",
    title: "Partner bidding",
    body: "Our vetted FinOps partner network competes for your spend with transparent, side-by-side proposals.",
    Icon: Users2,
  },
  {
    n: "04",
    day: "Day 5",
    title: "Quote comparison",
    body: "We deliver a side-by-side breakdown of every offer with risk, term, and break-even analysis.",
    Icon: BarChart3,
  },
  {
    n: "05",
    day: "Day 6–7",
    title: "Sign & save",
    body: "Pick the best deal. We handle paperwork, onboarding, and ongoing rebalancing.",
    Icon: FilePenLine,
  },
] as const;

function TimelineNode() {
  return (
    <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center">
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed opacity-[0.9]"
        style={{ borderColor: ACCENT_ORANGE }}
        aria-hidden
      />
      <div
        className="relative z-10 h-[22px] w-[22px] rounded-full border-[3px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: ACCENT_ORANGE }}
      />
    </div>
  );
}

/** Rectangular cards with soft corners — matches reference (not cloud image) */
function ProcessCard({
  step,
  side,
  iconTowardTimeline,
}: {
  step: (typeof steps)[number];
  side: "left" | "right";
  /** True = icon sits on the edge toward the center timeline (left column + mobile) */
  iconTowardTimeline: boolean;
}) {
  const isLeft = side === "left";
  const { Icon } = step;

  return (
    <div className={`relative w-full max-w-[460px] ${iconTowardTimeline ? "max-md:pl-10" : "max-md:pr-10"} ${isLeft ? "md:mr-0" : "md:ml-0"}`}>
      <div
        className={`absolute top-1/2 z-20 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ${
          iconTowardTimeline ? "-left-[36px]" : "-right-[36px]"
        }`}
        style={{ border: `2px solid ${ACCENT_ORANGE}` }}
      >
        <Icon className="h-7 w-7" color={ACCENT_ORANGE} strokeWidth={1.75} aria-hidden />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white px-8 pb-9 pt-8 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:rounded-3xl sm:px-10 sm:pb-10 sm:pt-9 md:px-10">
        <span
          className="pointer-events-none absolute right-6 top-1/2 z-0 -translate-y-1/2 select-none font-black leading-none text-neutral-200/90 sm:right-8"
          style={{ fontSize: "clamp(3.25rem, 11vw, 4.75rem)" }}
          aria-hidden
        >
          {step.n}
        </span>

        <div className="relative z-10 flex flex-col gap-3 pr-14 sm:pr-16">
          <span
            className="w-fit rounded-full bg-white px-3.5 py-1 text-[11px] font-bold tracking-wide"
            style={{ color: ACCENT_ORANGE, border: `1.5px solid ${ACCENT_ORANGE}` }}
          >
            {step.day}
          </span>
          <h3
            className="text-xl font-bold leading-snug tracking-tight sm:text-2xl"
            style={{ color: FOREST }}
          >
            {step.title}
          </h3>
          <p className="max-w-prose text-[15px] font-medium leading-relaxed text-[#57534E]">
            {step.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -left-[8%] top-[14%] h-[min(42vw,320px)] w-[min(70vw,520px)] rounded-[50%] border border-[#06402B]/[0.055]"
        style={{ transform: "rotate(-8deg)" }}
      />
      <div
        className="absolute -right-[6%] top-[38%] h-[min(36vw,280px)] w-[min(62vw,440px)] rounded-[50%] border border-[#06402B]/[0.045]"
        style={{ transform: "rotate(6deg)" }}
      />
      <div
        className="absolute bottom-[18%] left-[18%] h-[min(28vw,200px)] w-[min(48vw,360px)] rounded-[50%] border border-[#06402B]/[0.04]"
        style={{ transform: "rotate(4deg)" }}
      />
      <div className="absolute left-[14%] top-[48%] h-2.5 w-2.5 rounded-full bg-[#FF8C00]/35 blur-[1.5px]" />
      <div className="absolute right-[22%] top-[32%] h-2 w-2 rounded-full bg-[#9CCC65]/40 blur-[1px]" />
      <div className="absolute left-[40%] top-[72%] h-1.5 w-1.5 rounded-full bg-[#FFC107]/40 blur-[1px]" />
      <div className="absolute right-[12%] top-[58%] h-2 w-2 rounded-full bg-[#2E8B57]/30 blur-[1px]" />
    </div>
  );
}

function BottomWave() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[min(28vh,200px)] opacity-[0.14]"
      aria-hidden
    >
      <svg className="h-full w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
        <path
          d="M0 120 C 240 40 480 180 720 100 C 960 20 1200 160 1440 80 L 1440 200 L 0 200 Z"
          fill="#06402B"
        />
        <path
          d="M0 150 C 280 90 520 170 780 110 C 1040 50 1280 130 1440 100 L 1440 200 L 0 200 Z"
          fill="#9CCC65"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

function HowItWorksPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ backgroundColor: PAGE_BG }}
    >
      <BackgroundDecor />
      <BottomWave />

      <section className="relative z-[1] mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 sm:pb-32 sm:pt-20 md:px-8 md:pt-24">
        <div className="mb-16 max-w-2xl sm:mb-20 md:mb-28">
          <span className="inline-block rounded-full border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#06402B] sm:text-[11px]">
            OUR PROCESS
          </span>
          <h1
            className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight sm:mt-10"
            style={{ color: FOREST }}
          >
            Your savings journey{" "}
            <span className="whitespace-nowrap" style={{ color: HEADING_LIME }}>
              in 7 days.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-[#57534E] sm:mt-8 sm:text-[17px]">
            A clear, no-nonsense process.
            <br />
            No migrations. No infra changes.
            <br />
            Just smarter pricing.
          </p>
        </div>

        <div className="relative">
          {/* Solid orange center line (reference) */}
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 -translate-x-1/2 md:left-1/2 md:block"
            style={{ backgroundColor: ACCENT_ORANGE }}
          />

          <div className="flex flex-col gap-14 sm:gap-20 md:gap-[5.5rem]">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.n}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-0"
                >
                  <div className="relative flex items-start gap-4 md:hidden">
                    <div className="flex shrink-0 flex-col items-center pt-1">
                      <TimelineNode />
                    </div>
                    <div className="min-w-0 flex-1 pt-0">
                      <ProcessCard step={step} side="right" iconTowardTimeline={true} />
                    </div>
                  </div>

                  <div className="hidden min-h-[1px] justify-end md:flex md:pr-14 lg:pr-20">
                    {isLeft ? (
                      <ProcessCard step={step} side="left" iconTowardTimeline={isLeft} />
                    ) : (
                      <span />
                    )}
                  </div>
                  <div className="hidden shrink-0 justify-center md:flex md:px-2">
                    <TimelineNode />
                  </div>
                  <div className="hidden min-h-[1px] justify-start md:flex md:pl-14 lg:pl-20">
                    {!isLeft ? (
                      <ProcessCard step={step} side="right" iconTowardTimeline={isLeft} />
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-24 md:mt-32 md:flex-row md:gap-6">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white shadow-[0_14px_36px_rgba(6,64,43,0.28)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06402B] focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:py-[1.125rem] sm:text-lg"
            style={{ backgroundColor: FOREST }}
          >
            Start the process →
          </Link>
          <Link
            to="/partners"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#D6D3D1] bg-white px-10 py-4 text-base font-bold transition hover:bg-[#FAFAF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06402B] focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:py-[1.125rem] sm:text-lg"
            style={{ color: FOREST }}
          >
            See who&apos;s in the network
          </Link>
        </div>
      </section>
    </main>
  );
}
