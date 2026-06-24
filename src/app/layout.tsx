import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "555 Digital | Website Transformation Agency",
  description:
    "We find underperforming websites and transform them into high-converting digital experiences. Web design, development, and optimization for businesses ready to grow.",
  openGraph: {
    title: "555 Digital | Website Transformation Agency",
    description:
      "We find underperforming websites and transform them into high-converting digital experiences.",
    type: "website",
    url: "https://555digital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {/* Subtle ambient glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_70%)]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
