"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "buildora-cookie-consent";

/**
 * Lightweight, animated cookie-consent banner. Stores the choice in
 * localStorage so it only appears once, and links to the Cookie Policy.
 * Slides up after a short delay so it doesn't fight the page entrance.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable — just dismiss */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-consent"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl sm:inset-x-auto sm:left-1/2 sm:w-[min(42rem,calc(100vw-2rem))] sm:-translate-x-1/2"
        >
          <div className="glow-card relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Cookie className="size-5" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We use cookies to keep the site working and to understand traffic. See our{" "}
                  <Link href="/legal/cookies" className="text-foreground underline decoration-primary/50 underline-offset-2 hover:decoration-primary">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2.5 sm:ml-auto">
                <button
                  onClick={() => decide("declined")}
                  className={cn(buttonVariants({ variant: "ghost" }), "h-9 px-4 text-sm")}
                >
                  Decline
                </button>
                <button
                  onClick={() => decide("accepted")}
                  className={cn(buttonVariants(), "h-9 px-5 text-sm")}
                >
                  Accept
                </button>
              </div>
            </div>
            <button
              onClick={() => decide("declined")}
              aria-label="Dismiss"
              className="absolute right-3 top-3 grid size-7 place-items-center rounded-md text-muted-foreground/60 transition-colors hover:bg-muted hover:text-foreground sm:hidden"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
