"use client";

import { motion } from "framer-motion";
import { AnimatedCounter, parseStatValue } from "./AnimatedCounter";

// Grid configuration matching Figma exactly - 5 columns layout
const gridItems = [
  { 
    type: "stat", 
    stat: "11,000", 
    label: "HACKER HOUSE PARTICIPANTS",
    color: "#14F195",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 100%)",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)",
  },
  { 
    type: "stat", 
    stat: "3,800",
    label: "SOLANA BREAKPOINT 2022",
    color: "#9945FF",
  },
  { 
    type: "logo", 
    icon: "◎",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #2e1a4a 0%, #1a0a2e 100%)",
  },
  { 
    type: "stat", 
    stat: "48,000", 
    label: "DEVELOPERS BUILDING DURING SOLANA HACKATHON",
    color: "#00D1FF",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #3d1a5c 0%, #1a0a2e 100%)",
  },
  { 
    type: "image", 
    gradient: "linear-gradient(135deg, #1a2a4e 0%, #0d1b2a 100%)",
  },
];

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="section-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-[40px]"
        >
          Join a thriving community.
        </motion.h2>

        {/* Image/Stats Grid - Bento style 5 columns */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
          {gridItems.map((item, index) => {
            if (item.type === "stat" && item.stat) {
              const { prefix, number, suffix, decimals } = parseStatValue(item.stat);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="relative flex min-h-[120px] flex-col justify-end overflow-hidden rounded-lg bg-[#111114] p-4 md:min-h-[140px]"
                >
                  <AnimatedCounter
                    value={number}
                    prefix={prefix}
                    suffix={suffix}
                    decimals={decimals}
                    duration={1.8}
                    className="text-xl font-semibold md:text-2xl"
                    style={{ color: item.color }}
                  />
                  <span className="mt-1 text-[7px] font-medium uppercase tracking-wider text-slate-500 md:text-[8px]">
                    {item.label}
                  </span>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`relative overflow-hidden rounded-lg ${
                  item.type === "logo"
                    ? "flex min-h-[120px] flex-col justify-end bg-[#111114] p-4 md:min-h-[140px]"
                    : "aspect-square"
                }`}
                style={{ 
                  background: item.type === "image" ? item.gradient : undefined 
                }}
              >
                {item.type === "logo" && (
                  <div className="flex h-full w-full items-center justify-center bg-[#111114]">
                    <span className="text-3xl text-[#9945FF] md:text-4xl">{item.icon}</span>
                  </div>
                )}
                {item.type === "image" && (
                  <div className="flex h-full w-full items-center justify-center opacity-60">
                    <span className="text-2xl">📷</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <h3 className="max-w-lg text-[26px] font-normal leading-[1.3] text-white md:text-[32px]">
            It&apos;s time to join the thousands of creators, artists, and developers using Solana.
          </h3>
          <button className="mt-8 rounded-full bg-[#9945FF] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(153,69,255,0.4)] transition hover:bg-[#8835ef]">
            Start Building
          </button>
        </motion.div>
      </div>
    </section>
  );
}
