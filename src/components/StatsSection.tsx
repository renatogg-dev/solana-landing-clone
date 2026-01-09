"use client";

import { motion } from "framer-motion";
import { AnimatedCounter, parseStatValue } from "./AnimatedCounter";

const stats = [
  { 
    value: "11.5M+", 
    label: "ACTIVE ACCOUNTS",
    gradient: "linear-gradient(135deg, #14F195 0%, #00D1FF 100%)",
  },
  { 
    value: "21.9M", 
    label: "NFTs MINTED",
    gradient: "linear-gradient(135deg, #00D1FF 0%, #9945FF 100%)",
  },
  { 
    value: "$0.00025", 
    label: "AVERAGE COST PER TRANSACTION",
    gradient: "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="section-container relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h2 className="text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-[40px]">
              Join a community<br />of millions.
            </h2>
          </motion.div>

          {/* Right side - Stats */}
          <div className="flex flex-col gap-8 md:w-2/3 md:gap-6">
            {stats.map((stat, index) => {
              const { prefix, number, suffix, decimals } = parseStatValue(stat.value);
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-right"
                >
                  <div 
                    className="text-[48px] font-normal leading-none tracking-tight md:text-[64px] lg:text-[72px]"
                    style={{ 
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedCounter
                      value={number}
                      prefix={prefix}
                      suffix={suffix}
                      decimals={decimals}
                      duration={2.5}
                    />
                  </div>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
