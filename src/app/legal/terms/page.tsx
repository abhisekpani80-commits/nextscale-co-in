import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal/legal-doc";
import { pageMeta } from "@/lib/seo";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: TERMS.title,
  description: TERMS.summary,
  path: "/legal/terms",
});

export default function TermsPage() {
  return <LegalDocView doc={TERMS} />;
}
