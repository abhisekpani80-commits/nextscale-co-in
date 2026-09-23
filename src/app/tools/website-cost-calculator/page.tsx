"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Check,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Zap,
  RotateCcw,
  Sparkles,
  Info,
  Clock,
  Layers,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

export default function WebsiteCostCalculatorPage() {
  const [pages, setPages] = useState("5-10");
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isAiAgent, setIsAiAgent] = useState(false);
  const [isContent, setIsContent] = useState(false);
  const [isCustomFunnels, setIsCustomFunnels] = useState(false);

  const calculateCost = () => {
    let base = 19999;
    let days = 5;

    if (pages === "1-3") {
      base = 19999;
      days = 5;
    } else if (pages === "5-10") {
      base = 39999;
      days = 7;
    } else if (pages === "10-20") {
      base = 79999;
      days = 10;
    } else if (pages === "20+") {
      base = 129999;
      days = 14;
    }

    if (isEcommerce) {
      base += 24999;
      days += 3;
    }
    if (isAiAgent) {
      base += 19999;
      days += 2;
    }
    if (isContent) {
      base += 9999;
    }
    if (isCustomFunnels) {
      base += 14999;
      days += 2;
    }

    return { cost: base, days };
  };

  const { cost, days } = calculateCost();

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Website Cost Calculator India 2026",
    url: `${SITE.url}/tools/website-cost-calculator`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    description: "Free interactive website cost calculator to estimate custom web development and Next.js delivery pricing in India.",
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: SITE.founder,
      url: `${SITE.url}/about/abhisek-pani`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-900 pb-24">
      <JsonLd
        schema={[
          toolSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "Website Cost Calculator", path: "/tools/website-cost-calculator" },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        kicker="Free Interactive Tool"
        title={
          <>
            Website Cost <span className="text-blue-600">Calculator India</span>
          </>
        }
        description="Estimate real development cost, sprint delivery timeline, and feature breakdown for your custom Next.js website. 100% source code ownership, zero agency markup."
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Controls */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="rounded-xl bg-blue-50 p-2.5 border border-blue-100 text-blue-600">
                <Laptop className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Select Your Project Requirements
              </h2>
            </div>

            {/* Page Count */}
            <div className="mb-6">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Number of Pages / Views
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  { id: "1-3", label: "1–3 Pages", sub: "Landing Page" },
                  { id: "5-10", label: "5–10 Pages", sub: "Standard Business" },
                  { id: "10-20", label: "10–20 Pages", sub: "Growth Platform" },
                  { id: "20+", label: "20+ Pages", sub: "Custom Portal" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPages(item.id)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      pages === item.id
                        ? "border-blue-600 bg-blue-50/80 shadow-sm"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-display text-xs font-bold text-slate-900">
                      {item.label}
                    </span>
                    <span className="block text-[10px] text-slate-500">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Addon Features */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                Add-on Features &amp; Modules
              </label>

              {[
                {
                  state: isEcommerce,
                  setter: setIsEcommerce,
                  label: "E-Commerce / Online Product Catalog",
                  price: "+₹24,999",
                  desc: "Payment gateway integration (Razorpay/Stripe), product filters, cart checkout.",
                },
                {
                  state: isAiAgent,
                  setter: setIsAiAgent,
                  label: "24/7 WhatsApp AI Receptionist",
                  price: "+₹19,999",
                  desc: "Meta Cloud WhatsApp bot answering FAQs and booking appointments to Google Calendar.",
                },
                {
                  state: isContent,
                  setter: setIsContent,
                  label: "High-Conversion Copywriting & SEO Batch",
                  price: "+₹9,999",
                  desc: "Custom headlines, benefit bullets, and keyword research by professional copywriters.",
                },
                {
                  state: isCustomFunnels,
                  setter: setIsCustomFunnels,
                  label: "Dynamic Lead Capture Funnels & CRM Sync",
                  price: "+₹14,999",
                  desc: "Multi-step qualification forms with direct Zoho, HubSpot, or Google Sheets webhook sync.",
                },
              ].map((addon, idx) => (
                <div
                  key={idx}
                  onClick={() => addon.setter(!addon.state)}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                    addon.state
                      ? "border-blue-500 bg-blue-50/40 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded border transition-colors ${
                      addon.state
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {addon.state && <Check className="size-3 stroke-[3]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold text-slate-900">
                        {addon.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-600">
                        {addon.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                Estimated Project Scope
              </span>

              <div className="mt-4">
                <span className="text-xs font-medium text-slate-500">Estimated Investment</span>
                <div className="font-display text-4xl font-black text-slate-900 sm:text-5xl">
                  ₹{cost.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-slate-500 mt-1">One-time fee • 100% Source Code Ownership</p>
              </div>

              <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-xs font-medium">
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500">Delivery Velocity:</span>
                  <span className="text-slate-900 font-bold flex items-center gap-1">
                    <Clock className="size-3.5 text-blue-600" />
                    {days} Business Days
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500">Tech Stack:</span>
                  <span className="text-slate-900 font-medium">Next.js 16 • React 19 • Tailwind</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500">Hosting &amp; Domain:</span>
                  <span className="text-emerald-600 font-semibold">Cloudflare Edge + SSL Included</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500">Ongoing Lock-in:</span>
                  <span className="text-emerald-600 font-semibold">₹0 / month (Zero Hostage Fees)</span>
                </div>
              </div>

              <a
                href={waLink(
                  `Hi Abhisek! I calculated my website cost: ₹${cost.toLocaleString(
                    "en-IN"
                  )} (${pages} pages, ${days} days). I would like to get started.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" />
                Claim This Scope on WhatsApp
              </a>

              <p className="mt-3 text-center font-mono text-[11px] text-slate-400">
                Talk directly with founder Abhisek Pani • No sales reps
              </p>
            </div>

            {/* Related Research Link */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                Read the 2026 Market Pricing Report
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                See how traditional Indian agencies overcharge for slow WordPress sites vs Next.js standards.
              </p>
              <Link
                href="/resources/research/india-website-pricing-report-2026"
                className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:underline"
              >
                <span>Read India Website Pricing Report 2026</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
