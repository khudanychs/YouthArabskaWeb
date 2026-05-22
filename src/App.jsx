import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import PremiumBackground from './components/PremiumBackground'
import SpotlightTracker from './components/SpotlightTracker'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import useLenis from './hooks/useLenis'

const HomePage = lazy(() => import('./pages/HomePage'))
const VizePage = lazy(() => import('./pages/VizePage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'))
const SpojenectviPage = lazy(() => import('./pages/SpojenectviPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const NewsletterPage = lazy(() => import('./pages/NewsletterPage'))

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-dawn-gold/20 border-t-dawn-gold rounded-full animate-spin" />
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-dawn-gold font-serif font-bold text-8xl md:text-9xl mb-4 leading-none">404</p>
      <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">Stránka nenalezena</h1>
      <p className="text-slate-500 text-base mb-8 max-w-sm">Tuhle stránku jsme bohužel nenašli. Zkus se vrátit na hlavní stránku.</p>
      <Link to="/" className="btn-glow-gold px-6 py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold hover:scale-[1.02] transition-all duration-300">
        Zpět na hlavní stránku
      </Link>
    </div>
  )
}

function AppContent() {
  const location = useLocation()
  useLenis()

  return (
    <>
      <ScrollToTop />
      <PremiumBackground />
      <SpotlightTracker />
      <div className="relative z-10">
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            className="page-transition-wrapper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<VizePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:eventId" element={<EventDetailPage />} />
                <Route path="/get-involved" element={<SpojenectviPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/vize" element={<VizePage />} />
                <Route path="/akce" element={<EventsPage />} />
                <Route path="/akce/:eventId" element={<EventDetailPage />} />
                <Route path="/spojenectvi" element={<SpojenectviPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/YouthArabskaWeb">
      <AppContent />
    </BrowserRouter>
  )
}
