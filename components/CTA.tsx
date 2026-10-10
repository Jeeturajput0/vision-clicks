"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";

// Paper CTA — white card, ink type, volt energy
export default function CTA() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-900/10 bg-white px-6 py-14 text-center shadow-[0_32px_80px_-32px_rgb(5_7_15/0.35)] sm:px-12 lg:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid-soft absolute inset-0 opacity-70" />
            <div className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-volt-300/50 blur-[110px]" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#05070f] px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-volt-300 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt-400" />
              Free 30-min discovery call
            </span>
            <h2 className="font-display relative mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-balance text-[#05070f] sm:text-5xl">
              Have an idea? Let&apos;s turn it into <span className="font-accent font-normal text-gradient">software that sells.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Get a fixed quote, timeline and prototype plan — no commitment, reply within 24 hours.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#05070f] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-volt-400 hover:text-[#05070f]"
              >
                <CalendarCheck className="h-4 w-4" />
                Book free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white px-7 py-3.5 text-sm font-bold text-[#05070f] transition hover:border-[#05070f]"
              >
                <MessageCircle className="h-4 w-4 text-lime-700" />
                Explore services
              </Link>
            </div>
            <p className="relative mt-5 font-mono text-[11px] tracking-wider text-slate-400 uppercase">
              NDA on request • No spam • Senior team only
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
