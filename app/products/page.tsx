import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Ticks from "@/components/Ticks";
import { packages } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Website Packages & Ready-to-Launch Solutions | GlobDevs" },
  description:
    "Ready-to-launch website packages for business: business sites, online stores, booking systems and care plans. Clear scope, fast delivery.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1>Ready-to-launch website solutions for growing businesses</h1>
          <p className="lede">
            Not every business needs a fully custom build. Our website packages give you a
            professional, fast and SEO-ready solution with a clear scope, a fixed timeline and no
            surprises. Pick the package that fits and we will take it from there.
          </p>
        </div>
      </section>

      <section className="wrap" aria-label="Website packages">
        <div className="packages">
          {packages.map((p) => (
            <section className="package" id={p.id} key={p.id} aria-labelledby={`${p.id}-title`}>
              <h2 id={`${p.id}-title`} style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)" }}>
                {p.name}
              </h2>
              <p className="package__best">Best for: {p.bestFor}</p>
              <Ticks items={p.includes} />
              <p className="package__outcome">{p.outcome}</p>
              <div className="package__meta">
                <span>{p.monthly ? p.delivery : `Delivery: ${p.delivery}`}</span>
                <Link href={`/contact/?need=${p.id}`} className="btn btn--small">Get a quote</Link>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lede">
            Want to compare starting prices? <Link href="/pricing/" className="link">See pricing</Link>.
          </p>
        </div>
      </section>

      <Cta
        title="Need something custom?"
        actions={[{ href: "/contact/?need=custom", label: "Book a free call", primary: true }]}
      >
        Web apps, portals, SaaS products and special integrations are quoted after a free
        discovery call.
      </Cta>
    </>
  );
}
