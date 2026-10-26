import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import HeroPixels from "@/components/HeroPixels";
import { RevealHeading, RevealTitle } from "@/components/ScrollReveal";
import Faq from "@/components/Faq";
import BusinessGoals from "@/components/BusinessGoals";
import OurServices from "@/components/OurServices";
import ProcessTimeline from "@/components/ProcessTimeline";
import Projects from "@/components/Projects";
import TrustStrip from "@/components/TrustStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Web Development Company | Fast, SEO-Ready Sites | GlobDevs" },
  description:
    "GlobDevs builds fast, secure, SEO-ready websites and web apps that turn visitors into customers. See our work and get a free quote.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most business websites take 4 to 8 weeks. You get an exact timeline in your written proposal.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. We build SEO foundations into every site: clean code, fast loading, mobile-first design, proper headings, schema markup and a sitemap.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. After final payment the code, designs and content belong to you.",
  },
  {
    q: "How do we get started?",
    a: `Tell us about your business and goals. You get a clear plan and a fixed written quote within ${site.promises.quoteTime}. No pressure, no jargon.`,
  },
  {
    q: "What happens after launch?",
    a: `We stay to help you grow. You get support after launch, a reply within ${site.promises.replyTime}, and a site you can add pages and features to later without starting over.`,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroPixels />
        <div className="wrap hero__inner">
          <div className="hero__copy">

            <RevealTitle style={{ fontSize: "clamp(3.1rem, 8vw, 6.4rem)", maxWidth: "none" }}>
              {"Web development that helps\nyour business grow"}
            </RevealTitle>
            <p className="lede">
              GlobDevs is a web development company that builds fast, secure and search-optimized
              websites and web applications. We write clean code with one goal: more customers, more
              sales and less stress for you.
            </p>
            <div className="btn-row">
              <Link href="/contact/" className="btn btn--primary">Get a free quote</Link>
              <Link href="/projects/" className="btn">See our projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="trust-title">
        <h2 id="trust-title" className="sr-only">Trusted by businesses that want results</h2>
        <TrustStrip />
      </section>

      <OurServices />

      <BusinessGoals />

      <Projects featured />

      <ProcessTimeline />

      <WhyChooseUs />

      {site.testimonials.length > 0 && (
        <section className="section" aria-labelledby="say-title">
          <div className="wrap">
            <div className="section-head">
              <RevealHeading id="say-title">What clients say</RevealHeading>
            </div>
            <div className="quotes">
              {site.testimonials.map((t) => (
                <figure className="quote" key={t.name}>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    {t.role}, {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="section-head">
            <RevealHeading id="faq-title">Frequently Asked Questions</RevealHeading>
            <p>
              Timelines, ownership, SEO and what happens after launch. If your question is not
              here, send it through. We reply within {site.promises.replyTime}.
            </p>
            <Link href="/contact/" className="btn btn--primary faq__cta">
              Ask a question
            </Link>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <Cta
        title="Ready to grow online?"
        actions={[{ href: "/contact/", label: "Get your free quote", primary: true }]}
      >
        Tell us about your business and goals. You will receive a clear plan and quote within{" "}
        {site.promises.quoteTime}. No pressure, no jargon.
      </Cta>
    </>
  );
}
