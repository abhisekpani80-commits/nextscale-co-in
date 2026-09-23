import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ResponsiveFooter } from "@/components/landing/responsive-footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextscale.co.in"),
  title: {
    default: "NextScale — Revenue Architecture & Operational Growth Clinic",
    template: "%s | NextScale",
  },
  description:
    "NextScale engineers high-converting Digital Front Doors and autonomous Back Office AI systems for growing B2B businesses. Zero leaks. Shipped in 7 days.",
  keywords: [
    "Revenue Architecture",
    "Operational Growth Clinic",
    "Digital Front Door",
    "Automated Back Office",
    "custom website development",
    "WhatsApp AI agent for business",
    "high-performance websites",
    "Abhisek Pani",
    "NextScale",
  ],
  authors: [{ name: "NextScale Studio" }],
  creator: "NextScale Studio",
  publisher: "NextScale Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://nextscale.co.in",
    title: "NextScale — Revenue Architecture & Operational Growth Clinic",
    description:
      "NextScale engineers high-converting Digital Front Doors and autonomous Back Office AI systems for growing B2B businesses. Zero leaks. Shipped in 7 days.",
    siteName: "NextScale",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NextScale — Revenue Architecture & Operational Growth Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextScale — Revenue Architecture & Operational Growth Clinic",
    description:
      "NextScale engineers high-converting Digital Front Doors and autonomous Back Office AI systems for growing B2B businesses. Zero leaks. Shipped in 7 days.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar" />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <ResponsiveFooter />
      </body>
    </html>
  );
}
