import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useScrollAnimation<T extends HTMLElement>(
  options: { y?: number; delay?: number; duration?: number; stagger?: number } = {}
) {
  const ref = useRef<T>(null)
  const { y = 40, delay = 0, duration = 0.8, stagger = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const targets = stagger ? Array.from(el.children) : [el]

    // Set initial state
    gsap.set(targets, { opacity: 0, y })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(targets,
              { opacity: 0, y },
              { opacity: 1, y: 0, duration, delay, stagger, ease: 'power3.out' }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [y, delay, duration, stagger])

  return ref
}
