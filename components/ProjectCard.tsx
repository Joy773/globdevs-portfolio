import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project: p, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const href = p.caseStudy ?? p.liveUrl;
  return (
    <article className="project">
      <div className="project__img">
        <Image src={p.image} alt={p.imageAlt} width={800} height={600} />
        {p.concept && <span className="tag-concept">Concept project</span>}
      </div>
      <H>
        {href ? <Link href={href}>{p.name}</Link> : p.name}
      </H>
      <ul className="tags" aria-label="Tags">
        <li>{p.industry}</li>
        <li>{p.type}</li>
        {p.tech.slice(0, 2).map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p>
        A {p.industry.toLowerCase()} business needed {p.problem}. We {p.concept ? "designed" : "built"} {p.solution}.
      </p>
      <p className="project__result">{p.result}.</p>
      <div className="project__links">
        {p.caseStudy && <Link href={p.caseStudy} className="link">Read the case study</Link>}
        {p.liveUrl && (
          <a href={p.liveUrl} className="link" target="_blank" rel="noopener noreferrer">View live site</a>
        )}
      </div>
    </article>
  );
}
