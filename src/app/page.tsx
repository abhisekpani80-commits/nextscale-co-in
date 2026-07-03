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

export default function Home() {
  return (
    <>
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
