import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── EDIT FOUNDERS ────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    name: "Jack Oliver",
    role: "Founder & President",
    email: "jack_oliver@brown.edu",
    photo: "/jack_oliver.jpg",
    bio: "Jack founded Brown Analytics Group with a vision to make data science accessible to every student at Brown. His leadership has shaped the group's mission, culture, and direction since its inception.",
  },
  {
    name: "Oscar Su",
    role: "Co-Founder",
    email: "william_o_su@brown.edu",
    photo: null,
    bio: "Oscar co-founded Brown Analytics Group alongside Jack, bringing a passion for data-driven thinking and a commitment to building an inclusive, student-led community at Brown.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

// Reusable placeholder for missing photos
function PhotoPlaceholder() {
  return (
    <div className="w-48 h-48 rounded-full bg-rule flex items-center justify-center flex-shrink-0">
      <svg
        className="text-soft"
        style={{ width: 56, height: 56 }}
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

      {/* ── Founders ──────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-24">

        {/* Section label */}
        <h2 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft mb-16">
          Founders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {founder.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="w-36 h-36 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <PhotoPlaceholder />
              )}

              <div className="flex flex-col gap-4 text-center sm:text-left">
                <div className="hidden sm:block w-8 h-px bg-brown-red mb-2" />
                <h3 className="font-serif font-normal text-ink text-2xl">
                  {founder.name}
                </h3>
                <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
                  {founder.role}
                </span>
                <a
                  href={`mailto:${founder.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-mid hover:text-ink transition-colors duration-200"
                >
                  {founder.email}
                </a>
                <p className="font-sans font-light text-mid text-sm leading-[1.75]">
                  {founder.bio}
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
