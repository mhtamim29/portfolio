import SectionLabel from "../ui/SectionLabel";
import CapabilityIllustration from "./CapabilityIllustration";
import { capabilities } from "../../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="capabilities-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 md:py-20">
        <SectionLabel>CAPABILITIES</SectionLabel>
        <div className="mt-4 grid items-end gap-5 md:grid-cols-[1.35fr_1fr] md:gap-14">
          <h2
            id="capabilities-heading"
            className="font-archivo max-w-[560px] text-[30px] leading-[1.2] tracking-[-0.025em] uppercase md:text-[40px]"
          >
            {capabilities.heading}
          </h2>
          <p className="max-w-[400px] text-[15px] leading-[1.8] text-muted">
            {capabilities.description}
          </p>
        </div>

        <div className="mt-9 grid gap-10 md:grid-cols-3 md:gap-x-10 md:gap-y-0">
          {capabilities.areas.map((area, index) => (
            <article
              key={area.id}
              aria-labelledby={`capability-${area.id}`}
              className="relative flex min-w-0 flex-col md:row-span-5 md:grid md:grid-rows-subgrid"
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-5 hidden w-px bg-border md:block"
                />
              )}
              <div className="mb-3 flex items-center justify-between gap-3 font-space-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                <span>{area.label}</span>
                <span aria-hidden="true">/{area.number}</span>
              </div>
              <div className="h-[148px] w-full overflow-hidden rounded-sm bg-[#ebe9e3]">
                <CapabilityIllustration discipline={area.id} />
              </div>
              <h3
                id={`capability-${area.id}`}
                className="font-archivo mt-5 text-[22px] leading-[1.3] uppercase"
              >
                {area.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                {area.description}
              </p>
              <ul
                aria-label={`${area.title} focus areas`}
                className="mt-5 flex flex-wrap content-start gap-x-4 gap-y-2 border-t border-border pt-4"
              >
                {area.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[11px] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="h-[4px] w-[4px] shrink-0 rounded-full bg-[#7a846c]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
