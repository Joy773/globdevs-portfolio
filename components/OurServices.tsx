"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  PiBrowser,
  PiCalendarCheck,
  PiCaretLeft,
  PiCaretRight,
  PiLightning,
  PiShieldCheck,
  PiStorefront,
} from "react-icons/pi";
import { RevealHeading } from "@/components/ScrollReveal";

const services = [
  {
    title: "Custom websites",
    text: "Professional sites that look the part and load in seconds. Every page has one clear action so visitors can find you and get in touch. Mobile-first, SEO-ready and easy to update.",
    Icon: PiBrowser,
  },
  {
    title: "Online stores",
    text: "Fast product pages and a smooth, secure checkout. Categories, payments and inventory are set up so customers can buy in a few taps, and you can run the shop yourself after launch.",
    Icon: PiStorefront,
  },
  {
    title: "Web apps and booking",
    text: "Dashboards, portals and bookings that save you hours every week. Clients book online, get reminders and skip the phone tag, while you keep a simple admin view of the day.",
    Icon: PiCalendarCheck,
  },
  {
    title: "Speed and SEO",
    text: "Fixes that help customers find you on Google and stay on your site. We audit Core Web Vitals, clean up code and images, and add headings, schema and a sitemap.",
    Icon: PiLightning,
  },
  {
    title: "Ongoing care",
    text: "Updates, backups and monitoring so your site stays safe, fast and online. You get a monthly check, small content changes and a reply within one business day if something breaks.",
    Icon: PiShieldCheck,
  },
];

export default function OurServices() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  function scrollByCard(direction: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".our-services__card");
    const step = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="section" aria-labelledby="do-title">
      <style>{`
        .our-services__eyebrow {
          margin: 0 0 0.75rem;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--accent-deep);
        }
        .our-services__head {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem 2rem;
          margin-bottom: clamp(1.75rem, 4vw, 2.75rem);
        }
        .our-services__copy {
          display: grid;
          gap: 1rem;
          max-width: 36rem;
        }
        .our-services__copy p {
          margin: 0;
          color: var(--muted);
        }
        .our-services h2 {
          max-width: none;
          text-wrap: unset;
        }
        .our-services__actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }
        .our-services__nav {
          display: flex;
          gap: 0.45rem;
        }
        .our-services__arrow {
          display: grid;
          place-items: center;
          width: 2.75rem;
          height: 2.75rem;
          padding: 0;
          border-radius: 999px;
          border: 1.5px solid var(--ink);
          background: var(--surface);
          color: var(--ink);
          cursor: pointer;
        }
        .our-services__arrow svg {
          width: 1.25rem;
          height: 1.25rem;
        }
        .our-services__arrow:hover:not(:disabled) {
          background: var(--accent);
          border-color: var(--ink);
        }
        .our-services__arrow:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .our-services__scroller {
          position: relative;
        }
        .our-services__scroller::before,
        .our-services__scroller::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0.35rem;
          width: clamp(2.5rem, 8vw, 5.5rem);
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .our-services__scroller::before {
          left: 0;
          background: linear-gradient(to right, var(--paper) 12%, transparent);
        }
        .our-services__scroller::after {
          right: 0;
          background: linear-gradient(to left, var(--paper) 12%, transparent);
        }
        .our-services__scroller[data-start="true"]::before { opacity: 1; }
        .our-services__scroller[data-end="true"]::after { opacity: 1; }
        .our-services__track {
          display: flex;
          gap: 1.15rem;
          list-style: none;
          margin: 0;
          padding: 0 0 0.35rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .our-services__track::-webkit-scrollbar { display: none; }
        .our-services__card {
          display: flex;
          flex-direction: column;
          flex: 0 0 min(100%, 24rem);
          min-height: 17.5rem;
          padding: 2rem 1.85rem 2.1rem;
          border-radius: var(--radius);
          background: var(--surface);
          scroll-snap-align: start;
        }
        @media (min-width: 760px) {
          .our-services__card { flex-basis: calc((100% - 1.15rem) / 1.55); }
        }
        @media (min-width: 1100px) {
          .our-services__card { flex-basis: calc((100% - 2.3rem) / 2.35); }
        }
        .our-services__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.35rem;
        }
        .our-services__num {
          font-size: 1.55rem;
          font-weight: 650;
          letter-spacing: -0.04em;
          color: var(--accent);
        }
        .our-services__card svg {
          width: 2rem;
          height: 2rem;
          color: var(--accent);
        }
        .our-services__card h3 {
          margin: 0 0 0.65rem;
          font-size: 23px;
        }
        .our-services__card p {
          margin: 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.5;
        }
        @media (prefers-reduced-motion: reduce) {
          .our-services__track { scroll-behavior: auto; }
        }
      `}</style>
      <div className="wrap">
        <div className="our-services">
          <p className="our-services__eyebrow">Services</p>
          <div className="our-services__head">
            <div className="our-services__copy">
              <RevealHeading id="do-title">{"What we do for you\nto grow your business"}</RevealHeading>
              <p>
                Websites, stores and apps planned around one goal more customers, more sales and
                less stress for you.
              </p>
            </div>
            <div className="our-services__actions">
              <div className="our-services__nav">
                <button
                  type="button"
                  className="our-services__arrow"
                  aria-label="Previous services"
                  disabled={!canPrev}
                  onClick={() => scrollByCard(-1)}
                >
                  <PiCaretLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="our-services__arrow"
                  aria-label="Next services"
                  disabled={!canNext}
                  onClick={() => scrollByCard(1)}
                >
                  <PiCaretRight aria-hidden="true" />
                </button>
              </div>
              <Link href="/contact/" className="btn btn--primary">Let’s Talk</Link>
            </div>
          </div>
          <div
            className="our-services__scroller"
            data-start={canPrev ? "true" : "false"}
            data-end={canNext ? "true" : "false"}
          >
            <ul className="our-services__track" ref={trackRef}>
              {services.map(({ title, text, Icon }, i) => (
                <li key={title} className="our-services__card">
                  <div className="our-services__top">
                    <span className="our-services__num">{String(i + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
