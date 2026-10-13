"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

type Review = {
  id: number;
  company: string;
  quote: string;
  rating: number;
  reviewer: string;
  initials: string;
};

// Local data — project data files untouched
const reviews: Review[] = [
  {
    id: 1,
    company: "LeasePe",
    quote:
      "From day one, the team understood our vision. They built a platform that our customers actually enjoy using — support is quick, and the codebase is clean. We'd work with them again without hesitation.",
    rating: 5.0,
    reviewer: "Manu Garg",
    initials: "MG",
  },
  {
    id: 2,
    company: "Waggo",
    quote:
      "Our internal tools were a mess. The Vision Clicks team redesigned and rebuilt them in phases without disrupting operations. Reporting that used to take days now runs in minutes.",
    rating: 5.0,
    reviewer: "Arun Gupta",
    initials: "AG",
  },
  {
    id: 3,
    company: "PaperTime",
    quote:
      "We needed a reliable partner for our web and mobile apps. They delivered on time, stayed within budget, and the quality of both design and development exceeded our expectations.",
    rating: 5.0,
    reviewer: "Rahis Khan",
    initials: "RK",
  },
  {
    id: 4,
    company: "My Our Advisor",
    quote:
      "Their approach to requirement gathering and UX made a real difference. The solution they built has reduced support tickets and improved our conversion rates noticeably.",
    rating: 5.0,
    reviewer: "Manish Jadon",
    initials: "MJ",
  },
  {
    id: 5,
    company: "Destiny Tours",
    quote:
      "We wanted one system for bookings, payments, and customer communication. They integrated everything and trained our staff. The result is less manual work and fewer errors.",
    rating: 5.0,
    reviewer: "Chanchal Srivastava",
    initials: "CS",
  },
];

const AUTOPLAY_DELAY = 5000;

// Fan presets by offset: far-left, left, center, right, far-right
const ROTATE = [-5, -2, 0, 2, 5];
const SCALE = [0.85, 0.92, 1, 0.92, 0.85];
const LIFT = [26, 12, 0, 12, 26];
const FADE = [0.55, 0.82, 1, 0.82, 0.55];

const spring = { type: "spring" as const, stiffness: 260, damping: 28 };

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < Math.round(rating)
              ? "fill-gold-500 text-gold-500"
              : "fill-slate-200 text-slate-200"
          )}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 text-xs font-extrabold text-[#10346c]">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

function ReviewCardBody({ review, center }: { review: Review; center?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-brand-50 transition-shadow duration-300",
        center
          ? "border-[#10346c]/20 shadow-[0_28px_56px_-24px_rgb(16_52_108/0.45)]"
          : "border-slate-900/10 shadow-[0_14px_36px_-24px_rgb(16_52_108/0.3)]",
        "hover:shadow-[0_36px_70px_-24px_rgb(35_116_185/0.5)]"
      )}
    >
      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-[#10346c] via-brand-600 to-volt-400"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Quote badge + company pill */}
        <div className="flex items-center justify-between gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#10346c]">
            <Quote className="h-5 w-5 text-volt-300" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[11px] font-bold text-[#10346c] shadow-sm">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            {review.company}
          </span>
        </div>

        <div className="mt-4">
          <Stars rating={review.rating} />
        </div>

        <blockquote className="font-accent mt-3 flex-1 text-[17px] leading-relaxed text-[#10346c]">
          “{review.quote}”
        </blockquote>

        {/* Reviewer row + circular action */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#10346c] text-[13px] font-black text-volt-300"
            >
              {review.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-[#10346c]">
                {review.reviewer}
              </p>
              <p className="truncate text-xs font-medium text-slate-500">
                {review.company}
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#10346c] text-white transition-all duration-300 group-hover:bg-brand-600"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

// Premium overlapping reviews — center-focused fan carousel
export default function Testimonials() {
  const [active, setActive] = useState(3);
  const [paused, setPaused] = useState(false);
  const count = reviews.length;

  const go = useCallback(
    (dir: 1 | -1) => setActive((p) => (p + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % count);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, count]);

  // Offsets in [-2..2] for the 5 visible cards (desktop fan)
  const visible = reviews
    .map((review, i) => {
      let diff = (i - active) % count;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;
      return { review, diff };
    })
    .filter((c) => Math.abs(c.diff) <= 2)
    .sort((a, b) => a.diff - b.diff);

  const current = reviews[active];

  return (
    <section
      aria-label="Client reviews"
      className="relative overflow-hidden py-16 sm:py-10"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Stories our clients"
          highlight="love to tell"
          description="Real experiences from businesses we've designed and built for."
        />

        {/* Desktop fan — 5 overlapping cards */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) go(1);
            else if (info.offset.x > 70) go(-1);
          }}
          onHoverStart={() => setPaused(true)}
          onHoverEnd={() => setPaused(false)}
          className="mt-14 hidden cursor-grab items-stretch justify-center active:cursor-grabbing md:flex"
        >
          {visible.map(({ review, diff }, pos) => {
            const slot = diff + 2;
            return (
              <motion.div
                key={review.id}
                initial={false}
                animate={{
                  rotate: ROTATE[slot],
                  scale: SCALE[slot],
                  y: LIFT[slot],
                  opacity: FADE[slot],
                }}
                transition={spring}
                whileHover={{ y: LIFT[slot] - 12, scale: SCALE[slot] + 0.03 }}
                style={{ zIndex: 30 - Math.abs(diff) * 10 }}
                className={cn(
                  "w-60 shrink-0 lg:w-64",
                  pos > 0 && "-ml-16 lg:-ml-20"
                )}
              >
                <ReviewCardBody review={review} center={diff === 0} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile — one focused card with swipe */}
        <div className="mt-10 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 90, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -90, rotate: -3 }}
              transition={spring}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              className="mx-auto max-w-sm"
            >
              <ReviewCardBody review={current} center />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white text-[#10346c] shadow-sm transition hover:bg-[#10346c] hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to review ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active
                    ? "w-7 bg-[#10346c]"
                    : "w-2 bg-[#10346c]/20 hover:bg-[#10346c]/50"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#10346c] text-white shadow-lg transition hover:bg-brand-700"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
