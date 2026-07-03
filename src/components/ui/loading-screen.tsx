"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Animate the percentage counter
    let frame: ReturnType<typeof setTimeout>;
    let current = 0;

    // Fast initial burst (0→70) then slows until page is ready
    const tick = () => {
      const target = 70;
      if (current < target) {
        current += Math.random() * 4 + 1;
        if (current > target) current = target;
        setProgress(Math.round(current));
        frame = setTimeout(tick, 30 + Math.random() * 40);
      }
    };
    tick();

    const finish = () => {
      clearTimeout(frame);
      // Rapidly complete from wherever we are → 100
      let p = current;
      const complete = setInterval(() => {
        p += Math.random() * 6 + 3;
        if (p >= 100) {
          p = 100;
          setProgress(100);
          clearInterval(complete);
          // Start fade-out 300ms after hitting 100%
          setTimeout(() => {
            setFading(true);
            // Remove from DOM after fade animation completes
            setTimeout(() => setVisible(false), 700);
          }, 300);
        } else {
          setProgress(Math.round(p));
        }
      }, 20);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      clearTimeout(frame);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#06080c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(39,208,237,0.07) 0%, rgba(167,139,250,0.05) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Center content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
        {/* Logo mark */}
        <div style={{ position: "relative" }}>
          {/* Spinning ring around logo */}
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            style={{
              position: "absolute",
              top: "-16px",
              left: "-16px",
              animation: "ns-spin 2s linear infinite",
            }}
          >
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="1"
              strokeDasharray="276"
              strokeDashoffset={276 - (276 * progress) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27d0ed" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#e040fb" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo SVG inline */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
          >
            <defs>
              <linearGradient id="ns-load-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27d0ed" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#e040fb" />
              </linearGradient>
            </defs>
            <path
              d="M7 26V6L20 21"
              stroke="url(#ns-load-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11L25 26V6"
              stroke="url(#ns-load-grad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            NEXTSCALE
          </span>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "Inter, sans-serif",
              textTransform: "uppercase",
            }}
          >
            We build AI that runs your business
          </span>
        </div>

        {/* Percentage */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            fontFamily: "Inter, sans-serif",
            background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 50%, #e040fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            minWidth: "100px",
            textAlign: "center",
          }}
        >
          {progress}%
        </div>

        {/* Thin progress bar */}
        <div
          style={{
            width: "220px",
            height: "2px",
            borderRadius: "99px",
            background: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              borderRadius: "99px",
              background: "linear-gradient(90deg, #27d0ed 0%, #a78bfa 50%, #e040fb 100%)",
              transition: "width 0.1s linear",
              boxShadow: "0 0 12px rgba(39,208,237,0.5)",
            }}
          />
        </div>
      </div>

      {/* Spin animation keyframes */}
      <style>{`
        @keyframes ns-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
