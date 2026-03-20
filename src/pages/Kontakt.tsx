import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        title="Kontakt aufnehmen"
        description="Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns oder besuchen Sie unseren Schauraum."
        image="/images/products/idm-aero-alm.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Kontakt' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-secondary mb-6">So erreichen Sie uns</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Adresse</p>
                    <p className="text-secondary-light text-sm leading-relaxed">
                      SYMPATHERM Handelsgesellschaft mbH<br />
                      ARED-Straße 24<br />
                      A-2544 Leobersdorf
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Telefon</p>
                    <a href="tel:+43225665080" className="text-secondary-light text-sm hover:text-primary transition-colors">02256 65080</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">E-Mail</p>
                    <a href="mailto:office@sympatherm.at" className="text-secondary-light text-sm hover:text-primary transition-colors">office@sympatherm.at</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Öffnungszeiten</p>
                    <p className="text-secondary-light text-sm leading-relaxed">
                      Montag – Freitag<br />
                      08:00 – 12:00 Uhr<br />
                      13:00 – 18:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps?q=ARED-Stra%C3%9Fe+24,+2544+Leobersdorf,+Austria&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SYMPATHERM Standort — ARED-Straße 24, Leobersdorf"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-secondary mb-6">Nachricht senden</h2>

              {submitted ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Nachricht gesendet!</h3>
                  <p className="text-secondary-light">Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary placeholder:text-secondary-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">E-Mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary placeholder:text-secondary-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="ihre@email.at"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary placeholder:text-secondary-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1.5">Betreff *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="fussbodenheizung">Fußbodenheizung</option>
                      <option value="waermepumpe">Wärmepumpe</option>
                      <option value="fliesen">Fliesen</option>
                      <option value="bad-sanitaer">Bad & Sanitär</option>
                      <option value="allgemein">Allgemeine Anfrage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">Nachricht *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary placeholder:text-secondary-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} aria-hidden="true" />
                    Nachricht senden
                  </button>

                  <p className="text-xs text-secondary-light">
                    Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
