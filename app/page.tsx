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

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at -10% -20%, rgba(124,106,247,0.07) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6">

        <div className="absolute left-6 top-0 bottom-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50" />
          <div className="absolute left-0 top-0 h-px w-3 bg-border/50" />
          <div className="absolute left-0 bottom-0 h-px w-3 bg-border/50" />
        </div>


        <div className="absolute right-6 top-0 bottom-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border/50" />
          <div className="absolute right-0 top-0 h-px w-3 bg-border/50" />
          <div className="absolute right-0 bottom-0 h-px w-3 bg-border/50" />
        </div>


        <div className="relative pl-6 pr-6">
          <Hero />
          <SocialLinks />
          <About />
          <Stack />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Footer />
        </div>
      </main>
    </>
  );
}
