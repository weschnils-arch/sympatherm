interface Props {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ label, title, description, centered = true, light = false }: Props) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl lg:text-[2.75rem] mb-4 ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-secondary-light'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
