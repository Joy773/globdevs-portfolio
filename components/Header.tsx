"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { CloseIcon, LogoMark, MenuIcon, Moon, Sun } from "./icons";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname() || "/";
  // The menu remembers the page it was opened on, so it closes itself after navigating.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (v: boolean) => setOpenedOn(v ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggleTheme() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <header className="header" data-scrolled={scrolled || open}>
      <style>{`
        .header {
          position: fixed;
          inset: 0.75rem 0 auto;
          z-index: 50;
          padding-inline: var(--gutter);
          pointer-events: none;
        }
        .header__bar {
          pointer-events: auto;
          max-width: var(--wrap);
          margin-inline: auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.45rem 0.5rem 0.45rem 1.1rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: color-mix(in srgb, var(--paper) 82%, transparent);
          backdrop-filter: blur(14px) saturate(1.4);
          -webkit-backdrop-filter: blur(14px) saturate(1.4);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .header[data-scrolled="true"] .header__bar {
          border-color: color-mix(in srgb, var(--ink) 22%, transparent);
          box-shadow: 0 8px 24px -14px color-mix(in srgb, var(--ink) 35%, transparent);
        }
        .header .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          font-family: var(--font-body), sans-serif;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }
        .header .logo svg { width: 24px; height: 24px; flex-shrink: 0; }
        .nav { display: none; margin-inline: auto; gap: 0.15rem; }
        .nav a {
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.97rem;
          font-weight: 500;
          color: var(--muted);
          transition: color 0.15s ease, background-color 0.15s ease;
        }
        .nav a:hover {
          color: var(--ink);
          background: color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .nav a[aria-current="page"] {
          color: var(--ink);
          background: color-mix(in srgb, var(--ink) 8%, transparent);
        }
        .header__actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-left: auto;
        }
        .icon-btn {
          display: inline-grid;
          place-items: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 999px;
          border: 1px solid transparent;
          background: transparent;
          color: var(--ink);
          cursor: pointer;
        }
        .icon-btn:hover { background: color-mix(in srgb, var(--ink) 7%, transparent); }
        .icon-btn svg { width: 20px; height: 20px; }
        .theme-icon-dark { display: none; }
        :root[data-theme="dark"] .theme-icon-dark { display: block; }
        :root[data-theme="dark"] .theme-icon-light { display: none; }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .theme-icon-dark { display: block; }
          :root:not([data-theme="light"]) .theme-icon-light { display: none; }
        }
        .header__cta { display: none; }
        .menu {
          pointer-events: auto;
          max-width: var(--wrap);
          margin: 0.5rem auto 0;
          padding: 0.75rem;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: var(--paper);
          box-shadow: 0 18px 40px -20px color-mix(in srgb, var(--ink) 40%, transparent);
          max-height: calc(100dvh - 6rem);
          overflow-y: auto;
        }
        .menu ul { list-style: none; margin: 0; padding: 0; }
        .menu a:not(.btn) {
          display: block;
          padding: 0.85rem 0.9rem;
          border-radius: var(--radius-sm);
          font-size: 1.15rem;
          font-weight: 600;
          text-decoration: none;
        }
        .menu a:not(.btn):hover,
        .menu a[aria-current="page"] {
          background: color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .menu .btn { width: 100%; margin-top: 0.6rem; }
        @media (min-width: 960px) {
          .nav { display: flex; }
          .header__actions { margin-left: 0; }
          .header__cta { display: inline-flex; }
          .menu-toggle,
          .menu { display: none !important; }
        }
      `}</style>
      <div className="header__bar">
        <Link href="/" className="logo" aria-label="GlobDevs home">
          <LogoMark />
          GlobDevs
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Switch light or dark theme">
            <Sun className="theme-icon-light" />
            <Moon className="theme-icon-dark" />
          </button>
          <Link href="/contact/" className="btn btn--primary btn--small header__cta">
            Get a free quote
          </Link>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="menu">
          <ul>
            <li>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/" aria-current={isCurrent(pathname, "/contact/") ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
          <Link href="/contact/" className="btn btn--primary">
            Get a free quote
          </Link>
        </div>
      )}
    </header>
  );
}
