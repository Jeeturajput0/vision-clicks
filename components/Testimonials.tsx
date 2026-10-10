"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 2000;

// Paper testimonial carousel — big serif quotes + autoslide
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

 

  // Autoslide — pauses on hover / focus / touch, resumes on leave
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index]);

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

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden pt-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: 60 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 * direction }}
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

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">
           
            {/* <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-8 bg-[#05070f]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div> */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
