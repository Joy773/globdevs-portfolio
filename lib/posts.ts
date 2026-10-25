/**
 * Blog posts. The content doc recommends starting with three:
 * cost, speed and the SEO checklist. Add the next ones from `plannedPosts`
 * using the same shape. Paragraphs are plain strings; a string[] renders
 * as a bullet list.
 */

export type Block = string | string[];

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  category: string;
  date: string; // ISO
  author: { name: string; role: string; bio: string };
  takeaways: string[];
  intro: string;
  sections: { heading: string; blocks: Block[] }[];
  related: { href: string; label: string };
};

// TODO: replace with a real team member's name, role and one line of experience
const author = {
  name: "The GlobDevs team",
  role: "Web developers",
  bio: "We build fast, SEO-ready websites and web apps for small and growing businesses.",
};

export const categories = [
  "Website Cost and Planning",
  "SEO and Google Rankings",
  "Speed and Performance",
  "E-commerce",
  "Web Apps and Automation",
];

export const posts: Post[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost in 2026? A Simple Guide",
    metaTitle: "How Much Does a Website Cost in 2026? | GlobDevs",
    description:
      "What really decides website development cost, where the money goes, and how to get a fixed quote you can trust. A plain-English guide for business owners.",
    keyword: "website development cost",
    category: "Website Cost and Planning",
    date: "2026-10-20",
    author,
    takeaways: [
      "Website cost depends on pages, features, content and who builds it.",
      "Features like bookings, payments and accounts add the most cost.",
      "Ask for a fixed written quote that lists exactly what is included.",
      "Starting small and growing later is often the smartest budget.",
    ],
    intro:
      "Website development cost depends on four things: how many pages you need, which features the site must have, who writes the content and how the site is built. A simple business site and an online store with accounts and payments are very different jobs. This guide explains where the money goes, so you can compare quotes fairly and avoid paying twice.",
    sections: [
      {
        heading: "What you are actually paying for",
        blocks: [
          "A website price is mostly time. Someone has to plan the pages, design them, build them, test them on real phones and set up the technical SEO. A good quote breaks this into stages so you can see where each hour goes.",
          [
            "Planning: understanding your customers, goals and competitors",
            "Design: page layouts you approve before any code is written",
            "Development: building the pages and features",
            "Testing: checking speed, forms and layouts on real devices",
            "Launch: domain, hosting, analytics and a sitemap for Google",
          ],
        ],
      },
      {
        heading: "The five things that change the price",
        blocks: [
          "Number of pages and design complexity. Ten unique layouts take longer than ten pages that share one template.",
          "Features. Online booking, payments, user accounts and connections to other tools are where costs grow fastest, because each one needs building, testing and security.",
          "Content. If you supply the text and photos, the project moves faster. Copywriting and photography are separate work.",
          "Custom build or template. A template-based site is quicker to launch. A custom build costs more but fits your business exactly and is usually faster to load.",
          "Timeline and support. A rushed deadline means more people at once. Ongoing updates and backups are normally a monthly plan.",
        ],
      },
      {
        heading: "Why the cheapest quote can cost more",
        blocks: [
          "A low price can become expensive when the site is slow, insecure or invisible on Google and needs rebuilding a year later. Before you choose, ask every company the same questions: Who owns the code? What happens after launch? Is the quote fixed? What is not included?",
        ],
      },
      {
        heading: "How to get a quote you can trust",
        blocks: [
          [
            "Write down your goal in one sentence, for example “get more booking requests”.",
            "List the must-have features and the nice-to-haves separately.",
            "Ask for a fixed written quote with scope, timeline and payment milestones.",
            "Check that extra work needs your approval before it is billed.",
          ],
          "If your budget is limited, ask for a smaller first version. A solid foundation lets you add pages and features later without starting over.",
        ],
      },
    ],
    related: { href: "/pricing/", label: "See GlobDevs pricing" },
  },
  {
    slug: "why-is-my-website-slow",
    title: "12 Reasons Your Website Is Slow and How to Fix Them",
    metaTitle: "Why Is My Website Slow? 12 Fixes | GlobDevs",
    description:
      "Why is my website slow? Twelve common causes, from heavy images to cheap hosting, and the fix for each one. Simple steps you can check today.",
    keyword: "why is my website slow",
    category: "Speed and Performance",
    date: "2026-10-18",
    author,
    takeaways: [
      "Images are the most common reason a website is slow.",
      "Too many plugins and third-party scripts add up quickly.",
      "Test on a phone, not only on your office computer.",
      "Google’s PageSpeed Insights shows exactly what to fix first.",
    ],
    intro:
      "If you are asking “why is my website slow?”, the answer is usually one of a dozen common problems, and most of them can be fixed without a rebuild. A slow site loses visitors before they read a word, and Google favors fast pages. Here are the twelve causes we see most often, with the fix for each.",
    sections: [
      {
        heading: "Start by measuring",
        blocks: [
          "Open PageSpeed Insights, enter your address and look at the mobile result. Write down the score and the Largest Contentful Paint time. Fix one thing at a time and test again, so you know what made the difference.",
        ],
      },
      {
        heading: "The 12 most common causes",
        blocks: [
          [
            "Huge images. Resize them to the size they are shown at and save as WebP or AVIF.",
            "No lazy loading. Images below the fold should load only when the visitor scrolls to them.",
            "Too many plugins. Remove anything you don’t use; each one can add scripts to every page.",
            "Heavy page builders. They often load a lot of code for simple layouts.",
            "Third-party scripts. Chat widgets, trackers and ads all compete for loading time.",
            "Too many fonts. Use one or two families and load only the weights you need.",
            "Cheap shared hosting. A slow server delays everything before the page even starts.",
            "No caching. Pages are rebuilt for every visitor instead of being served ready-made.",
            "No CDN. Visitors far from your server wait longer for every file.",
            "Autoplay video in the hero. Use a poster image and load the video on click.",
            "Redirect chains. Each extra hop adds a delay; link straight to the final address.",
            "Old code. Outdated themes and libraries are slower and less secure.",
          ],
        ],
      },
      {
        heading: "What to fix first",
        blocks: [
          "Images and third-party scripts give the biggest wins for the least work. Hosting and caching come next. If the site is built on a heavy theme with dozens of plugins, a lightweight rebuild is sometimes cheaper than patching it for years.",
        ],
      },
    ],
    related: { href: "/products/#speed-seo", label: "See the Speed and SEO Boost" },
  },
  {
    slug: "website-seo-checklist",
    title: "Website SEO Checklist for Small Businesses",
    metaTitle: "Website SEO Checklist for Small Businesses | GlobDevs",
    description:
      "A practical website SEO checklist for small businesses: technical basics, page content and local SEO. Work through it in an afternoon.",
    keyword: "website SEO checklist",
    category: "SEO and Google Rankings",
    date: "2026-10-15",
    author,
    takeaways: [
      "Give every page one main keyword and one clear H1.",
      "Speed and mobile layout are part of SEO, not extras.",
      "Keep your name, address and phone the same everywhere.",
      "Real reviews and helpful content build rankings over time.",
    ],
    intro:
      "This website SEO checklist covers what a small business site needs so Google can find, understand and trust its pages. You don’t need to be technical to use it. Work through each section, tick what is done and note what needs a developer.",
    sections: [
      {
        heading: "Technical basics",
        blocks: [
          [
            "The site uses HTTPS and works well on phones.",
            "An XML sitemap is submitted in Google Search Console.",
            "A robots.txt file exists and doesn’t block important pages.",
            "Mobile PageSpeed results pass Core Web Vitals.",
            "URLs are short, lowercase and use hyphens.",
            "Old addresses redirect to new ones with a 301 redirect.",
          ],
        ],
      },
      {
        heading: "Every page",
        blocks: [
          [
            "One main keyword, used in the URL, title, H1 and first 100 words.",
            "A unique title under about 60 characters.",
            "A meta description under about 155 characters that says what the visitor gets.",
            "Exactly one H1, then H2 and H3 headings in order.",
            "Descriptive alt text on images.",
            "Links to related pages and a clear next step.",
          ],
        ],
      },
      {
        heading: "Local SEO",
        blocks: [
          [
            "A complete Google Business Profile with photos and opening hours.",
            "The same business name, address and phone on your site and every profile.",
            "A page for each main service, written for the area you serve.",
            "A habit of asking happy customers for reviews.",
          ],
        ],
      },
      {
        heading: "Trust and content",
        blocks: [
          "Google rewards pages that show real experience. Add real photos of your team, case studies with real numbers and guides that answer the questions customers ask you on the phone. Publish regularly, even if it’s only twice a month.",
        ],
      },
    ],
    related: { href: "/products/#business-website", label: "See the Business Website package" },
  },
];

/** Titles from the content plan, not yet written. Not shown on the site. */
export const plannedPosts = [
  "Custom Website vs Template: Which Is Right for Your Business?",
  "Core Web Vitals Explained in Plain English",
  "How to Choose a Web Development Company: 10 Questions to Ask",
  "Shopify vs WooCommerce vs Custom Store",
  "What Is a Web Application and Does Your Business Need One?",
  "Website Redesign Checklist: Keep Your Rankings While You Change",
  "How Often Should You Update and Back Up Your Website?",
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
