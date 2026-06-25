"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Code, Search, Zap, Palette, Headphones, X } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Redesign",
    desc: "Your current site redesigned from scratch. Same domain, totally new look that actually gets people to call you.",
    detail: "I tear down what's not working and rebuild it from scratch. Every redesign starts with an audit of your current site, heatmaps, analytics, speed tests, so the new version is based on data, not guesswork. You'll see mockups before I write a single line of code.",
    deliverables: ["Full site audit report", "Custom mockups in Figma", "Responsive development", "Content migration", "Launch & QA testing"],
  },
  {
    icon: Code,
    title: "Custom Development",
    desc: "Need something built from zero? I use the same tech stack behind Hulu and Nike's websites.",
    detail: "No templates, no page builders, no bloated WordPress plugins. I hand-code your site with the same tools used by Vercel, Stripe, and Linear. The result is a site that loads instantly, ranks well, and doesn't break every time there's a plugin update.",
    deliverables: ["Next.js / React codebase", "TypeScript throughout", "CMS integration", "API connections", "Deployment on Vercel"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "I make sure people in your area actually find you on Google. Not page 5. Page 1.",
    detail: "Most agency sites rank on page 5 because they look good but ignore the fundamentals. I handle technical SEO (structured data, meta tags, sitemap, Core Web Vitals), on-page optimization, and local search setup so you actually show up when people search for what you sell.",
    deliverables: ["Technical SEO audit", "Keyword research", "On-page optimization", "Local SEO setup", "Google Business Profile"],
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    desc: "If your site takes more than 3 seconds to load, half your visitors leave. I fix that.",
    detail: "A 1-second delay in page load reduces conversions by 7%. I optimize images, eliminate render-blocking resources, implement lazy loading, and sometimes rebuild entire pages when the existing code is beyond saving. Target: sub-2-second loads on 3G.",
    deliverables: ["Core Web Vitals audit", "Image optimization", "Code splitting", "CDN setup", "Performance monitoring"],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo, colors, fonts, and a style guide so everything looks consistent across your site and socials.",
    detail: "Your brand is more than a logo, it's how people feel when they land on your site. I build a complete design system: colors, fonts, spacing, component styles, and a brand guide you can hand to any designer or printer and get consistent results.",
    deliverables: ["Logo design (3 concepts)", "Color palette", "Typography system", "Brand guidelines PDF", "Social media templates"],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Websites aren't set-it-and-forget-it. I keep yours updated, fast, and working so you can focus on your business.",
    detail: "Websites aren't 'set it and forget it'. Content gets stale, dependencies need updates, SSL certs expire, and Google changes the rules every quarter. My monthly plans keep everything running smooth so you can focus on your actual business.",
    deliverables: ["Monthly updates & patches", "Uptime monitoring", "Analytics reports", "Content updates (2/mo)", "Priority email support"],
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-surface border border-border rounded-2xl p-8 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <service.icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-3">
          {service.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {service.detail}
        </p>

        <h4 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-3">
          What you get
        </h4>
        <ul className="space-y-2 mb-6">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="text-primary text-xs">✓</span> {d}
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          onClick={onClose}
          className="inline-flex items-center justify-center w-full bg-primary text-background font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 text-sm"
        >
          Get a Free Audit
        </a>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Services That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform
            </span>
            {" "}Your Online Presence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-surface border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {s.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <button
                onClick={() => setActiveService(i)}
                className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300 cursor-pointer bg-transparent border-none p-0"
              >
                Learn more <span aria-hidden>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeService !== null && (
          <ServiceModal
            service={services[activeService]}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
