"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "nfts", label: "NFTs" },
  { id: "defi", label: "DeFi" },
  { id: "payments", label: "Payments" },
  { id: "gaming", label: "Gaming" },
  { id: "daos", label: "DAOs" },
];

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  imageGradient: string;
}> = {
  nfts: {
    title: "ANYBODIES",
    subtitle: "It's time to bridge the digital and physical.",
    description: "Anybodies helps established brands like Toys\"R\"Us connect real-life places and products with NFTs.",
    linkText: "Learn more about NFTs on Solana",
    imageGradient: "linear-gradient(135deg, #FF6B00 0%, #FF8C40 50%, #9945FF 100%)",
  },
  defi: {
    title: "JUPITER",
    subtitle: "The best swap aggregator on Solana.",
    description: "Jupiter aggregates liquidity across Solana's DeFi ecosystem to provide the best rates.",
    linkText: "Learn more about DeFi on Solana",
    imageGradient: "linear-gradient(135deg, #00D1FF 0%, #9945FF 100%)",
  },
  payments: {
    title: "SOLANA PAY",
    subtitle: "Instant payments, zero fees.",
    description: "Solana Pay enables instant, fee-free payments between consumers and merchants.",
    linkText: "Learn more about Payments on Solana",
    imageGradient: "linear-gradient(135deg, #14F195 0%, #00D1FF 100%)",
  },
  gaming: {
    title: "STAR ATLAS",
    subtitle: "Next-gen gaming metaverse.",
    description: "Star Atlas delivers AAA-quality graphics with true asset ownership on blockchain.",
    linkText: "Learn more about Gaming on Solana",
    imageGradient: "linear-gradient(135deg, #FF6B9D 0%, #9945FF 100%)",
  },
  daos: {
    title: "REALMS",
    subtitle: "Governance infrastructure for DAOs.",
    description: "Create proposals, vote on-chain, and manage treasuries with Realms on Solana.",
    linkText: "Learn more about DAOs on Solana",
    imageGradient: "linear-gradient(135deg, #F9C80E 0%, #FF6B9D 100%)",
  },
};

const partnerLogos = ["OPENSEA", "🐙", "M", "DAY"];

export function DeveloperResources() {
  const [activeTab, setActiveTab] = useState("nfts");
  const currentCase = caseStudies[activeTab];

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="section-container relative z-10">
        {/* Header with title and tabs */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-[40px]"
          >
            Build for growth.
          </motion.h2>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "border border-white/20 bg-transparent text-white hover:border-white/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Case Study Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]"
        >
          <div className="grid md:grid-cols-2">
            {/* Image side - NFT artwork style */}
            <div 
              className="relative flex h-[250px] items-center justify-center overflow-hidden md:h-[320px]"
              style={{ background: currentCase.imageGradient }}
            >
              {/* Placeholder for NFT image - cartoon fox style */}
              <div className="relative h-[180px] w-[180px] md:h-[240px] md:w-[240px]">
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-purple-600 shadow-2xl">
                  <span className="text-7xl md:text-8xl">🦊</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl font-bold text-white">A</span>
                <h3 className="text-lg font-bold text-white md:text-xl">
                  {currentCase.title}
                </h3>
              </div>
              <p className="text-base font-medium text-white md:text-lg">
                {currentCase.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {currentCase.description}
              </p>
              <a 
                href="#" 
                className="mt-5 inline-flex items-center gap-1 text-sm text-[#14F195] hover:underline"
              >
                {currentCase.linkText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Partner logos bar */}
          <div className="flex items-center justify-between border-t border-white/10 bg-[#0a0a0f] px-6 py-3 md:px-10">
            {partnerLogos.map((logo, i) => (
              <span 
                key={i} 
                className="text-sm font-medium text-slate-500"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
