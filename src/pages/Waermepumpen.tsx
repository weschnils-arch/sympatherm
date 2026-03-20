import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import CTASection from '../components/CTASection'
import { Volume2, Palette, Gauge, Cpu, Droplets, Leaf, Sun, Thermometer } from 'lucide-react'

const benefits = [
  { icon: Volume2, label: 'Extrem leise' },
  { icon: Palette, label: 'Kompaktes Design' },
  { icon: Gauge, label: 'Höchste Effizienz' },
  { icon: Cpu, label: 'Moderne Regelung' },
  { icon: Droplets, label: 'Hygienisches Warmwasser' },
  { icon: Leaf, label: '80 % Umweltenergie' },
  { icon: Sun, label: 'Heizen & Kühlen' },
  { icon: Thermometer, label: 'Optimal mit Flächenheizung' },
]

const faqs = [
  {
    title: 'Wie funktioniert eine Wärmepumpe?',
    content: 'Die Energie aus Luft, Erde oder Wasser wird mit elektrischem Strom für Heizung und Warmwasser nutzbar gemacht. Die der Umwelt entzogene Wärme wird auf ein verwertbares Temperaturniveau gehoben – so lassen sich Gebäude im Winter heizen und im Sommer kühlen.',
  },
  {
    title: 'Für wen eignet sich eine Wärmepumpe?',
    content: 'Ob Neubau oder Sanierung – Wärmepumpensysteme sind für jede Gebäudeart geeignet. Sie arbeiten ohne Emissionen im eigenen Haus und brauchen keinen eigenen Heizraum. Besonders effizient in Kombination mit Fußbodenheizungen.',
  },
  {
    title: 'Warum Wärmepumpe + Fußbodenheizung?',
    content: 'Die Fußbodenheizung benötigt als Niedertemperaturheizung nur ca. 35°C Vorlauftemperatur. Je geringer die Temperaturdifferenz, desto effizienter die Wärmepumpe. Unsere Systeme SYMPATHERM, SYMPAFLEX und SYMPATACK sind die ideale Ergänzung.',
  },
  {
    title: 'Welche Wärmepumpe ist die richtige?',
    content: 'Entscheidend ist die passende Leistungsgröße und Wärmequelle für Ihr Objekt. Wir beraten Sie individuell und zeigen Ihnen, welche Lösung für Sie am besten geeignet ist. Vereinbaren Sie einen persönlichen Beratungstermin.',
  },
]

export default function Waermepumpen() {
  return (
    <>
      <PageHero
        title="Wärmepumpen – Nachhaltig heizen und kühlen"
        description="Nutzen Sie kostenlose Umweltenergie. Effizient, leistungsstark und umweltfreundlich."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Leistungen', path: '/' },
          { label: 'Wärmepumpen' },
        ]}
        image="/images/products/daikin-epsk.webp"
      />

      {/* Intro + Product Image */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Zukunftslösung</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-5">Umweltenergie intelligent nutzen</h2>
              <p className="text-secondary-light leading-relaxed mb-6">
                Eine Wärmepumpe heizt, kühlt und sorgt für Warmwasser – effizient und umweltfreundlich. Bis zu 80 % der benötigten Heizenergie kommt direkt aus der Umwelt. Unabhängig, vielseitig und nachhaltig.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-secondary">
                    <b.icon size={18} className="text-primary shrink-0" strokeWidth={1.5} />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/products/idm-aero-alm.webp"
                alt="iDM Wärmepumpe AERO ALM Außen- und Innengerät"
                className="w-full rounded-2xl"
                loading="lazy"
                width={800}
                height={565}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-8 text-center">Häufige Fragen</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Unsere Partner & Produkte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { src: '/images/products/idm-ipump.webp', alt: 'iDM iPump Wärmepumpe Innen- und Außengerät', label: 'iDM iPump' },
              { src: '/images/products/idm-ipump-a8.webp', alt: 'iDM iPump A8 und A12 Wärmepumpe', label: 'iDM iPump A8/A12' },
              { src: '/images/products/daikin-epsk.webp', alt: 'Daikin Wärmepumpe Installation im Garten', label: 'Daikin Altherma' },
            ].map((item, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={600} height={375} />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-secondary text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Projects */}
      <section className="py-16 lg:py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Referenzprojekte</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/projects/daikin-wien.webp', label: 'Wien' },
              { src: '/images/projects/idm-laxenburg.webp', label: 'Laxenburg' },
              { src: '/images/projects/idm-guntramsdorf.webp', label: 'Guntramsdorf' },
              { src: '/images/projects/daikin-ebreichsdorf.webp', label: 'Ebreichsdorf' },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-xl overflow-hidden mb-2">
                  <img src={p.src} alt={`Wärmepumpen Installation ${p.label}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={400} />
                </div>
                <p className="text-sm text-secondary-light">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interesse an einer Wärmepumpe?"
        description="Wir zeigen Ihnen, welche Wärmequelle und Ausführung für Sie am besten geeignet ist."
      />
    </>
  )
}
