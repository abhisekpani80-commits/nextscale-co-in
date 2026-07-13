"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

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
      {children}
    </ClickSparkProvider>
  );
}
