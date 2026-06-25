import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | 555 Digital",
  description:
    "Learn about 555 Digital, a web design agency built on the belief that every business deserves a great website.",
};

export default function AboutPage() {
  return <AboutContent />;
}
