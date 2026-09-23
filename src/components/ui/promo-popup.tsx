"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  Sparkles,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { waLink } from "@/lib/site";

const STORAGE_KEY = "nextscale_promo_popup_dismissed";
const POPUP_DELAY_MS = 10000; // 10 seconds after opening website

const OFFER_PERKS = [
  "High-Performance Next.js Custom Website",
  "100% Mobile-First & Ultra-Fast Loading",
  "Direct WhatsApp Chat & Lead Form Integration",
  "Google Search & Local Business SEO Setup",
  "Delivered & Live in Just 3–5 Days",
];

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user already dismissed or interacted with it in this session
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage error
    }
    setIsOpen(false);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const offerWhatsAppUrl = waLink(
    "Hi Next Scale! I would like to claim the limited ₹3,999 website starter offer. Please share the details."
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop overlay */}
          <motion.div
            key="promo-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            key="promo-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-heading"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close offer popup"
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
            >
              <X className="size-4" />
            </button>

            {/* Header Badge */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                <Sparkles className="size-3.5 fill-current" />
                Special Starter Deal
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-700">
                <Clock className="size-3" />
                Limited Slots
              </span>
            </div>

            {/* Main Offer Headline */}
            <h3
              id="promo-heading"
              className="font-display text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl"
            >
              Get started with a custom website at just{" "}
              <span className="text-blue-600">
                ₹3,999
              </span>
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Supercharge your brand with a lightning-fast, high-converting website built specifically for your business.
            </p>

            {/* Pricing Box / Value Banner */}
            <div className="my-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    One-time Investment
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-3xl font-black tracking-tight text-slate-900">
                      ₹3,999
                    </span>
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      ₹19,999
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-800">
                      SAVE 80%
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <ShieldCheck className="size-3.5" />
                    100% Code Handover
                  </span>
                  <p className="font-mono text-[11px] text-slate-400">Zero lock-in fees</p>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mb-6 space-y-2.5">
              {OFFER_PERKS.map((perk, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="size-4 shrink-0 text-blue-600" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href={offerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="size-4" />
                Claim ₹3,999 Deal on WhatsApp
              </a>

              <Link
                href="/contact"
                onClick={handleClose}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600 cursor-pointer"
              >
                <span>Contact Form</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Footer Microcopy */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-mono">
                <Zap className="size-3 text-blue-600" />
                Live in 3–5 Business Days
              </span>
              <button
                onClick={handleClose}
                className="text-slate-400 underline hover:text-slate-700 cursor-pointer"
              >
                No thanks, I&apos;ll check later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
