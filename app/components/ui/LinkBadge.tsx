import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface LinkBadgeProps {
  href: string;
  label: string;
}

export default function LinkBadge({ href, label }: LinkBadgeProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        inline-flex items-center gap-1 px-3 py-1 rounded-full
        font-space-mono text-[11px] uppercase tracking-[0.275px]
        bg-card text-foreground

        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:scale-[1.05] hover:opacity-80

        group-hover:bg-[#4c4c4c] group-hover:text-[#e0ded8]
      '>
      {label}
      <ExternalLink
        size={12}
        strokeWidth={1.5}
        className='transition-transform duration-300 group-hover:translate-x-[1px]'
      />
    </Link>
  );
}
