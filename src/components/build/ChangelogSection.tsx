"use client";

import { motion } from "framer-motion";

export function ChangelogSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="section-container">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-normal tracking-[-0.02em] text-white md:text-4xl">
              Solana Changelog
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-400 md:text-base">
              Some more Solana changes from Jacob & Joe.
              <br />
              Subscribe to the newsletter:{" "}
              <a
                href="https://solana.us17.list-manage.com/s..."
                className="text-slate-300 underline hover:text-white"
              >
                https://solana.us17.list-manage.com/s...
              </a>
              <br />
              Proposal - Priced Compute Units: ...
            </p>

            <button className="rounded-full border border-white/30 bg-transparent px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition hover:border-white/50 hover:bg-white/5">
              Latest Episode
            </button>
          </motion.div>

          {/* Right Side - Changelog 3D Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[220px] w-[280px] md:h-[280px] md:w-[360px]">
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(153, 69, 255, 0.3) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* 3D Changelog Card */}
              <div
                className="relative h-full w-full overflow-hidden rounded-2xl"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(20, 241, 149, 0.15) 0%, rgba(153, 69, 255, 0.2) 50%, rgba(255, 107, 157, 0.15) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transform: "perspective(800px) rotateY(-8deg) rotateX(5deg)",
                }}
              >
                {/* Content inside card */}
                <div className="flex h-full flex-col items-center justify-center p-6">
                  {/* Solana Logo */}
                  <div className="mb-2 flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 16.5L8 20.5L20 8.5"
                        stroke="#14F195"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 8.5L8 4.5L20 16.5"
                        stroke="#9945FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Solana
                    </span>
                  </div>

                  {/* Changelog text with gradient */}
                  <h3
                    className="text-3xl font-bold md:text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #14F195 0%, #9945FF 50%, #FF6B9D 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Changelog.
                  </h3>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#14F195]/10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[#9945FF]/10 blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
