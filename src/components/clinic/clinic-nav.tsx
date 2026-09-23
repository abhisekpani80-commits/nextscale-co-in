"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Diagnosis", href: "#diagnosis" },
  { label: "Proof", href: "#proof" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const WA_DIAGNOSIS_URL =
  "https://wa.me/919556436685?text=Hi%20NextScale!%20I%20would%20like%20to%20book%20a%20Revenue%20Architecture%20Diagnosis%20for%20my%20business.";

export function ClinicNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      id="topNav"
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0e]/85 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-clinic">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            aria-label="NextScale Home"
          >
            <BrandLogo size="sm" showTag={true} />
          </Link>

          {/* Desktop Navigation Links with subtle hover underline reveal */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-[0.92rem] font-semibold text-[#8e8e9c] hover:text-white transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ec4899] to-[#f97316] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton
                href={WA_DIAGNOSIS_URL}
                text="Book a Diagnosis"
                variant="primary"
                className="text-xs md:text-sm py-2.5 px-6 font-bold !h-auto"
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg text-white hover:bg-white/5 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-[#111116] border-b border-white/[0.08] px-6 py-8 flex flex-col gap-5 shadow-2xl transition-all duration-300 ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-white/90 hover:text-white transition-colors py-1"
          >
            {link.label}
          </a>
        ))}
        <a
          href={WA_DIAGNOSIS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="btn-clinic btn-gradient mt-3 w-full justify-center"
        >
          Book a Diagnosis on WhatsApp
        </a>
      </div>
    </header>
  );
}
