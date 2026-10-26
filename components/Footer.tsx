import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";
import { LogoMark } from "./icons";

const YEAR = 2026; // static on purpose: keeps the footer fully cacheable

export default function Footer() {
  const { contact, social } = site;
  const wa = whatsappLink();
  const socials = [
    { label: "LinkedIn", href: social.linkedin },
    { label: "GitHub", href: social.github },
    { label: "Clutch", href: social.clutch },
    { label: "Upwork", href: social.upwork },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <style>{`
        .footer {
          margin-top: 0;
          border-top: 1.5px solid var(--ink);
          padding-block: clamp(3rem, 6vw, 4.5rem) 2rem;
          font-size: 0.97rem;
        }
        .footer__grid { display: grid; gap: 2.5rem; }
        @media (min-width: 640px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 960px) {
          .footer__grid { grid-template-columns: 2fr 1fr 1fr 1.4fr; }
        }
        .footer h2 {
          font-size: 1rem;
          letter-spacing: 0;
          margin-bottom: 0.9rem;
        }
        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.55rem;
        }
        .footer a { text-decoration: none; color: var(--muted); }
        .footer a:hover { color: var(--ink); text-decoration: underline; }
        .footer address {
          font-style: normal;
          color: var(--muted);
          display: grid;
          gap: 0.35rem;
        }
        .footer__bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 0.9rem;
        }
        .footer__about p {
          color: var(--muted);
          margin-top: 0.9rem;
          max-width: 22rem;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          font-family: var(--font-body), sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }
        .logo svg { width: 32px; height: 32px; flex-shrink: 0; }
      `}</style>
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__about">
            <Link href="/" className="logo">
              <LogoMark />
              GlobDevs
            </Link>
            <p>Fast, secure and SEO-ready websites and web apps for businesses that want more customers.</p>
          </div>

          <div>
            <h2>Pages</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2>Elsewhere</h2>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
              {wa && (
                <li><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              )}
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            {/* Keep name, address and phone identical to your Google Business Profile */}
            <address>
              <span>GlobDevs</span>
              <span>{contact.city}, {contact.country}</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {contact.whatsapp && <span>+{contact.whatsapp}</span>}
              <span>Serving clients worldwide</span>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {YEAR} GlobDevs. All rights reserved.</span>
          <span>Built by hand with Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
