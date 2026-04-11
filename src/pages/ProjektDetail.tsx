import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Tag } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'
import CTASection from '../components/CTASection'

export default function ProjektDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projekte" replace />

  return (
    <>
      {/* Hero with project image */}
      <section className="relative overflow-hidden bg-secondary">
        <img
          src={project.src}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/40" />

        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Projekte
          </Link>
          <h1 className="font-heading text-3xl lg:text-5xl text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <Tag size={14} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={14} />
              {project.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main image */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Details sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-secondary mb-4">Projektdetails</h2>
              <p className="text-secondary-light leading-relaxed mb-6">{project.description}</p>

              {project.details && (
                <ul className="space-y-3">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm mt-8 hover:bg-primary-dark transition-colors"
              >
                Ähnliches Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
