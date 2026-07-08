import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Detailing Website Design | 555 Digital",
  description:
    "I build high-performance websites for auto detailing businesses. Custom design, fast load times, and free PageSpeed audit. Detailing websites that actually get calls.",
  openGraph: {
    title: "Auto Detailing Website Design | 555 Digital",
    description:
      "I build high-performance websites for auto detailing businesses. Free audit included.",
    url: "https://www.555digital.dev/detailing-websites",
  },
  alternates: { canonical: "https://www.555digital.dev/detailing-websites" },
};

export default function DetailingPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            For Auto Detailers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Detailing Websites That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fill Your Calendar
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Your work speaks for itself. But if customers can't find you online,
            they're booking the shop down the street. I build detailing websites
            that rank on Google and turn visitors into booked appointments.
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
              See Detailing Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Most detailers are invisible online</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Mobile detailers run their whole business through a Facebook page
                or Instagram. That works until someone Googles "auto detail near me"
                and you don't show up at all. Every one of those searches is a
                potential booking walking past you.
              </p>
              <p>
                A real website with pricing, a before/after gallery, and proper
                local SEO changes everything. Businesses that switch from a Facebook-only
                presence to a proper site consistently show up higher on Google and
                get more quote requests, often within the first month.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              What I Fix
            </h3>
            <ul className="space-y-4">
              {[
                "Facebook-only presence, no Google ranking",
                "No pricing or service menu online",
                "Zero before/after photo galleries",
                "No online booking or quote forms",
                "Mobile pages that don't work on phones",
                "Competing detailers outranking you locally",
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
            href="/#portfolio"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:gap-2.5 transition-all"
          >
            See my work <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">What a detailing website costs</h2>
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
                <li>✓ Before/after photo gallery</li>
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
                <li>✓ Service menu with package tiers</li>
                <li>✓ Online booking + deposits</li>
                <li>✓ Before/after project gallery</li>
                <li>✓ Advanced local SEO</li>
                <li>✓ Review integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to get found on Google?
          </h2>
          <p className="text-text-secondary mb-8">
            I'll audit your current online presence for free. If your Facebook
            page is working fine, I'll tell you. If not, I'll show you exactly
            what to fix.
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
