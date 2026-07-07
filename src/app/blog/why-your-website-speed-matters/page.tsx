import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your Website Speed Matters (And What It's Costing You) | 555 Digital",
  description:
    "A slow website kills conversions and tanks your Google rankings. Here's exactly how page speed affects your business and what you can do about it.",
  openGraph: {
    title: "Why Your Website Speed Matters (And What It's Costing You)",
    description:
      "Page speed directly impacts your bottom line. Learn what Core Web Vitals are, how slow sites lose customers, and what a fast site looks like.",
    url: "https://www.555digital.dev/blog/why-your-website-speed-matters",
  },
  alternates: { canonical: "https://www.555digital.dev/blog/why-your-website-speed-matters" },
};

export default function BlogPost() {
  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            Why Your Website Speed Matters (And What It's Costing You)
          </h1>
          <p className="text-text-muted text-sm mt-4">By Noah · July 2025 · 5 min read</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg text-text-primary">
            Nobody likes waiting for a website to load. But for a service business, a slow
            website isn't just annoying, it's expensive. Every extra second of load time chips
            away at your conversion rate, your Google rankings, and the trust people feel when
            they land on your page. Let me walk through exactly what's happening when your site
            drags its feet.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            How speed hits your conversion rate
          </h2>
          <p>
            Research from Google and others consistently shows that as page load time increases
            from one second to three seconds, bounce probability shoots up dramatically. For a
            service business, that bounce isn't a lost blog reader, it's a lost customer. Someone
            who needed a plumber, an electrician, or a landscaper just left your site and called
            someone else because your page took too long.
          </p>
          <p>
            On mobile, the problem is even worse. Mobile connections are slower and less reliable
            than desktop connections, but mobile is where your customers are searching. If your
            site loads in six seconds on your office WiFi, it might take ten or more on a phone
            in a neighborhood with spotty coverage. Those extra four seconds are costing you
            calls.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            Google cares about speed, which means you should too
          </h2>
          <p>
            Google uses page experience as a ranking signal. That's not speculation, it's
            documented. The metric they care about most is called Core Web Vitals, and it
            measures three things:
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Largest Contentful Paint (LCP).</strong> How
              long it takes for the main content of your page to load. Google wants this under
              2.5 seconds. Most template-built sites clock in at five to eight seconds.
            </li>
            <li>
              <strong className="text-text-primary">Interaction to Next Paint (INP).</strong> How
              responsive your page feels when someone taps or clicks. If your buttons lag after
              a tap, this score tanks.
            </li>
            <li>
              <strong className="text-text-primary">Cumulative Layout Shift (CLS).</strong> How
              much your page jumps around while loading. You know when you go to tap a button and
              an image suddenly loads above it and the button moves? That's CLS, and it's a
              terrible experience.
            </li>
          </ul>
          <p>
            If your Core Web Vitals scores are poor, Google notices. You might not drop from
            position one to position forty overnight, but in a competitive local market where five
            other companies are fighting for the same "plumber [city]" keywords, a slow site
            gives your competitors an edge over you.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            What's actually making your site slow
          </h2>
          <p>
            When I audit a slow service business site, I almost always find the same culprits:
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Oversized images.</strong> A photo straight
              from a modern phone is 4,000 pixels wide and several megabytes. Your website only
              needs it at 800 pixels wide, properly compressed. That's a 95% size reduction most
              sites never apply.
            </li>
            <li>
              <strong className="text-text-primary">Page builder bloat.</strong> Wix,
              Squarespace, and WordPress with a heavy theme load dozens of JavaScript and CSS
              files you never use. Every one of those files has to download before the page is
              interactive.
            </li>
            <li>
              <strong className="text-text-primary">Too many third-party scripts.</strong> Google
              Analytics, Facebook Pixel, live chat widgets, review widgets, Google Maps embeds.
              Each one is a separate network request, and each one can block the rest of your
              page from loading.
            </li>
            <li>
              <strong className="text-text-primary">No caching.</strong> If your server rebuilds
              the entire page from scratch every time someone visits, it wastes time and
              resources. Proper caching can cut load times in half with no visible change to the
              site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            What a fast site looks like
          </h2>
          <p>
            When I build a site, I target a sub-two-second load time on a 4G mobile connection.
            That means the page is fully interactive, not just showing a loading spinner. Here's
            what gets me there:
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              <strong className="text-text-primary">Static site generation.</strong> Pages are
              built once at deploy time and served as plain HTML files. No database queries, no
              server-side rendering on every request. Just instant delivery.
            </li>
            <li>
              <strong className="text-text-primary">Image optimization.</strong> Every image is
              served in modern formats like WebP at exactly the right size, with lazy loading so
              images below the fold don't block the page.
            </li>
            <li>
              <strong className="text-text-primary">Minimal JavaScript.</strong> A service
              business site doesn't need React hydration for a contact form. The less JavaScript
              you ship, the faster your page loads. I write just enough to make things
              interactive and nothing more.
            </li>
            <li>
              <strong className="text-text-primary">A CDN.</strong> Your site is served from
              servers close to your visitors, not from a single data center halfway across the
              country.
            </li>
          </ul>

          <p>
            The result is a site that loads before your visitor loses patience. It feels snappy.
            It doesn't jump around. And Google sees it as a well-built page worth ranking.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">The real cost</h2>
          <p>
            If your site loads in six seconds instead of two, and you lose even 10% of your
            potential leads to impatience, what does that cost you over a year? For a service
            business doing a few hundred jobs annually, that 10% could be five figures in
            revenue, gone because of images that could have been compressed in ten minutes.
          </p>
          <p>
            The businesses I work with often don't realize how slow their site is until I show
            them a PageSpeed report. They've gotten used to waiting for their own site, and they
            assume everyone else does too. But customers don't wait. They close the tab.
          </p>

          <div className="bg-surface border border-border rounded-2xl p-8 my-10 not-prose">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Find out how fast (or slow) your site really is
            </h3>
            <p className="text-text-secondary mb-6">
              I'll run a PageSpeed audit on your site and send you a report showing exactly
              where it's losing time, and what it would take to fix. No strings attached.
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
