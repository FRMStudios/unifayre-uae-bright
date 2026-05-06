/**
 * LandingFooter — bright variant.
 * Warm dark coffee footer for contrast against the cream page above.
 */

import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="relative bg-[color:var(--earth-deep)] text-[color:var(--bg)]">
      <div className="earth-line" />

      <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--bg)]">
                <span className="absolute inset-[3px] rounded-full bg-[color:var(--earth-deep)]" />
              </span>
              <span className="font-display text-[1.7rem] font-medium tracking-[-0.01em]">
                Unifayre
              </span>
              <span className="rounded-full border border-[color:var(--bg)]/25 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--bg)]/85">
                Foods
              </span>
            </div>
            <p className="max-w-sm font-display text-[1.2rem] font-medium italic leading-snug tracking-tight text-[color:var(--bg)]">
              Frozen food, built for the Gulf&rsquo;s best kitchens.
            </p>
            <p className="max-w-sm text-[0.86rem] leading-relaxed text-[color:var(--bg)]/70">
              Unifayre Foods is the export identity of Chatha Foods Limited.
              Over 30 years of frozen food manufacturing from Mohali, India.
            </p>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--bg)]/75">
              UAE Desk
            </h4>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.92rem] text-[color:var(--bg)]/80 transition-colors hover:text-[color:var(--bg)]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:uae@unifayre.com"
                  className="text-[0.92rem] text-[color:var(--bg)]/80 transition-colors hover:text-[color:var(--bg)]"
                >
                  uae@unifayre.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--bg)]/75">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href="#products"
                  className="text-[0.92rem] text-[color:var(--bg)]/80 transition-colors hover:text-[color:var(--bg)]"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  className="text-[0.92rem] text-[color:var(--bg)]/80 transition-colors hover:text-[color:var(--bg)]"
                >
                  Why Unifayre
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[0.92rem] font-medium text-[color:var(--bg)] transition-colors hover:text-[color:var(--bg-warm)]"
                >
                  Request Sample
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--bg)]/15">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 px-5 py-6 text-[0.78rem] text-[color:var(--bg)]/65 md:flex-row md:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; 2026 Unifayre Foods</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--bg)]/30" />
            <span>A Chatha Foods Limited brand</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--bg)]/30" />
            <span>BSE Listed</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:text-[color:var(--bg)]" href="#">
              Privacy
            </a>
            <a className="hover:text-[color:var(--bg)]" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
