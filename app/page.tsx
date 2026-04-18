import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import CallToAction from "./components/sections/CallToAction";
import Contact from "./components/sections/Contact";
import Credentials from "./components/sections/Credentials";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <main className='bg-background min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Credentials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
