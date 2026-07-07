import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nashville Web Design for Service Businesses | 555 Digital",
  description:
    "I help Nashville service businesses get better websites. Fast, custom sites that rank locally and turn visitors into customers. Serving Nashville and Middle Tennessee.",
  openGraph: {
    title: "Nashville Web Design for Service Businesses | 555 Digital",
    description:
      "Custom websites for Nashville service businesses. Fast load times, local SEO, and sites that actually get calls.",
    url: "https://www.555digital.dev/nashville-web-design",
  },
  alternates: { canonical: "https://www.555digital.dev/nashville-web-design" },
};

export default function NashvilleWebDesignPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Web Design in Nashville, TN
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Nashville Businesses Need Sites{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              That Convert
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Nashville's service industry is competitive. When someone searches for
            a plumber, electrician, or HVAC company in Music City, they're choosing
            in seconds. If your site looks outdated or takes forever to load, you're
            losing those calls to someone else. I build fast, custom websites that
            help Nashville service businesses stand out and actually convert visitors
            into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base"
            >
              Start Your Project
            </a>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3.5 rounded-lg hover:border-primary/50 transition-all duration-300 text-base"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nashville Market Matters */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Standing out in the Nashville market
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Nashville isn't a small town anymore. With the city growing as fast
                as it is, service businesses face more competition than ever. A
                generic template site blends in with everyone else, and a slow
                site gets skipped before it even loads.
              </p>
              <p>
                I build websites that are fast on mobile, optimized for local search,
                and designed to turn a visitor into a lead. Whether you serve Davidson
                County or the broader Middle Tennessee area, your site should work as
                hard as you do.
              </p>
              <p>
                Every site I build is custom, no bloated page builders, no generic
                templates. Just clean code that loads fast and ranks well.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              What Nashville Service Businesses Get
            </h3>
            <ul className="space-y-4">
              {[
                "Fast load times that keep visitors around",
                "Mobile-first design for on-the-go customers",
                "Local SEO to rank for Nashville-area searches",
                "Clear calls to action that drive phone calls",
                "Clean, modern design that builds trust",
                "No page builders, no bloat, just clean code",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-primary shrink-0 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local SEO Focus */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">
            Local SEO that gets you found
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-6">
            Most of your customers are searching from their phones, right now, for
            services in Nashville. If your site isn't optimized for local search, it
            doesn't matter how good it looks. I build every site with local SEO built
            in from the start: proper heading structure, fast performance for mobile
            rankings, and content that tells Google exactly where you serve.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            When someone searches "Nashville electrician" or "HVAC repair near me,"
            a fast, well-optimized site is the difference between getting the call
            and getting passed over.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center bg-surface/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready for a website that works for your Nashville business?
          </h2>
          <p className="text-text-secondary mb-8">
            I build custom sites that load fast, rank locally, and turn browsers
            into customers. Let's talk about what your business needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
