"use client";

import { useState } from "react";
import {
  MessageCircle, Mail, MapPin, Clock,
  CheckCircle, Loader2, Send, ArrowRight,
  Globe,
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
    // Build a WhatsApp message from the form and open it
    const msg = `Hi Nextscale! I'm ${form.name}.\n\nService interested in: ${form.service || "Not specified"}\n\nMessage: ${form.message}\n\nContact me at: ${form.contact}`;
    window.open(waLink(msg), "_blank");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  };

  const inputStyle = {
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid #E8E6E1",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#0F0E0D",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
    letterSpacing: "-0.01em",
  };

  const INFO = [
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Based in", value: "Bhubaneswar, Odisha · India" },
    { icon: Globe, label: "Operating", value: "India · UAE · UK · USA · SEA" },
    { icon: Clock, label: "Response time", value: "< 1 hour on WhatsApp\n24/7 AI agents active" },
  ];

  return (
    <>
      <PageHero
        kicker="Contact us"
        title={<>Let&apos;s build something <span className="text-primary">remarkable together.</span></>}
        description="Whether you're a clinic in Bhubaneswar or a startup in Dubai — we're ready. WhatsApp is fastest, or fill the form below."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">

          {/* Left column */}
          <Reveal className="flex flex-col gap-5">
            {/* WhatsApp CTA */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-px transition-all duration-300 hover:shadow-sm"
              style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.4) 0%, rgba(18,140,126,0.3) 100%)" }}
            >
              <div className="flex flex-col items-center gap-4 rounded-[14px] p-7 text-center transition-all duration-300 bg-white">
                <div className="flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 bg-green-50 border border-green-200">
                  <MessageCircle className="size-7 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[16px] font-bold tracking-[-0.03em] text-[#0F0E0D]">WhatsApp us</p>
                  <p className="mt-1 text-[12px] text-[#6B6860] tracking-[-0.01em]">Fastest. Reply within the hour.</p>
                </div>
                <span
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02] bg-[#25D366] hover:bg-[#20ba5a]"
                >
                  Open WhatsApp <ArrowRight className="size-3.5" />
                </span>
              </div>
            </a>

            {/* Info cards */}
            <div className="rounded-2xl p-5 flex flex-col gap-4 border border-[#E8E6E1] bg-white shadow-sm">
              {INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    <info.icon className="size-4 text-[#1A56DB]" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="mt-0.5 block whitespace-pre-line text-[13px] text-[#0F0E0D] font-medium hover:text-[#1A56DB] transition-colors tracking-[-0.01em]">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 whitespace-pre-line text-[13px] text-[#0F0E0D] font-medium tracking-[-0.01em]">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={0.1}>
            {status === "done" ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-5 rounded-2xl text-center border border-[#E8E6E1] bg-white shadow-sm">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
                  <CheckCircle className="size-8 text-[#1A56DB]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#0F0E0D]">Message sent!</h2>
                  <p className="mt-2 text-[14px] text-[#6B6860] max-w-xs tracking-[-0.01em]">
                    We've opened WhatsApp for you. We'll reply within the hour.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="rounded-xl px-5 py-2 text-[13px] font-semibold bg-blue-50 text-[#1A56DB] border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="rounded-2xl p-8 border border-[#E8E6E1] bg-white shadow-sm">
                <div className="mb-7 flex items-center justify-between border-b border-[#E8E6E1] pb-4">
                  <div>
                    <h2 className="text-[20px] font-bold tracking-[-0.04em] text-[#0F0E0D]">Send a message</h2>
                    <p className="mt-1 text-[12px] text-[#6B6860] tracking-[-0.01em]">Fills a WhatsApp message for you — no forms lost.</p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6B6860] font-semibold">via WhatsApp</span>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { k: "name", label: "Your name *", placeholder: "Dr. Priya / Rahul / Sarah" },
                      { k: "contact", label: "Email or WhatsApp *", placeholder: "+91 98765 or you@email.com" },
                    ].map((field) => (
                      <label key={field.k} className="flex flex-col gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold">{field.label}</span>
                        <input
                          required
                          placeholder={field.placeholder}
                          value={(form as any)[field.k]}
                          onChange={set(field.k)}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "#1A56DB"; e.target.style.boxShadow = "0 0 0 3px rgba(26, 86, 219, 0.08)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#E8E6E1"; e.target.style.boxShadow = "none"; }}
                        />
                      </label>
                    ))}
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold">I'm interested in...</span>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      style={{ ...inputStyle, appearance: "none" as any }}
                      onFocus={(e) => { e.target.style.borderColor = "#1A56DB"; e.target.style.boxShadow = "0 0 0 3px rgba(26, 86, 219, 0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E8E6E1"; e.target.style.boxShadow = "none"; }}
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="AI Agents">AI Agents</option>
                      <option value="Website">Website</option>
                      <option value="Digital Growth">Digital Growth</option>
                      <option value="Products (ExamOS / Aura)">Products (ExamOS / Aura)</option>
                      <option value="Custom project">Custom project</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold">What do you need? *</span>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for. The more detail, the better."
                      value={form.message}
                      onChange={set("message")}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "#1A56DB"; e.target.style.boxShadow = "0 0 0 3px rgba(26, 86, 219, 0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#E8E6E1"; e.target.style.boxShadow = "none"; }}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="self-start flex items-center gap-2 rounded-xl px-7 py-3 text-[13px] font-bold tracking-[-0.01em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 bg-[#1A56DB] text-white hover:bg-[#1447C0]"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="size-4 animate-spin" /> Opening WhatsApp...</>
                    ) : (
                      <><Send className="size-4" /> Send via WhatsApp</>
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
