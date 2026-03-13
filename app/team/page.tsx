import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── EDIT FOUNDER ─────────────────────────────────────────────────────────────
const FOUNDER = {
  name: "Jack Oliver",
  role: "Founder & President",
  bio: "Jack founded Brown Analytics Group with a vision to make data science accessible to every student at Brown. His leadership has shaped the group's mission, culture, and direction since its inception.",
};

// ─── EDIT EBOARD MEMBERS ──────────────────────────────────────────────────────
const EBOARD = [
  {
    name: "Member Name",
    role: "Vice President",
    bio: "Short description of this member's role and background within BAG.",
  },
  {
    name: "Member Name",
    role: "Director of Workshops",
    bio: "Short description of this member's role and background within BAG.",
  },
  {
    name: "Member Name",
    role: "Director of Consulting",
    bio: "Short description of this member's role and background within BAG.",
  },
  {
    name: "Member Name",
    role: "Director of Research",
    bio: "Short description of this member's role and background within BAG.",
  },
  {
    name: "Member Name",
    role: "Director of Outreach",
    bio: "Short description of this member's role and background within BAG.",
  },
  {
    name: "Member Name",
    role: "Director of Operations",
    bio: "Short description of this member's role and background within BAG.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

// Reusable placeholder for missing photos
function PhotoPlaceholder({ size = "large" }: { size?: "large" | "small" }) {
  const dim = size === "large" ? "w-48 h-48" : "w-36 h-36";
  return (
    <div
      className={`${dim} rounded-full bg-rule flex items-center justify-center flex-shrink-0`}
    >
      <svg
        className="text-soft"
        style={{ width: size === "large" ? 56 : 40, height: size === "large" ? 56 : 40 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Page header ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 pt-24 pb-16">

        {/* Eyebrow + rule */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-px bg-rule" />
          <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
            The People
          </span>
        </div>

        <h1 className="font-serif font-normal text-ink text-5xl md:text-6xl leading-[1.05] max-w-lg">
          Meet the Team
        </h1>
        <p className="mt-6 max-w-xl font-sans font-light text-mid text-base leading-[1.75]">
          BAG is built by students, for students. Every member brings a unique
          perspective — united by a shared belief that data literacy should be
          open to everyone.
        </p>
      </section>

      {/* ── Group photo ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 pb-24">
        <div className="w-full aspect-[16/7] bg-rule flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-soft">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs font-sans tracking-[0.12em] uppercase">Group Photo Coming Soon</span>
          </div>
        </div>
      </section>

      {/* ── Thin divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="h-px bg-rule" />
      </div>

      {/* ── Founder ───────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-24">

        {/* Section label */}
        <h2 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft mb-16">
          Founder
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
          <PhotoPlaceholder size="large" />

          <div className="flex flex-col gap-4 text-center sm:text-left">
            {/* Brown-red accent line */}
            <div className="hidden sm:block w-8 h-px bg-brown-red mb-2" />

            <h3 className="font-serif font-normal text-ink text-3xl">
              {FOUNDER.name}
            </h3>
            <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
              {FOUNDER.role}
            </span>
            <p className="font-sans font-light text-mid text-sm leading-[1.75] max-w-lg">
              {FOUNDER.bio}
            </p>
          </div>
        </div>
      </section>

      {/* ── Thin divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="h-px bg-rule" />
      </div>

      {/* ── E-board ───────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-24">

        {/* Section label */}
        <h2 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft mb-16">
          Executive Board
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {EBOARD.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-5">
              <PhotoPlaceholder size="small" />

              <div className="flex flex-col gap-2">
                {/* Thin red rule above name */}
                <div className="mx-auto w-6 h-px bg-brown-red" />
                <h3 className="font-serif font-normal text-ink text-xl">
                  {member.name}
                </h3>
                <span className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-soft">
                  {member.role}
                </span>
                <p className="font-sans font-light text-mid text-sm leading-[1.75]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
