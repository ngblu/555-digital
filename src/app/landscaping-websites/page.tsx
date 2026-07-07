import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Website Design | 555 Digital",
  description:
    "I build high-performance websites for landscaping companies. Custom design, fast load times, and free PageSpeed audit. Landscaping websites that actually get calls.",
  openGraph: {
    title: "Landscaping Website Design | 555 Digital",
    description:
      "I build high-performance websites for landscaping companies. Free audit included.",
    url: "https://www.555digital.dev/landscaping-websites",
  },
  alternates: { canonical: "https://www.555digital.dev/landscaping-websites" },
};

export default function LandscapingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            For Landscaping Companies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Landscaping Websites That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get You Jobs
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Your crew does great work. But if your website takes 8 seconds to load
            and looks like it was built in 2010, customers are calling your
            competitor instead. I fix that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
              See Landscaping Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Why most landscaping websites fail</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most landscaping companies fall into one of three traps: a free Wix
                site that loads in 12 seconds, a Facebook page with no Google
                presence, or an old WordPress site with a broken contact form.
              </p>
              <p>
                Meanwhile, homeowners are Googling "landscapers near me" right now.
                If your site doesn't show up in search results and doesn't convert
                when it does, you're losing jobs every single day.
              </p>
              <p>
                The landscaping companies I work with go from invisible to top 3
                on Google. Their sites load in under 2 seconds. And their phones
                start ringing.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              Common Issues I Fix
            </h3>
            <ul className="space-y-4">
              {[
                "Slow load times (8s+ → under 2s)",
                "No mobile optimization",
                "Missing service area pages",
                "No online booking or quote forms",
                "Zero SEO for local searches",
                "Outdated photo galleries that don't load",
              ].map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-danger shrink-0 mt-0.5">✗</span> {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study tease */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GreenEdge Landscaping
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Local landscaping company stuck with a free Wix site. I rebuilt it with
            online booking, service area pages, and a photo gallery that actually
            loads. Calls increased 140%, bookings up 80%.
          </p>
          <div className="flex gap-4 justify-center">
            <div>
              <span className="text-primary font-bold text-2xl">+140%</span>
              <span className="text-text-muted text-sm block">More Calls</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-2xl">+80%</span>
              <span className="text-text-muted text-sm block">More Bookings</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-2xl">9.4s → 1.6s</span>
              <span className="text-text-muted text-sm block">Load Time</span>
            </div>
          </div>
          <Link
            href="/work/greenedge-landscaping"
            className="inline-flex items-center gap-1.5 text-primary font-medium mt-8 hover:gap-2.5 transition-all"
          >
            Read the full case study <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            What a landscaping website costs
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Transparent pricing. No discovery fees. No hidden costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-surface border border-border rounded-2xl p-8 text-left">
              <h3 className="text-lg font-semibold mb-2">Landing Page</h3>
              <p className="text-3xl font-extrabold text-text-primary">$1,000</p>
              <p className="text-text-muted text-sm mt-1">/project</p>
              <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                <li>✓ Single page with service info</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form + quote request</li>
                <li>✓ Photo gallery</li>
                <li>✓ Basic SEO setup</li>
              </ul>
            </div>
            <div className="bg-surface border-2 border-primary rounded-2xl p-8 text-left relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold mb-2">Full Website</h3>
              <p className="text-3xl font-extrabold text-text-primary">$2,500</p>
              <p className="text-text-muted text-sm mt-1">/project</p>
              <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                <li>✓ Everything in Landing Page</li>
                <li>✓ Service area pages</li>
                <li>✓ Online booking system</li>
                <li>✓ Before/after project gallery</li>
                <li>✓ Advanced local SEO</li>
                <li>✓ Blog + Google Maps integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Want to see what I'd do with your site?
          </h2>
          <p className="text-text-secondary mb-8">
            I'll audit your landscaping website for free. No catch.
            If it's already great, I'll tell you that too.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base"
          >
            Get Your Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
