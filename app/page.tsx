import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Why from "@/components/Why";
import MarqueeBand from "@/components/MarqueeBand";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Why />
      <MarqueeBand words={["Let’s collaborate", "Start a project"]} dark />
      <Contact />
      <MarqueeBand words={["Design", "Solutions"]} reverse />
      <Achievements />
      <Footer />
    </main>
  );
}
