import { ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionLabel from "../../components/ui/SectionLabel";
import { certifications, education } from "../../data/portfolio";

const CERTIFICATE = "/certificate.png";

export default function Credentials() {
  return (
    <section id='credentials' className='border-b border-border'>
      <div className='max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16'>
        <div className='flex flex-col gap-12'>
          <SectionLabel>CREDENTIALS</SectionLabel>

          {/* ── Education ── */}
          <div className='flex flex-col gap-6 pb-10 border-b border-border'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-archivo text-[20px] leading-[1.5] uppercase text-foreground'>
                {education.institution}
              </h3>
              <div className='flex items-center justify-between flex-wrap gap-2'>
                <p className='font-space-mono text-[12px] tracking-[0.96px] uppercase text-muted'>
                  {education.degree}
                </p>
                <p className='font-space-mono text-[12px] text-muted'>
                  {education.period} &nbsp;·&nbsp; {education.cgpa}
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-2 text-muted'>
              <p className='font-dm-sans text-[14px] leading-[1.75]'>
                <span className='font-semibold text-foreground font-dm-sans'>
                  Thesis:{" "}
                </span>
                <span className='italic'>{education.thesis}</span>
              </p>
              <div className='flex flex-wrap gap-x-2 font-dm-sans text-[14px] leading-[1.75]'>
                <span className='font-semibold text-foreground'>Projects:</span>
                {education.projects.map((proj, i) => (
                  <span key={proj}>
                    {proj}
                    {i < education.projects.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Certifications ── */}
          <div className='flex items-start md:justify-between gap-10 max-[900px]:flex-col'>
            <div className='flex flex-col gap-8'>
              <h3 className='font-archivo text-[20px] leading-[1.5] uppercase text-foreground'>
                CERTIFICATIONS
              </h3>

              <div className='flex flex-col gap-5'>
                {certifications.map((cert, i) => (
                  <div key={i} className='flex flex-col gap-1'>
                    {/* Issuer + external link */}
                    <div className='flex items-center gap-2'>
                      <Link
                        href={cert.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-dm-sans font-medium text-[16px] text-foreground hover:opacity-70 transition-opacity'>
                        {cert.issuer}
                      </Link>
                      <Link
                        href={cert.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='View certificate'
                        className='text-muted hover:text-foreground transition-colors'>
                        <ExternalLink size={15} strokeWidth={1.5} />
                      </Link>
                    </div>
                    {/* Title + date */}
                    <p className='font-dm-sans text-[14px] text-muted'>
                      {cert.title} &nbsp;·&nbsp; {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — certificate photo -  max-[1024px]:w-[320px] max-[1024px]:h-[320px] max-[640px]:w-full max-[640px]:h-[300px] xl:w-[600px] xl:h-[600px]  w-[527px] h-[527px] */}
            <div className='shrink-0 md:w-[327px] md:h-[327px] mx-auto xl:w-[527px] xl:h-[527px] '>
              <img
                src={CERTIFICATE}
                alt='Certificate'
                className='w-full h-full object-cover rounded-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
