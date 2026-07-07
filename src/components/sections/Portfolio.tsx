"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === CASE STUDY === */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-border rounded-2xl overflow-hidden mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Client info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Plumbing &amp; Septic
                </span>
                <span className="text-text-muted text-xs">Cookeville, TN</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
                Pyburn Plumbing
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Scott Pyburn had been running his plumbing business for 28 years
                with a WordPress/Divi site that was slow, hard to update, and
                not bringing in calls. I rebuilt it from scratch with a modern
                stack: fast load times, click-to-call on every page, and SEO
                that actually works for local search.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Next.js + Tailwind",
                  "Mobile-first",
                  "Click-to-call",
                  "City pages for SEO",
                  "Emergency banner",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-background border border-border rounded-full px-3 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <blockquote className="border-l-2 border-primary pl-4 italic text-text-muted text-sm mb-6">
                &ldquo;Quote pending&rdquo;
                <footer className="text-text-primary font-medium not-italic mt-1 text-xs">
                  Scott P., Owner
                </footer>
              </blockquote>

              <div>
                <Link
                  href="/work/pyburn-plumbing"
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-300"
                >
                  Read Full Case Study <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="bg-gradient-to-br from-[#0d1a1f] to-[#1a1714] flex items-center justify-center p-12 min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  28
                </div>
                <div className="text-text-muted text-sm">
                  years in business
                </div>
                <div className="w-16 h-px bg-border mx-auto my-4" />
                <div className="text-text-secondary text-xs">
                  Site rebuilt from WordPress/Divi
                  <br />
                  to Next.js + Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === DEMO WORK === */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Demo Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Examples of What I Build
          </h2>
          <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
            These are demonstration sites showing the quality and style I
            deliver. None of these represent active client relationships unless
            explicitly stated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pyburn Plumbing",
              niche: "Plumbing & Septic",
              desc: "Full plumbing website with emergency banner, city pages, and click-to-call throughout.",
              link: "https://pyburn-plumbing.vercel.app",
              note: "This demo became a real client — see case study above.",
            },
            {
              title: "1776 Coffee",
              niche: "E-Commerce / Brand",
              desc: "Patriotic coffee brand with online ordering, brand story, and Instagram integration.",
              link: "https://1776-coffee.vercel.app",
              note: "Demo — example of what we build for product brands.",
            },
            {
              title: "Script Coach",
              niche: "SaaS / Sales Tool",
              desc: "Sales intelligence platform with AI coaching, lead tracking, and compliance tools.",
              link: "https://script-coach-delta.vercel.app",
              note: "Demo — example of what we build for software products.",
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
                <span className="inline-block text-primary/80 text-[11px] font-medium mb-3 bg-primary/5 px-2 py-1 rounded">
                  {demo.note}
                </span>
                <div>
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                  >
                    View Demo <span aria-hidden>→</span>
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
