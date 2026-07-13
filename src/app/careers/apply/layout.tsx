import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Apply — Remote Jobs at Next Scale",
  description:
    "Apply to join Next Scale — remote, flexible roles in sales, web development, content, and AI agent building. Every role pays from day one.",
  path: "/careers/apply",
  keywords: ["remote jobs India", "AI builder jobs", "web developer jobs India", "Next Scale careers"],
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
