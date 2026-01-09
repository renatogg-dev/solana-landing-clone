"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#05060d] via-[#04030a] to-black pb-10 pt-6 md:pb-20 md:pt-12 lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:pb-32 lg:pt-20">
      {/* Background - Dark with subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-black">
        {/* Ambient glow behind rings - centered and subtle on mobile */}
        <div
          className="absolute left-1/2 top-[25%] h-[280px] w-[280px] -translate-x-1/2 opacity-40 md:left-[12%] md:top-[16%] md:h-[520px] md:w-[520px] md:translate-x-0 md:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 180, 200, 0.16) 0%, transparent 55%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute left-1/2 top-[15%] h-[260px] w-[260px] -translate-x-1/2 opacity-40 md:left-auto md:right-[8%] md:top-[6%] md:h-[460px] md:w-[460px] md:translate-x-0 md:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(153, 69, 255, 0.12) 0%, transparent 55%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Center darkening to keep copy legible */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7),_transparent_52%)] mix-blend-multiply md:bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.55),_transparent_58%)]" />

      {/* 3D Metallic Rings */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        {/* LEFT TEAL RING - Main large ring */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -left-[180px] top-[-12%] opacity-35 md:-left-[90px] md:top-[4%] md:opacity-70"
        >
          <svg
            viewBox="0 0 600 400"
            className="h-[220px] w-[340px] md:h-[400px] md:w-[560px]"
            style={{ filter: "drop-shadow(0 0 22px rgba(0, 245, 233, 0.35))" }}
          >
            <defs>
              {/* Teal ring gradient - metallic effect with highlights */}
              <linearGradient id="tealMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5E9" stopOpacity="1" />
                <stop offset="25%" stopColor="#00D4C8" stopOpacity="1" />
                <stop offset="50%" stopColor="#008B8B" stopOpacity="0.7" />
                <stop offset="75%" stopColor="#006666" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#004D4D" stopOpacity="0.4" />
              </linearGradient>
              
              {/* Inner highlight for 3D effect */}
              <linearGradient
                id="tealHighlight"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7FFFFD" stopOpacity="0.7" />
                <stop offset="30%" stopColor="#00E5CC" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#006B6B" stopOpacity="0.2" />
              </linearGradient>

              {/* Shadow gradient */}
              <linearGradient id="tealShadow" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#003D3D" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#001A1A" stopOpacity="0.15" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Shadow/back layer */}
            <ellipse
              cx="300"
              cy="200"
              rx="220"
              ry="110"
              fill="none"
              stroke="url(#tealShadow)"
              strokeWidth="34"
              transform="rotate(-30 300 200)"
              opacity="0.45"
              strokeLinecap="round"
            />
            
            {/* Main ring body */}
            <ellipse
              cx="300"
              cy="200"
              rx="218"
              ry="108"
              fill="none"
              stroke="url(#tealMetallic)"
              strokeWidth="30"
              transform="rotate(-30 300 200)"
              filter="url(#tealGlow)"
              strokeLinecap="round"
              opacity="0.9"
            />
            
            {/* Top highlight for 3D depth */}
            <ellipse
              cx="300"
              cy="200"
              rx="210"
              ry="100"
              fill="none"
              stroke="url(#tealHighlight)"
              strokeWidth="6"
              transform="rotate(-30 300 200)"
              opacity="0.65"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* RIGHT PURPLE RING - Same structure as teal ring */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute -right-[180px] top-[-12%] opacity-35 md:-right-[90px] md:top-[4%] md:opacity-70"
        >
          <svg
            viewBox="0 0 600 400"
            className="h-[220px] w-[340px] md:h-[400px] md:w-[560px]"
            style={{ filter: "drop-shadow(0 0 22px rgba(153, 69, 255, 0.35))" }}
          >
            <defs>
              {/* Purple ring gradient - metallic effect with highlights */}
              <linearGradient id="purpleMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E879F9" stopOpacity="1" />
                <stop offset="25%" stopColor="#C026D3" stopOpacity="1" />
                <stop offset="50%" stopColor="#9945FF" stopOpacity="0.7" />
                <stop offset="75%" stopColor="#7C3AED" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.4" />
              </linearGradient>
              
              {/* Inner highlight for 3D effect */}
              <linearGradient
                id="purpleHighlight"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F5D0FE" stopOpacity="0.7" />
                <stop offset="30%" stopColor="#D946EF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.2" />
              </linearGradient>

              {/* Shadow gradient */}
              <linearGradient id="purpleShadow" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B0764" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.15" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="purpleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Shadow/back layer */}
            <ellipse
              cx="300"
              cy="200"
              rx="220"
              ry="110"
              fill="none"
              stroke="url(#purpleShadow)"
              strokeWidth="34"
              transform="rotate(30 300 200)"
              opacity="0.45"
              strokeLinecap="round"
            />
            
            {/* Main ring body */}
            <ellipse
              cx="300"
              cy="200"
              rx="218"
              ry="108"
              fill="none"
              stroke="url(#purpleMetallic)"
              strokeWidth="30"
              transform="rotate(30 300 200)"
              filter="url(#purpleGlow)"
              strokeLinecap="round"
              opacity="0.9"
            />
            
            {/* Top highlight for 3D depth */}
            <ellipse
              cx="300"
              cy="200"
              rx="210"
              ry="100"
              fill="none"
              stroke="url(#purpleHighlight)"
              strokeWidth="6"
              transform="rotate(30 300 200)"
              opacity="0.65"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* SMALL ACCENT RING - Pink/Coral */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute right-[18%] top-[44%] hidden opacity-50 md:block"
        >
          <svg
            viewBox="0 0 200 140"
            className="h-[80px] w-[128px]"
            style={{ filter: "drop-shadow(0 0 12px rgba(255, 141, 161, 0.35))" }}
          >
            <defs>
              <linearGradient
                id="pinkMetallic"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF8DA1" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#E05577" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8B2252" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <ellipse
              cx="100"
              cy="70"
              rx="68"
              ry="38"
              fill="none"
              stroke="url(#pinkMetallic)"
              strokeWidth="14"
              transform="rotate(-15 100 70)"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 px-8 md:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Powerful for developers.
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fast for everyone.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-8 mt-6 max-w-[520px] text-sm leading-[1.7] text-slate-400 md:text-base"
          >
            Bring blockchain to the people. Solana supports experiences
            for power users, new consumers, and everyone in between.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-6"
          >
            <Link
              href="/build"
              className="w-full rounded-full bg-[#9945FF] px-8 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#8835ef] md:w-auto md:px-9 md:py-4"
            >
              Start Building
            </Link>
            <button className="w-full rounded-full border border-white/40 bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-white/70 hover:bg-white/5 md:w-auto md:px-9 md:py-4">
              Read Docs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
