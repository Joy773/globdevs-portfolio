"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RevealHeading } from "@/components/ScrollReveal";
import { projects, projectTypes, type Project, type ProjectType } from "@/lib/content";

function ProjectCard({ project: p }: { project: Project }) {
  const href = p.caseStudy ?? p.liveUrl;
  return (
    <article className="project">
      <div className="project__img">
        <Image src={p.image} alt={p.imageAlt} width={800} height={600} />
        {p.concept && <span className="tag-concept">Concept project</span>}
      </div>
      <h3>
        {href ? <Link href={href}>{p.name}</Link> : p.name}
      </h3>
      <ul className="tags" aria-label="Tags">
        <li>{p.industry}</li>
        <li>{p.type}</li>
        {p.tech.slice(0, 2).map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p>
        A {p.industry.toLowerCase()} business needed {p.problem}. We {p.concept ? "designed" : "built"} {p.solution}.
      </p>
      {p.liveUrl && (
        <div className="project__links">
          <a href={p.liveUrl} className="link" target="_blank" rel="noopener noreferrer">View live site</a>
        </div>
      )}
    </article>
  );
}

const styles = `
  .section + .section.project-grid {
    padding-top: var(--section);
  }
  .project-grid__eyebrow {
    margin: 0 0 0.75rem;
    font-size: 0.92rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--accent-deep);
  }
  .project-grid .section-head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.25rem 2rem;
    max-width: none;
  }
  .project-grid__copy {
    display: grid;
    gap: 1rem;
    max-width: 44rem;
  }
  .project-grid__cta {
    flex-shrink: 0;
  }
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
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tags li {
    padding: 0.2rem 0.6rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: 0.82rem;
    color: var(--muted);
  }
  .project__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
    margin-top: auto;
    padding-top: 0.25rem;
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2.25rem;
  }
  .filters button {
    font: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 1.5px solid var(--line);
    background: transparent;
    color: var(--ink);
    cursor: pointer;
  }
  .filters button:hover { border-color: var(--ink); }
  .filters button[aria-pressed="true"] {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--paper);
  }
`;

export default function Projects({ featured = false }: { featured?: boolean }) {
  const [active, setActive] = useState<ProjectType | "All">("All");
  const list = featured
    ? projects.slice(0, 3)
    : active === "All"
      ? projects
      : projects.filter((p) => p.type === active);

  const cards = (
    <div className={featured ? "cards cards--3" : "cards"}>
      {list.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );

  if (featured) {
    return (
      <section className="section project-grid" aria-labelledby="work-title">
        <style>{styles}</style>
        <div className="wrap">
          <p className="project-grid__eyebrow">Work</p>
          <div className="section-head">
            <div className="project-grid__copy">
              <RevealHeading id="work-title">Featured projects</RevealHeading>
              <p>
                Concept projects that show how we plan and build. Each one starts with a real kind of
                business problem.
              </p>
            </div>
            <Link href="/projects/" className="btn project-grid__cta">
              See our projects
            </Link>
          </div>
          {cards}
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {(["All", ...projectTypes] as const).map((t) => (
          <button key={t} type="button" aria-pressed={active === t} onClick={() => setActive(t)}>
            {t}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
      {cards}
    </>
  );
}
