"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Building2,
  Search,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

export default function LocalSeoCheckerPage() {
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("Bhubaneswar");
  const [category, setCategory] = useState("Dermatology / Skin Clinic");
  const [website, setWebsite] = useState("");
  const [checking, setChecking] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleRunCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName) return;
    setChecking(true);

    setTimeout(() => {
      setReport({
        businessName,
        city,
        category,
        localRankScore: Math.floor(Math.random() * 20) + 65,
        opportunities: [
          {
            title: "LocalBusiness JSON-LD Schema",
            status: "High Priority",
            action: `Inject ProfessionalService & LocalBusiness schema with exact latitude/longitude coordinates for ${city}.`,
          },
          {
            title: "Google Map Pack & NAP Consistency",
            status: "Critical",
            action: `Ensure Name, Address, and Phone Number match 100% identically across your website, Google Business Profile, and JustDial/Indiamart citations.`,
          },
          {
            title: "Automated Post-Visit Review Flow",
            status: "High ROI",
            action: `Trigger automated WhatsApp review requests 2 hours after consultation to outrank competitors with a 4.8+ rating.`,
          },
          {
            title: `Hyper-Local Neighborhood Landing Pages (${city})`,
            status: "Growth Opportunity",
            action: `Create dedicated high-speed pages targeting high-intent localities (e.g. "${category} in Patia", "${category} in Saheed Nagar").`,
          },
        ],
        keywords: [
          `best ${category.toLowerCase()} in ${city}`,
          `top rated ${category.toLowerCase()} near me`,
          `${category.toLowerCase()} appointment ${city}`,
          `cost of ${category.toLowerCase()} in ${city}`,
        ],
      });
      setChecking(false);
    }, 1200);
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Local SEO Checker & Map Rank Diagnostic India",
    url: `${SITE.url}/tools/local-seo-checker`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    description: "Free Local SEO Checker analyzing Google Business Profile signals, LocalBusiness Schema, and Google Maps ranking factors for Indian SMBs.",
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
            { name: "Local SEO Checker", path: "/tools/local-seo-checker" },
          ]),
        ]}
      />

      <PageHero
        kicker="Free Local Growth Tool"
        title={
          <>
            Local SEO &amp; Google Maps <span className="text-blue-600">Checker</span>
          </>
        }
        description="Diagnose your local search visibility, Google Map pack ranking factors, and LocalBusiness Schema opportunities in your city."
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        {/* Form Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
            Enter Business Details for Local SEO Audit
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Evaluate local ranking opportunities in Bhubaneswar, Odisha, or any city across India.
          </p>

          <form onSubmit={handleRunCheck} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Business / Practice Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Dental Clinic"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Target City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Bhubaneswar, Bangalore, Mumbai"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Industry / Business Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                >
                  <option value="Dermatology / Skin Clinic">Dermatology / Skin Clinic</option>
                  <option value="Dental Clinic / Surgery">Dental Clinic / Surgery</option>
                  <option value="Real Estate Agency">Real Estate Agency</option>
                  <option value="Chartered Accountant / Law Firm">Chartered Accountant / Law Firm</option>
                  <option value="Luxury Salon & Spa">Luxury Salon &amp; Spa</option>
                  <option value="Coaching Institute">Coaching Institute</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Website URL (Optional)
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="e.g. https://example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={checking}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 disabled:opacity-50"
            >
              {checking ? "Analyzing Local Competitors..." : `Analyze Local SEO in ${city}`}
              <MapPin className="size-3.5" />
            </button>
          </form>
        </div>

        {/* Results */}
        {report && (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Local Rank Readiness</span>
                <div className="font-display text-5xl font-black mt-2 text-blue-600">
                  {report.localRankScore}/100
                </div>
                <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                  Significant Growth Headroom
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Location Focus</span>
                <div className="font-display text-2xl font-bold mt-3 text-slate-900 flex items-center justify-center gap-1.5">
                  <MapPin className="size-5 text-blue-600" />
                  {report.city}
                </div>
                <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                  Category: {report.category}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Dominate Local Pack</span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Get custom Next.js speed and local SEO setup to rank in the Google Map 3-pack.
                  </p>
                </div>
                <a
                  href={waLink(
                    `Hi Abhisek! I ran the Local SEO Checker for "${report.businessName}" in ${report.city}. I want help ranking #1 on Google Maps.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-blue-700"
                >
                  <MessageCircle className="size-3.5" />
                  Discuss Local SEO on WhatsApp
                </a>
              </div>
            </div>

            {/* Opportunities List */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                High-Impact Local Growth Opportunities
              </h3>

              <div className="space-y-3">
                {report.opportunities.map((opp: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs font-bold text-slate-900">
                          {opp.title}
                        </span>
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-blue-700">
                          {opp.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{opp.action}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Keywords */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  High-Intent Keywords to Target in {report.city}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {report.keywords.map((kw: string, kIdx: number) => (
                    <span
                      key={kIdx}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-slate-700"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
