"use client";

import { motion } from "framer-motion";

const docs = [
  {
    id: "solana",
    title: "Solana Docs",
    description:
      "Learn how Solana works and get a high-level understanding of Solana's architecture.",
  },
  {
    id: "metaplex",
    title: "Metaplex Docs",
    description:
      "Learn what you build with Metaplex, make the process of creating and launching NFTs easier.",
  },
];

export function GoToSourceSection() {
  return (
    <section className="relative bg-[#0f0f13] py-16 md:py-24">
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
            Go to the source.
          </h2>
          <p className="mt-2 text-sm text-slate-400 md:text-base">
            Read the documentation for Solana and popular tools.
          </p>
        </motion.div>

        {/* Docs Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {docs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col justify-between"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {doc.title}
                </h3>
                <button className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition hover:border-white/40 hover:bg-white/5">
                  View all
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
                </button>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                {doc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
