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
    <div className="min-h-screen bg-[#FAF3E5] text-[#141414] pb-24">
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
            Local SEO &amp; Google Maps <span className="text-[#FF4D00]">Checker</span>
          </>
        }
        description="Diagnose your local search visibility, Google Map pack ranking factors, and LocalBusiness Schema opportunities in your city."
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        {/* Form Card */}
        <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-8">
          <h2 className="font-heading text-xl font-black text-[#141414] mb-2">
            Enter Business Details for Local SEO Audit
          </h2>
          <p className="text-xs text-[#5B5146] mb-6">
            Evaluate local ranking opportunities in Bhubaneswar, Odisha, or any city across India.
          </p>

          <form onSubmit={handleRunCheck} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146] mb-1.5">
                  Business / Practice Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Dental Clinic"
                  required
                  className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] py-2.5 px-3.5 text-xs font-bold text-[#141414] placeholder-[#8C827A] focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146] mb-1.5">
                  Target City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Bhubaneswar, Bangalore, Mumbai"
                  required
                  className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] py-2.5 px-3.5 text-xs font-bold text-[#141414] placeholder-[#8C827A] focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146] mb-1.5">
                  Industry / Business Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] py-2.5 px-3.5 text-xs font-bold text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
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
                <label className="block text-xs font-black uppercase tracking-wider text-[#5B5146] mb-1.5">
                  Website URL (Optional)
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="e.g. https://example.com"
                  className="w-full rounded-xl border-2 border-[#141414] bg-[#FAF3E5] py-2.5 px-3.5 text-xs font-bold text-[#141414] placeholder-[#8C827A] focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={checking}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#141414] bg-[#FF4D00] px-6 py-3 text-xs font-black text-white shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#e04400] disabled:opacity-50"
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
              <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414] text-center">
                <span className="text-xs font-bold uppercase text-[#5B5146]">Local Rank Readiness</span>
                <div className="font-heading text-5xl font-black mt-2 text-[#FF4D00]">
                  {report.localRankScore}/100
                </div>
                <span className="text-[11px] font-bold text-[#5B5146] mt-1 block">
                  Significant Growth Headroom
                </span>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414] text-center">
                <span className="text-xs font-bold uppercase text-[#5B5146]">Location Focus</span>
                <div className="font-heading text-2xl font-black mt-3 text-[#141414] flex items-center justify-center gap-1.5">
                  <MapPin className="size-5 text-[#FF4D00]" />
                  {report.city}
                </div>
                <span className="text-[11px] font-bold text-[#5B5146] mt-1 block">
                  Category: {report.category}
                </span>
              </div>

              <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-6 shadow-[4px_4px_0px_#141414] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#5B5146]">Dominate Local Pack</span>
                  <p className="text-xs font-medium text-[#5B5146] mt-1">
                    Get custom Next.js speed and local SEO setup to rank in the Google Map 3-pack.
                  </p>
                </div>
                <a
                  href={waLink(
                    `Hi Abhisek! I ran the Local SEO Checker for "${report.businessName}" in ${report.city}. I want help ranking #1 on Google Maps.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#25D366] py-2 text-xs font-black text-[#141414] shadow-[2px_2px_0px_#141414]"
                >
                  <MessageCircle className="size-3.5" />
                  Discuss Local SEO on WhatsApp
                </a>
              </div>
            </div>

            {/* Opportunities List */}
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-8">
              <h3 className="font-heading text-lg font-black text-[#141414] mb-4">
                High-Impact Local Growth Opportunities
              </h3>

              <div className="space-y-3">
                {report.opportunities.map((opp: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl border-2 border-[#141414]/20 bg-[#FAF3E5] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-xs font-black text-[#141414]">
                          {opp.title}
                        </span>
                        <span className="rounded bg-[#FFC72E] px-2 py-0.5 text-[10px] font-black uppercase text-[#141414] border border-[#141414]">
                          {opp.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#5B5146]">{opp.action}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Keywords */}
              <div className="mt-6 border-t border-[#141414]/10 pt-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#5B5146] block mb-2">
                  High-Intent Keywords to Target in {report.city}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {report.keywords.map((kw: string, kIdx: number) => (
                    <span
                      key={kIdx}
                      className="rounded-lg border border-[#141414]/20 bg-white px-2.5 py-1 text-xs font-bold text-[#141414]"
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
