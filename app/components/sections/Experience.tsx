"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { experience } from "../../data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || typeof IntersectionObserver === "undefined") return;

    const items = Array.from(timeline.children) as HTMLElement[];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let resizeFrame = 0;

    const refresh = () => {
      observer?.disconnect();

      if (reducedMotion.matches) {
        timeline.removeAttribute("data-animated");
        return;
      }

      const revealLine = window.innerHeight * 0.76;

      // Observe the fixed rows, so animated content never moves its own trigger.
      items.forEach((item) => {
        item.dataset.revealed = String(
          item.getBoundingClientRect().top <= revealLine,
        );
      });
      timeline.dataset.animated = "true";

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Keep entries above the viewport revealed; reverse below the line.
            const boundary = entry.rootBounds?.bottom ?? revealLine;
            (entry.target as HTMLElement).dataset.revealed = String(
              entry.boundingClientRect.top <= boundary,
            );
          });
        },
        { rootMargin: `0px 0px -${window.innerHeight * 0.24}px 0px` },
      );

      items.forEach((item) => observer?.observe(item));
    };

    const scheduleRefresh = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(refresh);
    };

    refresh();
    window.addEventListener("resize", scheduleRefresh, { passive: true });
    window.addEventListener("pageshow", scheduleRefresh);
    reducedMotion.addEventListener("change", refresh);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", scheduleRefresh);
      window.removeEventListener("pageshow", scheduleRefresh);
      reducedMotion.removeEventListener("change", refresh);
      timeline.removeAttribute("data-animated");
    };
  }, []);

  return (
    <section id="experience" className="border-b border-border">
      <div className="section-shell section-space">
        <SectionLabel>EXPERIENCE</SectionLabel>
        <h2 className="font-archivo mt-4 mb-10 text-3xl uppercase md:text-4xl">
          Design foundations. Product leadership.
        </h2>
        <ol
          ref={timelineRef}
          className={`${styles.timeline} ml-2 border-l border-border`}
        >
          {experience.map((item, index) => (
            <li
              key={item.company}
              className={`${styles.item} relative pb-10 pl-7 last:pb-0 md:pl-10`}
            >
              <span
                aria-hidden="true"
                className={`${styles.marker} absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full`}
              />
              <div className={styles.content}>
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
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
