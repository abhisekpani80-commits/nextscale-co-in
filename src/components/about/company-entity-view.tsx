"use client";

import Link from "next/link";
import {
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
  Layers,
  Bot,
  User,
  CheckCircle2,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";

const COMPANY_FACTS = [
  { label: "Legal Entity", value: SITE.legalName },
  { label: "Founder & CEO", value: "Abhisek Pani", href: "/about/abhisek-pani" },
  { label: "Founding Year", value: "2024" },
  { label: "Headquarters", value: "Bhubaneswar, Odisha, India" },
  { label: "Delivery Velocity", value: "7 Calendar Days" },
  { label: "Code Ownership", value: "100% Full Source Handover" },
  { label: "Primary Architecture", value: "Next.js 16 • React 19 • TypeScript" },
  { label: "Service Radius", value: "India, UAE, UK, USA & Global" },
];

const PILLARS = [
  {
    icon: Zap,
    title: "7-Day Velocity Delivery",
    desc: "We eliminate agency delays. Full custom high-converting websites go live in 7 days, and WhatsApp AI bots are deployed in 48 to 72 hours.",
  },
  {
    icon: ShieldCheck,
    title: "100% Client Code Ownership",
    desc: "No proprietary site-builders, no monthly ransom fees. You receive clean repository access and direct cloud hosting credentials.",
  },
  {
    icon: CheckCircle2,
    title: "Sub-Second Mobile Speed",
    desc: "Built on high-performance architecture. Opens in under 1 second on mobile networks so you never lose a paying buyer to slow loading.",
  },
  {
    icon: Bot,
    title: "24/7 WhatsApp AI Bot",
    desc: "Answers customer queries in seconds, qualifies client budgets, and syncs confirmed consultations straight into your calendar 24 hours a day.",
  },
];

const INDUSTRIES = [
  { name: "Healthcare & Aesthetic Clinics", href: "/services", desc: "Dermatology, Dental, IVF, and Physiotherapy clinics" },
  { name: "Real Estate Developers", href: "/services", desc: "High-speed property listings and lead capture funnels" },
  { name: "B2B SaaS & Tech Startups", href: "/services", desc: "High-converting storefronts and customer booking flows" },
  { name: "Professional Services", href: "/services", desc: "Law firms, CA practices, and executive consulting studios" },
];

export function CompanyEntityView() {
  return (
    <div className="relative min-h-screen pb-20 bg-white text-slate-900">
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <span>/</span>
          <span className="text-slate-900">Next Scale Studio</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Building2 className="size-3.5" />
                    Company Entity Profile
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    <MapPin className="size-3 text-blue-600" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>

                <h1 className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Next Scale
                </h1>

                <p className="mt-2 text-base font-bold text-blue-600 sm:text-xl">
                  Revenue Architecture &amp; Operational Growth Studio
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Next Scale is an independent software and growth studio founded by{" "}
                  <Link href="/about/abhisek-pani" className="font-bold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-2 hover:text-blue-600">
                    Abhisek Pani
                  </Link>{" "}
                  in 2024. We build high-converting business websites and 24/7 WhatsApp AI booking bots for growing businesses.
                </p>

                {/* Direct Action Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/about/abhisek-pani"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:bg-white hover:text-blue-600 hover:border-blue-300"
                  >
                    <User className="size-3.5 text-blue-600" />
                    <span>Meet Founder Abhisek Pani</span>
                    <ArrowRight className="size-3" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:bg-white hover:text-blue-600 hover:border-blue-300"
                  >
                    <span>View Client Work</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* Fast Facts Sheet */}
              <div className="w-full shrink-0 md:w-72">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Company Snapshot
                  </h2>
                  <div className="mt-3 divide-y divide-slate-200/80 text-xs">
                    {COMPANY_FACTS.map((fact) => (
                      <div key={fact.label} className="flex items-center justify-between py-2">
                        <span className="text-slate-500">{fact.label}</span>
                        {fact.href ? (
                          <Link href={fact.href} className="font-bold text-blue-600 hover:underline">
                            {fact.value}
                          </Link>
                        ) : (
                          <span className="font-semibold text-slate-900 text-right">{fact.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href={waLink("Hi Next Scale! I'd like to know more about your company services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all active:scale-95"
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <ShieldCheck className="size-4" />
                <span>The Next Scale Standard</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
                How Next Scale Outperforms Traditional Agencies
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Traditional agencies rely on complex overhead, slow sprint cycles, and recurring maintenance contracts. Next Scale operates on radical engineering efficiency and fixed 7-day delivery.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                        <pillar.icon className="size-5" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Layers className="size-4" />
                <span>Industry Focus</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
                Tailored Turnkey Solutions
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs transition-all hover:bg-white hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ind.name}
                      </h3>
                      <ArrowRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{ind.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-[#0B0F19] p-8 text-center text-white shadow-xl sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 blur-3xl pointer-events-none" />
              <h2 className="font-heading text-2xl font-black sm:text-4xl text-white relative z-10">
                Ready to Upgrade Your Digital Infrastructure?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base relative z-10">
                Get a custom high-converting website delivered in 7 days or deploy a 24/7 WhatsApp AI bot in 48 hours.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row relative z-10">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:brightness-110 active:scale-95"
                >
                  <MessageCircle className="size-4" />
                  Start on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800"
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
