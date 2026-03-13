// ─── EVENTS ───────────────────────────────────────────────────────────────────
// Clean schedule list — date left, title & meta center, arrow right.
// No card backgrounds. Thin rules between entries. Pure editorial.
//
// TO EDIT:
//   · EVENTS array — add, remove, or edit events
// ──────────────────────────────────────────────────────────────────────────────

import { ArrowUpRight } from "lucide-react";

// ─── EDIT EVENTS ─────────────────────────────────────────────────────────────
const EVENTS = [
  {
    month:    "Mar",
    day:      "18",
    title:    "Intro to SQL & Databases",
    desc:     "No SQL knowledge needed. Bring your laptop.",
    location: "CIT 227",
    time:     "6:00 – 8:00 PM",
    tag:      "Beginner",
  },
  {
    month:    "Mar",
    day:      "25",
    title:    "Data Visualization with Python",
    desc:     "Matplotlib, Seaborn, and Plotly from the ground up.",
    location: "Metcalf 103",
    time:     "5:30 – 7:30 PM",
    tag:      "Python",
  },
  {
    month:    "Apr",
    day:      "03",
    title:    "Machine Learning Fundamentals",
    desc:     "Regression, classification, and model evaluation in scikit-learn.",
    location: "Barus & Holley 168",
    time:     "6:00 – 8:30 PM",
    tag:      "Intermediate",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Events() {
  return (
    /*
      Intentionally no background-color change — continues the white canvas
      from Mission. A wider top rule visually separates the sections.
    */
    <section id="events" className="bg-white section-padding pt-0">
      <div className="max-w-5xl mx-auto">

        {/* ── Small logo seal ── */}
        <div className="flex justify-end mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Brown Analytics Group"
            style={{ height: "28px", width: "auto", opacity: 0.25 }}
          />
        </div>

        {/* ── Section header ── */}
        <div className="mb-16">
          <span className="eyebrow">Events</span>
          <h2 className="font-serif font-normal text-ink text-3xl md:text-4xl leading-[1.15] tracking-[-0.01em]">
            Upcoming Workshops
          </h2>
        </div>

        {/* ── Event list ── */}
        <div className="rule" />

        {EVENTS.map((event, i) => (
          <div
            key={i}
            className="
              group
              grid grid-cols-1 md:grid-cols-[80px_1fr_auto]
              gap-y-3 md:gap-x-12 items-start
              py-8 md:py-10
              cursor-pointer
            "
          >
            {/* Date */}
            <div className="flex md:flex-col gap-2 md:gap-0">
              <span className="font-sans font-light text-soft text-xs tracking-[0.1em] uppercase">
                {event.month}
              </span>
              <span className="font-serif font-normal text-ink text-2xl leading-none">
                {event.day}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="
                font-serif font-normal text-ink
                text-xl md:text-2xl leading-snug tracking-[-0.01em]
                group-hover:text-seal-brown transition-colors duration-200
              ">
                {event.title}
              </h3>
              <p className="font-sans font-light text-mid text-sm leading-relaxed">
                {event.desc}
              </p>
              {/* Meta row */}
              <div className="flex items-center gap-4 mt-1 text-[11px] font-sans text-soft tracking-[0.08em]">
                <span>{event.location}</span>
                <span className="w-1 h-1 rounded-full bg-rule inline-block" />
                <span>{event.time}</span>
                <span className="w-1 h-1 rounded-full bg-rule inline-block" />
                {/* Tag */}
                <span className="border border-rule px-2 py-0.5 text-[10px] tracking-[0.1em] uppercase">
                  {event.tag}
                </span>
              </div>
            </div>

            {/* Arrow — appears on hover */}
            <div className="
              hidden md:flex items-start pt-1
              opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0
              transition-all duration-200 text-seal-brown
            ">
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
          </div>
        ))}

        {/* Bottom rule */}
        <div className="rule" />

        {/* View all — right-aligned */}
        <div className="mt-8 flex justify-end">
          <a
            href="#"
            className="
              text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-mid
              hover:text-ink transition-colors duration-200
              flex items-center gap-2
            "
          >
            All events <ArrowUpRight size={13} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
