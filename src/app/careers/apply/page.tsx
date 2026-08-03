"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle, Loader2, Send, ArrowRight, Zap, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ROLES } from "@/lib/site";

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
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("done");
  };

  const inputCls =
    "w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold text-[#141414] placeholder:text-[#5B5146]/50 outline-none shadow-[3px_3px_0_#141414] focus:bg-white focus:shadow-[4px_4px_0_#FF4D00] transition";

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-12 text-center shadow-[7px_7px_0_#141414]">
        <div className="flex size-16 items-center justify-center rounded-2xl border-2 border-[#141414] bg-[#B8E986]">
          <CheckCircle className="size-8 text-[#141414]" />
        </div>
        <h2 className="font-display text-4xl font-black uppercase tracking-[-0.05em] text-[#141414]">
          Application Received!
        </h2>
        <p className="max-w-sm font-medium text-base text-[#5B5146]">
          We&apos;ll message you on WhatsApp within 48 hours. Keep an eye on your phone!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-7 shadow-[7px_7px_0_#141414] sm:p-10">
      <div className="mb-7 flex items-center justify-between border-b-2 border-[#141414] pb-4">
        <div>
          <h2 className="font-display text-3xl font-black uppercase tracking-[-0.05em] text-[#141414]">
            Quick Application
          </h2>
          <p className="mt-1 text-sm font-medium text-[#5B5146]">
            No 10-page CV needed. Tell us who you are and why you want in.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#FFC72E] px-3 py-1 font-display text-[0.65rem] font-black uppercase text-[#141414]">
          <Zap className="size-3" /> Fast Review
        </span>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              Full name *
            </span>
            <input required placeholder="Abhisek Pattnaik" value={form.full_name} onChange={set("full_name")} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              WhatsApp number *
            </span>
            <input required placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} className={inputCls} />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">Email</span>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              City / Location *
            </span>
            <input required placeholder="Bhubaneswar, Odisha" value={form.city} onChange={set("city")} className={inputCls} />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">Role *</span>
            <select required value={form.role} onChange={set("role")} className={inputCls}>
              <option value="">Select a role</option>
              {ROLES.map((r) => <option key={r.slug} value={r.slug}>{r.title}</option>)}
              <option value="other">Other / General</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              Experience Level
            </span>
            <select value={form.experience_level} onChange={set("experience_level")} className={inputCls}>
              <option value="">Select level</option>
              <option value="fresher">Fresher / Self-Taught</option>
              <option value="1-2_years">1–2 years</option>
              <option value="3+_years">3+ years</option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              Why do you want to join us? *
            </span>
            <span className="font-display text-[0.65rem] font-bold text-[#5B5146]">{form.motivation.length}/300</span>
          </div>
          <textarea
            required
            rows={4}
            maxLength={300}
            placeholder="Tell us what excites you about this role and what you'd bring to the team..."
            value={form.motivation}
            onChange={set("motivation")}
            className={`${inputCls} resize-none`}
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              Portfolio / GitHub / LinkedIn
            </span>
            <input placeholder="linkedin.com/in/you" value={form.portfolio_url} onChange={set("portfolio_url")} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
              How did you find us?
            </span>
            <select value={form.referral_source} onChange={set("referral_source")} className={inputCls}>
              <option value="">Select source...</option>
              {["YouTube", "Instagram", "WhatsApp", "Friend", "Google", "Other"].map((s) => (
                <option key={s} value={s.toLowerCase()}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-7 py-4 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[5px_5px_0_#141414] transition hover:-translate-y-0.5 hover:bg-[#FFC72E] hover:text-[#141414] disabled:opacity-50"
        >
          {status === "sending" ? (
            <><Loader2 className="size-4 animate-spin" /> Submitting Application...</>
          ) : (
            <><Send className="size-4" /> Submit Application <ArrowRight className="size-4" /></>
          )}
        </button>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <>
      <PageHero
        kicker="Apply Now"
        title={<>2 minutes. <span className="text-[#FF4D00]">That&apos;s all.</span></>}
        description="No lengthy CVs or corporate cover letters. Tell us who you are, show your work, and let&apos;s talk."
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
