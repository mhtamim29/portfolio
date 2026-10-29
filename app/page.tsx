import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import CallToAction from "./components/sections/CallToAction";
import Contact from "./components/sections/Contact";
import Credentials from "./components/sections/Credentials";
import Certifications from "./components/sections/Certifications";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Studio from "./components/sections/Studio";
import Recommendations from "./components/sections/Recommendations";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="bg-background min-h-screen overflow-x-hidden focus:outline-none"
      >
        <Hero />
        <Projects />
        <About />
        <Studio />
        <Skills />
        <Experience />
        <Recommendations />
        <Credentials />
        <Certifications />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
