import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Fußbodenheizung', path: '/fussbodenheizung' },
  { name: 'Wärmepumpen', path: '/waermepumpen' },
  { name: 'Fliesen', path: '/fliesen' },
  { name: 'Bad & Sanitär', path: '/bad-sanitaer' },
]

const navLinks = [
  { name: 'Unternehmen', path: '/unternehmen' },
  { name: 'Projekte', path: '/projekte' },
  { name: 'Kontakt', path: '/kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowServices(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar - always white, full-width */}
      <nav
        className={`w-full bg-white border-b border-border transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        aria-label="Hauptnavigation"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="z-10" aria-label="SYMPATHERM Startseite">
            <span className="font-body font-bold tracking-[0.15em] text-[17px] text-secondary">
              SYMPATHERM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium font-body transition-colors ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-secondary-light hover:text-secondary'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium font-body transition-colors ${
                  services.some(s => location.pathname === s.path)
                    ? 'text-primary'
                    : 'text-secondary-light hover:text-secondary'
                }`}
                aria-expanded={showServices}
                aria-haspopup="true"
              >
                Leistungen
                <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-3 transition-all duration-300 ${showServices ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'}`}>
                <div className="bg-white rounded-lg shadow-xl shadow-black/[0.08] border border-border py-2 min-w-[220px]">
                  {services.map(s => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === s.path
                          ? 'text-primary bg-primary/5'
                          : 'text-secondary-light hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium font-body transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-secondary-light hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/kontakt"
              className="ml-4 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold font-body hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 transition-all"
            >
              Jetzt anfragen
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-10 p-2 -mr-2 text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - solid white, full screen */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="pt-28 px-6 pb-8 h-full overflow-y-auto">
          <div className="flex flex-col">
            <Link to="/" className={`py-3.5 text-lg font-medium font-body border-b border-border ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>
              Home
            </Link>

            <div className="border-b border-border">
              <button
                onClick={() => setShowServices(!showServices)}
                className={`flex items-center justify-between w-full py-3.5 text-lg font-medium font-body ${
                  services.some(s => location.pathname === s.path) ? 'text-primary' : 'text-secondary'
                }`}
              >
                Leistungen
                <ChevronDown size={18} className={`transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${showServices ? 'max-h-60 mb-2' : 'max-h-0'}`}>
                {services.map(s => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className={`block py-2.5 pl-4 transition-colors ${
                      location.pathname === s.path ? 'text-primary' : 'text-secondary-light hover:text-primary'
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3.5 text-lg font-medium font-body border-b border-border ${
                  location.pathname === link.path ? 'text-primary' : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/kontakt" className="block w-full bg-primary text-white text-center py-4 rounded-lg font-semibold font-body text-lg">
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
