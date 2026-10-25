"use client";

import { useState, type ReactNode } from "react";
import type { ProjectType } from "@/lib/content";

/** Filter buttons; cards are rendered on the server and passed in. */
export default function ProjectFilter({
  types,
  items,
}: {
  types: ProjectType[];
  items: { type: ProjectType; node: ReactNode; key: string }[];
}) {
  const [active, setActive] = useState<ProjectType | "All">("All");
  const shown = active === "All" ? items : items.filter((i) => i.type === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {(["All", ...types] as const).map((t) => (
          <button key={t} type="button" aria-pressed={active === t} onClick={() => setActive(t)}>
            {t}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} projects shown</p>
      <div className="cards">
        {shown.map((i) => <div key={i.key} style={{ display: "contents" }}>{i.node}</div>)}
      </div>
    </>
  );
}
