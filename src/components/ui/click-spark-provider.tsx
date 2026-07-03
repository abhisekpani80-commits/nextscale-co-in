'use client';
import ClickSpark from '@/components/ClickSpark';

export function ClickSparkProvider({ children }: { children: React.ReactNode }) {
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
