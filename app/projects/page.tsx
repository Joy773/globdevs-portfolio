import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import { RevealHeading, RevealTitle } from "@/components/ScrollReveal";
import Projects from "@/components/Projects";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Web Development Projects & Portfolio | GlobDevs" },
  description:
    "Browse websites, online stores and web apps built by GlobDevs, with the results each project achieved. See real work and get a free quote.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  const hasConcepts = projects.some((p) => p.concept);
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <RevealTitle>Our web development projects: built to look great and perform</RevealTitle>
          <p className="lede">
            Every project below started with a business problem: a slow site, no online sales,
            manual work or low visibility on Google. See what we built, how it performs and the
            results it delivered. Filter by type to find work similar to yours.
          </p>
          {hasConcepts && (
            <p className="notice mt-8" style={{ maxWidth: "38rem" }}>
              Projects marked “Concept project” are studio work we designed to show our process.
              They are not client sites, and we never put invented results on them.
            </p>
          )}
        </div>
      </section>

      <section className="wrap" aria-labelledby="featured-title">
        <h2 id="featured-title" className="sr-only">Featured projects</h2>
        <Projects />
      </section>

      <section className="section" aria-labelledby="tech-title">
        <div className="wrap split">
          <div className="section-head">
            <RevealHeading id="tech-title">Technology we use</RevealHeading>
          </div>
          <div className="prose">
            <p>
              We pick the right tools for each goal and budget: Next.js and React for fast custom
              sites and web apps, WordPress when you want to edit everything yourself, Shopify for
              stores that need to launch quickly, and Node.js with PostgreSQL behind bookings,
              dashboards and portals.
            </p>
            <p>
              You get a recommendation in plain language, not jargon. Want to see how we work
              through a project from start to finish?{" "}
              <Link href="/case-studies/" className="link">Read our case studies</Link>.
            </p>
          </div>
        </div>
      </section>

      <Cta
        title="Have a project in mind?"
        actions={[{ href: "/contact/", label: "Start your project", primary: true }]}
      >
        Tell us what you want to build and we will show you how we would approach it.
      </Cta>
    </>
  );
}
