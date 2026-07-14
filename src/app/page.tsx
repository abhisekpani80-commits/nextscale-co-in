import { B2BLanding } from "@/components/home/b2b-landing";
import { JsonLd } from "@/components/seo/json-ld";

const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a business website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Next Scale, a professional business website starts at ₹19,999 ($249) for a 5-page starter site and goes up to ₹79,999 ($999) for a full-featured site with AI chatbot and advanced SEO. All plans include domain, hosting, WhatsApp integration, and Google Maps. Websites are live in 7 days.",
      },
    },
    {
      "@type": "Question",
      name: "What is a WhatsApp AI receptionist and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WhatsApp AI receptionist is an AI agent trained on your business that answers customer queries, books appointments, sends reminders, and follows up — all via WhatsApp, 24/7 without any manual effort. Nextscale builds and deploys these for clinics, salons, real estate agents, and other businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you build and launch a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nextscale guarantees websites live in 7 days. AI agents go live within 48 hours. The process: Day 1 is a discovery call, Days 2-4 are design and development, Days 5-6 are your review and revisions, and Day 7 is launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build websites for clinics and doctors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Nextscale specializes in websites for dermatology clinics, dental clinics, physiotherapy centers, cosmetic therapists, and other healthcare professionals. We include Google Maps, WhatsApp booking, review widgets, and appointment forms as standard.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nextscale and who runs it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nextscale is an AI products and web development company founded by Abhisek Pani. We build custom business websites, WhatsApp AI agents, SaaS products (ExamOS, Aura), and digital growth services for businesses across India and globally. We have shipped 25+ websites and 12+ AI agents.",
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
