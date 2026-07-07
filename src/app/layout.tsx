import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://555digital.dev"),
  title: "555 Digital | Web Design for Service Businesses",
  description:
    "I find underperforming websites and rebuild them for landscapers, detailers, window washers, and service businesses. Free PageSpeed audit included.",
  openGraph: {
    title: "555 Digital | Web Design for Service Businesses",
    description:
      "I find underperforming websites and rebuild them for landscapers, detailers, window washers, and service businesses.",
    type: "website",
    url: "https://555digital.dev",
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
    canonical: "https://555digital.dev",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "555 Digital",
              description:
                "Web design and development for service businesses. Free PageSpeed audits, custom websites, and SEO by a solo developer.",
              url: "https://555digital.dev",
              telephone: "(629) 335-8803",
              email: "contact@555digital.dev",
              areaServed: "US",
              founder: {
                "@type": "Person",
                name: "Noah",
                jobTitle: "Web Developer",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Landing Page",
                  price: "1000",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Full Website",
                  price: "2500",
                  priceCurrency: "USD",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {/* Subtle ambient glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_70%)]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
