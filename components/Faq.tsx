/** FAQ list with native <details>, plus FAQPage structured data. */
import JsonLd from "./JsonLd";
import { Plus } from "./icons";

export type QA = { q: string; a: string };

export default function Faq({ items }: { items: QA[] }) {
  return (
    <>
      <div className="faq">
        {items.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>
              <h3>{item.q}</h3>
              <Plus className="faq__icon" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
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
