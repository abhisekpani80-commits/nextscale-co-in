"use client";

import Link from "next/link";
import {
  Code2,
  Globe,
  Sparkles,
  Bot,
  MapPin,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Terminal,
  CheckCircle2,
  MessageCircle,
  Briefcase,
  Layers,
  GraduationCap,
  Cpu,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site";
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
  { category: "Web Engineering", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Turbopack", "Node.js", "Server Actions"] },
  { category: "AI & Automation", items: ["OpenAI API", "Claude 3.7", "WhatsApp Cloud API", "Twilio", "Deepgram", "Sarvam AI", "n8n Workflows"] },
  { category: "Data & Systems", items: ["Supabase", "PostgreSQL", "Edge Caching", "REST APIs", "Webhooks", "JSON-LD Schema"] },
  { category: "Search & Growth", items: ["Technical SEO", "Generative Engine Optimization (GEO)", "Local SEO", "Core Web Vitals (INP)", "E-E-A-T"] },
];

const HIGHLIGHTS = [
  {
    title: "Next Scale Studio",
    role: "Founder & Lead Architect",
    period: "2024 — Present",
    desc: "AI-first web agency delivering custom business websites in 7 days and 24/7 WhatsApp AI receptionists across India, UAE, and USA.",
    link: "/about/next-scale",
    badge: "Active Studio",
  },
  {
    title: "ExamOS",
    role: "Creator & Lead Developer",
    period: "2025 — Present",
    desc: "AI-powered exam preparation engine for NEET, CUET, IBPS, and OPSC competitive exams with adaptive question generation.",
    link: "/products/examos",
    badge: "Beta Platform",
  },
  {
    title: "Aura AI",
    role: "Architect & AI Researcher",
    period: "2025 — Present",
    desc: "Spoken English fluency coach with real-time phoneme pronunciation feedback powered by Deepgram, Claude, and Sarvam AI.",
    link: "/products/aura",
    badge: "Coming Soon",
  },
];

export function FounderEntityView() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Decor */}
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-[#5B5146]">
          <Link href="/" className="hover:text-[#FF4D00]">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[#FF4D00]">About</Link>
          <span>/</span>
          <span className="text-[#141414]">Abhisek Pani</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[8px_8px_0px_#141414] sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* Profile Intro */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#141414] bg-[#FFC72E] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414]">
                    <Sparkles className="size-3.5 fill-current text-[#141414]" />
                    Founder Profile
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#141414]/20 bg-[#FAF3E5] px-3 py-1 text-xs font-bold text-[#5B5146]">
                    <MapPin className="size-3 text-[#FF4D00]" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>

                <h1 className="font-heading text-3xl font-black tracking-tight text-[#141414] sm:text-5xl lg:text-6xl">
                  Abhisek Pani
                </h1>
                
                <p className="mt-2 text-base font-bold text-[#FF4D00] sm:text-xl">
                  Founder & Lead Software Architect at{" "}
                  <Link href="/about/next-scale" className="underline decoration-[#141414] decoration-2 underline-offset-4 hover:text-[#141414]">
                    Next Scale
                  </Link>
                </p>

                <p className="mt-4 text-base leading-relaxed text-[#5B5146] sm:text-lg">
                  Software architect and AI builder engineering sub-second Next.js web applications, 24/7 autonomous WhatsApp AI receptionists, and digital growth infrastructure. Operating on an anti-agency model: <strong className="text-[#141414]">7-day delivery, 100% source code ownership, and zero recurring lock-ins.</strong>
                </p>

                {/* Social & Genuine Entity Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-3.5 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFC72E] hover:shadow-[1px_1px_0px_#141414]"
                    >
                      <soc.icon className="size-3.5" />
                      <span>{soc.name}</span>
                      <ExternalLink className="size-3 text-[#5B5146]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Founder Quick Stats Card */}
              <div className="w-full shrink-0 md:w-64">
                <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[4px_4px_0px_#141414]">
                  <h2 className="text-xs font-black uppercase tracking-wider text-[#5B5146]">
                    Fast Track Record
                  </h2>
                  <div className="mt-4 space-y-3.5">
                    <div>
                      <span className="font-heading text-2xl font-black text-[#141414]">25+</span>
                      <p className="text-xs font-semibold text-[#5B5146]">Websites Delivered</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-[#FF4D00]">12+</span>
                      <p className="text-xs font-semibold text-[#5B5146]">Live WhatsApp AI Agents</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-[#141414]">7 Days</span>
                      <p className="text-xs font-semibold text-[#5B5146]">Guaranteed Delivery Velocity</p>
                    </div>
                    <div>
                      <span className="font-heading text-2xl font-black text-[#0F6838]">100%</span>
                      <p className="text-xs font-semibold text-[#5B5146]">Client Code Handover</p>
                    </div>
                  </div>

                  <a
                    href={waLink("Hi Abhisek! I saw your personal founder profile and would like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#25D366] py-2.5 text-xs font-black text-[#141414] shadow-[2px_2px_0px_#141414] transition-all hover:bg-[#1ebd5a]"
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Terminal className="size-4" />
                <span>The Story & Founder Manifesto</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Why I Built Next Scale: The Anti-Agency Doctrine
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5B5146] sm:text-base">
                <p>
                  For years, traditional digital agencies have operated on slow timelines and vendor lock-in. A simple business website would take 3–4 months, cost exorbitant fees, rely on bloated WordPress templates with 40 plugins, and hold the client hostage for every minor text change.
                </p>
                <p>
                  I created <strong className="text-[#141414]">Next Scale</strong> to completely dismantle that outdated model. By leveraging modern full-stack web architectures (Next.js 16, React 19, TypeScript) and autonomous LLM workflows, we build custom, enterprise-grade software that goes live in <strong className="text-[#FF4D00]">5 to 7 days</strong> with 100% source code ownership handed straight to the client.
                </p>
                <p>
                  As an engineer based in <strong className="text-[#141414]">Bhubaneswar, Odisha</strong>, my goal is to provide ambitious clinics, real estate firms, legal practices, and SMBs across India and globally with the exact same high-speed technological infrastructure used by Silicon Valley startups.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#141414]/20 bg-[#FAF3E5] p-4">
                  <span className="font-heading text-base font-black text-[#141414]">1. Speed as a Feature</span>
                  <p className="mt-1 text-xs text-[#5B5146]">Sub-second edge loading, Google Core Web Vitals 95+, and 7-day deployment timelines.</p>
                </div>
                <div className="rounded-xl border border-[#141414]/20 bg-[#FAF3E5] p-4">
                  <span className="font-heading text-base font-black text-[#141414]">2. Zero Vendor Lock-in</span>
                  <p className="mt-1 text-xs text-[#5B5146]">100% clean GitHub repository and hosting transfer. You own your digital assets completely.</p>
                </div>
                <div className="rounded-xl border border-[#141414]/20 bg-[#FAF3E5] p-4">
                  <span className="font-heading text-base font-black text-[#141414]">3. AI That Drives ROI</span>
                  <p className="mt-1 text-xs text-[#5B5146]">24/7 WhatsApp AI agents that book calendar slots, qualify high-intent leads, and boost revenue.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Technical Expertise & Stack */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Cpu className="size-4" />
                <span>Technical Mastery</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                What Abhisek Pani Engineers
              </h2>

              <p className="mt-2 text-sm text-[#5B5146]">
                Deep architectural expertise across modern web standards, generative AI systems, and search intelligence.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
                    <h3 className="font-heading text-base font-black text-[#141414]">
                      {skillGroup.category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-[#141414]/20 bg-[#FFFCF5] px-2.5 py-1 text-xs font-bold text-[#141414]"
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Layers className="size-4" />
                <span>Flagship Projects</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Systems & Products Built by Abhisek Pani
              </h2>

              <div className="mt-6 space-y-4">
                {HIGHLIGHTS.map((proj) => (
                  <div
                    key={proj.title}
                    className="flex flex-col justify-between gap-4 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[4px_4px_0px_#141414] sm:flex-row sm:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-lg font-black text-[#141414]">
                          {proj.title}
                        </h3>
                        <span className="rounded bg-[#FFC72E] px-2 py-0.5 text-[10px] font-black uppercase text-[#141414] border border-[#141414]">
                          {proj.badge}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#FF4D00]">{proj.role} • {proj.period}</p>
                      <p className="mt-1 text-xs text-[#5B5146] sm:text-sm">{proj.desc}</p>
                    </div>

                    <Link
                      href={proj.link}
                      className="inline-flex shrink-0 items-center gap-1 rounded-xl border-2 border-[#141414] bg-[#FFFCF5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[2px_2px_0px_#141414] transition-all hover:bg-[#FFC72E]"
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#141414] p-8 text-center text-white shadow-[8px_8px_0px_#FF4D00] sm:p-12">
              <h2 className="font-heading text-2xl font-black sm:text-4xl text-white">
                Let&apos;s Build Your High-Velocity System
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
                Whether you need a custom business website live in 7 days or a 24/7 WhatsApp AI receptionist, work directly with founder Abhisek Pani.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waLink("Hi Abhisek! I would like to discuss building a custom website / AI agent.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#25D366] px-6 py-3.5 text-sm font-black text-[#141414] shadow-[4px_4px_0px_#FFFFFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <MessageCircle className="size-4.5" />
                  Chat with Abhisek on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <span>Submit Project Scope</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Entity Schema Note */}
              <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/40">
                <span>Entity Authority: Abhisek Pani • Founder of Next Scale • Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
