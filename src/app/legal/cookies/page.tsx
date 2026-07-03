import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal/legal-doc";
import { pageMeta } from "@/lib/seo";
import { COOKIES } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: COOKIES.title,
  description: COOKIES.summary,
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return <LegalDocView doc={COOKIES} />;
}
