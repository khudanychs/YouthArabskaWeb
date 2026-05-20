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
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-saturate-150 ${
          scrolled
            ? 'bg-[#0f1426]/98 md:bg-[#101a32]/94 border-b border-white/15 shadow-[0_16px_50px_rgba(3,7,18,0.38)] py-3 lg:py-4 md:backdrop-blur-2xl'
            : 'bg-[#0f1426]/92 md:bg-[#101a32]/88 border-b border-white/10 shadow-[0_12px_38px_rgba(3,7,18,0.22)] py-4 lg:py-6 md:backdrop-blur-xl'
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
                href="#contact"
                onClick={(e) => { e.preventDefault(); window.location.href = 'mai' + 'lto:' + 'serhii.khudanych.s' + '@' + 'gyarab.cz' }}
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
        className={`fixed inset-0 bg-slate-950/55 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNavOpen(false)}
      />

      <aside
        id="main-navigation"
        className={`fixed top-0 right-0 bottom-0 w-[min(100vw,23rem)] bg-[linear-gradient(180deg,rgba(17,24,39,0.98),rgba(15,23,42,0.94))] backdrop-blur-2xl border-l border-white/10 shadow-[0_0_60px_rgba(3,7,18,0.45)] z-50 md:hidden transition-transform duration-300 overflow-hidden ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-4 py-4 sm:px-5 sm:py-5 pt-5 sm:pt-6">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="min-w-0">
              <div className="text-white/55 text-[11px] font-semibold tracking-[0.28em] uppercase mb-1">
                {t('common.brand_youth')}
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wide leading-none">
                <span className="text-white">{t('common.brand_youth')}</span>
                <span className="text-gradient ml-1.5">{t('common.brand_arabska')}</span>
              </div>
            </div>

            <button
              className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/14 border border-white/10 text-white/80 hover:text-white transition-colors"
              onClick={() => setNavOpen(false)}
              aria-label={t('common.nav.close', 'Zavřít menu')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-3 mb-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={(e) => handleNavLinkClick(e, link.to, link.scrollId)}
                  className={`block py-3.5 px-4 rounded-2xl transition-all duration-200 text-base font-medium tracking-wide border ${
                    location.pathname === link.to 
                      ? 'bg-dawn-gold/12 text-dawn-gold border-dawn-gold/20 shadow-[0_0_0_1px_rgba(255,215,0,0.08)]' 
                      : 'text-white/80 hover:text-white hover:bg-white/8 border-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4 space-y-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.location.href = 'mai' + 'lto:' + 'serhii.khudanych.s' + '@' + 'gyarab.cz' }}
              className="block px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/16 text-white transition-all duration-200 text-base font-medium text-center border border-white/15"
            >
              {t('common.contact', 'Napište nám')}
            </a>
            <a
              href="https://www.instagram.com/youtharabska/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400/15 via-rose-400/15 to-sky-400/15 hover:from-amber-400/22 hover:via-rose-400/22 hover:to-sky-400/22 text-white transition-all duration-200 text-base font-medium text-center border border-white/10 flex items-center justify-center gap-2"
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
