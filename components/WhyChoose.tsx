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

// Why Choose — modern dark band
export default function WhyChoose() {
  return (
    <section aria-label="Why choose Vision Clicks" className="relative scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#04081a] px-6 py-14 sm:px-10 lg:px-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-grid-dark absolute inset-0 opacity-70" />
            <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-indigo-600/30 blur-[100px]" />
            <div className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
          </div>
          <div className="relative">
            <SectionHeading
              dark
              eyebrow="Why us"
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
                  className="glass-dark ring-line group rounded-3xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-cyan-300" />
                  </div>
                  <p className="font-display mt-4 text-sm font-bold text-cyan-300">{c.stat}</p>
                  <h3 className="font-display mt-1 text-[17px] font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{c.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
