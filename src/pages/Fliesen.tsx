import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import CTASection from '../components/CTASection'
import { Palette, Layers, Maximize2, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Layers,
    title: 'Wand- & Bodenfliesen',
    text: 'Klassisch, retro, Stein- oder Holzoptik – für jeden Raum und Geschmack.',
  },
  {
    icon: Sparkles,
    title: 'Mosaik',
    text: 'Faszinierende Gestaltungsmöglichkeiten für Bad und Küche.',
  },
  {
    icon: Palette,
    title: 'Cristallino & Rock Solid',
    text: 'Durchsichtiges Glas und gemahlener Granit – unverwechselbare Optik.',
  },
  {
    icon: Maximize2,
    title: 'Sonderformate',
    text: 'Extradünn, extragroß – mit nur 3,5 mm Dicke für besondere Projekte.',
  },
]

const details = [
  {
    title: 'Mosaik – Design für Bad & Küche',
    content: 'Durch stilistische Vielfalt eröffnet Mosaik faszinierende Möglichkeiten zur Wohnraumgestaltung. Hochwertige, pflegeleichte Materialien lassen sich vielfältig kombinieren – ob traditionell oder modern, elegant oder rustikal.',
  },
  {
    title: 'Cristallino & Rock Solid',
    content: 'Platten aus durchsichtigem, gehärtetem Glas mit pigmentiertem Binder für beeindruckend tiefe Farben. Rock Solid Platten aus gemahlenem Granit und Quarz für eine unverwechselbare Identität. Flexibel, frostsicher und vielseitig einsetzbar.',
  },
  {
    title: 'Sonderformate',
    content: 'Keramische, mit Fiberglas verstärkte Fliesen mit nur 3,5 mm Dicke – eine höchst innovative Technologie. Verschiedene Basisfarben und Oberflächenbeschaffenheiten, inspiriert durch Materialien der Inneneinrichtung. Als dynamische Wand- und Bodenverkleidungen mit aufregenden Texturen.',
  },
  {
    title: 'Anwendungsbereiche',
    content: 'Bäder, Küchen, Wohnräume oder Außenbereiche – unsere Auswahl an Fliesen, Feinsteinzeug und Mosaik lässt keine Wünsche offen. Fliesenböden sind bestens für Fußbodenheizungen geeignet und gewährleisten den höchsten Wirkungsgrad.',
  },
]

export default function Fliesen() {
  return (
    <>
      <PageHero
        title="Fliesen – Form, Farbe und Funktion"
        description="Hochwertige Wand- und Bodenfliesen in unserem 300 m² Schauraum in Leobersdorf."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Leistungen', path: '/' },
          { label: 'Fliesen' },
        ]}
      />

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Unser Sortiment</h2>
            <p className="text-secondary-light leading-relaxed">
              Das Spiel mit Form, Farbe und Größe – für alle Räume überzeugende Gestaltungsmöglichkeiten. Auch anspruchsvolle Ästheten werden bei uns fündig.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <cat.icon size={24} className="text-amber-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{cat.title}</h3>
                <p className="text-sm text-secondary-light leading-relaxed">{cat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Accordion */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-8 text-center">Im Detail</h2>
          <Accordion items={details} />
        </div>
      </section>

      <CTASection
        title="Besuchen Sie unseren Schauraum"
        description="Überzeugen Sie sich persönlich von unserer großen Auswahl. Wir beraten Sie gerne."
      />
    </>
  )
}
