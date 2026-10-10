import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

// Inline brand icons (lucide-react no longer ships brand icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8v2.8h2.5V21h3Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.9 8.6H4V20h2.9V8.6ZM5.4 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm7 6.4c0-1 .5-1.8 1.7-1.8 1.1 0 1.6.8 1.6 1.8V20h2.9v-6.9c0-2.3-1.2-3.4-2.9-3.4-1.4 0-2 .8-2.4 1.3V8.6H10V20h2.4v-6.4Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const serviceLinks = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Digital Solutions",
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/services" },
];

// Modern midnight footer
export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-hidden bg-[#04081a] text-slate-300">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-cyan-300 uppercase">
              Let&apos;s work together
            </p>
            <p className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">
              Ready to build something great?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@thevisionclicks.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0a1330] transition hover:bg-cyan-200"
            >
              info@thevisionclicks.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+91707946603"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-cyan-300" /> +91 707946603
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Vision Clicks home">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-[15px] font-black text-white">
                V
              </span>
              <span className="font-display text-lg font-bold text-white">
                Vision<span className="text-gradient-light">Clicks</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              A senior product & engineering team crafting software that
              drives growth — from MVP to enterprise scale since 2014.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: LinkedInIcon, label: "LinkedIn" },
                { icon: InstagramIcon, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="/"
                  aria-label={`Vision Clicks on ${s.label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 transition hover:text-cyan-300">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-white/60 transition hover:text-cyan-300">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">Contact info</h3>
            <address className="mt-4 space-y-3 text-sm leading-relaxed text-white/60 not-italic">
              <p className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                Shop No. 6, 2nd Floor, Sanjay Place, Agra, Uttar Pradesh, India-282002
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                <a href="tel:+91707946603" className="hover:text-white">
                  +91 707946603
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <a href="mailto:info@thevisionclicks.com" className="hover:text-white">
                  info@thevisionclicks.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <a href="mailto:thevisionclicks@gmail.com" className="hover:text-white">
                  thevisionclicks@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/35 sm:flex-row">
          <p>© 2014 The Vision Clicks. All rights reserved.</p>
          <p className="font-mono tracking-wider uppercase">Designed & engineered in India</p>
        </div>
      </div>
    </footer>
  );
}
