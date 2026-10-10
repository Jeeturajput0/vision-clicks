"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  PlayCircle,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

const logos = ["TechNova", "FinEdge", "CloudNine", "MediSync", "RetailIQ", "LogiTrack", "EduSpark", "FoodKart"];


// Clean paper hero — ink type, volt accents, light product visual
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-36 pb-14 sm:pt-44 lg:pt-28 lg:pb-20">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-soft absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-[26rem] w-[54rem] -translate-x-1/2 rounded-full bg-volt-300/40 blur-[130px]" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-lime-200/50 blur-[110px]" />
        <div className="absolute right-[-8rem] bottom-[-6rem] h-[22rem] w-[22rem] rounded-full bg-slate-200/60 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left */}
          <div>
           

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display mt-6 text-[2.75rem] leading-[0.98] font-bold tracking-[-0.03em] text-balance text-[#05070f] sm:text-6xl lg:text-[4.6rem]"
            >
              We build software that ships fast &amp; scales{" "}
              <span className="font-accent font-normal text-gradient">beautifully.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Vision Clicks is a senior product &amp; engineering studio crafting
              enterprise apps, web platforms and mobile products — from first
              sketch to production scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#05070f] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_-14px_rgb(5_7_15/0.5)] transition-all hover:bg-volt-400 hover:text-[#05070f]"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white px-7 py-4 text-sm font-bold text-[#05070f] transition hover:border-[#05070f]"
              >
                <PlayCircle className="h-4 w-4 text-lime-700" />
                See our work
              </Link>
            </motion.div>

            {/* Proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["AK", "RS", "PM", "+"].map((t) => (
                    <span
                      key={t}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#05070f] text-[10px] font-extrabold text-volt-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-[#05070f]">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500">from 500+ clients worldwide</p>
                </div>
              </div>
              <span className="hidden h-9 w-px bg-slate-900/10 sm:block" />
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="h-4 w-4 text-lime-700" />
                NDA-friendly • Agile • ISO-grade QA
              </div>
            </motion.div>
          </div>

          {/* Right — light product window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* glow behind */}
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-volt-300/50 via-transparent to-lime-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white shadow-[0_32px_70px_-28px_rgb(5_7_15/0.35)]">
              {/* window bar */}
              <div className="flex items-center justify-between border-b border-slate-900/10 bg-[#f4f5f0] px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-lime-500" />
                </div>
                <p className="hidden rounded-md border border-slate-900/10 bg-white px-3 py-1 font-mono text-[11px] text-slate-500 sm:block">
                  app.visionclicks.com/overview
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#05070f] px-2.5 py-1 text-[11px] font-bold text-volt-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt-400" />
                  Live
                </span>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-3 gap-3 p-5">
                {[
                  { k: "Uptime", v: "99.99%" },
                  { k: "Deploy", v: "32s" },
                  { k: "Scale", v: "12×" },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl border border-slate-900/10 bg-[#f4f5f0] p-3.5">
                    <p className="font-mono text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">{m.k}</p>
                    <p className="font-display mt-1 text-xl font-bold text-[#05070f] sm:text-2xl">{m.v}</p>
                  </div>
                ))}
              </div>

              {/* chart */}
              <div className="px-5 pb-2">
                <div className="rounded-2xl border border-slate-900/10 bg-gradient-to-b from-volt-200/60 to-transparent p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2" aria-hidden="true">
                    {[38, 55, 42, 68, 58, 82, 74, 95, 88, 100, 92, 110].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}px` }}
                        className={
                          i > 8
                            ? "w-full rounded-md bg-gradient-to-t from-lime-600 to-volt-400"
                            : "w-full rounded-md bg-slate-900/10"
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-600">Release velocity — last 12 sprints</p>
                    <p className="font-mono text-xs font-bold text-lime-700">+212%</p>
                  </div>
                </div>
              </div>

              {/* deploy row */}
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-100 text-lime-800">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-[#05070f]">Production deploy succeeded</p>
                    <p className="font-mono text-[11px] text-slate-500">main • 32s ago • v4.2.1</p>
                  </div>
                </div>
                <span className="hidden rounded-lg bg-[#05070f] px-3 py-2 text-xs font-bold text-white sm:block">
                  View logs
                </span>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-2 rounded-2xl border border-slate-900/10 bg-white px-4 py-3 shadow-xl sm:-right-5"
            >
              <p className="font-display text-2xl font-bold text-[#05070f]">
                10<span className="text-lime-600">+</span>
              </p>
              <p className="text-[11px] font-semibold text-slate-500">Years shipping software</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 hidden items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white px-4 py-3 shadow-xl sm:flex lg:-left-8"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt-400 text-[#05070f]">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-[#05070f]">250+ projects delivered</p>
                <p className="text-[11px] text-slate-500">Enterprise • Startup • SaaS</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Client wordmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16 border-t border-slate-900/10 pt-8"
        >
          <p className="text-center font-mono text-[11px] font-bold tracking-[0.24em] text-slate-400 uppercase">
            Trusted by modern teams worldwide
          </p>
          <div className="mt-5 flex items-center gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="font-display flex items-center gap-3 text-lg font-bold whitespace-nowrap text-black transition hover:text-[#05070f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-volt-500" />
                  {l}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
