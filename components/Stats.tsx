"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 99.9, suffix: "%", label: "Client satisfaction", decimals: 1 },
  { value: 50, suffix: "+", label: "Engineers & designers" },
];

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Clean paper stats band under the hero
export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative bg-white pb-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-y-8 rounded-3xl border border-slate-900/10 bg-white px-6 py-8 shadow-[0_20px_50px_-28px_rgb(5_7_15/0.3)] sm:px-10 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={"text-center " + (i > 0 ? "lg:border-l lg:border-slate-900/10" : "")}
            >
              <dd className="font-display text-3xl font-bold tracking-tight text-[#05070f] sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
              <dt className="mt-1.5 flex items-center justify-center gap-1.5 text-[13px] font-medium text-slate-500">
                <span className="h-1 w-1 rounded-full bg-volt-500" />
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-white to-[#f4f5f0]" />
    </section>
  );
}
