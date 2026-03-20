import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { MapPin, Users, Calendar, Store } from 'lucide-react'

const milestones = [
  { year: '1975', text: 'Gründung in Maria Enzersdorf mit eigenem Fußbodenheizungssystem' },
  { year: '1985', text: 'Umzug nach Wiener Neudorf' },
  { year: '1993', text: 'Erweiterung um Fliesen-, Marmor- und Granithandel' },
  { year: '1995', text: 'Bezug des eigenen Gebäudes im ARED PARK Leobersdorf' },
  { year: '1999', text: 'Eröffnung des 300 m² Schauraums' },
  { year: 'Heute', text: '12 Mitarbeiter, vier Kernbereiche, tausende zufriedene Kunden' },
]

const highlights = [
  { icon: Calendar, value: 'Seit 1974', label: 'Am Markt' },
  { icon: Users, value: '12', label: 'Mitarbeiter' },
  { icon: Store, value: '300 m²', label: 'Schauraum' },
  { icon: MapPin, value: 'A2 Anbindung', label: 'Direkt an der Autobahn' },
]

export default function Unternehmen() {
  return (
    <>
      <PageHero
        title="Über SYMPATHERM"
        description="Handel und Dienstleistung auf höchstem Niveau seit über 50 Jahren."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Unternehmen' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Wer wir sind</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-5">Ihr Partner im Bezirk Baden</h2>
            <p className="text-lg text-secondary-light leading-relaxed">
              SYMPATHERM wurde 1975 als österreichisches Unternehmen gegründet und setzte mit dem eigenen Fußbodenheizungssystem neue Maßstäbe am Heizungssektor. Heute betreuen wir Privat- und Gewerbekunden in vier Kernbereichen – von der Beratung über die Planung bis zur Ausführung.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-bg">
                <h.icon size={28} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl font-bold text-secondary mb-1">{h.value}</div>
                <div className="text-sm text-secondary-light">{h.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Unsere Geschichte</h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-sm font-bold text-primary">{m.year}</span>
                    <p className="text-secondary-light mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schauraum */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6 text-center">
          <Store size={40} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-5">Unser Schauraum</h2>
          <p className="text-lg text-secondary-light leading-relaxed mb-6">
            Auf rund 300 m² präsentieren wir Ihnen ständig aktuelle Sanitär- und Fliesenprodukte. Direkt an der A2 (Ab- und Auffahrt Leobersdorf) gelegen, erreichen Sie uns bequem aus Wien, dem südlichen Niederösterreich und dem nördlichen Burgenland.
          </p>
          <p className="text-secondary-light">
            <strong className="text-secondary">Öffnungszeiten:</strong> Mo–Fr 08:00–12:00 und 13:00–18:00 Uhr
          </p>
        </div>
      </section>

      <CTASection
        title="Lernen Sie uns kennen"
        description="Besuchen Sie unseren Schauraum oder kontaktieren Sie uns für eine persönliche Beratung."
      />
    </>
  )
}
