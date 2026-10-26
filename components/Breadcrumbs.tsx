import Link from "next/link";
import { site } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <style>{`
        .crumbs ol {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          font-size: 0.92rem;
          color: var(--muted);
        }
        .crumbs li + li::before {
          content: "/";
          margin-right: 0.4rem;
          opacity: 0.6;
        }
        .crumbs a { text-decoration: none; }
        .crumbs a:hover { text-decoration: underline; }
      `}</style>
      <ol>
        {all.map((c, i) => (
          <li key={c.href}>
            {i === all.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: site.url + c.href,
          })),
        }}
      />
    </nav>
  );
}
