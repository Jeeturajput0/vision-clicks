"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-200/50 blur-[110px]" />
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
              className="font-display mt-6 text-[2.75rem] leading-[0.98] font-bold tracking-[-0.03em] text-balance text-[#10346c] sm:text-6xl lg:text-[4.6rem]"
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
                className="group inline-flex items-center gap-2 rounded-full bg-[#10346c] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_-14px_rgb(16_52_108/0.5)] transition-all hover:bg-volt-400 hover:text-[#10346c]"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white px-7 py-4 text-sm font-bold text-[#10346c] transition hover:border-[#10346c]"
              >
                <PlayCircle className="h-4 w-4 text-brand-700" />
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
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#10346c] text-[10px] font-extrabold text-volt-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-[#10346c]">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500">from 500+ clients worldwide</p>
                </div>
              </div>
              <span className="hidden h-9 w-px bg-slate-900/10 sm:block" />
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="h-4 w-4 text-brand-700" />
                NDA-friendly • Agile • ISO-grade QA
              </div>
            </motion.div>
          </div>

          {/* Right — light product window */}
        <motion.div
  initial={{ opacity: 0, scale: 0.96, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="relative"
>
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#79B4ED]/30 via-transparent to-[#C89A3D]/20 blur-3xl"
  />

  <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_80px_-35px_rgba(16,52,108,0.35)]">

    {/* Top Header */}
    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <span className="hidden text-xs font-medium text-slate-400 sm:block">
          Analytics Overview
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden rounded-lg bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-500 sm:block">
          Last 30 days
        </span>

        <span className="flex items-center gap-1.5 rounded-full bg-[#10346C] px-3 py-1.5 text-[10px] font-bold text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#79B4ED]" />
          Live
        </span>
      </div>
    </div>

    {/* Main Analytics */}
    <div className="p-5">

      {/* Heading */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Performance
          </p>

          <div className="mt-1 flex items-end gap-3">
            <h3 className="text-3xl font-bold tracking-tight text-[#10346C]">
              84.6K
            </h3>

            <span className="mb-1 rounded-full bg-green-50 px-2 py-1 text-[11px] font-bold text-green-600">
              +24.8%
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-400">
            Total monthly visitors
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-[11px] text-slate-400">Growth</p>
          <p className="text-lg font-bold text-[#2374B9]">+212%</p>
        </div>
      </div>

      {/* Graph */}
   {/* Graph */}
<div className="relative h-[150px] overflow-hidden rounded-2xl bg-[#F3F7FC] p-3">

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-4 py-5">
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="border-t border-dashed border-slate-200"
            />
          ))}
        </div>

        {/* Y Axis */}
        <div className="absolute left-2 top-5 bottom-6 flex flex-col justify-between text-[9px] font-medium text-slate-400">
          <span>100K</span>
          <span>75K</span>
          <span>50K</span>
          <span>25K</span>
          <span>0</span>
        </div>

        {/* SVG Graph */}
        <svg
          viewBox="0 0 700 220"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full pl-7 pr-3"
        >
          {/* Gradient */}
          <defs>
            <linearGradient
              id="graphGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#2374B9"
                stopOpacity="0.28"
              />

              <stop
                offset="100%"
                stopColor="#79B4ED"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d="
              M0 175
              C45 168 55 150 90 158
              C125 166 135 125 175 132
              C215 140 225 108 265 118
              C305 128 320 92 355 102
              C390 112 405 76 440 86
              C475 96 490 58 525 68
              C560 78 585 38 620 50
              C650 60 670 28 700 35
              L700 220
              L0 220
              Z
            "
            fill="url(#graphGradient)"
          />

          {/* Main Line */}
          <path
            d="
              M0 175
              C45 168 55 150 90 158
              C125 166 135 125 175 132
              C215 140 225 108 265 118
              C305 128 320 92 355 102
              C390 112 405 76 440 86
              C475 96 490 58 525 68
              C560 78 585 38 620 50
              C650 60 670 28 700 35
            "
            fill="none"
            stroke="#2374B9"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Highlight line */}
          <path
            d="
              M0 175
              C45 168 55 150 90 158
              C125 166 135 125 175 132
              C215 140 225 108 265 118
              C305 128 320 92 355 102
              C390 112 405 76 440 86
              C475 96 490 58 525 68
              C560 78 585 38 620 50
              C650 60 670 28 700 35
            "
            fill="none"
            stroke="#79B4ED"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Current Point */}
          <circle
            cx="700"
            cy="35"
            r="7"
            fill="white"
            stroke="#2374B9"
            strokeWidth="4"
          />
        </svg>

        {/* Tooltip */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-8 top-5 rounded-xl border border-white/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur"
        >
          <p className="text-[9px] font-medium text-slate-400">
            Today
          </p>

          <p className="text-sm font-bold text-[#10346C]">
            84.6K
          </p>
        </motion.div>

        {/* X Axis */}
        <div className="absolute bottom-2 left-10 right-4 flex justify-between text-[9px] font-medium text-slate-400">
          <span>01</span>
          <span>07</span>
          <span>14</span>
          <span>21</span>
          <span>30</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">

        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Uptime
          </p>

          <p className="mt-1 text-lg font-bold text-[#10346C]">
            99.99%
          </p>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[99%] rounded-full bg-[#2374B9]" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Deploy
          </p>

          <p className="mt-1 text-lg font-bold text-[#10346C]">
            32s
          </p>

          <p className="mt-1 text-[9px] font-medium text-green-600">
            ↓ 18% faster
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Scale
          </p>

          <p className="mt-1 text-lg font-bold text-[#10346C]">
            12×
          </p>

          <p className="mt-1 text-[9px] font-medium text-[#C89A3D]">
            Peak capacity
          </p>
        </div>

      </div>

      {/* Bottom deploy status */}
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#79B4ED]/20 bg-[#F3F7FC] p-3.5">

        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#10346C] text-white">
            <BadgeCheck className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-bold text-[#10346C]">
              Production deploy succeeded
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              main • 32s ago • v4.2.1
            </p>
          </div>
        </div>

        <button className="hidden rounded-xl bg-[#2374B9] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#10346C] sm:block">
          View logs
        </button>

      </div>
    </div>
  </div>

  {/* Floating card - top */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-3 -top-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-right-6"
  >
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#F3F7FC]">
        <span className="text-lg">↗</span>
      </div>

      <div>
        <p className="text-xl font-bold text-[#10346C]">
          +24.8%
        </p>

        <p className="text-[10px] font-medium text-slate-400">
          Monthly growth
        </p>
      </div>
    </div>
  </motion.div>

  {/* Floating card - bottom */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex lg:-left-8"
  >
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#C89A3D]/15">
      <Zap className="h-4 w-4 text-[#C89A3D]" />
    </div>

    <div>
      <p className="text-xs font-bold text-[#10346C]">
        250+ Projects
      </p>

      <p className="text-[10px] text-slate-400">
        Enterprise • Startup • SaaS
      </p>
    </div>
  </motion.div>
</motion.div>
        </div>

        {/* Client wordmarks */}
       
      </div>
    </section>
  );
}
