import SectionLabel from "../../components/ui/SectionLabel";
import { education } from "../../data/portfolio";
import Certifications from "./Certifications";

export default function Credentials() {
  return (
    <section id="credentials" className="border-b border-border">
      <div className="max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16">
        <div className="flex flex-col">
          <SectionLabel>CREDENTIALS</SectionLabel>

          {/* ── Education ── */}
          <div className="mt-12 flex flex-col gap-6 border-b border-border pb-20 md:pb-32">
            <div className="flex flex-col gap-3">
              <h3 className="font-archivo text-[20px] leading-[1.5] uppercase text-foreground">
                {education.institution}
              </h3>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="font-space-mono text-[12px] tracking-[0.96px] uppercase text-muted">
                  {education.degree}
                </p>
                <p className="font-space-mono text-[12px] text-muted">
                  {education.period} &nbsp;·&nbsp; {education.cgpa}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-muted">
              <p className="font-dm-sans text-[14px] leading-[1.75]">
                <span className="font-semibold text-foreground font-dm-sans">
                  Thesis:{" "}
                </span>
                <span className="italic">{education.thesis}</span>
              </p>
              <div className="flex flex-wrap gap-x-2 font-dm-sans text-[14px] leading-[1.75]">
                <span className="font-semibold text-foreground">Projects:</span>
                {education.projects.map((proj, i) => (
                  <span key={proj}>
                    {proj}
                    {i < education.projects.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-20 md:pt-32">
            <Certifications />
          </div>
        </div>
      </div>
    </section>
  );
}
