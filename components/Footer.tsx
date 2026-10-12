import Link from "next/link";
import Image from "next/image";
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
  { label: "Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact" },
];

// Ink footer with volt accents + giant wordmark
export default function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-[#05070f] text-slate-300">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-volt-400/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt-400/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        {/* Top CTA row */}
        <div className="flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.22em] text-volt-300 uppercase">
              Let&apos;s work together
            </p>
            <p className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Have an idea? <span className="font-accent font-normal text-gradient-light">Let&apos;s talk.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#05070f] transition hover:bg-volt-300"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="tel:+91707946603"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-volt-300" /> +91 707946603
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
  href="/"
  aria-label="Vision Clicks home"
  className="inline-flex shrink-0 items-center rounded-xl  px-3 py-1.5"
>
  <Image
    src="/vision-clicks-logo.png"
    alt="Vision Clicks"
    width={180}
    height={52}
    className="h-10 w-auto object-contain sm:h-11"
  />
</Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              A senior product &amp; engineering studio crafting software that
              drives growth — from MVP to enterprise scale, since 2014.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/thevisionclicks" },
                { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/thevisionclicks" },
                { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/thevisionclicks" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vision Clicks on ${s.label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-transparent hover:bg-volt-400 hover:text-[#05070f]"
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
                  <Link href="/services" className="text-white/60 transition hover:text-volt-300">
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
                  <Link href={c.href} className="text-white/60 transition hover:text-volt-300">
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt-300" />
                Shop No. 6, 2nd Floor, Sanjay Place, Agra, Uttar Pradesh, India-282002
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-volt-300" />
                <a href="tel:+91707946603" className="hover:text-white">
                  +91 707946603
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-volt-300" />
                <a href="mailto:info@thevisionclicks.com" className="hover:text-white">
                  info@thevisionclicks.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-volt-300" />
                <a href="mailto:thevisionclicks@gmail.com" className="hover:text-white">
                  thevisionclicks@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Giant wordmark */}
        <div aria-hidden="true" className="mt-12 overflow-hidden">
          <p className="wordmark-giant font-display text-center text-[13.5vw] font-bold tracking-tight whitespace-nowrap lg:text-[10rem]">
            VISION CLICKS
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-[13px] text-white/35 sm:flex-row">
          <p>© 2014–2026 The Vision Clicks. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-volt-400" />
            Designed &amp; engineered in India
          </p>
        </div>
      </div>
    </footer>
  );
}
  