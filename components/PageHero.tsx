"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, House } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  crumb: string;
  /** Show smooth dark → light fade at bottom. Disable when a dark section (e.g. Stats) follows. */
  trail?: boolean;
};

// Modern midnight page hero with breadcrumb — shared by all sub-pages
export default function PageHero({ eyebrow, title, highlight, description, crumb, trail = true }: Props) {
  return (
    <>
    <section className="relative overflow-hidden bg-[#05070f] pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[140px]" />
        <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05070f] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-white/45"
        >
          <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
            <House className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          <span aria-current="page" className="text-cyan-300">
            {crumb}
          </span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-200 uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {eyebrow}
          </span>
          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {title} <span className="font-accent font-normal text-volt-300">{highlight}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
    {trail && (
      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-[#05070f] to-[#f7f8fc]" />
    )}
    </>
  );
}
