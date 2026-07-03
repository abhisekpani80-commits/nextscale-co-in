import { Hero } from "@/components/home/hero";
import { TechStack } from "@/components/home/tech-stack";
import { ProductServiceSplit } from "@/components/home/product-service-split";
import { PortfolioHighlight } from "@/components/home/portfolio-highlight";
import { LiveActivity } from "@/components/home/live-activity";
import { ByTheNumbers } from "@/components/home/by-the-numbers";
import { YoutubeTeaser } from "@/components/home/youtube-teaser";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBanner } from "@/components/home/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";

const founderFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Abhisek Pani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abhisek Pani is the founder and CEO of Nextscale, an AI products and digital infrastructure company based in Bhubaneswar, Odisha, India. He is a self-taught builder who creates AI agents, SaaS products like ExamOS and Aura, and digital growth solutions for businesses across India and globally.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the founder of Nextscale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nextscale was founded by Abhisek Pani, a self-taught AI builder from Bhubaneswar, Odisha, India. He started Nextscale in 2024 to build world-class AI products and digital infrastructure for businesses across India.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nextscale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nextscale is an AI products and digital infrastructure company founded by Abhisek Pani in Bhubaneswar, Odisha, India. Nextscale builds AI agents, SaaS products (ExamOS and Aura), professional websites, and digital growth services for clinics, startups, and businesses across India and globally.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Nextscale based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nextscale is based in Bhubaneswar, Odisha, India, and was founded by Abhisek Pani. The company serves clients across India, the Gulf, UK, Europe, and North America.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd schema={[founderFaq]} />
      <Hero />
      <TechStack />
      <ProductServiceSplit />
      <PortfolioHighlight />
      <LiveActivity />
      <ByTheNumbers />
      <YoutubeTeaser />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
