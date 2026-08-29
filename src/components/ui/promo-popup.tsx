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
            className="fixed inset-0 bg-[#141414]/75 backdrop-blur-sm"
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
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[8px_8px_0px_#141414] sm:p-8"
          >
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF4D00] via-[#FFC72E] to-[#FF4D00]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close offer popup"
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-lg border border-[#141414]/20 bg-[#FAF3E5] text-[#141414] transition-all hover:border-[#141414] hover:bg-[#FF4D00] hover:text-white cursor-pointer"
            >
              <X className="size-4.5" />
            </button>

            {/* Header Badge */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#141414] bg-[#FFC72E] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414]">
                <Sparkles className="size-3.5 fill-current" />
                Special Starter Deal
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#FF4D00]/20 bg-[#FF4D00]/10 px-2.5 py-0.5 text-xs font-bold text-[#FF4D00]">
                <Clock className="size-3" />
                Limited Slots
              </span>
            </div>

            {/* Main Offer Headline */}
            <h3
              id="promo-heading"
              className="text-2xl font-black leading-tight tracking-tight text-[#141414] sm:text-3xl"
            >
              Get started with a custom website at just{" "}
              <span className="relative inline-block text-[#FF4D00] underline decoration-[#FFC72E] decoration-wavy decoration-2 underline-offset-4">
                ₹3,999
              </span>
            </h3>

            <p className="mt-2 text-sm text-[#5B5146] sm:text-base">
              Supercharge your brand with a lightning-fast, high-converting website built specifically for your business.
            </p>

            {/* Pricing Box / Value Banner */}
            <div className="my-4 rounded-xl border border-[#141414]/20 bg-[#FAF3E5] p-3.5">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5B5146]">
                    One-time Investment
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black tracking-tight text-[#141414]">
                      ₹3,999
                    </span>
                    <span className="text-sm font-semibold text-[#8C827A] line-through">
                      ₹19,999
                    </span>
                    <span className="rounded bg-[#B8E986] px-1.5 py-0.5 text-[11px] font-black text-[#141414] border border-[#141414]">
                      SAVE 80%
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0F6838]">
                    <ShieldCheck className="size-3.5" />
                    100% Code Handover
                  </span>
                  <p className="text-[11px] text-[#786E64]">No monthly lock-in</p>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mb-6 space-y-2">
              {OFFER_PERKS.map((perk, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#141414]">
                  <CheckCircle2 className="size-4 shrink-0 text-[#FF4D00]" />
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
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#141414] bg-[#25D366] px-5 py-3 text-sm font-black text-[#141414] shadow-[4px_4px_0px_#141414] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#141414] cursor-pointer"
              >
                <MessageCircle className="size-4.5 fill-current" />
                Claim ₹3,999 Deal on WhatsApp
              </a>

              <Link
                href="/contact"
                onClick={handleClose}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-3 text-sm font-bold text-[#141414] shadow-[4px_4px_0px_#141414] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#141414] hover:bg-[#FFC72E] cursor-pointer"
              >
                <span>Contact Form</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Footer Microcopy */}
            <div className="mt-4 flex items-center justify-between border-t border-[#141414]/10 pt-3 text-[11px] text-[#786E64]">
              <span className="flex items-center gap-1">
                <Zap className="size-3 text-[#FF4D00]" />
                Live in 3–5 Business Days
              </span>
              <button
                onClick={handleClose}
                className="text-[#786E64] underline hover:text-[#141414] cursor-pointer"
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
