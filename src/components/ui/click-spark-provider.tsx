'use client';
import ClickSpark from '@/components/ClickSpark';
import { useEffect, useState } from 'react';

export function ClickSparkProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px) or (pointer: coarse)").matches);
  }, []);

  if (isMobile) return <>{children}</>;

  return (
    <ClickSpark
      sparkColor="#27d0ed"
      sparkSize={6}
      sparkRadius={18}
      sparkCount={8}
      duration={480}
      easing="ease-out"
      extraScale={1.2}
      className="flex flex-col flex-1"
    >
      {children}
    </ClickSpark>
  );
}
