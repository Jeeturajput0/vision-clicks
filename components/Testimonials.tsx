"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_DELAY = 2000;

// Paper testimonial carousel — infinite autoslide, never stops
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Non-stop infinite loop: last -> first -> continue
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section aria-label="Client testimonials" className="relative overflow-hidden py-16 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // eyebrow="Clients"
          title="Loved by teams"
          highlight="that ship"
          description="Real feedback from businesses we've helped grow."
        />

        <div className="relative mt-10">
          <div className="overflow-hidden pt-2">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto max-w-3xl rounded-[1.75rem] border border-slate-900/10 bg-white p-8 text-center shadow-[0_24px_60px_-30px_rgb(5_7_15/0.35)] sm:p-10"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#05070f]">
                  <Quote className="h-5 w-5 text-volt-300" aria-hidden="true" />
                </span>
                <div className="mt-4 flex justify-center gap-1" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="font-accent mt-4 text-xl leading-relaxed text-[#05070f] sm:text-2xl">
                  “{current.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#05070f] text-sm font-black text-volt-300">
                    {current.initials}
                  </span>
                  <span className="text-left">
                    <span className="block text-[15px] font-extrabold text-[#05070f]">{current.name}</span>
                    <span className="block text-sm text-slate-500">{current.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
