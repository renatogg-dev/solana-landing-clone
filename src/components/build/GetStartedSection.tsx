"use client";

import { motion } from "framer-motion";

const courses = [
  {
    id: "buildspace",
    title: "Buildspace",
    gradient: "linear-gradient(135deg, #FF6B9D 0%, #C026D3 50%, #9945FF 100%)",
  },
  {
    id: "solana-bytes",
    title: "Solana Bytes",
    gradient: "linear-gradient(135deg, #00D1FF 0%, #9945FF 100%)",
  },
  {
    id: "scaffold-series",
    title: "Scaffold Series",
    gradient: "linear-gradient(135deg, #14F195 0%, #00D1FF 100%)",
  },
  {
    id: "freecodcamp",
    title: "Freecodcamp Solana Course",
    gradient: "linear-gradient(135deg, #6366F1 0%, #9945FF 100%)",
  },
  {
    id: "knox",
    title: "Solana Development by Knox",
    gradient: "linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)",
  },
  {
    id: "bootcamp",
    title: "Solana Bootcamp",
    gradient: "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
  },
];

export function GetStartedSection() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-normal tracking-[-0.02em] text-white md:text-4xl">
            Get started.
          </h2>
          <p className="mt-2 text-sm text-slate-400 md:text-base">
            Use these Solana Foundation and community courses to begin your journey into Solana development.
          </p>
        </motion.div>

        {/* Featured Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-8 overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #14F195 0%, #00D1FF 30%, #9945FF 70%, #FF6B9D 100%)",
          }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Featured
                </span>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Solana Development Course
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  Quickstart your Solana development starting from nothing to complex programs.
                </p>
              </div>
              {/* Play Button */}
              <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Thumbnail */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: course.gradient }}
              >
                {/* Abstract shapes inside */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <div className="h-16 w-16 rounded-lg bg-white/20 backdrop-blur-sm md:h-20 md:w-20" />
                  <div className="absolute right-[20%] top-[30%] h-8 w-8 rounded-full bg-white/15" />
                  <div className="absolute bottom-[25%] left-[25%] h-6 w-6 rounded bg-white/10" />
                </div>
                {/* Badge */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                    Course
                  </span>
                </div>
              </div>
              {/* Title */}
              <div className="bg-[#1a1a1f] p-3">
                <h4 className="text-xs font-medium text-white md:text-sm">
                  {course.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
