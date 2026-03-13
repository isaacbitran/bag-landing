// ─── MISSION ──────────────────────────────────────────────────────────────────
// Academic editorial layout: numbered items separated by thin rules.
// No card backgrounds, no shadows — pure typography on white.
//
// TO EDIT:
//   · INTRO          — opening paragraph
//   · PILLARS array  — the three numbered items
// ──────────────────────────────────────────────────────────────────────────────

// ─── EDIT CONTENT ────────────────────────────────────────────────────────────
const INTRO =
  "The Brown Analytics Group was founded on a simple premise: every student, " +
  "regardless of background, should have access to the tools and knowledge that " +
  "define modern decision-making.";

const PILLARS = [
  {
    num:   "01",
    title: "Education",
    body:
      "Weekly workshops covering SQL, Python, machine learning, and data " +
      "visualization — designed for beginners, challenging enough for the curious. " +
      "Open to the entire Brown and RISD community.",
  },
  {
    num:   "02",
    title: "Consulting",
    body:
      "Student teams partner with startups, nonprofits, and University departments " +
      "to extract actionable insights from data. Real engagements, real deliverables, " +
      "and a portfolio that speaks at interviews.",
  },
  {
    num:   "03",
    title: "Research",
    body:
      "Original quantitative research in fields from public policy to sports analytics, " +
      "conducted under faculty advisors. We write, we publish, we present.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Mission() {
  return (
    <section id="mission" className="bg-white section-padding">
      <div className="max-w-5xl mx-auto">

        {/* ── Small logo seal above the section ── */}
        {/* Positioned on the far right — acts like a publisher's seal or colophon */}
        <div className="flex justify-end mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Brown Analytics Group"
            style={{ height: "28px", width: "auto", opacity: 0.25 }}
          />
        </div>

        {/* ── Section header ── */}
        <div className="max-w-2xl mb-20">
          <span className="eyebrow">What We Do</span>
          <h2 className="font-serif font-normal text-ink text-3xl md:text-4xl leading-[1.15] tracking-[-0.01em]">
            Three pillars.<br />One purpose.
          </h2>
          {/* Opening paragraph — slightly wider for a magazine intro feel */}
          <p className="mt-7 font-sans font-light text-mid text-base leading-[1.75]">
            {INTRO}
          </p>
        </div>

        {/* ── Numbered pillars ── */}
        {/* Top rule above first item */}
        <div className="rule" />

        {PILLARS.map((pillar) => (
          <div key={pillar.num}>
            {/*
              Desktop: 3-column grid  [number] [title] [body]
              Mobile:  stacked
            */}
            <div className="
              grid grid-cols-1 md:grid-cols-[64px_1fr_2fr]
              gap-y-4 md:gap-x-12
              py-10 md:py-12
              group
            ">
              {/* Number */}
              <span className="
                font-serif font-normal text-brown-red/25 text-lg
                md:pt-0.5 self-start
                group-hover:text-brown-red/50 transition-colors duration-300
              ">
                {pillar.num}
              </span>

              {/* Title */}
              <h3 className="
                font-serif font-normal text-ink text-xl md:text-2xl
                tracking-[-0.01em] self-start
              ">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="font-sans font-light text-mid text-sm md:text-base leading-[1.8]">
                {pillar.body}
              </p>
            </div>

            {/* Thin rule between items */}
            <div className="rule" />
          </div>
        ))}
      </div>
    </section>
  );
}
