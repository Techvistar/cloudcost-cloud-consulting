import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-emerald md:p-16">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to see your savings?</h2>
          <p className="mt-4 text-base opacity-90 md:text-lg">
            Get competing quotes from top FinOps partners in days — not months. No migrations, no lock-ins.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
