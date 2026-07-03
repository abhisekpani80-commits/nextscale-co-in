"use client";

import { useEffect, useState } from "react";
import SplashCursor from "@/components/SplashCursor";

export function CustomCursor() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!fine) return null;

  return (
    <SplashCursor
      RAINBOW_MODE={false}
      COLOR="#27d0ed"
      SPLAT_RADIUS={0.18}
      SPLAT_FORCE={5000}
      DENSITY_DISSIPATION={3.2}
      VELOCITY_DISSIPATION={2.0}
      PRESSURE={0.1}
      PRESSURE_ITERATIONS={20}
      CURL={3}
      SHADING={true}
    />
  );
}
