"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Github, Linkedin, Send } from "lucide-react";

const socialLinks = [
  { Icon: Facebook, href: "http://facebook.com/omairm0", label: "Facebook" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/omairm0",
    label: "LinkedIn",
  },
  { Icon: Send, href: "https://t.me/Omairmoh", label: "Telegram" },
  { Icon: Github, href: "https://github.com/OmairM0/", label: "GitHub" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 sm:px-14 md:px-20 lg:px-24 pt-13 pb-4 overflow-hidden">
      {/* ── Dot-grid background ── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ghost numeral (desktop only) ── */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(160px, 22vw, 320px)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px #1a1a1a",
          paddingRight: "4vw",
        }}
      >
        01
      </div>

      {/* ── Main grid ── */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center">
        {/* ── Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* ── Mobile / tablet portrait ── */}
          <motion.div variants={item} className="block lg:hidden mb-4">
            <div className="relative mx-auto w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
              {/* Gold ring */}
              <div className="absolute -inset-[3px] rounded-full border border-[#c9a84c]/50" />
              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t border-r border-[#c9a84c]" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b border-l border-[#c9a84c]" />
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src="/omair.jpg"
                  alt="Omair Mohammed"
                  fill
                  className="object-cover object-top grayscale"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Role tag */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 mb-3 sm:mb-0"
          >
            <div className="w-5 sm:w-6 h-px bg-[#c9a84c]" />
            <span
              className="text-[#c9a84c] text-[10px] sm:text-[11px] tracking-[0.45em] uppercase font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Front-End Developer
            </span>
            <div className="w-5 sm:w-6 h-px bg-[#c9a84c] block lg:hidden" />
          </motion.div>

          {/* First name — solid */}
          <motion.div variants={item} className="overflow-hidden w-full">
            <h1
              className="leading-[1.05] tracking-tight text-[#f5f0e8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.2rem, 12vw, 9.5rem)",
                fontWeight: 900,
              }}
            >
              Omair
            </h1>
          </motion.div>

          {/* Last name — ghost outline */}
          <motion.div variants={item} className="overflow-hidden w-full">
            <h1
              className="leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.2rem, 12vw, 9.5rem)",
                fontWeight: 900,
                color: "transparent",
                WebkitTextStroke: "1.5px #f5f0e8",
              }}
            >
              Mohammed
            </h1>
          </motion.div>

          {/* Ornament rule */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 my-7 sm:my-4"
          >
            <div className="w-10 sm:w-12 h-px bg-[#c9a84c]" />
            <div className="w-[5px] h-[5px] bg-[#c9a84c] rotate-45 shrink-0" />
            <div className="w-5 sm:w-6 h-px bg-[#1e1e1e]" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-[#888888] text-sm sm:text-base md:text-[1.05rem] leading-[1.8] max-w-[18rem] sm:max-w-sm font-light"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Passionate about crafting interactive and user-friendly web
            experiences.
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 sm:gap-5 mt-10 sm:mt-6"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rotate-45 border border-[#2a2a2a] transition-all duration-300 group-hover:border-[#c9a84c] group-hover:scale-110"
                />
                <Icon
                  size={15}
                  className="relative text-[#555555] transition-colors duration-300 group-hover:text-[#c9a84c]"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Desktop portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease }}
          className="hidden lg:block relative self-center"
        >
          {/* Outer accent frame */}
          <div className="absolute -inset-5 border border-[#161616]" />

          {/* Gold corner brackets */}
          <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#c9a84c] opacity-70 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#c9a84c] opacity-70 pointer-events-none" />

          {/* Clipped photo */}
          <div
            className="relative w-[280px] h-[360px] overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
            }}
          >
            <Image
              src="/omair.jpg"
              alt="Omair Mohammed"
              fill
              className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c9a84c]/15 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating badge */}
          <div
            className="absolute -left-6 bottom-10 bg-[#080808] border border-[#1e1e1e] px-4 py-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <p className="text-[#c9a84c] text-[9px] tracking-[0.45em] uppercase mb-0.5">
              Based in
            </p>
            <p className="text-[#f5f0e8] text-xs tracking-wide font-medium">
              Available for work
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Timestamp ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="absolute bottom-8 left-8 sm:left-14 md:left-20 lg:left-24 flex items-center gap-3"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <div className="h-6 w-px bg-[#1e1e1e]" />
        <span className="text-[#333333] text-[10px] tracking-[0.4em] uppercase">
          2026
        </span>
      </motion.div>
    </section>
  );
}
