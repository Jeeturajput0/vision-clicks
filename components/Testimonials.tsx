"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Modern dark testimonial carousel
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  const current = testimonials[index];

  return (
    <section aria-label="Client testimonials" className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a1330] via-[#141b5e] to-[#0a5a72] px-6 py-14 sm:px-10">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="bg-dots absolute inset-0 opacity-30" />
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-white/15 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <SectionHeading
              dark
              eyebrow="Clients"
              title="Loved by teams"
              highlight="that ship"
              description="Real feedback from businesses we've helped grow."
            />

            <div className="relative mt-10">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.figure
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: 60 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 * direction }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="glass-dark ring-line mx-auto max-w-3xl rounded-[1.75rem] p-8 text-center sm:p-10"
                  >
                    <Quote className="mx-auto h-8 w-8 text-cyan-300/70" aria-hidden="true" />
                    <div className="mt-3 flex justify-center gap-1" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="font-display mt-4 text-base leading-relaxed font-medium text-white sm:text-xl">
                      “{current.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-black text-white ring-1 ring-white/40">
                        {current.initials}
                      </span>
                      <span className="text-left">
                        <span className="block text-[15px] font-extrabold text-white">{current.name}</span>
                        <span className="block text-sm text-white/55">{current.role}</span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-7 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Go to testimonial ${i + 1}`}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === index ? "w-8 bg-cyan-300" : "w-2 bg-white/30 hover:bg-white/60"
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
