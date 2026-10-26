import type { ReactNode } from "react";
import { Check } from "./icons";

/** Checklist with a react-icons tick in front of each item. */
export default function Ticks({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ticks">
      {items.map((item, i) => (
        <li key={i}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
