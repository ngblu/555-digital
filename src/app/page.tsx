import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.555digital.dev/#business",
  name: "555 Digital",
  description:
    "Web design and development for service businesses. Free PageSpeed audits, custom websites, and SEO by a solo developer in Tennessee.",
  url: "https://www.555digital.dev",
  telephone: "(629) 335-8803",
  email: "contact@555digital.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cookeville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  areaServed: [
    "Cookeville",
    "Nashville",
    "Crossville",
    "Upper Cumberland",
    "Middle Tennessee",
  ],
  founder: {
    "@type": "Person",
    name: "Noah",
    jobTitle: "Web Developer",
  },
  priceRange: "$$",
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
