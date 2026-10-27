import type { Metadata } from "next";
import Blogs from "@/components/Blogs";
import Cta from "@/components/Cta";
import HeroPixels from "@/components/HeroPixels";
import { RevealHeading, RevealTitle } from "@/components/ScrollReveal";
import TrustStrip from "@/components/TrustStrip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Web Development Tips for Business Owners | GlobDevs" },
  description:
    "Practical, jargon-free guides on website cost, speed, SEO and e-commerce for business owners. Learn how to grow online with GlobDevs.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <section className="hero">
        <HeroPixels
          src="/hero-blog.png?v=2"
          objectPosition="50% 60%"
          scene="indoor"
          toasts={["Guide · Website cost", "Fixes · Slow pages", "Checklist · SEO basics"]}
          cursor={{ x: 80, y: 50 }}
        />
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <RevealTitle style={{ fontSize: "clamp(3.1rem, 8vw, 6.4rem)", maxWidth: "none" }}>
              {"Web development tips and\nguides for business owners"}
            </RevealTitle>
            <p className="lede">
              Plain-English advice on building, improving and growing your website, written by the
              GlobDevs team. No jargon, just practical web development tips you can use today.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="trust-title">
        <h2 id="trust-title" className="sr-only">Trusted by businesses that want results</h2>
        <TrustStrip />
      </section>

      <Blogs />

      {site.newsletterAction ? (
        <section className="section" aria-labelledby="news-title">
          <div className="wrap">
            <RevealHeading id="news-title">Keep learning with GlobDevs</RevealHeading>
            <p className="lede mt-4">Get one practical website tip a month. No spam.</p>
            <form className="newsletter" action={site.newsletterAction} method="post">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
              <button className="btn btn--primary" type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      ) : null}

      <Cta
        mist
        title="Rather have us look at your site?"
        actions={[
          { href: "/contact/?need=improve", label: "Get a free quote", primary: true },
          { href: "/products/", label: "See packages" },
        ]}
      >
        Send us your website address and we will tell you what is slowing it down and what to fix
        first.
      </Cta>
    </>
  );
}
