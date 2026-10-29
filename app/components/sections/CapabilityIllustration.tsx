type Discipline = "leadership" | "engineering" | "design";

export default function CapabilityIllustration({
  discipline,
}: {
  discipline: Discipline;
}) {
  return (
    <svg
      viewBox="0 0 360 180"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full text-foreground"
    >
      <path d="M24 90H336M180 14V166" stroke="currentColor" opacity=".07" />
      <path
        d="M24 84V96M336 84V96M174 14H186M174 166H186"
        stroke="currentColor"
        opacity=".2"
      />

      {discipline === "leadership" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <circle cx="180" cy="90" r="65" opacity=".22" />
          <circle cx="180" cy="90" r="48" strokeDasharray="2 6" opacity=".3" />
          <path d="M180 25L236 122H124L180 25Z" opacity=".65" />
          <circle cx="180" cy="90" r="26" fill="#cbd0c1" />
          <path d="M168 94L180 80L192 94M180 80V103" />
          <circle cx="180" cy="25" r="6" fill="#f4f2ee" />
          <circle cx="236" cy="122" r="6" fill="#f4f2ee" />
          <circle cx="124" cy="122" r="6" fill="#f4f2ee" />
          <path d="M105 47L110 52M250 128L255 133" opacity=".35" />
        </g>
      )}

      {discipline === "engineering" && (
        <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
          <path
            d="M105 74V109M255 74V109M180 112V147"
            strokeDasharray="3 4"
            opacity=".3"
          />
          <path d="M105 109L180 71L255 109L180 147L105 109Z" fill="#dbddd5" />
          <path d="M105 85L180 47L255 85L180 123L105 85Z" fill="#ebe9e3" />
          <path d="M105 61L180 23L255 61L180 99L105 61Z" fill="#cbd0c1" />
          <path d="M180 23V99M105 61H255" opacity=".16" />
          <path d="M156 57L147 62L156 67M204 57L213 62L204 67M185 53L175 71" />
          <path d="M90 114L96 117M264 114L270 111" opacity=".4" />
        </g>
      )}

      {discipline === "design" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="116" y="25" width="81" height="127" rx="3" fill="#e2e3db" />
          <path d="M127 40H153M127 48H172M127 135H150" opacity=".45" />
          <rect x="154" y="57" width="97" height="69" fill="#f4f2ee" />
          <rect
            x="167"
            y="70"
            width="27"
            height="42"
            fill="#cbd0c1"
            stroke="none"
          />
          <path d="M205 74H239M205 82H231M205 105H223" opacity=".4" />
          <path
            d="M145 48H260V135H145V48Z"
            strokeDasharray="2 4"
            opacity=".4"
          />
          <path
            d="M180 37V143M136 90H270"
            strokeDasharray="2 4"
            opacity=".16"
          />
          <rect x="142" y="45" width="6" height="6" fill="#f4f2ee" />
          <rect x="257" y="45" width="6" height="6" fill="#f4f2ee" />
          <rect x="142" y="132" width="6" height="6" fill="#f4f2ee" />
          <rect x="257" y="132" width="6" height="6" fill="#f4f2ee" />
        </g>
      )}
    </svg>
  );
}
