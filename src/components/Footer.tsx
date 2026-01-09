"use client";

import Image from "next/image";

const footerLinks = {
  "SOLANA": ["Grants", "Break Solana", "Media Kit", "Careers", "Disclaimer"],
  "GET CONNECTED": ["Ecosystem", "Blog", "Newsletter"],
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏" },
  { name: "Discord", icon: "💬" },
  { name: "GitHub", icon: "🐙" },
  { name: "YouTube", icon: "▶️" },
  { name: "Telegram", icon: "✈️" },
  { name: "Reddit", icon: "🔴" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12 md:py-16">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Logo and info column */}
          <div className="md:col-span-4">
            <Image
              src="/logo-wordmark-solana.svg"
              alt="Solana"
              width={100}
              height={20}
              className="h-5 w-auto"
            />
            <p className="mt-4 text-xs text-slate-500">
              Managed by Solana Foundation
            </p>
            
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-xs text-slate-500 transition hover:border-white/30 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mt-8 text-[10px] text-slate-600">
              © 2026 Solana Foundation. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:col-start-7">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-500 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Language selector */}
          <div className="md:col-span-2 md:col-start-11 md:text-right">
            <button className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-xs text-slate-400 transition hover:border-white/40">
              <span>🌐</span>
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
