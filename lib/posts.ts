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
  image: string;
  imageAlt: string;
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
    image: "/blog/website-quotes.jpg",
    imageAlt: "Printed website quotes, a calculator and coffee on a cafe table",
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
          "A website price is mostly time. Someone has to plan the pages, design them, build them, test them on real phones and set up the technical SEO. A cheap quote that skips those stages is not a bargain. It is a shorter list of work, and the missing pieces show up later as extra invoices or a site that does not rank.",
          "A good quote breaks the job into stages so you can see where each hour goes. Planning is understanding your customers, goals and competitors. Design is the layouts you approve before any code is written. Development is building the pages and features. Testing is checking speed, forms and layouts on real devices. Launch is the domain, hosting, analytics and a sitemap for Google.",
        ],
      },
      {
        heading: "Pages and design complexity",
        blocks: [
          "Ten unique layouts take longer than ten pages that share one template. A homepage, a service page, a case study and a contact page can share a structure and still look distinct. A one-off layout for every URL is what pushes the price up.",
          "If you are not sure how many pages you need, start from the jobs the site has to do: explain the offer, prove you can do it, and make it easy to get in touch. Extra pages can wait until the first version is live.",
        ],
      },
      {
        heading: "Features",
        blocks: [
          "Online booking, payments, user accounts and connections to other tools are where costs grow fastest. Each one needs building, testing and security, and each one has an edge case that only appears on a real phone with a real customer.",
          "Write down the must-haves and the nice-to-haves separately. A booking calendar might be essential. A membership area can wait. That split is the difference between a quote you can afford this quarter and one you keep postponing.",
        ],
      },
      {
        heading: "Content",
        blocks: [
          "If you supply the text and photos, the project moves faster. Copywriting, photography and video are separate work, and they should be priced that way. A developer waiting on content is still on the clock if the timeline assumed you would send it in week one.",
          "You do not need a finished novel. A page-by-page outline, a few real photos and the answers you already give on sales calls are enough to start. We can help shape that into headings and body copy as the layouts land.",
        ],
      },
      {
        heading: "Custom build or template",
        blocks: [
          "A template-based site is quicker to launch. You pick a look, fill it with content and go. The trade-off is that you inherit someone else’s code, and you often pay for features you never use. That extra weight is one reason template sites feel slow.",
          "A custom build costs more up front but fits the business exactly and is usually faster to load. You own the code. You can add a page later without fighting a theme update. For a site that has to bring in work for years, that is usually the cheaper path.",
        ],
      },
      {
        heading: "Timeline and support",
        blocks: [
          "A rushed deadline means more people at once, and overlap is expensive. A steady six or eight weeks is cheaper than a scramble, and the work is better. Ask what happens if content arrives late. A honest studio will move the launch date rather than ship a half-empty site.",
          "Ongoing updates, backups and small changes are normally a monthly plan. Factor that in when you compare quotes. A low build price with no support often costs more by the end of the first year.",
        ],
      },
      {
        heading: "Why the cheapest quote can cost more",
        blocks: [
          "A low price can become expensive when the site is slow, insecure or invisible on Google and needs rebuilding a year later. You pay twice: once for the first version, and again for the one that actually works.",
          "Before you choose, ask every company the same questions. Who owns the code? What happens after launch? Is the quote fixed? What is not included? If the answers are vague, the missing detail will show up on the invoice.",
        ],
      },
      {
        heading: "How to get a quote you can trust",
        blocks: [
          "Write down your goal in one sentence, for example “get more booking requests”. List the must-have features and the nice-to-haves separately. Ask for a fixed written quote with scope, timeline and payment milestones, and check that extra work needs your approval before it is billed.",
          "If your budget is limited, ask for a smaller first version. A solid homepage, two or three service pages and a contact form is a real business site. A solid foundation lets you add pages and features later without starting over.",
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
    image: "/blog/slow-phone.jpg",
    imageAlt: "Person waiting on a sofa while a phone webpage is still loading",
    author,
    takeaways: [
      "Images are the most common reason a website is slow.",
      "Too many plugins and third-party scripts add up quickly.",
      "Test on a phone, not only on your office computer.",
      "Google’s PageSpeed Insights shows exactly what to fix first.",
    ],
    intro:
      "If you are asking “why is my website slow?”, the answer is usually one of a dozen common problems, and most of them can be fixed without a rebuild. A slow site loses visitors before they read a word. People tap away, Google notices, and the pages that should bring you work never get the chance. The good news is that the causes repeat. Once you know which one is yours, the fix is usually straightforward.",
    sections: [
      {
        heading: "Start by measuring",
        blocks: [
          "Guessing wastes time. Open Google’s PageSpeed Insights, paste your address and wait for the mobile result. That is the one that matters. Most of your customers are on a phone, often on a mid-range handset and a busy network, not on the office fibre your designer used.",
          "Write down two numbers: the overall score and the Largest Contentful Paint time. LCP is how long it takes for the main image or heading to appear. Then fix one thing at a time and run the test again. If the score moves, you know the change was worth it. If it does not, undo the change and try the next cause on this list.",
        ],
      },
      {
        heading: "Huge images",
        blocks: [
          "Uncompressed photos are the most common reason a website is slow. A camera file can be several megabytes. The browser has to download every byte before it can paint the page, even if the photo is shown in a small box.",
          "Resize each image to the size it actually appears, then save it as WebP or AVIF. A full-width hero rarely needs to be wider than about 1600 pixels. Product photos and team shots can usually sit at 800 or 1200. Do this before you upload, or use a build step that compresses them automatically.",
        ],
      },
      {
        heading: "No lazy loading",
        blocks: [
          "If every image on a long page loads at once, the visitor pays for photos they have not scrolled to yet. That first screen is what they judge you on, and it is competing with pictures further down the article.",
          "Mark below-the-fold images so they load only when they are about to come into view. Keep the hero and anything in the first screen loading immediately. Lazy loading is a small change in the markup and it often cuts the initial download in half.",
        ],
      },
      {
        heading: "Too many plugins",
        blocks: [
          "Each plugin can add its own scripts, styles and database queries to every page, including pages that never use the feature. A contact-form plugin, a slider, a popup and a social-share pack can quietly add hundreds of kilobytes.",
          "Open the plugin list and remove anything you do not use. If two plugins do the same job, keep the lighter one. After you delete, test the forms and layouts that still matter, then run PageSpeed Insights again.",
        ],
      },
      {
        heading: "Heavy page builders",
        blocks: [
          "Visual page builders make it easy to drag blocks around, but they often load a large library of code for layouts that could be a few lines of HTML. The extra CSS and JavaScript run on every visit, even on a simple “about” page.",
          "If most of your pages are standard sections — a heading, some text, a photo and a button — a custom, lightweight build will almost always load faster. You can keep a builder for a blog or a landing page if you need it, but it should not be the foundation of the whole site.",
        ],
      },
      {
        heading: "Third-party scripts",
        blocks: [
          "Chat widgets, ad pixels, review carousels and heatmaps all ask the browser to stop and talk to another company’s servers. One widget is rarely the problem. Four or five of them, all loading in the header, is.",
          "Keep analytics, and be strict about everything else. Load chat only after the page is usable, or replace it with a simple form. Delay marketing pixels until the visitor has started to scroll. If a script does not earn its place, take it out.",
        ],
      },
      {
        heading: "Too many fonts",
        blocks: [
          "A type family with several weights can be larger than you think, and the browser may wait for the files before it shows any text. That empty stretch of page is what people remember.",
          "Use one or two families and only the weights you actually apply. If the heading is bold and the body is regular, you do not need light, medium and black as well. Host the files yourself where you can, and set a fallback so text appears immediately in a system font while the webfont arrives.",
        ],
      },
      {
        heading: "Cheap shared hosting",
        blocks: [
          "The server has to start the page before any of the front-end work can happen. On cheap shared hosting, your site sits on a machine with hundreds of others. When one of them is busy, everyone waits.",
          "If the server response time in PageSpeed Insights is high before images and scripts are even mentioned, hosting is part of the problem. A modest upgrade, or a move to a host that is closer to your customers, often shaves a second off every page. That is cheaper than redesigning the whole site.",
        ],
      },
      {
        heading: "No caching",
        blocks: [
          "Without caching, the server builds the page from scratch for every visitor. Databases are queried, templates are rendered and the same HTML is generated again and again. Repeat visitors and Google’s crawler all wait in the same queue.",
          "Turn on page caching so a ready-made copy can be served for a few minutes or hours. Cache static files — CSS, JavaScript, images — for much longer, and change the file name when you update them. Most hosts and many plugins can do this; a custom build can do it in the platform itself.",
        ],
      },
      {
        heading: "No CDN",
        blocks: [
          "A content delivery network keeps copies of your files in cities around the world. Without one, a visitor in another country has to reach all the way to your origin server for every image and stylesheet.",
          "A CDN will not fix a bloated page, but it does cut the travel time for the files you already have. For a business that sells beyond its own city, that is usually worth switching on. Many hosts include one, or you can add a service in front of the site.",
        ],
      },
      {
        heading: "Autoplay video in the hero",
        blocks: [
          "Background video looks striking in a mockup and expensive on a phone. The file is large, it competes with the rest of the page, and it often starts playing with sound off while the main message is still loading.",
          "Use a still image as the poster and load the video only if the visitor taps play, or if you are sure they are on a fast connection. If motion matters to the brand, a short, compressed clip with no autoplay is enough. Most homepages convert better with a clear heading and a fast photo.",
        ],
      },
      {
        heading: "Redirect chains",
        blocks: [
          "Each redirect is an extra round trip. http to https, then www to the bare domain, then an old URL to a new one — the browser has to complete every hop before it can even request the real page.",
          "Link straight to the final address in your navigation, sitemap and ads. Keep one hop from old URLs to new ones, not three. Check the chain in a redirect tester and clean up anything that still points at an intermediate page.",
        ],
      },
      {
        heading: "Old code",
        blocks: [
          "Themes and libraries that have not been updated in years tend to ship more JavaScript than a modern equivalent, and they miss the speed features browsers now support. They are also a security risk, which is a separate reason to move on.",
          "Update what you can, and replace what you cannot. If the theme is abandoned, a lightweight rebuild is usually cheaper over two years than stacking patches on top of it. You keep the content and the URLs; you drop the weight.",
        ],
      },
      {
        heading: "What to fix first",
        blocks: [
          "Start with images and third-party scripts. They give the biggest wins for the least work, and you can often do both in an afternoon. Hosting and caching come next, because they help every page at once.",
          "If the site is built on a heavy theme with dozens of plugins, a lightweight rebuild is sometimes cheaper than patching it for years. Measure again after each change. The goal is not a perfect score. It is a page that feels instant on a phone, so the next customer stays long enough to get in touch.",
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
    image: "/blog/seo-whiteboard.jpg",
    imageAlt: "Person marking a website SEO checklist on a whiteboard",
    author,
    takeaways: [
      "Give every page one main keyword and one clear H1.",
      "Speed and mobile layout are part of SEO, not extras.",
      "Keep your name, address and phone the same everywhere.",
      "Real reviews and helpful content build rankings over time.",
    ],
    intro:
      "This website SEO checklist covers what a small business site needs so Google can find, understand and trust its pages. You don’t need to be technical to use it. Work through each section, tick what is done and note what needs a developer. An afternoon is enough to see the gaps. A week is enough to close most of them.",
    sections: [
      {
        heading: "Technical basics",
        blocks: [
          "Start with the plumbing. The site should load over HTTPS and work well on phones. If a form is hard to tap, or a heading sits off the screen, Google notices the same thing your customers do. Mobile PageSpeed results should pass Core Web Vitals, or you will keep giving the ranking away to a faster competitor.",
          "Submit an XML sitemap in Google Search Console so crawlers can find every public URL. Keep a robots.txt file that does not block the pages you care about. URLs should be short, lowercase and use hyphens. When you change an address, send the old one to the new one with a 301 redirect so the ranking travels with it.",
        ],
      },
      {
        heading: "Every page",
        blocks: [
          "Give each page one main keyword and use it in the URL, the title, the H1 and the first hundred words. The title should be unique and sit under about 60 characters so it does not get cut in search results. The meta description, under about 155 characters, is the sentence that decides whether someone clicks. Write it like an offer, not a slogan.",
          "Use exactly one H1, then H2 and H3 headings in a sensible order. That structure helps readers and crawlers. Add descriptive alt text on images, link to related pages so people can keep going, and end with a clear next step: a quote form, a call, a booking. A page without a next step is a brochure that never becomes a lead.",
        ],
      },
      {
        heading: "Local SEO",
        blocks: [
          "If you serve a town or a region, Google Business Profile is as important as the website. Fill it in: photos, opening hours, services, the same name, address and phone you use on the site. Inconsistency is how listings get ignored or mixed up with someone else.",
          "Give each main service its own page, written for the area you serve. “Websites for cafes in Dhaka” is more useful than a generic services dump. Then ask happy customers for reviews, and reply to them. Fresh, specific reviews are one of the strongest local signals you can earn.",
        ],
      },
      {
        heading: "Trust and content",
        blocks: [
          "Google rewards pages that show real experience. Stock photos and vague claims do the opposite. Add pictures of the team, case studies with real numbers and guides that answer the questions customers already ask you on the phone.",
          "Publish regularly, even if it is only twice a month. A short, useful article beats a long one that never ships. Over a year those pages become the reason someone finds you instead of a competitor, and they give you something honest to share when you are not running ads.",
        ],
      },
    ],
    related: { href: "/products/#business-website", label: "See the Business Website package" },
  },
  {
    slug: "core-web-vitals-explained",
    title: "Core Web Vitals Explained in Plain English",
    metaTitle: "Core Web Vitals Explained in Plain English | GlobDevs",
    description:
      "What Core Web Vitals are, why Google uses them, and the simple changes that help a small business site load fast on phones.",
    keyword: "Core Web Vitals explained",
    category: "Speed and Performance",
    date: "2026-10-12",
    image: "/blog/core-web-vitals.jpg",
    imageAlt: "Phone and laptop showing a page speed dashboard on a wooden desk",
    author,
    takeaways: [
      "Core Web Vitals measure how fast and stable your pages feel on a phone.",
      "LCP, INP and CLS are the three scores Google cares about.",
      "Heavy images and extra scripts are the usual reasons scores fail.",
      "Fix the slowest page first, then test again on mobile.",
    ],
    intro:
      "Core Web Vitals are Google’s way of checking whether a page feels fast. They are not a secret developer metric. If your site takes too long to show the main content, or jumps around while it loads, visitors leave and rankings suffer. This guide explains the three scores in plain English and what to do about them.",
    sections: [
      {
        heading: "Largest Contentful Paint",
        blocks: [
          "LCP is how soon the main image or heading appears. Aim for under 2.5 seconds on a phone. If the hero photo is a multi-megabyte file, or the heading waits for a font and a script before it can paint, the visitor is staring at a blank header while they decide whether to stay.",
          "Compress the hero, give it width and height in the code, and make sure it is not hidden behind a carousel or a delayed animation. The first thing people should see is the thing you meant them to see.",
        ],
      },
      {
        heading: "Interaction to Next Paint",
        blocks: [
          "INP is how quickly the page reacts when someone taps a button or a form. Aim for under 200 milliseconds. A slow tap feels broken even when the rest of the page looks fine. Heavy JavaScript is usually the cause: a page builder, a chat widget, or three analytics tools all running at once.",
          "Cut what you do not need, and load the rest after the page is usable. Forms and menus should respond immediately. Everything else can wait a moment.",
        ],
      },
      {
        heading: "Cumulative Layout Shift",
        blocks: [
          "CLS is how much the layout jumps while loading. Aim for a score under 0.1. The classic failure is an image without width and height: the photo arrives, the text below it drops, and the visitor taps the wrong button.",
          "Reserve space for images, embeds and ads. Load fonts in a way that does not swap a wide typeface in after a narrow one. If a banner or cookie notice pushes the page down, account for it in the layout instead of dropping it on top of the heading.",
        ],
      },
      {
        heading: "How to check your scores",
        blocks: [
          "Open PageSpeed Insights and use the mobile result. That is what most of your customers see. The lab number is a snapshot. The “field” data, when Google has enough of it, is what real people experienced.",
          "Write down LCP, INP and CLS, then change one thing and test again. A report with fifty suggestions is less useful than a habit of fixing the worst number first.",
        ],
      },
      {
        heading: "What usually breaks the scores",
        blocks: [
          "Hero images that are too large or not compressed. Fonts that block the page until they finish loading. Chat widgets, ads and extra scripts in the header. Images without width and height, so the page jumps when they appear.",
          "Those four account for most of the failing scores we see on small business sites. None of them requires a full rebuild. They do require someone to open the page on a phone and watch what actually happens.",
        ],
      },
      {
        heading: "A practical order of work",
        blocks: [
          "Compress images, set their size in the code, and load below-the-fold images later. Then cut scripts you do not need. Last, look at hosting and caching, because a slow server holds every other fix back.",
          "A custom, lightweight build is often cheaper over two years than patching a heavy template. If you are already paying for plugin after plugin to paper over the same problems, it is worth asking what a clean version would cost.",
        ],
      },
    ],
    related: { href: "/products/#speed-seo", label: "See the Speed and SEO Boost" },
  },
  {
    slug: "how-to-choose-a-web-development-company",
    title: "How to Choose a Web Development Company: 10 Questions to Ask",
    metaTitle: "How to Choose a Web Development Company | GlobDevs",
    description:
      "Ten questions to ask before you hire a web development company, so you get a fixed quote, own your code and do not pay twice.",
    keyword: "how to choose a web development company",
    category: "Website Cost and Planning",
    date: "2026-10-08",
    image: "/blog/choose-web-company.jpg",
    imageAlt: "Client and developer reviewing a website contract at a meeting table",
    author,
    takeaways: [
      "Ask for a fixed written quote that lists what is included.",
      "Confirm you own the code, designs and content after final payment.",
      "SEO, speed and mobile layout should be part of the build, not extras.",
      "Know who replies after launch, and how fast.",
    ],
    intro:
      "Hiring a web development company should not feel like a gamble. The cheapest quote is often the most expensive if the site is slow, hard to update or still belongs to the agency. Use these ten questions on every call. A good studio will answer them in plain English, in writing, before you pay a deposit.",
    sections: [
      {
        heading: "What is included in the quote, and what is not?",
        blocks: [
          "A useful quote lists pages, features, content, SEO work and launch tasks. A thin quote lists a price and a vibe. The gap between those two is where surprise invoices live.",
          "Ask them to write down what happens if you add a page, a language or a booking tool later. You do not need the extra work now. You need to know it will not blow up the budget when you do.",
        ],
      },
      {
        heading: "Is the price fixed?",
        blocks: [
          "A fixed price means the scope is clear and extra work needs your approval. A loose estimate means the number can move whenever someone discovers a “small extra”. That is fine for a research spike. It is not fine for a brochure site with a contact form.",
          "If they will not put the number in writing, you do not have a quote. You have a conversation.",
        ],
      },
      {
        heading: "Who owns the code after I pay?",
        blocks: [
          "You should own the code, design files and content after final payment. If the agency keeps the repo, you are renting your own website. Leaving later means starting again, which is how a cheap build becomes an expensive one.",
          "Ask where the files live, whose names are on the domain and hosting, and how a handoff would work. The answer should be boring and specific.",
        ],
      },
      {
        heading: "Will the site be built for phones first?",
        blocks: [
          "Most of your visitors will never see the desktop layout. If mobile is an afterthought, the tap targets, type size and forms will feel like a shrink-wrapped desktop page. That is one of the fastest ways to lose a lead.",
          "Ask to see a phone preview of a real inner page, not only the homepage mockup. The contact form and the service page are where the work happens.",
        ],
      },
      {
        heading: "What SEO work is done before launch?",
        blocks: [
          "Titles, headings, schema, a sitemap and redirects are part of a build, not a package you buy afterwards. If “SEO” means stuffing keywords into a blog once the site is live, you are paying for decoration.",
          "A studio that cares about this will show you the title, H1 and meta description for a key page before launch, and will submit the sitemap on day one.",
        ],
      },
      {
        heading: "How fast should it load on a mid-range phone?",
        blocks: [
          "Ask for a target, not a feeling. Under 2.5 seconds for the main content on a mid-range phone is a fair bar. If they cannot talk about Largest Contentful Paint or Core Web Vitals, they are guessing.",
          "Speed is not a polish pass. It is a set of choices about images, scripts, fonts and hosting. Those choices belong in the quote.",
        ],
      },
      {
        heading: "How will I see progress each week?",
        blocks: [
          "A private preview link and a short weekly note beat a long silence followed by a big reveal. You should be able to tap through real pages on your phone while the work is happening, not only at the end.",
          "Ask who writes that update and what they need from you. Content you forgot to send is the usual reason a timeline slips. A good process makes that visible early.",
        ],
      },
      {
        heading: "Who do I message after launch?",
        blocks: [
          "Sites break on Sundays. Forms stop sending. A plugin update knocks a layout over. You need a named person, a channel that is not a generic inbox, and a reply time measured in business hours, not weeks.",
          "Support can be a monthly plan. That is normal. What is not normal is disappearing after the invoice is paid.",
        ],
      },
      {
        heading: "Can I add pages later without starting over?",
        blocks: [
          "A well-built site is a set of patterns: a service page, a case study, an article. You should be able to add another one without a rebuild. If every new page is a custom job, the architecture is wrong.",
          "Ask how a new service page would be added six months from now, and who can do it. If only the original developer can touch it, you do not own the site in practice.",
        ],
      },
      {
        heading: "What happens to my domain and hosting if we stop?",
        blocks: [
          "The domain and hosting should be in your name, or transferable to you on request. If they sit in the agency’s account, ending the relationship can take the site down. That is leverage you should never sign up for.",
          "Get the registrar login, the host login and the DNS access written into the agreement. It takes ten minutes now and saves a miserable month later.",
        ],
      },
      {
        heading: "What a good answer sounds like",
        blocks: [
          "You get a written scope, a timeline and a price before work starts. Extra work needs your yes first. You own the site after final payment. Speed, SEO and a mobile layout are part of the build, not extras on a later invoice.",
          "You get a private preview link and a named person who replies within one business day. None of that is a luxury. It is how a professional studio works.",
        ],
      },
      {
        heading: "When to walk away",
        blocks: [
          "Walk away if they will not put the price in writing, if they keep the code, or if “SEO” means stuffing keywords after launch. Walk away if they will not show you a phone layout, or if the only contact after go-live is a ticket form with no names on it.",
          "A rebuild a year later costs more than hiring the right team now. Ten questions is a short meeting. The wrong company is a long year.",
        ],
      },
    ],
    related: { href: "/contact/", label: "Get a free quote from GlobDevs" },
  },
];

/** Titles from the content plan, not yet written. Not shown on the site. */
export const plannedPosts = [
  "Custom Website vs Template: Which Is Right for Your Business?",
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
