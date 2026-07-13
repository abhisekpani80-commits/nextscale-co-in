import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  BookOpen,
  FileText,
  FileCode,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Resources & Guides Hub — Next Scale",
  description: "Guides, playbooks, prompt libraries, ROI reports, and tool comparisons to plan your business automation.",
  path: "/resources",
});

const RESOURCES_CATEGORIES = [
  {
    title: "AI Automation Guides",
    desc: "In-depth playbooks and roadmap documents explaining how to implement AI in operations.",
    icon: BookOpen,
    items: [
      { name: "The Complete Business AI Playbook 2026", href: "/resources/guides/business-ai-playbook" },
      { name: "Core AI Term Glossary", href: "/resources/glossary/ai-glossary" },
    ],
  },
  {
    title: "Comparisons & Analysis",
    desc: "Balanced, evidence-based tech comparisons to help you make correct software choices.",
    icon: Layers,
    items: [
      { name: "Next Scale vs Traditional Web Agencies", href: "/compare" },
      { name: "AI Automation vs Manual Human Workflows", href: "/compare" },
    ],
  },
  {
    title: "Templates & Tools",
    desc: "Downloadable SOPs, system prompts, and checklists for operations team.",
    icon: FileCode,
    items: [
      { name: "WhatsApp AI System Prompt & SOP Template", href: "/resources/templates/whatsapp-ai-agent-sop" },
      { name: "Business Tech Audit Checklist", href: "/resources/checklists/tech-audit-checklist" },
    ],
  },
  {
    title: "Original Research",
    desc: "Proprietary research statistics and benchmarks on Indian business automation trends.",
    icon: FileText,
    items: [
      { name: "AI Adoption Report India 2026", href: "/resources/research/ai-adoption-report" },
    ],
  },
];

export default function ResourcesPage() {
  const publishDate = "2026-03-01";
  const reviewDate = "2026-07-01";

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0F0E0D] pb-24">
      <PageHero
        kicker="Resources"
        title={<>Knowledge hub &amp; <span className="text-primary">operational playbooks</span>.</>}
        description="Free guides, original datasets, prompt templates, and software comparisons written by builders."
      />

      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-20 flex flex-col gap-20">
        
        {/* E-E-A-T trust section */}
        <section className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
              <Award className="size-6" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-[#0F0E0D]">E-E-A-T Verified Resources</h3>
              <p className="text-xs text-[#6B6860] mt-0.5">Written and reviewed by verified Next Scale AI engineers. Content updated: {reviewDate}.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50/50 border border-emerald-100 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="size-4" />
            <span>Structured Data Compliant</span>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {RESOURCES_CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.08}>
              <div className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                      <cat.icon className="size-4.5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0F0E0D]">{cat.title}</h3>
                  </div>
                  <p className="text-[#6B6860] text-sm leading-relaxed mb-6">{cat.desc}</p>
                  
                  <ul className="flex flex-col gap-3">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between gap-4 p-3 rounded-xl border border-[#E8E6E1] hover:border-primary/30 hover:bg-blue-50/10 transition-all duration-200 text-xs font-semibold text-[#0F0E0D]"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="size-3.5 text-[#6B6860] group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Original Research Feature Block */}
        <section className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.02),transparent_70%)]" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-1 text-[10px] font-semibold text-[#1A56DB] mb-4">
                <Zap className="size-3" /> Featured Research Asset
              </span>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-3">
                AI Adoption Report India 2026
              </h2>
              <p className="text-sm text-[#6B6860] leading-relaxed">
                Discover the state of workflow and conversational automation across clinics, startups, and service SMEs in India's top 10 metropolitan regions. Includes cost savings benchmarks and developer deployment speeds.
              </p>
            </div>
            <Link
              href="/resources/research/ai-adoption-report"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 text-sm font-semibold shadow-sm transition-all duration-200 shrink-0"
            >
              Explore Research Report <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
