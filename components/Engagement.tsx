"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Fixed Scope",
    tag: "MVP in weeks",
    price: "From ₹80k",
    desc: "A defined project with fixed price and deadline. Perfect for MVPs and websites.",
    features: ["Fixed quote & timeline", "UI/UX + development", "QA & launch support", "30-day free fixes"],
    featured: false,
    cta: "Get a quote",
  },
  {
    name: "Dedicated Team",
    tag: "Most popular",
    price: "From ₹1.5L/mo",
    desc: "Senior engineers & designers working only on your product, month to month.",
    features: ["2–6 senior specialists", "Weekly demos & reports", "Pause or scale anytime", "You own all the code"],
    featured: true,
    cta: "Start a team",
  },
  {
    name: "Care & Scale",
    tag: "Long-term",
    price: "From ₹40k/mo",
    desc: "Monitoring, updates and continuous improvement for live products.",
    features: ["24×7 monitoring", "Monthly improvements", "Security & backups", "Priority support"],
    featured: false,
    cta: "Talk to us",
  },
];

// Engagement models — pricing-style cards, the trust-building section
export default function Engagement() {
  return (
    <section aria-label="Engagement models" className="py-16 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engagement"
          title="Simple ways to"
          highlight="work with us"
          description="Transparent models, no hidden costs. Pick what fits your stage — switch anytime."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "relative flex flex-col rounded-[1.75rem] p-8",
                p.featured
                  ? "noise overflow-hidden bg-[#05070f] text-white shadow-[0_32px_70px_-24px_rgb(5_7_15/0.6)]"
                  : "border border-slate-200/70 bg-white text-slate-900 shadow-[0_14px_36px_-24px_rgb(5_7_15/0.3)]"
              )}
            >
              {p.featured && (
                <>
                  <div aria-hidden="true" className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-lime-500/30 blur-[80px]" />
                  <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-volt-400/15 blur-[80px]" />
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-volt-400 px-3 py-1 text-[11px] font-black text-[#05070f]">
                    <Sparkles className="h-3 w-3" /> {p.tag}
                  </span>
                </>
              )}
              {!p.featured && (
                <span className="absolute top-5 right-5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-500">
                  {p.tag}
                </span>
              )}
              <h3 className={cn("font-display text-lg font-bold", p.featured ? "text-white" : "text-slate-900")}>
                {p.name}
              </h3>
              <p className={cn("font-display mt-2 text-3xl font-bold", p.featured ? "text-white" : "text-slate-900")}>
                {p.price}
              </p>
              <p className={cn("mt-2 text-sm leading-relaxed", p.featured ? "text-white/60" : "text-slate-600")}>
                {p.desc}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={cn("flex items-center gap-2.5 text-sm font-medium", p.featured ? "text-white/80" : "text-slate-600")}>
                    <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", p.featured ? "bg-volt-400 text-[#05070f]" : "bg-lime-100 text-lime-800")}>
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  "group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition",
                  p.featured
                    ? "bg-white text-[#05070f] hover:bg-volt-300"
                    : "bg-[#05070f] text-white hover:bg-lime-700"
                )}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
