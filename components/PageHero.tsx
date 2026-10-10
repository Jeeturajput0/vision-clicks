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
  /** Show smooth white → paper fade at bottom. Disable when a strip section follows. */
  trail?: boolean;
};

// Clean paper page hero with breadcrumb — shared by all sub-pages
export default function PageHero({ eyebrow, title, highlight, description, crumb, trail = true }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-grid-soft absolute inset-0" />
          <div className="absolute -top-32 left-1/2 h-[22rem] w-[46rem] -translate-x-1/2 rounded-full bg-volt-300/40 blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-400"
          >
            <Link href="/" className="flex items-center gap-1.5 transition hover:text-[#05070f]">
              <House className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <span aria-current="page" className="text-lime-800">
              {crumb}
            </span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#05070f] px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-volt-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-volt-400" />
              {eyebrow}
            </span>
            <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-balance text-[#05070f] sm:text-5xl lg:text-6xl">
              {title} <span className="font-accent font-normal text-gradient">{highlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </section>
      {trail && (
        <div aria-hidden="true" className="h-10 bg-gradient-to-b from-white to-[#f4f5f0]" />
      )}
    </>
  );
}
