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
