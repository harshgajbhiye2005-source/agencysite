import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
