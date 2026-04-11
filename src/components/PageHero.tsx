import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Props {
  title: string
  description: string
  breadcrumbs: { label: string; path?: string }[]
  image?: string
}

export default function PageHero({ title, description, breadcrumbs, image }: Props) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F6A9A 0%, #2980B9 35%, #3498DB 65%, #1F6A9A 100%)' }}>
      {/* Background image if provided */}
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          loading="eager"
          width={1920}
          height={600}
        />
      )}

      {/* Mesh gradient orbs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-white/[0.07] blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary-dark/40 blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[60px]" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-6 min-h-[360px] lg:min-h-[420px] flex flex-col justify-end pt-24 lg:pt-28 pb-12 lg:pb-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-white/40">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white/70 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-heading text-3xl lg:text-5xl text-white mb-4 max-w-3xl">{title}</h1>
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
