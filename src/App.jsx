import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KineticBackground from './components/KineticBackground'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'

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
            {/* Fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
