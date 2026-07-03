"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ROLES } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ApplyForm() {
  const params = useSearchParams();
  const defaultRole = params.get("role") ?? "";

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    city: "",
    role: defaultRole,
    experience_level: "",
    motivation: "",
    portfolio_url: "",
    referral_source: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire to /api/apply
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
  };

  const inputCls = "w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card/60 p-14 text-center">
        <CheckCircle className="size-14 text-primary" />
        <h2 className="font-heading text-2xl font-semibold">Application received!</h2>
        <p className="max-w-sm text-muted-foreground">
          We&apos;ll message you on WhatsApp within 48 hours. Keep an eye on your phone.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Full name *</span>
          <input required placeholder="Abhisek Pattnaik" value={form.full_name} onChange={set("full_name")} className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">WhatsApp number *</span>
          <input required placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} className={inputCls} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Email</span>
          <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">City / Location *</span>
          <input required placeholder="Bhubaneswar, Odisha" value={form.city} onChange={set("city")} className={inputCls} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Role *</span>
          <select required value={form.role} onChange={set("role")} className={cn(inputCls, "appearance-none")}>
            <option value="">Select a role</option>
            {ROLES.map((r) => <option key={r.slug} value={r.slug}>{r.title}</option>)}
            <option value="other">Other</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Experience level</span>
          <select value={form.experience_level} onChange={set("experience_level")} className={cn(inputCls, "appearance-none")}>
            <option value="">Select level</option>
            <option value="fresher">Fresher</option>
            <option value="1-2_years">1–2 years</option>
            <option value="3+_years">3+ years</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Why do you want to join us? *</span>
        <textarea
          required
          rows={5}
          maxLength={300}
          placeholder="Tell us what excites you about this role and what you'd bring..."
          value={form.motivation}
          onChange={set("motivation")}
          className={cn(inputCls, "resize-none")}
        />
        <span className="self-end font-mono text-[10px] text-muted-foreground/50">{form.motivation.length}/300</span>
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Portfolio / LinkedIn URL</span>
          <input placeholder="linkedin.com/in/you" value={form.portfolio_url} onChange={set("portfolio_url")} className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">How did you hear about us?</span>
          <select value={form.referral_source} onChange={set("referral_source")} className={cn(inputCls, "appearance-none")}>
            <option value="">Select...</option>
            {["YouTube", "Instagram", "WhatsApp", "Friend", "Google", "Other"].map((s) => (
              <option key={s} value={s.toLowerCase()}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(buttonVariants(), "h-12 gap-2 text-base mt-2 w-full sm:w-auto sm:self-start px-8")}
      >
        {status === "sending" ? <><Loader2 className="size-4 animate-spin" /> Submitting...</> : "Submit application"}
      </button>
    </form>
  );
}

export default function ApplyPage() {
  return (
    <>
      <PageHero
        kicker="Apply"
        title={<>2 minutes. <span className="text-primary">That&apos;s all.</span></>}
        description="No lengthy CV, no cover letter. Tell us who you are and why you want in."
        align="left"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <Suspense>
            <ApplyForm />
          </Suspense>
        </Reveal>
      </section>
    </>
  );
}
