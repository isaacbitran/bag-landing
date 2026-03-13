/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── TYPOGRAPHY ───────────────────────────────────────────────────────
      // Playfair Display → all headings / hero titles (serif, high contrast)
      // Inter → all body text, nav links, captions (clean sans-serif)
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Times New Roman", "serif"],
        sans:  ["Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },

      // ─── COLORS ───────────────────────────────────────────────────────────
      // Palette is intentionally minimal: near-black, white, light grays.
      // Brown University accents are used ONLY for thin underlines / hover states.
      colors: {
        // Neutrals — the primary palette
        ink:    "#111111", // near-black for main text
        "mid":  "#6B7280", // medium gray for secondary text
        "soft": "#9CA3AF", // light gray for captions
        rule:   "#E5E7EB", // thin horizontal rule color

        // Brown University official colors — accent use ONLY
        "seal-brown": "#4E3629", // used for active link underlines
        "brown-red":  "#ED1C24", // used for single-pixel hover accents
      },

      // ─── SPACING ──────────────────────────────────────────────────────────
      // Extra generous spacing tokens for the academic breathing-room feel.
      spacing: {
        "28": "7rem",
        "36": "9rem",
        "44": "11rem",
        "52": "13rem",
        "60": "15rem",
      },

      // ─── LETTER SPACING ───────────────────────────────────────────────────
      letterSpacing: {
        "title":  "0.04em",  // headings
        "label":  "0.12em",  // small-caps labels and nav
        "wide":   "0.18em",  // very spaced buttons and eyebrows
      },

      // ─── LINE HEIGHT ──────────────────────────────────────────────────────
      lineHeight: {
        "relaxed": "1.75",   // body text — generous for readability
        "editorial": "1.1",  // tight for large headings
      },
    },
  },
  plugins: [],
};
