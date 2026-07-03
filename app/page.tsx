import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capability from "@/components/Capability";
import Work from "@/components/Work";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capability />
      <Work />
      <WhyChoose />
      <Testimonials />
      {/* Black interlude between testimonials and contact, as in the original */}
      <div aria-hidden className="h-[800px] bg-[#0d0d0d]" />
      <Contact />
      <Marquee />
      <Achievements />
      <Footer />
    </main>
  );
}
