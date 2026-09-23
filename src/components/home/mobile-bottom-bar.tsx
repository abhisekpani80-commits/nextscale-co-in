"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import { waLink, SITE } from "@/lib/site";

/**
 * Fixed mobile (<768px) bottom action bar.
 * Three 44×44+ tap-safe actions: Call / WhatsApp / Tap In (jump to contact).
 */
export function MobileBottomBar() {
  const onTapIn = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const telLink = `tel:${SITE.whatsapp.startsWith("91") ? "+" + SITE.whatsapp : SITE.whatsapp}`;

  return (
    <div
      className="mobile-bottom-bar fixed inset-x-0 bottom-0 z-[60] md:hidden"
      style={{
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1px solid var(--color-line-hover)",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.6)",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
      }}
      role="navigation"
      aria-label="Contact actions"
    >
      <div className="grid grid-cols-3 gap-2 px-3 pt-3">
        <a
          href={telLink}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl transition-colors"
          style={{
            minHeight: 56,
            border: "1px solid var(--color-line-hover)",
            background: "var(--color-card)",
          }}
          aria-label="Call NextScale"
        >
          <Phone
            className="size-[18px]"
            strokeWidth={2}
            style={{ color: "var(--color-neon)" }}
          />
          <span
            className="text-[11px] font-medium tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            Call
          </span>
        </a>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl transition-colors"
          style={{
            minHeight: 56,
            border: "1px solid var(--color-neon)",
            background:
              "linear-gradient(180deg, rgba(0,245,255,0.15), rgba(0,245,255,0.02))",
            boxShadow:
              "0 0 20px var(--color-neon-dim), inset 0 1px 0 rgba(0,245,255,0.12)",
          }}
          aria-label="Chat with NextScale on WhatsApp"
        >
          <MessageCircle
            className="size-[18px]"
            strokeWidth={2}
            style={{
              color: "var(--color-neon)",
              filter: "drop-shadow(0 0 6px var(--color-neon-mid))",
            }}
          />
          <span
            className="text-[11px] font-semibold tracking-tight"
            style={{ color: "var(--color-neon)" }}
          >
            WhatsApp
          </span>
        </a>

        <a
          href="#contact"
          onClick={onTapIn}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl transition-colors"
          style={{
            minHeight: 56,
            border: "1px solid var(--color-magenta)",
            background:
              "linear-gradient(180deg, rgba(255,45,120,0.18), rgba(255,45,120,0.02))",
            boxShadow:
              "0 0 20px var(--color-magenta-dim), inset 0 1px 0 rgba(255,45,120,0.15)",
          }}
          aria-label="Start a project — tap in"
        >
          <Send
            className="size-[18px]"
            strokeWidth={2}
            style={{
              color: "var(--color-magenta)",
              filter: "drop-shadow(0 0 6px var(--color-magenta-glow))",
            }}
          />
          <span
            className="text-[11px] font-semibold tracking-tight"
            style={{ color: "var(--color-magenta)" }}
          >
            Tap In
          </span>
        </a>
      </div>
    </div>
  );
}
