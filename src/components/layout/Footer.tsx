import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Website Redesign", href: "/#services" },
    { label: "Custom Development", href: "/#services" },
    { label: "SEO Optimization", href: "/#services" },
    { label: "Speed Optimization", href: "/#services" },
    { label: "Ongoing Support", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 mb-4">
              <span className="text-primary font-extrabold text-2xl">555</span>
              <span className="text-text-primary font-semibold text-lg">
                Digital
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              I find businesses with bad websites and rebuild them into
              something that actually works.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-text-primary font-semibold text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-text-muted text-sm">
              <li>contact@555digital.dev</li>
              <li>Based in the US</li>
            </ul>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-border text-text-primary font-medium px-5 py-2 rounded-lg hover:border-primary/50 transition-all duration-300 text-sm mt-5"
            >
              Get a Free Audit
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} 555 Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text-muted text-xs hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted text-xs hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
