"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Custom websites", href: "/services/websites" },
      { label: "WhatsApp AI agents", href: "/services/ai-agents" },
      { label: "Digital growth", href: "/services/digital-growth" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Tools", href: "/tools" },
      { label: "Resources", href: "/resources" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Refund", href: "/legal/refund" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
];

export function PremiumFooter() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop footer — always visible */}
      <footer
        className="hidden md:block border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-ink)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container-ns py-16 md:py-24">
          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <Link
                href="/"
                className="flex items-center gap-2.5 group mb-6"
              >
                <div
                  className="size-8 rounded-md grid place-items-center"
                  style={{
                    border: "1px solid var(--color-neon)",
                    boxShadow: "0 0 10px var(--color-neon-dim)",
                    background: "var(--color-card)",
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4"
                    fill="var(--color-neon)"
                  >
                    <path d="M3 17V3h2l8 9.5V3h2v14h-2L5 7.5V17H3z" />
                  </svg>
                </div>
                <span className="font-semibold text-[15px] tracking-tight">
                  Next
                  <span style={{ color: "var(--color-neon)", textShadow: "0 0 8px var(--color-neon-mid)" }}>
                    Scale
                  </span>
                </span>
              </Link>
              <p
                className="text-[15px] leading-[1.6]"
                style={{ color: "var(--color-text-mute)", maxWidth: "420px" }}
              >
                NextScale is a digital systems studio building custom websites and
                WhatsApp AI receptionists for ambitious businesses worldwide.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {COLUMNS.map((col) => (
                <div key={col.heading}>
                  <div className="t-eyebrow mb-4">{col.heading}</div>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[14px] transition-colors"
                          style={{ color: "var(--color-text-mute)" }}
                          onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.color = "var(--color-text)")
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color = "var(--color-text-mute)")
                          }
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div
            className="border-t pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div
              className="md:col-span-7 flex flex-col sm:flex-row gap-4 sm:gap-8 text-[13px]"
              style={{ color: "var(--color-text-mute)" }}
            >
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
              <span>Bhubaneswar, Odisha · IN</span>
            </div>
            <div
              className="md:col-span-5 md:text-right text-[12px]"
              style={{ color: "var(--color-text-dim)" }}
            >
              © {new Date().getFullYear()} NextScale Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile — collapsed footer with "Click to see footer" */}
      <div className="md:hidden" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="border-t"
          style={{
            borderColor: "var(--color-line)",
            background: "var(--color-ink)",
            boxShadow: open ? "0 -20px 60px rgba(0,245,255,0.04)" : "none",
            transition: "box-shadow 400ms ease",
          }}
        >
          {/* Toggle button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="w-full flex items-center justify-between px-5 py-5"
            aria-expanded={open}
          >
            <span
              className="flex items-center gap-3 text-[14px] font-medium"
              style={{ color: "var(--color-text)" }}
            >
              <svg
                viewBox="0 0 20 20"
                className="size-4"
                fill="var(--color-neon)"
              >
                <path d="M3 17V3h2l8 9.5V3h2v14h-2L5 7.5V17H3z" />
              </svg>
              NextScale Technologies
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[12px]" style={{ color: "var(--color-text-dim)" }}>
                {open ? "Hide footer" : "See footer"}
              </span>
              <ChevronDown
                className="size-4 transition-transform duration-300"
                style={{
                  color: "var(--color-text-dim)",
                  transform: open ? "rotate(180deg)" : "none",
                }}
              />
            </div>
          </button>

          {/* Expanded content */}
          <div
            className="overflow-hidden transition-all duration-400 ease-out"
            style={{
              maxHeight: open ? "800px" : "0",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="px-5 pb-8">
              {/* Quick links */}
              <div className="grid grid-cols-2 gap-6">
                {COLUMNS.map((col) => (
                  <div key={col.heading}>
                    <div className="t-eyebrow mb-3">{col.heading}</div>
                    <ul className="flex flex-col gap-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="text-[13px] transition-colors"
                            style={{ color: "var(--color-text-mute)" }}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div
                className="mt-8 pt-6 border-t flex flex-col gap-2 text-[13px]"
                style={{
                  borderColor: "var(--color-line)",
                  color: "var(--color-text-mute)",
                }}
              >
                <a href="mailto:biz.abhisek@gmail.com">biz.abhisek@gmail.com</a>
                <a href="tel:+919556436685" style={{ color: "var(--color-neon)" }}>
                  +91 95564 36685
                </a>
                <span>Bhubaneswar, Odisha · IN</span>
              </div>

              <div
                className="mt-6 pt-6 border-t text-[11px]"
                style={{
                  borderColor: "var(--color-line)",
                  color: "var(--color-text-dim)",
                }}
              >
                © {new Date().getFullYear()} NextScale Technologies. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
