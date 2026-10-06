import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Member = {
  name: string;
  role: string;
  email: string | null;
  photo: string | null;
  bio: string;
};

// ─── EDIT FOUNDERS ────────────────────────────────────────────────────────────
const FOUNDERS: Member[] = [
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
    photo: "/oscar_su.jpg",
    bio: "Oscar co-founded Brown Analytics Group alongside Jack, bringing a passion for data-driven thinking and a commitment to building an inclusive, student-led community at Brown.",
  },
];

// ─── EDIT EXECUTIVE BOARD ─────────────────────────────────────────────────────
// Set `photo` to a file in /public (e.g. "/lorenzo_vannoni.jpg") once headshots
// are in, and `email` to show a contact link.
const EBOARD: Member[] = [
  {
    name: "Lorenzo Vannoni",
    role: "VP of Projects",
    email: "lorenzo_vannoni@brown.edu",
    photo: null,
    bio: "Lorenzo oversees BAG's project portfolio, scoping new projects with partners and making sure every team has a clear question, the right data, and a plan to deliver.",
  },
  {
    name: "Marshall Treese",
    role: "Head of Finance",
    email: null,
    photo: "/marshall_treese.jpg",
    bio: "Marshall manages BAG's budget and funding, keeping the group's finances organized so members have the resources they need for projects and events.",
  },
  {
    name: "Alec Bonnard",
    role: "Head of Communications",
    email: null,
    photo: null,
    bio: "Alec runs BAG's outreach and communications, from member updates to how the group shares its work with partners and the wider Brown community.",
  },
  {
    name: "Aki Pham",
    role: "Project Lead",
    email: null,
    photo: null,
    bio: "Aki leads a BAG project team, guiding members through the analysis from first data pull to final recommendations for the partner.",
  },
  {
    name: "Thomas Bould",
    role: "Project Lead",
    email: null,
    photo: null,
    bio: "Thomas leads a BAG project team, coordinating the day-to-day work and helping members turn raw data into findings a partner can act on.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

// Reusable placeholder for missing photos
function PhotoPlaceholder() {
  return (
    <div className="w-36 h-36 rounded-full bg-rule flex items-center justify-center flex-shrink-0">
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

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
      {member.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.photo}
          alt={member.name}
          className="w-36 h-36 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <PhotoPlaceholder />
      )}

      <div className="flex flex-col gap-4 text-center sm:text-left">
        <div className="hidden sm:block w-8 h-px bg-brown-red mb-2" />
        <h3 className="font-serif font-normal text-ink text-2xl">
          {member.name}
        </h3>
        <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
          {member.role}
        </span>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-mid hover:text-ink transition-colors duration-200"
          >
            {member.email}
          </a>
        )}
        <p className="font-sans font-light text-mid text-sm leading-[1.75]">
          {member.bio}
        </p>
      </div>
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
            <MemberCard key={founder.name} member={founder} />
          ))}
        </div>
      </section>

      {/* ── Executive Board ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 pb-24">

        <h2 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft mb-16">
          Executive Board
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {EBOARD.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
