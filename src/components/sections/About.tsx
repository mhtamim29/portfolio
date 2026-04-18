import { stats } from '@/data/portfolio'
import SectionLabel from '@/components/ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16">
        <div className="flex flex-col gap-16">
          {/* Header + bio */}
          <div className="flex flex-col gap-4">
            <SectionLabel>ABOUT ME</SectionLabel>

            <div className="flex gap-12 max-[900px]:flex-col max-[900px]:gap-8">
              {/* Left heading */}
              <h2 className="font-archivo text-[36px] leading-[1.25] uppercase text-foreground w-[452px] shrink-0 max-[900px]:w-full max-[640px]:text-[28px]">
                EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY
              </h2>

              {/* Right bio */}
              <div className="flex flex-col gap-6 flex-1 font-dm-sans text-[16px] leading-[1.75] text-foreground max-[640px]:text-[15px]">
                <p>
                  Hello, I&apos;m Makibul Hossain Tamim, a Junior UI/UX Designer based in
                  Dhaka. I specialize in turning complex ideas into simple, intuitive, and
                  visually engaging digital experiences. With a background in Computer
                  Science and hands-on industry experience, I combine creativity with
                  technical understanding to deliver effective design solutions.
                </p>
                <p>
                  I work across the full design process — from user research and journey
                  mapping to high-fidelity Figma prototypes and developer handoff —
                  ensuring usability and consistency at every stage. I hold a B.Sc. in
                  Computer Science and Engineering from IUBAT (2025) and enjoy solving
                  complex problems through user-centered design.
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-start justify-around border-t border-border pt-12 max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <p className="font-archivo text-[52px] leading-none text-foreground">
                  {stat.value}
                </p>
                <p className="font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
