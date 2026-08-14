"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { label: "ABOUT", href: "#about", ticks: [8, 12, 20, 24] },
  { label: "SKILLS", href: "#skills", ticks: [12, 16, 24, 28, 36] },
  { label: "PROJECTS", href: "#projects", ticks: [12, 20, 28] },
  { label: "EDUCATION", href: "#education", ticks: [8, 16, 24] },
  { label: "CONTACT", href: "#contact", ticks: [12, 24, 32, 40] },
];

const springConfig = { type: "spring", stiffness: 300, damping: 25 };

// --- Desktop Nav Components ---

function Tick({ width }: { width: number }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex justify-end py-[4px] pr-6 cursor-pointer"
    >
      <motion.span
        variants={{
          initial: { width: `${width}px`, backgroundColor: "#3f3f46" },
          hover: { width: "80px", backgroundColor: "#22d3ee" },
        }}
        transition={springConfig}
        className="h-px block"
      />
    </motion.div>
  );
}

function SectionRow({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className="flex items-center justify-end gap-3 pr-6 py-1 cursor-pointer"
    >
      <motion.span
        variants={{
          initial: { color: "#71717a" },
          hover: { color: "#22d3ee" },
        }}
        transition={{ duration: 0.2 }}
        className="text-xs font-bold tracking-[0.2em] uppercase"
      >
        {label}
      </motion.span>
      <motion.span
        variants={{
          initial: { width: "64px", backgroundColor: "#52525b" },
          hover: { width: "96px", backgroundColor: "#06b6d4" },
        }}
        transition={springConfig}
        className="h-px block"
      />
    </motion.a>
  );
}

// --- Mobile Navigation Overlay ---

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
        className="fixed top-5 right-5 z-[100] p-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-cyan-400 backdrop-blur-md transition-colors shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Full-screen Backdrop Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-start sm:justify-center overflow-y-auto pt-24 pb-12 px-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm my-auto">
              {SECTIONS.map((section, idx) => (
                <motion.a
                  key={section.label}
                  href={section.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                  className="w-full text-center py-3 border-b border-zinc-800/60 text-base font-mono tracking-[0.2em] text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  {section.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Navbar Component ---

export function HoverLineNav() {
  return (
    <>
      {/* Desktop Navigation (Visible on lg screens >= 1024px) */}
      <motion.nav
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="hidden lg:flex fixed right-0 top-0 h-screen w-64 flex-col justify-center z-50 pointer-events-auto"
      >
        <motion.div
          variants={{
            rest: { opacity: 0.2, x: 20 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          {SECTIONS.map((section, i) => (
            <div key={section.label} className={i > 0 ? "mt-5" : ""}>
              <SectionRow label={section.label} href={section.href} />
              <div className="mt-1">
                {section.ticks.map((width, idx) => (
                  <Tick key={idx} width={width} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute right-0 top-0 h-full w-px bg-cyan-500/20 -z-10" />
      </motion.nav>

      {/* Mobile Navigation (Visible on screens < 1024px) */}
      <MobileNav />
    </>
  );
}