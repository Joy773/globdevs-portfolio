/**
 * Projects, case studies and packages.
 *
 * The four projects below are CONCEPT projects, as the content doc suggests
 * for a new studio. They are labelled as concepts everywhere on the site.
 * When you ship real client work, add it with `concept: false`, a live URL
 * and a real one-line result, and move it to the top of the list.
 */

export type ProjectType = "Business Websites" | "E-commerce" | "Web Apps" | "Redesigns";

export type Project = {
  slug: string;
  name: string;
  short: string;
  type: ProjectType;
  industry: string;
  tech: string[];
  concept: boolean;
  problem: string;
  solution: string;
  /** Real result for client work. For concepts, the target we designed for. */
  result: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  caseStudy?: string;
};

export const projectTypes: ProjectType[] = [
  "Business Websites",
  "E-commerce",
  "Web Apps",
  "Redesigns",
];

export const projects: Project[] = [
  {
    slug: "clinic-booking-website",
    name: "Clinic Booking Website",
    short: "Online appointments for a dental clinic",
    type: "Web Apps",
    industry: "Healthcare",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    concept: true,
    problem: "patients to book online instead of calling",
    solution: "a fast site with 24/7 booking, SMS reminders and a simple admin view",
    result: "Designed to load in under 2 seconds on a mid-range phone",
    image: "/work/clinic.svg",
    imageAlt: "GlobDevs web app concept for a dental clinic, showing a booking calendar",
    caseStudy: "/case-studies/clinic-booking-website/",
  },
  {
    slug: "restaurant-ordering-site",
    name: "Restaurant Ordering Site",
    short: "Menu, pickup orders and WhatsApp confirmations",
    type: "Business Websites",
    industry: "Food and drink",
    tech: ["Next.js", "Stripe"],
    concept: true,
    problem: "fewer phone orders and a menu that works on phones",
    solution: "a one-page menu with pickup checkout and kitchen alerts",
    result: "Designed so a repeat order takes three taps",
    image: "/work/restaurant.svg",
    imageAlt: "GlobDevs business website concept for a restaurant, showing a phone menu",
  },
  {
    slug: "handmade-goods-store",
    name: "Handmade Goods Store",
    short: "A small online shop for a craft brand",
    type: "E-commerce",
    industry: "Retail",
    tech: ["Shopify", "Liquid"],
    concept: true,
    problem: "an online store they can run themselves",
    solution: "a lean Shopify shop with fast product pages and local payments",
    result: "Built around product pages that pass Core Web Vitals",
    image: "/work/store.svg",
    imageAlt: "GlobDevs e-commerce concept for a handmade goods store, showing product cards",
  },
  {
    slug: "consultancy-redesign",
    name: "Consultancy Website Redesign",
    short: "From a slow template to a clear lead site",
    type: "Redesigns",
    industry: "Professional services",
    tech: ["WordPress", "Custom theme"],
    concept: true,
    problem: "a faster site without losing their Google rankings",
    solution: "a lightweight theme, URL redirects and clearer service pages",
    result: "Planned with a full 301 redirect map so no ranking page is lost",
    image: "/work/redesign.svg",
    imageAlt: "GlobDevs redesign concept for a consultancy, comparing old and new layouts",
  },
];

/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  concept: boolean;
  image: string;
  snapshot: { client: string; services: string; technology: string; timeline: string; headline: string };
  challenge: string;
  goals: string[];
  strategy: string;
  development: string;
  seo: string;
  /** For real projects use "before" and "after". For concepts, only targets. */
  results: { measure: string; before?: string; after: string }[];
  quote?: { text: string; name: string; role: string; company: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinic-booking-website",
    title: "Clinic Booking Website: Planning a Site That Fills the Appointment Book",
    description:
      "A concept case study: how we would plan, build and measure a booking website for a local dental clinic.",
    concept: true,
    image: "/work/clinic.svg",
    snapshot: {
      client: "A local dental clinic (concept project)",
      services: "Custom website, local SEO, booking system",
      technology: "Next.js, Node.js, PostgreSQL",
      timeline: "6 weeks (planned)",
      headline: "Online booking 24/7, mobile load under 2 seconds (targets)",
    },
    challenge:
      "Many small clinics run on a slow template site that was never built for phones. Patients who search for a dentist nearby either can't find the clinic or leave before the page loads. Almost every appointment is booked by phone, so reception spends hours each day on calls instead of patients in the room.",
    goals: [
      "Rank on page 1 of Google for “dentist in [city]” and the clinic’s main treatments",
      "Let patients book online at any hour, without creating an account",
      "Load in under 2 seconds on a mid-range phone on a 4G connection",
    ],
    strategy:
      "We start with the people booking: busy parents, office workers on a lunch break and older patients who prefer to call. Every page leads to one action, “Book an appointment”, which sits in the header and at the end of each treatment page. A phone number stays one tap away for people who still want to talk to someone.",
    development:
      "The site is built with Next.js so treatment pages are pre-rendered and load instantly. Bookings run on a small Node.js API with a PostgreSQL database that stores the clinic’s working hours, dentists and time slots. Reception gets a simple dashboard to confirm, move or cancel appointments, and patients receive an SMS reminder the day before. Forms are validated on the server and the admin area sits behind two-factor sign-in.",
    seo:
      "Each treatment gets its own page with one main keyword, a clear H1 and FAQ answers patients actually ask. We add LocalBusiness and FAQPage schema, compress every image to WebP, keep JavaScript small and match the clinic’s name, address and phone with its Google Business Profile.",
    results: [
      { measure: "Mobile PageSpeed score", after: "90 or higher" },
      { measure: "Page load time on 4G", after: "Under 2 seconds" },
      { measure: "Booking without a phone call", after: "Available 24/7" },
      { measure: "Reminder sent before each visit", after: "Automatic SMS" },
    ],
  },
];

/* ------------------------------------------------------------------ */

export type Package = {
  id: string;
  name: string;
  bestFor: string;
  includes: string[];
  pricingIncludes: string;
  outcome: string;
  delivery: string;
  /** Starting price in USD. null shows "Quoted per project". TODO: add real prices. */
  from: number | null;
  monthly?: boolean;
};

export const packages: Package[] = [
  {
    id: "business-website",
    name: "Business Website",
    bestFor: "New and growing businesses that need a professional online presence.",
    includes: [
      "Up to 5 to 10 custom-designed pages, mobile-first",
      "On-page SEO setup: titles, descriptions, schema, sitemap",
      "Contact form, WhatsApp or booking button, analytics",
      "Easy content editor and a training session",
    ],
    pricingIncludes: "5 to 10 custom pages, SEO setup, contact form, analytics, training",
    outcome: "Customers can find you, trust you and contact you.",
    delivery: "3 to 5 weeks",
    from: null,
  },
  {
    id: "online-store",
    name: "Online Store Launch",
    bestFor: "Brands ready to sell products online.",
    includes: [
      "Product catalog with fast category and product pages",
      "Secure checkout with Stripe, PayPal or local payment options",
      "Product SEO and structured data for rich results",
      "Inventory, orders and shipping setup",
    ],
    pricingIncludes: "Catalog, secure checkout, payments, product SEO, inventory setup",
    outcome: "A store that is easy to buy from and easy to find.",
    delivery: "4 to 8 weeks",
    from: null,
  },
  {
    id: "booking-system",
    name: "Booking and Appointment System",
    bestFor: "Clinics, salons, consultants, schools and other service businesses.",
    includes: [
      "Online booking with calendar and reminders",
      "Admin dashboard to manage appointments",
      "Email or SMS confirmations (optional)",
      "Payments and customer accounts (optional)",
    ],
    pricingIncludes: "Online booking, admin dashboard, reminders",
    outcome: "Fewer phone calls, fewer missed appointments, more time for real work.",
    delivery: "4 to 6 weeks",
    from: null,
  },
  {
    id: "speed-seo",
    name: "Speed and SEO Boost",
    bestFor: "Businesses that already have a slow or hard-to-find website.",
    includes: [
      "Technical SEO and Core Web Vitals audit",
      "Image, code and caching optimization",
      "Fixes for broken links, redirects and mobile issues",
      "A clear report with before and after results",
    ],
    pricingIncludes: "Audit, fixes, optimization report",
    outcome: "A faster site that is easier for Google and customers to use.",
    delivery: "1 to 2 weeks",
    from: null,
  },
  {
    id: "care-plan",
    name: "Website Care Plan",
    bestFor: "Any business that wants peace of mind after launch.",
    includes: [
      "Updates, backups, security scans and uptime monitoring",
      "Speed checks and a monthly report",
      "Small content and design changes included",
      "Priority support with a 24-hour response",
    ],
    pricingIncludes: "Updates, backups, security, monitoring, support",
    outcome: "Your site stays safe, fast and online without you thinking about it.",
    delivery: "Billed monthly",
    from: null,
    monthly: true,
  },
];

export function formatFrom(p: Package) {
  if (p.from === null) return "Quoted per project";
  return `From $${p.from.toLocaleString("en-US")}${p.monthly ? " / month" : ""}`;
}
