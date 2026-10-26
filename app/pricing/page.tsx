import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Ticks from "@/components/Ticks";
import Faq from "@/components/Faq";
import { formatFrom, packages } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Website Development Cost & Pricing | GlobDevs" },
  description:
    "How much does a website cost? See clear GlobDevs pricing, what affects the cost and our no-surprises promise. Get a fixed written quote.",
  alternates: { canonical: "/pricing/" },
};

// TODO: confirm with the team, then edit these answers
const faqs = [
  {
    q: "Can I start small and add features later?",
    a: "Yes. We build a solid foundation so you can add pages, products and features over time without rebuilding.",
  },
  {
    q: "Are hosting and domain included?",
    a: "Your proposal states exactly what is included. The domain is always registered in your name, so you keep it whatever happens.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. You pay in milestones: a first part to start, a second at design approval and the rest at launch. The exact split is in your quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1>Website development pricing: clear packages, no hidden costs</h1>
          <p className="lede">
            Every project is different, but you should never be surprised by the bill. Website
            development cost depends on a few clear factors. Below are our packages and what
            changes the price. Before we begin, you receive a fixed written quote that lists
            exactly what is included.
          </p>
        </div>
      </section>

      <section className="wrap" aria-labelledby="table-title">
        <h2 id="table-title" className="sr-only">Packages and starting prices</h2>
        <div className="table-scroll" tabIndex={0} aria-label="Pricing table, scrolls sideways on small screens">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Package</th>
                <th scope="col">Best for</th>
                <th scope="col">Typically includes</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.id}>
                  <th scope="row">
                    <Link href={`/products/#${p.id}`}>{p.name}</Link>
                  </th>
                  <td>{p.bestFor}</td>
                  <td>{p.pricingIncludes}</td>
                  <td>{formatFrom(p)}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">Custom Web App</th>
                <td>Portals, SaaS products and complex tools.</td>
                <td>Discovery, design, development, testing, documentation</td>
                <td>Custom quote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="cost-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="cost-title">What affects the cost of a website?</h2>
            <p>
              The full breakdown is in our guide,{" "}
              <Link href="/blog/how-much-does-a-website-cost/" className="link">how much does a website cost</Link>.
            </p>
          </div>
          <Ticks
            items={[
              "Number of pages and design complexity",
              "Features such as bookings, payments, user accounts and integrations",
              "Content: whether you provide it or need writing and photography",
              "Custom build or template-based platform",
              "Timeline and ongoing support needs",
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="promise-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="promise-title">Our no-surprises promise</h2>
          </div>
          <Ticks
            items={[
              "A fixed written quote before work starts",
              "Payment in milestones, not everything upfront",
              "Any extra work is approved by you before it is billed",
              "Revision rounds included at the design stage",
              "You own your code, design and content after final payment",
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="cheap-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="cheap-title">Is a cheaper website worth it?</h2>
          </div>
          <div className="prose">
            <p>
              A low price can become expensive when the site is slow, insecure or invisible on
              Google, and you have to rebuild it. We focus on value: a site that loads fast, ranks
              well and brings in customers pays for itself.
            </p>
            <p>
              If your budget is limited, we will suggest a smaller first version that you can grow
              later.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pfaq-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="pfaq-title">Pricing FAQ</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <Cta
        title="Get your exact quote"
        actions={[{ href: "/contact/", label: "Get my quote", primary: true }]}
      >
        Answer a few quick questions and get a clear proposal within {site.promises.quoteTime}.
      </Cta>
    </>
  );
}
