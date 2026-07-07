import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | 555 Digital",
  description:
    "Learn about 555 Digital, a web design agency built on the belief that every business deserves a great website.",
  alternates: {
    canonical: "https://www.555digital.dev/about",
  },
  openGraph: {
    title: "About | 555 Digital",
    description:
      "Learn about 555 Digital, a web design agency built on the belief that every business deserves a great website.",
    url: "https://www.555digital.dev/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
