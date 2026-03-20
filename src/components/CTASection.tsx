import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

interface Props {
  title?: string
  description?: string
}

export default function CTASection({ title = 'Bereit für Ihr Projekt?', description = 'Kontaktieren Sie uns für eine persönliche Beratung. Wir freuen uns auf Ihre Anfrage.' }: Props) {
  return (
    <section className="border-t border-border bg-warm">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 py-24 lg:py-32 text-center">
        <h2 className="font-heading text-3xl lg:text-5xl text-secondary mb-5">{title}</h2>
        <p className="font-body text-lg text-secondary-light max-w-xl mx-auto mb-10 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kontakt"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 text-base"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <a
            href="tel:+43225665080"
            className="inline-flex items-center justify-center gap-2 border-2 border-secondary/20 text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-base"
          >
            <Phone size={18} aria-hidden="true" />
            02256 65080
          </a>
        </div>
      </div>
    </section>
  )
}
