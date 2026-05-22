import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PremiumBackground from './components/PremiumBackground'
import SpotlightTracker from './components/SpotlightTracker'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const VizePage = lazy(() => import('./pages/VizePage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'))
const SpojenectviPage = lazy(() => import('./pages/SpojenectviPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))

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
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">404</h1>
      <p className="text-white/60 text-lg mb-8">Stránka nebyla nalezena</p>
      <Link to="/" className="btn-glow-gold px-6 py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold hover:scale-[1.02] transition-all duration-300">
        Zpět na hlavní stránku
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/YouthArabskaWeb">
      <ScrollToTop />
      <PremiumBackground />
      <SpotlightTracker />
      <div className="relative z-10">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
