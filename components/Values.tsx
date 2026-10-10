"use client";

import { motion } from "framer-motion";
import { Flame, Lightbulb, BadgeCheck, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Flame,
    title: "Passion",
    text: "Energy and creativity in every sprint — we care about outcomes, not just output.",
    iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "New tools, better patterns. We bring modern stacks that cut cost and ship faster.",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "Reviews, tests, CI/CD and docs by default. Highest bar from code to support.",
    iconBg: "bg-gradient-to-br from-indigo-600 to-cyan-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Weekly demos and shared roadmaps — you always know what's next.",
    iconBg: "bg-gradient-to-br from-violet-600 to-purple-500",
  },
];

// Core values — modern minimal cards
export default function Values() {
  return (
    <section aria-label="Our core values" className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Culture" title="Driven by" highlight="values" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_14px_36px_-24px_rgb(4_8_26/0.3)] transition-shadow hover:shadow-[0_24px_48px_-20px_rgb(79_70_229/0.35)]"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${v.iconBg}`}
              >
                <v.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
