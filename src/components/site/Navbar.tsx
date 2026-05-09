import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import cloudcostLogo from "../../assets/cloudcost-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "glass border-b border-border/50 shadow-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-8 md:py-4">
        <Link to="/" className="flex items-center gap-3 text-base font-semibold text-foreground md:text-lg hover:opacity-85 transition-opacity">
          <img
            src={cloudcostLogo}
            alt="Cloudcost"
            className="h-10 md:h-[44px] w-auto object-contain"
            width="180"
            height="44"
          />
          <span className="whitespace-nowrap text-lg font-semibold tracking-tight md:text-xl">
            Cloud<span className="text-gradient">cost</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground data-[status=active]:text-primary data-[status=active]:shadow-[inset_0_-1px_0_0] data-[status=active]:shadow-primary/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Get Started
          </Link>
        </div>

        <button
          aria-label="Toggle mobile menu"
          onClick={() => setOpen((current) => !current)}
          className="md:hidden rounded-full border border-border/70 bg-background/90 p-2 shadow-sm backdrop-blur transition-all duration-200 hover:border-primary hover:text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-emerald-deep px-5 py-3 text-sm font-semibold text-primary-foreground shadow-emerald transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
