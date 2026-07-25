'use client';

import { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export function ClickSparkOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable click sparks on mobile / coarse pointers for performance
    if (window.matchMedia("(max-width: 768px) or (pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let loopRunning = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        const duration = 480;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = progress * (2 - progress); // ease-out

        const sparkRadius = 18;
        const extraScale = 1.2;
        const sparkSize = 6;

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = '#1A56DB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationId = requestAnimationFrame(draw);
      } else {
        loopRunning = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const now = performance.now();
      const sparkCount = 8;
      const x = e.clientX;
      const y = e.clientY;

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
      }));

      sparksRef.current.push(...newSparks);

      if (!loopRunning) {
        loopRunning = true;
        startTimeRef.current = null;
        animationId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleGlobalClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999]"
      aria-hidden="true"
    />
  );
}

export function ClickSparkProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ClickSparkOverlay />
    </>
  );
}
