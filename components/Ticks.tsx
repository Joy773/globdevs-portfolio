import type { ReactNode } from "react";
import { Check } from "./icons";

/** Checklist with a react-icons tick in front of each item. */
export default function Ticks({ items }: { items: ReactNode[] }) {
  return (
    <>
      <style>{`
        .ticks {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.85rem;
        }
        .ticks li {
          display: grid;
          grid-template-columns: 1.15rem 1fr;
          gap: 0.75rem;
          align-items: start;
        }
        .ticks li svg {
          width: 1.15rem;
          height: 1.15rem;
          margin-top: 0.22em;
          color: var(--leaf);
        }
      `}</style>
      <ul className="ticks">
        {items.map((item, i) => (
          <li key={i}>
            <Check aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
