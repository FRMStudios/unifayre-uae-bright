"use client";

/**
 * LeadForm — bright variant.
 * Paper card on warm cream backdrop, earth accents, charcoal inputs.
 */

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import {
  INTEREST_CHIPS,
  COUNTRIES,
  BUSINESS_TYPES,
  WHATSAPP_URL,
} from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function LeadFormDark({ id = "contact" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleChip = (chip: string) => {
    setInterests((curr) =>
      curr.includes(chip) ? curr.filter((c) => c !== chip) : [...curr, chip]
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      country: data.get("country"),
      business: data.get("business"),
      interests,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setInterests([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id={id}
      className="bg-[color:var(--bg-warm)] py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-[860px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--earth)]">
            Partnership desk
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-ink">
            Request your{" "}
            <em className="italic text-[color:var(--earth)]">
              Partnership Kit
            </em>
            .
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Our UAE desk responds within 1 working day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="relative overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-[color:var(--bg-paper)] p-6 shadow-[0_30px_70px_-30px_rgba(42,37,32,0.18)] md:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--earth)]/40 bg-[color:var(--earth)]/15"
                >
                  <Check
                    className="h-7 w-7 text-[color:var(--earth)]"
                    strokeWidth={2.5}
                  />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ink">
                  Thank you. Received.
                </h3>
                <p className="max-w-sm text-base leading-relaxed text-ink-soft">
                  Our UAE desk will be in touch within 1 working day. For urgent
                  inquiries, WhatsApp us directly.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[color:var(--earth)] hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <Field label="Full Name" name="name" type="text" required placeholder="Your name" />
                <Field label="Company" name="company" type="text" required placeholder="Company / Brand" />
                <Field label="Business Email" name="email" type="email" required placeholder="you@company.com" />
                <Field label="WhatsApp / Phone" name="phone" type="tel" required placeholder="+971..." />
                <SelectField label="Country" name="country" required options={COUNTRIES} />
                <SelectField label="Business Type" name="business" required options={BUSINESS_TYPES} />

                <div className="md:col-span-2">
                  <label className="mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--earth)]">
                    Interested in (select any)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_CHIPS.map((chip) => {
                      const active = interests.includes(chip);
                      return (
                        <motion.button
                          type="button"
                          key={chip}
                          onClick={() => toggleChip(chip)}
                          animate={{ scale: active ? 1.02 : 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 22,
                          }}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.82rem] font-medium transition-all ${
                            active
                              ? "border-[color:var(--earth)] bg-[color:var(--earth)] text-[color:var(--bg)]"
                              : "border-[color:var(--line)] bg-[color:var(--bg)] text-ink-soft hover:border-[color:var(--earth)] hover:text-ink"
                          }`}
                        >
                          {active && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                          {chip}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-earth group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[0.95rem] font-semibold shadow-[0_14px_36px_-12px_rgba(124,92,61,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 text-center text-[0.85rem] text-red-700">
                      Something went wrong. Please try again or WhatsApp us.
                    </p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-ink-soft transition-colors hover:text-[color:var(--earth)]"
          >
            <MessageCircle className="h-4 w-4" />
            Prefer to chat? WhatsApp our UAE desk
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--earth)]"
      >
        {label}
        {required && <span className="text-[color:var(--earth)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] px-4 text-[0.95rem] text-ink placeholder:text-ink-muted transition-colors focus:border-[color:var(--earth)] focus:outline-none focus:ring-2 focus:ring-[color:var(--earth)]/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--earth)]"
      >
        {label}
        {required && <span className="text-[color:var(--earth)]"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-12 appearance-none rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%237C5C3D%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')] bg-[length:1.1rem_1.1rem] bg-[right_1rem_center] bg-no-repeat px-4 pr-10 text-[0.95rem] text-ink transition-colors focus:border-[color:var(--earth)] focus:outline-none focus:ring-2 focus:ring-[color:var(--earth)]/30"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
