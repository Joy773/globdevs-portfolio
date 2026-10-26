# globdevs-portfolio

The GlobDevs website: 7 pages built from the content plan, with Next.js 16 (App Router), React 19, Tailwind 4 and react-icons (Phosphor set).

Colors: soft dark yellow `#e8b931` and black for buttons; change them in `app/globals.css` (`--accent`).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (every page is prerendered)
```

## Where things live

```
app/
  page.tsx                      Home            /
  projects/page.tsx             Projects        /projects/
  case-studies/page.tsx         Case study hub  /case-studies/
  case-studies/[slug]/page.tsx  One case study  /case-studies/clinic-booking-website/
  products/page.tsx             Products        /products/
  pricing/page.tsx              Pricing         /pricing/
  blog/page.tsx                 Blog            /blog/
  blog/[slug]/page.tsx          Blog post       /blog/<slug>/
  contact/page.tsx              Contact         /contact/
  sitemap.ts, robots.ts         SEO files
  fonts/                        Self-hosted fonts: Jersey 25 (H1 only), Hanken Grotesk (everything else)
components/                     Header, Footer, hero globe, cards, FAQ, contact form, icons
lib/
  site.ts                       Contact details, promises, proof numbers, testimonials
  content.ts                    Projects, case studies, packages and prices
  posts.ts                      Blog posts
public/work/                    Hand-drawn SVG project illustrations
```

## Before launch: replace placeholders

All of them are in `lib/`, marked `TODO`.

| What | File |
| --- | --- |
| Domain, email, WhatsApp, calendar link, hours | `lib/site.ts` |
| Real proof numbers (hidden until set) | `lib/site.ts` → `proof` |
| Real testimonials (section hidden until added) | `lib/site.ts` → `testimonials` |
| Package prices (show "Quoted per project" until set) | `lib/content.ts` → `from` |
| Real client projects and case studies | `lib/content.ts` |
| Author name and bio on blog posts | `lib/posts.ts` |

The four projects and the case study are labelled **concept** on the site. Never add invented numbers, client names or reviews.

## Contact form

There is no backend yet. Submitting opens the visitor's email app (or WhatsApp, once a number is set) with the request filled in. To receive requests directly, connect `components/ContactForm.tsx` to a form service such as Formspree or Resend.
