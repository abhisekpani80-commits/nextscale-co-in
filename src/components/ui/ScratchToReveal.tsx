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

  // Initialize canvas scratch mask
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // High-energy brand foil pattern
    ctx.fillStyle = "#FFC72E";
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Diagonal multi-color stripe patterns
    const stripeWidth = 60;
    const colors = ["#FF4D00", "#141414", "#9DD9FF", "#FFB7C5", "#FFC72E"];
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

    // Dark obsidian center badge box
    const boxW = Math.min(rect.width * 0.85, 480);
    const boxH = Math.min(rect.height * 0.6, 160);
    const boxX = (rect.width - boxW) / 2;
    const boxY = (rect.height - boxH) / 2;

    ctx.fillStyle = "#141414";
    ctx.fillRect(boxX, boxY, boxW, boxH);

    ctx.strokeStyle = "#FF4D00";
    ctx.lineWidth = 4;
    ctx.strokeRect(boxX + 6, boxY + 6, boxW - 12, boxH - 12);

    // Instruction text overlay
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "900 13px Archivo, sans-serif";
    ctx.fillStyle = "#FFC72E";
    ctx.fillText("★ TOP SECRET SAUCE ★", rect.width / 2, boxY + boxH * 0.28);

    ctx.font = "900 28px Archivo, sans-serif";
    ctx.fillStyle = "#FAF3E5";
    ctx.fillText("SCRATCH TO REVEAL ✦", rect.width / 2, boxY + boxH * 0.54);

    ctx.font = "700 12px Archivo, sans-serif";
    ctx.fillStyle = "#B8E986";
    ctx.fillText("Drag mouse or finger across to unveil our services", rect.width / 2, boxY + boxH * 0.8);

  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isDone) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const totalSampledPixels = pixels.length / 16;
    const currentPercent = Math.round((transparentPixels / totalSampledPixels) * 100);

    setPercentage(currentPercent);

    if (currentPercent >= minScratchPercentage && !isDone) {
      setIsDone(true);
      if (onReveal) onReveal();
    }
  }, [isDone, minScratchPercentage, onReveal]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isDone) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x * dpr, y * dpr, 45 * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    checkScratchPercentage();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    setIsScratching(false);
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
            className="pointer-events-none mb-3 flex items-center justify-between rounded-xl border-2 border-[#141414] bg-[#FFC72E] px-4 py-2 shadow-[3px_3px_0_#141414]"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 animate-bounce text-[#FF4D00]" />
              <span className="font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                🎉 100% Unlocked! Full Menu Revealed
              </span>
            </div>
            <span className="rounded-full border border-[#141414] bg-[#141414] px-2.5 py-0.5 font-display text-[0.6rem] font-black uppercase text-[#FAF3E5]">
              Secret Sauced
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
              className="absolute inset-0 size-full cursor-crosshair touch-none select-none rounded-2xl shadow-[4px_4px_0_#141414] sm:shadow-[6px_6px_0_#141414]"
            />

            {/* Instant Reveal Floating Pill */}
            <div className="pointer-events-auto absolute bottom-3 z-30 flex flex-wrap items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-3.5 py-1.5 shadow-[3px_3px_0_#141414] sm:bottom-4 sm:gap-3 sm:px-4 sm:py-2">
              <span className="font-display text-[0.62rem] font-black uppercase text-[#5B5146] sm:text-[0.68rem]">
                {percentage}% Scratched
              </span>
              <button
                type="button"
                onClick={handleInstantReveal}
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-3 py-1 font-display text-[0.62rem] font-black uppercase text-white transition hover:bg-[#FFC72E] hover:text-[#141414] sm:text-[0.65rem]"
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

