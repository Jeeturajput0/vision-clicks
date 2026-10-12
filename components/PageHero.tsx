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
export default function PageHero({  title, highlight, description, crumb, trail = true }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-15">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-grid-soft absolute inset-0" />
          <div className="absolute -top-32 left-1/2 h-[22rem] w-[46rem] -translate-x-1/2 rounded-full bg-volt-300/40 blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl"
          >
            <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-balance text-[#10346c] sm:text-5xl lg:text-6xl">
              {title} <span className="font-accent font-normal text-gradient">{highlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </section>
      {trail && (
        <div aria-hidden="true" className="h-10 bg-gradient-to-b from-white to-[#F3F7FC]" />
      )}
    </>
  );
}
