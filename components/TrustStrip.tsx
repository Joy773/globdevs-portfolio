import { PiClock, PiCode, PiFileText, PiHeadset, PiLinkSimple } from "react-icons/pi";

const items = [
  { label: "Fixed written quote", Icon: PiFileText },
  { label: "Weekly preview link", Icon: PiLinkSimple },
  { label: "You own the code", Icon: PiCode },
  { label: "Support after launch", Icon: PiHeadset },
  { label: "Reply in one business day", Icon: PiClock },
];

export default function TrustStrip() {
  return (
    <>
      <style>{`
        .trust-strip {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          gap: 1.15rem 2rem;
          list-style: none;
          width: 100vw;
          max-width: 100vw;
          margin-inline: calc(50% - 50vw);
          padding: 1.7rem var(--gutter);
          box-sizing: border-box;
          background: var(--accent);
          color: var(--accent-ink);
          font-size: clamp(1.28rem, 1.7vw, 1.55rem);
          font-weight: 550;
        }
        .trust-strip li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .trust-strip svg {
          width: 1.6rem;
          height: 1.6rem;
          color: var(--accent-ink);
          flex-shrink: 0;
        }
      `}</style>
      <ul className="trust-strip">
        {items.map(({ label, Icon }) => (
          <li key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
