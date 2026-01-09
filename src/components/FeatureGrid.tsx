"use client";

import { motion } from "framer-motion";
import { AnimatedCounter, parseStatValue } from "./AnimatedCounter";

const features = [
  {
    title: "Fast",
    description: "Don't keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
    stat: "3,969",
    statLabel: "TRANSACTIONS PER SECOND",
    color: "#14F195",
  },
  {
    title: "Decentralized",
    description: "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    stat: "1,675",
    statLabel: "VALIDATOR NODES",
    color: "#00D1FF",
  },
  {
    title: "Scalable",
    description: "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    stat: "163,077,581,394",
    statLabel: "TOTAL TRANSACTIONS",
    color: "#9945FF",
  },
  {
    title: "Energy Efficient",
    description: "Solana's proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    stat: "0%",
    statLabel: "NET CARBON IMPACT",
    color: "#F9C80E",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative bg-black py-20 md:py-28">
      <div className="section-container relative z-10">
        {/* Header section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-[40px]">
              Made for<br />mass adoption.
            </h2>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
              * LIVE DATA
            </p>
          </motion.div>
        </div>

        {/* 2x2 Grid of features with border separators */}
        <div className="grid grid-cols-1 gap-[1px] bg-white/10 md:grid-cols-2">
          {features.map((feature, index) => {
            const { prefix, number, suffix, decimals } = parseStatValue(feature.stat);
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-black p-6 md:p-8"
              >
                {/* Colored left border */}
                <div 
                  className="absolute left-0 top-0 h-full w-[3px]"
                  style={{ backgroundColor: feature.color }}
                />
                
                <div className="flex flex-col pl-4">
                  <h3 
                    className="text-lg font-semibold md:text-xl"
                    style={{ color: feature.color }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4">
                    <AnimatedCounter
                      value={number}
                      prefix={prefix}
                      suffix={suffix}
                      decimals={decimals}
                      duration={2}
                      className="text-xl font-normal md:text-2xl"
                      style={{ color: feature.color }}
                    />
                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-slate-500">
                      {feature.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
