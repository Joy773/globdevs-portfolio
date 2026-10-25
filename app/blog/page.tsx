import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import { categories, formatDate, posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Web Development Tips for Business Owners | GlobDevs" },
  description:
    "Practical, jargon-free guides on website cost, speed, SEO and e-commerce for business owners. Learn how to grow online with GlobDevs.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const used = new Set(posts.map((p) => p.category));
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1>Web development tips and guides for business owners</h1>
          <p className="lede">
            Plain-English advice on building, improving and growing your website, written by the
            GlobDevs team. No jargon, just practical web development tips you can use today.
          </p>
        </div>
      </section>

      <section className="wrap" aria-labelledby="posts-title">
        <h2 id="posts-title" className="sr-only">Latest articles</h2>
        <ul className="chips" aria-label="Topics we write about">
          {categories.filter((c) => used.has(c)).map((c) => <li key={c}>{c}</li>)}
        </ul>
        <ul className="post-list">
          {sorted.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}/`}>
                <span className="post-meta">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <br />
                  {p.category}
                </span>
                <span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {site.newsletterAction ? (
        <section className="section" aria-labelledby="news-title">
          <div className="wrap">
            <h2 id="news-title">Keep learning with GlobDevs</h2>
            <p className="lede mt-4">Get one practical website tip a month. No spam.</p>
            <form className="newsletter" action={site.newsletterAction} method="post">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
              <button className="btn btn--primary" type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      ) : null}

      <Cta
        title="Rather have us look at your site?"
        actions={[
          { href: "/contact/?need=improve", label: "Get a free quote", primary: true },
          { href: "/products/", label: "See packages" },
        ]}
      >
        Send us your website address and we will tell you what is slowing it down and what to fix
        first.
      </Cta>
    </>
  );
}
