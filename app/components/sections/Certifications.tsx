import { ArrowUpRight, BookOpen } from "lucide-react";
import { certifications } from "../../data/portfolio";
import SectionLabel from "../ui/SectionLabel";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Certifications() {
  const sorted = [...certifications].sort((a, b) =>
    b.issuedAt.localeCompare(a.issuedAt),
  );
  const years = [...new Set(sorted.map((cert) => cert.issuedAt.slice(0, 4)))];
  const yearRange = `${years.at(-1)}—${years[0]}`;

  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
        <div>
          <SectionLabel>CERTIFICATIONS</SectionLabel>
          <h2
            id="certifications-heading"
            className="font-archivo mt-5 max-w-[340px] text-[34px] leading-[1.15] tracking-[-0.025em] uppercase md:text-[42px]"
          >
            Learning,
            <br />
            put to work.
          </h2>
          <p className="mt-5 max-w-[290px] text-[14px] leading-[1.8] text-muted">
            Continued study in product design, user experience, and web
            development.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 border-y border-border py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e3e6dc]">
              <BookOpen size={18} strokeWidth={1.3} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[13px] font-medium">
                {String(certifications.length).padStart(2, "0")} certifications
              </p>
              <p className="font-space-mono mt-1 text-[10px] tracking-wider text-muted">
                {yearRange}
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid grid-cols-[52px_minmax(0,1fr)_32px] gap-x-4 border-b border-foreground pb-3 font-space-mono text-[9px] tracking-wider text-muted uppercase sm:grid-cols-[64px_minmax(0,1fr)_56px_32px] sm:gap-x-5">
            <span>Year</span>
            <span>Course / Issuer</span>
            <span className="hidden text-right sm:block">Issued</span>
            <span />
          </div>

          {years.map((year) => (
            <div
              key={year}
              className="grid grid-cols-[52px_minmax(0,1fr)] gap-x-4 border-b border-border sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-x-5"
            >
              <h3 className="font-space-mono pt-6 text-[13px] leading-relaxed">
                {year}
              </h3>
              <ul className="min-w-0 divide-y divide-border">
                {sorted
                  .filter((cert) => cert.issuedAt.startsWith(year))
                  .map((cert) => (
                    <li key={cert.url}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${cert.title}, ${cert.issuer}, ${cert.date} (opens in a new tab)`}
                        className="group grid grid-cols-[minmax(0,1fr)_32px] items-center gap-x-4 py-5 transition-colors duration-200 hover:bg-[#e3e6dc]/50 focus-visible:bg-[#e3e6dc]/50 sm:grid-cols-[minmax(0,1fr)_56px_32px] sm:gap-x-5"
                      >
                        <div className="min-w-0 pr-1">
                          <h4 className="text-[16px] font-medium leading-[1.5] tracking-[-0.015em] sm:text-[17px]">
                            {cert.title}
                          </h4>
                          <p className="mt-1.5 text-[11px] leading-relaxed text-muted sm:text-[12px]">
                            {cert.issuer}
                            <span className="sm:hidden"> · {cert.date}</span>
                          </p>
                        </div>
                        <time
                          dateTime={cert.issuedAt}
                          aria-label={cert.date}
                          className="font-space-mono hidden text-right text-[10px] uppercase tracking-wide text-muted sm:block"
                        >
                          {MONTHS[Number(cert.issuedAt.slice(5, 7)) - 1]}
                        </time>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-focus-visible:border-foreground group-focus-visible:bg-foreground group-focus-visible:text-background">
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.4}
                            aria-hidden="true"
                            className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
