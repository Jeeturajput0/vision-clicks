"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Compass,
    no: "01",
    title: "Discover",
    time: "Week 1",
    text: "Workshops, goals and scope. You get a fixed quote, timeline and prototype plan — no surprises later.",
  },
  {
    icon: PenTool,
    no: "02",
    title: "Design",
    time: "Week 2–3",
    text: "UX flows, UI and clickable prototypes. You review and approve every screen before we build.",
  },
  {
    icon: Code2,
    no: "03",
    title: "Build",
    time: "Week 4+",
    text: "Weekly sprints with live demos, QA on every release and code you own from day one.",
  },
  {
    icon: Rocket,
    no: "04",
    title: "Scale",
    time: "Ongoing",
    text: "Launch, monitor and grow. Analytics, optimisation and support that compound your results.",
  },
];

// How we work — sticky-feel timeline with connecting line
export default function Process() {
  return (
    <section aria-label="Our process" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="From idea to launch in"
          highlight="four steps"
          description="A battle-tested process refined over 250+ launches. Transparent at every stage."
        />
        <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div aria-hidden="true" className="absolute top-16 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_14px_36px_-24px_rgb(5_7_15/0.3)] transition-all hover:-translate-y-2 hover:shadow-[0_28px_56px_-24px_rgb(79_70_229/0.4)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-slate-200 transition-colors group-hover:text-indigo-200">
                  {s.no}
                </span>
                <span className="rounded-full bg-[#05070f] px-3 py-1 font-mono text-[11px] font-bold text-volt-300">
                  {s.time}
                </span>
              </div>
              <div className="relative mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
