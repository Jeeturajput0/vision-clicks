"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

// About Vision Clicks — modern split with experience badge
export default function About() {
  return (
    <section id="about" className="relative scroll-mt-28  sm:py-10 lg:py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our"
          highlight="Story"
          description="From a small passionate team in 2014 to a worldwide technology partner — here's how we got here."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl font-bold text-slate-900">12</span>
              <span className="text-sm leading-tight font-semibold text-slate-500">
                years of<br />shipping software
              </span>
              <span className="ml-2 hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 sm:inline-block">
                ● Available now
              </span>
            </div>
            <h3 className="font-display mt-5 text-2xl font-bold text-slate-900">
              Founded in 2014, with a vision to democratize technology.
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              The Vision Clicks began as a small team of passionate developers
              with a vision to democratize technology for businesses of all
              sizes. What started as a local software development company has
              grown into a comprehensive technology solutions provider serving
              clients worldwide.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Our journey has been marked by continuous learning, innovation,
              and an unwavering commitment to delivering exceptional value to
              our clients. We&apos;ve helped hundreds of businesses transform
              their operations through cutting-edge software solutions.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {[
                { t: "Custom enterprise apps & integrations", d: "ERP, CRM, internal tools" },
                { t: "Web, mobile & cloud-native platforms", d: "Next.js, Flutter, AWS" },
                { t: "Quality-first agile delivery", d: "QA, CI/CD, docs included" },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                  <span>
                    <span className="block text-[15px] font-bold text-slate-800">{item.t}</span>
                    <span className="block text-[13px] text-slate-500">{item.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="/services"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#10346c] px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Explore our capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-brand-200/70 via-volt-200/50 to-transparent blur-2xl" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white shadow-[0_28px_60px_-24px_rgb(4_8_26/0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Vision Clicks team collaborating around a laptop"
                width={900}
                height={640}
                loading="lazy"
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b254d]/85 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white font-black text-[#10346c]">
                    50+
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-white">Our workspace and team</p>
                    <p className="flex items-center gap-1 text-xs text-white/60">
                      <MapPin className="h-3 w-3" /> Agra • Remote worldwide
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-300 px-3 py-1 text-xs font-bold text-brand-900">
                  Hiring
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
