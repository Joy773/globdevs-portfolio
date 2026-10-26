import Image from "next/image";
import Link from "next/link";
import { RevealHeading } from "@/components/ScrollReveal";

const goals = [
  {
    label: "Fast pages and optimized images",
    text: "Visitors stay longer, and search engines favor fast sites.",
    src: "/business-goals/fast-pages.png",
    alt: "Isometric line drawing of a fast webpage and optimized image tiles",
  },
  {
    label: "SEO-ready structure from day one",
    text: "Google understands your pages, so you can earn traffic without paying for every click.",
    src: "/business-goals/seo.png",
    alt: "Isometric line drawing of a website sitemap and search",
  },
  {
    label: "Mobile-first design",
    text: "Most people browse on their phones. A smooth experience keeps them from leaving.",
    src: "/business-goals/mobile.png",
    alt: "Isometric line drawing of a phone and tablet website layout",
  },
  {
    label: "Clear calls to action",
    text: "More visitors become calls, bookings, sign-ups and sales.",
    src: "/business-goals/cta.png",
    alt: "Isometric line drawing of a pointer clicking a call-to-action button",
  },
  {
    label: "Secure, tested code",
    text: "Your customers’ data and your reputation stay protected.",
    src: "/business-goals/secure.png",
    alt: "Isometric line drawing of a laptop with tested code behind a shield",
  },
  {
    label: "Scalable foundation",
    text: "Add products, pages and features later without starting over.",
    src: "/business-goals/scale.png",
    alt: "Isometric line drawing of stacked modules with a new block being added",
  },
];

export default function BusinessGoals() {
  return (
    <section className="section business-goals-section" aria-labelledby="grow-title">
      <style>{`
        .business-goals-section {
          width: 100vw;
          max-width: 100vw;
          margin-inline: calc(50% - 50vw);
          box-sizing: border-box;
          background: var(--mist);
          color: var(--ink);
          padding-bottom: var(--section);
        }
        :root[data-theme="dark"] .business-goals-section {
          background: var(--surface);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .business-goals-section {
            background: var(--surface);
          }
        }
        .section + .business-goals-section {
          padding-top: var(--section);
        }
        .business-goals__eyebrow {
          margin: 0 0 0.75rem;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--accent-deep);
        }
        .business-goals-section .section-head {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem 2rem;
          max-width: none;
          margin-bottom: clamp(2.5rem, 6vw, 4.5rem);
        }
        .business-goals__copy {
          display: grid;
          gap: 1rem;
          max-width: 44rem;
        }
        .business-goals-section .section-head p {
          color: var(--muted);
        }
        .business-goals__cta {
          flex-shrink: 0;
        }
        .business-goals {
          display: grid;
          gap: clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem);
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (min-width: 800px) {
          .business-goals {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            align-items: start;
            padding-bottom: 4.5rem;
          }
          .business-goals li:nth-child(3n + 2) { margin-top: 3.75rem; }
          .business-goals li:nth-child(3n) { margin-top: 7.5rem; }
        }
        .business-goals__art {
          display: grid;
          place-items: center;
          aspect-ratio: 1;
          margin-bottom: 1.35rem;
        }
        .business-goals__art img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .business-goals__label {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 650;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .business-goals__text {
          margin: 0.55rem 0 0;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.5;
          max-width: 22rem;
        }
      `}</style>
      <div className="wrap">
        <p className="business-goals__eyebrow">Why it works</p>
        <div className="section-head">
          <div className="business-goals__copy">
            <RevealHeading id="grow-title">How our code grows your business</RevealHeading>
            <p>
              Every technical choice has a reason you can see on your bottom line faster
              pages, stronger search rankings, and a site that keeps converting as you grow.
            </p>
          </div>
          <Link href="/contact/" className="btn btn--primary business-goals__cta">
            Get a free quote
          </Link>
        </div>
        <ul className="business-goals">
          {goals.map((goal) => (
            <li key={goal.label}>
              <div className="business-goals__art">
                <Image src={goal.src} alt={goal.alt} width={800} height={800} unoptimized />
              </div>
              <p className="business-goals__label">{goal.label}</p>
              <p className="business-goals__text">{goal.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
