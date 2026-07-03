import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal/legal-doc";
import { pageMeta } from "@/lib/seo";
import { REFUND } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: REFUND.title,
  description: REFUND.summary,
  path: "/legal/refund",
});

export default function RefundPage() {
  return <LegalDocView doc={REFUND} />;
}
