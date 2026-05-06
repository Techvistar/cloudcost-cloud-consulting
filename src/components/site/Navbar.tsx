import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cloud } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass border-b border-border/60 shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1280px] items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-emerald-deep text-primary-foreground shadow-emerald">
            <Cloud className="h-5 w-5" />
          </span>
          <span>
            Fix<span className="text-gradient">cloudcost</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-emerald-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-all hover:shadow-glow hover:scale-[1.04]"
          >
            Get My Savings
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Get My Savings
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
