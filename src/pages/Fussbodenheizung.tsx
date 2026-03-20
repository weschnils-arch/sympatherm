import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import CTASection from '../components/CTASection'
import { ThermometerSun, Shield, Leaf, Zap } from 'lucide-react'

const benefits = [
  { icon: ThermometerSun, title: 'Optimale Wärmeverteilung', text: 'Großflächige, gleichmäßige Wärmeabgabe für angenehmes Raumklima.' },
  { icon: Shield, title: 'Gesundes Heizen', text: 'Geringe Staubentwicklung – ideal auch für Allergiker.' },
  { icon: Leaf, title: 'Energieeffizient', text: 'Niedrige Vorlauftemperaturen – perfekt für Wärmepumpen und Solar.' },
  { icon: Zap, title: 'Flexibel einsetzbar', text: 'Für Neubau, Sanierung und jede Art von Bodenbelag geeignet.' },
]

const systems = [
  {
    title: 'System SYMPATHERM – Trockenverlegung',
    content: (
      <div className="space-y-3">
        <p>Unser bewährtes Trockensystem kombiniert Wärmeleitblech mit Wärmeverteilfolie für optimale Wärmeverteilung und Rohrschutz. Die Hartschaumprofilplatten dienen als Wärmedämmung und bieten 23 dB Trittschallverbesserung.</p>
        <p className="font-medium text-secondary">Aufbauhöhe Trockenestrich: 65 mm</p>
        <p className="text-sm">Geeignet für: Alt- und Neubau, Fertighäuser</p>
        <img src="/images/systems/sympatherm-trocken.webp" alt="Querschnitt System SYMPATHERM Trockenestrich 65mm" className="rounded-lg mt-4 w-full max-w-md" loading="lazy" width={800} height={400} />
      </div>
    ),
  },
  {
    title: 'System SYMPAFLEX – Niedriger Aufbau',
    content: (
      <div className="space-y-3">
        <p>Mit nur 71 mm Aufbauhöhe inklusive Estrich ideal für Situationen mit begrenzter Höhe. Überlappende Noppenplatten sorgen für wenig Verschnitt und einfache Verlegung.</p>
        <p className="font-medium text-secondary">Aufbauhöhe: 71 mm (Estrich inklusive)</p>
        <img src="/images/systems/sympaflex.webp" alt="Querschnitt System SYMPAFLEX 71mm" className="rounded-lg mt-4 w-full max-w-md" loading="lazy" width={800} height={400} />
      </div>
    ),
  },
  {
    title: 'System SYMPATACK – Nassestrich',
    content: (
      <div className="space-y-3">
        <p>Das Tackersystem mit aufkaschierter Rasterfolie ermöglicht rasche Verlegung mit variablen Rohrabständen. Ideal für Industrie-, Gewerbe- und Wohnbauten.</p>
        <p className="font-medium text-secondary">Aufbauhöhe Nassestrich: 90 mm</p>
        <img src="/images/systems/sympatherm-nass.webp" alt="Querschnitt System SYMPATACK Nassestrich 90mm" className="rounded-lg mt-4 w-full max-w-md" loading="lazy" width={800} height={400} />
      </div>
    ),
  },
  {
    title: 'Elektrische Dünnbettheizmatten',
    content: (
      <p>Ideal für Nachrüstung: Die Heizmatten werden mit Flexkleber direkt unter dem Bodenbelag verlegt – ob Fliesen, Parkett oder PVC. Energiesparend steuerbar über Bodenthermostat. Schutzisolierter Heizleiter mit FI-Schutzschalter für optimalen Personenschutz.</p>
    ),
  },
]

export default function Fussbodenheizung() {
  return (
    <>
      <PageHero
        title="Fußbodenheizung – Wärme für Ihr Wohlbefinden"
        description="Eigene Systeme für Neubau und Sanierung. Über 40 Jahre Erfahrung mit der gesündesten Art zu heizen."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Leistungen', path: '/' },
          { label: 'Fußbodenheizung' },
        ]}
        image="/images/systems/sympafloor.webp"
      />

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <b.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-secondary-light leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-16 lg:py-20 bg-bg">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6 text-center">
          <p className="text-lg text-secondary-light leading-relaxed">
            Ob mit Wasser oder Strom – unsere Fußbodenheizungs-Systeme sorgen für Behaglichkeit. Die vom Boden abstrahlende Wärme schafft ein angenehmes Raumklima bei vergleichsweise niedriger Raumtemperatur. Optimal kombinierbar mit Wärmepumpen, Solaranlagen oder Brennwertgeräten.
          </p>
        </div>
      </section>

      {/* Systems Accordion */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-8">Unsere Systeme</h2>
          <Accordion items={systems} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Referenzprojekte</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/projects/idm-leobersdorf.webp', alt: 'Fußbodenheizung Projekt Leobersdorf' },
              { src: '/images/projects/idm-margarethen.webp', alt: 'Fußbodenheizung Projekt Margarethen' },
              { src: '/images/projects/idm-neufeld.webp', alt: 'Fußbodenheizung Projekt Neufeld' },
              { src: '/images/projects/idm-leopoldsdorf.webp', alt: 'Fußbodenheizung Projekt Leopoldsdorf' },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Warme Füße gewünscht?"
        description="Wir planen Ihre Fußbodenheizung individuell und raumspezifisch. Kontaktieren Sie uns für eine persönliche Beratung."
      />
    </>
  )
}
