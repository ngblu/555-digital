import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-text-muted text-sm mt-1">Last updated June 2025</p>
        </div>

        <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">The agreement</h2>
            <p>
              By hiring 555 Digital for a project, you agree to these terms. If
              something here doesn't work for you, let me know before we start
              and I'm happy to adjust.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Payment</h2>
            <p>
              Standard projects use a 50/50 split: 50% to start, 50% on launch.
              Custom projects are quoted upfront with agreed milestones. Invoices
              are sent via email and are due within 14 days unless otherwise noted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Revisions</h2>
            <p>
              Each tier includes a set number of design revisions. Landing Page
              includes 2 rounds, Full Website includes unlimited revisions during
              the design phase. Changes requested after sign-off or outside the
              original scope may require a separate quote.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Ownership</h2>
            <p>
              You own 100% of the final deliverables: code, design assets, content,
              and domain. I reserve the right to display the finished project in
              my portfolio unless you request otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Timeline</h2>
            <p>
              Typical projects take 2 to 4 weeks. Delays caused by you (missing
              content, unavailable for feedback) extend the timeline
              accordingly. I'll keep you posted if anything shifts on my end.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Support</h2>
            <p>
              Each project tier includes a support period. After that, I offer
              monthly maintenance starting at $99/mo. Emergency fixes are
              prioritized regardless of plan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Refunds</h2>
            <p>
              If I can't deliver what we agreed on, you get a full refund. If
              you change your mind mid-project, the deposit covers work completed
              and is non-refundable. I'd rather lose a project than deliver
              something half-baked, so I won't hold you to a project I can't
              finish.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-text-primary font-semibold text-base">Contact</h2>
            <p>
              Questions about these terms?{" "}
              <a href="mailto:hello@555digital.dev" className="text-primary hover:underline">
                hello@555digital.dev
              </a>
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
