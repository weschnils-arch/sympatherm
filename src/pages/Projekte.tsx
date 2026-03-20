import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const projects = [
  { src: '/images/projects/daikin-wien.webp', title: 'Wärmepumpe Wien', category: 'Wärmepumpen', location: '1100 Wien', description: 'Daikin Luft-Wasser-Wärmepumpe für ein Mehrfamilienhaus.' },
  { src: '/images/projects/idm-laxenburg.webp', title: 'iDM iPump Laxenburg', category: 'Wärmepumpen', location: 'Laxenburg', description: 'iDM iPump A-3-11 Luft-Wärmepumpe für ein Einfamilienhaus.' },
  { src: '/images/projects/idm-neufeld.webp', title: 'iDM ALM Neufeld', category: 'Wärmepumpen', location: 'Neufeld', description: 'iDM ALM 10-24 Großwärmepumpe für Gewerbeobjekt.' },
  { src: '/images/projects/idm-guntramsdorf.webp', title: 'iDM iPump Guntramsdorf', category: 'Wärmepumpen', location: 'Guntramsdorf', description: 'iDM iPump ALM 4-12 für Neubau mit Fußbodenheizung.' },
  { src: '/images/projects/daikin-ebreichsdorf.webp', title: 'Daikin Ebreichsdorf', category: 'Wärmepumpen', location: 'Ebreichsdorf', description: 'Daikin Altherma Wärmepumpe für Altbausanierung.' },
  { src: '/images/projects/idm-leobersdorf.webp', title: 'iPump Leobersdorf', category: 'Wärmepumpen', location: 'Leobersdorf', description: 'iDM iPump ALM 4-12 mit System SYMPATHERM Fußbodenheizung.' },
  { src: '/images/projects/idm-leopoldsdorf.webp', title: 'iDM SLM Leopoldsdorf', category: 'Wärmepumpen', location: 'Leopoldsdorf', description: 'iDM SLM 3-11 Sole-Wärmepumpe mit Erdkollektor.' },
  { src: '/images/projects/idm-margarethen.webp', title: 'iDM ALM Margarethen', category: 'Wärmepumpen', location: 'Margarethen', description: 'iDM ALM 4-12 Luft-Wärmepumpe für Sanierungsprojekt.' },
]

export default function Projekte() {
  return (
    <>
      <PageHero
        title="Unsere Projekte"
        description="Ausgewählte Referenzen aus den Bereichen Wärmepumpen, Fußbodenheizung und Badsanierung."
        image="/images/projects/daikin-wien.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Projekte' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
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
                  <p className="text-sm text-secondary-light leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
