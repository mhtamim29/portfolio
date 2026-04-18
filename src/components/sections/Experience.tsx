import { experience } from '@/data/portfolio'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16">
        <div className="flex flex-col gap-12">
          <SectionLabel>EXPERIENCE</SectionLabel>

          {/* Timeline */}
          <div className="flex gap-6">
            {/* Vertical line + dots */}
            <div className="relative flex flex-col items-center pt-2 max-[640px]:hidden">
              <div className="w-px bg-border flex-1" />
              {/* Overlay dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col">
                {experience.map((_, i) => (
                  <div
                    key={i}
                    className="w-[11px] h-[10px] rounded-full bg-foreground -ml-[5px]"
                    style={{
                      // Approximate spacing between items
                      marginTop: i === 0 ? '0px' : `${198 + (i - 1) * 8}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Experience items */}
            <div className="flex flex-col gap-16 flex-1">
              {experience.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {/* Company + role */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-archivo text-[20px] leading-[1.5] uppercase text-foreground">
                      {item.company}
                    </h3>
                    <p className="font-space-mono text-[12px] tracking-[0.96px] uppercase text-muted">
                      {item.role} &nbsp;·&nbsp; {item.period} &nbsp;·&nbsp; {item.location}
                    </p>
                  </div>
                  {/* Description */}
                  <p className="font-dm-sans text-[15px] leading-[1.75] text-foreground max-w-3xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
