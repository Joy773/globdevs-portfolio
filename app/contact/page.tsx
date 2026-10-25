import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact GlobDevs | Get a Free Website Quote" },
  description:
    "Tell us about your project and get a free quote from GlobDevs within 24 to 48 hours. Email, WhatsApp or book a free consultation.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const { contact, promises } = site;
  const wa = whatsappLink();
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1>Contact GlobDevs: let’s talk about your project</h1>
          <p className="lede">
            Get a website quote in a few minutes. Tell us about your idea and goals, and we will
            reply within {promises.replyTime} with next steps and a clear plan. No obligation and
            no pressure.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--section)" }}>
        <div className="contact-grid">
          <ContactForm />

          <aside className="contact-aside">
            <section aria-labelledby="next-title">
              <h2 id="next-title">What happens next</h2>
              <ol className="steps steps--stack">
                <li><p>We read your message and reply within 24 hours.</p></li>
                <li><p>We book a free {promises.callLength} call to understand your goals.</p></li>
                <li><p>You receive a written proposal with scope, timeline and price.</p></li>
                <li><p>You decide. If you say yes we start, and if not there are no hard feelings.</p></li>
              </ol>
            </section>

            <section aria-labelledby="reach-title">
              <h2 id="reach-title">Other ways to reach us</h2>
              <ul className="reach">
                <li><span>Email</span><a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                {wa && <li><span>WhatsApp</span><a className="link" href={wa} target="_blank" rel="noopener noreferrer">+{contact.whatsapp}</a></li>}
                {contact.calendar && <li><span>Book a call</span><a className="link" href={contact.calendar} target="_blank" rel="noopener noreferrer">Pick a time</a></li>}
                <li><span>Hours</span>{contact.hours}</li>
                <li><span>Location</span>{contact.city}, {contact.country}, serving clients worldwide</li>
              </ul>
            </section>

            <section aria-labelledby="why-title">
              <h2 id="why-title">Why clients choose GlobDevs</h2>
              <ul className="ticks">
                <li>Fixed quotes with no hidden costs</li>
                <li>Weekly updates and a private preview link</li>
                <li>You own your code and content</li>
                <li>Support after launch</li>
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </>
  );
}
