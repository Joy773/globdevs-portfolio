import Image from "next/image";
import Link from "next/link";
import { categories, formatDate, posts, type Post } from "@/lib/posts";

export default function Blogs({ items }: { items?: Post[] }) {
  const list = [...(items ?? posts)].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="section blogs" aria-labelledby="posts-title">
      <style>{`
        .section + .section.blogs {
          padding-top: var(--section);
        }
        .blogs__list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (min-width: 720px) {
          .blogs__list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 960px) {
          .blogs__list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .blogs__card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: color-mix(in srgb, var(--ink) 5%, var(--paper));
          color: inherit;
          text-decoration: none;
        }
        .blogs__card:nth-child(odd) {
          background: color-mix(in srgb, var(--gold) 11%, var(--paper));
        }
        .blogs__media {
          position: relative;
          aspect-ratio: 16 / 9;
          background: color-mix(in srgb, var(--ink) 6%, var(--paper));
        }
        .blogs__media img {
          object-fit: cover;
        }
        .blogs__body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex: 1;
          padding: 1.2rem 1.3rem 1.35rem;
        }
        .blogs__card:hover .blogs__title {
          text-decoration: underline;
          text-underline-offset: 0.18em;
          text-decoration-thickness: 2px;
        }
        .blogs__meta {
          margin: 0;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--accent-deep);
        }
        .blogs__title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 650;
          letter-spacing: -0.03em;
          line-height: 1.25;
        }
        .blogs__excerpt {
          margin: 0;
          flex: 1;
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.45;
        }
        .blogs__date {
          margin: 0;
          font-size: 0.88rem;
          color: var(--muted);
        }
        :root[data-theme="dark"] .blogs__card {
          background: var(--surface);
        }
        :root[data-theme="dark"] .blogs__card:nth-child(odd) {
          background: color-mix(in srgb, var(--gold) 14%, var(--surface));
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .blogs__card {
            background: var(--surface);
          }
          :root:not([data-theme="light"]) .blogs__card:nth-child(odd) {
            background: color-mix(in srgb, var(--gold) 14%, var(--surface));
          }
        }
      `}</style>
      <div className="wrap">
        <h2 id="posts-title" className="sr-only">Latest articles</h2>
        <ul className="chips" aria-label="Topics we write about">
          {categories.filter((c) => list.some((p) => p.category === c)).map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <ul className="blogs__list">
          {list.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="blogs__card">
                <div className="blogs__media">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 960px) 33vw, (min-width: 720px) 50vw, 100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="blogs__body">
                  <p className="blogs__meta">{post.category}</p>
                  <h3 className="blogs__title">{post.title}</h3>
                  <p className="blogs__excerpt">{post.description}</p>
                  <p className="blogs__date">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
