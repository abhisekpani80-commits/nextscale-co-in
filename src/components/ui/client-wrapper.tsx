"use client";

import { CustomCursor } from "@/components/ui/custom-cursor";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
