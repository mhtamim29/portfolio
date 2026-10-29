import SectionLabel from "../ui/SectionLabel";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="section-shell section-space">
        <SectionLabel>EXPERIENCE</SectionLabel>
        <h2 className="font-archivo mt-4 mb-10 text-3xl uppercase md:text-4xl">
          Design foundations. Product leadership.
        </h2>
        <ol className="ml-2 border-l border-border">
          {experience.map((item, index) => (
            <li
              key={item.company}
              className="relative pb-10 pl-7 last:pb-0 md:pl-10"
            >
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full ${index === 0 ? "bg-foreground" : "bg-border"}`}
              />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-archivo text-xl uppercase">
                  {item.company}
                </h3>
                {index === 0 && (
                  <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wide">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium">{item.role}</p>
              <p className="label mt-2 leading-relaxed">
                {item.period} · {item.location}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-[1.8] text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
