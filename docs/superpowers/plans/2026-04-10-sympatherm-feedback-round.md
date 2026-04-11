# Sympatherm Feedback Round — April 10 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix homepage service card images (Fliesen + Bad & Sanitär), redesign the Fliesen page with image galleries from client materials, fix Bad & Sanitär hero, add project detail subpages (blog-style), and fix text references.

**Architecture:** Content-driven update — convert client tile/bathroom images to WebP, swap wrong images on homepage and subpage heroes, rebuild Fliesen page with visual gallery sections per brand/category (matching old site's Fliesen Store feel), add dynamic project detail routes with `/projekte/:slug` pattern, fix location text from "Baden" to "Leobersdorf".

**Tech Stack:** React + TypeScript, React Router (dynamic routes), WebP conversion via cwebp, GSAP scroll animations

---

## File Structure

**New files:**
- `site/public/images/fliesen/` — 12 converted WebP tile ambient images
- `site/public/images/bad/` — 2 converted WebP bathroom images
- `site/src/pages/ProjektDetail.tsx` — Individual project detail page
- `site/src/data/projects.ts` — Project data extracted for reuse

**Modified files:**
- `site/src/pages/Home.tsx` — Fix service card images for Fliesen (#3) and Bad & Sanitär (#4), fix "Bezirk Baden" text
- `site/src/pages/Fliesen.tsx` — Full redesign with image galleries, brand sections, hero image swap
- `site/src/pages/BadSanitaer.tsx` — Hero image swap, add bathroom gallery images
- `site/src/pages/Projekte.tsx` — Link cards to individual project pages
- `site/src/App.tsx` — Add `/projekte/:slug` route

---

## Image Selection Map

From the `anpassungen10april/Unterlagen für Homepage/Fliesen/` materials, these Atlas Concorde ambient images were selected:

| Image file | Use | Why |
|---|---|---|
| `Nyra_001_00_Star.tif.jpeg` | Homepage Fliesen card + Fliesen hero | Open dining area, stone floor tiles, wide/dramatic |
| `MarvelDiva_007_00_Tajmahal_Wall.tif.jpeg` | Homepage Bad & Sanitär card | Stunning marble bathroom, glass shower, dual sinks |
| `BoostStone_002_00_Ivory.tif.jpeg` | Bad & Sanitär page hero | Modern bathroom, bathtub, pendant lights |
| `MarvelT_004_01_HaloWhite.tif.jpeg` | Fliesen gallery — Bathroom | White marble bathroom with double vanity |
| `MarvelT_006_02_NavonaWhite.tif.jpeg` | Fliesen gallery — Kitchen | Kitchen with herringbone wood floor + stone walls |
| `BoostColor_006_01_Mint.tif.jpeg` | Fliesen gallery — Color tiles | Mint green tiled bathroom, eye-catching |
| `BoostStone_005_04_Tarmac-Smoke.tif.jpeg` | Fliesen gallery — Dark/mood | Dark stone dining room |
| `MarvelDiva_002a_00_SkyStone_Silk.tif.jpeg` | Fliesen gallery — Showroom | Luxury green marble showroom |
| `BoostStone_008_02_Cream-Ivory.tif.jpeg` | Fliesen gallery — Outdoor | Pool terrace with cream tiles |
| `BoostIcor_001_04_Dune_FurnaceDune.tif.jpeg` | Fliesen gallery — Living | Luxury open living with stone floor |
| `MarvelT_000_01_ OneSpace.tif.jpeg` | Fliesen gallery — Sortiment | Tile display/showroom setup |
| `Impronta/AMB_SUPREME_JPEG_MR/IMPRONTA_magnetica_Lobby hotel 1.jpg` | Fliesen gallery — Hotel/commercial | Hotel lobby with large format tiles |

---

### Task 1: Convert images to WebP and add to public

**Files:**
- Create: `site/public/images/fliesen/*.webp` (12 files)
- Create: `site/public/images/bad/*.webp` (2 files)

Source directory: `/Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/anpassungen10april/Unterlagen für Homepage/Fliesen/`

- [ ] **Step 1: Create output directories**

```bash
mkdir -p /Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/site/public/images/fliesen
mkdir -p /Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/site/public/images/bad
```

- [ ] **Step 2: Convert the 12 Fliesen images to WebP**

```bash
SRC="/Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/anpassungen10april/Unterlagen für Homepage/Fliesen"
OUT="/Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/site/public/images/fliesen"

/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_Nyra_001_00_Star.tif.jpeg" -o "$OUT/nyra-star.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelT_004_01_HaloWhite.tif.jpeg" -o "$OUT/marvel-halowhite.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelT_006_02_NavonaWhite_NavonaWhiteLine_LogIconOak.tif.jpeg" -o "$OUT/marvel-navona-kitchen.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostColor_006_01_Mint-3DPleatJade-FrogPure_BoostBalance_Pure.tif.jpeg" -o "$OUT/boost-mint.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostStone_005_04_Tarmac-Smoke.tif.jpeg" -o "$OUT/boost-tarmac.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelDiva_002a_00_SkyStone_Silk.tif.jpeg" -o "$OUT/marvel-skystone.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostStone_008_02_Cream-Ivory.tif.jpeg" -o "$OUT/boost-cream-outdoor.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostIcor_001_04_Dune_FurnaceDune.tif.jpeg" -o "$OUT/boost-dune-living.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelT_000_01_ OneSpace.tif.jpeg" -o "$OUT/marvel-onespace.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelDiva_007_00_Tajmahal_Wall.tif.jpeg" -o "$OUT/marvel-tajmahal-bad.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostColor_004_00_Cream-Sun_BoostBalance_Cream.tif.jpeg" -o "$OUT/boost-cream-sun.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Impronta/AMB_SUPREME_JPEG_MR/IMPRONTA_magnetica_Lobby hotel 1.jpg" -o "$OUT/impronta-lobby.webp"
```

- [ ] **Step 3: Convert the 2 Bad images to WebP**

```bash
SRC="/Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/anpassungen10april/Unterlagen für Homepage/Fliesen"
OUT="/Users/nilswesch/Desktop/claude_projects/work/websites/Sympatherm/site/public/images/bad"

/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_BoostStone_002_00_Ivory.tif.jpeg" -o "$OUT/bad-modern.webp"
/opt/homebrew/bin/cwebp -q 80 "$SRC/Atlas Concorde/AtlasConcorde_MarvelDiva_007_00_Tajmahal_Wall.tif.jpeg" -o "$OUT/bad-marble.webp"
```

- [ ] **Step 4: Verify all files exist**

```bash
ls -la site/public/images/fliesen/ && ls -la site/public/images/bad/
```

Expected: 12 WebP files in fliesen/, 2 in bad/

---

### Task 2: Fix Homepage service cards + location text

**Files:**
- Modify: `site/src/pages/Home.tsx:7-31` (services array) and line 215 ("Bezirk Baden")

- [ ] **Step 1: Fix Fliesen service card image**

In `Home.tsx`, change the `services` array entry for Fliesen (index 2):

```typescript
// OLD
image: '/images/systems/verteiler.webp',
// NEW
image: '/images/fliesen/nyra-star.webp',
```

- [ ] **Step 2: Fix Bad & Sanitär service card image**

In `Home.tsx`, change the `services` array entry for Bad & Sanitär (index 3):

```typescript
// OLD
image: '/images/products/idm-hygienik.webp',
// NEW
image: '/images/bad/bad-marble.webp',
```

- [ ] **Step 3: Fix location text**

In `Home.tsx` line 215, change:

```typescript
// OLD
Ihr zuverlässiger Partner im Bezirk Baden.
// NEW
Ihr zuverlässiger Partner in Leobersdorf.
```

- [ ] **Step 4: Verify in browser**

Open http://localhost:5177/ and confirm:
- Service card #3 "Fliesen" shows a tile room image (dining area with stone floor)
- Service card #4 "Bad & Sanitär" shows a marble bathroom with glass shower
- Hero text says "Leobersdorf" not "Bezirk Baden"

- [ ] **Step 5: Commit**

```bash
git add site/public/images/fliesen/ site/public/images/bad/ site/src/pages/Home.tsx
git commit -m "fix: swap homepage service card images for Fliesen + Bad & Sanitär, fix location to Leobersdorf"
```

---

### Task 3: Redesign Fliesen page with image galleries

**Files:**
- Modify: `site/src/pages/Fliesen.tsx` — full rewrite

The Fliesen page currently has icon cards + accordion — no images at all. The old sympatherm.at Fliesen Store page has a rich image grid showing tiles in real rooms. Redesign to match that feel.

New structure:
1. PageHero with proper tile image
2. "Unser Sortiment" — 4 category cards WITH images (not just icons)
3. "Fliesen in Ihrem Zuhause" — Full-width image gallery grid showing tiles in rooms (kitchen, bath, living, outdoor)
4. Brand showcase section (Atlas Concorde, Impronta, etc.)
5. CTA section

- [ ] **Step 1: Rewrite Fliesen.tsx**

Replace the entire file content:

```tsx
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { ArrowRight } from 'lucide-react'

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
  { src: '/images/fliesen/marvel-halowhite.webp', alt: 'Marmor-Bad mit Doppelwaschtisch', span: 'md:col-span-2' },
  { src: '/images/fliesen/boost-tarmac.webp', alt: 'Esszimmer mit dunklen Steinfliesen', span: '' },
  { src: '/images/fliesen/boost-cream-outdoor.webp', alt: 'Poolterrasse mit Cream-Fliesen', span: '' },
  { src: '/images/fliesen/marvel-onespace.webp', alt: 'Fliesen-Sortiment Showroom', span: 'md:col-span-2' },
  { src: '/images/fliesen/impronta-lobby.webp', alt: 'Hotel-Lobby mit Großformat-Fliesen', span: '' },
  { src: '/images/fliesen/boost-cream-sun.webp', alt: 'Helle Fliesen im Wohnbereich', span: '' },
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
  const galleryRef = useRef<HTMLDivElement>(null)
  const brandsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Gallery scroll animation
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

    // Brands scroll animation
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

  return (
    <>
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
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`gallery-item group overflow-hidden rounded-xl ${img.span}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
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
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:5177/fliesen and confirm:
- Hero shows the Nyra Star tile image (open dining area)
- 4 category cards each have a proper tile room photo
- Gallery section shows 6 images in a responsive grid (2 wide + 4 regular)
- Brand section shows 6 partner cards
- Stats strip and CTA at bottom

- [ ] **Step 3: Commit**

```bash
git add site/src/pages/Fliesen.tsx
git commit -m "feat: redesign Fliesen page with image galleries, brand showcase, and proper hero"
```

---

### Task 4: Fix Bad & Sanitär page hero + add images

**Files:**
- Modify: `site/src/pages/BadSanitaer.tsx` — swap hero image, add bathroom gallery

- [ ] **Step 1: Update hero image**

Change the PageHero `image` prop:

```typescript
// OLD
image="/images/products/idm-hygienik.webp"
// NEW
image="/images/bad/bad-modern.webp"
```

- [ ] **Step 2: Add a bathroom gallery section between Steps and Accordion**

After the "Von der Idee zum Traumbad" steps section (around line 70), add a gallery section showing actual bathrooms:

```tsx
{/* Bathroom Gallery */}
<section className="py-20 lg:py-28 bg-white border-t border-border">
  <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
    <div className="max-w-2xl mb-14">
      <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">Inspiration</span>
      <h2 className="font-heading text-3xl lg:text-[2.75rem] text-secondary mb-4 tracking-tight">Badezimmer-Welten</h2>
      <p className="text-lg text-secondary-light leading-relaxed">
        Von modern-minimalistisch bis klassisch-elegant – lassen Sie sich von unseren realisierten Projekten inspirieren.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="overflow-hidden rounded-xl">
        <img src="/images/bad/bad-marble.webp" alt="Marmor-Badezimmer mit Regendusche" className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
      <div className="overflow-hidden rounded-xl">
        <img src="/images/bad/bad-modern.webp" alt="Modernes Bad mit freistehender Badewanne" className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Open http://localhost:5177/bad-sanitaer and confirm:
- Hero shows the Ivory bathroom image (bathtub, pendant lights)
- Gallery section shows 2 bathroom images between steps and accordion

- [ ] **Step 4: Commit**

```bash
git add site/src/pages/BadSanitaer.tsx
git commit -m "fix: swap Bad & Sanitär hero to bathroom image, add bathroom gallery section"
```

---

### Task 5: Extract project data to shared module

**Files:**
- Create: `site/src/data/projects.ts`
- Modify: `site/src/pages/Projekte.tsx` — import from data module

- [ ] **Step 1: Create project data file**

```typescript
// site/src/data/projects.ts

export interface Project {
  slug: string
  src: string
  title: string
  category: string
  location: string
  description: string
  details?: string[]
}

export const projects: Project[] = [
  {
    slug: 'waermepumpe-wien',
    src: '/images/projects/daikin-wien.webp',
    title: 'Wärmepumpe Wien',
    category: 'Wärmepumpen',
    location: '1100 Wien',
    description: 'Daikin Luft-Wasser-Wärmepumpe für ein Mehrfamilienhaus.',
    details: [
      'Daikin Altherma Luft-Wasser-Wärmepumpe',
      'Mehrfamilienhaus in Wien, 1100',
      'Effiziente Heizlösung für mehrere Wohneinheiten',
    ],
  },
  {
    slug: 'idm-ipump-laxenburg',
    src: '/images/projects/idm-laxenburg.webp',
    title: 'iDM iPump Laxenburg',
    category: 'Wärmepumpen',
    location: 'Laxenburg',
    description: 'iDM iPump A-3-11 Luft-Wärmepumpe für ein Einfamilienhaus.',
    details: [
      'iDM iPump A-3-11 Luft-Wärmepumpe',
      'Einfamilienhaus in Laxenburg',
      'Kombiniert mit SYMPATHERM Fußbodenheizung',
    ],
  },
  {
    slug: 'idm-alm-neufeld',
    src: '/images/projects/idm-neufeld.webp',
    title: 'iDM ALM Neufeld',
    category: 'Wärmepumpen',
    location: 'Neufeld',
    description: 'iDM ALM 10-24 Großwärmepumpe für Gewerbeobjekt.',
    details: [
      'iDM ALM 10-24 Großwärmepumpe',
      'Gewerbeobjekt in Neufeld',
      'Leistungsstarke Lösung für große Flächen',
    ],
  },
  {
    slug: 'idm-ipump-guntramsdorf',
    src: '/images/projects/idm-guntramsdorf.webp',
    title: 'iDM iPump Guntramsdorf',
    category: 'Wärmepumpen',
    location: 'Guntramsdorf',
    description: 'iDM iPump ALM 4-12 für Neubau mit Fußbodenheizung.',
    details: [
      'iDM iPump ALM 4-12',
      'Neubau-Einfamilienhaus in Guntramsdorf',
      'Integriert mit SYMPATHERM Fußbodenheizungssystem',
    ],
  },
  {
    slug: 'daikin-ebreichsdorf',
    src: '/images/projects/daikin-ebreichsdorf.webp',
    title: 'Daikin Ebreichsdorf',
    category: 'Wärmepumpen',
    location: 'Ebreichsdorf',
    description: 'Daikin Altherma Wärmepumpe für Altbausanierung.',
    details: [
      'Daikin Altherma Erga Wärmepumpe',
      'Altbausanierung in Ebreichsdorf',
      'Energieeffiziente Modernisierung des Heizsystems',
    ],
  },
  {
    slug: 'ipump-leobersdorf',
    src: '/images/projects/idm-leobersdorf.webp',
    title: 'iPump Leobersdorf',
    category: 'Wärmepumpen',
    location: 'Leobersdorf',
    description: 'iDM iPump ALM 4-12 mit System SYMPATHERM Fußbodenheizung.',
    details: [
      'iDM iPump ALM 4-12',
      'Einfamilienhaus in Leobersdorf',
      'Kombination aus Wärmepumpe und SYMPATHERM Fußbodenheizung',
    ],
  },
  {
    slug: 'idm-slm-leopoldsdorf',
    src: '/images/projects/idm-leopoldsdorf.webp',
    title: 'iDM SLM Leopoldsdorf',
    category: 'Wärmepumpen',
    location: 'Leopoldsdorf',
    description: 'iDM SLM 3-11 Sole-Wärmepumpe mit Erdkollektor.',
    details: [
      'iDM SLM 3-11 Sole-Wärmepumpe',
      'Erdkollektor-System in Leopoldsdorf',
      'Hocheffiziente Erdwärme-Nutzung',
    ],
  },
  {
    slug: 'idm-alm-margarethen',
    src: '/images/projects/idm-margarethen.webp',
    title: 'iDM ALM Margarethen',
    category: 'Wärmepumpen',
    location: 'Margarethen',
    description: 'iDM ALM 4-12 Luft-Wärmepumpe für Sanierungsprojekt.',
    details: [
      'iDM ALM 4-12 Luft-Wärmepumpe',
      'Sanierungsprojekt in Margarethen',
      'Umstieg von Gasheizung auf Wärmepumpe',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
```

- [ ] **Step 2: Commit**

```bash
git add site/src/data/projects.ts
git commit -m "feat: extract project data to shared module with slugs and details"
```

---

### Task 6: Create project detail page

**Files:**
- Create: `site/src/pages/ProjektDetail.tsx`

- [ ] **Step 1: Create the detail page component**

```tsx
// site/src/pages/ProjektDetail.tsx
import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Tag } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'
import CTASection from '../components/CTASection'

export default function ProjektDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projekte" replace />

  return (
    <>
      {/* Hero with project image */}
      <section className="relative overflow-hidden bg-secondary">
        <img
          src={project.src}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/40" />

        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Projekte
          </Link>
          <h1 className="font-heading text-3xl lg:text-5xl text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <Tag size={14} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={14} />
              {project.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main image */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Details sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-secondary mb-4">Projektdetails</h2>
              <p className="text-secondary-light leading-relaxed mb-6">{project.description}</p>

              {project.details && (
                <ul className="space-y-3">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm mt-8 hover:bg-primary-dark transition-colors"
              >
                Ähnliches Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add site/src/pages/ProjektDetail.tsx
git commit -m "feat: add project detail page with hero, image, and details sidebar"
```

---

### Task 7: Update Projekte page to link to detail pages + add route

**Files:**
- Modify: `site/src/pages/Projekte.tsx` — use shared data, link to detail pages
- Modify: `site/src/App.tsx` — add `/projekte/:slug` route

- [ ] **Step 1: Rewrite Projekte.tsx to use shared data and link to subpages**

```tsx
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

export default function Projekte() {
  return (
    <>
      <PageHero
        title="Unsere Projekte"
        description="Ausgewählte Referenzen aus den Bereichen Wärmepumpen, Fußbodenheizung und Badsanierung."
        image="/images/projects/daikin-wien.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Projekte' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projekte/${project.slug}`}
                className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
                  <h3 className="font-bold text-secondary mt-1 mb-1">{project.title}</h3>
                  <p className="text-sm text-secondary-light mb-2">{project.location}</p>
                  <p className="text-sm text-secondary-light leading-relaxed mb-3">{project.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    Details ansehen <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Add route to App.tsx**

Add lazy import and route for ProjektDetail:

```typescript
// Add after line 12 (after Projekte import)
const ProjektDetail = lazy(() => import('./pages/ProjektDetail'))

// Add route after the /projekte route (after line 43)
<Route path="/projekte/:slug" element={<Suspense fallback={<Loading />}><ProjektDetail /></Suspense>} />
```

- [ ] **Step 3: Update Home.tsx project cards to link to detail pages**

In `Home.tsx`, update the projects array (around line 48) to include slugs, and update the Link `to` prop to use `/projekte/${p.slug}`:

```typescript
const projects = [
  { src: '/images/projects/daikin-wien.webp', title: 'Wärmepumpe Wien', label: 'Wien', slug: 'waermepumpe-wien' },
  { src: '/images/projects/idm-laxenburg.webp', title: 'iDM iPump Laxenburg', label: 'Laxenburg', slug: 'idm-ipump-laxenburg' },
  { src: '/images/projects/idm-guntramsdorf.webp', title: 'Wärmepumpe Guntramsdorf', label: 'Guntramsdorf', slug: 'idm-ipump-guntramsdorf' },
  { src: '/images/projects/daikin-ebreichsdorf.webp', title: 'Daikin Ebreichsdorf', label: 'Ebreichsdorf', slug: 'daikin-ebreichsdorf' },
]
```

And update the Link in the projects section:
```tsx
<Link to={`/projekte/${p.slug}`} key={i} className="project-card group ...">
```

- [ ] **Step 4: Verify in browser**

- Open http://localhost:5177/projekte — cards should show "Details ansehen" links
- Click any project card — should navigate to `/projekte/waermepumpe-wien` etc.
- Detail page shows hero, image, project details, CTA
- Back link "Alle Projekte" returns to grid
- Invalid slug redirects to `/projekte`

- [ ] **Step 5: Commit**

```bash
git add site/src/pages/Projekte.tsx site/src/pages/ProjektDetail.tsx site/src/App.tsx site/src/pages/Home.tsx
git commit -m "feat: add project detail subpages with blog-style layout, link from grid and homepage"
```

---

### Task 8: Add "Fliesen Store" to navigation

**Files:**
- Modify: `site/src/components/Header.tsx` — add Fliesen Store as visible nav item

The old sympatherm.at site has "Fliesen Store" as a dedicated nav item. Currently it's buried under the "Leistungen" dropdown. Add it as a top-level nav link.

- [ ] **Step 1: Add Fliesen Store to navLinks**

In Header.tsx, add to the `navLinks` array (after line 16):

```typescript
const navLinks = [
  { name: 'Fliesen Store', path: '/fliesen' },
  { name: 'Unternehmen', path: '/unternehmen' },
  { name: 'Projekte', path: '/projekte' },
  { name: 'Kontakt', path: '/kontakt' },
]
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:5177/ — "Fliesen Store" should appear as a top-level nav item next to Unternehmen/Projekte/Kontakt, and also still be in the Leistungen dropdown.

- [ ] **Step 3: Commit**

```bash
git add site/src/components/Header.tsx
git commit -m "feat: add Fliesen Store as top-level nav item matching old site"
```

---

## Summary of all changes

| Area | Before | After |
|---|---|---|
| Homepage Fliesen card | `verteiler.webp` (heating distributor) | `nyra-star.webp` (dining area with stone tiles) |
| Homepage Bad card | `idm-hygienik.webp` (heat pump product) | `bad-marble.webp` (marble bathroom) |
| Homepage location text | "Bezirk Baden" | "Leobersdorf" |
| Homepage project cards | Link to `/projekte` | Link to `/projekte/:slug` |
| Fliesen page hero | `verteiler.webp` | `nyra-star.webp` |
| Fliesen page content | Icons + accordion (no images) | Image category cards + gallery grid + brand showcase |
| Fliesen page title | "Fliesen" | "Fliesen Store" |
| Bad page hero | `idm-hygienik.webp` | `bad-modern.webp` |
| Bad page content | Steps + accordion | Steps + bathroom gallery + accordion |
| Nav | No "Fliesen Store" top-level | "Fliesen Store" visible in nav |
| Projekte | Static grid, no subpages | Clickable cards → individual project detail pages |
| Images added | 0 tile/bath images | 12 Fliesen + 2 Bad WebP images |
