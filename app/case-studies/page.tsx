import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Web Development Case Studies & Results | GlobDevs" },
  description:
    "See how GlobDevs solved real business problems with faster websites, better SEO and custom web apps. Read our case studies and results.",
  alternates: { canonical: "/case-studies/" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1>Web development case studies: real problems, real results</h1>
          <p className="lede">
            Screenshots show what a website looks like. A case study shows why it works. Here is
            how we take a business problem, build the right solution and measure the result.
          </p>
        </div>
      </section>

      <section className="wrap" aria-labelledby="list-title">
        <h2 id="list-title" className="sr-only">All case studies</h2>
        <div className="cards">
          {caseStudies.map((c) => (
            <article className="project" key={c.slug}>
              <div className="project__img">
                <Image src={c.image} alt="" width={800} height={600} />
                {c.concept && <span className="tag-concept">Concept case study</span>}
              </div>
              <h3>
                <Link href={`/case-studies/${c.slug}/`}>{c.title}</Link>
              </h3>
              <p>{c.description}</p>
              <p className="project__result">{c.snapshot.headline}</p>
              <div className="project__links">
                <Link href={`/case-studies/${c.slug}/`} className="link">Read the case study</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta
        title="Want results like this?"
        actions={[
          { href: "/contact/", label: "Start your project", primary: true },
          { href: "/pricing/", label: "See pricing" },
        ]}
      >
        Tell us your goals and we will show you how we would approach your project.
      </Cta>
    </>
  );
}
