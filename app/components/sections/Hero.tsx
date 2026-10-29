import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SocialIcons from "../ui/SocialIcons";
import { siteConfig } from "../../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="border-b border-border pt-[68px]">
      <div className="section-shell pb-16 pt-20 md:pb-20 md:pt-24">
        <div className="grid items-center gap-12 min-[1000px]:grid-cols-[1.5fr_1fr]">
          <div className="min-w-0">
            <p className="label mb-5">{siteConfig.name}</p>
            <p className="mb-7 text-sm font-medium">{siteConfig.role}</p>
            <h1 className="font-archivo text-[clamp(2.5rem,5.1vw,4.75rem)] leading-[1.12] tracking-[-0.035em] uppercase">
              {siteConfig.headline}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="relative aspect-square overflow-hidden rounded-sm border border-border">
              <Image
                src="/makibul-hossain-tamim.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 640px) calc(100vw - 48px), 400px"
                preload
                className="object-cover"
              />
            </div>
            <p className="label mt-4">{siteConfig.location}</p>
          </div>
        </div>
        <div className="mt-12 grid items-center gap-6 md:mt-14 min-[1000px]:grid-cols-[1.5fr_1fr] min-[1000px]:gap-12">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary">
              View Selected Work{" "}
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="button-secondary">
              Discuss a Project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="w-full min-[1000px]:mx-auto min-[1000px]:max-w-[400px]">
            <SocialIcons variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
