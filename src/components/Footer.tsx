import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/50" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="/images/logo-sm.webp" alt="SYMPATHERM" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Ihr Partner für Heizung, Fliesen, Bad und Sanitär seit 1974. Beratung, Planung und Ausführung aus einer Hand.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading text-lg text-white mb-5">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://maps.google.com/?q=ARED-Straße+24+2544+Leobersdorf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/50 hover:text-white transition-colors">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                  ARED-Straße 24<br />A-2544 Leobersdorf
                </a>
              </li>
              <li>
                <a href="tel:+43225665080" className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors">
                  <Phone size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  02256 65080
                </a>
              </li>
              <li>
                <a href="mailto:office@sympatherm.at" className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors">
                  <Mail size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  office@sympatherm.at
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/50">
                <Clock size={16} className="shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                <span>Mo–Fr: 08:00–12:00<br />Mo–Fr: 13:00–18:00</span>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-heading text-lg text-white mb-5">Leistungen</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/fussbodenheizung" className="text-white/50 hover:text-white transition-colors">Fußbodenheizung</Link></li>
              <li><Link to="/waermepumpen" className="text-white/50 hover:text-white transition-colors">Wärmepumpen</Link></li>
              <li><Link to="/fliesen" className="text-white/50 hover:text-white transition-colors">Fliesen</Link></li>
              <li><Link to="/bad-sanitaer" className="text-white/50 hover:text-white transition-colors">Bad & Sanitär</Link></li>
            </ul>
          </div>

          {/* Schnelllinks */}
          <div>
            <h3 className="font-heading text-lg text-white mb-5">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/unternehmen" className="text-white/50 hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/projekte" className="text-white/50 hover:text-white transition-colors">Projekte</Link></li>
              <li><Link to="/kontakt" className="text-white/50 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} SYMPATHERM Handelsgesellschaft mbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
