import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import PostToc from "@/components/PostToc";
import { RevealHeading, RevealTitle } from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { formatDate, posts, type Block } from "@/lib/posts";
import { site } from "@/lib/site";

function titledItem(item: string) {
  const at = item.indexOf(". ");
  if (at > 0 && at <= 48) {
    return { heading: item.slice(0, at), body: item.slice(at + 2) };
  }
  return null;
}

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function flattenSections(sections: { heading: string; blocks: Block[] }[]) {
  const used = new Set<string>();
  const idFor = (label: string) => {
    const base = headingId(label) || "section";
    let id = base;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    return id;
  };

  const out: { id: string; heading: string; blocks: Block[] }[] = [];
  for (const section of sections) {
    const listed = section.blocks.length === 1 && Array.isArray(section.blocks[0]) ? section.blocks[0] : null;
    const titled = listed?.map(titledItem);
    if (titled && titled.every(Boolean)) {
      for (const item of titled) {
        out.push({ id: idFor(item!.heading), heading: item!.heading, blocks: [item!.body] });
      }
    } else {
      out.push({ id: idFor(section.heading), heading: section.heading, blocks: section.blocks });
    }
  }
  return out;
}

function PostSection({ id, heading, blocks }: { id: string; heading: string; blocks: Block[] }) {
  return (
    <section>
      <RevealHeading id={id}>{heading}</RevealHeading>
      {blocks.map((block, i) =>
        Array.isArray(block) ? (
          block.map((item) => <p key={item}>{item}</p>)
        ) : (
          <p key={i}>{block}</p>
        ),
      )}
    </section>
  );
}

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
    openGraph: {
      type: "article",
      publishedTime: p.date,
      images: [{ url: p.image, alt: p.imageAlt }],
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const sections = flattenSections(p.sections);

  return (
    <>
      <article className="page-top post-page">
        <div className="wrap post-wrap">
          <div className="post-crumbs">
            <Breadcrumbs items={[{ href: "/blog/", label: "Blog" }, { href: `/blog/${p.slug}/`, label: p.title }]} />
          </div>
          <figure className="post-cover">
            <Image
              src={p.image}
              alt={p.imageAlt}
              fill
              sizes="(min-width: 1160px) 1160px, 100vw"
              priority
            />
          </figure>
          <PostToc items={sections.map(({ id, heading }) => ({ id, label: heading }))} />
          <div className="post-main">
            <RevealTitle>{p.title}</RevealTitle>
            <p className="post-meta">
              <time dateTime={p.date}>{formatDate(p.date)}</time>, {p.category}
            </p>
            <div className="prose post-body">
              <p className="lede" style={{ color: "var(--ink)" }}>{p.intro}</p>

              {sections.map((s) => (
                <PostSection key={s.id} id={s.id} heading={s.heading} blocks={s.blocks} />
              ))}

              <section className="post-more">
                <style>{`
                  .post-more h2 { margin-bottom: 0; }
                  .post-more ul { margin-top: 1.75rem; }
                  .post-more li + li { margin-top: 0.95rem; }
                `}</style>
                <RevealHeading>Keep reading</RevealHeading>
                <ul>
                  <li><Link href={p.related.href} className="link">{p.related.label}</Link></li>
                  {others.map((o) => (
                    <li key={o.slug}><Link href={`/blog/${o.slug}/`} className="link">{o.title}</Link></li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            image: `${site.url}${p.image}`,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author.name },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
            mainEntityOfPage: `${site.url}/blog/${p.slug}/`,
          }}
        />
      </article>

      <Cta
        mist
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
