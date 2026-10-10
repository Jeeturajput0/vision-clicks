"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";

// Modern CTA — midnight card with glow + dual action
export default function CTA() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#04081a] px-6 py-14 text-center sm:px-12 lg:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid-dark absolute inset-0 opacity-80" />
            <div className="absolute top-1/2 left-1/2 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-[110px]" />
            <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-cyan-500/25 blur-[90px]" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-200 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              Free 30-min discovery call
            </span>
            <h2 className="font-display relative mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
              Have an idea? Let&apos;s turn it into <span className="text-gradient-light">software that sells.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/55 sm:text-lg">
              Get a fixed quote, timeline and prototype plan — no commitment, reply within 24 hours.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0a1330] transition hover:bg-cyan-200"
              >
                <CalendarCheck className="h-4 w-4" />
                Book free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-cyan-300" />
                Chat on WhatsApp
              </Link>
            </div>
            <p className="relative mt-5 font-mono text-[11px] tracking-wider text-white/35 uppercase">
              NDA on request • No spam • Senior team only
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
