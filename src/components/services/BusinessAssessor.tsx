"use client";

import { useState } from "react";
import {
  HelpCircle,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Stethoscope,
  Home,
  GraduationCap,
  ShoppingBag,
  Code2,
  Building2,
  Briefcase,
  UserCheck,
  Video,
  Layers,
  ChevronRight,
  Compass,
  Target,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/site";
import { INDUSTRY_PACKAGES, type IndustryPackage } from "@/lib/servicesData";

const INDUSTRIES = [
  { id: "healthcare", label: "Healthcare & Clinics", icon: Stethoscope, pkgId: "pkg-healthcare" },
  { id: "realestate", label: "Real Estate & Housing", icon: Home, pkgId: "pkg-real-estate" },
  { id: "education", label: "Education & Coaching", icon: GraduationCap, pkgId: "pkg-education" },
  { id: "ecommerce", label: "E-Commerce & D2C", icon: ShoppingBag, pkgId: "pkg-ecommerce" },
  { id: "saas", label: "SaaS & Tech Startups", icon: Code2, pkgId: "pkg-saas" },
  { id: "local", label: "Local & SMB Businesses", icon: Building2, pkgId: "pkg-local-smb" },
  { id: "legal", label: "Legal & CA Services", icon: Briefcase, pkgId: "pkg-legal-finance" },
  { id: "hr", label: "HR & Recruitment", icon: UserCheck, pkgId: "pkg-hr-recruitment" },
  { id: "creators", label: "Creators & Media", icon: Video, pkgId: "pkg-creators" },
  { id: "agencies", label: "Agencies & Partners", icon: Layers, pkgId: "pkg-agencies" },
];

const GOALS = [
  {
    id: "leads",
    label: "Get More High-Quality Leads & Inquiries",
    highlightText: "Lead Generation & Conversion Funnel",
    focusDeliverable: "High-Converting Lead Capture & Automated Inquiry Response",
  },
  {
    id: "time",
    label: "Save Staff Time & Automate Manual Operations",
    highlightText: "Workflow & Operations Automation",
    focusDeliverable: "Zero-Touch CRM Integration & Automated Task Sequences",
  },
  {
    id: "website",
    label: "Build a High-Converting Modern Website / Portal",
    highlightText: "Custom Web & Mobile Platform",
    focusDeliverable: "Custom Next.js Web App with Core Web Vitals Optimization",
  },
  {
    id: "support",
    label: "24/7 Customer Support & WhatsApp Booking",
    highlightText: "Autonomous Customer Support System",
    focusDeliverable: "24/7 WhatsApp AI Receptionist & Appointment Booking Engine",
  },
  {
    id: "all",
    label: "Complete End-to-End Digital Overhaul",
    highlightText: "Full Digital Growth Suite",
    focusDeliverable: "Complete Turnkey Suite (Website + Automation + Growth + AI)",
  },
];

export function BusinessAssessor() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("healthcare");
  const [selectedGoal, setSelectedGoal] = useState<string>("leads");

  // Find matching package & goal
  const activeIndustry = INDUSTRIES.find((i) => i.id === selectedIndustry);
  const activeGoal = GOALS.find((g) => g.id === selectedGoal) || GOALS[0];
  
  const matchedPackage: IndustryPackage | undefined = INDUSTRY_PACKAGES.find(
    (p) => p.id === activeIndustry?.pkgId
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#E8E6E1] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] p-6 shadow-sm sm:p-10 lg:p-12">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-[#1A56DB]">
            <Compass className="size-3.5" />
            Interactive Business Navigator
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-[#0F0E0D] sm:text-3xl lg:text-4xl">
            Not sure what to pick for your business?
          </h2>
          <p className="mt-3 text-base text-[#6B6860] sm:text-lg">
            Select your industry and primary goal below. Our recommendation engine will match your exact tailored solution in real-time.
          </p>
        </div>

        {/* Wizard Form */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Step 1 & 2 Selectors */}
          <div className="space-y-6 lg:col-span-7">
            {/* Step 1: Select Industry */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6860]">
                Step 1 · Select Your Industry
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  const isSelected = selectedIndustry === ind.id;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-xl border p-3 text-left transition-colors duration-150",
                        isSelected
                          ? "border-[#1A56DB] bg-[#1A56DB] text-white shadow-xs"
                          : "border-[#E8E6E1] bg-white text-[#0F0E0D] hover:border-blue-200"
                      )}
                    >
                      <Icon className={cn("size-4 shrink-0", isSelected ? "text-white" : "text-[#1A56DB]")} />
                      <span className="text-xs font-semibold leading-snug">{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Goal */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6860]">
                Step 2 · Select Your Primary Goal
              </label>
              <div className="mt-3 space-y-2">
                {GOALS.map((goal) => {
                  const isSelected = selectedGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setSelectedGoal(goal.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-xs font-medium transition-colors duration-150 sm:text-sm",
                        isSelected
                          ? "border-[#1A56DB] bg-blue-50/80 font-bold text-[#1A56DB]"
                          : "border-[#E8E6E1] bg-white text-[#0F0E0D] hover:border-blue-200"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <Target className={cn("size-4 shrink-0", isSelected ? "text-[#1A56DB]" : "text-[#6B6860]")} />
                        <span>{goal.label}</span>
                      </div>
                      <ChevronRight
                        className={cn("size-4 transition-transform", isSelected ? "rotate-90 text-[#1A56DB]" : "text-[#6B6860]")}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recommended Result Card & Consultation CTA */}
          <div className="lg:col-span-5">
            {matchedPackage ? (
              <div className="flex h-full flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#1A56DB]">
                      {activeGoal.highlightText}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-[#0F0E0D]">
                    {matchedPackage.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B6860]">
                    {matchedPackage.tagline}
                  </p>

                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/30 p-3 text-xs text-[#0F0E0D]">
                    <span className="font-bold text-[#1A56DB]">Goal Priority Focus: </span>
                    <span>{activeGoal.focusDeliverable}</span>
                  </div>

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B6860]">
                      Tailored Deliverables:
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {matchedPackage.deliverables.slice(0, 4).map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-[#0F0E0D]">
                          <CheckCircle2 className="size-3.5 shrink-0 text-[#1A56DB] mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 border-t border-gray-100 pt-5">
                  <a
                    href="/pricing"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full h-11 justify-center gap-2 text-sm font-semibold shadow-xs"
                    )}
                  >
                    <ArrowRight className="size-4" />
                    View Pricing for This Solution
                  </a>

                  <a
                    href={waLink(`Hi! Based on my goal (${activeGoal.label}) for my ${activeIndustry?.label} business, I'd like to discuss the ${matchedPackage.title}. Can we talk?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full h-10 justify-center gap-2 text-xs border-[#E8E6E1] text-[#0F0E0D] hover:bg-gray-50"
                    )}
                  >
                    <PhoneCall className="size-3.5 text-[#1A56DB]" />
                    Talk to Us on WhatsApp
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-500/5 p-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3 text-xs text-[#0F0E0D]">
            <Sparkles className="size-5 shrink-0 text-[#1A56DB]" />
            <span>
              <strong>Still unsure?</strong> No pressure, no pitch decks. We scope your exact project live on a 15-minute call and give you transparent recommendations.
            </span>
          </div>
          <a
            href={waLink("Hi! I'd like to book a call to discuss custom requirements for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-heading text-xs font-bold text-[#1A56DB] hover:underline"
          >
            Talk directly with our founder →
          </a>
        </div>
      </div>
    </section>
  );
}
