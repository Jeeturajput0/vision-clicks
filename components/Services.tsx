"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/services";

// Modern service card — numbered, hairline border, indigo hover glow
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_14px_36px_-24px_rgb(4_8_26/0.3)] transition-shadow hover:shadow-[0_28px_56px_-24px_rgb(79_70_229/0.45)]"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0a1330] text-cyan-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 group-hover:text-white">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-bold text-slate-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.features.map((f) => (
          <li
            key={f}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
          >
            <Check className="h-3 w-3 text-indigo-600" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-700"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </a>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to"
          highlight="ship software"
          description="From custom development to enterprise platforms — one senior team covering design, engineering, cloud and growth."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
          {/* CTA tile to complete the 3-col grid */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#04081a] p-7 text-white"
          >
            <div aria-hidden="true" className="absolute inset-0">
              <div className="bg-dots absolute inset-0 opacity-40" />
              <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-600/40 blur-[80px]" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/25 blur-[80px]" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-widest text-cyan-200 uppercase">
                Custom build
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">Have something unique in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Tell us about your idea. We will scope, design and deliver a solution tailored to your business in weeks, not months.
              </p>
            </div>
            <a
              href="/contact"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0a1330] transition hover:bg-cyan-200"
            >
              Get free consultation <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
