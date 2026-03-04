import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KineticBackground from './components/KineticBackground'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import VizePage from './pages/VizePage'
import HorizontPage from './pages/HorizontPage'
import ProgramPage from './pages/ProgramPage'
import SpojenectviPage from './pages/SpojenectviPage'

export default function App() {
  return (
    <BrowserRouter basename="/YouthArabskaWeb">
      <ScrollToTop />
      <KineticBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vize" element={<VizePage />} />
            <Route path="/horizont" element={<HorizontPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/spojenectvi" element={<SpojenectviPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
