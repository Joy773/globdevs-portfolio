import Link from "next/link";
import type { ReactNode } from "react";

/** End-of-page call to action. Every page in the content plan ends with one. */
export default function Cta({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions: { href: string; label: string; primary?: boolean }[];
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta grid-paper">
          <h2 id="cta-title">{title}</h2>
          <p>{children}</p>
          <div className="btn-row">
            {actions.map((a) => (
              <Link key={a.href + a.label} href={a.href} className={`btn${a.primary ? " btn--primary" : ""}`}>
                {a.label}
              </Link>
            ))}
          </div>
          {/* paper plane doodle */}
          <svg className="cta__doodle" viewBox="0 0 200 140" fill="none" stroke="currentColor"
            strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M120 22c22-6 44-12 66-16-14 34-30 66-46 96-10-14-20-26-30-36" />
            <path d="M186 6c-30 26-52 48-76 70" />
            <path d="M110 66c-8 8-12 18-14 30 8-4 16-10 24-16" />
            <path d="M96 100c-30 18-60 22-84 10" strokeDasharray="3 8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
