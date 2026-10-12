"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "FinEdge analytics dashboard",
    tags: ["Fintech", "Web Platform"],
    title: "FinEdge — real-time analytics platform",
    result: "+212% faster reporting",
    span: "lg:col-span-7",
  },
  {
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "RetailIQ commerce experience",
    tags: ["E-commerce", "Mobile"],
    title: "RetailIQ — omnichannel commerce",
    result: "3.1× conversion lift",
    span: "lg:col-span-5",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "MediSync health application",
    tags: ["Health", "Mobile App"],
    title: "MediSync — patient care app",
    result: "500k+ downloads",
    span: "lg:col-span-5",
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "LogiTrack logistics operations",
    tags: ["Logistics", "Enterprise"],
    title: "LogiTrack — fleet operations suite",
    result: "-38% operational cost",
    span: "lg:col-span-7",
  },
];

// Selected work — asymmetric editorial grid, the agency signature section
export default function Work() {
  return (
    <section aria-label="Selected work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Work that speaks in"
            highlight="numbers"
            description="A snapshot of recent launches — every project shipped on time, measured on outcomes."
          />
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-[#10346c] hover:bg-[#10346c] hover:text-white"
          >
            Become our next story
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-[#10346c] ${p.span}`}
            >
              <Image
                src={p.img}
                alt={p.alt}
                width={1000}
                height={620}
                loading="lazy"
                className="h-[300px] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 sm:h-[360px]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#10346c] via-[#10346c]/35 to-transparent" />
              {/* top tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#10346c] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              {/* bottom */}
              <div className="absolute right-5 bottom-5 left-5 flex flex-wrap items-end justify-between gap-3">
                <h3 className="font-display max-w-md text-lg font-bold text-white sm:text-xl">
                  {p.title}
                </h3>
                <span className="rounded-full bg-volt-400 px-3.5 py-1.5 font-mono text-xs font-black text-[#10346c]">
                  {p.result}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
