"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-7 sm:px-14 md:px-20 lg:px-24"
    >
      {/* Logotype */}
      <span
        className="text-[#c9a84c] text-lg font-black tracking-[0.25em] select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        OMAIR
      </span>

      {/* Rule */}
      <div className="flex-1 mx-8 h-px bg-[#1e1e1e]" />

      {/* Label */}
      <span
        className="text-[#444444] text-[10px] tracking-[0.45em] uppercase"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Portfolio
      </span>
    </motion.nav>
  );
}
