import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Quotes from "@/components/Quotes";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StatusBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Quotes />
      <Coffee />
      <Footer />
    </>
  );
}
