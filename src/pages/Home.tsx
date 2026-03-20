import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Fußbodenheizung',
    description: 'Eigene Systeme für Neubau & Sanierung.',
    path: '/fussbodenheizung',
    image: '/images/systems/sympafloor.webp',
  },
  {
    title: 'Wärmepumpen',
    description: 'Effizient heizen mit Umweltenergie.',
    path: '/waermepumpen',
    image: '/images/products/idm-ipump.webp',
  },
  {
    title: 'Fliesen',
    description: 'Wand- & Bodenfliesen für jeden Stil.',
    path: '/fliesen',
    image: '/images/systems/verteiler.webp',
  },
  {
    title: 'Bad & Sanitär',
    description: 'Planung & Ausführung aus einer Hand.',
    path: '/bad-sanitaer',
    image: '/images/products/idm-hygienik.webp',
  },
]

const stats = [
  { value: '40.000 m²', label: 'Fußbodenheizung pro Jahr' },
  { value: '5–6 t', label: 'Fliesen pro Tag' },
  { value: '200+', label: 'Sanierte Bäder pro Jahr' },
  { value: 'Seit 1974', label: 'Im Geschäft' },
]

const heroSlides = [
  '/images/products/idm-ipump.webp',
  '/images/products/idm-aero-alm.webp',
  '/images/products/daikin-epsk.webp',
  '/images/products/idm-hygienik.webp',
]

const partners = ['iDM', 'Daikin', 'Kaldewei', 'Villeroy & Boch', 'Grohe', 'Geberit']

const projects = [
  { src: '/images/projects/daikin-wien.webp', title: 'Wärmepumpe Wien', label: 'Wien' },
  { src: '/images/projects/idm-laxenburg.webp', title: 'iDM iPump Laxenburg', label: 'Laxenburg' },
  { src: '/images/projects/idm-guntramsdorf.webp', title: 'Wärmepumpe Guntramsdorf', label: 'Guntramsdorf' },
  { src: '/images/projects/daikin-ebreichsdorf.webp', title: 'Daikin Ebreichsdorf', label: 'Ebreichsdorf' },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Hero entrance — text column
    gsap.fromTo('.hero-text > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    )

    // Hero entrance — image column
    gsap.fromTo('.hero-image',
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.5 }
    )

    // Hero entrance — floating card
    gsap.fromTo('.hero-float-card',
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', delay: 1.0 }
    )

    // Hero stats strip
    gsap.fromTo('.hero-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 1.2 }
    )

    // Services scroll animation
    const serviceCards = document.querySelectorAll('.service-card')
    gsap.set(serviceCards, { opacity: 0, y: 50 })
    const servicesObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(serviceCards, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' })
          servicesObs.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (servicesRef.current) servicesObs.observe(servicesRef.current)

    // About scroll animation
    const aboutContent = document.querySelectorAll('.about-animate')
    gsap.set(aboutContent, { opacity: 0, y: 40 })
    const aboutObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(aboutContent, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
          aboutObs.disconnect()
        }
      })
    }, { threshold: 0.15 })
    if (aboutRef.current) aboutObs.observe(aboutRef.current)

    // Projects scroll animation
    const projectCards = document.querySelectorAll('.project-card')
    gsap.set(projectCards, { opacity: 0, y: 40 })
    const projectsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(projectCards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' })
          projectsObs.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (projectsRef.current) projectsObs.observe(projectsRef.current)

    // Partners scroll animation
    const partnerItems = document.querySelectorAll('.partner-item')
    gsap.set(partnerItems, { opacity: 0, y: 20 })
    const partnersObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(partnerItems, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' })
          partnersObs.disconnect()
        }
      })
    }, { threshold: 0.2 })
    if (partnersRef.current) partnersObs.observe(partnersRef.current)

    return () => { servicesObs.disconnect(); aboutObs.disconnect(); projectsObs.disconnect(); partnersObs.disconnect() }
  }, [])

  // Hero slideshow timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="min-h-screen bg-bg flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-6 w-full py-24 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left column — text */}
              <div className="lg:col-span-7 hero-text">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
                  Ihr Partner seit 1974
                </p>

                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-secondary leading-[1.05]">
                  Heizung,<br />
                  Fliesen,<br />
                  <span className="text-primary">Bad & Sanitär</span>
                </h1>

                <p className="font-body text-lg text-secondary-light mt-6 max-w-md leading-relaxed">
                  Beratung, Planung und Ausführung aus einer Hand.
                  Ihr zuverlässiger Partner im Bezirk Baden.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                  <Link
                    to="/kontakt"
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                  >
                    Jetzt Beratung anfordern
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/unternehmen"
                    className="group inline-flex items-center gap-2 text-secondary-light hover:text-secondary font-medium text-base transition-colors duration-300"
                  >
                    Schauraum besuchen
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Right column — image slideshow */}
              <div className="lg:col-span-5 relative hero-image">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 aspect-[3/4]">
                    {heroSlides.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt="SYMPATHERM"
                        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out ${i === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        width={600}
                        height={800}
                        fetchPriority={i === 0 ? 'high' : undefined}
                      />
                    ))}
                  </div>

                  {/* Slide indicators */}
                  <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-white w-6' : 'bg-white/40'}`}
                        aria-label={`Bild ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Floating accent card */}
                  <div className="hero-float-card absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg border border-border">
                    <div className="font-heading text-2xl text-primary">50+</div>
                    <div className="font-body text-sm text-secondary-light">Jahre Erfahrung</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="border-t border-border">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {[
              { val: '40.000 m²', lbl: 'Fußbodenheizung / Jahr' },
              { val: '5–6 t', lbl: 'Fliesen / Tag' },
              { val: '200+', lbl: 'Sanierte Bäder / Jahr' },
              { val: '50+', lbl: 'Jahre Erfahrung' },
            ].map((s, i) => (
              <div key={i} className="hero-stat text-center">
                <div className="font-heading text-2xl text-secondary">{s.val}</div>
                <div className="font-body text-xs text-secondary-light mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section ref={servicesRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="mb-14">
            <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              Was wir tun
            </span>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] text-secondary mb-4 tracking-tight">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-secondary-light max-w-md leading-relaxed">
              Vier Kernbereiche, ein Ansprechpartner — von der ersten Beratung bis zur fertigen Ausführung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <Link
                key={service.path}
                to={service.path}
                className="service-card group relative overflow-hidden rounded-xl min-h-[280px] lg:min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-secondary/20 group-hover:from-secondary/70 group-hover:via-secondary/30 transition-all duration-500" />

                <div className="relative h-full p-7 lg:p-8 flex flex-col justify-end">
                  <span className="font-heading text-6xl text-white/15 leading-none mb-3 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4 group-hover:gap-3 transition-all duration-300">
                    Mehr erfahren <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section ref={aboutRef} className="py-24 lg:py-32 bg-bg">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-animate">
              <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                Über uns
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-6 tracking-tight">
                Kompetenz seit<br />über 50 Jahren
              </h2>
              <p className="text-lg text-secondary-light leading-relaxed mb-8">
                Seit 1974 verbinden wir bei SYMPATHERM Handel und Dienstleistung auf höchstem Niveau.
                Mit 12 Mitarbeitern und einem 300 m² Schauraum in Leobersdorf betreuen wir Privat- und
                Gewerbekunden — von der Beratung über die Planung bis zur Ausführung.
              </p>
              <Link
                to="/unternehmen"
                className="group inline-flex items-center gap-2 text-primary font-semibold"
              >
                Mehr über uns
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="about-animate grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="font-heading text-3xl lg:text-4xl text-primary mb-1">{stat.value}</div>
                  <div className="text-secondary-light text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section ref={projectsRef} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-[#141210]" />

        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div>
              <span className="text-primary/80 font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                Referenzen
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-white tracking-tight">
                Ausgewählte Projekte
              </h2>
            </div>
            <Link
              to="/projekte"
              className="group inline-flex items-center gap-2 text-white/50 hover:text-white font-medium mt-4 lg:mt-0 transition-colors"
            >
              Alle Projekte ansehen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <Link to="/projekte" key={i} className="project-card group relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={400}
                  height={533}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{p.title}</p>
                  <p className="text-white/40 text-xs mt-0.5">{p.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section ref={partnersRef} className="py-16 lg:py-20 bg-warm">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <p className="text-center text-secondary-light font-body text-xs uppercase tracking-[0.2em] mb-8">
            Unsere Partner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <span
                key={partner}
                className="partner-item font-heading text-2xl text-secondary/20 hover:text-secondary/50 transition-colors duration-300 cursor-default select-none"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection />
    </>
  )
}
