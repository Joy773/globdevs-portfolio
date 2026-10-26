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
    <svg viewBox="0 0 32 32" width={32} height={32} fill="none" aria-hidden="true" {...p}>
      <circle cx="16" cy="16" r="16" fill="var(--ink)" />
      <path
        fill="var(--gold)"
        d="M22.93 10.73a8.8 8.8 0 1 0 0 10.84l-2.83-2.22a5.2 5.2 0 1 1 0-6.4z"
      />
      <rect x="16.3" y="16.2" width="7.1" height="2.7" rx="1.35" fill="var(--gold)" />
    </svg>
  );
}
