import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema, founderPersonSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ClientWrapper } from "@/components/ui/client-wrapper";

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
  title: {
    default: `${SITE.name} — AI Products & Digital Infrastructure for Indian Businesses`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "We build custom AI products, intelligent voice/WhatsApp agents, and high-performance digital infrastructure for ambitious businesses worldwide.",
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  keywords: [
    "AI agents",
    "WhatsApp AI receptionist",
    "custom business websites",
    "AI automation",
    "digital growth",
    "ExamOS",
    "Aura English coach",
    "AI startup",
    "Nextscale Technologies",
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
    title: `${SITE.name} — AI Products & Digital Infrastructure`,
    description: "Custom AI products, intelligent voice/WhatsApp agents, and high-performance digital infrastructure for ambitious businesses worldwide.",
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
    description: "Custom AI products, intelligent voice/WhatsApp agents, and high-performance digital infrastructure for ambitious businesses worldwide.",
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
