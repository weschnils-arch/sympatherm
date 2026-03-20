import PageHero from '../components/PageHero'

export default function Datenschutz() {
  return (
    <>
      <PageHero
        title="Datenschutzerklärung"
        description="Informationen zur Verarbeitung Ihrer personenbezogenen Daten."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Datenschutz' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6 prose prose-secondary max-w-none">
          <h2>1. Verantwortlicher</h2>
          <p>
            SYMPATHERM Handelsgesellschaft mbH<br />
            ARED-Straße 24, A-2544 Leobersdorf<br />
            Telefon: 02256 65080<br />
            E-Mail: office@sympatherm.at
          </p>

          <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Diese umfassen den verwendeten Webbrowser, das Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und Ähnliches. Diese Daten lassen keinerlei Rückschlüsse auf Ihre Person zu und werden statistisch ausgewertet, um unseren Internetauftritt zu verbessern.
          </p>

          <h2>3. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind technisch notwendig, andere werden für statistische Zwecke eingesetzt. Sie können in Ihren Browsereinstellungen Cookies jederzeit blockieren oder löschen.
          </p>
          <ul>
            <li><strong>Essenzielle Cookies:</strong> Für die Grundfunktionalität der Website erforderlich (z.B. Cookie-Einstellungen).</li>
          </ul>

          <h2>5. Google Fonts</h2>
          <p>
            Diese Seite nutzt Web Fonts, die lokal eingebunden werden. Es findet keine Verbindung zu Servern von Google statt.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p>
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit an uns wenden: office@sympatherm.at
          </p>

          <h2>7. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
            Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, dsb@dsb.gv.at
          </p>

          <p className="text-sm text-secondary-light mt-12">Stand: März 2026</p>
        </div>
      </section>
    </>
  )
}
