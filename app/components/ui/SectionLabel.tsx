interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted">
      {children} /
    </p>
  )
}
