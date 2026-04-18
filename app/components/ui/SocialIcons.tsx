import Link from "next/link";
import { siteConfig } from "../../data/portfolio";

interface SocialIconsProps {
  variant?: "dark" | "light";
}

// SVG icons inline for zero dependencies
const icons = {
  linkedin: (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  ),
  behance: (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029L23.726 17zm-7.441-3h4.932c-.106-1.547-1.05-2.088-2.358-2.088-1.357 0-2.28.64-2.574 2.088z' />
      <path d='M7.6 10.4H5.5v2.2h2.1c1.1 0 1.6-.4 1.6-1.1s-.5-1.1-1.6-1.1zM5.5 14.6v2.5h2.5c1.2 0 1.8-.5 1.8-1.3 0-.8-.6-1.2-1.8-1.2H5.5zM3 7v10h5.3c2.4 0 3.9-1.1 3.9-3 0-1.2-.6-2.1-1.7-2.6 1-.5 1.5-1.3 1.5-2.2 0-1.7-1.4-2.7-3.6-2.7H3z' />
    </svg>
  ),
  github: (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.787.605-3.375-1.343-3.375-1.343-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032 .892 1.528 2.341 1.086 2.91 .83 .092-.644 .35-1.086 .636-1.336-2.22-.252-4.555-1.11-4.555-4.943 0-1.091 .39-1.984 1.032-2.682-.103-.253-.448-1.27 .098-2.647 0 0 .844-.27 2.77 1.032a9.66 9.66 0 012.522-.339c.856 .004 1.717 .116 2.522 .339 1.926-1.302 2.77-1.032 2.77-1.032 .548 1.377 .202 2.394 .1 2.647 .642 .698 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935 .36 .31 .68 .923 .68 1.86 0 1.343-.012 2.422-.012 2.753 0 .268 .18 .58 .688 .48A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z' />
    </svg>
  ),
  instagram: (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'>
      <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
      <circle cx='12' cy='12' r='4' />
      <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
    </svg>
  ),
  facebook: (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33V21C18.343 21.128 22 16.991 22 12z' />
    </svg>
  ),
  dribbble: (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'>
      <circle cx='12' cy='12' r='10' />
      <path d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32' />
    </svg>
  ),
};

export default function SocialIcons({ variant = "dark" }: SocialIconsProps) {
  const borderClass = variant === "dark" ? "border-foreground" : "border-white";
  const textClass = variant === "dark" ? "text-foreground" : "text-white";
  const hoverClass =
    variant === "dark"
      ? "hover:bg-foreground hover:text-white"
      : "hover:bg-white hover:text-foreground";

  const links = [
    {
      href: siteConfig.socials.linkedin,
      icon: icons.linkedin,
      label: "LinkedIn",
    },
    { href: siteConfig.socials.behance, icon: icons.behance, label: "Behance" },
    {
      href: siteConfig.socials.github,
      icon: icons.github,
      label: "GitHub",
    },
    {
      href: siteConfig.socials.instagram,
      icon: icons.instagram,
      label: "Instagram",
    },
    {
      href: siteConfig.socials.facebook,
      icon: icons.facebook,
      label: "Facebook",
    },
    {
      href: siteConfig.socials.dribbble,
      icon: icons.dribbble,
      label: "Dribbble",
    },
  ];

  return (
    <div className='flex items-center gap-3'>
      {links.map(({ href, icon, label }) => (
        <Link
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className={`w-9 h-9 flex items-center justify-center rounded-[18px] border ${borderClass} ${textClass} ${hoverClass} transition-colors duration-200`}>
          {icon}
        </Link>
      ))}
    </div>
  );
}
