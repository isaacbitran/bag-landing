// ─── HOME PAGE ────────────────────────────────────────────────────────────────
// This is the main (and only) page of the landing site.
// It imports each section as its own component from the /components folder.
// To reorder sections, just move the component tags below.
// ──────────────────────────────────────────────────────────────────────────────

import Navbar  from "@/components/Navbar";
import Hero    from "@/components/Hero";
import Mission from "@/components/Mission";
import Events  from "@/components/Events";
import Footer  from "@/components/Footer";

export default function Home() {
  return (
    // min-h-screen ensures the page fills the full viewport height
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Events />
      <Footer />
    </main>
  );
}
