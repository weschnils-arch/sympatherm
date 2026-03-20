import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'

const Fussbodenheizung = lazy(() => import('./pages/Fussbodenheizung'))
const Waermepumpen = lazy(() => import('./pages/Waermepumpen'))
const Fliesen = lazy(() => import('./pages/Fliesen'))
const BadSanitaer = lazy(() => import('./pages/BadSanitaer'))
const Unternehmen = lazy(() => import('./pages/Unternehmen'))
const Projekte = lazy(() => import('./pages/Projekte'))
const Kontakt = lazy(() => import('./pages/Kontakt'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fussbodenheizung" element={<Suspense fallback={<Loading />}><Fussbodenheizung /></Suspense>} />
          <Route path="/waermepumpen" element={<Suspense fallback={<Loading />}><Waermepumpen /></Suspense>} />
          <Route path="/fliesen" element={<Suspense fallback={<Loading />}><Fliesen /></Suspense>} />
          <Route path="/bad-sanitaer" element={<Suspense fallback={<Loading />}><BadSanitaer /></Suspense>} />
          <Route path="/unternehmen" element={<Suspense fallback={<Loading />}><Unternehmen /></Suspense>} />
          <Route path="/projekte" element={<Suspense fallback={<Loading />}><Projekte /></Suspense>} />
          <Route path="/kontakt" element={<Suspense fallback={<Loading />}><Kontakt /></Suspense>} />
          <Route path="/impressum" element={<Suspense fallback={<Loading />}><Impressum /></Suspense>} />
          <Route path="/datenschutz" element={<Suspense fallback={<Loading />}><Datenschutz /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-secondary-light mb-8">Seite nicht gefunden</p>
      <a href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
        Zur Startseite
      </a>
    </main>
  )
}
