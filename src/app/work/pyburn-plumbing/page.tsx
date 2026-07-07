import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pyburn Plumbing · Case Study | 555 Digital",
  description:
    "How I rebuilt Pyburn Plumbing's website: from a slow WordPress/Divi site to a fast Next.js site. Modern stack, mobile-first, and built to convert visitors into calls.",
  openGraph: {
    title: "Pyburn Plumbing · Case Study | 555 Digital",
    description:
      "From WordPress/Divi to Next.js + Tailwind CSS. A modern rebuild focused on speed, local SEO, and conversions.",
    url: "https://www.555digital.dev/work/pyburn-plumbing",
  },
  alternates: { canonical: "https://www.555digital.dev/work/pyburn-plumbing" },
};

export default function PyburnCaseStudy() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            How Pyburn Plumbing Got a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Website
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Scott Pyburn had been serving Cookeville, TN for 28 years. His
            website was built on WordPress with a Divi theme, slow to load, and
            hard to update. I rebuilt it from scratch with a modern stack
            designed to convert visitors into phone calls.
          </p>
          <div className="flex gap-6 mt-8">
            <div>
              <span className="text-primary font-bold text-3xl">28 yrs</span>
              <span className="text-text-muted text-sm block">In Business</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">Next.js</span>
              <span className="text-text-muted text-sm block">Modern Stack</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">Mobile</span>
              <span className="text-text-muted text-sm block">First Design</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">Cookeville</span>
              <span className="text-text-muted text-sm block">TN Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">The Problem</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Pyburn Plumbing had a WordPress site with a Divi theme. It
              was functional but held the business back:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                Slow page loads, visitors were bouncing before the page finished
                rendering
              </li>
              <li>
                Not mobile-friendly, despite most customers searching for a
                plumber on their phone
              </li>
              <li>
                WordPress + Divi made updates painful for someone who just needs
                their phone to ring
              </li>
              <li>
                Missing city-specific pages for the Cookeville, Sparta, and
                Crossville service areas
              </li>
              <li>
                No click-to-call in the header, despite plumbing being an
                emergency-need service
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">What I Did</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Built from scratch",
                desc: "No page builder, no bloated theme. Custom Next.js site with TypeScript and Tailwind CSS, deployed on Vercel. Every line of code is purpose-built for a plumbing business.",
              },
              {
                title: "Mobile-first, click-to-call",
                desc: "Red emergency banner at the top of every page with Scott's phone number. One tap to call from any device. Plumbers don't need form fills, they need the phone ringing.",
              },
              {
                title: "City-specific pages",
                desc: "Dedicated pages for Cookeville, Algood, Baxter, Monterey, Sparta, Livingston, and Crossville. Optimized for 'plumber [city]' searches across the entire service area.",
              },
              {
                title: "Blog with local content",
                desc: "Service-area content about hard water, septic maintenance, and common plumbing issues in the Cookeville region. Builds authority and ranks for long-tail search terms.",
              },
              {
                title: "Service + location indexes",
                desc: "Structured index pages for all services and all locations. Clean information architecture that Google can crawl and customers can navigate.",
              },
              {
                title: "Performance optimized",
                desc: "Static generation where possible, optimized images, and minimal JavaScript. The site loads fast even on spotty rural connections common in the service area.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-xl p-6"
              >
                <h3 className="text-text-primary font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            The Results
          </h2>

          <blockquote className="bg-surface border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-text-primary text-lg italic leading-relaxed mb-4">
              &ldquo;Quote pending&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold">
                SP
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  Scott Pyburn
                </div>
                <div className="text-xs text-text-secondary">
                  Owner, Pyburn Plumbing &amp; Septic Services
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Tech Used */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
          <p className="text-text-muted text-sm mb-8">
            Modern tools chosen for speed, reliability, and ease of maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js 16",
              "React 19",
              "Tailwind CSS v4",
              "TypeScript",
              "Vercel",
            ].map((t) => (
              <span
                key={t}
                className="bg-surface border border-border rounded-full px-5 py-2 text-sm text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Want results like Pyburn?
          </h2>
          <p className="text-text-secondary mb-8">
            I'll audit your website for free and show you exactly what's costing
            you customers. No pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base"
            >
              Get Your Free Audit
            </a>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3.5 rounded-lg hover:border-primary/50 transition-all duration-300 text-base"
            >
              View Demo Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
