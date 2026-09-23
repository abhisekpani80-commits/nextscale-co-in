"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/neon-reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  need: string;
  details: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  need: "Custom website",
  details: "",
};

const NEED_OPTIONS = [
  "Custom website",
  "WhatsApp AI agent",
  "Both website + AI agent",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus("sending");

    const message = [
      `Hi NextScale,`,
      ``,
      `I'd like to start a project.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "—"}`,
      `Looking for: ${form.need}`,
      ``,
      `Project details:`,
      form.details || "(none provided)",
    ].join("\n");

    setTimeout(() => {
      window.open(waLink(message), "_blank", "noopener,noreferrer");
      setStatus("sent");
    }, 600);
  };

  return (
    <section
      id="contact"
      className="container-ns py-20 md:py-32 pb-[calc(112px+env(safe-area-inset-bottom))] md:pb-32"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="neon-divider mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="t-eyebrow flex items-center mb-8">
              <span className="neon-line" />
              Start a project
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="t-display text-[36px] md:text-[52px] lg:text-[60px] heading-glow"
              style={{ lineHeight: 0.98 }}
            >
              Let&apos;s build something your business can{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--color-neon)",
                  textShadow: "0 0 12px var(--color-neon), 0 0 30px var(--color-neon-mid)",
                }}
              >
                grow
              </span>{" "}
              with.
            </h2>
            <p className="t-body mt-6" style={{ maxWidth: "440px" }}>
              Tell us what you&apos;re building. We&apos;ll help identify the right
              digital solution and respond personally — usually within a few hours.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 flex flex-col gap-2 text-[14px]" style={{ color: "var(--color-text-mute)" }}>
              <a
                href="mailto:biz.abhisek@gmail.com"
                className="hover:text-[color:var(--color-neon)] transition-colors"
              >
                biz.abhisek@gmail.com
              </a>
              <a
                href="tel:+919556436685"
                className="hover:text-[color:var(--color-neon)] transition-colors"
              >
                +91 95564 36685
              </a>
              <span>Bhubaneswar, Odisha · Serving worldwide</span>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="md:col-span-7">
          <Reveal delay={80}>
            <form
              onSubmit={onSubmit}
              noValidate
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-line-hover)",
                borderRadius: "20px",
                padding: "24px",
              }}
              className="neon-card-active"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cf-name"
                    className="text-[12px] t-eyebrow"
                  >
                    Your name <span style={{ color: "var(--color-neon)" }}>*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="neon-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-email" className="text-[12px] t-eyebrow">
                    Business email <span style={{ color: "var(--color-neon)" }}>*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="name@company.com"
                    className="neon-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-company" className="text-[12px] t-eyebrow">
                    Company or business
                  </label>
                  <input
                    id="cf-company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Optional"
                    className="neon-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-need" className="text-[12px] t-eyebrow">
                    What do you need?
                  </label>
                  <select
                    id="cf-need"
                    value={form.need}
                    onChange={(e) => update("need", e.target.value)}
                    className="neon-select"
                  >
                    {NEED_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="cf-details" className="text-[12px] t-eyebrow">
                  Project details
                </label>
                <textarea
                  id="cf-details"
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  rows={4}
                  placeholder="What are you building? Any goals, deadlines, or references?"
                  className="neon-textarea"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <button
                  type="submit"
                  disabled={status === "sending" || !form.name || !form.email}
                  className="btn-neon-fill h-12 px-6 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                  <ArrowUpRight className="size-4" strokeWidth={2.5} />
                </button>
                <p className="text-[12px]" style={{ color: "var(--color-text-dim)", maxWidth: "320px" }}>
                  We&apos;ll open WhatsApp with your details pre-filled and respond personally.
                </p>
              </div>

              {status === "sent" && (
                <div
                  className="mt-6 flex items-center gap-2 text-[13px]"
                  style={{ color: "var(--color-neon)" }}
                >
                  <Check className="size-4" strokeWidth={2} />
                  Inquiry prepared. Check the new WhatsApp tab to send.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
