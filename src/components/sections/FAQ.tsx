"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a website redesign take?",
    a: "Most projects are completed within 2–4 weeks depending on complexity. The Full Website tier typically launches in 3 weeks.",
  },
  {
    q: "What if I already have a website?",
    a: "Perfect, that's my specialty. I audit your current site, identify what's working, and rebuild everything else.",
  },
  {
    q: "Do you work with any specific industries?",
    a: "I work across all industries but have deep experience with landscaping, auto detailing, window washing, pressure washing, cleaning, and other service businesses.",
  },
  {
    q: "What happens to my current website during the rebuild?",
    a: "Your existing site stays live until the new one is ready. I handle the migration seamlessly, zero downtime.",
  },
  {
    q: "Do I own the code?",
    a: "Absolutely. You own 100% of the code, design assets, and content. No lock-in, ever.",
  },
  {
    q: "What's included in the free audit?",
    a: "A full report covering design analysis, speed metrics, SEO health, mobile responsiveness, accessibility compliance, and conversion optimization opportunities.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. I offer 50/50 splits (half upfront, half on launch) for all tiers. Monthly payment plans available for Enterprise.",
  },
  {
    q: "What tech stack do you use?",
    a: "I primarily build with Next.js, React, Tailwind CSS, and deploy on Vercel. For e-commerce, I integrate with Shopify or custom solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Questions? I've Got Answers.
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-text-primary font-medium pr-4 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary text-sm leading-relaxed pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
