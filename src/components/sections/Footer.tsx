import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/data";

const PRODUCT_LINKS = [
  { label: "Vegetarian", href: "/vegetarian" },
  { label: "Non-Vegetarian", href: "/non-vegetarian" },
  { label: "Roti Canai", href: "/vegetarian#flatbreads" },
  { label: "Tandoori Kebab", href: "/non-vegetarian#chicken" },
];

const COMPANY_LINKS = [
  { label: "Why Unifayre", href: "/why-unifayre" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "For UAE", href: "/for-uae" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--bg-charcoal)] text-[color:var(--text-primary)]">
      {/* Top gold hairline */}
      <div className="gold-line" />

      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-14">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--accent-gold)]">
                <span className="absolute inset-[3px] rounded-full bg-[color:var(--bg-deep)]" />
              </span>
              <span className="font-display text-[1.7rem] font-semibold tracking-[-0.02em]">
                Unifayre
              </span>
              <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-gold)]">
                Foods
              </span>
            </div>
            <p className="max-w-sm font-display text-[1.25rem] font-medium italic leading-snug tracking-[-0.01em] text-[color:var(--text-primary)]">
              Frozen food, built for the Gulf&rsquo;s best kitchens.
            </p>
            <p className="max-w-sm text-[0.86rem] leading-relaxed text-[color:var(--text-secondary)]">
              Unifayre Foods is the export identity of Chatha Foods Limited.
              Over 30 years of frozen food manufacturing from Mohali, India.
            </p>
          </div>

          <FooterCol title="Range" items={PRODUCT_LINKS} />
          <FooterCol title="Company" items={COMPANY_LINKS} />

          <div>
            <h4 className="eyebrow mb-5 text-[color:var(--accent-gold)]">
              UAE Desk
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.92rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:uae@unifayre.com"
                  className="text-[0.92rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  uae@unifayre.com
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[0.92rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
                >
                  Request Partnership Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--border-subtle)]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-4 px-5 py-6 text-[0.78rem] text-[color:var(--text-secondary)] md:flex-row md:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; 2026 Unifayre Foods</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]/40" />
            <span>A Chatha Foods Limited brand</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]/40" />
            <span>BSE Listed</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:text-[color:var(--text-primary)]" href="#">
              Privacy
            </a>
            <a className="hover:text-[color:var(--text-primary)]" href="#">
              Terms
            </a>
            <a className="hover:text-[color:var(--text-primary)]" href="#">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow mb-5 text-[color:var(--accent-gold)]">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((p) => (
          <li key={p.label}>
            <a
              href={p.href}
              className="text-[0.92rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
            >
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
