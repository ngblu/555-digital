"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sites I've Built
            </span>
          </h2>
          <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
            Real websites built from scratch with modern tools. Fast, mobile-first, and designed to convert visitors into customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pyburn Plumbing",
              niche: "Plumbing & Septic",
              desc: "Full-service plumbing website with emergency banner, city pages for 7 service areas, click-to-call, and mobile-first design. Rebuilt from WordPress/Divi to Next.js + Tailwind.",
              link: "https://pyburn-plumbing.vercel.app",
            },
            {
              title: "Auto Detailing Demo",
              niche: "Auto Detailing",
              desc: "Complete detailing website with instant quote form, service packages, before/after gallery, and click-to-call. Mobile-first, built to convert.",
              link: "https://detailing-demo-two.vercel.app",
            },
            {
              title: "1776 Coffee",
              niche: "E-Commerce / Brand",
              desc: "Patriotic coffee brand with online ordering, brand story, and Instagram integration. Built with Next.js and Tailwind CSS.",
              link: "https://1776-coffee.vercel.app",
            },
          ].map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {demo.title}
                  </h3>
                  <span className="bg-background border border-border text-text-muted text-[10px] px-2 py-0.5 rounded-full">
                    {demo.niche}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {demo.desc}
                </p>
                <div>
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                  >
                    View Site <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
