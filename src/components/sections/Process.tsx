"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    num: "01",
    title: "Free Audit",
    desc: "I analyze your current website for design, speed, SEO, and conversion issues. You get a full report — no strings attached.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Strategy & Design",
    desc: "I create a custom redesign mockup and development plan tailored to your business goals and audience.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Build & Launch",
    desc: "I build your new site with modern tech, thorough testing, and seamless migration. Launch day is exciting, not stressful.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Grow & Optimize",
    desc: "Post-launch analytics, A/B testing, and monthly optimization to keep your site performing at its peak.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            From Broken to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Brilliant
            </span>
            {" "}in 4 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-secondary/20 to-primary/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Big background number */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-extrabold text-primary/[0.05] select-none pointer-events-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-surface flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
