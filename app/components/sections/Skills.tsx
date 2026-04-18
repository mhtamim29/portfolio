"use client";

import { useState } from "react";
import SectionLabel from "../../components/ui/SectionLabel";
import { skills } from "../../data/portfolio";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id='skills' className='border-b border-border'>
      <div className='max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16'>
        <div className='flex flex-col gap-12'>
          {/* Header */}
          <div className='flex flex-col gap-4'>
            <SectionLabel>SKILLS</SectionLabel>
            <h2 className='font-archivo text-[40px] leading-[1.25] uppercase text-foreground max-[640px]:text-[28px]'>
              TURNING IDEAS INTO PRECISE DIGITAL EXPERIENCES
            </h2>
          </div>

          {/* Accordion */}
          <div className='flex flex-col'>
            {skills.map((skill, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={skill.title} className='border-t border-border'>
                  <button
                    className='w-full flex items-center justify-between py-4 group'
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}>
                    <span className='font-archivo text-[24px] leading-[1.5] uppercase text-foreground max-[640px]:text-[18px]'>
                      {skill.title}
                    </span>

                    {/* Toggle circle */}
                    <span
                      className={`w-6 h-6 rounded-full border border-foreground flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? "bg-foreground" : "bg-transparent"
                      }`}>
                      {isOpen && (
                        <span className='w-2 h-2 bg-white rounded-full' />
                      )}
                    </span>
                  </button>

                  {/* Expanded tags */}
                  {isOpen && (
                    <div className='flex flex-wrap gap-2 pb-5'>
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className='font-dm-sans text-[15px] text-muted'>
                          {tag}
                          {skill.tags.indexOf(tag) < skill.tags.length - 1
                            ? " ·"
                            : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
