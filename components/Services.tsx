"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Clock, Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

// Click-to-expand service card — click anywhere on the card to reveal full details
function ServiceCard({
  service,
  index,
  open,
  onToggle,
}: {
  service: Service;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300",
        open
          ? "border-[#10346c] shadow-[0_28px_56px_-24px_rgb(16_52_108/0.45)]"
          : "border-slate-200/70 shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)] hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgb(79_70_229/0.4)]"
      )}
    >
      {/* Clickable header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`${open ? "Collapse" : "Expand"} ${service.title} details`}
        className="block w-full cursor-pointer p-7 pb-0 text-left"
      >
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "grid h-12 w-12 place-items-center rounded-2xl transition-all duration-300",
              open
                ? "bg-volt-400 text-[#10346c]"
                : "bg-[#10346c] text-volt-300 group-hover:bg-volt-400 group-hover:text-[#10346c]"
            )}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold text-slate-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "grid h-8 w-8 place-items-center rounded-full transition-all duration-300",
                open ? "rotate-180 bg-[#10346c] text-volt-300" : "bg-slate-100 text-slate-500"
              )}
            >
              {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </span>
          </div>
        </div>

        <p className="mt-5 font-mono text-[11px] font-bold tracking-[0.16em] text-brand-700 uppercase">
          {service.tagline}
        </p>
        <h3 className="font-display mt-1.5 text-lg font-bold text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
            >
              <Check className="h-3 w-3 text-brand-700" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-800">
          {open ? "Show less" : "View details"}
          <ArrowRight
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              open ? "-rotate-90" : "group-hover:translate-x-1.5"
            )}
          />
        </span>
      </button>

      {/* Expandable detail panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mx-7 mt-5 rounded-2xl bg-[#f5f6f8] p-5">
              <p className="text-sm leading-relaxed text-slate-600">{service.details}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                    <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-volt-400">
                      <Check className="h-2.5 w-2.5 text-[#10346c]" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-brand-700" />
                  Typical timeline: {service.timeline}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#10346c] px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-brand-700"
                >
                  Get quote
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-7 pt-5" aria-hidden="true" />
      {/* bottom accent line */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-[#10346c] via-brand-600 to-volt-400 transition-transform duration-300",
          open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </motion.article>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="scroll-mt-8 py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // eyebrow="Services"
          title="Click a service to explore"
          highlight="what's inside"
          description="Five core services, one senior team. Tap any card to see deliverables, timelines and what's included."
        />
        <div className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
          {/* CTA tile to complete the 3-col grid */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="noise relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#10346c] p-7 text-white"
          >
            <div aria-hidden="true" className="absolute inset-0">
              <div className="bg-dots-light absolute inset-0 opacity-40" />
              <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-500/25 blur-[80px]" />
              <div className="absolute -right-8 -bottom-16 h-56 w-56 rounded-full bg-volt-400/15 blur-[80px]" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[11px] font-bold tracking-[0.16em] text-volt-300 uppercase">
                Custom build
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">
                Need something <span className="font-accent font-normal text-volt-300">custom?</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Tell us about your idea. We will scope, design and deliver a solution tailored to your business in weeks, not months.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#10346c] transition hover:bg-volt-300"
            >
              Get free consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
