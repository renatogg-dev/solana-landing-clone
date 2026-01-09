"use client";

import { motion } from "framer-motion";

const resources = [
  {
    id: "core-docs",
    badges: ["TOOL", "LIBRARY"],
    title: "Core Documentation",
    description:
      "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
  },
  {
    id: "cookbook",
    badges: ["TOOL", "LIBRARY"],
    title: "Solana Cookbook",
    description:
      "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
  },
  {
    id: "stack-exchange",
    badges: ["TOOL", "LIBRARY"],
    title: "Solana Stack Exchange",
    description:
      "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
  },
  {
    id: "playground",
    badges: ["TOOL", "LIBRARY"],
    title: "Solana Playground",
    description:
      "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
  },
  {
    id: "create-dapp",
    badges: ["TOOL", "LIBRARY"],
    title: "create-solana-dapp",
    description:
      "Get up and running fast with Solana dApps, generate a project template in seconds.",
  },
  {
    id: "anchor",
    badges: ["TOOL", "LIBRARY"],
    title: "Anchor Docs",
    description:
      "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
  },
  {
    id: "spl",
    badges: ["TOOL", "LIBRARY"],
    title: "Solana Program Library",
    description:
      "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
  },
  {
    id: "examples",
    badges: ["TOOL", "LIBRARY"],
    title: "Program Examples",
    description:
      "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
  },
];

export function DigDeeperSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-normal tracking-[-0.02em] text-white md:text-4xl">
            Dig deeper.
          </h2>
          <p className="mt-2 text-sm text-slate-400 md:text-base">
            Learn from resources across the greater Solana ecosystem.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group cursor-pointer rounded-xl border border-white/10 bg-[#0d0d12] p-5 transition hover:border-white/20 hover:bg-[#111118]"
            >
              {/* Badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                {resource.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-white">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-xs leading-relaxed text-slate-400">
                {resource.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 transition hover:text-white"
              >
                Learn more
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
