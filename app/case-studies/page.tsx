import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import { RevealTitle } from "@/components/ScrollReveal";
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
          <RevealTitle>Web development case studies: real problems, real results</RevealTitle>
          <p className="lede">
            Screenshots show what a website looks like. A case study shows why it works. Here is
            how we take a business problem, build the right solution and measure the result.
          </p>
        </div>
      </section>

      <section className="wrap" aria-labelledby="list-title">
        <style>{`
          .project {
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
          }
          .project__img {
            position: relative;
            border: 1.5px solid var(--ink);
            border-radius: var(--radius);
            overflow: hidden;
            background: var(--surface);
            aspect-ratio: 4 / 3;
            margin-bottom: 0.35rem;
          }
          .project__img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .cards > :nth-child(odd) .project__img { transform: rotate(-0.6deg); }
          .cards > :nth-child(even) .project__img { transform: rotate(0.5deg); }
          .tag-concept {
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            padding: 0.25rem 0.65rem;
            border-radius: 999px;
            background: var(--ink);
            color: var(--accent);
            font-size: 0.8rem;
            font-weight: 600;
          }
          .project h3 a { text-decoration: none; }
          .project h3 a:hover {
            text-decoration: underline;
            text-underline-offset: 0.2em;
          }
          .project p { color: var(--muted); }
          .project .project__result { color: var(--ink); font-weight: 500; }
          .project__links {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem 1.25rem;
            margin-top: auto;
            padding-top: 0.25rem;
          }
        `}</style>
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
