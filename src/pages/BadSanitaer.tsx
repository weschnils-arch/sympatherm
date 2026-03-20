import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import CTASection from '../components/CTASection'
import { Ruler, Paintbrush, Accessibility, Wrench } from 'lucide-react'

const steps = [
  { icon: Paintbrush, title: 'Design & Planung', text: 'Ihre Wünsche und die räumlichen Gegebenheiten im Einklang.' },
  { icon: Ruler, title: 'Maßanfertigung', text: 'Badmöbel in jeder Höhe, Breite und Tiefe realisierbar.' },
  { icon: Wrench, title: 'Ausführung', text: 'Vom ersten Strich bis zur Endabnahme professionell begleitet.' },
  { icon: Accessibility, title: 'Barrierefreiheit', text: 'Expertenlösungen für altersgerechtes und behindertengerechtes Bad.' },
]

const products = [
  {
    title: 'Badmöbel',
    content: 'Individuelle Lösungen mit absoluter Flexibilität bei allen Maßen. Jede Höhe, Breite und Tiefe realisierbar. Geübter Blick für die nötige Harmonie in der Farbgestaltung.',
  },
  {
    title: 'Waschbecken',
    content: 'Aufsatz-, Einbau- oder Unterbaubecken – wandhängend oder mit Standfuß. Materialien: Keramik (hygienisch, pflegeleicht), Mineralguss (große Gestaltungsfreiheit), Corian (perfekt gleichmäßige Oberfläche) oder Glas (widerstandsfähig, vielseitige Farben).',
  },
  {
    title: 'Badewannen & Duschen',
    content: 'Von großzügigen Badewannen für mehrere Personen bis zu platzsparenden Lösungen. Duschkabinen mit Dreh-, Falt- oder Schiebetüren in Glas oder rahmenloser Konstruktion. Materialien: Acryl (leicht, vielseitig) oder Stahl (extrem haltbar, bis 30 Jahre Garantie).',
  },
  {
    title: 'WC & Urinal',
    content: 'Bodenstehende und wandhängende Modelle. Spülrandlose Toiletten und Duschtoiletten als innovative Lösungen. Urinale als wassersparende Ergänzung – nur 2 Liter statt 6-9 Liter pro Spülung.',
  },
  {
    title: 'Barrierefreies Bad',
    content: 'Bodenebene Dusche, Haltegriffe, unterfahrbarer Waschtisch, leicht bedienbare Armaturen, rutschfeste Fliesen und ausreichend Platz. Umbau des vorhandenen Badezimmers zu einem barrierefreien bzw. behindertengerechten Bad – damit die Selbstständigkeit so lange wie möglich erhalten bleibt.',
  },
]

export default function BadSanitaer() {
  return (
    <>
      <PageHero
        title="Bad & Sanitär – Ihr Traumbad wartet"
        description="Badgestaltung und Badsanierung nach Ihren individuellen Wünschen. Planung, Ausführung und Beratung."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Leistungen', path: '/' },
          { label: 'Bad & Sanitär' },
        ]}
      />

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Von der Idee zum Traumbad</h2>
            <p className="text-secondary-light leading-relaxed">
              Wir verwandeln Ihren Geschmack, die räumlichen Gegebenheiten und Ihre Installationsvorgaben in ein traumhaftes Badezimmer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={28} className="text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Accordion */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-8 text-center">Unser Sortiment</h2>
          <Accordion items={products} />
        </div>
      </section>

      <CTASection
        title="Ihr neues Bad wartet"
        description="Wir planen gemeinsam mit Ihnen die Umsetzung Ihres Wunschbadezimmers. Lassen Sie sich beraten."
      />
    </>
  )
}
