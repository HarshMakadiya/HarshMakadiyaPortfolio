import { Navbar } from "@/components/Navbar";
import { Hero, SocialLinks } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at -10% -20%, rgba(124,106,247,0.07) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6">
        <Hero />
        <SocialLinks />
        <About />
        <Stack />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Footer />
      </main>
    </>
  );
}
