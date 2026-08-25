import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Bot,
  TrendingUp,
  CheckCircle,
  Zap,
  Clock,
  ShieldCheck,
  Code2,
  Sparkles,
  Layers,
  PhoneCall,
  Check,
  BarChart3,
  Calendar,
  Building2,
  Stethoscope,
  Scissors,
  Rocket,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceFinder } from "@/components/services/ServiceFinder";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { waLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Services & Digital Systems | Next Scale",
  description:
    "Explore high-performance websites, 24/7 WhatsApp AI agents, and compounding growth systems engineered for modern businesses worldwide.",
  path: "/services",
  image: "/og-image-v2.png",
  keywords: [
    "business website design",
    "WhatsApp AI agent for business",
    "digital growth services India",
    "Next.js agency Odisha",
    "lead automation systems",
  ],
});

const MARQUEE_ITEMS = [
  "⚡ Sub-Second Next.js Builds",
  "🤖 24/7 WhatsApp AI Receptionist",
  "📈 Local Google SEO Domination",
  "🚀 Shipped in 5 to 7 Days",
  "🔒 100% Source Code Ownership",
  "💬 Direct Founder WhatsApp Line",
  "🌍 Serving Clients in 8+ Countries",
  "🎯 99/100 PageSpeed Guaranteed",
];

const FLAGSHIP_SERVICES = [
  {
    id: "websites",
    number: "01",
    tag: "Most Requested",
    title: "High-Performance Websites",
    kicker: "Engineered for credibility, speed, and conversion",
    color: "#FFC72E",
    badgeBg: "#FFC72E",
    icon: Globe,
    desc: "We don't build generic WordPress templates that lag on mobile. We handcraft ultra-fast Next.js web applications with instant load times, seamless WhatsApp lead funnels, and built-in local SEO that turns visitors into paying customers.",
    timeline: "Shipped in 5–7 Days",
    features: [
      "Mobile-first, 95+ Google Lighthouse speed score",
      "One-click WhatsApp chat & smart enquiry routing",
      "Google Maps integration, review feed & trust proof",
      "SEO schema markup, rich meta tags & sitemap setup",
      "Zero monthly maintenance fees & 100% code handover",
    ],
    tech: ["Next.js 16", "Tailwind CSS", "TypeScript", "Vercel CDN"],
    href: "/services/websites",
    cta: "Explore Website Services",
  },
  {
    id: "ai-agents",
    number: "02",
    tag: "High ROI Automation",
    title: "24/7 WhatsApp AI Agents",
    kicker: "Answer, qualify, and book clients while you sleep",
    color: "#9DD9FF",
    badgeBg: "#9DD9FF",
    icon: Bot,
    desc: "Never lose a high-intent client to a delayed reply. Our autonomous AI receptionists integrate into your official WhatsApp Business number to answer FAQs, qualify requirements, book appointments into Google Calendar, and hand off to humans when needed.",
    timeline: "Deployed in 48–72 Hours",
    features: [
      "Trained on your business pricing, treatments & policies",
      "Real-time Google Calendar & CRM appointment sync",
      "Lead scoring (filters tire-kickers from high-budget clients)",
      "Automated WhatsApp reminder sequences to stop no-shows",
      "Human-in-the-loop fallback with instant phone alerts",
    ],
    tech: ["OpenAI / Meta API", "Supabase", "Webhooks", "FastAPI"],
    href: "/services/ai-agents",
    cta: "Explore AI Agents",
  },
  {
    id: "digital-growth",
    number: "03",
    tag: "Compounding Growth",
    title: "Digital Growth & SEO Engines",
    kicker: "Get discovered, outrank competitors, and stay chosen",
    color: "#B8E986",
    badgeBg: "#B8E986",
    icon: TrendingUp,
    desc: "A great website is useless if no one finds it. We build repeatable digital growth systems that optimize your Google Business profile, write high-intent search content, and automate 5-star review collection to put you at the top of local search.",
    timeline: "Monthly Compounding Retainer",
    features: [
      "Google Business Profile top 3 local map pack ranking",
      "Conversion-focused copywriting that hooks local buyers",
      "Automated post-service review collection triggers",
      "Competitor keyword gap analysis & on-page schema SEO",
      "Transparent monthly ROI & lead attribution dashboards",
    ],
    tech: ["Google Console", "Local Schema", "Analytics", "Automation"],
    href: "/services/digital-growth",
    cta: "Explore Growth Services",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Scope",
    time: "Day 1",
    desc: "We analyze your existing workflow, target customers, and revenue bottleneck to propose the leanest, highest-impact system.",
    color: "#FFC72E",
  },
  {
    step: "02",
    title: "Rapid Build & Copy",
    time: "Days 2–4",
    desc: "We write conversion copy, design custom interfaces, and code the full Next.js site with sub-second performance.",
    color: "#FFB7C5",
  },
  {
    step: "03",
    title: "AI Training & Integrations",
    time: "Days 5–6",
    desc: "We tune AI prompts on your FAQs, connect WhatsApp API webhooks, and test booking calendar synchronizations.",
    color: "#9DD9FF",
  },
  {
    step: "04",
    title: "Launch & Code Handover",
    time: "Day 7",
    desc: "We point your domain, run 95+ speed audits, and hand over full repository ownership with zero ongoing lock-ins.",
    color: "#B8E986",
  },
];

const INDUSTRY_PLAYBOOKS = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    color: "#FFC72E",
    problem: "High no-show rates & missed patient queries after clinic hours.",
    solution: "24/7 WhatsApp AI triage + instant slot booking + SMS reminder sequences.",
    impact: "+40% booked consultations, -55% no-shows",
  },
  {
    icon: Building2,
    title: "Real Estate & Builders",
    color: "#9DD9FF",
    problem: "Sales teams overwhelmed calling unverified, low-budget tire kickers.",
    solution: "Interactive property catalogs + autonomous budget scoring + CRM sync.",
    impact: "3.2x verified site visits, zero manual data entry",
  },
  {
    icon: Scissors,
    title: "Salons & Studios",
    color: "#FFB7C5",
    problem: "Constant phone interruptions during client appointments.",
    solution: "WhatsApp self-service booking bot + automated Google review collector.",
    impact: "+2.5x 5-star Google reviews in 60 days",
  },
  {
    icon: Rocket,
    title: "Startups & B2B",
    color: "#B8E986",
    problem: "Slow MVP launches and poor conversion rates on paid ad traffic.",
    solution: "High-speed custom Next.js landing pages + interactive ROI calculators.",
    impact: "Live in 7 days with sub-second page loads",
  },
];

const GUARANTEES = [
  {
    icon: Code2,
    title: "100% Code Ownership",
    desc: "You own all GitHub repositories, domains, and assets. No proprietary host lock-in.",
  },
  {
    icon: Zap,
    title: "95+ PageSpeed Score",
    desc: "Mobile-first, zero-bloat architecture ensuring instant page loads everywhere.",
  },
  {
    icon: Clock,
    title: "7-Day Fast Delivery",
    desc: "Focused, rapid deployment cycles. We launch in days, not agonizing months.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Hidden Fees",
    desc: "Transparent upfront pricing. You never pay unexpected maintenance invoices.",
  },
  {
    icon: Sparkles,
    title: "30-Day Launch Support",
    desc: "Post-launch prompt tuning, analytics tracking, and bug fixes included for free.",
  },
  {
    icon: PhoneCall,
    title: "Direct Founder Access",
    desc: "Direct communication with engineers over WhatsApp. No account manager telephone games.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      {/* Marquee Ticker */}
      <div className="border-b-2 border-[#141414] bg-[#FFC72E] py-2.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-display text-xs font-black uppercase tracking-[0.12em] text-[#141414]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="size-1.5 rounded-full bg-[#141414]" />
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-16 sm:px-8 sm:py-24 overflow-hidden">
        {/* Interactive Physics DotGrid Backdrop from ReactBits */}
        <DotGridBackdrop />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#141414]">
                  <Sparkles className="size-3.5" /> What We Build
                </span>
                <span className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#5B5146]">
                  Modern Digital Systems
                </span>
              </div>

              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
                Digital engines <br />
                built for <span className="text-[#FF4D00]">revenue.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-7 text-[#141414] sm:text-xl">
                From blazing-fast Next.js websites to 24/7 WhatsApp AI receptionists — we replace bloated agency retainers with lean, automated customer machines that work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hi Next Scale! I'm reviewing your services and would like to discuss a project for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-6 py-3.5 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[4px_4px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FF4D00]"
                >
                  Start a Project <ArrowRight className="size-4" />
                </a>
                <a
                  href="#service-finder"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-6 py-3.5 font-display text-xs font-black uppercase shadow-[3px_3px_0_#141414] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
                >
                  Take 60s Fit Quiz ↓
                </a>
              </div>
            </div>

            {/* Quick Proof Cards on Right */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-5 shadow-[5px_5px_0_#141414]">
                <span className="font-display text-3xl font-black text-[#FF4D00] sm:text-4xl">99/100</span>
                <span className="mt-1 block font-display text-xs font-black uppercase tracking-[0.05em] text-[#141414]">
                  PageSpeed Score
                </span>
                <p className="mt-2 text-xs text-[#5B5146]">Sub-second loads that keep visitors from bouncing.</p>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#9DD9FF] p-5 shadow-[5px_5px_0_#141414]">
                <span className="font-display text-3xl font-black text-[#141414] sm:text-4xl">&lt; 2s</span>
                <span className="mt-1 block font-display text-xs font-black uppercase tracking-[0.05em] text-[#141414]">
                  AI Reply Time
                </span>
                <p className="mt-2 text-xs text-[#141414]/80">Instant WhatsApp triage day and night.</p>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#FFB7C5] p-5 shadow-[5px_5px_0_#141414]">
                <span className="font-display text-3xl font-black text-[#141414] sm:text-4xl">7 Days</span>
                <span className="mt-1 block font-display text-xs font-black uppercase tracking-[0.05em] text-[#141414]">
                  Launch Timeline
                </span>
                <p className="mt-2 text-xs text-[#141414]/80">Rapid turnaround with full code handover.</p>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#B8E986] p-5 shadow-[5px_5px_0_#141414]">
                <span className="font-display text-3xl font-black text-[#141414] sm:text-4xl">100%</span>
                <span className="mt-1 block font-display text-xs font-black uppercase tracking-[0.05em] text-[#141414]">
                  Code Ownership
                </span>
                <p className="mt-2 text-xs text-[#141414]/80">You own everything. No monthly host hostage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Flagship Systems */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="section-label">Core Capabilities</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.5rem,5.5vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Three focused systems. <br />
              Zero unnecessary fluff.
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#5B5146]">
              Every solution is modular — deploy a standalone website, an AI agent, or connect them into an integrated growth machine.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {FLAGSHIP_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] shadow-[8px_8px_0_#141414] transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Card Top Stripe */}
                  <div>
                    <div
                      className="flex items-center justify-between border-b-2 border-[#141414] p-6"
                      style={{ backgroundColor: s.color }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#FFFCF5] shadow-[2px_2px_0_#141414]">
                          <Icon className="size-5 text-[#141414]" />
                        </div>
                        <span className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#141414]/70">
                          {s.number} / System
                        </span>
                      </div>
                      <span className="rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-2.5 py-0.5 font-display text-[0.62rem] font-black uppercase text-[#141414]">
                        {s.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-display text-3xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#141414]">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-display text-xs font-bold uppercase text-[#FF4D00]">
                        {s.kicker}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[#5B5146]">{s.desc}</p>

                      <div className="mt-6 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] p-3 text-center">
                        <span className="font-display text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#141414]">
                          ⏱ Typical Turnaround: {s.timeline}
                        </span>
                      </div>

                      {/* Feature Checklist */}
                      <div className="mt-6">
                        <p className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                          What&apos;s Included:
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {s.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#141414]">
                              <Check className="size-4 shrink-0 text-[#FF4D00] mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {s.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[#141414] bg-white px-2 py-0.5 font-mono text-[0.62rem] font-bold text-[#141414]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="border-t-2 border-[#141414] bg-[#FAF3E5] p-6">
                    <Link
                      href={s.href}
                      className="inline-flex w-full items-center justify-between rounded-full border-2 border-[#141414] bg-[#141414] px-5 py-3 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#FF4D00] transition hover:-translate-y-0.5 hover:bg-[#FF4D00]"
                    >
                      <span>{s.cta}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Velocity Process */}
      <section className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 text-center">
            <p className="section-label">How We Deliver</p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              From idea to live in 7 days.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#5B5146]">
              A proven, sprint-based delivery model that eliminates agency bureaucracy and ships functional code fast.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="relative flex flex-col justify-between rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0_#141414]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex size-10 items-center justify-center rounded-xl border-2 border-[#141414] font-display text-sm font-black shadow-[2px_2px_0_#141414]"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.step}
                    </span>
                    <span className="rounded-full border border-[#141414] bg-white px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase text-[#141414]">
                      {p.time}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-black uppercase text-[#141414]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#5B5146]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Playbooks */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="section-label">Tailored For Your Business</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Industry-Specific Solutions
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#5B5146]">
              Pre-architected workflows built specifically for your sector&apos;s customer acquisition funnel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_PLAYBOOKS.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="flex flex-col justify-between rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-6 shadow-[5px_5px_0_#141414]"
                >
                  <div>
                    <div
                      className="flex size-11 items-center justify-center rounded-xl border-2 border-[#141414] shadow-[2px_2px_0_#141414]"
                      style={{ backgroundColor: ind.color }}
                    >
                      <Icon className="size-5 text-[#141414]" />
                    </div>

                    <h3 className="mt-4 font-display text-lg font-black uppercase text-[#141414]">
                      {ind.title}
                    </h3>

                    <div className="mt-4 space-y-3">
                      <div>
                        <span className="font-display text-[0.62rem] font-black uppercase tracking-wider text-[#FF4D00]">
                          The Bottleneck
                        </span>
                        <p className="text-xs text-[#5B5146] mt-0.5">{ind.problem}</p>
                      </div>

                      <div>
                        <span className="font-display text-[0.62rem] font-black uppercase tracking-wider text-[#141414]">
                          The Next Scale Fix
                        </span>
                        <p className="text-xs font-semibold text-[#141414] mt-0.5">{ind.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#141414] bg-white p-2.5 text-center">
                    <span className="font-display text-[0.65rem] font-black uppercase text-[#141414]">
                      ⚡ {ind.impact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Service Fit Finder Container */}
      <section id="service-finder" className="border-b-2 border-[#141414] bg-[#FAF3E5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 text-center">
            <p className="section-label">Find Your Best Fit</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Answer 3 Quick Questions. <br />
              Get an Instant Recommendation.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-[#5B5146]">
              No sales pressure. Let our interactive fit finder suggest the right scope for your immediate goals.
            </p>
          </div>
          <ServiceFinder />
        </div>
      </section>

      {/* The Next Scale Guarantees Grid */}
      <section className="border-b-2 border-[#141414] bg-[#FFFCF5] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 text-center">
            <p className="section-label">Our Commitments</p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              What You Always Get With Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-6 shadow-[5px_5px_0_#141414]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#FFC72E] shadow-[2px_2px_0_#141414]">
                    <Icon className="size-5 text-[#141414]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-black uppercase text-[#141414]">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5B5146]">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#141414] px-5 py-20 text-[#FAF3E5] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-[#FFC72E]">
            Ready To Upgrade Your Digital System?
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
            Let&apos;s build something <span className="text-[#FF4D00]">unstoppable.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-[#FAF3E5]/70 sm:text-lg">
            Tell us about your business on WhatsApp and we&apos;ll share a concrete scope proposal within 24 hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Hi Next Scale! I'd like to talk through your services and see which plan fits my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFC72E] bg-[#FFC72E] px-7 py-3.5 font-display text-xs font-black uppercase text-[#141414] shadow-[4px_4px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FF4D00] hover:text-white"
            >
              <PhoneCall className="size-4" /> Chat on WhatsApp Directly
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#FAF3E5]/40 bg-white/5 px-7 py-3.5 font-display text-xs font-black uppercase text-[#FAF3E5] transition hover:bg-white/10"
            >
              View Transparent Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

