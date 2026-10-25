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
