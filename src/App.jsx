import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KineticBackground from './components/KineticBackground'
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

export default function App() {
  return (
    <BrowserRouter basename="/YouthArabskaWeb">
      <ScrollToTop />
      <KineticBackground />
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
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
