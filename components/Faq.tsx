"use client";

/** FAQ list with a smooth open/close, plus FAQPage structured data. */
import { useId, useState } from "react";
import JsonLd from "./JsonLd";
import { Plus } from "./icons";

export type QA = { q: string; a: string };

function FaqItem({ item, defaultOpen }: { item: QA; defaultOpen: boolean }) {
  const id = useId();
  const panelId = `${id}-panel`;
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq__item${open ? " is-open" : ""}`}>
      <h3>
        <button
          type="button"
          className="faq__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{item.q}</span>
          <Plus className="faq__icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className="faq__panel"
        inert={!open ? true : undefined}
      >
        <div className="faq__panel-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ items }: { items: QA[] }) {
  return (
    <>
      <style>{`
        .section:has(.faq) {
          width: 100vw;
          max-width: 100vw;
          margin-inline: calc(50% - 50vw);
          box-sizing: border-box;
          background: var(--mist);
          color: var(--ink);
          padding-top: var(--section);
          padding-bottom: var(--section);
        }
        .section + .section:has(.faq) {
          padding-top: var(--section);
        }
        :root[data-theme="dark"] .section:has(.faq) {
          background: var(--surface);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .section:has(.faq) {
            background: var(--surface);
          }
        }
        .section:has(.faq) .section-head {
          align-content: start;
        }
        .section:has(.faq) .section-head p {
          max-width: 22rem;
        }
        .faq__cta {
          justify-self: start;
          margin-top: 0.35rem;
        }
        .faq { border-top: 1.5px solid var(--ink); }
        .faq__item {
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 14%, transparent);
        }
        .faq__item h3 {
          margin: 0;
          font-size: 1.15rem;
        }
        .faq__trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 0;
          margin: 0;
          border: 0;
          border-radius: 0;
          background: none;
          color: inherit;
          font: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          text-align: left;
          cursor: pointer;
        }
        .faq__icon {
          flex-shrink: 0;
          width: 1.3rem;
          height: 1.3rem;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq__item.is-open .faq__icon {
          transform: rotate(45deg);
        }
        .faq__panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq__item.is-open .faq__panel {
          grid-template-rows: 1fr;
        }
        .faq__panel-inner {
          overflow: hidden;
          min-height: 0;
        }
        .faq__panel p {
          margin: 0;
          padding-bottom: 1.35rem;
          color: var(--muted);
          max-width: 40rem;
          opacity: 0;
          transform: translateY(-0.4rem);
          transition:
            opacity 0.28s ease,
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq__item.is-open .faq__panel p {
          opacity: 1;
          transform: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .faq__icon,
          .faq__panel,
          .faq__panel p {
            transition: none;
          }
        }
      `}</style>
      <div className="faq">
        {items.map((item, i) => (
          <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
    </>
  );
}
