"use client";

import { motion } from "framer-motion";
export default function TrustedTeams({
  logos = ["TechCorp", "Innovate Labs", "DigitalWorks", "CloudNova", "NextGen"],
}: {
  logos?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
  
    >
      <p className="text-center font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
        Trusted by modern teams worldwide
      </p>

      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {/* Seamless track: two identical copies, translate 0 -> -50% */}
        <div className="animate-marquee flex w-max [will-change:transform] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
            >
              {logos.map((logo) => (
                <span
                  key={copy === 0 ? logo : `${logo}-dup`}
                  className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-bold text-black transition-colors duration-300 hover:text-[#10346C]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C89A3D]" />
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}