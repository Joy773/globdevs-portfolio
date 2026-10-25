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
