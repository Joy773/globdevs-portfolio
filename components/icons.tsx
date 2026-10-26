/**
 * Icons come from react-icons (Phosphor set, tree-shaken: only the icons
 * imported here end up in the bundle). The logo mark stays a custom SVG.
 */
import type { SVGProps } from "react";
export {
  PiCheckBold as Check,
  PiPlusBold as Plus,
  PiSun as Sun,
  PiMoon as Moon,
  PiList as MenuIcon,
  PiX as CloseIcon,
  PiBrowser as Window,
  PiShoppingBag as Bag,
  PiCalendarCheck as Calendar,
  PiGauge as Gauge,
  PiShieldCheck as Shield,
  PiUser as Person,
  PiEnvelopeSimple as Mail,
  PiWhatsappLogo as WhatsApp,
  PiPaperPlaneTilt as Plane,
} from "react-icons/pi";

export function LogoMark(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2.1}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M16.2 3.4c7.1-.2 12.6 5.6 12.4 12.8-.2 7-5.8 12.4-12.7 12.4C9 28.5 3.4 22.9 3.5 15.9 3.6 9 9.2 3.5 16.2 3.4z" fill="var(--accent)" />
      <path d="M16 3.6c-4.4 3.6-6.2 8-6.1 12.6.1 4.6 2.2 9 6.3 12.3M16.3 3.6c4.2 3.6 6 8.1 5.9 12.6-.1 4.5-2.1 8.8-6 12.2" />
      <path d="M4.2 12.2c7.8.9 15.8.9 23.6-.1M4.4 20.2c7.7.8 15.5.9 23.3-.2" />
    </svg>
  );
}
