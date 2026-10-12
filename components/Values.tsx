"use client";

import { motion } from "framer-motion";
import { Flame, Lightbulb, BadgeCheck, Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Flame,
    title: "Passion",
    text: "Energy and creativity in every sprint — we care about outcomes, not just output.",
    stat: "Outcome first",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "New tools, better patterns. We bring modern stacks that cut cost and ship faster.",
    stat: "Modern stack",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "Reviews, tests, CI/CD and docs by default. Highest bar from code to support.",
    stat: "Zero compromise",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Weekly demos and shared roadmaps — you always know what's next.",
    stat: "Full transparency",
  },
];

// Values — same clean paper theme as WhyChoose (ink icons + volt accents)
export default function Values() {
  return (
    <section aria-label="Our core values" className="relative scroll-mt-28 py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // eyebrow="Our values"
          title="Driven by"
          highlight="values"
          description="The principles that shape how we build, collaborate, and deliver."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((c, i) => (
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
