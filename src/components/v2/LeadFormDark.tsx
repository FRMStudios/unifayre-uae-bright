"use client";

/**
 * LeadFormDark — V2 dark-theme partnership lead form.
 * Same fields and POST endpoint as the V1 LeadForm but restyled for the
 * navy + gold landing page.
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
      className="bg-[color:var(--bg-warm-shadow)] py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-[860px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
            Partnership desk
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
            Request your{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              Partnership Kit
            </em>
            .
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base font-light leading-relaxed text-[color:var(--text-primary)]/85">
            Our UAE desk responds within 1 working day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="relative overflow-hidden rounded-[24px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)] p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] md:p-10"
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
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border-gold)] bg-[color:var(--accent-gold)]/15"
                >
                  <Check
                    className="h-7 w-7 text-[color:var(--accent-gold)]"
                    strokeWidth={2.5}
                  />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight text-[color:var(--text-primary)]">
                  Thank you. Received.
                </h3>
                <p className="max-w-sm text-base font-light text-[color:var(--text-primary)]/80">
                  Our UAE desk will be in touch within 1 working day. For urgent
                  inquiries, WhatsApp us directly.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[color:var(--accent-gold)] hover:underline"
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
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Company"
                  name="company"
                  type="text"
                  required
                  placeholder="Company / Brand"
                />
                <Field
                  label="Business Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
                <Field
                  label="WhatsApp / Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+971..."
                />
                <SelectField
                  label="Country"
                  name="country"
                  required
                  options={COUNTRIES}
                />
                <SelectField
                  label="Business Type"
                  name="business"
                  required
                  options={BUSINESS_TYPES}
                />

                <div className="md:col-span-2">
                  <label className="mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-gold)]">
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
                              ? "border-[color:var(--accent-gold)] bg-[color:var(--accent-gold)] text-[color:var(--bg-deep)]"
                              : "border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] text-[color:var(--text-primary)]/80 hover:border-[color:var(--accent-gold)] hover:text-[color:var(--text-primary)]"
                          }`}
                        >
                          {active && (
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          )}
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
                    className="btn-gold group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[0.95rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
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
                    <p className="mt-3 text-center text-[0.85rem] text-red-400">
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
            className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent-gold)]"
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
        className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-gold)]"
      >
        {label}
        {required && <span className="text-[color:var(--accent-gold)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] px-4 text-[0.95rem] text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)] transition-colors focus:border-[color:var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-gold)]/30"
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
        className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-gold)]"
      >
        {label}
        {required && <span className="text-[color:var(--accent-gold)]"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-12 appearance-none rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23C9A961%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')] bg-[length:1.1rem_1.1rem] bg-[right_1rem_center] bg-no-repeat px-4 pr-10 text-[0.95rem] text-[color:var(--text-primary)] transition-colors focus:border-[color:var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-gold)]/30"
      >
        <option value="" disabled className="bg-[color:var(--bg-deep)]">
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[color:var(--bg-deep)]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
