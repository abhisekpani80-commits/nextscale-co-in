"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, MessageSquare } from "lucide-react";
import { MagneticCtaButton } from "@/components/ui/magnetic-cta-button";

export function ResponsiveNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "How It Works", href: "#architecture" },
    { name: "Leak Calculator", href: "#diagnostic" },
    { name: "Client Stories", href: "#proof" },
    { name: "7-Day Sprint", href: "#sprint" },
    { name: "Founder Note", href: "/about/abhisek-pani" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
            : "py-4 bg-white/70 backdrop-blur-sm border-b border-slate-200/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-hidden rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="text-lg tracking-tight">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                  NextScale<span className="text-blue-600">.</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                  Revenue Architecture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 border border-slate-200 rounded-full px-4 py-1.5 shadow-2xs backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Availability Badge & Shimmering Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-[11px] font-medium text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>2 Sprint Slots Open</span>
              </div>

              <MagneticCtaButton
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Diagnosis%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                icon={null}
              >
                Book Diagnosis
              </MagneticCtaButton>
            </div>

            {/* Mobile Hamburger Button (44px target) */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors focus:outline-hidden cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop blur */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200 text-slate-900">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 text-white flex items-center justify-center font-extrabold text-sm">
                    N
                  </div>
                  <span className="font-bold text-slate-900">NextScale</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill in drawer */}
              <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-xl text-xs font-medium text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>2 Sprint Slots Available This Month</span>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Architecture%20Diagnosis%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 shadow-md shadow-blue-500/25 active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Founder (+91 95564)</span>
              </a>

              <p className="text-center text-[11px] text-slate-500">
                Guaranteed response in &lt; 15 minutes.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
