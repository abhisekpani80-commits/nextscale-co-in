"use client";

import { useState } from "react";
import {
  MessageCircle, Mail, MapPin, Clock,
  CheckCircle, Loader2, Send, ArrowRight,
  Globe, Sparkles, Zap, PhoneCall
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
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, color: "#FFC72E" },
    { icon: MapPin, label: "Based in", value: "Bhubaneswar, Odisha · India", color: "#FFB7C5" },
    { icon: Globe, label: "Operating", value: "India · UAE · UK · USA · SEA", color: "#9DD9FF" },
    { icon: Clock, label: "Response time", value: "< 1 hour on WhatsApp\n24/7 AI agents active", color: "#B8E986" },
  ];

  return (
    <>
      <PageHero
        kicker="Contact Us"
        title={<>Let&apos;s build something <span className="text-[#FF4D00]">remarkable.</span></>}
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
              className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#141414] bg-[#B8E986] p-7 shadow-[6px_6px_0_#141414] transition duration-200 hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border-2 border-[#141414] bg-[#141414] text-[#B8E986] shadow-[2px_2px_0_#FAF3E5]">
                  <MessageCircle className="size-7" />
                </div>
                <span className="rounded-full border-2 border-[#141414] bg-[#141414] px-2.5 py-1 font-display text-[0.6rem] font-black uppercase text-[#FAF3E5]">
                  Fastest
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#141414]">
                  WhatsApp Us
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#141414]">
                  Direct line to founder & tech team. Reply guaranteed within 1 hour.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-5 py-3 font-display text-xs font-black uppercase text-[#FAF3E5] transition group-hover:bg-[#FF4D00]">
                Open WhatsApp <ArrowRight className="size-4" />
              </div>
            </a>

            {/* Info cards */}
            <div className="space-y-3">
              {INFO.map((info) => (
                <div
                  key={info.label}
                  style={{ backgroundColor: info.color }}
                  className="flex items-center gap-3.5 rounded-2xl border-2 border-[#141414] p-4 shadow-[4px_4px_0_#141414]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#141414] text-[#FAF3E5]">
                    <info.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#141414]">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-0.5 block whitespace-pre-line text-sm font-bold text-[#141414] hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 whitespace-pre-line text-sm font-bold text-[#141414]">
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
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-8 text-center shadow-[7px_7px_0_#141414]">
                <div className="flex size-16 items-center justify-center rounded-2xl border-2 border-[#141414] bg-[#B8E986]">
                  <CheckCircle className="size-8 text-[#141414]" />
                </div>
                <div>
                  <h2 className="font-display text-4xl font-black uppercase tracking-[-0.05em] text-[#141414]">
                    Message Ready!
                  </h2>
                  <p className="mt-2 text-base font-medium text-[#5B5146] max-w-sm mx-auto">
                    We&apos;ve formatted your message and opened WhatsApp. We will respond within the hour.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-full border-2 border-[#141414] bg-[#FFC72E] px-6 py-2.5 font-display text-xs font-black uppercase text-[#141414] shadow-[3px_3px_0_#141414] hover:bg-[#FF4D00] hover:text-white transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-7 shadow-[7px_7px_0_#141414] sm:p-10">
                <div className="mb-7 flex items-center justify-between border-b-2 border-[#141414] pb-4">
                  <div>
                    <h2 className="font-display text-3xl font-black uppercase tracking-[-0.05em] text-[#141414]">
                      Send a message
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#5B5146]">
                      Direct WhatsApp message dispatch — zero lost leads.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#FFC72E] px-3 py-1 font-display text-[0.65rem] font-black uppercase text-[#141414]">
                    <Zap className="size-3" /> Quick Connect
                  </span>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                        Your name *
                      </span>
                      <input
                        required
                        placeholder="Dr. Priya / Rahul / Sarah"
                        value={form.name}
                        onChange={set("name")}
                        className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold outline-none shadow-[3px_3px_0_#141414] focus:bg-white focus:shadow-[4px_4px_0_#FF4D00] transition"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                        Email or WhatsApp *
                      </span>
                      <input
                        required
                        placeholder="+91 98765 43210 or name@brand.com"
                        value={form.contact}
                        onChange={set("contact")}
                        className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold outline-none shadow-[3px_3px_0_#141414] focus:bg-white focus:shadow-[4px_4px_0_#FF4D00] transition"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                      I&apos;m interested in...
                    </span>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold outline-none shadow-[3px_3px_0_#141414] focus:bg-white focus:shadow-[4px_4px_0_#FF4D00] transition"
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
                    <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                      What do you need? *
                    </span>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business goals, timeline, and requirements..."
                      value={form.message}
                      onChange={set("message")}
                      className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold outline-none shadow-[3px_3px_0_#141414] focus:bg-white focus:shadow-[4px_4px_0_#FF4D00] transition resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-7 py-4 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[5px_5px_0_#141414] transition hover:-translate-y-0.5 hover:bg-[#FFC72E] hover:text-[#141414] disabled:opacity-50"
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
    </>
  );
}
