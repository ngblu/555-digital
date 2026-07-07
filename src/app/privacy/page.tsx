import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | 555 Digital",
  description: "How 555 Digital collects, uses, and protects your data. No tracking, no third-party sharing, just transparency.",
  alternates: {
    canonical: "https://www.555digital.dev/privacy",
  },
  openGraph: {
    title: "Privacy Policy | 555 Digital",
    description: "How 555 Digital collects, uses, and protects your data. No tracking, no third-party sharing, just transparency.",
    url: "https://www.555digital.dev/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-text-muted text-sm mt-1">Last updated June 2025</p>
        </div>

        <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">What I collect</h2>
            <p>
              When you submit the contact form, I receive your name, email address,
              website URL, budget information, and any message you include. I also
              automatically run a PageSpeed audit on your site to give you useful
              feedback fast.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">How I use it</h2>
            <p>
              Your information is used only to provide the services you requested:
              communicating about your project, building and maintaining your website,
              and managing invoices. I do not sell, rent, or share your data with
              third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Where it lives</h2>
            <p>
              Contact form submissions are stored on Vercel's infrastructure
              (US regions). The 555 Command Center dashboard uses Vercel Blob for
              cloud synchronization. No data is sent to external analytics or
              tracking services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Your rights</h2>
            <p>
              You can request a copy of your data, ask me to update or correct it,
              or request deletion at any time. Email me at contact@555digital.dev and
              I'll handle it within 30 days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">AI and automation</h2>
            <p>
              I use AI tools (including large language models like GPT and Claude)
              as part of my development workflow to help write code, generate content
              drafts, and automate routine tasks. Every piece of AI-generated output
              is reviewed, edited, and approved by a human before it reaches your
              site. Your business data is never used to train AI models, and no
              client information is shared with AI providers beyond what's necessary
              to complete your project.
            </p>
            <p>
              AI tools help me work faster and keep costs down, but the strategy,
              design decisions, and final quality control are always human. If you
              have questions about how AI is used in your project, just ask.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Cookies</h2>
            <p>
              The dashboard uses localStorage (browser storage) so your data
              persists between visits. No tracking cookies, no third-party
              analytics, no fingerprinting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Contact</h2>
            <p>
              Questions? Reach me at{" "}
              <a href="mailto:contact@555digital.dev" className="text-primary hover:underline">
                contact@555digital.dev
              </a>
              {" "}or call{" "}
              <a href="tel:+162****8803" className="text-primary hover:underline">
                (629) 335-8803
              </a>
              .
            </p>
          </section>
        </div>

        <Link href="/" className="inline-block text-primary text-sm hover:underline">
          ← Back
        </Link>
      </div>
    </div>
  );
}
