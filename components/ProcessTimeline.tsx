import { RevealHeading } from "@/components/ScrollReveal";

const steps = [
  ["Discover", "We learn your goals, your customers and your competitors."],
  ["Design", "You approve the layout before any code is written."],
  ["Build and test", "We develop, test on real devices and optimize for speed and SEO."],
  ["Launch and grow", "We go live, watch the results and keep improving."],
];

export default function ProcessTimeline() {
  return (
    <section className="section process-timeline" aria-labelledby="process-title">
      <style>{`
        .process-timeline {
          --marker: clamp(9.5rem, 16vw, 13rem);
          width: 100vw;
          max-width: 100vw;
          margin-inline: calc(50% - 50vw);
          box-sizing: border-box;
          background: var(--mist);
          color: var(--ink);
          padding-top: var(--section);
          padding-bottom: var(--section);
        }
        .section + .section.process-timeline {
          padding-top: var(--section);
        }
        :root[data-theme="dark"] .process-timeline {
          background: var(--surface);
        }
        :root[data-theme="dark"] .process-timeline__marker {
          box-shadow: 0 0 0 0.7rem var(--surface);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .process-timeline {
            background: var(--surface);
          }
          :root:not([data-theme="light"]) .process-timeline__marker {
            box-shadow: 0 0 0 0.7rem var(--surface);
          }
        }
        .process-timeline .section-head {
          display: grid;
          justify-items: center;
          text-align: center;
          max-width: 40rem;
          margin-inline: auto;
          margin-bottom: clamp(2.75rem, 6vw, 4.25rem);
        }
        .process-timeline .process-timeline__eyebrow {
          margin: 0 0 0.75rem;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--accent-deep);
        }
        .process-timeline .section-head p:not(.process-timeline__eyebrow) {
          margin: 0;
        }
        .process-timeline__steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(3rem, 7vw, 5rem) 2rem;
          position: relative;
        }
        .process-timeline__step {
          display: grid;
          justify-items: center;
          text-align: center;
          gap: 1.5rem;
          position: relative;
        }
        .process-timeline__step:nth-child(1) { --ring: var(--gold); }
        .process-timeline__step:nth-child(2) { --ring: color-mix(in srgb, var(--gold) 72%, var(--ink)); }
        .process-timeline__step:nth-child(3) { --ring: color-mix(in srgb, var(--gold) 38%, var(--ink)); }
        .process-timeline__step:nth-child(4) { --ring: var(--ink); }
        .process-timeline__marker {
          width: var(--marker);
          height: var(--marker);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 0.55rem solid var(--ring);
          border-radius: 50%;
          background: var(--paper);
          box-shadow: 0 0 0 0.7rem var(--mist);
          position: relative;
          z-index: 1;
        }
        .process-timeline__num {
          font-size: clamp(2.1rem, 3.4vw, 2.85rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--ink);
        }
        .process-timeline__label {
          margin-top: 0.35rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .process-timeline__copy {
          display: grid;
          gap: 0.5rem;
          max-width: 26rem;
          width: 100%;
        }
        .process-timeline__copy h3 {
          margin: 0;
          font-size: clamp(1.35rem, 2vw, 1.7rem);
        }
        .process-timeline__copy p {
          margin: 0;
          color: var(--muted);
          font-size: clamp(1.02rem, 1.3vw, 1.15rem);
          line-height: 1.5;
        }
        .process-timeline__step:nth-child(odd)::after {
          content: "";
          position: absolute;
          top: calc(var(--marker) / 2);
          left: calc(50% + var(--marker) / 2);
          width: calc(100% + 2rem - var(--marker));
          border-top: 2px dashed color-mix(in srgb, var(--ink) 22%, var(--mist));
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 639px) {
          .process-timeline {
            --marker: clamp(8rem, 42vw, 10rem);
          }
          .process-timeline__steps {
            grid-template-columns: 1fr;
          }
          .process-timeline__step:nth-child(odd)::after {
            display: none;
          }
          .process-timeline__steps::before {
            content: "";
            position: absolute;
            top: calc(var(--marker) / 2);
            bottom: calc(var(--marker) / 2);
            left: 50%;
            border-left: 2px dashed color-mix(in srgb, var(--ink) 22%, var(--mist));
            z-index: 0;
          }
        }
      `}</style>
      <div className="wrap">
        <div className="section-head">
          <p className="process-timeline__eyebrow">How we work</p>
          <RevealHeading id="process-title">Our simple 4-step process</RevealHeading>
          <p>From the first conversation to a live site, you always know what happens next.</p>
        </div>
        <ol className="process-timeline__steps">
          {steps.map(([title, text], index) => (
            <li key={title} className="process-timeline__step">
              <div className="process-timeline__marker">
                <span className="process-timeline__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="process-timeline__label">Step</span>
              </div>
              <div className="process-timeline__copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
