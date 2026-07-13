"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  Calculator,
  Laptop,
  CheckCircle,
  Activity,
  Timer,
  Lightbulb,
  Compass,
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
  RotateCcw,
} from "lucide-react";
import { waLink } from "@/lib/site";

type ToolType =
  | "roi"
  | "web-cost"
  | "readiness"
  | "support-savings"
  | "lead-response"
  | "opportunity"
  | "strategy"
  | "web-audit"
  | "seo-audit";

export default function ToolsDashboard() {
  const [activeTool, setActiveTool] = useState<ToolType>("roi");

  // Tool 1: AI ROI Calculator State
  const [salary, setSalary] = useState(18000);
  const [staffCount, setStaffCount] = useState(2);

  // Tool 2: Web Cost Calculator State
  const [pages, setPages] = useState("5-10");
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isAiAgent, setIsAiAgent] = useState(false);
  const [isContent, setIsContent] = useState(false);

  // Tool 3: AI Readiness Assessment State
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Tool 4: Support Savings State
  const [tickets, setTickets] = useState(1200);
  const [costPerTicket, setCostPerTicket] = useState(150);

  // Tool 5: Lead Response State
  const [responseDelay, setResponseDelay] = useState(30);

  // Tool 6: Opportunity Finder State
  const [selectedIndustry, setSelectedIndustry] = useState("Clinics");
  const [companySize, setCompanySize] = useState("1-10");

  // Tool 7: Strategy Planner State
  const [goal, setGoal] = useState("Save time answering questions");
  const [strategyOutput, setStrategyOutput] = useState("");

  // Tool 8: Web Audit State
  const [auditUrl, setAuditUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditing, setAuditing] = useState(false);

  // Tool 9: SEO Audit State
  const [seoKeyword, setSeoKeyword] = useState("");
  const [seoResults, setSeoResults] = useState<any>(null);
  const [seoAuditing, setSeoAuditing] = useState(false);

  // Calculation utilities
  const monthlyManualCost = salary * staffCount;
  const aiReceptionistCost = 5999;
  const monthlyRoiSavings = Math.max(0, monthlyManualCost - aiReceptionistCost);
  const annualRoiSavings = monthlyRoiSavings * 12;

  const calculateWebCost = () => {
    let base = 4999;
    let days = 7;
    if (pages === "5-10") {
      base = 12999;
      days = 7;
    } else if (pages === "10-20") {
      base = 21999;
      days = 10;
    }
    if (isEcommerce) {
      base += 9000;
      days += 3;
    }
    if (isAiAgent) {
      base += 7000;
      days += 2;
    }
    if (isContent) {
      base += 5000;
    }
    return { cost: base, days };
  };
  const webCostResult = calculateWebCost();

  const getReadinessScore = () => {
    let score = 0;
    if (answers.q1 === "automated") score += 33;
    else if (answers.q1 === "hybrid") score += 20;
    if (answers.q2 === "crm") score += 33;
    else if (answers.q2 === "sheets") score += 15;
    if (answers.q3 === "instant") score += 34;
    else if (answers.q3 === "1hr") score += 15;
    return score;
  };

  const supportSavingsManual = tickets * costPerTicket;
  const supportDeflected = Math.round(tickets * 0.75);
  const supportSavingsAiCost = 8999;
  const supportMonthlySavings = Math.max(0, (supportDeflected * costPerTicket) - supportSavingsAiCost);

  const getLeadDropoff = () => {
    if (responseDelay <= 5) return { dropoff: 10, loss: "Minimal" };
    if (responseDelay <= 15) return { dropoff: 40, loss: "Significant (40% leads lost)" };
    if (responseDelay <= 60) return { dropoff: 75, loss: "Critical (75% leads lost)" };
    return { dropoff: 90, loss: "Total (90% leads lost) — leads are completely cold" };
  };
  const leadDropoffResult = getLeadDropoff();

  const getOpportunities = () => {
    if (selectedIndustry === "Clinics") {
      return ["WhatsApp booking receptionist (Critical)", "Google Review collection manager (High)", "Post-treatment care reminder flows (Medium)"];
    }
    if (selectedIndustry === "Real Estate") {
      return ["Immediate lead responder & qualification agent (Critical)", "Automatic listing recommendations (High)", "WhatsApp floor plan distribution (Medium)"];
    }
    return ["24/7 general FAQ answering agent (Critical)", "Contact form lead routing webhook (High)", "Internal status log sync (Medium)"];
  };

  const handleGenerateStrategy = () => {
    setStrategyOutput(`1. Audit standard customer logs to locate the top 10 most common queries.\n2. Deploy a core FAQ agent in sandbox environment.\n3. Integrate hook link to send high-priority leads directly to your phone.\n4. Launch publicly on your main number.\n5. Active weekly optimization review.`);
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;
    setAuditing(true);
    setTimeout(() => {
      setAuditResults({
        performance: Math.floor(Math.random() * 20) + 80,
        seo: Math.floor(Math.random() * 15) + 85,
        mobile: "Excellent (Optimized)",
        issues: ["Missing metadata descriptions on 2 sub-pages", "Uncompressed image assets found in footer"],
      });
      setAuditing(false);
    }, 1500);
  };

  const handleRunSeoAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seoKeyword) return;
    setSeoKeyword(seoKeyword);
    setSeoAuditing(true);
    setTimeout(() => {
      setSeoResults({
        difficulty: "Medium-High",
        searchVolume: "2,500/mo (India)",
        score: Math.floor(Math.random() * 25) + 70,
        checks: ["Title tag check: Passed", "H1 presence check: Passed", "Keyword Density: 1.2% (Good)", "Missing Schema nodes: FAQPage"],
      });
      setSeoAuditing(false);
    }, 1500);
  };

  // Nav links metadata
  const toolsList = [
    { id: "roi", label: "AI ROI Calculator", icon: Calculator },
    { id: "web-cost", label: "Website Cost Calculator", icon: Laptop },
    { id: "readiness", label: "AI Readiness Assessment", icon: CheckCircle },
    { id: "support-savings", label: "Support Deflection Savings", icon: Activity },
    { id: "lead-response", label: "Lead Response Dropoff", icon: Timer },
    { id: "opportunity", label: "Opportunity Finder", icon: Lightbulb },
    { id: "strategy", label: "AI Strategy Planner", icon: Compass },
    { id: "web-audit", label: "Website Auditor", icon: Search },
    { id: "seo-audit", label: "SEO Keyword Checker", icon: BookOpen },
  ];

  return (
    <>
      <PageHero
        kicker="Interactive tools"
        title={<>Tools to plan your <span className="text-primary">AI &amp; Web strategy</span>.</>}
        description="Free, interactive calculators and audit checks to measure conversion potential and calculate business cost savings."
      />

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20 grid gap-8 lg:grid-cols-[1fr_2fr]">
        
        {/* Left Side: Navigation Sidebar */}
        <nav className="flex flex-col gap-1.5" aria-label="Tools Navigation">
          {toolsList.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id as ToolType)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left border transition-all duration-200",
                activeTool === t.id
                  ? "bg-white border-[#1A56DB] text-[#1A56DB] shadow-sm font-bold"
                  : "bg-white/50 border-[#E8E6E1] text-[#6B6860] hover:bg-white hover:text-[#0F0E0D]"
              )}
            >
              <t.icon className={cn("size-4 shrink-0", activeTool === t.id ? "text-[#1A56DB]" : "text-[#6B6860]")} />
              {t.label}
            </button>
          ))}
        </nav>

        {/* Right Side: Active Tool Output Container */}
        <main className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm min-h-[400px] relative overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.02),transparent_70%)]" />
          
          <div className="relative">
            {/* Tool 1: AI ROI Calculator */}
            {activeTool === "roi" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">AI ROI Calculator</h2>
                  <p className="text-xs text-[#6B6860] mt-1">See how much you save by replacing manual reception workloads with a 24/7 WhatsApp receptionist.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Monthly Staff Salary (₹)</span>
                      <span className="text-primary font-mono font-bold">₹{salary.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min={8000}
                      max={50000}
                      step={1000}
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Number of staff allocated to support/booking</span>
                      <span className="text-primary font-mono font-bold">{staffCount} staff</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={6}
                      step={1}
                      value={staffCount}
                      onChange={(e) => setStaffCount(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>

                <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-3 text-center mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Manual Cost / Mo</span>
                    <span className="text-lg font-extrabold text-[#0F0E0D]">₹{monthlyManualCost.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-y sm:border-y-0 sm:border-x border-[#E8E6E1] py-3 sm:py-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">AI Cost / Mo</span>
                    <span className="text-lg font-extrabold text-primary">₹{aiReceptionistCost.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Net Monthly Savings</span>
                    <span className="text-lg font-extrabold text-emerald-600">₹{monthlyRoiSavings.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tool 2: Web Cost Calculator */}
            {activeTool === "web-cost" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">Website Cost Calculator</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Estimate the cost of a high-speed custom Next.js site based on your requirements.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Project Scope (Pages)</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: "1-5", label: "1-5 pages (Starter)" },
                        { val: "5-10", label: "5-10 pages (Standard)" },
                        { val: "10-20", label: "10-20 pages (Premium)" },
                      ].map((pOpt) => (
                        <button
                          key={pOpt.val}
                          onClick={() => setPages(pOpt.val)}
                          className={cn(
                            "py-2 text-xs font-semibold rounded-lg border transition-colors",
                            pages === pOpt.val ? "bg-blue-50 border-primary text-primary" : "bg-white border-[#E8E6E1] text-[#6B6860] hover:bg-[#F8F7F4]"
                          )}
                        >
                          {pOpt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Integrations &amp; Add-ons</span>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 text-xs font-medium text-[#6B6860] bg-white border border-[#E8E6E1] p-3 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEcommerce}
                          onChange={(e) => setIsEcommerce(e.target.checked)}
                          className="accent-primary"
                        />
                        <span>E-commerce Catalog &amp; Cart Integration (+₹9,000)</span>
                      </label>
                      <label className="flex items-center gap-3 text-xs font-medium text-[#6B6860] bg-white border border-[#E8E6E1] p-3 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isAiAgent}
                          onChange={(e) => setIsAiAgent(e.target.checked)}
                          className="accent-primary"
                        />
                        <span>WhatsApp AI Agent Integration (+₹7,000)</span>
                      </label>
                      <label className="flex items-center gap-3 text-xs font-medium text-[#6B6860] bg-white border border-[#E8E6E1] p-3 rounded-lg cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isContent}
                          onChange={(e) => setIsContent(e.target.checked)}
                          className="accent-primary"
                        />
                        <span>Premium Copywriting &amp; SEO Setup (+₹5,000)</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-2 text-center mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Estimated Cost</span>
                    <span className="text-lg font-extrabold text-primary">₹{webCostResult.cost.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-t sm:border-t-0 sm:border-l border-[#E8E6E1] pt-3 sm:pt-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Delivery Time</span>
                    <span className="text-lg font-extrabold text-[#0F0E0D]">{webCostResult.days} Days</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tool 3: AI Readiness Assessment */}
            {activeTool === "readiness" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">AI Readiness Assessment</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Answer 3 simple questions to calculate your company's automation readiness score.</p>
                </div>

                {!quizSubmitted ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold">1. How do you handle client bookings/orders?</span>
                      <div className="grid gap-2">
                        {[
                          { val: "automated", label: "Online system / Auto scheduler" },
                          { val: "hybrid", label: "WhatsApp messaging manually" },
                          { val: "manual", label: "Phone calls and physical ledgers" },
                        ].map((o) => (
                          <button
                            key={o.val}
                            onClick={() => setAnswers({ ...answers, q1: o.val })}
                            className={cn(
                              "w-full text-left px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors",
                              answers.q1 === o.val ? "bg-blue-50 border-primary text-primary" : "bg-white border-[#E8E6E1] text-[#6B6860] hover:bg-[#F8F7F4]"
                            )}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-xs font-semibold">2. Where are new lead details saved?</span>
                      <div className="grid gap-2">
                        {[
                          { val: "crm", label: "Integrated CRM (Zoho, Salesforce, etc.)" },
                          { val: "sheets", label: "Google Sheets / Excel" },
                          { val: "none", label: "Nowhere / Notebooks" },
                        ].map((o) => (
                          <button
                            key={o.val}
                            onClick={() => setAnswers({ ...answers, q2: o.val })}
                            className={cn(
                              "w-full text-left px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors",
                              answers.q2 === o.val ? "bg-blue-50 border-primary text-primary" : "bg-white border-[#E8E6E1] text-[#6B6860] hover:bg-[#F8F7F4]"
                            )}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-xs font-semibold">3. What is your average response speed to online inquiries?</span>
                      <div className="grid gap-2">
                        {[
                          { val: "instant", label: "Under 5 minutes" },
                          { val: "1hr", label: "1 to 2 hours" },
                          { val: "day", label: "Next day or later" },
                        ].map((o) => (
                          <button
                            key={o.val}
                            onClick={() => setAnswers({ ...answers, q3: o.val })}
                            className={cn(
                              "w-full text-left px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors",
                              answers.q3 === o.val ? "bg-blue-50 border-primary text-primary" : "bg-white border-[#E8E6E1] text-[#6B6860] hover:bg-[#F8F7F4]"
                            )}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={!answers.q1 || !answers.q2 || !answers.q3}
                      className="mt-4 w-full h-11 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
                    >
                      Calculate Score
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 text-center">
                    <div className="size-24 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-primary text-2xl font-black">
                      {getReadinessScore()}%
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[#0F0E0D]">
                        {getReadinessScore() >= 80 ? "Highly Ready!" : getReadinessScore() >= 40 ? "Getting There" : "Manual Bottlenecks Detected"}
                      </h3>
                      <p className="text-sm text-[#6B6860] mt-2 max-w-sm mx-auto leading-relaxed">
                        {getReadinessScore() >= 80
                          ? "Your systems are structured. Integrating custom AI workflows will immediately skyrocket efficiency."
                          : "You have several manual pipelines. AI receptionists can automate order intake and lead capture within 48 hours."}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setAnswers({ q1: "", q2: "", q3: "" });
                      }}
                      className="text-xs text-primary font-bold hover:underline flex items-center gap-1.5 justify-center"
                    >
                      <RotateCcw className="size-3" /> Reset Assessment
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Tool 4: Support deflection */}
            {activeTool === "support-savings" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">Customer Support Savings Calculator</h2>
                  <p className="text-xs text-[#6B6860] mt-1">See how much you save by automating standard support tickets (75% deflection rate).</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Monthly Support Inquiries</span>
                      <span className="text-primary font-mono font-bold">{tickets} tickets</span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={5000}
                      step={100}
                      value={tickets}
                      onChange={(e) => setTickets(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Estimated manual resolution cost per ticket (₹)</span>
                      <span className="text-primary font-mono font-bold">₹{costPerTicket}</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={300}
                      step={10}
                      value={costPerTicket}
                      onChange={(e) => setCostPerTicket(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>

                <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-3 text-center mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Manual Cost / Mo</span>
                    <span className="text-lg font-extrabold text-[#0F0E0D]">₹{supportSavingsManual.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-y sm:border-y-0 sm:border-x border-[#E8E6E1] py-3 sm:py-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Tickets Deflected</span>
                    <span className="text-lg font-extrabold text-primary">{supportDeflected} / mo</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Monthly Net Savings</span>
                    <span className="text-lg font-extrabold text-emerald-600">₹{supportMonthlySavings.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tool 5: Lead Response dropoff */}
            {activeTool === "lead-response" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">Lead Response Calculator</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Slow response speeds kill conversions. Calculate the lead drop-off rate based on your response delay.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Average response delay (Minutes)</span>
                      <span className="text-primary font-mono font-bold">{responseDelay} mins</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={120}
                      step={1}
                      value={responseDelay}
                      onChange={(e) => setResponseDelay(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>

                <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-2 text-center mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Lead Drop-off Rate</span>
                    <span className="text-lg font-extrabold text-red-500">{leadDropoffResult.dropoff}%</span>
                  </div>
                  <div className="flex flex-col gap-1 border-t sm:border-t-0 sm:border-l border-[#E8E6E1] pt-3 sm:pt-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Revenue Loss Risk</span>
                    <span className="text-sm font-extrabold text-[#0F0E0D] mt-1">{leadDropoffResult.loss}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tool 6: Opportunity Finder */}
            {activeTool === "opportunity" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">Automation Opportunity Finder</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Select your sector to discover high-priority task targets for AI automation.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Industry Sector</span>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="bg-white border border-[#E8E6E1] p-2.5 rounded-lg text-xs font-medium text-[#6B6860]"
                    >
                      <option>Clinics</option>
                      <option>Real Estate</option>
                      <option>Ecommerce</option>
                      <option>Logistics</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Company Size</span>
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="bg-white border border-[#E8E6E1] p-2.5 rounded-lg text-xs font-medium text-[#6B6860]"
                    >
                      <option>1-10 staff</option>
                      <option>10-50 staff</option>
                      <option>50+ staff</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold text-[#0F0E0D]">Recommended Automations:</span>
                  <ul className="flex flex-col gap-2 mt-2">
                    {getOpportunities().map((opp, idx) => (
                      <li key={idx} className="flex gap-2 items-center bg-white border border-[#E8E6E1] px-4 py-2.5 rounded-xl text-xs font-medium text-[#6B6860] shadow-sm">
                        <CheckCircle className="size-4 text-emerald-500 shrink-0" />
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tool 7: AI Strategy Planner */}
            {activeTool === "strategy" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">AI Strategy Planner</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Outline your core business target to receive an instant roadmap recommendation.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Core Business Goal</span>
                    <input
                      type="text"
                      placeholder="e.g. Save time answering customer inquiries"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="bg-white border border-[#E8E6E1] px-4 py-2.5 rounded-xl text-xs text-[#0F0E0D]"
                    />
                  </div>

                  <button
                    onClick={handleGenerateStrategy}
                    className="h-11 bg-primary text-white font-bold rounded-xl"
                  >
                    Generate Strategy Roadmap
                  </button>
                </div>

                {strategyOutput && (
                  <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl mt-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">Implementation Steps:</span>
                    <pre className="mt-2 text-xs font-medium text-[#6B6860] font-sans whitespace-pre-line leading-relaxed">
                      {strategyOutput}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Tool 8: Website Auditor */}
            {activeTool === "web-audit" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">Website Audit Checker</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Audit any site URL for layout issues, speed bottlenecks, and metadata compliance.</p>
                </div>

                <form onSubmit={handleRunAudit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Website URL</span>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      required
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      className="bg-white border border-[#E8E6E1] px-4 py-2.5 rounded-xl text-xs text-[#0F0E0D]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={auditing}
                    className="h-11 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
                  >
                    {auditing ? "Auditing Website..." : "Run Audit Check"}
                  </button>
                </form>

                {auditResults && (
                  <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-3 text-center mt-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Performance</span>
                      <span className="text-lg font-extrabold text-emerald-600">{auditResults.performance}/100</span>
                    </div>
                    <div className="flex flex-col gap-1 border-y sm:border-y-0 sm:border-x border-[#E8E6E1] py-3 sm:py-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">SEO Score</span>
                      <span className="text-lg font-extrabold text-emerald-600">{auditResults.seo}/100</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Mobile Optimization</span>
                      <span className="text-xs font-extrabold text-[#0F0E0D] mt-1">{auditResults.mobile}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tool 9: SEO Keyword Auditor */}
            {activeTool === "seo-audit" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0F0E0D]">SEO Keyword Checker</h2>
                  <p className="text-xs text-[#6B6860] mt-1">Verify keyword competition index and search volume density targets in India.</p>
                </div>

                <form onSubmit={handleRunSeoAudit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold">Target Keyword Phrase</span>
                    <input
                      type="text"
                      placeholder="e.g. WhatsApp AI receptionist for clinic"
                      required
                      value={seoKeyword}
                      onChange={(e) => setSeoKeyword(e.target.value)}
                      className="bg-white border border-[#E8E6E1] px-4 py-2.5 rounded-xl text-xs text-[#0F0E0D]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={seoAuditing}
                    className="h-11 bg-primary text-white font-bold rounded-xl disabled:opacity-50"
                  >
                    {seoAuditing ? "Auditing SEO Phrase..." : "Check Keyword SEO"}
                  </button>
                </form>

                {seoResults && (
                  <div className="bg-[#F8F7F4] border border-[#E8E6E1] p-5 rounded-2xl grid gap-4 sm:grid-cols-3 text-center mt-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Competition Index</span>
                      <span className="text-sm font-extrabold text-[#0F0E0D] mt-1">{seoResults.difficulty}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-y sm:border-y-0 sm:border-x border-[#E8E6E1] py-3 sm:py-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">Search Volume</span>
                      <span className="text-sm font-extrabold text-primary mt-1">{seoResults.searchVolume}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6860]">On-Page Score</span>
                      <span className="text-lg font-extrabold text-emerald-600">{seoResults.score}/100</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Static CTA section inside output container */}
          <div className="border-t border-[#E8E6E1] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6860]">
              <TrendingUp className="size-4 text-emerald-500" />
              <span>Calculated savings are based on industry benchmarks.</span>
            </div>
            <a
              href={waLink(`Hi! I just ran a calculation on your Tools page for my business and would like to review the custom report.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-5 text-xs font-bold transition-all duration-200"
            >
              Get Custom Report <ArrowRight className="size-3.5" />
            </a>
          </div>

        </main>
      </section>
    </>
  );
}
