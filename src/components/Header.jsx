import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/vize', label: 'O nás' },
    { to: '/horizon', label: 'Youth Horizon' },
    { to: '/akce', label: 'Akce' },
    { to: '/spojenectvi', label: 'Spojenectví' },
  ]

  const handleNavLinkClick = (e, to) => {
    setNavOpen(false)
    
    // Pokud klikneme na stejnou stránku, na které už jsme, vyrolujeme nahoru
    if (location.pathname === to || (location.pathname === '/' && to === '/')) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link 
          to="/" 
          onClick={(e) => handleNavLinkClick(e, '/')}
          className="flex items-center" 
          aria-label="Návrat na počátek"
        >
          <span className="text-white font-serif font-bold text-2xl tracking-wide">Youth</span>
          <span className="text-gradient font-serif font-bold text-2xl tracking-wide ml-1.5">Arabská</span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
          aria-controls="main-navigation"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>

        {/* Nav */}
        <nav
          id="main-navigation"
          className={`${
            navOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-full left-0 right-0 md:top-auto flex-col md:flex-row items-start md:items-center gap-2 md:gap-6
          bg-black/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
          p-4 md:p-0 border-t border-white/10 md:border-0`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={(e) => handleNavLinkClick(e, link.to)}
                  className={`transition-colors duration-200 text-sm font-medium tracking-wide ${
                    location.pathname === link.to ? 'text-dawn-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://www.gyarab.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-0 px-4 py-2 rounded-lg border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-200 text-sm font-medium whitespace-nowrap"
          >
            Gymnázium Arabská
          </a>
        </nav>
      </div>
    </header>
  )
}
