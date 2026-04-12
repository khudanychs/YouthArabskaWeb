import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    let lastScrolled = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextScrolled = window.scrollY > 50
          if (nextScrolled !== lastScrolled) {
            lastScrolled = nextScrolled
            setScrolled(nextScrolled)
          }
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [navOpen])

  const navLinks = [
    { to: '/akce', label: t('common.nav.akce', 'Naše Akce'), scrollId: 'akce' },
    { to: '/vize', label: t('common.nav.vize', 'O nás'), scrollId: 'vize' },
  ]

  const handleNavLinkClick = (e, to, scrollId) => {
    setNavOpen(false)
    if (location.pathname === to || (location.pathname === '/' && to === '/')) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f1426]/94 md:bg-[#101a32]/82 border-b border-white/12 shadow-2xl py-3 lg:py-4 md:backdrop-blur-2xl'
            : 'bg-[#0f1426]/84 md:bg-[#101a32]/68 border-b border-white/8 py-4 lg:py-6 md:backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={(e) => handleNavLinkClick(e, '/')}
            className="flex items-center group" 
            aria-label={t('common.nav.home')}
          >
            <span className="text-white font-serif font-bold text-2xl lg:text-3xl tracking-wide transition-transform group-hover:scale-105">
              {t('common.brand_youth')}
            </span>
            <span className="text-gradient font-serif font-bold text-2xl lg:text-3xl tracking-wide ml-1.5 transition-transform group-hover:scale-105">
              {t('common.brand_arabska')}
            </span>
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50 relative"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            aria-label={t('common.nav.menu')}
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavLinkClick(e, link.to, link.scrollId)}
                    className={`transition-all duration-200 text-sm lg:text-base font-medium tracking-wide ${
                      location.pathname === link.to ? 'text-dawn-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]' : 'text-white/70 hover:text-white hover:-translate-y-0.5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <a
                href="mailto:serhii.khudanych.s@gyarab.cz"
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 text-sm lg:text-base font-medium border border-white/20"
              >
                {t('common.contact', 'Napište nám')}
              </a>
              <a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-dawn-gold transition-all duration-200"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNavOpen(false)}
      />

      <aside
        id="main-navigation"
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-black/90 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 md:hidden transition-transform duration-300 ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <ul className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={(e) => handleNavLinkClick(e, link.to, link.scrollId)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 text-base font-medium tracking-wide ${
                    location.pathname === link.to 
                      ? 'bg-dawn-gold/10 text-dawn-gold border border-dawn-gold/20' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-3 mt-auto border-t border-white/10 pt-6">
            <a
              href="mailto:serhii.khudanych.s@gyarab.cz"
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 text-base font-medium text-center border border-white/20"
            >
              {t('common.contact', 'Napište nám')}
            </a>
            <a
              href="https://www.instagram.com/youtharabska/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white transition-all duration-200 text-base font-medium text-center border border-purple-500/20 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
