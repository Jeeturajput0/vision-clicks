import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Vision Clicks",
  description:
    "Reach Vision Clicks for web development, mobile apps, custom software, UI/UX design and digital solutions. Sanjay Place, Agra, India.",
};

const cards = [
  {
    icon: Mail,
    title: "Email us",
    lines: ["info@thevisionclicks.com", "thevisionclicks@gmail.com"],
    href: "mailto:info@thevisionclicks.com",
    action: "Write an email",
  },
  {
    icon: Phone,
    title: "Call us",
    lines: ["+91 707946603", "Mon–Sat, 10am–7pm IST"],
    href: "tel:+91707946603",
    action: "Call now",
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["Shop No. 6, 2nd Floor, Sanjay Place,", "Agra, UP, India — 282002"],
    href: "https://maps.google.com/?q=Sanjay+Place+Agra",
    action: "Open in Maps",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        highlight="great together"
        description="Tell us about your project — get a fixed quote, timeline and prototype plan within 24 hours."
        crumb="Contact"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Quick-contact cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_14px_36px_-24px_rgb(5_7_15/0.3)] transition-all hover:-translate-y-2 hover:shadow-[0_28px_56px_-24px_rgb(79_70_229/0.45)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#05070f] text-volt-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 group-hover:text-white">
                <c.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-5 text-lg font-bold text-slate-900">{c.title}</h2>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-slate-600">
                  {l}
                </p>
              ))}
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-700">
                {c.action}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>

        {/* Form + side panel */}
        <div className="mt-6 grid items-start gap-5 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm />
          <aside className="noise relative overflow-hidden rounded-[1.75rem] bg-[#05070f] p-7 text-white sm:p-8">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="bg-dots absolute inset-0 opacity-30" />
              <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-indigo-600/40 blur-[80px]" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-volt-400/15 blur-[80px]" />
            </div>
            <div className="relative">
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-volt-300 uppercase">
                Why contact us
              </p>
              <h3 className="font-display mt-2 text-xl font-bold">
                Reply within <span className="font-accent font-normal text-volt-300">24 hours.</span>
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
                {[
                  "Free 30-minute discovery call — no commitment",
                  "Fixed quote with timeline, not hourly guesswork",
                  "NDA signed before the first call, if you want",
                  "Senior team only — no juniors learning on your project",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-400" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-white/80">
                <Clock className="h-4 w-4 shrink-0 text-volt-300" />
                Average first response: under 24 hours
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
