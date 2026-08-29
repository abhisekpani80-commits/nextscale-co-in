"use client";

import Link from "next/link";
import {
  Building2,
  Globe,
  Sparkles,
  Bot,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
  CheckCircle2,
  MessageCircle,
  Layers,
  Cpu,
  User,
  ExternalLink,
  Code2,
  TrendingUp,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";

const COMPANY_FACTS = [
  { label: "Legal Entity", value: SITE.legalName },
  { label: "Founder & CEO", value: "Abhisek Pani", href: "/about/abhisek-pani" },
  { label: "Founding Year", value: "2024" },
  { label: "Headquarters", value: "Bhubaneswar, Odisha, India" },
  { label: "Delivery Velocity", value: "3–7 Business Days" },
  { label: "Code Ownership", value: "100% Full Source Handover" },
  { label: "Primary Architecture", value: "Next.js 16 • React 19 • TypeScript" },
  { label: "Service Radius", value: "India, UAE, UK, USA & Global" },
];

const PILLARS = [
  {
    icon: Zap,
    title: "7-Day Velocity Delivery",
    desc: "We eliminate bureaucratic agency bloat. Full custom Next.js websites go live in 5 to 7 days, and WhatsApp AI agents are deployed within 48 to 72 hours.",
  },
  {
    icon: ShieldCheck,
    title: "100% Client Code Ownership",
    desc: "No proprietary site-builders, no monthly ransom fees. You receive clean GitHub repository access and direct cloud hosting handover.",
  },
  {
    icon: Cpu,
    title: "Sub-Second Edge Performance",
    desc: "Engineered on Next.js 16 with server actions and edge caching. Guaranteed 95+ Core Web Vitals score for maximum SEO and conversion rates.",
  },
  {
    icon: Bot,
    title: "Autonomous Revenue Engines",
    desc: "Official Meta Cloud WhatsApp AI receptionists that answer questions, qualify client budgets, and sync bookings straight to Google Calendar 24/7.",
  },
];

const INDUSTRIES = [
  { name: "Healthcare & Clinics", href: "/industries/clinics", desc: "Dermatology, Dental, IVF, and Physiotherapy clinics" },
  { name: "Real Estate Developers", href: "/industries/real-estate", desc: "High-speed property listings and lead capture funnels" },
  { name: "B2B SaaS & Tech Startups", href: "/services/websites", desc: "High-converting marketing sites and MVP frontends" },
  { name: "Professional Services", href: "/services/digital-growth", desc: "Law firms, CA practices, and executive consulting studios" },
];

export function CompanyEntityView() {
  return (
    <div className="relative min-h-screen pb-20">
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-[#5B5146]">
          <Link href="/" className="hover:text-[#FF4D00]">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[#FF4D00]">About</Link>
          <span>/</span>
          <span className="text-[#141414]">Next Scale Studio</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[8px_8px_0px_#141414] sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#141414] bg-[#FFC72E] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414]">
                    <Building2 className="size-3.5" />
                    Company Entity Profile
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#141414]/20 bg-[#FAF3E5] px-3 py-1 text-xs font-bold text-[#5B5146]">
                    <MapPin className="size-3 text-[#FF4D00]" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>

                <h1 className="font-heading text-3xl font-black tracking-tight text-[#141414] sm:text-5xl lg:text-6xl">
                  Next Scale
                </h1>

                <p className="mt-2 text-base font-bold text-[#FF4D00] sm:text-xl">
                  AI-First Web Engineering & Digital Growth Studio
                </p>

                <p className="mt-4 text-base leading-relaxed text-[#5B5146] sm:text-lg">
                  Next Scale is an independent software studio founded by{" "}
                  <Link href="/about/abhisek-pani" className="font-bold text-[#141414] underline decoration-[#FF4D00] decoration-2 underline-offset-2 hover:text-[#FF4D00]">
                    Abhisek Pani
                  </Link>{" "}
                  in 2024. We architect high-performance Next.js business web applications, 24/7 WhatsApp conversational AI agents, and local SEO engines for growing enterprises.
                </p>

                {/* Direct Action Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/about/abhisek-pani"
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFC72E]"
                  >
                    <User className="size-3.5 text-[#FF4D00]" />
                    <span>Meet Founder Abhisek Pani</span>
                    <ArrowRight className="size-3" />
                  </Link>

                  <Link
                    href="/press"
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FAF3E5]"
                  >
                    <span>Press & Media Kit</span>
                    <ArrowRight className="size-3" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FAF3E5]"
                  >
                    <span>View Client Work</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* Fast Facts Sheet */}
              <div className="w-full shrink-0 md:w-72">
                <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[4px_4px_0px_#141414]">
                  <h2 className="text-xs font-black uppercase tracking-wider text-[#5B5146]">
                    Company Snapshot
                  </h2>
                  <div className="mt-3 divide-y divide-[#141414]/10 text-xs">
                    {COMPANY_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-center justify-between py-2">
                        <span className="font-semibold text-[#5B5146]">{fact.label}</span>
                        {fact.href ? (
                          <Link href={fact.href} className="font-bold text-[#FF4D00] hover:underline">
                            {fact.value}
                          </Link>
                        ) : (
                          <span className="font-bold text-[#141414] text-right">{fact.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href={waLink("Hi Next Scale! I'd like to know more about your company services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#25D366] py-2.5 text-xs font-black text-[#141414] shadow-[2px_2px_0px_#141414] transition-all hover:bg-[#1ebd5a]"
                  >
                    <MessageCircle className="size-3.5" />
                    Start on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section: The Four Core Pillars */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <ShieldCheck className="size-4" />
                <span>The Next Scale Standard</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                How Next Scale Outperforms Traditional Agencies
              </h2>

              <p className="mt-2 text-sm text-[#5B5146]">
                Traditional agencies rely on complex overhead, slow sprint cycles, and recurring maintenance contracts. Next Scale operates on radical engineering efficiency.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[4px_4px_0px_#141414]">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-xl border-2 border-[#141414] bg-[#FFC72E] text-[#141414]">
                        <pillar.icon className="size-5" />
                      </div>
                      <h3 className="font-heading text-lg font-black text-[#141414]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#5B5146] sm:text-sm">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Industries Served */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Layers className="size-4" />
                <span>Industry Focus</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Tailored Turnkey Solutions
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    className="group rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#FFC72E]"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-base font-black text-[#141414]">
                        {ind.name}
                      </h3>
                      <ArrowRight className="size-4 text-[#141414] transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-2 text-xs text-[#5B5146]">{ind.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Technical Stack */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Code2 className="size-4" />
                <span>Modern Technology Stack</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Built with World-Class Engineering Tools
              </h2>

              <p className="mt-2 text-sm text-[#5B5146]">
                We avoid outdated WordPress or PHP monolithic architectures. Next Scale builds on sub-second, enterprise-tested web stacks:
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js 16 (App Router & Turbopack)",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "Supabase (PostgreSQL)",
                  "OpenAI GPT-4o & Claude 3.7",
                  "Official Meta Cloud WhatsApp API",
                  "Vercel Edge Network",
                  "JSON-LD Schema (GEO & AEO)",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-3.5 py-1.5 text-xs font-bold text-[#141414] shadow-[2px_2px_0px_#141414]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#141414] p-8 text-center text-white shadow-[8px_8px_0px_#FF4D00] sm:p-12">
              <h2 className="font-heading text-2xl font-black sm:text-4xl text-white">
                Ready to Upgrade Your Digital Infrastructure?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
                Get a custom Next.js website delivered in 7 days or deploy an autonomous WhatsApp AI receptionist in 48 hours.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#25D366] px-6 py-3.5 text-sm font-black text-[#141414] shadow-[4px_4px_0px_#FFFFFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <MessageCircle className="size-4.5" />
                  Start on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
