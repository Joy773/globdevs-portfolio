import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import { RevealHeading, RevealTitle } from "@/components/ScrollReveal";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title.split(":")[0],
    description: c.description,
    alternates: { canonical: `/case-studies/${c.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  const hasBefore = c.results.some((r) => r.before);

  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <Breadcrumbs items={[{ href: "/case-studies/", label: "Case studies" }, { href: `/case-studies/${c.slug}/`, label: c.title.split(":")[0] }]} />
          <RevealTitle>{c.title}</RevealTitle>
          {c.concept && (
            <p className="notice mt-8" style={{ maxWidth: "40rem" }}>
              This is a concept case study. It shows how we plan and build this kind of project.
              The numbers below are the targets we design for, not results from a client.
            </p>
          )}
        </div>
      </section>

      <section className="wrap">
        <div className="split">
          <dl className="snapshot" aria-label="Project snapshot">
            <div><dt>Client</dt><dd>{c.snapshot.client}</dd></div>
            <div><dt>Services</dt><dd>{c.snapshot.services}</dd></div>
            <div><dt>Technology</dt><dd>{c.snapshot.technology}</dd></div>
            <div><dt>Timeline</dt><dd>{c.snapshot.timeline}</dd></div>
            <div><dt>Headline result</dt><dd>{c.snapshot.headline}</dd></div>
          </dl>
          <div className="figure">
            <Image src={c.image} alt={`${c.title.split(":")[0]} design`} width={800} height={600} priority />
          </div>
        </div>
      </section>

      <article className="section">
        <div className="wrap prose">
          <RevealHeading>The challenge</RevealHeading>
          <p>{c.challenge}</p>

          <RevealHeading>The goals</RevealHeading>
          <ul>{c.goals.map((g) => <li key={g}>{g}</li>)}</ul>

          <RevealHeading>Our solution</RevealHeading>
          <h3>Strategy and design</h3>
          <p>{c.strategy}</p>
          <h3>Development</h3>
          <p>{c.development}</p>
          <h3>SEO and speed</h3>
          <p>{c.seo}</p>

          <RevealHeading>{hasBefore ? "The results" : "What we measure"}</RevealHeading>
          <div className="table-scroll">
            <table className="benefits">
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  {hasBefore && <th scope="col">Before</th>}
                  <th scope="col">{hasBefore ? "After" : "Target"}</th>
                </tr>
              </thead>
              <tbody>
                {c.results.map((r) => (
                  <tr key={r.measure}>
                    <th scope="row">{r.measure}</th>
                    {hasBefore && <td>{r.before}</td>}
                    <td>{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {c.quote && (
            <>
              <RevealHeading>What the client says</RevealHeading>
              <figure className="quote">
                <blockquote>“{c.quote.text}”</blockquote>
                <figcaption>
                  <strong>{c.quote.name}</strong>
                  {c.quote.role}, {c.quote.company}
                </figcaption>
              </figure>
            </>
          )}
        </div>
      </article>

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
