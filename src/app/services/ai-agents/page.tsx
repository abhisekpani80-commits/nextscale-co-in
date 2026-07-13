import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { AGENTS, SERVICES, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES.find((s) => s.href === "/services/ai-agents")!;

export const metadata: Metadata = {
  title: "AI Agents — WhatsApp AI Receptionist & More",
  description: "24/7 WhatsApp AI that books, follows up, and collects reviews — trained on your clinic.",
};

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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">The five agents</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-[#0F0E0D]">One number. Five AI specialists.</h2>
          <p className="mt-4 max-w-2xl text-[#6B6860]">Each agent is trained on your specific business — your treatments, your pricing, your availability. They work together, seamlessly, in one WhatsApp conversation.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-[#E8E6E1] bg-white p-7 h-full shadow-sm hover:border-[#1A56DB]/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-[#1A56DB] border border-blue-100">
                    <a.icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#0F0E0D]">{a.name}</h3>
                </div>
                <p className="text-[#6B6860] text-sm leading-relaxed">{a.detail}</p>
                <div className="mt-auto pt-4 border-t border-[#E8E6E1]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#1A56DB] font-semibold">{a.startingPrice}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* WhatsApp mockup card */}
          <Reveal delay={0.4} className="md:col-span-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-[#D1FAE5] bg-[#ECFDF5] p-7 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,211,102,0.08),transparent_60%)]" />
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#059669] font-bold mb-4">Sample conversation</p>
              <div className="relative flex flex-col gap-3 max-w-md">
                {[
                  { side: "left", text: "Hi, I'd like to book an appointment for a skin consultation." },
                  { side: "right", text: "Hello! I'd be happy to help you book with Dr. Mishra. We have slots available on Thursday at 11 AM or Friday at 4 PM. Which works better for you?" },
                  { side: "left", text: "Thursday 11 AM please." },
                  { side: "right", text: "Perfect! Confirmed: Thursday, 10 July at 11:00 AM with Dr. Mishra. You'll receive a reminder 2 hours before. See you then! 🌿" },
                ].map((msg, i) => (
                  <div key={i} className={cn("max-w-[78%] rounded-2xl px-4 py-2.5 text-sm", msg.side === "right" ? "self-end bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0] font-medium" : "self-start bg-white text-[#1F2937] border border-[#E5E7EB]")}>
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-7 text-base font-semibold shadow-sm transition-all duration-200">
            <MessageCircle className="size-4" /> Start a 2-week free trial
          </a>
          <Link href="/pricing" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#E8E6E1] bg-white text-[#0F0E0D] hover:bg-[#F4F3F0] px-7 text-base font-semibold transition-all duration-200">
            View pricing <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
