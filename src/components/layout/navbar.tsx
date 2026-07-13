"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceDropdown = [
  { label: "AI Agents", href: "/services/ai-agents", desc: "24/7 WhatsApp AI receptionist trained on your business rules." },
  { label: "Websites", href: "/services/websites", desc: "Custom Next.js websites, mobile-optimized, live in 7 days." },
  { label: "Digital Growth", href: "/services/digital-growth", desc: "Google Business optimization, local SEO, and review systems." },
];

const resourceDropdown = [
  { label: "Guides & SOPs", href: "/resources", desc: "Actionable playbooks, checklists, prompt templates and research." },
  { label: "Calculators & Tools", href: "/tools", desc: "Interactive ROI, web cost, and SEO audit checkers." },
  { label: "Tech Comparisons", href: "/compare", desc: "Balanced pros/cons comparing Next Scale vs traditional agencies." },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "resources" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || activeMenu ? "#FFFFFF" : "transparent",
          borderBottom: scrolled || activeMenu ? "1px solid #E8E6E1" : "1px solid transparent",
          backdropFilter: scrolled || activeMenu ? "blur(8px)" : "none",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-[18px] font-extrabold tracking-tight text-[#0F0E0D] hover:opacity-80 transition-opacity"
            aria-label="NextScale home"
          >
            NextScale
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Primary navigation">
            <Link
              href="/products"
              className="text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] transition-colors duration-200"
            >
              Products
            </Link>

            {/* Services Dropdown Parent */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] flex items-center gap-1 transition-colors duration-200 h-full",
                  activeMenu === "services" && "text-[#1A56DB]"
                )}
              >
                Services <ChevronDown className={cn("size-3.5 transition-transform duration-200", activeMenu === "services" && "rotate-180")} />
              </button>

              {/* Services Dropdown Panel */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border border-[#E8E6E1] p-4 rounded-2xl shadow-lg transition-all duration-200 flex flex-col gap-1 z-50",
                  activeMenu === "services" ? "opacity-100 translate-y-1 visible" : "opacity-0 translate-y-3 invisible pointer-events-none"
                )}
              >
                {serviceDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-[#F4F3F0] transition-colors"
                  >
                    <span className="text-[13px] font-bold text-[#0F0E0D]">{item.label}</span>
                    <span className="text-[11px] text-[#6B6860] mt-0.5 leading-relaxed">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] transition-colors duration-200"
            >
              Work
            </Link>

            <Link
              href="/pricing"
              className="text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] transition-colors duration-200"
            >
              Pricing
            </Link>

            {/* Resources Dropdown Parent */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu("resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] flex items-center gap-1 transition-colors duration-200 h-full",
                  activeMenu === "resources" && "text-[#1A56DB]"
                )}
              >
                Resources <ChevronDown className={cn("size-3.5 transition-transform duration-200", activeMenu === "resources" && "rotate-180")} />
              </button>

              {/* Resources Dropdown Panel */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border border-[#E8E6E1] p-4 rounded-2xl shadow-lg transition-all duration-200 flex flex-col gap-1 z-50",
                  activeMenu === "resources" ? "opacity-100 translate-y-1 visible" : "opacity-0 translate-y-3 invisible pointer-events-none"
                )}
              >
                {resourceDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-[#F4F3F0] transition-colors"
                  >
                    <span className="text-[13px] font-bold text-[#0F0E0D]">{item.label}</span>
                    <span className="text-[11px] text-[#6B6860] mt-0.5 leading-relaxed">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#1A56DB] px-5 py-[10px] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1447C0]"
            >
              WhatsApp us →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className="md:hidden overflow-y-auto transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? "85vh" : "0",
            background: "#FFFFFF",
            borderBottom: mobileOpen ? "1px solid #E8E6E1" : "none",
          }}
        >
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            <Link
              href="/products"
              className="py-2.5 text-[15px] font-bold text-[#0F0E0D] border-b border-[#F4F3F0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>

            {/* Mobile Services Header */}
            <div className="flex flex-col gap-1 py-2.5 border-b border-[#F4F3F0]">
              <span className="text-[12px] font-mono uppercase tracking-wider text-[#6B6860]">Services</span>
              {serviceDropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="pl-2 py-1.5 text-[14px] text-[#6B6860] hover:text-primary transition-colors flex flex-col"
                >
                  <span className="font-semibold text-[#0F0E0D]">{item.label}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="py-2.5 text-[15px] font-bold text-[#0F0E0D] border-b border-[#F4F3F0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Work
            </Link>

            <Link
              href="/pricing"
              className="py-2.5 text-[15px] font-bold text-[#0F0E0D] border-b border-[#F4F3F0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            {/* Mobile Resources Header */}
            <div className="flex flex-col gap-1 py-2.5 border-b border-[#F4F3F0]">
              <span className="text-[12px] font-mono uppercase tracking-wider text-[#6B6860]">Resources</span>
              {resourceDropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="pl-2 py-1.5 text-[14px] text-[#6B6860] hover:text-primary transition-colors flex flex-col"
                >
                  <span className="font-semibold text-[#0F0E0D]">{item.label}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              className="py-2.5 text-[15px] font-bold text-[#0F0E0D] border-b border-[#F4F3F0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#1A56DB] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#1447C0] transition-colors"
            >
              WhatsApp us →
            </a>
          </nav>
        </div>
      </header>
      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-16" />
    </>
  );
}
