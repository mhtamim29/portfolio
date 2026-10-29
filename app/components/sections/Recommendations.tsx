import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { recommendations } from "../../data/portfolio";

export default function Recommendations() {
  return (
    <section id="recommendations" className="border-b border-border">
      <div className="section-shell section-space">
        <SectionLabel>RECOMMENDATIONS</SectionLabel>
        <h2 className="font-archivo mt-4 text-3xl uppercase md:text-4xl">
          From people I&apos;ve worked with
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {recommendations.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col items-start border border-border p-7 md:p-9"
            >
              <blockquote className="mb-8 flex-1 text-lg leading-[1.8]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-medium">{item.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {item.context}
                </p>
              </figcaption>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs text-muted hover:text-foreground"
              >
                Read on LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
