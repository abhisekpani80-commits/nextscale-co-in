import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
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
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
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
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Block */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Next Scale home">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 transition group-hover:scale-105">
                <NextscaleLogo className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black uppercase tracking-[-0.03em] text-slate-900">
                  Next Scale
                </span>
                <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Revenue Architecture Studio
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              High-converting digital storefronts, 24/7 WhatsApp AI booking concierges, and operational revenue growth infrastructure. Shipped in 7 days.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.06em] text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="size-4" /> Start a project <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-slate-600 transition hover:text-blue-600"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row">
          <div>
            &copy; {new Date().getFullYear()} NextScale Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="LinkedIn">
              <LinkedinIcon className="size-4" />
            </a>
            <a href="https://github.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="GitHub">
              <GithubIcon className="size-4" />
            </a>
            <a href="https://x.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="Twitter">
              <TwitterIcon className="size-4" />
            </a>
            <a href="https://instagram.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="Instagram">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
