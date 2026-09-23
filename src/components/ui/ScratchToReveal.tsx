"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RefreshCw, Eye } from "lucide-react";

interface ScratchToRevealProps {
  children: React.ReactNode;
  minScratchPercentage?: number;
  onReveal?: () => void;
  className?: string;
}

export function ScratchToReveal({
  children,
  minScratchPercentage = 35,
  onReveal,
  className = "",
}: ScratchToRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDone, setIsDone] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const lastCheckTimeRef = useRef<number>(0);
  const checkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize canvas scratch mask
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance on mobile

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // High-energy brand foil pattern
    ctx.fillStyle = "#2563EB";
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Diagonal multi-color stripe patterns
    const stripeWidth = 60;
    const colors = ["#2563EB", "#38BDF8", "#0B0F19", "#60A5FA", "#1D4ED8"];
    for (let i = -rect.height; i < rect.width + rect.height; i += stripeWidth) {
      ctx.fillStyle = colors[Math.floor(Math.abs(i / stripeWidth)) % colors.length];
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + stripeWidth * 0.7, 0);
      ctx.lineTo(i + stripeWidth * 0.7 - rect.height, rect.height);
      ctx.lineTo(i - rect.height, rect.height);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // Dark executive center badge box
    const boxW = Math.min(rect.width * 0.85, 480);
    const boxH = Math.min(rect.height * 0.6, 160);
    const boxX = (rect.width - boxW) / 2;
    const boxY = (rect.height - boxH) / 2;

    ctx.fillStyle = "#0B0F19";
    ctx.fillRect(boxX, boxY, boxW, boxH);

    ctx.strokeStyle = "#2563EB";
    ctx.lineWidth = 3;
    ctx.strokeRect(boxX + 6, boxY + 6, boxW - 12, boxH - 12);

    // Instruction text overlay
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "700 12px sans-serif";
    ctx.fillStyle = "#38BDF8";
    ctx.fillText("★ INTERACTIVE PREVIEW ★", rect.width / 2, boxY + boxH * 0.28);

    ctx.font = "800 24px sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("SCRATCH TO REVEAL ✦", rect.width / 2, boxY + boxH * 0.54);

    ctx.font = "500 12px sans-serif";
    ctx.fillStyle = "#93C5FD";
    ctx.fillText("Drag mouse or finger across to unveil our systems", rect.width / 2, boxY + boxH * 0.8);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => {
      window.removeEventListener("resize", initCanvas);
      if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    };
  }, [initCanvas]);

  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isDone) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      const step = 32; // Sample every 32 bytes for high-performance mobile calculation

      for (let i = 3; i < pixels.length; i += step) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const totalSampledPixels = Math.floor(pixels.length / step);
      const currentPercent = Math.min(100, Math.round((transparentPixels / totalSampledPixels) * 100));

      setPercentage(currentPercent);

      if (currentPercent >= minScratchPercentage && !isDone) {
        setIsDone(true);
        if (onReveal) onReveal();
      }
    } catch {
      // Ignore reading errors if canvas is cleared/reinitialized
    }
  }, [isDone, minScratchPercentage, onReveal]);

  const scratch = (clientX: number, clientY: number, isInitial = false) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isDone) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const radius = 42 * dpr;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = radius * 2;

    if (isInitial || !lastPosRef.current) {
      ctx.beginPath();
      ctx.arc(x * dpr, y * dpr, radius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(lastPosRef.current.x * dpr, lastPosRef.current.y * dpr);
      ctx.lineTo(x * dpr, y * dpr);
      ctx.stroke();

      // Ensure smooth endpoints
      ctx.beginPath();
      ctx.arc(x * dpr, y * dpr, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    lastPosRef.current = { x, y };

    // Throttle percentage calculation to avoid jank on mobile (max once per 100ms)
    const now = Date.now();
    if (now - lastCheckTimeRef.current > 100) {
      lastCheckTimeRef.current = now;
      checkScratchPercentage();
    } else if (!checkTimeoutRef.current) {
      checkTimeoutRef.current = setTimeout(() => {
        checkTimeoutRef.current = null;
        lastCheckTimeRef.current = Date.now();
        checkScratchPercentage();
      }, 120);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }
    setIsScratching(true);
    lastPosRef.current = null;
    scratch(e.clientX, e.clientY, true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isScratching) {
      setIsScratching(false);
      lastPosRef.current = null;
      checkScratchPercentage();
    }
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  const handleInstantReveal = () => {
    setIsDone(true);
    if (onReveal) onReveal();
  };

  return (
    <div ref={containerRef} className={`relative min-h-[280px] w-full overflow-hidden rounded-2xl ${className}`}>
      {/* Revealed Content underneath */}
      <div className="relative z-0 h-full w-full">{children}</div>

      {/* Celebration Flash Banner when Revealed */}
      <AnimatePresence>
        {isDone && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none mb-3 flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 animate-bounce text-blue-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-900">
                🎉 100% Unlocked! Full Menu Revealed
              </span>
            </div>
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase text-white shadow-sm">
              Revealed
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Canvas Scratch Overlay */}
      <AnimatePresence>
        {!isDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          >
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="absolute inset-0 size-full cursor-crosshair touch-none select-none rounded-2xl shadow-md"
            />

            {/* Instant Reveal Floating Pill */}
            <div className="pointer-events-auto absolute bottom-3 z-30 flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/95 backdrop-blur px-3.5 py-1.5 shadow-lg sm:bottom-4 sm:gap-3 sm:px-4 sm:py-2">
              <span className="font-mono text-[0.65rem] font-bold text-slate-500 sm:text-[0.68rem]">
                {percentage}% Scratched
              </span>
              <button
                type="button"
                onClick={handleInstantReveal}
                className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-blue-700"
              >
                <Eye className="size-3" /> Tap to Unlock
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-scratch option when revealed */}
      {isDone && (
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => {
              setIsDone(false);
              setPercentage(0);
              setTimeout(() => initCanvas(), 50);
            }}
            className="inline-flex items-center gap-1.5 font-display text-xs font-black uppercase text-[#5B5146] hover:text-[#FF4D00]"
          >
            <RefreshCw className="size-3.5" /> Re-cover & Scratch Again
          </button>
        </div>
      )}
    </div>
  );
}

