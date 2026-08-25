import type { Metadata } from "next";
import { B2BLanding } from "@/components/home/b2b-landing";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Next Scale — Custom Websites & WhatsApp AI Agents Live in 7 Days",
  description:
    "Next Scale engineers sub-second Next.js web applications, 24/7 WhatsApp AI receptionists, and local SEO growth engines for businesses worldwide. Live in 7 days.",
  path: "/",
  keywords: [
    "Next Scale",
    "Next Scale Technologies",
    "custom business website",
    "WhatsApp AI receptionist",
    "AI appointment booking",
    "Next.js web development agency",
    "AI agents for clinics",
    "real estate website development",
    "Abhisek Pani",
    "website live in 7 days",
  ],
});

const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a business website cost at Next Scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Next Scale, a custom high-performance business website starts at ₹19,999 ($249) for a 5-page starter site and goes up to ₹79,999 ($999) for a full enterprise digital suite with 24/7 WhatsApp AI agents and advanced SEO. All plans include 100% source code handover, edge hosting setup, and guaranteed 7-day delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What is a WhatsApp AI receptionist and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WhatsApp AI receptionist is an autonomous conversational agent connected to the official Meta Cloud WhatsApp API. It answers patient and client inquiries, qualifies budgets, syncs appointments with Google Calendar, and sends reminders 24/7 without manual staff intervention.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can Next Scale build and launch our system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next Scale delivers websites in 5–7 business days and deploys autonomous WhatsApp AI receptionists within 48–72 hours once business context and calendar availability are connected.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clinics, healthcare providers, and real estate agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Next Scale specializes in high-conversion web systems and AI receptionists for dermatology clinics, dental centers, physiotherapy practices, luxury real estate developers, and high-growth B2B startups.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Next Scale and where is the studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next Scale was founded in 2024 by software architect Abhisek Pani. Headquartered in Bhubaneswar, Odisha (India), the studio operates globally serving clients across India, UAE, UK, USA, and Europe.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd schema={[homeFaq]} />
      <B2BLanding />
    </>
  );
}
