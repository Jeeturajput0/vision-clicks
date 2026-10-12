"use client";

import { motion } from "framer-motion";
import { Award, Rocket, TrendingUp, Building2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Award,
    title: "Award-winning team",
    text: "Recognised for innovation and craft across web, mobile and enterprise builds.",
    stat: "12+ awards",
  },
  {
    icon: Rocket,
    title: "Fast delivery",
    text: "Sprint-based process with weekly demos. On time, every time.",
    stat: "2–6 wk MVP",
  },
  {
    icon: TrendingUp,
    title: "Proven results",
    text: "Clients report ~40% average revenue lift after launch and optimisation.",
    stat: "+40% growth",
  },
  {
    icon: Building2,
    title: "Enterprise ready",
    text: "Fortune 500 experience plus startup speed — security and scale included.",
    stat: "NDA + SLA",
  },
];

// Why Choose — clean paper cards with ink icons
export default function WhyChoose() {
  return (
    <section aria-label="Why choose Vision Clicks" className="relative scroll-mt-28 py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          
          title="Your technology partner,"
          highlight="not just a vendor"
          description="Transparent pricing, senior-only teams and code you own from day one."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-900/10 bg-white p-6 shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)] transition-shadow hover:shadow-[0_26px_50px_-22px_rgb(16_52_108/0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#10346c] text-volt-300 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-brand-700" />
              </div>
              <p className="font-display mt-4 font-mono text-[13px] font-bold tracking-wide text-brand-700 uppercase">{c.stat}</p>
              <h3 className="font-display mt-1 text-[17px] font-bold text-[#10346c]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
