"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NeonLogo } from "@/components/ui/neon-logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "/about" },
];

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b"
            : "bg-transparent"
        }`}
        style={{
          borderColor: scrolled ? "var(--color-line-hover)" : "transparent",
          backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
          boxShadow: scrolled
            ? "0 0 40px rgba(0,245,255,0.04), 0 1px 0 var(--color-neon-dim)"
            : "none",
        }}
      >
        <div className="container-ns flex items-center justify-between h-[68px] md:h-[72px]">
          <NeonLogo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] group relative"
                style={{ color: "var(--color-text-mute)" }}
              >
                <span className="relative z-10 transition-colors group-hover:text-[color:var(--color-neon)]">
                  {l.label}
                </span>
                {/* Neon underline on hover */}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    background: "var(--color-neon)",
                    boxShadow: "0 0 6px var(--color-neon-mid)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-neon-fill h-11 px-5 text-[14px]"
            >
              Start a project
              <ArrowUpRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden grid place-items-center size-11 rounded-full"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{
              border: open
                ? "1px solid var(--color-neon)"
                : "1px solid var(--color-line-hover)",
              color: open ? "var(--color-neon)" : "var(--color-text)",
              boxShadow: open
                ? "0 0 12px var(--color-neon-dim)"
                : "none",
              transition: "all 300ms ease",
            }}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen neon menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.97)" }}
        aria-hidden={!open}
      >
        {/* Neon top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-neon), transparent)",
            boxShadow: "0 0 20px var(--color-neon-dim)",
          }}
        />

        <div className="container-ns pt-[88px] pb-12 flex flex-col h-full">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-5 border-b"
                style={{
                  borderColor: "var(--color-line)",
                  animationDelay: open ? `${i * 60}ms` : "0ms",
                  animation: open
                    ? `slide-in-left 400ms cubic-bezier(0.2,0.7,0.2,1) ${i * 60}ms both`
                    : "none",
                }}
              >
                <span
                  className="text-[30px] font-semibold tracking-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  {l.label}
                </span>
                <ArrowUpRight
                  className="size-5"
                  strokeWidth={1.5}
                  style={{ color: "var(--color-text-dim)" }}
                />
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-neon-fill h-14 text-base"
            >
              Start a project
              <ArrowUpRight className="size-4" strokeWidth={2.5} />
            </a>
            <a
              href="https://wa.me/919556436685"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost h-14 text-base"
              onClick={() => setOpen(false)}
            >
              Message on WhatsApp
            </a>
            <div
              className="mt-4 pt-4 border-t text-sm space-y-1"
              style={{ borderColor: "var(--color-line)", color: "var(--color-text-dim)" }}
            >
              <div>biz.abhisek@gmail.com</div>
              <div style={{ color: "var(--color-neon)" }}>+91 95564 36685</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
