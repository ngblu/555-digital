import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pressure Washing Website Design | 555 Digital",
  description:
    "I build high-performance websites for pressure washing and exterior cleaning companies. Custom design, fast load times, and free PageSpeed audit included.",
  openGraph: {
    title: "Pressure Washing Website Design | 555 Digital",
    description:
      "I build websites for pressure washing companies. Free audit included.",
    url: "https://555digital.dev/pressure-washing-websites",
  },
  alternates: { canonical: "https://555digital.dev/pressure-washing-websites" },
};

export default function PressureWashingPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            For Pressure Washing Companies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight">
            Pressure Washing Websites That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Power Wash Your Competition
            </span>
          </h1>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Most pressure washers get business through word of mouth and yard
            signs. That works until a homeowner searches "pressure washing near
            me" and hires the guy with the actual website. I make that guy you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/#contact" className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base">
              Get Your Free Audit
            </a>
            <Link href="/#portfolio" className="inline-flex items-center justify-center border border-border text-text-primary font-semibold px-8 py-3.5 rounded-lg hover:border-primary/50 transition-all duration-300 text-base">
              See Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">You're invisible to the people searching for you</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most pressure washing businesses run entirely on referrals and
                Facebook. That's great until spring hits and everyone Googles
                "pressure washing near me" at the same time. The companies with
                real websites get the calls. Everyone else gets passed over.
              </p>
              <p>
                I built a site for a pressure washing company that was running
                off a Facebook page. Now they show up on Google, have a proper
                gallery of their work, and get quote requests directly through
                the site instead of playing phone tag.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-6">
              What I Fix
            </h3>
            <ul className="space-y-4">
              {[
                "No website — Facebook page only",
                "No Google presence for local searches",
                "No photo gallery of completed jobs",
                "No online quote or booking system",
                "Seasonal pricing hard to communicate",
                "Competing washers outranking you",
              ].map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-danger shrink-0 mt-0.5">✗</span> {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Premier Pressure Washing
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Luis was running his entire pressure washing business through a
            Facebook page. No website, no Google presence, no way for customers
            to get a quote online. I built him a site with a job gallery, instant
            quotes, and proper local SEO. The booking form alone paid for the
            site in the first month.
          </p>
          <div className="flex gap-4 justify-center">
            <div>
              <span className="text-primary font-bold text-2xl">FB → Web</span>
              <span className="text-text-muted text-sm block">From Zero</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-2xl">Google</span>
              <span className="text-text-muted text-sm block">Now Ranking</span>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-primary font-bold text-2xl">Instant</span>
              <span className="text-text-muted text-sm block">Quote Forms</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">What a pressure washing website costs</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">Transparent pricing. No discovery fees. No hidden costs.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-surface border border-border rounded-2xl p-8 text-left">
              <h3 className="text-lg font-semibold mb-2">Landing Page</h3>
              <p className="text-3xl font-extrabold text-text-primary">$1,000</p>
              <p className="text-text-muted text-sm mt-1">/project</p>
              <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                <li>✓ Single page with services + pricing</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form + quote request</li>
                <li>✓ Job photo gallery</li>
                <li>✓ Basic local SEO</li>
              </ul>
            </div>
            <div className="bg-surface border-2 border-primary rounded-2xl p-8 text-left relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold mb-2">Full Website</h3>
              <p className="text-3xl font-extrabold text-text-primary">$2,500</p>
              <p className="text-text-muted text-sm mt-1">/project</p>
              <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                <li>✓ Everything in Landing Page</li>
                <li>✓ Service area map pages</li>
                <li>✓ Seasonal pricing display</li>
                <li>✓ Online quote + booking system</li>
                <li>✓ Advanced local SEO</li>
                <li>✓ Before/after project gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Ready to stop losing jobs to the other guy?</h2>
          <p className="text-text-secondary mb-8">
            I'll audit your current online presence for free. If your Facebook
            page is working, I'll tell you. If it's costing you jobs, I'll show
            you exactly what to fix.
          </p>
          <a href="/#contact" className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base">
            Get Your Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
