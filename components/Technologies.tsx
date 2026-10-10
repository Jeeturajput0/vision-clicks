"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/data/technologies";

// Technology showcase — ink chips on paper
export default function Technologies() {
  return (
    <section aria-label="Technologies we master" className="py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built on a modern,"
          highlight="proven stack"
          description="Production-grade frameworks and clouds — chosen for speed, security and scale."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {technologies.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white p-4 shadow-[0_10px_28px_-22px_rgb(5_7_15/0.3)] transition-all hover:border-lime-600/40 hover:shadow-[0_20px_36px_-20px_rgb(77_124_15/0.35)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#05070f] font-mono text-sm font-black text-volt-300">
                {t.symbol}
              </span>
              <span>
                <span className="font-display block text-[15px] font-bold text-[#05070f]">{t.name}</span>
                <span className="block font-mono text-[11px] tracking-wider text-slate-500 uppercase">Production ready</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
