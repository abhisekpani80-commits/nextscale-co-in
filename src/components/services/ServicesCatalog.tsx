"use client";

import { useState, useMemo } from "react";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Bot,
  Layers,
  Zap,
  Globe,
  Mic,
  PenTool,
  TrendingUp,
  BarChart3,
  MapPin,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Stethoscope,
  Home,
  GraduationCap,
  ShoppingBag,
  Code2,
  Building2,
  Briefcase,
  UserCheck,
  Video,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import {
  SERVICE_CATEGORIES,
  INDUSTRY_PACKAGES,
  ALL_SERVICES,
  AI_AGENT_CATEGORIES,
  type ServiceItem,
  type IndustryPackage,
} from "@/lib/servicesData";
import { BusinessAssessor } from "./BusinessAssessor";

export function ServicesCatalog() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("pkg-healthcare");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "web-dev": true,
    "process-automation": false,
    "voice-audio": false,
    "content-copy": false,
    "marketing-growth": false,
    "data-research": false,
    "india-localization": false,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activePackage = useMemo(() => {
    return INDUSTRY_PACKAGES.find((p) => p.id === selectedPackageId) || INDUSTRY_PACKAGES[0];
  }, [selectedPackageId]);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const expandAllCategories = () => {
    const allExpanded: Record<string, boolean> = {};
    SERVICE_CATEGORIES.forEach((c) => {
      allExpanded[c.id] = true;
    });
    setExpandedCategories(allExpanded);
  };

  // Group filtered services by category
  const servicesByCategory = useMemo(() => {
    const map: Record<string, ServiceItem[]> = {};
    SERVICE_CATEGORIES.forEach((cat) => {
      map[cat.id] = ALL_SERVICES.filter((s) => {
        if (s.category !== cat.id) return false;
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.deliverables.some((d) => d.toLowerCase().includes(q))
        );
      });
    });
    return map;
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="space-y-16">
      {/* Top Controls: Search Bar & Currency Toggle */}
      <div className="sticky top-20 z-30 flex flex-col gap-4 rounded-2xl border border-[#E8E6E1] bg-white p-4 shadow-sm backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#6B6860]" />
          <input
            type="text"
            placeholder="Search across all 100+ services & packages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[#E8E6E1] bg-[#F8F7F4] py-2.5 pl-10 pr-10 text-sm text-[#0F0E0D] placeholder-[#6B6860] outline-none focus:border-[#1A56DB] focus:bg-white focus:ring-1 focus:ring-[#1A56DB]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6B6860] hover:text-[#0F0E0D]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* SECTION 1: TURNKEY INDUSTRY PACKAGES SHOWCASE */}
      {!isSearching && (
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-gray-200 pb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A56DB]">
                Turnkey Industry Suites
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold text-[#0F0E0D] sm:text-3xl">
                Done-For-You Industry Packages
              </h2>
            </div>
            <p className="max-w-md text-xs text-[#6B6860]">
              Select your industry to explore full-suite packages combining website, process automation, content copywriting & local growth.
            </p>
          </div>

          {/* Industry Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {INDUSTRY_PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              const isSelected = selectedPackageId === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={cn(
                    "shrink-0 flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold",
                    isSelected
                      ? "bg-[#1A56DB] text-white"
                      : "border border-[#E8E6E1] bg-white text-[#6B6860] hover:text-[#1A56DB]"
                  )}
                >
                  <Icon className={cn("size-4", isSelected ? "text-white" : "text-[#1A56DB]")} />
                  <span>{pkg.industry}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Active Package Showcase (Static Container, No Canvas/Physics) */}
          {activePackage && (
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-xs sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#1A56DB]">
                      {activePackage.industry}
                    </span>
                    {activePackage.isFeatured && (
                      <span className="rounded-full bg-purple-100 px-3 py-1 font-mono text-xs font-bold text-purple-700">
                        Top Ticket Package
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#0F0E0D] sm:text-3xl">
                    {activePackage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B6860]">
                    {activePackage.tagline}
                  </p>

                  <div className="rounded-xl border border-gray-200/80 bg-[#F8F7F4] p-3.5 text-xs text-[#0F0E0D]">
                    <span className="font-bold text-[#1A56DB]">Built for: </span>
                    {activePackage.targetAudience}
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6860]">
                      Full Suite Deliverables:
                    </p>
                    <ul className="grid gap-2.5 text-xs font-medium text-[#0F0E0D] sm:grid-cols-2">
                      {activePackage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-[#1A56DB] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA Panel */}
                <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-[#F8F7F4]/50 p-6 shadow-xs lg:col-span-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6860]">
                      Ready to get started?
                    </span>
                    <h4 className="mt-2 font-heading text-xl font-bold text-[#0F0E0D]">
                      Get a custom quote for your business
                    </h4>
                    <p className="mt-2 text-xs text-[#6B6860]">
                      Done-for-you implementation with transparent pricing. See our pricing plans or talk to us directly.
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <a
                      href="/pricing"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full h-11 justify-center gap-2 text-sm font-bold shadow-xs"
                      )}
                    >
                      <ArrowRight className="size-4" />
                      View Pricing Plans
                    </a>

                    <a
                      href={waLink(
                        `Hi NextScale! I'm interested in the ${activePackage.title} package. Can we discuss our project?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full h-10 justify-center gap-2 text-xs text-[#0F0E0D]"
                      )}
                    >
                      <PhoneCall className="size-3.5 text-[#1A56DB]" />
                      Talk to Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* SECTION 2: CATEGORIZED EXPANDABLE SERVICE MODULES (Static, Clean Layout) */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-gray-200 pb-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A56DB]">
              Capability Catalog (100+ Services)
            </span>
            <h2 className="mt-1 font-heading text-2xl font-bold text-[#0F0E0D] sm:text-3xl">
              Done-For-You Expert Agency Capabilities
            </h2>
          </div>
          {!isSearching && (
            <button
              type="button"
              onClick={expandAllCategories}
              className="self-start sm:self-auto text-xs font-bold text-[#1A56DB] hover:underline"
            >
              Expand All Categories ↓
            </button>
          )}
        </div>

        <div className="space-y-4">
          {SERVICE_CATEGORIES.filter((c) => c.id !== "industry-packages" && c.id !== "ai-agents").map((cat, idx) => {
            const Icon = cat.icon;
            const isExpanded = isSearching || expandedCategories[cat.id];
            const items = servicesByCategory[cat.id] || [];

            if (items.length === 0) return null;

            return (
              <div
                key={cat.id}
                className="overflow-hidden rounded-2xl border border-[#E8E6E1] bg-white shadow-2xs"
              >
                {/* Category Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="flex w-full items-center justify-between p-5 text-left bg-white"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-[#1A56DB]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1A56DB]">
                          0{idx + 1}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-[#0F0E0D]">
                          {cat.name}
                        </h3>
                      </div>
                      <p className="mt-0.5 text-xs text-[#6B6860] line-clamp-1">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block rounded-full bg-gray-100 px-3 py-1 font-mono text-xs font-bold text-[#0F0E0D]">
                      {items.length} Capabilities
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="size-5 text-[#6B6860]" />
                    ) : (
                      <ChevronDown className="size-5 text-[#6B6860]" />
                    )}
                  </div>
                </button>

                {/* Expanded Capabilities Grid (Clean Static Cards) */}
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-[#F8F7F4]/40 p-5">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((service) => {
                        return (
                          <div
                            key={service.id}
                            className="flex flex-col justify-between rounded-xl border border-[#E8E6E1] bg-white p-5 shadow-2xs"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-heading text-sm font-bold text-[#0F0E0D]">
                                  {service.title}
                                </h4>
                                {service.badge && (
                                  <span className="shrink-0 rounded-md bg-blue-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#1A56DB]">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <p className="mt-1.5 text-xs text-[#6B6860] leading-relaxed">
                                {service.description}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {service.deliverables.map((d) => (
                                  <span
                                    key={d}
                                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-[#6B6860] border border-gray-100"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                              <a
                                href={waLink(
                                  `Hi! I'd like to get details on "${service.title}".`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-[#6B6860] hover:text-[#1A56DB] hover:underline"
                              >
                                Inquire →
                              </a>
                              <a
                                href="/pricing"
                                className="text-xs font-bold text-[#1A56DB] hover:underline"
                              >
                                View Pricing →
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: 24/7 AUTONOMOUS AI AGENTS */}
      {!isSearching && (
        <section className="space-y-6 rounded-3xl border border-purple-200 bg-white p-6 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-purple-200/60 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-purple-700">
                <Bot className="size-4" /> 24/7 Autonomous AI Agents
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#0F0E0D] sm:text-3xl">
                Software Agents That Perform Multi-Step Actions
              </h2>
            </div>
            <p className="max-w-md text-xs text-[#6B6860]">
              Custom software entities connected to your WhatsApp, CRM & Email executing multi-step business workflows 24/7.
            </p>
          </div>

          <div className="space-y-6">
            {AI_AGENT_CATEGORIES.map((catGroup) => (
              <div key={catGroup.categoryName} className="space-y-3">
                <h3 className="font-heading text-base font-bold text-[#0F0E0D]">
                  {catGroup.categoryName}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catGroup.agents.map((agent) => {
                    return (
                      <div
                        key={agent.name}
                        className="flex flex-col justify-between rounded-xl border border-purple-100 bg-white p-5 shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="rounded-md bg-purple-50 px-2 py-0.5 font-mono text-[10px] font-bold text-purple-700">
                              24/7 Autonomous
                            </span>
                          </div>

                          <h4 className="mt-3 font-heading text-base font-bold text-[#0F0E0D]">
                            {agent.name}
                          </h4>
                          <p className="mt-1 text-xs font-semibold text-[#1A56DB]">
                            {agent.description}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-[#6B6860]">
                            {agent.actionDetail}
                          </p>
                        </div>

                        <a
                          href="/pricing#recurring"
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "mt-4 h-9 w-full justify-center text-xs font-semibold border-purple-200 text-purple-800 hover:bg-purple-50"
                          )}
                        >
                          View Agent Pricing →
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: INTERACTIVE BUSINESS ASSESSOR */}
      {!isSearching && <BusinessAssessor />}
    </div>
  );
}
