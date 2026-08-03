import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles, Heart } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";
import { SITE, waLink } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const columns = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Work & Portfolio", "/portfolio"],
      ["Products & SaaS", "/products"],
      ["Pricing Plans", "/pricing"],
      ["India Pricing Studio", "/pricing-studio"],
      ["Free Tools", "/tools"],
      ["Compare Agency", "/compare"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Next Scale", "/about"],
      ["Careers", "/careers"],
      ["Contact Us", "/contact"],
      ["Resources & Playbooks", "/resources"],
      ["Case Studies", "/portfolio"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/legal/privacy"],
      ["Terms of Service", "/legal/terms"],
      ["Refund Policy", "/legal/refund"],
      ["Cookie Policy", "/legal/cookies"],
      ["Disclaimer", "/legal/disclaimer"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[#141414] bg-[#141414] text-[#FAF3E5]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Block */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Next Scale home">
              <div className="flex size-12 items-center justify-center rounded-2xl border-2 border-[#FAF3E5] bg-[#FF4D00] text-[#FAF3E5] shadow-[3px_3px_0_#FFC72E] transition group-hover:rotate-6">
                <NextscaleLogo className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black uppercase tracking-[-0.05em] text-[#FAF3E5]">
                  Next Scale
                </span>
                <span className="font-display text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                  Chai-Powered AI Studio
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-base leading-7 text-[#FAF3E5]/75">
              High-conversion websites, 24/7 WhatsApp AI agents, and digital growth infrastructure. Shipped in days, not months.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FF4D00] px-5 py-3 font-display text-xs font-black uppercase tracking-[0.06em] text-[#FAF3E5] shadow-[4px_4px_0_#FFC72E] transition hover:-translate-y-1 hover:bg-[#FFC72E] hover:text-[#141414]"
              >
                <MessageCircle className="size-4" /> Start a project <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[#FAF3E5]/75 font-medium transition-colors hover:text-[#FF4D00]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Sticker Badges */}
        <div className="mt-12 pt-8 border-t-2 border-[#FAF3E5]/15">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">
                Connect With Us
              </p>
              <p className="mt-1 text-xs text-[#FAF3E5]/60">Follow our build logs &amp; updates</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: "Instagram", href: SITE.socials.instagram, icon: InstagramIcon, bg: "#FFB7C5", rotate: "-4deg" },
                { name: "LinkedIn", href: SITE.socials.linkedin, icon: LinkedinIcon, bg: "#9DD9FF", rotate: "4deg" },
                { name: "X / Twitter", href: SITE.socials.twitter, icon: TwitterIcon, bg: "#FFC72E", rotate: "-3deg" },
                { name: "GitHub", href: SITE.socials.github, icon: GithubIcon, bg: "#B8E986", rotate: "5deg" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: s.bg, transform: `rotate(${s.rotate})` }}
                  className="flex items-center gap-2 rounded-full border-2 border-[#141414] px-4 py-2 font-display text-xs font-black uppercase text-[#141414] shadow-[3px_3px_0_#FAF3E5] transition hover:scale-105 hover:rotate-0"
                >
                  <s.icon className="size-4" /> {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#FAF3E5]/10 text-xs text-[#FAF3E5]/60">
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 font-bold hover:text-[#FFC72E]">
            {SITE.email} <ArrowUpRight className="size-3.5" />
          </a>
          <div className="flex flex-wrap gap-4 font-display text-[0.68rem] font-bold uppercase tracking-[0.08em]">
            <Link href="/legal/privacy" className="hover:text-[#FFC72E]">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-[#FFC72E]">Terms</Link>
            <Link href="/legal/refund" className="hover:text-[#FFC72E]">Refund</Link>
            <Link href="/legal/cookies" className="hover:text-[#FFC72E]">Cookies</Link>
            <Link href="/legal/disclaimer" className="hover:text-[#FFC72E]">Disclaimer</Link>
          </div>
        </div>
      </div>

      {/* Prominent Yellow Personality Bottom Strip */}
      <div className="border-t-2 border-[#141414] bg-[#FFC72E] px-4 py-3.5 text-center text-[#141414]">
        <p className="font-display text-xs font-black uppercase tracking-[0.14em]">
          © {new Date().getFullYear()} NEXT SCALE — MADE WITH JUGAAD &amp; CHAI IN ODISHA, INDIA 🇮🇳 · WORKING EVERYWHERE
        </p>
      </div>
    </footer>
  );
}

