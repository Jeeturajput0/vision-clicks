
"use client";

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

import { BrainCircuit, Cloud } from "lucide-react";
import type { ComponentType } from "react";

const techIcons: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  Laravel: SiLaravel,
  AWS: Cloud,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  TypeScript: SiTypescript,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  "AI & ML": BrainCircuit,
  Figma: SiFigma,
};

export default function Technologies() {
  return (
    <section
      aria-label="Technologies we master"
      className="py-16 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Built on a modern,"
          highlight="proven stack"
          description="Production-grade frameworks and clouds — chosen for speed, security and scale."
        />

        {/* Seamless infinite technology slider */}
        <div
          className="
            mt-10
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
          "
        >
          <div
            className="
              animate-marquee-slow
              flex
              w-max
              py-2
              [will-change:transform]
              hover:[animation-play-state:paused]
            "
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-4 pr-4"
              >
                {technologies.map((technology) => {
                  const Icon = techIcons[technology.name];

                  return (
                    <div
                      key={
                        copy === 0
                          ? technology.name
                          : `${technology.name}-dup`
                      }
                      className="
                        group
                        flex
                        w-[240px]
                        shrink-0
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[#2374B9]/15
                        bg-gradient-to-br
                        from-white
                        via-white
                        to-[#EAF4FF]
                        p-4
                        shadow-[0_10px_30px_-18px_rgb(16_52_108/0.35)]
                        transition-all
                        duration-300
                        hover:-translate-y-1.5
                        hover:border-[#2374B9]/40
                        hover:from-white
                        hover:via-[#F8FBFF]
                        hover:to-[#DCEEFF]
                        hover:shadow-[0_20px_40px_-18px_rgb(35_116_185/0.35)]
                        sm:w-[260px]
                        lg:w-[280px]
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
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
