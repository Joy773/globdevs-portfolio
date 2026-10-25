/**
 * GlobDevs site settings.
 *
 * Everything the content doc marks as a [placeholder] lives in this file
 * (and in lib/content.ts). Fill in real values here; the pages read from it.
 *
 * Rule from the content doc: never publish invented numbers, client names
 * or testimonials. Sections that depend on real proof stay hidden until
 * you add real data (see `proof` and `testimonials`).
 */

export const site = {
  name: "GlobDevs",
  // TODO: replace with the real production domain (no trailing slash)
  url: "https://globdevs.com",
  tagline: "Web development that helps your business grow",

  contact: {
    // TODO: real contact details
    email: "hello@globdevs.com",
    whatsapp: "", // international format, digits only, e.g. "8801XXXXXXXXX"
    calendar: "", // e.g. a Cal.com or Calendly link
    hours: "Sunday to Thursday, 10am to 7pm (GMT+6)",
    city: "Dhaka",
    country: "Bangladesh",
  },

  // Promises used in copy. Change once and every page updates.
  promises: {
    replyTime: "one business day",
    quoteTime: "24 to 48 hours",
    callLength: "30-minute",
    supportResponse: "24-hour",
  },

  social: {
    // TODO: add profile links; empty ones are not shown
    linkedin: "",
    github: "https://github.com/Joy773",
    clutch: "",
    upwork: "",
  },

  /**
   * Proof line under the hero. Leave a value as null until it is real.
   * If every value is null the strip shows your working commitments instead.
   */
  proof: {
    projectsDelivered: null as number | null,
    countries: null as number | null,
    ownSitePageSpeed: null as number | null,
  },

  /**
   * Real testimonials only, with the client's permission.
   * The "What clients say" section is hidden while this list is empty.
   */
  testimonials: [] as {
    quote: string;
    name: string;
    role: string;
    company: string;
  }[],

  /**
   * Optional newsletter form action (Buttondown, Mailchimp, ConvertKit...).
   * The blog subscribe box is hidden while this is empty.
   */
  newsletterAction: "",
} as const;

export const nav = [
  { href: "/projects/", label: "Projects" },
  { href: "/case-studies/", label: "Case studies" },
  { href: "/products/", label: "Products" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/blog/", label: "Blog" },
];

export function whatsappLink(text?: string) {
  if (!site.contact.whatsapp) return "";
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${site.contact.whatsapp}${q}`;
}
