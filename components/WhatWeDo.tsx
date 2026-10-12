"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const points = [
  {
    t: "Future-ready product engineering",
    d: "We build powerful, scalable digital solutions — custom software, web apps, mobile products and enterprise platforms — that help you grow and stay ahead.",
  },
  {
    t: "Quality, performance & UX obsessed",
    d: "Technology-driven delivery with strong focus on reliability, speed and experience. Well-structured code, tested and documented.",
  },
  {
    t: "A partner for the long term",
    d: "From MVP to scale: roadmaps, support and continuous improvement that drive efficiency and lasting value.",
  },
];

// What We Do — modern checklist + image
export default function WhatWeDo() {
  return (
    <section id="solutions" className="relative scroll-mt-28 py-2 sm:py-1">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200/60 bg-white px-4 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading  title="What" highlight="we do" />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <ol className="space-y-4">
                {points.map((p, i) => (
                  <motion.li
                    key={p.t}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-[#f7f8fc] p-5"
                  >
                    <span className="font-display grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#10346c] text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                        <CheckCircle2 className="h-4 w-4 text-brand-500" />
                        {p.t}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-600">{p.d}</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="relative order-1 lg:order-2"
            >
              <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_rgb(4_8_26/0.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                  alt="Developers building scalable web and mobile solutions"
                  width={900}
                  height={720}
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b254d]/80 via-transparent to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-extrabold text-white">Web • Mobile • Enterprise • Cloud</p>
                    <p className="font-mono text-[11px] tracking-wider text-volt-300 uppercase">Sprint-based delivery</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#10346c]">
                    Agile
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
