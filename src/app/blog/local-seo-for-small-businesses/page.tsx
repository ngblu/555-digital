import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO for Small Businesses: A No-BS Guide | 555 Digital",
  description:
    "Practical local SEO for plumbers, landscapers, and service businesses. Google Business Profile optimization, local keywords, citations, and reviews explained without the jargon.",
  openGraph: {
    title: "Local SEO for Small Businesses: A No-BS Guide",
    description:
      "Google Business Profile, local keywords, citation building, and review management for service businesses. Actionable, no-fluff advice.",
    url: "https://www.555digital.dev/blog/local-seo-for-small-businesses",
  },
  alternates: { canonical: "https://www.555digital.dev/blog/local-seo-for-small-businesses" },
};

export default function BlogPost() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            Local SEO for Small Businesses: A No-BS Guide
          </h1>
          <p className="text-text-muted text-sm mt-4">By Noah · July 2025 · 6 min read</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg text-text-primary">
            Local SEO sounds complicated. The industry sells it like some dark art requiring
            secret keyword strategies and mysterious backlink networks. It's not. At its core,
            local SEO is about making sure that when someone in your area searches for what you
            do, your business shows up. Here's how to actually do it, in plain English.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Start with your Google Business Profile
          </h2>
          <p>
            Your Google Business Profile is the single most important piece of your local SEO.
            When someone searches for "electrician near me," the map pack at the top of the
            results, with those three businesses and their star ratings, that's powered by
            Google Business Profiles. If yours isn't claimed, optimized, and active, you're
            invisible to the people searching closest to you.
          </p>
          <p>Here's what to do, in order of importance:</p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Claim and verify your profile.</strong> If
              you haven't done this yet, stop reading and do it now. Go to
              google.com/business. It's free.
            </li>
            <li>
              <strong className="text-text-primary">Fill out every single field.</strong> Hours,
              services, service areas, phone number, website link, description, attributes like
              "family-owned" or "women-led." Google rewards completeness.
            </li>
            <li>
              <strong className="text-text-primary">Pick the right primary category.</strong> Not
              "Contractor," not "Home Services," the most specific one that matches what you
              actually do. "Plumber" if you're a plumber. "Landscaper" if you're a landscaper.
              This matters more than you'd think.
            </li>
            <li>
              <strong className="text-text-primary">Add secondary categories.</strong> If you're
              a plumber who also does water heater repair and drain cleaning, add those. They
              expand the searches you show up for.
            </li>
            <li>
              <strong className="text-text-primary">Upload real photos regularly.</strong> Not
              stock photos. Photos of your work, your team, your truck, your completed jobs. Add
              a few new ones every couple of weeks. Google sees an active profile as more
              relevant.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Reviews are a ranking factor
          </h2>
          <p>
            The number of reviews you have, your average rating, and how recently you've gotten
            reviews all influence where you appear in local results. A business with 80 reviews
            at 4.8 stars is going to outrank a business with 8 reviews at 4.9 stars, all else
            equal. Volume matters.
          </p>
          <p>
            But you can't just ask once and forget about it. Make asking for reviews part of your
            process. Send a follow-up text or email after every completed job with a direct link
            to your Google review page. I tell the service businesses I work with: if you do ten
            jobs a week and ask every one of those customers for a review, even a 20% response
            rate gets you eight new reviews a month. That compounds.
          </p>
          <p>
            And when you get a negative review, respond publicly. Don't argue. Apologize, offer
            to make it right, and take the conversation offline. Future customers read your
            responses more than the original reviews.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Local keywords are simpler than you think
          </h2>
          <p>
            You don't need a keyword research tool that costs $100 a month. Local keywords
            follow a simple formula: [service] + [location]. "Plumber Nashville." "Landscaper
            Murfreesboro." "HVAC repair Franklin." Your goal is to have pages on your website
            that naturally use these combinations.
          </p>
          <p>
            The easiest way to do this is service area pages. If you serve ten towns, build a
            page for each one. The page should describe what you do in that town, mention
            landmarks or neighborhoods you serve, and include your contact information. Don't
            just copy and paste the same text and swap the city name. Google can tell, and it
            won't help.
          </p>
          <p>
            Write like a human being. A page titled "Plumbing Services in Franklin, TN" with a
            paragraph about when you opened, what neighborhoods you serve, and the types of
            plumbing work you do there will outperform a page stuffed with "Franklin plumber
            Franklin plumbing Franklin TN plumber near me" every time.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Citations: consistency is everything
          </h2>
          <p>
            A citation is any online mention of your business name, address, and phone number
            (NAP). Yelp, Yellow Pages, Angi, the Chamber of Commerce website, industry
            directories. Google cross-references these to verify your business is legitimate.
            If your NAP is inconsistent across a dozen different directories, Google loses
            confidence in which information is correct, and your rankings suffer.
          </p>
          <p>Here's the practical approach:</p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Audit what's out there.</strong> Search your
              business name and phone number. Find every listing and make sure the name, address,
              and phone number are identical across all of them. Same abbreviations, same suite
              number format, same everything.
            </li>
            <li>
              <strong className="text-text-primary">Fix the inconsistencies.</strong> Go through
              each one and correct it. This is tedious but necessary. Services like BrightLocal
              can automate some of this if you'd rather not do it manually.
            </li>
            <li>
              <strong className="text-text-primary">Build new citations on reputable sites.</strong>{" "}
              Focus on the ones Google actually trusts: BBB, Yelp, your local Chamber of
              Commerce, and industry-specific directories. Skip the spammy ones.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Your website and your Google Business Profile need to work together
          </h2>
          <p>
            Your website should link to your Google Business Profile, and your GBP should link
            to your website. The NAP on your website footer should match your GBP exactly. Your
            services listed on your website should match the services and categories in your GBP.
            When everything aligns, Google sees a coherent picture of your business and rewards
            it with better visibility.
          </p>
          <p>
            This is one of the things I handle when I build a site for a service business. I
            make sure the schema markup, the NAP, the service pages, and the GBP are all
            pointing in the same direction. It's not glamorous, but it works.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Don't overcomplicate this
          </h2>
          <p>
            Local SEO is a long game, but it's a straightforward one. Claim your GBP. Fill it
            out completely. Ask for reviews consistently. Build a few service area pages. Keep
            your citations consistent. That's 80% of the results for 20% of the effort. The
            other 80% of what SEO agencies sell you, things like "advanced link building
            strategies" and "proprietary ranking algorithms," is mostly noise.
          </p>
          <p>
            If you do the basics right and keep at it, you'll outrank most of your competitors.
            Most of them aren't doing even half of what's in this post.
          </p>

          <div className="bg-surface border border-border rounded-2xl p-8 my-10 not-prose">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Want me to audit your local SEO?
            </h3>
            <p className="text-text-secondary mb-6">
              I'll look at your Google Business Profile and your website and tell you exactly
              what's holding you back in local search. No pitch, no contract, just an honest
              assessment.
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
