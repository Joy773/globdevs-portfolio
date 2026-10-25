import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import HeroGlobe from "@/components/HeroGlobe";
import ProjectCard from "@/components/ProjectCard";
import { Bag, Calendar, Check, Gauge, Shield, Window } from "@/components/icons";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Web Development Company | Fast, SEO-Ready Sites | GlobDevs" },
  description:
    "GlobDevs builds fast, secure, SEO-ready websites and web apps that turn visitors into customers. See our work and get a free quote.",
  alternates: { canonical: "/" },
};

const services = [
  { icon: Window, title: "Custom websites", text: "Professional sites that look the part and load in seconds." },
  { icon: Bag, title: "Online stores", text: "Fast product pages and a smooth, secure checkout." },
  { icon: Calendar, title: "Web apps and booking systems", text: "Dashboards, portals and bookings that save you hours every week." },
  { icon: Gauge, title: "Speed and SEO upgrades", text: "Fixes that help customers find you on Google and stay on your site." },
  { icon: Shield, title: "Ongoing care", text: "Updates, backups and monitoring so your site stays safe, fast and online." },
];

const benefits = [
  ["Fast pages and optimized images", "Visitors stay longer, and search engines favor fast sites."],
  ["SEO-ready structure from day one", "Google understands your pages, so you can earn traffic without paying for every click."],
  ["Mobile-first design", "Most people browse on their phones. A smooth experience keeps them from leaving."],
  ["Clear calls to action", "More visitors become calls, bookings, sign-ups and sales."],
  ["Secure, tested code", "Your customers’ data and your reputation stay protected."],
  ["Scalable foundation", "Add products, pages and features later without starting over."],
];

const steps = [
  ["Discover", "We learn your goals, your customers and your competitors."],
  ["Design", "You approve the layout before any code is written."],
  ["Build and test", "We develop, test on real devices and optimize for speed and SEO."],
  ["Launch and grow", "We go live, watch the results and keep improving."],
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most business websites take 4 to 8 weeks. You get an exact timeline in your written proposal.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. We build SEO foundations into every site: clean code, fast loading, mobile-first design, proper headings, schema markup and a sitemap.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. After final payment the code, designs and content belong to you.",
  },
];

function ProofStrip() {
  const { projectsDelivered, countries, ownSitePageSpeed } = site.proof;
  const numbers = [
    projectsDelivered && { strong: `${projectsDelivered}`, rest: "projects delivered" },
    countries && { strong: `${countries}`, rest: "countries" },
    ownSitePageSpeed && { strong: `${ownSitePageSpeed}+`, rest: "PageSpeed score on this site" },
  ].filter(Boolean) as { strong: string; rest: string }[];

  // Until there are real numbers, show the promises every client gets.
  const items = numbers.length
    ? numbers
    : [
        { strong: "", rest: "Fixed written quote" },
        { strong: "", rest: "Weekly preview link" },
        { strong: "", rest: "You own the code" },
        { strong: "", rest: "Support after launch" },
      ];

  return (
    <ul className="proof">
      {items.map((i) => (
        <li key={i.rest}>
          <Check />
          <span>{i.strong && <strong>{i.strong} </strong>}{i.rest}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero grid-paper">
        <div className="wrap hero__inner">
          <div>
            <h1>Web development that helps your business grow</h1>
            <p className="lede">
              GlobDevs is a web development company that builds fast, secure and search-optimized
              websites and web applications. We write clean code with one goal: more customers, more
              sales and less stress for you. Share your idea and we will handle the rest, from
              planning to launch and beyond.
            </p>
            <div className="btn-row">
              <Link href="/contact/" className="btn btn--primary">Get a free quote</Link>
              <Link href="/projects/" className="btn">See our projects</Link>
            </div>
          </div>
          <HeroGlobe />
        </div>
      </section>

      <section className="wrap" aria-labelledby="trust-title">
        <h2 id="trust-title" className="sr-only">Trusted by businesses that want results</h2>
        <ProofStrip />
      </section>

      <section className="section" aria-labelledby="do-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="do-title">What we do for you</h2>
            <p>
              One small team for the whole job, from the first sketch to the site that keeps
              running years later.
            </p>
            <p>
              <Link href="/products/" className="link">See our website packages</Link>
            </p>
          </div>
          <ul className="services">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="grow-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="grow-title">How our code grows your business</h2>
            <p>Every technical choice has a reason you can see on your bottom line.</p>
          </div>
          <table className="benefits">
            <thead>
              <tr>
                <th scope="col">What we build in</th>
                <th scope="col">What it means for you</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map(([what, why]) => (
                <tr key={what}>
                  <th scope="row">{what}</th>
                  <td>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-title">Featured projects</h2>
            <p>
              Concept projects that show how we plan and build. Each one starts with a real kind of
              business problem.
            </p>
          </div>
          <div className="cards cards--3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <p className="mt-10">
            <Link href="/projects/" className="link">See all projects</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="safe-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="safe-title">Why clients feel safe handing over their project</h2>
            <p>
              Hiring developers shouldn’t feel like a gamble. These are the rules we work by on
              every project.
            </p>
          </div>
          <ul className="ticks">
            <li>A clear written scope and price before we start. No hidden costs.</li>
            <li>Weekly progress updates and a private preview link, so you always see progress.</li>
            <li>You own your code, design files and content after final payment.</li>
            <li>A single point of contact who replies within {site.promises.replyTime}.</li>
            <li>Support after launch. We stay to help you grow.</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title">Our simple 4-step process</h2>
          </div>
          <ol className="steps steps--4">
            {steps.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {site.testimonials.length > 0 && (
        <section className="section" aria-labelledby="say-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="say-title">What clients say</h2>
            </div>
            <div className="quotes">
              {site.testimonials.map((t) => (
                <figure className="quote" key={t.name}>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    {t.role}, {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap split">
          <div className="section-head">
            <h2 id="faq-title">Quick answers</h2>
            <p>
              More about cost on the <Link href="/pricing/" className="link">pricing page</Link>.
            </p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <Cta
        title="Ready to grow online?"
        actions={[{ href: "/contact/", label: "Get your free quote", primary: true }]}
      >
        Tell us about your business and goals. You will receive a clear plan and quote within{" "}
        {site.promises.quoteTime}. No pressure, no jargon.
      </Cta>
    </>
  );
}
