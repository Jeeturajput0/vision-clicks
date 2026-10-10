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

const logos = ["TechNova", "FinEdge", "CloudNine", "MediSync", "RetailIQ", "LogiTrack"];

const stack = ["Next.js", "React", "Node.js", "Python", "AWS", "Flutter"];

// Modern midnight hero — premium agency style
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#04081a] pt-32 pb-14 sm:pt-40 lg:pt-44 lg:pb-20">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[140px]" />
        <div className="absolute top-24 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-[-8rem] bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04081a] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-1.5 pr-4 pl-1.5 backdrop-blur"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-2.5 py-1 text-[11px] font-bold text-white">
                <Zap className="h-3 w-3" /> NEW
              </span>
              <span className="text-xs font-semibold text-white/70">
                Accepting Q1 2026 projects — 2 slots left
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display mt-6 text-[2.6rem] leading-[1.02] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-[4.4rem]"
            >
              Software that ships fast, <span className="text-gradient-light">scales further.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              Vision Clicks designs, builds and scales enterprise apps, web
              platforms and mobile products — with senior engineers, sharp UX
              and delivery you can plan around.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0a1330] transition hover:bg-cyan-200 hover:shadow-[0_18px_44px_-12px_rgb(103_232_249/0.5)]"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <PlayCircle className="h-4 w-4 text-cyan-300" />
                See our work
              </Link>
            </motion.div>

            {/* Proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["AK", "RS", "PM", "+9"].map((t) => (
                    <span
                      key={t}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#04081a] bg-gradient-to-br from-indigo-500 to-cyan-500 text-[10px] font-extrabold text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-white">4.9</span>
                  </div>
                  <p className="text-xs text-white/50">from 500+ happy clients</p>
                </div>
              </div>
              <span className="hidden h-9 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-2 text-xs font-semibold text-white/60">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                NDA-friendly • Agile • ISO-grade QA
              </div>
            </motion.div>
          </div>

          {/* Right — product window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-highlight ring-line relative overflow-hidden rounded-3xl bg-[#0a1330]/90 backdrop-blur-xl">
              {/* window bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="rounded-md bg-white/[0.07] px-3 py-1 font-mono text-[11px] text-white/50">
                  app.visionclicks.com/overview
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  Live
                </span>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-3 gap-3 p-5">
                {[
                  { k: "Uptime", v: "99.99%" },
                  { k: "Deploy", v: "32s" },
                  { k: "Scale", v: "12x" },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5">
                    <p className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">{m.k}</p>
                    <p className="font-display mt-1 text-xl font-bold text-white">{m.v}</p>
                  </div>
                ))}
              </div>

              {/* fake chart */}
              <div className="px-5 pb-2">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/15 to-transparent p-4">
                  <div className="flex items-end justify-between gap-2" aria-hidden="true">
                    {[38, 55, 42, 68, 58, 82, 74, 95, 88, 100, 92, 110].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}px` }}
                        className={
                          i > 8
                            ? "w-full rounded-md bg-gradient-to-t from-cyan-400 to-indigo-400"
                            : "w-full rounded-md bg-white/12"
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs font-semibold text-white/60">Release velocity — last 12 sprints</p>
                    <p className="text-xs font-bold text-emerald-300">+212%</p>
                  </div>
                </div>
              </div>

              {/* deploy row */}
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <BadgeCheck className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-white">Production deploy succeeded</p>
                    <p className="font-mono text-[11px] text-white/40">main • 32s ago • v4.2.1</p>
                  </div>
                </div>
                <span className="hidden rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#0a1330] sm:block">
                  View logs
                </span>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-2 rounded-2xl border border-white/15 bg-[#0d1740]/95 px-4 py-3 shadow-2xl backdrop-blur sm:-right-5"
            >
              <p className="font-display text-2xl font-bold text-white">10+</p>
              <p className="text-[11px] font-semibold text-white/50">Years shipping software</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-[#0d1740]/95 px-4 py-3 shadow-2xl backdrop-blur sm:flex lg:-left-8"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-white">250+ projects delivered</p>
                <p className="text-[11px] text-white/50">Enterprise • Startup • SaaS</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo + stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-14 border-t border-white/10 pt-7"
        >
          <p className="text-center text-[11px] font-bold tracking-[0.22em] text-white/35 uppercase">
            Trusted by modern teams
          </p>
          <div className="mt-4 flex items-center gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="font-display flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 font-mono text-[11px] font-semibold text-white/55"
              >
                {s}
              </span>
            ))}
            <Link href="/solutions" className="inline-flex items-center gap-1 px-2 text-[11px] font-bold text-cyan-300 hover:text-cyan-200">
              + 20 more <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
