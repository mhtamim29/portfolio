"use client";

import SocialIcons from "../../components/ui/SocialIcons";
import { siteConfig } from "../../data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className='bg-foreground text-background pt-[120px] pb-[60px] px-[120px] max-[1024px]:px-10 max-[640px]:px-6'>
      {/* CTA Tag */}
      <div className='flex justify-center mb-8'>
        <span className='border border-background/30 text-background font-dm-sans font-medium text-[11px] uppercase tracking-wide px-5 py-2 rounded-full'>
          HAVE A PROJECT IN MIND?
        </span>
      </div>

      {/* Subheading */}
      <p className='font-space-mono text-[12px] tracking-[0.96px] uppercase text-muted text-center mb-6'>
        LET&apos;S MAKE SOMETHING GREAT TOGETHER
      </p>

      {/* Big Heading */}
      <div className='text-center mb-12'>
        <a
          href={`mailto:${siteConfig.email}`}
          className='font-archivo text-[96px] leading-none uppercase text-background hover:opacity-70 transition-opacity max-[1024px]:text-[64px] max-[640px]:text-[40px]'>
          LET&apos;S TALK
        </a>
      </div>

      {/* Divider row */}
      <div className='border-b border-[#2d2d2d] flex items-center justify-between pb-8 mb-6 max-[640px]:flex-col max-[640px]:gap-4 max-[640px]:items-start'>
        <SocialIcons variant='light' />
        <button
          onClick={scrollToTop}
          className='border border-background/30 text-background font-dm-sans font-medium text-[11px] uppercase tracking-wide px-5 py-2 rounded-full hover:bg-background/10 transition-colors flex items-center gap-2'>
          BACK TO TOP
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'>
            <path d='M12 19V5M5 12l7-7 7 7' />
          </svg>
        </button>
      </div>

      {/* Copyright */}
      <p className='font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted text-center'>
        COPYRIGHT &copy; 2026 {siteConfig.name.toUpperCase()}
      </p>
    </footer>
  );
}
