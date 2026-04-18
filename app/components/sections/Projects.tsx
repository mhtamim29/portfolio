"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import LinkBadge from "../../components/ui/LinkBadge";
import SectionLabel from "../../components/ui/SectionLabel";
import { projects } from "../../data/portfolio";

const INITIAL_COUNT = 3;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const isExpanded = visibleCount >= projects.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_COUNT); // collapse back to 3
    } else {
      setVisibleCount(projects.length); // show all
    }
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id='projects' className='border-b border-border'>
      <div className='max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16'>
        {/* Header */}
        <div className='flex flex-col gap-6 mb-12 max-w-[831px]'>
          <div className='flex flex-col gap-4'>
            <SectionLabel>PROJECTS</SectionLabel>
            <h2 className='font-archivo text-[48px] leading-[1.25] uppercase text-foreground max-[640px]:text-[32px]'>
              SELECTED WORKS
            </h2>
          </div>
          <p className='font-dm-sans text-[15px] leading-[1.75] text-muted'>
            Design needs to be functional and serve the client&apos;s goals.
          </p>
        </div>

        {/* Project list */}
        <div className='flex flex-col'>
          {visibleProjects.map((project) => (
            <div
              key={project.index}
              className='group flex gap-6 items-start px-4 py-8 border-t border-border rounded-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-foreground hover:border-foreground max-[640px]:flex-col'>
              {/* Index */}
              <span className='font-space-mono text-[14px] pt-1 shrink-0 w-5 text-muted transition-colors duration-300 group-hover:text-[#bfbfbf]'>
                {project.index}
              </span>

              {/* Content */}
              <div className='flex flex-col gap-3 flex-1'>
                <div className='flex flex-col gap-1'>
                  <h3 className='font-archivo text-[28px] leading-[1.5] uppercase transition-all duration-300 group-hover:text-white group-hover:translate-x-[2px] max-[640px]:text-[22px]'>
                    {project.title}
                  </h3>

                  <p className='font-dm-sans text-[15px] text-[#888580] transition-all duration-300 delay-75 group-hover:text-[#d8d5cf]'>
                    {project.subtitle}
                  </p>
                </div>

                <div className='flex flex-wrap gap-3'>
                  {project.links.map((link) => (
                    <LinkBadge
                      key={link.type}
                      href={link.url}
                      label={link.label}
                    />
                  ))}
                </div>

                <p className='font-dm-sans text-[14px] text-muted transition-all duration-300 delay-100 group-hover:text-[#d8d5cf]'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          <div className='border-b border-border' />
        </div>

        {/* Toggle CTA */}
        <div className='mt-10'>
          <button
            onClick={handleToggle}
            className='inline-flex items-center gap-3 border border-foreground text-foreground font-dm-sans font-medium text-[13px] uppercase tracking-wide px-4 py-2 rounded-full hover:bg-foreground hover:text-white transition-colors duration-200 cursor-pointer'>
            {isExpanded ? "SHOW LESS" : "VIEW ALL PROJECTS"}
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
