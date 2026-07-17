import Hero from "@/components/dom/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/dom/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import WhyMe from "@/components/sections/WhyMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full relative z-10 text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <WhyMe />
      <Contact />
    </main>
  );
}
