// ─── NAVBAR ───────────────────────────────────────────────────────────────────
// Always-white sticky navbar — clean, airy, no transparency tricks.
// Logo is always visible. Links change color on hover.
//
// TO EDIT:
//   · NAV_LINKS  — change text or scroll targets
//   · JOIN_LINK  — update the "Join" label & href
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

// ─── EDIT NAV LINKS ───────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About",    href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "Team",     href: "#team" },
];

const JOIN_LINK = { label: "Join", href: "#join" };
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rule">
      <div className="max-w-6xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        {/*
          Plain <img> so height/width CSS is fully respected.
          The logo is landscape (1406×768). Setting height in px with
          width: auto preserves the correct aspect ratio.
          ← Change "36px" below to resize the navbar logo.
        */}
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Brown Analytics Group"
            style={{ height: "36px", width: "auto" }}
          />
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                relative text-[11px] font-sans font-medium tracking-[0.16em] uppercase
                text-mid hover:text-ink transition-colors duration-200 group/link
              "
            >
              {link.label}
              {/* Thin seal-brown underline slides in on hover */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-seal-brown group-hover/link:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Join — ghost border button */}
          <a
            href={JOIN_LINK.href}
            className="
              text-[11px] font-sans font-medium tracking-[0.16em] uppercase
              px-5 py-2 border border-ink text-ink
              hover:bg-ink hover:text-white transition-all duration-200
            "
          >
            {JOIN_LINK.label}
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-ink hover:text-mid transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-rule px-8 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-mid hover:text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={JOIN_LINK.href}
            className="self-start text-[11px] font-medium tracking-[0.18em] uppercase px-5 py-2 border border-ink text-ink hover:bg-ink hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {JOIN_LINK.label}
          </a>
        </div>
      )}
    </nav>
  );
}
