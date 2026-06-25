import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GreenEdge Landscaping · Case Study | 555 Digital",
  description:
    "How I rebuilt GreenEdge Landscaping's website: from a 9.4-second Wix page to a 1.6-second custom site. Calls up 140%, bookings up 80%.",
  openGraph: {
    title: "GreenEdge Landscaping · Case Study | 555 Digital",
    description:
      "From a 9.4s Wix page to a 1.6s custom site. Calls +140%, bookings +80%.",
    url: "https://555digital.dev/work/greenedge-landscaping",
  },
  alternates: { canonical: "https://555digital.dev/work/greenedge-landscaping" },
};

export default function GreenEdgeCaseStudy() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            How GreenEdge Landscaping{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3x'd Their Calls
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            A local landscaping company was running their entire business off a
            free Wix page. I rebuilt it with a custom site that loads in under 2
            seconds, ranks on Google, and actually converts visitors into
            bookings.
          </p>
          <div className="flex gap-6 mt-8">
            <div>
              <span className="text-primary font-bold text-3xl">+140%</span>
              <span className="text-text-muted text-sm block">More Calls</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">+80%</span>
              <span className="text-text-muted text-sm block">More Bookings</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">9.4s → 1.6s</span>
              <span className="text-text-muted text-sm block">Page Load</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-3xl">3 wks</span>
              <span className="text-text-muted text-sm block">Delivery</span>
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
              GreenEdge Landscaping had been using a free Wix template for years.
              The site looked fine to them, but under the hood it was a mess:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Loaded in <strong className="text-text-primary">9.4 seconds</strong> — half their visitors left before seeing anything</li>
              <li>No mobile version — unusable on a phone, where 70% of their traffic came from</li>
              <li>Zero SEO — didn't show up for "landscaper near me" or even their own business name on Google</li>
              <li>No booking system — customers had to call, and half the time the line was busy</li>
              <li>Blurry, low-res photos that made their work look amateur</li>
            </ul>
            <p>
              Marcus, the owner, told me: <em>"We were running our whole business off a free Wix page. It looked terrible and we knew it, just never had time to deal with it."</em>
            </p>
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
                desc: "No template, no page builder. Custom Next.js site with TypeScript, deployed on Vercel. The entire codebase is theirs to keep.",
              },
              {
                title: "Online booking system",
                desc: "Customers can now see available time slots and book directly on the site. Eliminated the phone tag that was costing them jobs.",
              },
              {
                title: "Service area pages",
                desc: "Individual pages for each city they serve, optimized for local SEO. They now rank for 'landscaper [city]' across their entire service area.",
              },
              {
                title: "Photo gallery that loads",
                desc: "High-res project photos, compressed and lazy-loaded. The gallery now loads instantly instead of killing the page.",
              },
              {
                title: "Mobile-first design",
                desc: "Every page works perfectly on a phone. Their conversion rate on mobile went from zero to their highest-performing channel.",
              },
              {
                title: "Local SEO overhaul",
                desc: "Google Business Profile optimization, schema markup, keyword-targeted content, and proper meta tags. They're now top 3 for their city.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1714] border border-danger/20 rounded-2xl p-8">
              <span className="text-red-400/80 text-xs font-bold tracking-widest uppercase mb-4 block">Before</span>
              <div className="space-y-3">
                {[
                  "Free Wix template",
                  "No booking system",
                  "Blurry, unoptimized photos",
                  "Not mobile-friendly",
                  "Zero SEO — invisible on Google",
                  "No service area pages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-red-300/70 text-sm">
                    <span>✗</span> {item}
                  </div>
                ))}
                <div className="text-red-400/50 text-sm font-mono mt-4 pt-4 border-t border-red-400/10">
                  Load time: 9.4s
                </div>
              </div>
            </div>
            <div className="bg-[#0d1a1f] border border-accent/30 rounded-2xl p-8">
              <span className="text-primary/80 text-xs font-bold tracking-widest uppercase mb-4 block">After</span>
              <div className="space-y-3">
                {[
                  "Custom design, fully owned",
                  "Online booking system",
                  "High-res optimized gallery",
                  "Mobile-first responsive",
                  "Top 3 on Google for their city",
                  "6 service area pages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-accent/70 text-sm">
                    <span>✓</span> {item}
                  </div>
                ))}
                <div className="text-accent/60 text-sm font-mono mt-4 pt-4 border-t border-accent/10">
                  Load time: 1.6s
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">The Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "+140%", label: "More calls" },
              { value: "+80%", label: "More bookings" },
              { value: "83%", label: "Faster page load" },
              { value: "Top 3", label: "Google ranking" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface border border-border rounded-xl p-6 text-center">
                <span className="text-primary font-bold text-2xl block mb-1">{stat.value}</span>
                <span className="text-text-muted text-xs">{stat.label}</span>
              </div>
            ))}
          </div>

          <blockquote className="bg-surface border border-border rounded-2xl p-8">
            <p className="text-text-primary text-lg italic leading-relaxed mb-4">
              "Got the new site and within a month our calls doubled. Should've
              done this years ago."
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold">MT</div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Marcus T.</div>
                <div className="text-xs text-text-secondary">Owner, GreenEdge Landscaping</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Tech Used */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
          <p className="text-text-muted text-sm mb-8">
            Same tools behind Hulu, Nike, and Stripe — just pointed at a landscaping business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"].map((t) => (
              <span key={t} className="bg-surface border border-border rounded-full px-5 py-2 text-sm text-text-secondary">
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
            Want results like GreenEdge?
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
              href="/landscaping-websites"
              className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3.5 rounded-lg hover:border-primary/50 transition-all duration-300 text-base"
            >
              Landscaping Websites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
