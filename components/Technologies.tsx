"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/data/technologies";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiRedis,
  SiFigma,
} from "react-icons/si";

const techIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  TypeScript: SiTypescript,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  Figma: SiFigma,
};
export default function Technologies() {
  return (
    <section aria-label="Technologies we master" className="py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built on a modern,"
          highlight="proven stack"
          description="Production-grade frameworks and clouds — chosen for speed, security and scale."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {technologies.map((technology, index) => {
            let Icon = techIcons[technology.name];

            return (
              <motion.div
                key={technology.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#10346C]/10
                  bg-white
                  p-4
                  shadow-[0_10px_28px_-22px_rgb(16_52_108/0.3)]
                  transition-all
                  duration-300
                  hover:border-[#2374B9]/40
                  hover:shadow-[0_20px_36px_-20px_rgb(35_116_185/0.35)]
                "
              >
                {/* Technology Icon */}
                <span
                  className={`
                    grid
                    h-12
                    w-12
                    shrink-0
                    place-items-center
                    rounded-xl
                    ${technology.color}
                    shadow-sm
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  {Icon ? (
                    <Icon className="text-xl" />
                  ) : (
                    <span className="font-mono text-sm font-bold">
                      {technology.symbol}
                    </span>
                  )}
                </span>

                {/* Technology Details */}
                <span className="min-w-0">
                  <span className="block truncate font-display text-[15px] font-bold text-[#10346C]">
                    {technology.name}
                  </span>

                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    Production ready
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
