import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Landscaping Website Cost? | 555 Digital",
  description:
    "Real pricing for landscaping websites in 2025. Landing pages from $1,000, full sites from $2,500. No hidden fees, no discovery phase invoices.",
  openGraph: {
    title: "How Much Does a Landscaping Website Cost? (2025)",
    description:
      "Landing pages from $1,000, full landscaping websites from $2,500. Transparent pricing breakdown.",
    url: "https://www.555digital.dev/blog/landscaping-website-cost",
  },
  alternates: { canonical: "https://www.555digital.dev/blog/landscaping-website-cost" },
};

export default function BlogPost() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            How Much Does a Landscaping Website Cost in 2025?
          </h1>
          <p className="text-text-muted text-sm mt-4">By Noah · June 2025 · 5 min read</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg text-text-primary">
            If you're a landscaping company owner wondering what a real website costs, you've
            probably gotten answers ranging from "$500 on Fiverr" to "$15,000 from an agency."
            Both numbers are real, and neither tells the whole story.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">The real price range</h2>
          <p>
            A landscaping website costs between <strong className="text-text-primary">$1,000 and $5,000</strong> for
            something professional that actually generates leads. Here's what you get at each tier:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
            {[
              { tier: "DIY / Template", price: "$0–500", desc: "Wix or Squarespace. You build it yourself. Looks okay but loads slow and won't rank on Google for competitive searches." },
              { tier: "Freelancer", price: "$1,000–3,000", desc: "A solo developer builds you a custom site. Fast, SEO-optimized, and you own the code. This is the sweet spot for most landscaping companies." },
              { tier: "Agency", price: "$5,000–15,000+", desc: "Full-service agency with account managers, strategy decks, and multi-month timelines. Overkill unless you need e-commerce or enterprise features." },
            ].map((t) => (
              <div key={t.tier} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-text-primary font-semibold mb-1">{t.tier}</h3>
                <p className="text-primary font-bold text-xl mb-2">{t.price}</p>
                <p className="text-text-muted text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">What you actually need (and what's fluff)</h2>
          <p>
            A landscaping website needs to do four things: show up on Google, load fast, look
            professional, and get people to call you. Everything else is nice-to-have.
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li><strong className="text-text-primary">Mobile-first design</strong>, 70% of your traffic is on a phone. If your site doesn't work on mobile, you're burning money.</li>
            <li><strong className="text-text-primary">Service area pages</strong>, One page per city you serve. This is how you rank for "landscaper [city]" instead of just your business name.</li>
            <li><strong className="text-text-primary">Photo gallery that loads</strong>, Your work is visual. A gallery that takes 8 seconds to load is worse than no gallery at all.</li>
            <li><strong className="text-text-primary">Online booking or quote form</strong>, Every phone call you don't have to take is time you can spend on a job site.</li>
            <li><strong className="text-text-primary">Google Business Profile integration</strong>, Your GBP and website need to work together. Reviews, photos, and posts should flow between them.</li>
          </ul>

          <p>What you don't need: a blog (unless you plan to write regularly), custom animations, a
          "meet the team" page for a solo operation, or an agency that bills you $200/hour to attend
          their own meetings.</p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">Why template sites are a trap</h2>
          <p>
            Wix and Squarespace advertise "$15/month websites." What they don't tell you: the
            free templates load in 8-12 seconds, don't rank for competitive local searches, and
            look identical to every other landscaping site in your city. If a homeowner Googles
            "landscaper near me" and sees three sites that all look the same, they're picking
            based on reviews, not your website. A custom site stands out.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">What I charge (transparently)</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Landing Page</h3>
              <p className="text-3xl font-extrabold text-text-primary">$1,000</p>
              <p className="text-text-muted text-sm mt-1 mb-4">One-time, you own it forever</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>✓ Single page with all your info</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form + quote requests</li>
                <li>✓ Photo gallery</li>
                <li>✓ Basic SEO setup</li>
                <li>✓ 1 month support</li>
              </ul>
            </div>
            <div className="bg-surface border-2 border-primary rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Full Website</h3>
              <p className="text-3xl font-extrabold text-text-primary">$2,500</p>
              <p className="text-text-muted text-sm mt-1 mb-4">One-time, you own it forever</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>✓ Everything in Landing Page</li>
                <li>✓ 5 pages (Home, Services, Areas, Gallery, Contact)</li>
                <li>✓ Service area pages for SEO</li>
                <li>✓ Online booking system</li>
                <li>✓ Advanced local SEO</li>
                <li>✓ 3 months support</li>
              </ul>
            </div>
          </div>

          <p>Payment is split 50/50: half to start, half when the site launches. No surprises, no
          scope creep invoices, no monthly retainers unless you want ongoing support ($99/mo).</p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">Is it worth it?</h2>
          <p>
            A landscaping job averages $1,500–3,000. If a better website brings in two extra
            jobs per month, it pays for itself in 30 days. One of my clients, GreenEdge
            Landscaping, saw a 140% increase in calls and 80% more bookings after their rebuild.
            Their site paid for itself in the first two weeks.
          </p>

          <div className="bg-surface border border-border rounded-2xl p-8 my-10 not-prose">
            <h3 className="text-xl font-bold text-text-primary mb-2">Want a free audit of your current site?</h3>
            <p className="text-text-secondary mb-6">
              I'll run a full PageSpeed and SEO analysis and tell you exactly what's costing
              you customers. No pitch, no pressure. If your site is already great, I'll tell you.
            </p>
            <a href="/#contact" className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base">
              Get Your Free Audit
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/landscaping-websites" className="text-primary text-sm hover:underline">
            ← Landscaping website design services
          </Link>
        </footer>
      </article>
    </div>
  );
}
