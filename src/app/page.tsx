import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Credentials from '@/components/sections/Credentials'
import CallToAction from '@/components/sections/CallToAction'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
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
  )
}
