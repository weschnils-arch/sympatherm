import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

export default function Projekte() {
  return (
    <>
      <PageHero
        title="Unsere Projekte"
        description="Ausgewählte Referenzen aus den Bereichen Wärmepumpen, Fußbodenheizung und Badsanierung."
        image="/images/fliesen/boost-dune-living.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Projekte' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projekte/${project.slug}`}
                className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
                  <h3 className="font-bold text-secondary mt-1 mb-1">{project.title}</h3>
                  <p className="text-sm text-secondary-light mb-2">{project.location}</p>
                  <p className="text-sm text-secondary-light leading-relaxed mb-3">{project.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    Details ansehen <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
