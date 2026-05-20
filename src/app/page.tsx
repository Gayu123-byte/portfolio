import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Process from "@/src/components/Process";
import TechStack from "@/src/components/TechStack";
import Achievements from "@/src/components/Achievements";
import Education from "@/src/components/Education";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import CommandPalette from "@/src/components/CommandPalette";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Process />
      <TechStack />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      <CommandPalette />
    </main>
  );
}
