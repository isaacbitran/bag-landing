import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── EDIT PROJECTS ────────────────────────────────────────────────────────────
// Move a project from CURRENT_PROJECTS to PAST_PROJECTS when it wraps up.
type Project = {
  title: string;
  tag: string;
  body: string;
};

const CURRENT_PROJECTS: Project[] = [
  {
    title: "Providence Transit Equity",
    tag: "Public Policy · RIPTA",
    body:
      "We're mapping where RIPTA bus service falls short of where it's needed most " +
      "in the Providence area. The team combines RIPTA's route and schedule data with " +
      "Census data on income and car ownership to find the neighborhoods that depend " +
      "on transit the most but get the least of it.",
  },
  {
    title: "NCAA Basketball Transfer Portal",
    tag: "Sports Analytics",
    body:
      "College basketball players move between programs through the transfer portal " +
      "more than ever. We're analyzing NCAA players' playstyles to see how they translate " +
      "into other teams' systems, with the goal of predicting which transfers are most " +
      "likely to succeed at their new school.",
  },
];

const PAST_PROJECTS: Project[] = [
  {
    title: "Brown Football Recruiting",
    tag: "Sports Analytics · Brown Football",
    body:
      "We built a website for the Brown football team that brings all of its past and " +
      "current recruits into one place and shows how each one is being recruited by " +
      "other Ivy League schools.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectList({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 pb-24">
      <h2 className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft mb-8">
        {label}
      </h2>

      <div className="rule" />

      {projects.map((project, i) => (
        <div key={project.title}>
          <div className="
            grid grid-cols-1 md:grid-cols-[64px_1fr_2fr]
            gap-y-4 md:gap-x-12
            py-10 md:py-12
            group
          ">
            <span className="
              font-serif font-normal text-brown-red/25 text-lg
              md:pt-0.5 self-start
              group-hover:text-brown-red/50 transition-colors duration-300
            ">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-3 self-start">
              <h3 className="font-serif font-normal text-ink text-xl md:text-2xl tracking-[-0.01em]">
                {project.title}
              </h3>
              <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
                {project.tag}
              </span>
            </div>

            <p className="font-sans font-light text-mid text-sm md:text-base leading-[1.8]">
              {project.body}
            </p>
          </div>

          <div className="rule" />
        </div>
      ))}
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Page header ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 pt-24 pb-24">

        {/* Eyebrow + rule */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-px bg-rule" />
          <span className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-soft">
            Our Work
          </span>
        </div>

        <h1 className="font-serif font-normal text-ink text-5xl md:text-6xl leading-[1.05] max-w-lg">
          Projects
        </h1>
        <p className="mt-6 max-w-xl font-sans font-light text-mid text-base leading-[1.75]">
          BAG teams take on real questions with real data, working with partners
          on campus and in the Providence community.
        </p>
      </section>

      <ProjectList label="Current Projects" projects={CURRENT_PROJECTS} />
      <ProjectList label="Past Projects" projects={PAST_PROJECTS} />

      <Footer />
    </main>
  );
}
