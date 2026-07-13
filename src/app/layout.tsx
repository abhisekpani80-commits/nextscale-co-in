import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema, founderPersonSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { ClientWrapper } from "@/components/ui/client-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Custom Websites & AI Agents for Businesses`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Nextscale builds custom business websites (live in 7 days) and WhatsApp AI agents for clinics, salons, real estate, and SMBs.",
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  keywords: [
    "website for clinic",
    "WhatsApp AI receptionist",
    "custom business website",
    "AI appointment booking",
    "website design",
    "AI agents for small business",
    "website live in 7 days",
    "ExamOS exam prep",
    "Nextscale",
    "Abhisek Pani",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Websites & AI Agents that Grow Your Business`,
    description: "Custom websites, WhatsApp AI agents, and digital growth systems. Live in 3–7 days.",
    images: [
      {
        url: `${SITE.url}/og-image-v2.png`,
        width: 1024,
        height: 536,
        alt: "Nextscale — We build websites and AI systems that bring you customers",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Websites & AI Agents that Grow Your Business`,
    description: "Custom websites, WhatsApp AI agents, and digital growth systems. Live in 3–7 days.",
    creator: "@abhisekpani",
    images: [`${SITE.url}/og-image-v2.png`],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "48x48" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F7F4] text-[#0F0E0D] relative">
        <JsonLd schema={[organizationSchema(), websiteSchema(), founderPersonSchema()]} />
        <ScrollProgress />
        <ClientWrapper>
          <Navbar />
          <main className="flex-1">{children}</main>
        </ClientWrapper>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
