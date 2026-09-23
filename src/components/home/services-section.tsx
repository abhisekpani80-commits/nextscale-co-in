"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Bot, Cog, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/neon-reveal";

type Service = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  bullets: string[];
  icon: typeof Globe;
  href: string;
  cta: string;
};

const SERVICES: Service[] = [
  {
    id: "websites",
    number: "01",
    title: "Custom websites",
    kicker: "Speed, credibility, conversion",
    description:
      "Hand-engineered Next.js websites built around how your business actually works. Fast on every device, easy to update, designed to turn visitors into enquiries.",
    bullets: [
      "Mobile-first design, 95+ Lighthouse score",
      "Direct WhatsApp enquiry routing",
      "SEO schema, sitemap, meta — set up properly",
      "100% source code handover",
    ],
    icon: Globe,
    href: "/services/websites",
    cta: "Explore website services",
  },
  {
    id: "ai-agents",
    number: "02",
    title: "WhatsApp AI agents",
    kicker: "24/7 autonomous receptionist",
    description:
      "Conversational AI connected to the official WhatsApp Business API. Answers FAQs, qualifies leads, and books appointments into your calendar while you sleep.",
    bullets: [
      "Instant replies under 5 seconds",
      "Google Calendar / Outlook sync",
      "Lead capture into your CRM",
      "Reduces admin work by ~70%",
    ],
    icon: Bot,
    href: "/services/ai-agents",
    cta: "Explore AI agents",
  },
  {
    id: "systems",
    number: "03",
    title: "Digital systems & automation",
    kicker: "End-to-end growth infrastructure",
    description:
      "When a website and an AI agent need to work as one system — booking flows, CRM routing, review funnels, and analytics wired together so nothing slips.",
    bullets: [
      "Booking & lead automation",
      "CRM + calendar integration",
      "Local SEO & review funnels",
      "Analytics dashboards that make sense",
    ],
    icon: Cog,
    href: "/services",
    cta: "Explore systems",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(SERVICES[0].id);
  const [openMobile, setOpenMobile] = useState<string | null>(SERVICES[0].id);

  return (
    <section
      id="services"
      className="container-ns py-20 md:py-32"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="neon-divider mb-16 md:mb-20" />

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-20">
        <div className="md:col-span-4">
          <Reveal>
            <div className="t-eyebrow flex items-center">
              <span className="neon-line" />
              Services
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={80}>
            <h2
              className="t-display text-[36px] md:text-[56px] lg:text-[64px] heading-glow"
              style={{ maxWidth: "820px" }}
            >
              Three ways we make your{" "}
              <span style={{ color: "var(--color-neon)", fontStyle: "italic", fontWeight: 300 }}>
                business
              </span>{" "}
              easier to find, trust, and contact.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Desktop: interactive split */}
      <div className="hidden md:grid grid-cols-12 gap-10">
        {/* Left — tab index */}
        <ul className="col-span-5 flex flex-col" role="tablist" aria-label="Services">
          {SERVICES.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${s.id}`}
                  id={`tab-${s.id}`}
                  onClick={() => setActive(s.id)}
                  className="group w-full text-left py-7 border-b transition-colors"
                  style={{ borderColor: isActive ? "var(--color-neon)" : "var(--color-line)" }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-[12px] tracking-wider transition-colors shrink-0"
                      style={{
                        color: isActive ? "var(--color-neon)" : "var(--color-text-dim)",
                        textShadow: isActive ? "0 0 6px var(--color-neon-mid)" : "none",
                      }}
                    >
                      {s.number}
                    </span>
                    {(() => {
                      const TabIcon = s.icon;
                      return (
                        <div
                          className="size-9 rounded-lg grid place-items-center shrink-0 transition-all"
                          style={{
                            border: `1px solid ${
                              isActive ? "var(--color-neon)" : "var(--color-line)"
                            }`,
                            boxShadow: isActive
                              ? "0 0 10px var(--color-neon-dim), inset 0 0 6px rgba(0,245,255,0.04)"
                              : "none",
                            background: "var(--color-card)",
                          }}
                          aria-hidden
                        >
                          <TabIcon
                            className="size-[18px]"
                            strokeWidth={1.75}
                            style={{
                              color: isActive ? "var(--color-neon)" : "var(--color-text-dim)",
                            }}
                          />
                        </div>
                      );
                    })()}
                    <div className="flex-1 min-w-0">
                      <div className="text-[28px] lg:text-[34px] tracking-tight font-semibold leading-none">
                        {s.title}
                      </div>
                      <div
                        className="text-[13px] mt-2 transition-all"
                        style={{
                          color: isActive ? "var(--color-text-mute)" : "transparent",
                          maxHeight: isActive ? "40px" : "0",
                          overflow: "hidden",
                        }}
                      >
                        {s.kicker}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="size-5 transition-all"
                      strokeWidth={1.5}
                      style={{
                        color: isActive ? "var(--color-neon)" : "var(--color-text-dim)",
                        transform: isActive ? "translateX(0)" : "translateX(-4px)",
                        filter: isActive ? "drop-shadow(0 0 4px var(--color-neon-mid))" : "none",
                      }}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right — active panel */}
        <div className="col-span-7">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <div
                key={s.id}
                id={`panel-${s.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${s.id}`}
                hidden={!isActive}
                className={`neon-card p-8 lg:p-10 min-h-[440px] flex flex-col ${
                  isActive ? "neon-card-active" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="size-10 rounded-lg grid place-items-center"
                    style={{
                      border: "1px solid var(--color-neon)",
                      boxShadow: "0 0 10px var(--color-neon-dim)",
                      background: "var(--color-card)",
                    }}
                    aria-hidden
                  >
                    <Icon className="size-5" strokeWidth={1.5} style={{ color: "var(--color-neon)" }} />
                  </div>
                  <div>
                    <div className="t-eyebrow">Service {s.number}</div>
                    <div className="text-[15px] font-medium mt-1">{s.title}</div>
                  </div>
                </div>

                <p
                  className="text-[18px] lg:text-[19px] leading-[1.55]"
                  style={{ color: "var(--color-text)", maxWidth: "600px", marginBottom: "32px" }}
                >
                  {s.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--color-text-mute)" }}>
                      <span
                        className="mt-1.5 size-1.5 rounded-full shrink-0"
                        style={{
                          background: "var(--color-neon)",
                          boxShadow: "0 0 4px var(--color-neon)",
                        }}
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={s.href}
                  className="mt-auto inline-flex items-center gap-2 text-[14px] font-medium group"
                  style={{ color: "var(--color-neon)" }}
                >
                  {s.cta}
                  <ArrowUpRight
                    className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: stacked accordion */}
      <div className="md:hidden flex flex-col">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          const isOpen = openMobile === s.id;
          return (
            <div key={s.id} className="border-b" style={{ borderColor: "var(--color-line)" }}>
              <button
                type="button"
                onClick={() => setOpenMobile(isOpen ? null : s.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 py-5 text-left"
              >
                <span
                  className="font-mono text-[11px] shrink-0"
                  style={{ color: "var(--color-neon)" }}
                >
                  {s.number}
                </span>
                <Icon className="size-5 shrink-0" strokeWidth={1.5} style={{ color: "var(--color-text-mute)" }} />
                <span className="flex-1 text-[19px] font-semibold tracking-tight">
                  {s.title}
                </span>
                <ChevronDown
                  className="size-5 shrink-0 transition-transform duration-300"
                  strokeWidth={1.5}
                  style={{
                    color: "var(--color-text-mute)",
                    transform: isOpen ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: isOpen ? "600px" : "0",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-6 pl-10">
                  <p className="text-[15px] leading-[1.6]" style={{ color: "var(--color-text-mute)" }}>
                    {s.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-4 mb-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[13px]" style={{ color: "var(--color-text-mute)" }}>
                        <span
                          className="mt-1.5 size-1.5 rounded-full shrink-0"
                          style={{ background: "var(--color-neon)", boxShadow: "0 0 4px var(--color-neon)" }}
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--color-neon)" }}>
                    {s.cta}
                    <ArrowUpRight className="size-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
