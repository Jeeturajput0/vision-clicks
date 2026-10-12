"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

// Section heading — mono eyebrow with volt dot + serif italic highlight
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.18em] uppercase",
            dark
              ? "border-white/15 bg-white/[0.07] text-white/80"
              : "border-slate-900/10 bg-white text-slate-600 shadow-sm"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-volt-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-[#10346c]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={dark ? "font-accent text-gradient-light" : "font-accent text-gradient"}>
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/55" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
