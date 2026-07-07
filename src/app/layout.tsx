import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.555digital.dev"),
  title: "555 Digital | Web Design for Service Businesses",
  description:
    "I find underperforming websites and rebuild them for landscapers, detailers, window washers, and service businesses. Free PageSpeed audit included.",
  openGraph: {
    title: "555 Digital | Web Design for Service Businesses",
    description:
      "I find underperforming websites and rebuild them for landscapers, detailers, window washers, and service businesses.",
    type: "website",
    url: "https://www.555digital.dev",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "555 Digital | Website audits and redesigns for service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.555digital.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#0C0D14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />

      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {/* Subtle ambient glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_70%)]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
