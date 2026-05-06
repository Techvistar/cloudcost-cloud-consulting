import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get Your Cloud Savings Report" },
      { name: "description", content: "Tell us about your cloud spend and get competing FinOps quotes within days. No commitment, no infrastructure changes." },
      { property: "og:title", content: "Get your savings report — Fixcloudcost" },
      { property: "og:description", content: "Get competing FinOps quotes for your AWS, Azure or GCP spend." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Required").max(120),
  provider: z.enum(["AWS", "Azure", "GCP", "Multi-cloud"]),
  spend: z.string().trim().min(1, "Required").max(60),
  message: z.string().trim().max(1000).optional(),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h1 className="mt-5 text-4xl font-bold md:text-5xl">
              Get your <span className="text-gradient">savings report</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share a few details and we'll match you with FinOps partners. Receive competing quotes within days.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Read-only billing access only", "No infrastructure changes", "No lock-ins or penalties", "First quotes in 5–7 days"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Your data is encrypted and never shared without consent.
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-emerald md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  We've received your details. A FinOps specialist will reach out within 24 hours with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Work Email" name="email" type="email" error={errors.email} />
                <Field label="Company" name="company" error={errors.company} />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Cloud Provider</label>
                  <select
                    name="provider"
                    defaultValue="AWS"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>GCP</option>
                    <option>Multi-cloud</option>
                  </select>
                </div>
                <Field label="Monthly Cloud Spend" name="spend" placeholder="$25,000" error={errors.spend} />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Message <span className="text-muted-foreground">(optional)</span></label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-transform hover:scale-[1.01]"
                >
                  Get My Savings Report
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
