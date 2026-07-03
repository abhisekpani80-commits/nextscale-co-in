"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DotField = dynamic(() => import("@/components/DotField"), { ssr: false });
const ClickSparkProvider = dynamic(
  () => import("@/components/ui/click-spark-provider").then((m) => m.ClickSparkProvider),
  { ssr: false }
);

interface ClientWrapperProps {
  children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ClickSparkProvider>
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-35">
        <DotField
          dotRadius={1.2}
          dotSpacing={16}
          bulgeStrength={55}
          glowRadius={180}
          sparkle={true}
          waveAmplitude={1.5}
        />
      </div>
      {children}
    </ClickSparkProvider>
  );
}
