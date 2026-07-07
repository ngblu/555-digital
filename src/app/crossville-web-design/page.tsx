import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crossville Web Design for Service Businesses | 555 Digital",
  description:
    "I build fast, custom websites for Crossville area service businesses. Local web design that helps small businesses get found online and attract more customers.",
  openGraph: {
    title: "Crossville Web Design for Service Businesses | 555 Digital",
    description:
      "Custom websites for Crossville and Cumberland County service businesses. Fast, local-focused design that helps small businesses grow.",
    url: "https://www.555digital.dev/crossville-web-design",
  },
  alternates: { canonical: "https://www.555digital.dev/crossville-web-design" },
};

export default function CrossvilleWebDesignPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Web Design in Crossville, TN
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Crossville Small Businesses{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Need a Strong Online Presence
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Crossville's service businesses keep this community running. But too many
            of them are invisible online. A professional website isn't a luxury
            anymore, it's how customers find you. I build fast, custom sites for
            Crossville and Cumberland County businesses that help you get discovered,
            build trust, and win more customers.
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

      {/* Small business focus */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Small business, big online opportunity
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Crossville has a tight-knit business community, and word of mouth
                still matters here. But more and more customers, both locals and
                newcomers to the Plateau, are searching online first. If your business
                doesn't have a professional website, you're missing out on those
                customers.
              </p>
              <p>
                I build websites specifically for small service businesses. Not
                bloated agency sites with a dozen pages you don't need. Just a clean,
                fast site that tells people what you do, shows you're the real deal,
                and makes it dead simple to get in touch.
              </p>
              <p>
                Fair pricing, straightforward process, and a site you'll actually be
                proud to send people to.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              What Crossville Businesses Get
            </h3>
            <ul className="space-y-4">
              {[
                "A fast-loading site that works on any device",
                "Clean, professional design that builds credibility",
                "Local SEO targeting Crossville and Cumberland County",
                "Simple, effective calls to action",
                "No ongoing maintenance headaches",
                "Straightforward pricing with no surprises",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-primary shrink-0 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competing locally */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">
            Compete online, even as a small business
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-6">
            You don't need a massive marketing budget to compete online in Crossville.
            A well-built website with solid local SEO can put you right alongside the
            bigger names when someone searches for services in Cumberland County. It's
            not about who spends the most, it's about who has a fast, clear site that
            Google trusts.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            Whether you're a contractor, a home service provider, or any small
            business serving the Crossville area, a custom website is one of the best
            investments you can make in your business's future.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center bg-surface/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to get your Crossville business online?
          </h2>
          <p className="text-text-secondary mb-8">
            I build custom websites that help small businesses get found, earn trust,
            and win more customers. Let's talk about what you need.
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
