"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { waLink } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function B2BCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#0F0E0D", padding: "96px 0" }}>
      <div
        className="mx-auto max-w-[640px] px-6"
        style={{ textAlign: "center" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Let&apos;s build something your customers actually find.
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            Tell us what you need. We&apos;ll reply with a scope and price in under 2 hours.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                background: "#FFFFFF",
                color: "#0F0E0D",
                borderRadius: 6,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.92"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Start on WhatsApp →
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                background: "transparent",
                color: "#FFFFFF",
                borderRadius: 6,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
                transition: "border-color 200ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
            >
              Contact form
            </Link>
          </div>

          {/* Fine print */}
          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
            }}
          >
            No contracts. No retainers unless you want them. Start with one project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
