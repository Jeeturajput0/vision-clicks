"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  Check,
} from "lucide-react";

// --- Static Data ---
const STATS = [
  { value: "250+", label: "Projects delivered" },
  { value: "4.9/5", label: "Client rating" },
  { value: "48h", label: "Fixed quote" },
];

const CLIENT_AVATARS = ["MG", "AG", "RK", "+"];

const DATES = [
  { id: "today", label: "Today", slots: "4 slots" },
  { id: "tomorrow", label: "Tomorrow", slots: "6 slots" },
  { id: "fri", label: "Fri 17", slots: "3 slots" },
];

const TIME_SLOTS = ["10:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

export default function CTA({
  headingTop = "Ready to Work With Us?",
  headingHighlight = "",
  headingPrefix = "",
  description = "Join hundreds of satisfied clients who have transformed their businesses with our solutions.",
  primaryLabel = "Start Your Project",
  secondaryLabel = "View Our Work",
  secondaryHref = "/services",
}: {
  headingTop?: string;
  headingHighlight?: string;
  headingPrefix?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const [selectedDate, setSelectedDate] = useState("tomorrow");
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-20 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="noise card-highlight group relative overflow-hidden rounded-[2rem] bg-[#10346c] ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(16,52,108,0.7)] sm:rounded-[2.5rem]"
        >
          {/* ── Background Glows & Elements ── */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid-dark absolute inset-0 opacity-80" />
            
            {/* Ambient Lights */}
            <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-volt-400/20 blur-[120px]" />
            <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-brand-300/10 blur-[120px]" />

            {/* Floating Blur Orbs */}
            <motion.div
              animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-[12%] h-24 w-24 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[14%] right-[6%] hidden h-20 w-20 rounded-2xl border border-volt-300/20 bg-volt-300/10 backdrop-blur-xl sm:block"
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10346c] via-[#10346c]/50 to-transparent" />
          </div>

          {/* Top Hairline Highlight */}
          <div aria-hidden="true" className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-volt-300/80 to-transparent" />

          {/* Top Right Sparkle Badge */}
          <div aria-hidden="true" className="absolute right-8 top-8 hidden items-center gap-2 sm:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-volt-300" />
              Let&apos;s talk
            </span>
          </div>

          <div className="relative grid items-center gap-12 p-7 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-16">
            
            {/* ── Left Column: Heading & Copy ── */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] py-1.5 pl-2 pr-4 backdrop-blur-xl"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-volt-300 px-2.5 py-1 text-[11px] font-black text-[#10346c]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10346c] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#10346c]" />
                  </span>
                  New
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
                  Free 30-min discovery call
                </span>
              </motion.div>

              <h2 className="font-display mx-auto mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:mx-0 lg:text-[3.6rem]">
                {headingTop}
                {(headingPrefix || headingHighlight) && (
                  <>
                    <br />
                    {headingPrefix}{" "}
                    <span className="font-accent text-gradient-light font-normal">
                      {headingHighlight}
                    </span>
                  </>
                )}
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0">
                {description}
              </p>

              {/* Social Proof */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <div className="flex -space-x-2.5">
                  {CLIENT_AVATARS.map((avatar) => (
                    <span
                      key={avatar}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#10346c] bg-gradient-to-br from-white/20 to-white/5 text-[10px] font-extrabold text-volt-300 backdrop-blur"
                    >
                      {avatar}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-white">4.9</span>
                  <span className="text-sm text-white/50">· 500+ clients</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt-300 px-7 py-4 text-sm font-black text-[#10346c] shadow-[0_18px_50px_-12px_rgba(121,180,237,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl sm:w-auto"
                >
                  <CalendarCheck className="h-4 w-4" />
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 text-volt-300" />
                  {secondaryLabel}
                  <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:opacity-100" />
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/10 pt-7 text-center lg:text-left">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Column: Interactive Booking Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
            >
              {/* Card Ambient Glow */}
              <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-volt-300/15 blur-3xl" />

              <div className="glass-dark ring-line relative overflow-hidden rounded-3xl p-6 shadow-2xl sm:p-7">
                
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-volt-300 text-[#10346c]">
                      <CalendarCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-extrabold text-white">Pick a time</p>
                      <p className="flex items-center gap-1.5 text-xs text-white/55">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300" />
                        Senior team · replies in 24h
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 font-mono text-[11px] font-bold text-volt-300">
                    FREE
                  </span>
                </div>

                {/* Date Pills */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {DATES.map((item) => {
                    const isSelected = selectedDate === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedDate(item.id)}
                        aria-pressed={isSelected}
                        className={`rounded-2xl border px-3 py-3 text-center transition-all duration-200 ${
                          isSelected
                            ? "border-volt-300/80 bg-volt-300/15 ring-1 ring-volt-300/50"
                            : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]"
                        }`}
                      >
                        <span className={`block text-[13px] font-extrabold ${isSelected ? "text-volt-300" : "text-white"}`}>
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-white/50">{item.slots}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        aria-pressed={isSelected}
                        className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                          isSelected
                            ? "border-white bg-white font-bold text-[#10346c] shadow-lg"
                            : "border-white/10 bg-transparent text-white/80 hover:border-volt-300/50 hover:text-white"
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5" />}
                        {slot}
                      </button>
                    );
                  })}
                </div>

                {/* Confirm Button */}
                <Link
                  href={{
                    pathname: "/contact",
                    query: { date: selectedDate, time: selectedTime },
                  }}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-[#10346c] transition-all hover:bg-volt-300 active:scale-[0.98]"
                >
                  Confirm my free call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Trust Badges */}
                <div className="mt-4 flex items-center justify-center gap-5">
                  {["NDA on request", "No spam"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/50">
                      <ShieldCheck className="h-3.5 w-3.5 text-volt-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 -top-5 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0b254d]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-volt-300 text-[#10346c]">
                  <Zap className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-xs font-extrabold text-white">Fixed quote in 48h</span>
                  <span className="block text-[11px] text-white/50">No hidden costs</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-3 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0b254d]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-300/20 text-brand-300">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-xs font-extrabold text-white">NDA-friendly</span>
                  <span className="block text-[11px] text-white/50">Enterprise-grade QA</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}