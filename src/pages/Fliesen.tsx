import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { X } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const categories = [
  {
    title: 'Wand- & Bodenfliesen',
    text: 'Klassisch, retro, Stein- oder Holzoptik – für jeden Raum und Geschmack.',
    image: '/images/fliesen/boost-dune-living.webp',
  },
  {
    title: 'Mosaik',
    text: 'Faszinierende Gestaltungsmöglichkeiten für Bad und Küche.',
    image: '/images/fliesen/boost-mint.webp',
  },
  {
    title: 'Naturstein-Optik',
    text: 'Edle Marmorierung und Naturstein-Optik für exklusive Räume.',
    image: '/images/fliesen/marvel-skystone.webp',
  },
  {
    title: 'Sonderformate',
    text: 'Großformate, extradünne Fliesen und kreative Verlegemuster.',
    image: '/images/fliesen/marvel-navona-kitchen.webp',
  },
]

const galleryImages = [
  { src: '/images/fliesen/marvel-halowhite.webp', alt: 'Marmor-Bad mit Doppelwaschtisch', cls: 'md:col-span-2 aspect-[21/10]' },
  { src: '/images/fliesen/boost-tarmac.webp', alt: 'Esszimmer mit dunklen Steinfliesen', cls: 'aspect-[4/3]' },
  { src: '/images/fliesen/boost-cream-outdoor.webp', alt: 'Poolterrasse mit Cream-Fliesen', cls: 'aspect-[4/3]' },
  { src: '/images/fliesen/marvel-onespace.webp', alt: 'Fliesen-Sortiment Showroom', cls: 'aspect-[4/3]' },
  { src: '/images/fliesen/boost-cream-sun.webp', alt: 'Helle Fliesen im Wohnbereich', cls: 'aspect-[4/3]' },
  { src: '/images/fliesen/impronta-lobby.webp', alt: 'Hotel-Lobby mit Großformat-Fliesen', cls: 'md:col-span-3 aspect-[21/9]' },
]

const brands = [
  { name: 'Atlas Concorde', description: 'Italienische Premium-Fliesen seit 1969. Marmor-, Stein- und Designoptiken in höchster Qualität.' },
  { name: 'Impronta', description: 'Innovatives Design aus der Emilgroup. Beton-, Schiefer- und Holzoptiken für moderne Räume.' },
  { name: 'Edimax', description: 'Handwerkliche Qualität und zeitlose Eleganz. Charme-Kollektion mit glasierten Wandfliesen.' },
  { name: 'Naxos', description: 'Feinsteinzeug mit mediterranem Charakter. Warme Farben und natürliche Texturen.' },
  { name: 'Saime', description: 'Technische Keramik für höchste Ansprüche. Frost- und rutschfeste Lösungen.' },
  { name: 'Cevica', description: 'Spanische Wandfliesen mit Handglasur-Charakter. Perfekt für individuelle Akzente.' },
]

export default function Fliesen() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const brandsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const galleryItems = document.querySelectorAll('.gallery-item')
    gsap.set(galleryItems, { opacity: 0, y: 40, scale: 0.97 })
    const galleryObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(galleryItems,
            { opacity: 0, y: 40, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
          )
          galleryObs.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (galleryRef.current) galleryObs.observe(galleryRef.current)

    const brandCards = document.querySelectorAll('.brand-card')
    gsap.set(brandCards, { opacity: 0, y: 30 })
    const brandsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(brandCards,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
          )
          brandsObs.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (brandsRef.current) brandsObs.observe(brandsRef.current)

    return () => { galleryObs.disconnect(); brandsObs.disconnect() }
  }, [])

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <PageHero
        title="Fliesen Store – Form, Farbe & Funktion"
        description="Hochwertige Wand- und Bodenfliesen in unserem 300 m² Schauraum in Leobersdorf. Über 6 Premium-Marken."
        image="/images/fliesen/nyra-star.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Leistungen', path: '/' },
          { label: 'Fliesen Store' },
        ]}
      />

      {/* Categories with images */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Sortiment</span>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] text-secondary mb-4 tracking-tight">Unser Fliesensortiment</h2>
            <p className="text-lg text-secondary-light leading-relaxed">
              Das Spiel mit Form, Farbe und Größe – für alle Räume überzeugende Gestaltungsmöglichkeiten. Egal ob klassisch, retro, Steinoptik, Holzoptik oder Landhaus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl min-h-[240px] lg:min-h-[280px]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-secondary/10 group-hover:from-secondary/70 transition-all duration-500" />
                <div className="relative h-full p-7 flex flex-col justify-end">
                  <h3 className="font-heading text-xl lg:text-2xl text-white mb-2 tracking-tight">{cat.title}</h3>
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed">{cat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Inspiration</span>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] text-secondary mb-4 tracking-tight">Fliesen in Ihrem Zuhause</h2>
            <p className="text-lg text-secondary-light leading-relaxed">
              Ob Bäder, Küchen, Wohnräume oder Außenbereiche – unsere Vielfalt an Fliesen, Feinsteinzeug und Mosaik lässt keine Wünsche offen.
            </p>
          </div>
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item group overflow-hidden rounded-xl cursor-pointer ${img.cls}`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Marken</span>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] text-secondary mb-4 tracking-tight">Unsere Partner-Hersteller</h2>
            <p className="text-lg text-secondary-light leading-relaxed">
              Wir führen ausschließlich Fliesen renommierter europäischer Hersteller. Überzeugen Sie sich persönlich in unserem Schauraum.
            </p>
          </div>
          <div ref={brandsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, i) => (
              <div key={i} className="brand-card p-6 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="font-heading text-lg text-secondary mb-2">{brand.name}</h3>
                <p className="text-sm text-secondary-light leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl text-white mb-1">300 m²</div>
              <div className="text-white/50 text-sm">Schauraum in Leobersdorf</div>
            </div>
            <div>
              <div className="font-heading text-3xl text-white mb-1">6+</div>
              <div className="text-white/50 text-sm">Premium-Hersteller</div>
            </div>
            <div>
              <div className="font-heading text-3xl text-white mb-1">5–6 t</div>
              <div className="text-white/50 text-sm">Fliesen pro Tag</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Besuchen Sie unseren Fliesen-Schauraum"
        description="Überzeugen Sie sich persönlich von unserer großen Auswahl an hochwertigen Wand- und Bodenfliesen. Wir beraten Sie gerne."
      />
    </>
  )
}
