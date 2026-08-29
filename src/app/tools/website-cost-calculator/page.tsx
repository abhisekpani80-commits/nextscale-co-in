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
    <div className="min-h-screen bg-[#FAF3E5] text-[#141414] pb-24">
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
            Website Cost <span className="text-[#FF4D00]">Calculator India</span>
          </>
        }
        description="Estimate real development cost, sprint delivery timeline, and feature breakdown for your custom Next.js website. 100% source code ownership, zero agency markup."
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Controls */}
          <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="rounded-full bg-[#FFC72E] p-2 border border-[#141414]">
                <Laptop className="size-4.5 text-[#141414]" />
              </span>
              <h2 className="font-heading text-xl font-black text-[#141414]">
                Select Your Project Requirements
              </h2>
            </div>

            {/* Page Count */}
            <div className="mb-6">
              <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146] mb-2">
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
                    className={`rounded-xl border-2 p-3 text-left transition-all ${
                      pages === item.id
                        ? "border-[#141414] bg-[#FFC72E] shadow-[2px_2px_0px_#141414]"
                        : "border-[#141414]/20 bg-[#FAF3E5] hover:border-[#141414]"
                    }`}
                  >
                    <span className="block font-heading text-xs font-black text-[#141414]">
                      {item.label}
                    </span>
                    <span className="block text-[10px] text-[#5B5146]">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Addon Features */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146]">
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
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all ${
                    addon.state
                      ? "border-[#141414] bg-[#FAF3E5] shadow-[2px_2px_0px_#141414]"
                      : "border-[#141414]/20 bg-white hover:border-[#141414]/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded border-2 ${
                      addon.state
                        ? "border-[#141414] bg-[#FF4D00] text-white"
                        : "border-[#141414]/30 bg-transparent"
                    }`}
                  >
                    {addon.state && <Check className="size-3 stroke-[3]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs font-black text-[#141414]">
                        {addon.label}
                      </span>
                      <span className="font-mono text-xs font-black text-[#FF4D00]">
                        {addon.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#5B5146]">{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                Estimated Project Scope
              </span>

              <div className="mt-4">
                <span className="text-xs font-bold text-[#5B5146]">Estimated Investment</span>
                <div className="font-heading text-4xl font-black text-[#141414] sm:text-5xl">
                  ₹{cost.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-[#5B5146] mt-1">One-time fee • 100% Source Code Ownership</p>
              </div>

              <div className="mt-6 divide-y divide-[#141414]/10 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-4 text-xs font-bold">
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#5B5146]">Delivery Velocity:</span>
                  <span className="text-[#141414] font-black flex items-center gap-1">
                    <Clock className="size-3.5 text-[#FF4D00]" />
                    {days} Business Days
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#5B5146]">Tech Stack:</span>
                  <span className="text-[#141414]">Next.js 16 • React 19 • Tailwind</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#5B5146]">Hosting &amp; Domain:</span>
                  <span className="text-[#0F6838]">Cloudflare Edge + SSL Included</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#5B5146]">Ongoing Lock-in:</span>
                  <span className="text-[#0F6838]">₹0 / month (Zero Hostage Fees)</span>
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
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#141414] bg-[#25D366] py-3.5 text-xs font-black text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#1ebd5a]"
              >
                <MessageCircle className="size-4" />
                Claim This Scope on WhatsApp
              </a>

              <p className="mt-3 text-center text-[11px] text-[#5B5146]">
                Talk directly with founder Abhisek Pani • No sales reps
              </p>
            </div>

            {/* Related Research Link */}
            <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
              <h3 className="font-heading text-xs font-black uppercase tracking-wider text-[#141414] mb-1">
                Read the 2026 Market Pricing Report
              </h3>
              <p className="text-xs text-[#5B5146] mb-3">
                See how traditional Indian agencies overcharge for slow WordPress sites vs Next.js standards.
              </p>
              <Link
                href="/resources/research/india-website-pricing-report-2026"
                className="inline-flex items-center gap-1 text-xs font-black text-[#FF4D00] hover:underline"
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
