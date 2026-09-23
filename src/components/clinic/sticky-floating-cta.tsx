"use client";

import { useEffect, useState } from "react";
import { RollingButton } from "@/components/ui/RollingButton";

const WA_DIAGNOSIS_URL =
  "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Architecture%20Diagnosis.";

export function StickyFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const bottom = heroEl.getBoundingClientRect().bottom;
        setVisible(bottom < 0);
      } else {
        setVisible(window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 sm:right-8 z-40 transition-all duration-400 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <RollingButton
        href={WA_DIAGNOSIS_URL}
        text="Book Diagnosis"
        variant="primary"
        className="text-xs sm:text-sm font-extrabold py-3 px-5 shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
      />
    </div>
  );
}
