"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const inputCls =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-text-muted text-sm";

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Send className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-3xl font-extrabold mb-3">Message Sent!</h2>
            <p className="text-text-secondary">
              I'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Ready to{" "}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Transform
                        </span>
                        {" "}Your Website?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className={inputCls}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className={inputCls}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="website" className="block text-sm text-text-secondary mb-1.5">Website URL</label>
              <input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                className={inputCls}
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm text-text-secondary mb-1.5">Budget Range</label>
              <select
                id="budget"
                className={inputCls}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="">Select a range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-2.5k">$1,000 – $2,500</option>
                <option value="2.5k-5k">$2,500 – $5,000</option>
                <option value="5k+">$5,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className={`${inputCls} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-background font-semibold px-6 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Watermark */}
            <span className="absolute -top-8 -right-4 text-[180px] font-extrabold text-primary/[0.04] select-none pointer-events-none leading-none -rotate-6">
              555
            </span>

            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Email</h3>
                <p className="text-text-secondary">hello@555digital.com</p>
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Phone</h3>
                <p className="text-text-secondary">(629) 335-8803</p>
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">
                  Location
                </h3>
                <p className="text-text-secondary">
                  Based in the US — Working with businesses everywhere
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                {["X", "Li", "Ig", "Dr"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted text-xs font-bold hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
