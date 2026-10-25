/* Hand-drawn style icon set. Strokes use currentColor. */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LogoMark(p: P) {
  return (
    <svg {...base} {...p} strokeWidth={2.2}>
      <path d="M16.2 3.4c7.1-.2 12.6 5.6 12.4 12.8-.2 7-5.8 12.4-12.7 12.4C9 28.5 3.4 22.9 3.5 15.9 3.6 9 9.2 3.5 16.2 3.4z" />
      <path d="M16 3.6c-4.4 3.6-6.2 8-6.1 12.6.1 4.6 2.2 9 6.3 12.3M16.3 3.6c4.2 3.6 6 8.1 5.9 12.6-.1 4.5-2.1 8.8-6 12.2" />
      <path d="M4.2 12.2c7.8.9 15.8.9 23.6-.1M4.4 20.2c7.7.8 15.5.9 23.3-.2" />
    </svg>
  );
}

export function Check(p: P) {
  return (
    <svg {...base} {...p} strokeWidth={2.6}>
      <path d="M6 16.8c2.2 1.9 4.2 4 6 6.6C15.4 16.3 20.2 10.4 26.6 6.2" />
    </svg>
  );
}

export function Sun(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="16" cy="16" r="5.5" />
      <path d="M16 3.5v3.2M16 25.3v3.2M3.5 16h3.2M25.3 16h3.2M7.1 7.1l2.3 2.3M22.6 22.6l2.3 2.3M7.1 24.9l2.3-2.3M22.6 9.4l2.3-2.3" />
    </svg>
  );
}

export function Moon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M25.8 19.4A10.6 10.6 0 0 1 12.6 6.2a10.6 10.6 0 1 0 13.2 13.2z" />
    </svg>
  );
}

export function MenuIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5.5 10.2c7-.4 14-.3 21 .1M5.5 16.1c7 .2 14 .1 21-.1M5.5 22c7-.3 14-.2 21 .2" />
    </svg>
  );
}

export function CloseIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M8 8.2c5.4 5 10.6 10.4 16 15.6M24 8c-5.2 5.4-10.6 10.6-16 16" />
    </svg>
  );
}

export function Window(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4.2 6.4c7.9-.3 15.8-.3 23.6.1.3 6.4.3 12.8-.1 19.2-7.8.3-15.7.3-23.5-.1-.3-6.4-.3-12.8 0-19.2z" />
      <path d="M4.4 11.6c7.7.2 15.4.1 23.2-.1M8 9h.1M11 9h.1M9 16.5h9M9 20.5h14" />
    </svg>
  );
}

export function Bag(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6.2 10.4c6.6-.3 13.1-.3 19.6 0l-1.4 16.4c-5.6.3-11.2.3-16.8 0L6.2 10.4z" />
      <path d="M11.6 13.2c-.6-4.9 1.4-8 4.4-8s5 3.1 4.4 8" />
    </svg>
  );
}

export function Calendar(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 8.2c7.4-.3 14.7-.3 22 .1.3 6 .3 12 0 18-7.3.3-14.6.3-21.9-.1-.4-6-.4-12-.1-18z" />
      <path d="M5.2 13.4c7.2.2 14.4.2 21.6 0M11 5v5.4M21 5v5.4M10 18.5h3M15 18.5h3M20 18.5h2M10 22.5h3" />
    </svg>
  );
}

export function Gauge(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4.6 22.5A11.6 11.6 0 0 1 27.4 22.4" />
      <path d="M16.2 22.6c1.6-3.6 3.6-6.6 6.2-9.2" />
      <circle cx="16" cy="23" r="1.6" />
      <path d="M8 26.6c5.3.3 10.7.3 16 0" />
    </svg>
  );
}

export function Shield(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M16.1 4c3.6 2.2 7.2 3.2 10.6 3.3.3 9.2-2.8 16.3-10.7 20.8C8.2 23.6 5 16.6 5.4 7.3 9 7.2 12.4 6.2 16.1 4z" />
      <path d="M11.4 16.2c1.4 1.1 2.6 2.4 3.6 3.9 2-3.4 4.2-6 7-8" />
    </svg>
  );
}

export function Person(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="16" cy="11" r="5" />
      <path d="M6.2 27c.8-5.4 4.6-8.4 9.8-8.4s9 3 9.8 8.4" />
    </svg>
  );
}
