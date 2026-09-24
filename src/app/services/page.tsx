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
    color: "#2563EB",
  },
  {
    step: "02",
    title: "Rapid Build & Copy",
    time: "Days 2–4",
    desc: "We write conversion copy, design custom interfaces, and code the full Next.js site with sub-second performance.",
    color: "#38BDF8",
  },
  {
    step: "03",
    title: "AI Training & Integrations",
    time: "Days 5–6",
    desc: "We tune AI prompts on your FAQs, connect WhatsApp API webhooks, and test booking calendar synchronizations.",
    color: "#60A5FA",
  },
  {
    step: "04",
    title: "Launch & Code Handover",
    time: "Day 7",
    desc: "We point your domain, run 95+ speed audits, and hand over full repository ownership with zero ongoing lock-ins.",
    color: "#1D4ED8",
  },
];

const INDUSTRY_PLAYBOOKS = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    color: "#2563EB",
    problem: "High no-show rates & missed patient queries after clinic hours.",
    solution: "24/7 WhatsApp AI bot + instant appointment booking + SMS reminders.",
    impact: "+40% booked consultations, -55% no-shows",
  },
  {
    icon: Building2,
    title: "Real Estate & Builders",
    color: "#38BDF8",
    problem: "Sales teams overwhelmed calling unverified, low-budget tire kickers.",
    solution: "Interactive property catalogs + autonomous budget scoring + CRM sync.",
    impact: "3.2x verified site visits, zero manual data entry",
  },
  {
    icon: Scissors,
    title: "Salons & Studios",
    color: "#60A5FA",
    problem: "Constant phone interruptions during client appointments.",
    solution: "WhatsApp self-service booking bot + automated Google review collector.",
    impact: "+2.5x 5-star Google reviews in 60 days",
  },
  {
    icon: Rocket,
    title: "Startups & B2B",
    color: "#1D4ED8",
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
    <div className="overflow-hidden pt-[4.5rem] sm:pt-24">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      {/* Marquee Ticker */}
      <div className="border-b border-slate-200 bg-blue-50/80 py-2.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-blue-900">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="size-1.5 rounded-full bg-blue-600" />
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-slate-200 bg-slate-50/40 px-5 py-16 sm:px-8 sm:py-24 overflow-hidden">
        {/* Interactive Physics DotGrid Backdrop from ReactBits */}
        <DotGridBackdrop />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-bold text-blue-700 shadow-sm">
                  <Sparkles className="size-3.5" /> What We Build
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  Modern Digital Systems
                </span>
              </div>

              <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-black leading-[1.05] tracking-tight text-slate-900">
                Digital engines <br />
                built for <span className="text-blue-600">revenue.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
                From blazing-fast Next.js websites to 24/7 WhatsApp AI receptionists — we replace bloated agency retainers with lean, automated customer machines that work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hi Next Scale! I'm reviewing your services and would like to discuss a project for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 min-h-[48px] text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
                >
                  Start a Project <ArrowRight className="size-4" />
                </a>
                <a
                  href="#service-finder"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 min-h-[48px] text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 active:scale-95"
                >
                  Take 60s Fit Quiz ↓
                </a>
              </div>
            </div>

            {/* Quick Proof Cards on Right — responsive 2-col on sm+, 1-col on xs */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <span className="font-display text-3xl font-black text-blue-600 sm:text-4xl">99/100</span>
                <span className="mt-1 block font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                  PageSpeed Score
                </span>
                <p className="mt-2 text-xs text-slate-500">Sub-second loads that keep visitors from bouncing.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <span className="font-display text-3xl font-black text-blue-600 sm:text-4xl">&lt; 2s</span>
                <span className="mt-1 block font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                  AI Reply Time
                </span>
                <p className="mt-2 text-xs text-slate-500">Instant WhatsApp AI bot replies day and night.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <span className="font-display text-3xl font-black text-blue-600 sm:text-4xl">7 Days</span>
                <span className="mt-1 block font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                  Launch Timeline
                </span>
                <p className="mt-2 text-xs text-slate-500">Rapid turnaround with full code handover.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <span className="font-display text-3xl font-black text-blue-600 sm:text-4xl">100%</span>
                <span className="mt-1 block font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                  Code Ownership
                </span>
                <p className="mt-2 text-xs text-slate-500">You own everything. No monthly host hostage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Flagship Systems */}
      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Core Capabilities</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-slate-900">
              Three focused systems. <br />
              Zero unnecessary fluff.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              Every solution is modular — deploy a standalone website, an AI agent, or connect them into an integrated growth machine.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {FLAGSHIP_SERVICES.map((s, idx) => {
              const Icon = s.icon;
              const isHighlight = idx === 0;

              return (
                <div
                  key={s.id}
                  className={`flex flex-col justify-between overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 ${
                    isHighlight
                      ? "border-blue-600 bg-white shadow-xl shadow-blue-500/10"
                      : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Card Top Stripe */}
                  <div>
                    <div className={`flex items-center justify-between border-b p-6 ${
                      isHighlight ? "border-blue-100 bg-blue-50/60" : "border-slate-100 bg-slate-50/80"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                          <Icon className="size-5 text-blue-600" />
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                          {s.number} / System
                        </span>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase ${
                        isHighlight ? "bg-blue-600 text-white" : "border border-slate-200 bg-white text-slate-700"
                      }`}>
                        {s.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                        {s.kicker}
                      </p>
                      <p className="mt-4 text-xs leading-relaxed text-slate-600">{s.desc}</p>

                      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center">
                        <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-slate-700">
                          ⏱ Typical Turnaround: {s.timeline}
                        </span>
                      </div>

                      {/* Feature Checklist */}
                      <div className="mt-6">
                        <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                          What&apos;s Included:
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {s.features.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                              <Check className="size-4 shrink-0 text-blue-600 mt-0.5" />
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
                            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[0.65rem] font-medium text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="border-t border-slate-100 bg-slate-50/60 p-6">
                    <Link
                      href={s.href}
                      className={`inline-flex w-full items-center justify-between rounded-xl px-5 py-3 min-h-[44px] text-xs font-bold uppercase tracking-wider transition ${
                        isHighlight
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700"
                          : "border border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/40"
                      }`}
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
      <section className="border-b border-slate-200 bg-slate-50/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">How We Deliver</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-slate-900">
              From idea to live in 7 days.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              A proven, sprint-based delivery model that eliminates agency bureaucracy and ships functional code fast.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 font-mono text-sm font-bold text-blue-600">
                      {p.step}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase text-slate-600">
                      {p.time}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Playbooks */}
      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Tailored For Your Business</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-slate-900">
              Industry-Specific Solutions
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              Pre-architected workflows built specifically for your sector&apos;s customer acquisition funnel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_PLAYBOOKS.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition hover:bg-white hover:border-blue-200 hover:shadow-md"
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                      <Icon className="size-5 text-blue-600" />
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                      {ind.title}
                    </h3>

                    <div className="mt-4 space-y-3">
                      <div>
                        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-blue-600">
                          The Bottleneck
                        </span>
                        <p className="text-xs text-slate-500 mt-0.5">{ind.problem}</p>
                      </div>

                      <div>
                        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-slate-800">
                          The Next Scale Fix
                        </span>
                        <p className="text-xs font-medium text-slate-700 mt-0.5">{ind.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-2.5 text-center">
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-blue-700">
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
      <section id="service-finder" className="border-b border-slate-200 bg-slate-50/50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Find Your Best Fit</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-slate-900">
              Answer 3 Quick Questions. <br />
              Get an Instant Recommendation.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-slate-600">
              No sales pressure. Let our interactive fit finder suggest the right scope for your immediate goals.
            </p>
          </div>
          <ServiceFinder />
        </div>
      </section>

      {/* The Next Scale Guarantees Grid */}
      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our Commitments</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-slate-900">
              What You Always Get With Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                    <Icon className="size-5 text-blue-600" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#0B0F19] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Ready To Upgrade Your Digital System?
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white">
            Let&apos;s build something <span className="text-blue-400">unstoppable.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Tell us about your business on WhatsApp and we&apos;ll share a concrete scope proposal within 24 hours.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink("Hi Next Scale! I'd like to talk through your services and see which plan fits my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 min-h-[52px] text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
            >
              <PhoneCall className="size-4" /> Chat on WhatsApp Directly
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-7 min-h-[52px] text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              View Transparent Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

