import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { studio } from "../../data/portfolio";

export default function Studio() {
  return (
    <section
      id="studio"
      className="border-b border-border bg-foreground text-background"
    >
      <div className="section-shell section-space">
        <SectionLabel>THE STUDIO</SectionLabel>
        <div className="mt-6 grid gap-10 min-[900px]:grid-cols-2">
          <div>
            <p className="mb-5 text-xs tracking-wider text-background/65 uppercase">
              Product strategy · Design · Engineering
            </p>
            <h2 className="font-archivo text-5xl tracking-tight uppercase md:text-7xl">
              {studio.name}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-[1.8] text-background/80">
            <p>{studio.description}</p>
            <p>{studio.responsibility}</p>
            <a
              href={studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-background/40 pb-1 text-sm text-background transition-opacity hover:opacity-70"
            >
              Explore Zentura <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
