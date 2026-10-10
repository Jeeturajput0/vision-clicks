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

// Modern dark stats band overlapping the hero
export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative bg-[#04081a] pb-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card-highlight ring-line grid grid-cols-2 gap-y-8 rounded-3xl bg-[#0a1330]/90 px-6 py-8 backdrop-blur sm:px-10 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                "text-center " +
                (i > 0 ? "lg:border-l lg:border-white/10" : "")
              }
            >
              <dd className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
              <dt className="mt-1.5 block text-[13px] font-medium text-white/50">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
      {/* curve into light body */}
      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-[#04081a] to-[#f7f8fc]" />
    </section>
  );
}
