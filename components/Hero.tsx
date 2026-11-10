// ─── HERO ─────────────────────────────────────────────────────────────────────
// Clean white hero — logo displayed in full natural color, no filter tricks.
// Title page: logo, headline, subheadline and the two buttons, over a faint watermark.
//
// TO EDIT:
//   · HEADLINE, SUBHEADLINE — main text
//   · Logo size            — change the "90px" in the primary logo style
// ──────────────────────────────────────────────────────────────────────────────

// ─── EDIT COPY ────────────────────────────────────────────────────────────────
const HEADLINE = "Democratizing Data at Brown";
const SUBHEADLINE =
  "Workshops, partner projects and research for Brown students who want to work with data.";

// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative bg-white min-h-[92vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >

      {/* ── Ghost watermark ──────────────────────────────────────────────────
          A greatly enlarged, very-low-opacity copy of the logo fills the
          background. Adds depth and brand weight without competing with content.
          aria-hidden keeps it invisible to screen readers.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="watermark-parallax absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          style={{
            height: "72vh",
            width: "auto",
            maxWidth: "none",
            opacity: 0.11,
            filter: "grayscale(0.5) sepia(0.6) saturate(1.8) hue-rotate(320deg)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center">

        {/* ── Primary logo ─────────────────────────────────────────────────
            White background → logo shows in its real black + red colors.
            No filter needed.
            ← Change "96px" to resize.
        ──────────────────────────────────────────────────────────────────── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Brown Analytics Club"
          style={{ height: "96px", width: "auto", mixBlendMode: "multiply" }}   // ← hero logo size; multiply hides the logo's white background
        />

        {/* ── Decorative rule ── */}
        {/* Thin lines either side of a brownred dot — a classic academic ornament */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-24 h-px bg-rule" />
          <div className="w-1.5 h-1.5 rounded-full bg-brown-red flex-shrink-0" />
          <div className="w-24 h-px bg-rule" />
        </div>

        {/* ── Eyebrow ── */}
        <span className="eyebrow mt-6">
          Brown University · Providence, RI  {/* ← edit this line */}
        </span>

        {/* ── Headline ── */}
        {/* Playfair Display at font-normal — the typeface's thick/thin contrast
            does all the visual work. Keep weight at normal, not bold. */}
        <h1 className="
          font-serif font-normal text-ink tracking-tight
          text-5xl sm:text-6xl md:text-7xl
          leading-[1.05] max-w-3xl
        ">
          {HEADLINE}
        </h1>

        {/* ── Subheadline ── */}
        <p className="mt-6 max-w-xl font-sans font-light text-mid text-base md:text-lg leading-[1.75]">
          {SUBHEADLINE}
        </p>

        {/* ── CTA Buttons ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">

          {/* Primary — filled on hover */}
          <a
            href="https://forms.gle/ngkxudvbKg9dYSgv9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[11px] font-sans font-medium tracking-[0.22em] uppercase
              px-9 py-3.5
              border border-ink text-ink
              hover:bg-ink hover:text-white
              transition-all duration-200
            "
          >
            Join the Club  {/* ← edit button label */}
          </a>

          {/* Secondary — text-only with animated underline */}
          <a
            href="/projects"
            className="
              text-[11px] font-sans font-medium tracking-[0.22em] uppercase
              text-soft hover:text-ink transition-colors duration-200
              flex items-center gap-2
            "
          >
            Explore Our Work
            <span className="text-brown-red">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
