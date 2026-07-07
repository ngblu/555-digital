"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  sub?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

const tiers: Tier[] = [
  {
    name: "Landing Page",
    price: "$1,000",
    features: [
      "Custom single-page design",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
    cta: "Get Started",
  },
  {
    name: "Full Website",
    price: "$2,500",
    popular: true,
    features: [
      "Multi-page site (up to 5 pages)",
      "Custom design system",
      "Advanced SEO optimization",
      "CMS integration",
      "Blog setup",
      "Analytics dashboard",
      "Unlimited revisions during design",
      "3 months support",
    ],
    cta: "Get Started",
  },
  {
    name: "Custom Build",
    price: "Let's Talk",
    features: [
      "Everything in Full Website",
      "E-commerce integration",
      "Custom functionality",
      "API integrations",
      "Priority support channel",
      "6 months support",
      "Performance monitoring",
    ],
    cta: "Contact Me",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Straightforward
                        </span>
                        {" "}Pricing, No Surprises
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative bg-surface rounded-2xl p-8 flex flex-col ${
                t.popular
                  ? "border-2 border-primary md:scale-105 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
                  : "border border-border"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-text-primary">
                  {t.price}
                </span>
                {t.price.startsWith("$") && (
                  <span className="text-text-muted text-sm ml-1">/project</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className={`inline-flex items-center justify-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm hover:scale-[1.02] ${
                  t.popular
                    ? "bg-primary text-background hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                    : "border border-border text-text-primary hover:border-primary/50"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-10">
          All plans include a free website audit. 50/50 payment split available
          , half upfront, half on launch.{" "}
          <a
            href="https://555-dashboard.vercel.app/maintenance"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline"
          >
            Monthly maintenance starts at $99/mo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
