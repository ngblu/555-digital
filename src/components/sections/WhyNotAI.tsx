"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Headphones, RefreshCw, Search, Shield } from "lucide-react";

const points = [
  { icon: Sparkles, title: "AI builds what you ask · I build what you need", desc: "AI doesn't know that a plumber in Cookeville needs their phone number in four places and a red emergency banner. I do. I know what converts because I study your industry and your competitors." },
  { icon: Target, title: "I ask the questions you don't know to ask", desc: "Most business owners can't prompt an AI to build a converting site because they don't know what 'converting' means. I bring the strategy, the keywords, and the design decisions." },
  { icon: Headphones, title: "When something breaks, you call me · not a chatbot", desc: "Site down at 9pm? Form not sending emails? Google listing needs updating? I'm your guy. AI won't answer your texts or fix your DNS." },
  { icon: RefreshCw, title: "I keep it working month after month", desc: "Websites aren't set-it-and-forget-it. I do the updates, the security patches, the SEO tweaks, the content changes · so you don't have to think about it." },
  { icon: Search, title: "I make sure people actually find you", desc: "AI can write meta tags. I do keyword research, Google Business optimization, local SEO strategy, and ongoing monitoring so you show up when someone searches for your service." },
  { icon: Shield, title: "You pay me so you can do what you're good at", desc: "You charge $100-200/hour for your trade. Spending 20 hours learning AI website builders costs you $2,000-4,000 in lost billable time. Pay me once or monthly and keep working." },
];

export default function WhyNotAI() {
  return (
    <section id="why-not-ai" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Honest Talk</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
            "Can't I just use AI to build my site?"
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Fair question. And yes, you can. But here's what AI won't do for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-all group">
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base mb-2 text-text-primary">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
