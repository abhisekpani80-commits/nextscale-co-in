"use client";

import Link from "next/link";
import {
  Globe,
  Sparkles,
  MapPin,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";

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
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhisek-pani-1b3592329/", icon: LinkedinIcon },
  { name: "GitHub", href: "https://github.com/abhisekpani80-commits", icon: GithubIcon },
  { name: "X / Twitter", href: "https://x.com/abhisekpani", icon: TwitterIcon },
  { name: "Instagram", href: "https://instagram.com/nextscale.co.in", icon: Globe },
];

const SKILLS = [
  { category: "Web Architecture", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "High-Speed Caching", "API Design"] },
  { category: "Autonomous Systems", items: ["WhatsApp Cloud API", "Smart Qualification AI", "Automated Scheduling", "CRM Integration", "24/7 Triage"] },
  { category: "Data & Security", items: ["PostgreSQL", "Cloudflare DNS", "SSL Encryption", "Webhooks", "JSON-LD Schema"] },
  { category: "Growth & Visibility", items: ["Technical SEO", "Mobile First Design", "Fast Loading Pages", "Google Search Optimization"] },
];

const HIGHLIGHTS = [
  {
    title: "Next Scale Studio",
    role: "Founder & Lead Architect",
    period: "2024 — Present",
    desc: "Revenue architecture studio delivering custom business websites in 7 days and 24/7 WhatsApp AI booking concierges across India, UAE, and USA.",
    link: "/about/next-scale",
    badge: "Active Studio",
  },
  {
    title: "ExamOS",
    role: "Creator & Lead Developer",
    period: "2025 — Present",
    desc: "AI-powered exam preparation engine for competitive exams with adaptive question generation.",
    link: "/products/examos",
    badge: "Beta Platform",
  },
  {
    title: "Aura AI",
    role: "Architect & AI Researcher",
    period: "2025 — Present",
    desc: "Spoken English fluency coach with real-time pronunciation feedback powered by voice intelligence.",
    link: "/products/aura",
    badge: "Coming Soon",
  },
];

export function FounderEntityView() {
  return (
    <div className="relative min-h-screen pb-20 bg-white text-slate-900">
      {/* Background Decor */}
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <span>/</span>
          <span className="text-slate-900">Abhisek Pani</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* Profile Intro */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Sparkles className="size-3.5 fill-current text-blue-600" />
                    Founder Profile
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    <MapPin className="size-3 text-blue-600" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>

                <h1 className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Abhisek Pani
                </h1>
                
                <p className="mt-2 text-base font-bold text-blue-600 sm:text-xl">
                  Founder &amp; Lead Architect at{" "}
                  <Link href="/about/next-scale" className="underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-700">
                    Next Scale
                  </Link>
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Software architect building high-converting digital storefronts and autonomous 24/7 WhatsApp client concierges. Operating on an anti-agency model: <strong className="text-slate-900">7-day guaranteed delivery, 100% full code ownership, and zero ongoing agency hostage fees.</strong>
                </p>

                {/* Social & Entity Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:bg-white hover:text-blue-600 hover:border-blue-300"
                    >
                      <soc.icon className="size-3.5" />
                      <span>{soc.name}</span>
                      <ExternalLink className="size-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Founder Quick Stats Card */}
              <div className="w-full shrink-0 md:w-64">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Track Record
                  </h2>
                  <div className="mt-4 space-y-3.5">
                    <div>
                      <span className="font-heading text-2xl font-black text-slate-900">25+</span>
                      <p className="text-xs text-slate-500 font-medium">Websites Delivered</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-blue-600">12+</span>
                      <p className="text-xs text-slate-500 font-medium">WhatsApp AI Concierges Live</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-slate-900">7 Days</span>
                      <p className="text-xs text-slate-500 font-medium">Guaranteed Delivery Velocity</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-emerald-600">100%</span>
                      <p className="text-xs text-slate-500 font-medium">Full Code Handover</p>
                    </div>
                  </div>

                  <a
                    href={waLink("Hi Abhisek! I saw your personal founder profile and would like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all active:scale-95"
                  >
                    <MessageCircle className="size-3.5" />
                    Chat with Abhisek
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section: The Story & Philosophy */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Terminal className="size-4" />
                <span>The Story &amp; Founder Manifesto</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
                Why I Built Next Scale: The Anti-Agency Model
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  For years, traditional digital agencies have operated on slow timelines and vendor lock-in. A simple business website would take 3–4 months, cost exorbitant fees, rely on bloated templates with dozens of vulnerable plugins, and hold the client hostage for every minor text change.
                </p>
                <p>
                  I created <strong className="text-slate-900">Next Scale</strong> to dismantle that outdated model. By leveraging modern web architectures and autonomous communication workflows, we build custom, enterprise-grade software that goes live in <strong className="text-blue-600">7 days</strong> with 100% source code ownership handed straight to the client.
                </p>
                <p>
                  As an engineer based in <strong className="text-slate-900">Bhubaneswar, Odisha</strong>, my goal is to provide ambitious clinics, real estate firms, legal practices, and businesses across India and globally with the exact same high-speed technological infrastructure used by top-tier modern enterprises.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="font-heading text-base font-bold text-slate-900">1. Instant Speed</span>
                  <p className="mt-1 text-xs text-slate-600">Sub-second page opens, 0 dropped mobile buyers, and 7-day deployment timelines.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="font-heading text-base font-bold text-slate-900">2. Zero Vendor Lock-in</span>
                  <p className="mt-1 text-xs text-slate-600">100% full repository and account transfer. You own your digital assets completely.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="font-heading text-base font-bold text-slate-900">3. AI That Sells</span>
                  <p className="mt-1 text-xs text-slate-600">24/7 WhatsApp AI concierges that book appointments, qualify high-intent clients, and boost revenue.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Technical Expertise & Stack */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Cpu className="size-4" />
                <span>Core Capabilities</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
                What Abhisek Pani &amp; Team Deliver
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                End-to-end expertise across conversion design, modern web architecture, and automated client communication.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs">
                    <h3 className="font-heading text-base font-bold text-slate-900">
                      {skillGroup.category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Projects & Built Systems */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow sm:p-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Layers className="size-4" />
                <span>Flagship Projects</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
                Systems &amp; Products Built by Abhisek Pani
              </h2>

              <div className="mt-6 space-y-4">
                {HIGHLIGHTS.map((proj) => (
                  <div
                    key={proj.title}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs sm:flex-row sm:items-center hover:border-blue-300 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-lg font-bold text-slate-900">
                          {proj.title}
                        </h3>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase text-blue-700 border border-blue-200">
                          {proj.badge}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">{proj.role} • {proj.period}</p>
                      <p className="mt-1 text-xs text-slate-600 sm:text-sm">{proj.desc}</p>
                    </div>

                    <Link
                      href={proj.link}
                      className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 shadow-2xs transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      <span>Explore</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-[#0B0F19] p-8 text-center text-white shadow-xl sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 blur-3xl pointer-events-none" />
              <h2 className="font-heading text-2xl font-black sm:text-4xl text-white relative z-10">
                Let&apos;s Build Your High-Velocity Growth System
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base relative z-10">
                Whether you need a custom business storefront live in 7 days or a 24/7 WhatsApp AI concierge, work directly with founder Abhisek Pani.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row relative z-10">
                <a
                  href={waLink("Hi Abhisek! I would like to discuss building a custom website / AI agent.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:brightness-110 active:scale-95"
                >
                  <MessageCircle className="size-4" />
                  Chat with Abhisek on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800"
                >
                  <span>Submit Project Scope</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Entity Schema Note */}
              <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-400 relative z-10">
                <span>Entity Authority: Abhisek Pani • Founder of Next Scale • Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
