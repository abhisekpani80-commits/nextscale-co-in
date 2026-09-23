"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Star, CheckCircle2, Quote } from "lucide-react";

import "./AccordionGallery.css";

export interface GalleryItem {
  image: string;
  label?: string;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  metric?: string;
  industry?: string;
  stars?: number;
  link?: string;
  alt?: string;
}

const DEFAULT_ITEMS: GalleryItem[] = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" },
];

export interface AccordionGalleryProps {
  items?: GalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: "horizontal" | "vertical";
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: "hover" | "click";
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 1,
  accentColor = "#2563EB",
  overlayColor = "#071229",
  textColor = "#FFFFFF",
  height = 500,
  gap = 12,
  radius = 20,
  expandRatio = 0.48,
  orientation = "horizontal",
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 6,
  stagger = 0.06,
  trigger = "hover",
  showLabels = true,
  grayscale = false,
  className = "",
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(340);

  const vertical = orientation === "vertical";
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const card = cardRefs.current[i];

        if (isMobile) {
          // On mobile, keep layout flat and adjust heights
          tl.to(panel, { flexGrow: isActive ? 3 : 1, duration: dur, ease }, 0);
        } else {
          const rot = isActive ? 0 : i < active ? tilt : -tilt;
          const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };
          tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);
        }

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical || isMobile ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              "--ag-gray": gray,
              "--ag-dim": isActive ? 0.05 : 0.45,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (card) {
          if (isActive) {
            tl.to(card, { opacity: 1, y: 0, duration: dur, ease, pointerEvents: "auto" }, 0);
          } else {
            tl.to(card, { opacity: 0, y: 10, duration: dur * 0.5, ease, pointerEvents: "none" }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [active, count, expandRatio, duration, ease, vertical, tilt, parallax, grayscale, prefersReduced]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(160, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.25);
      mediaSizeRef.current = size;
      el.style.setProperty("--ag-media-size", `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === "hover") setActive(i);
  };

  const handleClick = (i: number, e: React.MouseEvent) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? " accordion-gallery--vertical" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={
        {
          "--ag-accent": accentColor,
          "--ag-overlay": overlayColor,
          "--ag-text": textColor,
          "--ag-gap": `${gap}px`,
          "--ag-radius": `${radius}px`,
          height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
        } as React.CSSProperties
      }
      role="list"
      aria-label="Interactive customer reviews gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const isReview = Boolean(item.quote);

        return (
          <div
            key={i}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`ag-panel${isActive ? " ag-panel--active" : ""}`}
            style={{ borderRadius: `${radius}px` }}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={item.author || item.label || `Panel ${i + 1}`}
          >
            <span className="ag-panel__frame">
              <span
                className="ag-panel__media"
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.author || item.label || "Customer review"}
                  draggable="false"
                  loading="lazy"
                />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Review Rich Content Mode */}
            {isReview ? (
              <>
                {/* Active Panel Review Card */}
                <div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="ag-panel__review-card opacity-0"
                >
                  {/* Card Header: Industry Tag & 5 Star Rating */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/25 border border-blue-400/40 text-sky-200 text-xs font-semibold backdrop-blur-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
                      <span>{item.industry || "Verified Client"}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(item.stars || 5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Card Middle: Quote with quote mark */}
                  <div className="my-auto py-4">
                    <Quote className="w-8 h-8 text-blue-400/50 mb-2 rotate-180" />
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed tracking-tight">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Metric & Author details */}
                  <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">
                        {item.author}
                      </div>
                      <div className="text-xs text-slate-300">
                        {item.role}, <span className="text-white font-medium">{item.company}</span>
                      </div>
                    </div>

                    {item.metric && (
                      <div className="inline-flex items-center self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-mono font-bold text-xs shadow-md shadow-blue-500/20">
                        {item.metric}
                      </div>
                    )}
                  </div>
                </div>

                {/* Collapsed Panel Quick Indicator */}
                {!isActive && (
                  <div className="ag-panel__collapsed-indicator">
                    {item.metric && (
                      <span className="ag-panel__collapsed-badge">
                        {item.metric.split("•")[0]}
                      </span>
                    )}
                    <span className="text-[11px] font-bold text-white drop-shadow-md text-center line-clamp-1 px-1">
                      {item.author}
                    </span>
                  </div>
                )}
              </>
            ) : (
              /* Fallback to simple label mode */
              showLabels && (
                <span className="ag-panel__label" aria-hidden="true">
                  <span className="ag-panel__bar" />
                  <span className="ag-panel__text">{item.label}</span>
                </span>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
