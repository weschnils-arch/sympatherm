import PageHero from '../components/PageHero'

export default function Impressum() {
  return (
    <>
      <PageHero
        title="Impressum"
        description="Angaben gemäß § 5 ECG und Offenlegungspflicht gemäß § 25 MedienG."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Impressum' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6 prose prose-secondary max-w-none">
          <h2>Unternehmensangaben</h2>
          <p>
            <strong>SYMPATHERM Handelsgesellschaft mbH</strong><br />
            ARED-Straße 24<br />
            A-2544 Leobersdorf<br />
            Österreich
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: <a href="tel:+43225665080">02256 65080</a><br />
            E-Mail: <a href="mailto:office@sympatherm.at">office@sympatherm.at</a>
          </p>

          <h3>Unternehmensgegenstand</h3>
          <p>Handel und Dienstleistung in den Bereichen Fußbodenheizung, Wärmepumpen, Fliesen, Bad und Sanitär.</p>

          <h3>Rechtsform</h3>
          <p>Gesellschaft mit beschränkter Haftung (GmbH)</p>

          <h3>Geschäftsführer</h3>
          <p>Franz Raab</p>

          <h3>Gerichtsstand</h3>
          <p>Landesgericht Wiener Neustadt</p>

          <h3>Haftungsausschluss</h3>
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der abrufbaren Inhalte erfolgt auf eigene Gefahr des Nutzers.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem österreichischen Urheberrecht. Jede vom österreichischen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
          </p>
        </div>
      </section>
    </>
  )
}
