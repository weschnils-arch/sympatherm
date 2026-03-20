import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Props {
  title: string
  description: string
  breadcrumbs: { label: string; path?: string }[]
  image?: string
}

export default function PageHero({ title, description, breadcrumbs, image }: Props) {
  return (
    <section className="relative bg-primary overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="eager"
          width={1920}
          height={600}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary-dark" />
      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-6 pt-36 lg:pt-44 pb-16 lg:pb-20 min-h-[280px] lg:min-h-[340px] flex flex-col justify-end">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-white/40">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white/70 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-heading text-3xl lg:text-5xl text-white mb-4 max-w-3xl">{title}</h1>
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
