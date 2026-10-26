import Image from "next/image";
import { RevealHeading } from "@/components/ScrollReveal";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Clear written scope",
    text: "A clear written scope and price before we start. No hidden costs.",
    tone: "cream" as const,
    src: "/why-choose-us/scope.png",
    alt: "Pixel art clipboard with a gold checkmark stamp",
  },
  {
    title: "You own the code",
    text: "You own your code, design files and content after final payment.",
    tone: "mist" as const,
    src: "/why-choose-us/own.png",
    alt: "Pixel art folder with a gold key",
  },
  {
    title: "Weekly preview link",
    text: "Weekly progress updates and a private preview link, so you always see progress.",
    tone: "cream" as const,
    src: "/why-choose-us/preview.png",
    alt: "Pixel art laptop showing a website preview",
    wide: true,
  },
  {
    title: "Support after launch",
    text: `We stay to help you grow. A single point of contact replies within ${site.promises.replyTime}.`,
    tone: "mist" as const,
    src: "/why-choose-us/support.png",
    alt: "Pixel art figure standing for a calm, lasting handover",
  },
];

function PixelSparkles() {
  const dots = [
    [1, 2], [6, 0], [14, 3], [3, 8], [11, 7], [15, 10], [8, 4],
  ];
  return (
    <svg className="why-choose__sparkles" viewBox="0 0 18 12" aria-hidden="true" shapeRendering="crispEdges">
      {dots.map(([x, y], i) => (
        <rect key={i} className={`why-choose__spark why-choose__spark--${i}`} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us" aria-labelledby="safe-title">
      <style>{`
        .section + .section.why-choose-us {
          padding-top: var(--section);
        }
        .why-choose {
          display: grid;
          gap: 1rem;
        }
        .why-choose__intro {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0.35rem 0.4rem 0.35rem 0;
        }
        .why-choose__eyebrow {
          margin: 0 0 0.75rem;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--accent-deep);
        }
        .why-choose__intro h2 {
          max-width: 11ch;
          text-wrap: balance;
          margin-bottom: 1rem;
        }
        .why-choose__intro p:not(.why-choose__eyebrow) {
          margin: 0;
          max-width: 22rem;
          color: var(--muted);
        }
        .why-choose__card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          min-height: 16.5rem;
          padding: 1.45rem 1.4rem 1.5rem;
          border-radius: var(--radius-lg);
          overflow: hidden;
          color: var(--ink);
        }
        .why-choose__card--cream {
          background: color-mix(in srgb, var(--gold) 11%, var(--paper));
        }
        .why-choose__card--mist {
          background: color-mix(in srgb, var(--ink) 5%, var(--paper));
        }
        .why-choose__copy {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          flex: 1;
        }
        .why-choose__title {
          margin: 0;
          font-size: 1.12rem;
          font-weight: 650;
          letter-spacing: -0.03em;
          line-height: 1.25;
        }
        .why-choose__text {
          margin: 0;
          max-width: 22rem;
          font-size: 0.98rem;
          line-height: 1.45;
          color: var(--muted);
        }
        .why-choose__sprite {
          position: relative;
          flex: 1 1 auto;
          display: grid;
          place-items: center;
          min-height: 0;
          padding-block: 0.5rem;
        }
        .why-choose__sprite img {
          width: auto;
          height: auto;
          max-width: 9.75rem;
          max-height: 9.75rem;
          object-fit: contain;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          animation: why-pixel-bob 3.2s ease-in-out infinite;
        }
        .why-choose__sparkles {
          position: absolute;
          inset: 12% 10% 18%;
          width: auto;
          height: auto;
          pointer-events: none;
        }
        .why-choose__spark {
          fill: var(--gold);
          animation: why-pixel-twinkle 1.15s steps(2, end) infinite;
        }
        .why-choose__spark--1 { animation-delay: 0.15s; }
        .why-choose__spark--2 { animation-delay: 0.35s; }
        .why-choose__spark--3 { animation-delay: 0.5s; }
        .why-choose__spark--4 { animation-delay: 0.7s; }
        .why-choose__spark--5 { animation-delay: 0.9s; }
        .why-choose__spark--6 { animation-delay: 0.25s; }
        @keyframes why-pixel-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes why-pixel-twinkle {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        :root[data-theme="dark"] .why-choose__card--cream {
          background: color-mix(in srgb, var(--gold) 14%, var(--surface));
        }
        :root[data-theme="dark"] .why-choose__card--mist {
          background: var(--surface);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .why-choose__card--cream {
            background: color-mix(in srgb, var(--gold) 14%, var(--surface));
          }
          :root:not([data-theme="light"]) .why-choose__card--mist {
            background: var(--surface);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .why-choose__sprite img,
          .why-choose__spark {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
        @media (min-width: 720px) {
          .why-choose {
            grid-template-columns: 1fr 1fr;
          }
          .why-choose__intro {
            grid-column: 1 / -1;
          }
        }
        @media (min-width: 960px) {
          .why-choose {
            grid-template-columns: 1.08fr 1fr 1fr;
            grid-template-rows: minmax(17.5rem, auto) minmax(17.75rem, auto);
            align-items: stretch;
          }
          .why-choose__intro {
            grid-column: 1;
            grid-row: 1;
            padding-right: 1.25rem;
          }
          .why-choose__card:nth-child(2) { grid-column: 2; grid-row: 1; }
          .why-choose__card:nth-child(3) { grid-column: 3; grid-row: 1; }
          .why-choose__card--wide {
            grid-column: 1 / 3;
            grid-row: 2;
          }
          .why-choose__card:nth-child(5) {
            grid-column: 3;
            grid-row: 2;
          }
          .why-choose__card,
          .why-choose__copy {
            min-height: 0;
            height: 100%;
          }
        }
      `}</style>
      <div className="wrap">
        <div className="why-choose">
          <div className="why-choose__intro">
            <p className="why-choose__eyebrow">Why us</p>
            <RevealHeading id="safe-title">
              Why clients feel safe handing over their project
            </RevealHeading>
            <p>
              Hiring developers shouldn’t feel like a gamble. These are the rules we work by on
              every project.
            </p>
          </div>
          {cards.map((card) => (
            <article
              key={card.title}
              className={`why-choose__card why-choose__card--${card.tone}${card.wide ? " why-choose__card--wide" : ""}`}
            >
              <div className="why-choose__copy">
                <h3 className="why-choose__title">{card.title}</h3>
                <div className="why-choose__sprite">
                  <Image
                    src={card.src}
                    alt=""
                    width={320}
                    height={320}
                    unoptimized
                  />
                  <PixelSparkles />
                </div>
                <p className="why-choose__text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
