"use client";

import { useEffect, useState, type FormEvent } from "react";
import { RevealHeading } from "@/components/ScrollReveal";
import { site, whatsappLink } from "@/lib/site";

const needs = [
  { id: "business-website", label: "New website" },
  { id: "online-store", label: "Online store" },
  { id: "booking-system", label: "Booking system" },
  { id: "improve", label: "Improve my site" },
  { id: "unsure", label: "Not sure" },
];

// links from Products use ?need=<package id>
const aliases: Record<string, string> = { "speed-seo": "improve", "care-plan": "improve", custom: "unsure" };

type Errors = Partial<Record<"name" | "email" | "project", string>>;

/**
 * No server needed: on submit the request is written into an email (or a
 * WhatsApp message, if a number is set in lib/site.ts) for the visitor to send.
 * To receive submissions directly, point onSubmit at a form service
 * (Formspree, Resend, Web3Forms) or a Next.js server action.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<"" | "email" | "whatsapp">("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("need");
    if (!q) return;
    const id = aliases[q] ?? q;
    // preselect the option the visitor came for (radios are uncontrolled)
    const input = document.querySelector<HTMLInputElement>(`input[name="need"][value="${id}"]`);
    if (input) input.checked = true;
  }, []);

  function compose(form: HTMLFormElement) {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const needLabel = needs.find((n) => n.id === get("need"))?.label ?? "";
    const lines = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      get("phone") && `Phone / WhatsApp: ${get("phone")}`,
      `I need: ${needLabel}`,
      get("website") && `Current website: ${get("website")}`,
      get("budget") && `Budget: ${get("budget")}`,
      get("start") && `Ideal start: ${get("start")}`,
    ].filter(Boolean);
    return {
      name: get("name"),
      email: get("email"),
      project: get("project"),
      needLabel,
      body: `${lines.join("\n")}\n\n${get("project")}`,
    };
  }

  function validate(v: { name: string; email: string; project: string }) {
    const e: Errors = {};
    if (!v.name) e.name = "Enter your name so we know who to reply to.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter an email address like name@company.com.";
    if (v.project.length < 10) e.project = "Tell us a little about the project, even one or two lines.";
    return e;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const v = compose(e.currentTarget);
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const body = v.body;
    if (submitter?.value === "whatsapp" && whatsappLink()) {
      window.open(whatsappLink(body), "_blank", "noopener");
      setSent("whatsapp");
    } else {
      const subject = `Project request: ${v.needLabel} (${v.name})`;
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent("email");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-labelledby="quote-title">
      <style>{`
        .form {
          display: grid;
          gap: 1.35rem;
          padding: clamp(1.25rem, 4vw, 2.5rem);
          border: 1.5px solid var(--ink);
          border-radius: var(--radius-lg);
          background: var(--surface);
        }
        .form__row { display: grid; gap: 1.35rem; }
        @media (min-width: 640px) {
          .form__row { grid-template-columns: 1fr 1fr; }
        }
        .field { display: grid; gap: 0.45rem; min-width: 0; }
        .field label,
        .field legend {
          font-weight: 600;
          font-size: 0.97rem;
          padding: 0;
        }
        .field legend { margin-bottom: 0.45rem; }
        .field .hint { font-weight: 400; color: var(--muted); }
        .field input,
        .field select,
        .field textarea {
          width: 100%;
          font: inherit;
          font-size: 1rem;
          color: var(--ink);
          background: var(--paper);
          border: 1.5px solid var(--line);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.9rem;
        }
        .field textarea { min-height: 8rem; resize: vertical; }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--accent-deep);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 35%, transparent);
        }
        .field [aria-invalid="true"] { border-color: var(--ink); }
        .field__error { color: var(--ink); font-size: 0.9rem; }
        fieldset.field { border: 0; padding: 0; margin: 0; }
        .options { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .options label { position: relative; font-weight: 500; }
        .options input {
          position: absolute;
          opacity: 0;
          inset: 0;
          margin: 0;
          cursor: pointer;
        }
        .options span {
          display: inline-block;
          padding: 0.5rem 0.95rem;
          border: 1.5px solid var(--line);
          border-radius: 999px;
          font-size: 0.95rem;
        }
        .options input:checked + span {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--paper);
        }
        .options input:focus-visible + span {
          outline: 3px solid var(--accent-deep);
          outline-offset: 2px;
        }
        .form__note { color: var(--muted); font-size: 0.92rem; }
        .form__status {
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--leaf);
          background: var(--paper);
        }
      `}</style>
      <RevealHeading id="quote-title" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>
        Get your free quote
      </RevealHeading>

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {errors.name && <span id="name-err" className="field__error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {errors.email && <span id="email-err" className="field__error">{errors.email}</span>}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="phone">Phone or WhatsApp <span className="hint">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="website">Current website <span className="hint">(if you have one)</span></label>
          <input id="website" name="website" type="url" inputMode="url" placeholder="https://" />
        </div>
      </div>

      <fieldset className="field">
        <legend>What do you need?</legend>
        <div className="options">
          {needs.map((n) => (
            <label key={n.id}>
              <input type="radio" name="need" value={n.id} defaultChecked={n.id === needs[0].id} />
              <span>{n.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="project">Tell us about your project in a few lines</label>
        <textarea id="project" name="project" required
          placeholder="What does your business do, and what should the website help with?"
          aria-invalid={!!errors.project} aria-describedby={errors.project ? "project-err" : undefined} />
        {errors.project && <span id="project-err" className="field__error">{errors.project}</span>}
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="budget">Budget range <span className="hint">(optional)</span></label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Choose a range</option>
            <option>Under $1,000</option>
            <option>$1,000 to $3,000</option>
            <option>$3,000 to $8,000</option>
            <option>More than $8,000</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="start">Ideal start date <span className="hint">(optional)</span></label>
          <input id="start" name="start" type="month" />
        </div>
      </div>

      <div className="btn-row" style={{ marginTop: ".25rem" }}>
        <button type="submit" value="email" className="btn btn--primary">Send my request</button>
        {whatsappLink() && (
          <button type="submit" value="whatsapp" className="btn">Send on WhatsApp</button>
        )}
      </div>
      <p className="form__note">
        Your details stay private. We reply within 24 hours.
      </p>

      <div aria-live="polite">
        {sent && (
          <p className="form__status">
            {sent === "email"
              ? `Your email app should open with the request filled in. Press send there to reach us. If nothing opened, write to ${site.contact.email}.`
              : "WhatsApp should open with your request filled in. Press send there to reach us."}
          </p>
        )}
      </div>
    </form>
  );
}
