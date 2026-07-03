"use client";

import Link from "next/link";
import { useState } from "react";
import { FOOTER_GROUPS, SITE } from "@/lib/site";
import { NextscaleLogo } from "@/components/ui/logo";

type IconProps = React.SVGProps<SVGSVGElement>;

const YoutubeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3z" />
  </svg>
);

const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.8 1.3-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19z" />
  </svg>
);

const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const socials = [
  { label: "YouTube", Icon: YoutubeIcon, comingSoon: true },
  { label: "Twitter / X", Icon: XIcon, comingSoon: true },
  { label: "LinkedIn", Icon: LinkedinIcon, comingSoon: true },
  { label: "Instagram", Icon: InstagramIcon, comingSoon: true },
];

function SocialButton({ s }: { s: typeof socials[number] }) {
  const [toast, setToast] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (s.comingSoon) {
      e.preventDefault();
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        aria-label={s.label}
        className="grid size-9 place-items-center rounded-xl border text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(16,20,30,0.6)" }}
      >
        <s.Icon className="size-4" />
      </button>
      {toast && (
        <div
          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-semibold tracking-wide pointer-events-none z-50 animate-fade-in"
          style={{
            background: "rgba(14,18,28,0.97)",
            border: "1px solid rgba(39,208,237,0.25)",
            color: "#27d0ed",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          Coming Soon ✦
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(39,208,237,0.3) 50%, transparent 100%)" }} />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 group">
              <NextscaleLogo className="size-8 shrink-0" />
              <span className="text-[17px] font-bold tracking-[0.06em] text-white">
                NEXTSCALE
              </span>
            </Link>

            <p className="mt-4 text-[13px] leading-relaxed text-white/35 tracking-[-0.01em]">
              AI products & digital infrastructure for ambitious businesses — from Odisha to the world.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <SocialButton key={s.label} s={s} />
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/25">
                  {group.heading}
                </p>
                {group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white/80 tracking-[-0.01em]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-2 pt-6 text-[11px] text-white/20 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="tracking-[-0.01em]">
            © {new Date().getFullYear()} {SITE.legalName}. Built with AI from {SITE.location}.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">Products · Agents · Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
