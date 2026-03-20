import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6" role="dialog" aria-label="Cookie-Einstellungen">
      <div className="max-w-[700px] mx-auto bg-white rounded-2xl shadow-2xl border border-border p-5 lg:p-6">
        <p className="text-sm text-secondary leading-relaxed mb-4">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Weitere Informationen finden Sie in unserer{' '}
          <Link to="/datenschutz" className="text-primary underline">Datenschutzerklärung</Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-primary text-white py-2.5 px-5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-transparent text-secondary border border-border py-2.5 px-5 rounded-lg text-sm font-semibold hover:bg-bg transition-colors"
          >
            Nur essenzielle
          </button>
        </div>
      </div>
    </div>
  )
}
