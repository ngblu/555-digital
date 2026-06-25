"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  name: string;
  industry: string;
  desc: string;
  stats: { label: string; value: string }[];
  before: { lines: string[]; speed: string };
  after: { lines: string[]; speed: string };
}

const projects: Project[] = [
  {
    name: "GreenEdge Landscaping",
    industry: "Landscaping",
    desc: "Local landscaping company stuck with a free Wix site. Rebuilt with online booking, service areas, and a photo gallery that actually loads.",
    stats: [
      { label: "Calls", value: "+140%" },
      { label: "Bookings", value: "+80%" },
    ],
    before: {
      lines: ["Free Wix template", "No booking system", "Blurry photos"],
      speed: "Load: 9.4s",
    },
    after: {
      lines: ["Custom design", "Online booking", "Optimized gallery"],
      speed: "Load: 1.6s",
    },
  },
  {
    name: "Prestige Auto Detail",
    industry: "Auto Detailing",
    desc: "Mobile detailing business running off a Facebook page. Built them a real site with pricing, before/after gallery, and instant quote requests.",
    stats: [
      { label: "Quote Requests", value: "3x" },
      { label: "Google Rank", value: "Top 3" },
    ],
    before: {
      lines: ["Facebook page only", "No Google presence", "No pricing info"],
      speed: "No site",
    },
    after: {
      lines: ["Full website + SEO", "Before/after gallery", "Instant quotes"],
      speed: "Load: 1.3s",
    },
  },
  {
    name: "ClearView Window Washing",
    industry: "Window Cleaning",
    desc: "Family-owned window washing business with a GoDaddy site builder page from 2016. Rebuilt with service area maps, seasonal pricing, and review integration.",
    stats: [
      { label: "Traffic", value: "+210%" },
      { label: "Leads/Week", value: "8-10" },
    ],
    before: {
      lines: ["GoDaddy builder", "Outdated info", "Not mobile-friendly"],
      speed: "Load: 7.2s",
    },
    after: {
      lines: ["Modern responsive site", "Service area map", "Review widgets"],
      speed: "Load: 1.5s",
    },
  },
];

function BeforeAfterSlider({ project }: { project: Project }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider" aria-label="Before and after comparison. Drag to compare." aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)} className="relative h-56 cursor-col-resize select-none overflow-hidden rounded-t-2xl touch-none"
      onPointerDown={() => { dragging.current = true; }}
      onPointerMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerLeave={() => { dragging.current = false; }}
    >
      {/* BEFORE side — fully opaque background */}
      <div className="absolute inset-0 bg-[#1a1714] flex flex-col items-center justify-center p-4">
        <span className="text-red-400/80 text-[10px] font-bold tracking-widest uppercase mb-3">Before</span>
        <div className="space-y-2 text-center">
          {project.before.lines.map((line) => (
            <div key={line} className="text-red-300/60 text-xs">✗ {line}</div>
          ))}
        </div>
        <span className="text-red-400/50 text-[10px] mt-3 font-mono">{project.before.speed}</span>
      </div>

      {/* AFTER side — fully opaque background, clips over the before */}
      <div
        className="absolute inset-0 bg-[#0d1a1f] flex flex-col items-center justify-center p-4"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="text-primary/80 text-[10px] font-bold tracking-widest uppercase mb-3">After</span>
        <div className="space-y-2 text-center">
          {project.after.lines.map((line) => (
            <div key={line} className="text-accent/70 text-xs">✓ {line}</div>
          ))}
        </div>
        <span className="text-accent/60 text-[10px] mt-3 font-mono">{project.after.speed}</span>
      </div>

      {/* Drag handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/50 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border-2 border-background shadow-lg flex items-center justify-center text-background text-sm font-bold cursor-grab active:cursor-grabbing">
          ↔
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-text-muted/40 z-20 pointer-events-none">
        drag to compare
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformations
            </span>
            {" "}That Speak For Themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <BeforeAfterSlider project={p} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Link href="/work/greenedge-landscaping" className="text-lg font-semibold text-text-primary hover:text-primary transition-colors">
                    {p.name}
                  </Link>
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                    {p.industry}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex gap-6">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-primary font-bold text-lg">
                        {s.value}
                      </span>
                      <span className="text-text-muted text-xs block">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/#contact"
            className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
          >
            View All Projects <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
