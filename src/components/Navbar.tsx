"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Learn", hasDropdown: true, href: "#" },
  { label: "Build", hasDropdown: true, href: "/build" },
  { label: "Network", hasDropdown: true, href: "#" },
  { label: "Community", hasDropdown: true, href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#9945FF] py-2 text-center">
        <p className="text-xs font-medium tracking-wide text-white">
          BREAKPOINT 2026 - NEW CITY. NEW VIBES - GET EARLY ACCESS →
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-wordmark-solana.svg"
                alt="SOLANA"
                width={120}
                height={20}
                className="h-5 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "#" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex items-center gap-1 text-sm transition hover:text-white ${
                      isActive ? "text-white font-medium" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 md:hidden"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <div className="section-container py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "#" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex w-full items-center justify-between py-3 text-left text-sm transition hover:text-white ${
                      isActive ? "text-white font-medium" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
