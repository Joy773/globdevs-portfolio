import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import Ticks from "@/components/Ticks";
import JsonLd from "@/components/JsonLd";
import { Person } from "@/components/icons";
import { formatDate, posts } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", publishedTime: p.date },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <article className="page-top">
        <div className="wrap">
          <Breadcrumbs items={[{ href: "/blog/", label: "Blog" }, { href: `/blog/${p.slug}/`, label: p.title }]} />
          <div className="prose">
            <h1 style={{ maxWidth: "20ch" }}>{p.title}</h1>
            <p className="post-meta">
              <time dateTime={p.date}>{formatDate(p.date)}</time>, {p.category}
            </p>

            <aside className="takeaways" aria-labelledby="tk-title">
              <h2 id="tk-title">Key takeaways</h2>
              <Ticks items={p.takeaways} />
            </aside>

            <p className="lede" style={{ color: "var(--ink)" }}>{p.intro}</p>

            {p.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.blocks.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="mt-4">{b.map((li) => <li key={li}>{li}</li>)}</ul>
                  ) : (
                    <p key={i} className="mt-4">{b}</p>
                  ),
                )}
              </section>
            ))}

            <h2>Keep reading</h2>
            <ul>
              <li><Link href={p.related.href} className="link">{p.related.label}</Link></li>
              {others.map((o) => (
                <li key={o.slug}><Link href={`/blog/${o.slug}/`} className="link">{o.title}</Link></li>
              ))}
            </ul>

            <div className="author mt-12">
              <span className="author__avatar"><Person /></span>
              <div>
                <strong>{p.author.name}</strong>
                <p>{p.author.role}. {p.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author.name },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
            mainEntityOfPage: `${site.url}/blog/${p.slug}/`,
          }}
        />
      </article>

      <Cta
        title="Want a site that gets this right?"
        actions={[
          { href: "/contact/", label: "Get a free quote", primary: true },
          { href: "/pricing/", label: "See pricing" },
        ]}
      >
        We build fast, SEO-ready websites with a fixed written quote and no hidden costs.
      </Cta>
    </>
  );
}
