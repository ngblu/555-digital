import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design for Service Businesses: What Actually Matters | 555 Digital",
  description:
    "Most service business websites fail because they focus on looking pretty instead of generating leads. Here's what plumbers, landscapers, and HVAC companies actually need from a website.",
  openGraph: {
    title: "Web Design for Service Businesses: What Actually Matters",
    description:
      "Mobile-first design, local SEO, and conversion-focused layouts for service businesses. No fluff, no corporate buzzwords.",
    url: "https://www.555digital.dev/blog/web-design-for-service-businesses",
  },
  alternates: { canonical: "https://www.555digital.dev/blog/web-design-for-service-businesses" },
};

export default function BlogPost() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            Web Design for Service Businesses: What Actually Matters
          </h1>
          <p className="text-text-muted text-sm mt-4">By Noah · July 2025 · 6 min read</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg text-text-primary">
            If you run a plumbing company, a landscaping crew, or an HVAC business, your website
            has exactly one job: turn a visitor into a phone call or a booked appointment. Most
            service business websites fail at this, not because they look bad, but because they
            were built for the business owner instead of the customer.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            What your customers actually care about
          </h2>
          <p>
            Someone searching for "plumber near me" at 7 PM on a Tuesday is not admiring your
            parallax scrolling animation. They have a flooded basement. They want three things,
            and they want them immediately: your phone number, proof you're legit, and a reason
            to pick you over the other nine results on the page.
          </p>
          <p>
            A good service business website answers those three needs in under three seconds. If
            your phone number isn't visible without scrolling, if your reviews are buried on a
            separate page, or if your site takes five seconds to load while their basement floods
            further, they're already calling your competitor.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Mobile-first is not optional
          </h2>
          <p>
            Over 60% of searches for local services happen on a phone. Your customer is probably
            standing in their kitchen, phone in hand, staring at a broken water heater. Your site
            needs to work flawlessly on a small screen with a spotty 4G connection.
          </p>
          <p>
            Mobile-first doesn't just mean "it resizes." It means tap targets big enough for a
            thumb, phone numbers that are clickable, forms short enough to fill out one-handed,
            and images that load before the user loses patience. If your site was designed on a
            27-inch monitor and then "made responsive" as an afterthought, it's failing your
            mobile visitors.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            The difference between a site that exists and a site that converts
          </h2>
          <p>
            Plenty of service businesses have websites. Most of them are digital brochures: a
            logo, a few stock photos of smiling plumbers, a contact form nobody fills out, and a
            blog that hasn't been updated since 2019. These sites exist. They don't work.
          </p>
          <p>A site that converts has a few things in common:</p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Clear calls to action above the fold.</strong>{" "}
              The first thing a visitor sees should include your phone number and a clear path to
              book or call. Not a carousel, not a mission statement.
            </li>
            <li>
              <strong className="text-text-primary">Social proof front and center.</strong>{" "}
              Reviews, badges, "licensed and insured," years in business. People want to know
              you're real before they let you into their house.
            </li>
            <li>
              <strong className="text-text-primary">Service pages that answer questions.</strong>{" "}
              A plumber with a single "Services" page listing 20 things is leaving money on the
              table. A dedicated page for water heater repair, with details about what to expect,
              ranks better and converts better.
            </li>
            <li>
              <strong className="text-text-primary">Speed.</strong> If your site doesn't load in
              under three seconds, a significant chunk of visitors leave before they even see
              your logo. More on this in a later post.
            </li>
            <li>
              <strong className="text-text-primary">Local relevance.</strong> If you serve three
              counties but your site only mentions your office address, you're invisible to
              people searching in the towns where you actually work.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Why a template site costs more than you think
          </h2>
          <p>
            Wix, Squarespace, and the thousand other DIY builders market themselves as the cheap
            option. And at $20 to $50 a month, they look cheap until you factor in what they
            cost you in lost business.
          </p>
          <p>
            Template sites are slow because they load every feature whether you use it or not.
            They're rigid, so you can't build dedicated service area pages the way Google likes
            to see them. They look like every other site in your industry because you're all
            picking from the same 30 templates. And when something breaks or you want to make a
            real change, you're either stuck or paying someone to hack around the builder's
            limitations.
          </p>
          <p>
            A custom site built by a developer who understands service businesses costs more
            upfront, but it loads faster, ranks better, and is built around your specific
            customers instead of a generic template. It pays for itself.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            What I focus on when I build a service business site
          </h2>
          <p>Every site I build starts with the same foundation:</p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Performance first.</strong> A perfect design
              that takes six seconds to load is a bad design. I optimize for real-world mobile
              connections, not fiber on a desktop.
            </li>
            <li>
              <strong className="text-text-primary">Local SEO baked in.</strong> Schema markup,
              service area pages, Google Business Profile integration, and content structured
              the way search engines actually read it.
            </li>
            <li>
              <strong className="text-text-primary">Conversion over decoration.</strong> Every
              element on the page either moves a visitor toward calling you, or it's wasting
              space. I cut the fluff.
            </li>
            <li>
              <strong className="text-text-primary">You own the code.</strong> No monthly
              platform fees, no vendor lock-in. Your site is yours, and you can take it anywhere.
            </li>
          </ul>

          <p>
            The goal is simple: when someone in your service area searches for what you do, your
            site shows up, loads instantly, and convinces them to call. Everything else is
            noise.
          </p>

          <div className="bg-surface border border-border rounded-2xl p-8 my-10 not-prose">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Want a free audit of your current site?
            </h3>
            <p className="text-text-secondary mb-6">
              I'll run a full PageSpeed and SEO analysis and tell you exactly where your site is
              losing customers. No pitch, no obligation. If your site is already solid, I'll tell
              you that too.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-background font-semibold px-8 py-3.5 rounded-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-[1.02] text-base"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/blog" className="text-primary text-sm hover:underline">
            ← Back to blog
          </Link>
        </footer>
      </article>
    </div>
  );
}
