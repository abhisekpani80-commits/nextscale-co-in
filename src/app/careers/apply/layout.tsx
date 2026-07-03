import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Apply",
  description:
    "Apply to join Buildora — remote, flexible roles in sales, web development, content, and AI agent building. Every role pays from day one.",
  path: "/careers/apply",
  keywords: ["Buildora careers", "remote jobs India", "AI builder jobs"],
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
