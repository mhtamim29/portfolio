import SectionLabel from "../ui/SectionLabel";
import { about, highlights } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="section-shell section-space">
        <SectionLabel>ABOUT ME</SectionLabel>
        <div className="mt-6 grid gap-10 min-[900px]:grid-cols-2">
          <h2 className="font-archivo max-w-lg text-3xl leading-tight uppercase md:text-4xl">
            Connecting business goals, user needs, and technical decisions.
          </h2>
          <div className="space-y-5 text-base leading-[1.8]">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <dl className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="label">{item.label}</dt>
              <dd className="font-archivo mt-3 text-xl md:text-2xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
