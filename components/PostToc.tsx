"use client";

import { useEffect, useState } from "react";

export default function PostToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!headings.length) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        const next = items.find((item) => visible.has(item.id));
        if (next) setActive(next.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 1] },
    );

    headings.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="post-toc" aria-label="Table of contents">
      <style>{`
        .post-wrap {
          display: grid;
          gap: 0;
        }
        .post-wrap > .post-toc {
          min-width: 0;
          margin-top: 1.5rem;
        }
        @media (min-width: 1100px) {
          .post-wrap {
            max-width: calc(var(--wrap) + var(--gutter) * 2 + 17rem);
            grid-template-columns: 14.5rem minmax(0, 1fr);
            column-gap: 2rem;
            align-items: start;
          }
          .post-wrap > .post-crumbs,
          .post-wrap > .post-cover {
            grid-column: 2;
          }
          .post-wrap > .post-toc {
            grid-column: 1;
            grid-row: 3;
            margin-top: 0.35rem;
            position: sticky;
            top: 7rem;
            max-height: calc(100vh - 8.5rem);
            overflow: auto;
          }
          .post-wrap > .post-main {
            grid-column: 2;
          }
        }
        .post-toc__label {
          margin: 0 0 0.75rem;
          font-size: 0.72rem;
          font-weight: 650;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .post-toc ol {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.15rem;
        }
        .post-toc a {
          display: block;
          padding: 0.35rem 0.65rem 0.35rem 0.8rem;
          border-left: 2px solid var(--line);
          color: var(--muted);
          text-decoration: none;
          font-size: 0.88rem;
          line-height: 1.35;
          text-wrap: pretty;
        }
        .post-toc a:hover {
          color: var(--ink);
        }
        .post-toc a.is-active {
          color: var(--ink);
          border-left-color: var(--gold);
          font-weight: 650;
        }
      `}</style>
      <p className="post-toc__label">On this page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : undefined}
              onClick={(event) => {
                const heading = document.getElementById(item.id);
                if (!heading) return;
                event.preventDefault();
                heading.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${item.id}`);
                setActive(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
