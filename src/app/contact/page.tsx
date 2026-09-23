"use client";

import { useState } from "react";
import {
  MessageCircle, Mail, MapPin, Clock,
  CheckCircle, Loader2, Send, ArrowRight,
  Globe, Sparkles, Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { waLink, SITE } from "@/lib/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", contact: "", message: "", service: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const msg = `Hi Next Scale! I'm ${form.name}.\n\nService interested in: ${form.service || "Not specified"}\n\nMessage: ${form.message}\n\nContact me at: ${form.contact}`;
    window.open(waLink(msg), "_blank");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  };

  const INFO = [
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Based in", value: "Bhubaneswar, Odisha · India" },
    { icon: Globe, label: "Operating", value: "India · UAE · UK · USA · SEA" },
    { icon: Clock, label: "Response time", value: "< 1 hour on WhatsApp\n24/7 AI agents active" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      <PageHero
        kicker="Contact Us"
        title={<>Let&apos;s build something <span className="text-blue-600">remarkable.</span></>}
        description="Whether you're a clinic in Bhubaneswar or a startup in Dubai — we are ready. WhatsApp is fastest, or fill the quick form below."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">

          {/* Left column */}
          <Reveal className="flex flex-col gap-6">
            {/* WhatsApp Direct CTA Card */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-3xl border border-blue-500 bg-gradient-to-br from-blue-600 to-blue-700 p-7 text-white shadow-xl shadow-blue-500/15 transition duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xs text-white border border-white/20">
                  <MessageCircle className="size-7" />
                </div>
                <span className="rounded-full bg-white/20 backdrop-blur-xs px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white">
                  Fastest
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-heading text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white">
                  WhatsApp Us
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-blue-100">
                  Direct line to founder &amp; tech team. Reply guaranteed within 1 hour.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 transition group-hover:bg-blue-50 shadow-sm">
                Open WhatsApp <ArrowRight className="size-4" />
              </div>
            </a>

            {/* Info cards */}
            <div className="space-y-3">
              {INFO.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <info.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-blue-600">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-0.5 block whitespace-pre-line text-sm font-semibold text-slate-800 hover:text-blue-600 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 whitespace-pre-line text-sm font-semibold text-slate-800">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Interactive Form */}
          <Reveal delay={0.1}>
            {status === "done" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xs">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle className="size-8" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-black uppercase tracking-[-0.03em] text-slate-900">
                    Message Ready!
                  </h2>
                  <p className="mt-2 text-base font-medium text-slate-600 max-w-sm mx-auto">
                    We&apos;ve formatted your message and opened WhatsApp. We will respond within the hour.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-xs transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs sm:p-10">
                <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                      Send a message
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      Direct WhatsApp message dispatch — zero lost leads.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">
                    <Zap className="size-3" /> Quick Connect
                  </span>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                        Your name *
                      </span>
                      <input
                        required
                        placeholder="Dr. Priya / Rahul / Sarah"
                        value={form.name}
                        onChange={set("name")}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                        Email or WhatsApp *
                      </span>
                      <input
                        required
                        placeholder="+91 98765 43210 or name@brand.com"
                        value={form.contact}
                        onChange={set("contact")}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                      I&apos;m interested in...
                    </span>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                    >
                      <option value="">Select a service category</option>
                      <option value="Website (Live in 7 Days)">Website (Live in 7 Days)</option>
                      <option value="AI Receptionist / WhatsApp Agent">AI Receptionist / WhatsApp Agent</option>
                      <option value="Digital Growth & Local SEO">Digital Growth & Local SEO</option>
                      <option value="Products (ExamOS / Aura)">Products (ExamOS / Aura)</option>
                      <option value="Full Jugaad Suite">Full Jugaad Suite</option>
                      <option value="Custom Enterprise Build">Custom Enterprise Build</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-700">
                      What do you need? *
                    </span>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business goals, timeline, and requirements..."
                      value={form.message}
                      onChange={set("message")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="size-4 animate-spin" /> Opening WhatsApp...</>
                    ) : (
                      <><Send className="size-4" /> Send via WhatsApp <ArrowRight className="size-4" /></>
                    )}
                  </button>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
