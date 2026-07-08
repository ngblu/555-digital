"use client";

import { motion } from "framer-motion";
import { Zap, Eye, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most projects done in 2 to 3 weeks. I don't have layers of management slowing things down.",
  },
  {
    icon: Eye,
    title: "No BS Pricing",
    desc: "You see the price upfront. No scope creep surprises, no hidden fees, no 'discovery phase' invoices.",
  },
  {
    icon: BarChart3,
    title: "Results Over Pixels",
    desc: "A pretty site that doesn't get calls is useless. Every design choice is aimed at getting you more business.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Figma",
  "WordPress",
  "Shopify",
];

export default function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero banner */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              About
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
              I Build Websites That{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Actually Work
              </span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Not just look good. Work. As in, your phone rings more, your
              calendar fills up, and people stop bouncing after 3 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              The Short Version
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m Noah, a computer science student in Cookeville, TN
                who builds websites for local service businesses. I use the
                same modern tools that power sites like Hulu and Nike, but at
                prices a local business can actually afford.
              </p>
              <p className="text-text-primary font-medium">
                Why work with me instead of a big agency? Because I actually
                care about your business, I&apos;ll text you back on
                weekends, and I&apos;m not billing you $200/hour to attend my
                own meetings.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative h-80 bg-surface border border-border rounded-2xl flex items-center justify-center">
              <span className="text-8xl font-extrabold bg-gradient-to-r from-primary/30 to-secondary/30 bg-clip-text text-transparent">
                555
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              How I Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Tech I Use</h2>
          <p className="text-text-muted text-sm mb-8">
            Same tools behind Netflix, Airbnb, and Stripe, just pointed at your
            business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="bg-surface border border-border rounded-full px-5 py-2 text-sm text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Want to see what I&apos;d do with your site?
          </h2>
          <p className="text-text-secondary mb-8">
            I&apos;ll audit your current website for free. No catch, no sales pitch.
            If it&apos;s already good, I&apos;ll tell you.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02]"
          >
            Get Your Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
