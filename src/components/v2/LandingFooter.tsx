/**
 * LandingFooter — Restoria-inspired forest green footer with gold accents.
 */

import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--green-deep)] text-[color:var(--cream-on-green)]">
      <div className="gold-line" />

      {/* Decorative ornaments */}
      <div
        aria-hidden
        className="cream-blob pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-30"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
        {/* Newsletter band */}
        <div className="mb-14 flex flex-col items-center gap-4 border-b border-[color:var(--gold)]/20 pb-12 text-center md:mb-16 md:pb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
              Our Newsletter
            </span>
            <span className="h-px w-10 bg-[color:var(--gold)]" />
          </div>
          <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium leading-tight tracking-tight">
            Subscribe to our latest news.
          </h3>
          <form className="mt-3 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--green-deep)]/60 px-5 text-[0.92rem] text-[color:var(--cream-on-green)] placeholder:text-[color:var(--cream-on-green)]/55 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
            />
            <button
              type="submit"
              className="btn-gold inline-flex h-12 items-center justify-center rounded-full px-6 text-[0.86rem] font-semibold tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--gold)]">
                <span className="absolute inset-[3px] rounded-full bg-[color:var(--green-deep)]" />
              </span>
              <span className="font-display text-[1.7rem] font-medium tracking-[-0.01em]">
                Unifayre
              </span>
              <span className="rounded-full border border-[color:var(--gold)]/30 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">
                Foods
              </span>
            </div>
            <p className="max-w-sm font-display text-[1.2rem] font-medium italic leading-snug tracking-tight">
              Frozen food, built for the Gulf&rsquo;s best kitchens.
            </p>
            <p className="max-w-sm text-[0.86rem] leading-relaxed text-[color:var(--cream-on-green)]/70">
              Unifayre Foods is the export identity of Chatha Foods Limited.
              Over 30 years of frozen food manufacturing from Mohali, India.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <SocialLink href="#" label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 21v-7h2.5l.5-3h-3v-2c0-.9.5-1.5 2-1.5h1V5c-.5-.1-1.5-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.1V11H8v3h2v7h3.5z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 18H5.5v-7H8v7zM6.7 9.7c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zM18.5 18H16v-3.6c0-.9 0-2-1.2-2s-1.4 1-1.4 2V18H10.9v-7h2.4v1c.3-.6 1.1-1.2 2.3-1.2 2.5 0 2.9 1.6 2.9 3.8V18z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <Column
            title="Range"
            items={[
              { label: "Flatbreads", href: "#products" },
              { label: "Frozen-to-Fry", href: "#products" },
              { label: "Base Gravies", href: "#products" },
              { label: "Retort Rice", href: "#products" },
            ]}
          />

          <Column
            title="Company"
            items={[
              { label: "Why Unifayre", href: "#why" },
              { label: "Our Range", href: "#products" },
              { label: "Sample Request", href: "#contact" },
            ]}
          />

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">
              UAE Desk
            </h4>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.92rem] text-[color:var(--cream-on-green)]/80 transition-colors hover:text-[color:var(--gold)]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:uae@unifayre.com"
                  className="text-[0.92rem] text-[color:var(--cream-on-green)]/80 transition-colors hover:text-[color:var(--gold)]"
                >
                  uae@unifayre.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--gold)]/15">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 px-5 py-6 text-[0.78rem] text-[color:var(--cream-on-green)]/65 md:flex-row md:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; 2026 Unifayre Foods</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]/40" />
            <span>A Chatha Foods Limited brand</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]/40" />
            <span>BSE Listed</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:text-[color:var(--gold)]" href="#">
              Privacy
            </a>
            <a className="hover:text-[color:var(--gold)]" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">
        {title}
      </h4>
      <ul className="mt-5 space-y-2.5">
        {items.map((p) => (
          <li key={p.label}>
            <a
              href={p.href}
              className="text-[0.92rem] text-[color:var(--cream-on-green)]/80 transition-colors hover:text-[color:var(--gold)]"
            >
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold)]/30 text-[color:var(--cream-on-green)]/80 transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--green-deep)]"
    >
      {children}
    </a>
  );
}
