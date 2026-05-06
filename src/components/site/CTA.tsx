import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-emerald-deep p-12 text-primary-foreground shadow-emerald md:p-20">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-orb" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-orb" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Start optimizing today
          </span>
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] md:text-6xl">
            Ready to reduce your <span className="text-gradient-gold">cloud spend?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base opacity-85 md:text-lg">
            Get side-by-side savings proposals from top FinOps partners — in days, not months.
            No migrations. No lock-ins.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-base font-semibold text-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Get My Savings <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur transition-colors hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
