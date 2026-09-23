import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { AGENTS, SERVICES, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema, pageMeta } from "@/lib/seo";

const service = SERVICES.find((s) => s.href === "/services/ai-agents")!;

export const metadata: Metadata = pageMeta({
  title: "AI Agents — WhatsApp AI Receptionist & More",
  description: "24/7 WhatsApp AI receptionists that book appointments, follow up on leads, and collect reviews. Custom trained on your business.",
  path: "/services/ai-agents",
  keywords: ["WhatsApp AI receptionist", "AI booking agent", "business automation WhatsApp", "AI auto reminder"]
});

export default function AIAgentsPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: service.href },
          ]),
          serviceSchema(service),
        ]}
      />
      <PageHero
        kicker="Service — AI Agents"
        title={<>Your clinic, open <span className="text-primary">24/7</span>.</>}
        description="A WhatsApp number that answers, books, reminds, reviews, and qualifies — without you touching your phone at midnight."
      >
        <a
          href={waLink("Hi! I'm interested in the AI WhatsApp agent for my clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "h-11 gap-2 px-6")}
        >
          <MessageCircle className="size-4" />
          See a live demo
        </a>
      </PageHero>

      {/* Agents */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">The five agents</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-slate-900">One number. Five AI specialists.</h2>
          <p className="mt-4 max-w-2xl text-slate-600">Each agent is trained on your specific business — your treatments, your pricing, your availability. They work together, seamlessly, in one WhatsApp conversation.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 h-full shadow-xs hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <a.icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{a.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{a.detail}</p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-blue-600 font-semibold">Included in plan</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* WhatsApp mockup card */}
          <Reveal delay={0.4} className="md:col-span-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/70 p-7 shadow-xs">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_60%)]" />
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-emerald-700 font-bold mb-4">Sample conversation</p>
              <div className="relative flex flex-col gap-3 max-w-md">
                {[
                  { side: "left", text: "Hi, I'd like to book an appointment for a skin consultation." },
                  { side: "right", text: "Hello! I'd be happy to help you book with Dr. Mishra. We have slots available on Thursday at 11 AM or Friday at 4 PM. Which works better for you?" },
                  { side: "left", text: "Thursday 11 AM please." },
                  { side: "right", text: "Perfect! Confirmed: Thursday, 10 July at 11:00 AM with Dr. Mishra. You'll receive a reminder 2 hours before. See you then! 🌿" },
                ].map((msg, i) => (
                  <div key={i} className={cn("max-w-[78%] rounded-2xl px-4 py-2.5 text-sm", msg.side === "right" ? "self-end bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium" : "self-start bg-white text-slate-800 border border-slate-200")}>
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust & E-E-A-T resource links */}
        <Reveal className="mt-16 border-t border-slate-200 pt-12">
          <div className="grid gap-6 sm:grid-cols-2 text-xs text-slate-600">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1">
                <Check className="size-4 text-blue-600" /> Delivery Methodology &amp; Security
              </h4>
              <p className="leading-relaxed">
                All AI agents go through a strict 72-hour sandbox validation process. Integration channels are secured via HSTS rules and token verification hooks to prevent data exposure. Learn more in our <Link href="/resources/guides/business-ai-playbook" className="text-blue-600 hover:underline font-semibold">AI Business Playbook</Link>.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1">
                <Check className="size-4 text-blue-600" /> Related Tools &amp; Case Studies
              </h4>
              <p className="leading-relaxed">
                Calculate your potential staff hour savings with the <Link href="/tools" className="text-blue-600 hover:underline font-semibold">AI ROI Calculator</Link>, or read our clinic execution case study for <Link href="/case-studies/lumiere-skin-clinic" className="text-blue-600 hover:underline font-semibold">Lumière Skin Clinic</Link>.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 px-7 text-base font-semibold shadow-sm transition-all duration-200">
            <MessageCircle className="size-4" /> Start a 2-week free trial
          </a>
          <Link href="/pricing#recurring" className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 px-7 text-base font-semibold transition-all duration-200">
            View AI Agent pricing <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
