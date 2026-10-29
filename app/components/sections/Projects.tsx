import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";
import LinkBadge from "../ui/LinkBadge";
import { projects } from "../../data/portfolio";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-b border-border">
      <div className="section-shell section-space">
        <SectionLabel>SELECTED WORK</SectionLabel>
        <div className="mt-4 mb-10 flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-archivo max-w-2xl text-3xl leading-tight uppercase md:text-[44px]">
            From understanding the problem to shaping the product.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A selection of design work, product discovery, and complex digital
            experiences.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featured.map((project) => {
            const caseStudy = project.links.find(
              (link) => link.type === "caseStudy",
            );
            return (
              <article key={project.slug} className="group min-w-0">
                {project.image && caseStudy && (
                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} case study`}
                    className="relative block aspect-[808/632] overflow-hidden rounded-sm border border-border bg-border/30"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1024px) calc((100vw - 112px) / 2), 584px"
                      className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                    />
                  </a>
                )}
                <p className="label mt-5">{project.category}</p>
                <h3 className="font-archivo mt-2 text-2xl leading-snug uppercase">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-xs">
                  <span className="text-muted">My role:</span> {project.role}
                </p>
                {caseStudy && (
                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium"
                  >
                    View Case Study{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                <details className="mt-5 border-t border-border pt-3">
                  <summary className="cursor-pointer text-xs text-muted hover:text-foreground">
                    Project context & links
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.contributionNote && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.contributionNote}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links
                      .filter((link) => link.type !== "caseStudy")
                      .map((link) => (
                        <LinkBadge
                          key={link.type}
                          href={link.url}
                          label={link.label}
                        />
                      ))}
                  </div>
                </details>
              </article>
            );
          })}
        </div>
        <details className="mt-14 border-t border-border pt-6">
          <summary className="cursor-pointer font-medium">
            Explore more work{" "}
            <span className="ml-2 text-sm text-muted">
              ({additional.length} projects)
            </span>
          </summary>
          <div className="mt-6 divide-y divide-border">
            {additional.map((project) => (
              <article key={project.slug} className="py-6 first:pt-0">
                <p className="label">
                  {project.category} · {project.role}
                </p>
                <h3 className="font-archivo mt-2 text-xl uppercase">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  {project.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <LinkBadge
                      key={link.type}
                      href={link.url}
                      label={link.label}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
