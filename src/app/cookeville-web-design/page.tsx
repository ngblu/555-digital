import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookeville Web Design for Service Businesses | 555 Digital",
  description:
    "I build fast, custom websites for Cookeville and Upper Cumberland service businesses. Local web design that helps you get found and get hired.",
  openGraph: {
    title: "Cookeville Web Design for Service Businesses | 555 Digital",
    description:
      "Custom websites for Cookeville and Upper Cumberland service businesses. Fast, local-focused design that converts visitors into customers.",
    url: "https://www.555digital.dev/cookeville-web-design",
  },
  alternates: { canonical: "https://www.555digital.dev/cookeville-web-design" },
};

export default function CookevilleWebDesignPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Web Design in Cookeville, TN
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Cookeville Area Service Businesses{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Deserve Better Sites
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            I'm based in the Upper Cumberland and I know this market. Most service
            businesses around Cookeville are running on outdated websites, or worse,
            no website at all. I build fast, custom sites that help local businesses
            get found online and turn visitors into customers, without the headache
            of managing a slow, bloated platform.
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

      {/* Why a local site matters */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Your customers are searching online
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Cookeville and the Upper Cumberland have a strong small-business
                community. But too many local service companies rely on word of mouth
                alone. When someone new moves to town, or a homeowner needs a
                contractor they haven't used before, they're Googling it. If you
                don't have a solid website, you don't show up.
              </p>
              <p>
                I understand the local market because I live here. I know what
                matters to Cookeville area businesses: a site that loads fast on
                spotty rural connections, looks professional, and makes it easy for
                customers to call or request a quote.
              </p>
              <p>
                No templates. No page builders. Just a custom site built to perform.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              What Local Businesses Get
            </h3>
            <ul className="space-y-4">
              {[
                "A fast, custom site that loads anywhere",
                "Design that looks professional and builds trust",
                "Local SEO so you show up in Cookeville-area searches",
                "Clear calls to action that drive calls and quotes",
                "Mobile-first design for customers on their phones",
                "Clean code with no page builder bloat",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-primary shrink-0 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Understanding local business needs */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">
            A website built with local understanding
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-6">
            Big agencies don't get Cookeville. They'll sell you a generic template
            and disappear. I live and work here. When I build a site for a Cookeville
            service business, I understand the area you serve, the customers you're
            trying to reach, and what it takes to compete locally online.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            From Putnam County contractors to service businesses serving the entire
            Upper Cumberland, I build sites that reflect your business and actually
            bring in leads. Simple, fast, and effective.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center bg-surface/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">
            Let's build something that works for your Cookeville business
          </h2>
          <p className="text-text-secondary mb-8">
            If you're ready for a website that loads fast, looks professional, and
            helps customers find you, I'd love to hear about your business.
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
