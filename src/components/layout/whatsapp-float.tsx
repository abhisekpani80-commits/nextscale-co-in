"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float-btn"
    >
      <MessageCircle className="size-7 text-white" strokeWidth={2} />
    </a>
  );
}
