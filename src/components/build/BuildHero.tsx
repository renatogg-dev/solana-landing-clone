"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function BuildHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pb-16 pt-8 md:pb-24 md:pt-12">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[10%] top-[10%] h-[400px] w-[400px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(153, 69, 255, 0.15) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute right-[20%] top-[20%] h-[300px] w-[300px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 100, 150, 0.12) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-col">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-5xl font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Developer
            </motion.h1>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-5xl font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Resources
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mb-8 mt-6 max-w-[400px] text-sm leading-[1.7] text-slate-400 md:text-base"
            >
              A manual for joining the Solana
              <br />
              ecosystem. By builders for builders.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button className="rounded-full bg-[#14F195] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#0fd584]">
                Build now
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-white/70 hover:bg-white/5">
                Stack Exchange
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Side - 3D Abstract Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="floating-container relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]">
              {/* Abstract 3D Toroid/Spiral Shape */}
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                style={{ filter: "drop-shadow(0 0 40px rgba(153, 69, 255, 0.3))" }}
              >
                <defs>
                  {/* Main gradient for the spiral */}
                  <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B9D">
                      <animate attributeName="stop-color" values="#FF6B9D;#9945FF;#00D1FF;#14F195;#FF6B9D" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="25%" stopColor="#C026D3">
                      <animate attributeName="stop-color" values="#C026D3;#00D1FF;#14F195;#FF6B9D;#C026D3" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#9945FF">
                      <animate attributeName="stop-color" values="#9945FF;#14F195;#FF6B9D;#C026D3;#9945FF" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="75%" stopColor="#00D1FF">
                      <animate attributeName="stop-color" values="#00D1FF;#FF6B9D;#C026D3;#9945FF;#00D1FF" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#14F195">
                      <animate attributeName="stop-color" values="#14F195;#C026D3;#9945FF;#00D1FF;#14F195" dur="8s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFD93D">
                      <animate attributeName="stop-color" values="#FFD93D;#FF6B9D;#C026D3;#6366F1;#FFD93D" dur="10s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="30%" stopColor="#FF6B9D">
                      <animate attributeName="stop-color" values="#FF6B9D;#C026D3;#6366F1;#FFD93D;#FF6B9D" dur="10s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="60%" stopColor="#C026D3">
                      <animate attributeName="stop-color" values="#C026D3;#6366F1;#FFD93D;#FF6B9D;#C026D3" dur="10s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#6366F1">
                      <animate attributeName="stop-color" values="#6366F1;#FFD93D;#FF6B9D;#C026D3;#6366F1" dur="10s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <linearGradient id="spiralGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#00D1FF">
                      <animate attributeName="stop-color" values="#00D1FF;#9945FF;#FF6B9D;#14F195;#00D1FF" dur="6s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#9945FF">
                      <animate attributeName="stop-color" values="#9945FF;#FF6B9D;#14F195;#00D1FF;#9945FF" dur="6s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#FF6B9D">
                      <animate attributeName="stop-color" values="#FF6B9D;#14F195;#00D1FF;#9945FF;#FF6B9D" dur="6s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer torus ring - rotating clockwise */}
                <ellipse
                  className="ring-1"
                  cx="200"
                  cy="200"
                  rx="150"
                  ry="80"
                  fill="none"
                  stroke="url(#spiralGradient1)"
                  strokeWidth="28"
                  filter="url(#glow)"
                  strokeLinecap="round"
                />
                
                {/* Middle torus ring - rotating counter-clockwise */}
                <ellipse
                  className="ring-2"
                  cx="200"
                  cy="200"
                  rx="120"
                  ry="65"
                  fill="none"
                  stroke="url(#spiralGradient2)"
                  strokeWidth="24"
                  filter="url(#glow)"
                  strokeLinecap="round"
                />

                {/* Inner torus ring - rotating clockwise faster */}
                <ellipse
                  className="ring-3"
                  cx="200"
                  cy="200"
                  rx="90"
                  ry="50"
                  fill="none"
                  stroke="url(#spiralGradient3)"
                  strokeWidth="20"
                  filter="url(#glow)"
                  strokeLinecap="round"
                />

                {/* Center accent - slow rotation */}
                <ellipse
                  className="ring-4"
                  cx="200"
                  cy="200"
                  rx="55"
                  ry="32"
                  fill="none"
                  stroke="url(#spiralGradient1)"
                  strokeWidth="14"
                  opacity="0.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
