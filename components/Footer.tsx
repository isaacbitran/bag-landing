// ─── FOOTER ───────────────────────────────────────────────────────────────────
// Deep dark footer — strong contrast to the white content above.
// Minimal columns, refined social links, thin bottom bar.
//
// TO EDIT:
//   · FOOTER_LINKS  — update nav columns
//   · SOCIAL_LINKS  — add real URLs for Instagram, LinkedIn, etc.
//   · Tagline       — search "Every student" below
// ──────────────────────────────────────────────────────────────────────────────

import { ArrowUpRight } from "lucide-react";

// ─── EDIT FOOTER COLUMNS ─────────────────────────────────────────────────────
const FOOTER_LINKS = [
  {
    heading: "Explore",
    links: [
      { label: "About",    href: "#mission" },
      { label: "Projects", href: "#" },
      { label: "Team",     href: "#" },
      { label: "Blog",     href: "#" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Join BAG",   href: "#join" },
      { label: "Workshops",  href: "#events" },
      { label: "Consulting", href: "#" },
      { label: "Research",   href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Email",        href: "https://mail.google.com/mail/?view=cm&to=jack_oliver@brown.edu" },
      { label: "Office Hours", href: "#" },
      { label: "Partner",      href: "#" },
    ],
  },
];

// ─── EDIT SOCIAL LINKS ───────────────────────────────────────────────────────
// Label is shown as plain text — replace with icon if preferred.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/we_in_yo_tube/?hl=en" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/brown-analytics-group/posts/?feedView=all" },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /* Near-black footer using the ink color */
    <footer className="bg-ink text-white/50">

      {/* ── Thin brownred accent line at top ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-brown-red/60 to-transparent" />

      {/* ── Main footer body ── */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-16 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-7">
            {/*
              Footer logo — white silhouette on the dark background.
              Plain <img> so height/width CSS is fully respected.
              ← Change height: "36px" to resize the footer logo.
            */}
            <a href="#" className="group block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Brown Analytics Group"
                style={{
                  height: "36px",                      // ← footer logo height
                  width: "auto",
                  filter: "brightness(0) invert(1)",   // white silhouette on dark bg
                  opacity: 0.6,
                  transition: "opacity 0.2s",
                }}
                className="group-hover:opacity-100"
              />
            </a>

            {/* Tagline */}
            <p className="font-sans font-light text-white/35 text-sm leading-relaxed">
              {/* ← edit tagline here */}
              Every student deserves access to the tools that shape our world.
            </p>

            {/* Social links — text style */}
            <div className="flex flex-col gap-2 mt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="
                    inline-flex items-center gap-1.5 text-xs font-sans
                    tracking-[0.1em] uppercase text-white/30
                    hover:text-white transition-colors duration-200
                  "
                >
                  {s.label}
                  <ArrowUpRight size={11} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-5">
              {/* Column heading */}
              <h4 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-white/25">
                {col.heading}
              </h4>
              {/* Links */}
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-sans font-light text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="
          max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-6
          flex flex-col sm:flex-row items-center justify-between gap-3
          text-[11px] font-sans font-light text-white/20 tracking-[0.06em]
        ">
          <span>
            © {year} Brown Analytics Group — All rights reserved
          </span>
          <span className="flex items-center gap-1.5">
            Made with care at{" "}
            <a
              href="https://www.brown.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/50 transition-colors"
            >
              Brown University
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
