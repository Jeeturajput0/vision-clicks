"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

// Clean white floating pill navbar with ink active state
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  // Each mobile <Link> already calls setOpen(false) onClick,
  // so no pathname effect is needed (avoids set-state-in-effect).

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar — hides on scroll */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        )}
      >
       
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          aria-label="Primary navigation"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "glass mt-3 flex items-center justify-between gap-3 rounded-2xl border py-2.5 pr-2.5 pl-4 transition-all duration-300 sm:pl-5",
            scrolled
              ? "border-slate-900/10 shadow-[0_18px_44px_-20px_rgb(16_52_108/0.3)]"
              : "border-slate-900/10 shadow-[0_14px_36px_-22px_rgb(16_52_108/0.25)]"
          )}
        >
        <Link
  href="/"
  aria-label="Vision Clicks home"
  className="flex shrink-0 items-center"
>
  <Image
    src="/vision-clicks-logo.png"
    alt="Vision Clicks"
    width={180}
    height={52}
    className="h-10 w-auto object-contain sm:h-11"
    priority
  />
</Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-[13.5px] font-semibold transition",
                      active
                        ? "bg-[#10346c] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-900/[0.06] hover:text-[#10346c]"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/services"
              className="rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-slate-600 transition hover:text-[#10346c]"
            >
              Our work
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-[#10346c] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-[0_12px_28px_-12px_rgb(16_52_108/0.5)] transition hover:bg-volt-400 hover:text-[#10346c]"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-900/10 bg-white text-slate-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 overflow-hidden rounded-2xl border border-slate-900/10 shadow-xl lg:hidden"
            >
              <ul className="p-3">
                {links.map((l, i) => {
                  const active = isActive(l.href);
                  return (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition",
                          active
                            ? "bg-[#10346c] text-white"
                            : "text-slate-700 hover:bg-slate-900/[0.05]"
                        )}
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.li>
                  );
                })}
                <li className="p-1 pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#10346c] px-4 py-3 text-sm font-bold text-white"
                  >
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
