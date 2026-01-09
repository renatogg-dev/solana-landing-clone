"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Developer Update Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(20, 241, 149, 0.5) 0%, rgba(153, 69, 255, 0.5) 50%, rgba(0, 209, 255, 0.5) 100%)",
            }}
          >
            <div className="relative h-full rounded-2xl bg-[#0a0a0f] p-6 md:p-8">
              <h3 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                Solana Developer Update
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.
              </p>

              {/* Email Input */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-white/30"
                />
                <button className="rounded-full bg-[#14F195] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#0fd584]">
                  Sign up
                </button>
              </div>
            </div>
          </motion.div>

          {/* Even More Resources Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(153, 69, 255, 0.5) 0%, rgba(255, 107, 157, 0.5) 50%, rgba(255, 217, 61, 0.5) 100%)",
            }}
          >
            <div className="relative h-full rounded-2xl bg-[#0a0a0f] p-6 md:p-8">
              <h3 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                Even more resources
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-full bg-[#FF0000]/90 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF0000]">
                  YouTube
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </button>
                <button className="flex items-center gap-2 rounded-full bg-[#9945FF] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#8835ef]">
                  Podcast
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 16c-2.67 0-5.08-1.04-6.89-2.73C6.19 14.96 8.88 13 12 13s5.81 1.96 6.89 4.27C17.08 18.96 14.67 20 12 20z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
