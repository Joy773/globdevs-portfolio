import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/projects/", "/case-studies/", "/products/", "/pricing/", "/blog/", "/contact/"];
  return [
    ...pages.map((p) => ({ url: site.url + p, priority: p === "/" ? 1 : 0.8 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/case-studies/${c.slug}/`, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}/`, lastModified: p.date, priority: 0.6 })),
  ];
}
