"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: "linear-gradient(rgba(30,30,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,46,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm mb-6 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse mr-1" />Currently booking new clients
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              You Run Your {" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Business,</span>
              {" "}I Handle Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Online Presence</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl mb-4 leading-relaxed">
              Yes, anyone can get a cheap website now. But most business owners don't know what makes a site actually convert visitors into calls. I handle everything · audit, redesign, SEO, ongoing updates · so your phone rings and you keep working.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base">Get Your Free Audit</a>
              <a href="/#portfolio" className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3.5 rounded-lg hover:border-primary/50 transition-all duration-300 text-base">View My Work</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-surface border border-border rounded-2xl overflow-hidden animate-float">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-4 h-6 bg-background rounded-md" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-primary/10 rounded w-3/4" />
                  <div className="h-4 bg-primary/5 rounded w-full" />
                  <div className="h-4 bg-primary/5 rounded w-5/6" />
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mt-4" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-20 bg-primary/5 rounded-lg" />
                    <div className="h-20 bg-secondary/5 rounded-lg" />
                    <div className="h-20 bg-primary/5 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
