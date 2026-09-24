"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work & Portfolio", href: "/portfolio" },
      { label: "Products & SaaS", href: "/products" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "India Pricing Studio", href: "/pricing-studio" },
      { label: "Free Tools", href: "/tools" },
      { label: "Compare Agency", href: "/compare" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Next Scale", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Resources & Playbooks", href: "/resources" },
      { label: "Case Studies", href: "/portfolio" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Refund Policy", href: "/legal/refund" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
];

export function ResponsiveFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 sm:py-20 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand (4 cols) + Explore (2.5 cols) + Company (2.5 cols) + Legal (3 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Next Scale home">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 transition group-hover:scale-105">
                <NextscaleLogo className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-black uppercase tracking-[-0.03em] text-slate-900">
                  Next Scale<span className="text-blue-600">.</span>
                </span>
                <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Websites &amp; WhatsApp AI Bots
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              We build fast, high-converting websites paired with 24/7 WhatsApp AI bots that book clients automatically for growing businesses worldwide.
            </p>

            <div className="pt-1 space-y-2 text-xs sm:text-sm">
              <a
                href="https://wa.me/919556436685"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                <MessageSquare className="size-4 text-blue-600" />
                <span>+91 95564 36685 (WhatsApp Direct)</span>
              </a>
              <a
                href="mailto:biz.abhisek@gmail.com"
                className="block text-slate-700 hover:text-blue-600 transition-colors font-mono text-xs"
              >
                biz.abhisek@gmail.com
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-medium text-blue-700">
                <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
                Sub-15m Response Time · Bhubaneswar, India
              </span>
            </div>
          </div>

          {/* Columns: Explore, Company, Legal */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-3.5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NextScale Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-5 text-slate-500">
            <a href="https://linkedin.com/company/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="size-4" />
            </a>
            <a href="https://github.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="GitHub">
              <GithubIcon className="size-4" />
            </a>
            <a href="https://x.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Twitter">
              <TwitterIcon className="size-4" />
            </a>
            <a href="https://instagram.com/nextscale" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Instagram">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
