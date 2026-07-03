import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { ClickSparkProvider } from "@/components/ui/click-spark-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema, founderPersonSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import DotField from "@/components/DotField";
import { LoadingScreen } from "@/components/ui/loading-screen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — AI Products & Digital Infrastructure for Indian Businesses`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "We build AI products like ExamOS and Aura, plus AI agents, websites, and digital growth services for clinics and businesses across India.",
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: [
    "AI agents India",
    "WhatsApp AI receptionist",
    "AI for clinics",
    "business website India",
    "local SEO Odisha",
    "ExamOS",
    "Aura English coach",
    "AI automation small business",
    "digital growth India",
    "Abhisek Pani",
    "founder Nextscale",
    "Nextscale founder",
    "Abhisek Pani Odisha",
    "AI startup Bhubaneswar",
    "Nextscale Technologies",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.legalName,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — AI Products & Digital Infrastructure`,
    description: "AI agents, websites, and digital growth for Indian businesses. Built from Odisha by Abhisek Pani.",
    images: [
      {
        url: `${SITE.url}/og-image.png`,
        width: 1024,
        height: 536,
        alt: "Nextscale — We build AI that runs your business",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Products & Digital Infrastructure`,
    description: "AI agents, websites, and digital growth for Indian businesses. Built from Odisha by Abhisek Pani.",
    creator: "@abhisekpani",
    images: [`${SITE.url}/og-image.png`],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "48x48" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <LoadingScreen />
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-35">
          <DotField
            dotRadius={1.2}
            dotSpacing={16}
            bulgeStrength={55}
            glowRadius={180}
            sparkle={true}
            waveAmplitude={1.5}
          />
        </div>
        <JsonLd schema={[organizationSchema(), websiteSchema(), founderPersonSchema()]} />
        <ScrollProgress />
        <Navbar />
        <ClickSparkProvider>
          <main className="flex-1">{children}</main>
        </ClickSparkProvider>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
