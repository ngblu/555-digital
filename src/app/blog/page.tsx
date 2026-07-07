import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | 555 Digital",
  description:
    "Web design tips, SEO guides, and practical advice for service businesses. Written by a solo developer who actually builds sites, not a content farm.",
  openGraph: {
    title: "Blog | 555 Digital",
    description:
      "Web design tips, SEO guides, and practical advice for service businesses. No fluff, no AI-generated listicles.",
    url: "https://www.555digital.dev/blog",
  },
  alternates: { canonical: "https://www.555digital.dev/blog" },
};

const posts = [
  {
    slug: "web-design-for-service-businesses",
    title: "Web Design for Service Businesses: What Actually Matters",
    date: "July 2025",
    excerpt:
      "Plumbers, landscapers, and HVAC companies don't need award-winning design. They need a site that loads fast, shows up on Google, and turns visitors into calls. Here's what actually makes a difference.",
  },
  {
    slug: "why-your-website-speed-matters",
    title: "Why Your Website Speed Matters (And What It's Costing You)",
    date: "July 2025",
    excerpt:
      "A slow website isn't just annoying, it's actively losing you customers. Every extra second of load time drops your conversion rate, and Google notices too.",
  },
  {
    slug: "local-seo-for-small-businesses",
    title: "Local SEO for Small Businesses: A No-BS Guide",
    date: "July 2025",
    excerpt:
      "You don't need to be an SEO expert to show up in local searches. A few straightforward steps can put your business in front of people who are already looking for what you do.",
  },
  {
    slug: "landscaping-website-cost",
    title: "How Much Does a Landscaping Website Cost in 2025?",
    date: "June 2025",
    excerpt:
      "Real pricing for landscaping websites. Landing pages from $1,000, full sites from $2,500. No hidden fees, no discovery phase invoices.",
  },
];

export default function BlogIndex() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            Web Design Tips for Service Businesses
          </h1>
          <p className="text-text-muted text-lg mt-4 max-w-2xl">
            Practical, no-fluff articles about websites, SEO, and getting more
            customers online. Written by a solo developer who builds sites for
            a living, not a content team chasing keywords.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]"
            >
              <span className="text-text-muted text-xs font-medium uppercase tracking-wider">
                {post.date}
              </span>
              <h2 className="text-xl font-bold text-text-primary mt-2 mb-3 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <Link
            href="/"
            className="text-primary text-sm hover:underline"
          >
            ← Back to 555 Digital
          </Link>
        </footer>
      </div>
    </div>
  );
}
