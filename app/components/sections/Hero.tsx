import { Download } from "lucide-react";
import SocialIcons from "../../components/ui/SocialIcons";
import { siteConfig } from "../../data/portfolio";

// Profile photo — replace this URL with your own image in /public/images/
// e.g. src="/images/profile.jpg"
const PROFILE_IMAGE = "/makibul-hossain-tamim.png";

export default function Hero() {
  return (
    <section
      id='home'
      className='pt-[68px] border-b border-border' // 68px = navbar height
    >
      <div className='max-w-[1440px] mx-auto px-[120px] pt-[120px] pb-[160px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:pt-16 max-[640px]:pb-20'>
        {/* Main row */}
        <div className='flex items-start justify-between gap-10 max-[900px]:flex-col'>
          {/* Left — text block */}
          <div className='flex flex-col gap-6 max-w-[555px] max-[900px]:max-w-full'>
            {/* Name label */}
            <p className='font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted'>
              {siteConfig.name}
            </p>

            {/* Big title */}
            <div className='font-archivo leading-[1.1] text-foreground text-[96px] uppercase max-[1280px]:text-[72px] max-[1024px]:text-[56px] max-[640px]:text-[40px]'>
              <p>JUNIOR</p>
              <p>UI/UX</p>
              <p>DESIGNER</p>
            </div>

            {/* Tagline */}
            <p className='font-dm-sans text-[15px] leading-[1.75] text-muted max-w-[471px]'>
              {siteConfig.tagline}
            </p>
          </div>

          {/* Right — profile photo */}
          <div className='shrink-0 w-[427px] h-[427px] max-[1024px]:w-[320px] max-[1024px]:h-[320px] max-[640px]:w-full max-[640px]:h-[300px]'>
            <img
              src={PROFILE_IMAGE}
              alt={siteConfig.name}
              className='w-full h-full object-cover rounded-sm'
            />
          </div>
        </div>

        {/* Bottom row — socials + download cv */}
        <div className='flex items-center justify-between mt-[120px] max-[640px]:flex-col max-[640px]:gap-6 max-[640px]:items-start max-[640px]:mt-12'>
          <SocialIcons variant='dark' />

          {/* Download CV — triggers actual file download */}
          <a
            href={siteConfig.cvPath}
            download
            className='inline-flex items-center gap-3 border border-foreground text-foreground font-dm-sans font-medium text-[13px] uppercase tracking-wide px-4 py-2 rounded-full hover:bg-foreground hover:text-white transition-colors duration-200'>
            Download CV
            <Download size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
