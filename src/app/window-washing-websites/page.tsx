import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Washing Website Design | 555 Digital",
  description:
    "I build high-performance websites for window washing and exterior cleaning companies. Custom design, fast load times, and free PageSpeed audit included.",
  openGraph: {
    title: "Window Washing Website Design | 555 Digital",
    description:
      "I build high-performance websites for window washing companies. Free audit included.",
    url: "https://www.555digital.dev/window-washing-websites",
  },
  alternates: { canonical: "https://www.555digital.dev/window-washing-websites" },
};

export default function WindowWashingPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            For Window & Exterior Cleaners
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Window Washing Websites That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bring In Jobs
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Most window washers rely on word of mouth and yard signs. That works
            until a neighbor Googles "window washing near me" and hires the guy
            with the better website. I make sure that's you.
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
              See Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Your website is costing you jobs</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most window washing companies either have no website at all, or
                they've got a GoDaddy page from 2016 with outdated info, no
                mobile support, and a broken contact form. Meanwhile, customers
                expect to find pricing, see service areas, and book online.
              </p>
              <p>
                I've worked with window washing businesses that were stuck on
                outdated page builder sites or had no website at all. A modern
                site loads fast, shows up on Google for their entire service
                area, and brings in qualified leads consistently every week.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              Common Problems
            </h3>
            <ul className="space-y-4">
              {[
                "No website at all, word-of-mouth only",
                "Outdated page builder site from years ago",
                "Not mobile-friendly",
                "No service area or pricing info online",
                "Missing from Google search results",
                "No way for customers to request quotes",
              ].map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-danger shrink-0 mt-0.5">✗</span> {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Example of what's possible */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Live Example
          </span>
          <h2 className="text-3xl font-extrabold mb-6 mt-3">
            See what this looks like in the real world
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Every site I build is custom, but here's a plumbing company site to
            show you the level of quality. Fast, mobile-friendly, and built to
            convert browsers into callers.
          </p>
          <Link
            href="https://pyburn-plumbing.vercel.app"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:gap-2.5 transition-all"
          >
            View live demo site <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">What a window washing website costs</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Transparent pricing. No discovery fees. No hidden costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-surface border border-border rounded-2xl p-8 text-left">
              <h3 className="text-lg font-semibold mb-2">Landing Page</h3>
              <p className="text-3xl font-extrabold text-text-primary">$1,000</p>
              <p className="text-text-muted text-sm mt-1">/project</p>
              <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                <li>✓ Single page with services + pricing</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form + quote request</li>
                <li>✓ Service area information</li>
                <li>✓ Basic local SEO</li>
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
                <li>✓ Service area map pages</li>
                <li>✓ Seasonal pricing integration</li>
                <li>✓ Review & testimonial widgets</li>
                <li>✓ Advanced local SEO</li>
                <li>✓ Online quote request system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            See what I'd do with your site
          </h2>
          <p className="text-text-secondary mb-8">
            I'll audit your current website or online presence for free. No
            catch, no pressure. If what you have is working, I'll tell you.
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
