"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/data/technologies";

// Modern technology marquee grid
export default function Technologies() {
  return (
    <section aria-label="Technologies we master" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stack"
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
              className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_28px_-20px_rgb(4_8_26/0.3)] transition-shadow hover:border-indigo-200 hover:shadow-[0_20px_36px_-18px_rgb(79_70_229/0.4)]"
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0a1330] font-mono text-sm font-black text-cyan-300`}
              >
                {t.symbol}
              </span>
              <span>
                <span className="font-display block text-[15px] font-bold text-slate-900">{t.name}</span>
                <span className="block font-mono text-[11px] tracking-wider text-slate-500 uppercase">Production ready</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
