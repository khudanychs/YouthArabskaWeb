import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'

const CONTACT_EMAIL = 'serhii.khudanych.s@gyarab.cz'

export default function Header() {
  const { t } = useTranslation()
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  const bgOpacity = useTransform(scrollY, [0, 80], [0.75, 0.98])
  const borderOpacity = useTransform(scrollY, [0, 80], [0.07, 0.18])
  const py = useTransform(scrollY, [0, 80], [24, 14])

  // String-interpolated motion values for style prop (must be at top level)
  const bgColor = useTransform(bgOpacity, (v) => `rgba(12,18,36,${v})`)
  const borderStyle = useTransform(borderOpacity, (v) => `1px solid rgba(255,255,255,${v})`)
  const pyPx = useTransform(py, (v) => `${v}px`)

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [navOpen])

  const navLinks = [
    { to: '/akce', label: t('common.nav.akce', 'Naše Akce') },
    { to: '/vize', label: t('common.nav.vize', 'O nás') },
  ]

  const handleNavLinkClick = (e, to) => {
    setNavOpen(false)
    if (location.pathname === to) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  const drawerVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 350, damping: 35 } },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.06, type: 'spring', stiffness: 300, damping: 28 },
    }),
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl backdrop-saturate-150"
        style={{
          backgroundColor: bgColor,
          borderBottom: borderStyle,
          paddingTop: pyPx,
          paddingBottom: pyPx,
          boxShadow: '0 16px 50px rgba(3,7,18,0.35)',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {location.pathname === '/' ? (
            <span className="flex items-center">
              <span className="text-white font-serif font-bold text-2xl lg:text-3xl tracking-wide">
                {t('common.brand_youth')}
              </span>
              <span className="text-gradient font-serif font-bold text-2xl lg:text-3xl tracking-wide ml-1.5">
                {t('common.brand_arabska')}
              </span>
            </span>
          ) : (
            <Link to="/" className="flex items-center group" aria-label={t('common.nav.home')}>
              <motion.span
                className="text-white font-serif font-bold text-2xl lg:text-3xl tracking-wide"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {t('common.brand_youth')}
              </motion.span>
              <motion.span
                className="text-gradient font-serif font-bold text-2xl lg:text-3xl tracking-wide ml-1.5"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {t('common.brand_arabska')}
              </motion.span>
            </Link>
          )}

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-dawn-gold/60"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            aria-label={t('common.nav.menu')}
            whileTap={{ scale: 0.94 }}
          >
            <span className="relative block w-[18px] h-[14px]" aria-hidden="true">
              <motion.span
                className="absolute left-0 right-0 h-[1.75px] rounded-full bg-white"
                animate={navOpen ? { top: '50%', y: '-50%', rotate: 45 } : { top: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                style={{ position: 'absolute' }}
              />
              <motion.span
                className="absolute left-0 right-0 h-[1.75px] top-1/2 -translate-y-1/2 rounded-full bg-white"
                animate={navOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 right-0 h-[1.75px] rounded-full bg-white"
                animate={navOpen ? { bottom: '50%', y: '50%', rotate: -45 } : { bottom: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                style={{ position: 'absolute' }}
              />
            </span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <li key={link.to} className="relative">
                    <motion.div whileHover={{ y: -1.5 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                      <Link
                        to={link.to}
                        onClick={(e) => handleNavLinkClick(e, link.to)}
                        className={`block transition-colors duration-200 text-sm lg:text-base font-medium tracking-wide ${
                          isActive ? 'text-dawn-gold' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dawn-gold to-transparent"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm lg:text-base font-medium border border-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {t('common.contact', 'Napiš nám')}
              </motion.a>
              <motion.a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-dawn-gold"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </motion.a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.aside
            id="main-navigation"
            className="fixed top-0 right-0 bottom-0 w-[min(100vw,22rem)] bg-[linear-gradient(180deg,rgba(15,20,38,0.98),rgba(10,15,30,0.98))] backdrop-blur-2xl border-l border-white/10 shadow-[0_0_60px_rgba(3,7,18,0.55)] z-50 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dawn-gold/70 to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-dawn-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div
              className="flex flex-col h-full overflow-y-auto px-5 pb-5"
              style={{ paddingTop: 'max(env(safe-area-inset-top), 1.25rem)' }}
            >
              <div className="flex items-center justify-between gap-4 mb-7 pb-4 border-b border-white/[0.07]">
                <div className="min-w-0 flex items-center gap-3">
                  <span className="w-4 h-px bg-dawn-gold/60 shrink-0" aria-hidden="true" />
                  <div className="font-serif text-lg sm:text-xl font-bold tracking-wide leading-none truncate">
                    <span className="text-white">{t('common.brand_youth')}</span>
                    <span className="text-gradient ml-1.5">{t('common.brand_arabska')}</span>
                  </div>
                </div>
                <motion.button
                  className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white/70 hover:text-white"
                  onClick={() => setNavOpen(false)}
                  aria-label={t('common.nav.close', 'Zavřít menu')}
                  whileTap={{ scale: 0.93 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase">Navigace</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <ul className="flex flex-col gap-1.5 mb-8">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.to
                  return (
                    <motion.li
                      key={link.to}
                      custom={idx}
                      variants={linkVariants}
                    >
                      <Link
                        to={link.to}
                        onClick={(e) => handleNavLinkClick(e, link.to)}
                        className={`group flex items-center justify-between py-3.5 px-4 rounded-xl text-[15px] font-medium tracking-wide border-l-2 transition-colors duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-dawn-gold/15 via-dawn-gold/5 to-transparent text-dawn-gold border-dawn-gold'
                            : 'text-white/75 hover:text-white hover:bg-white/[0.04] border-transparent hover:border-white/20'
                        }`}
                      >
                        <span>{link.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-all ${isActive ? 'opacity-100' : 'opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0'}`}>
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase">Spojení</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-2.5 mb-5"
                  variants={{ open: { opacity: 1, y: 0, transition: { delay: 0.22 } }, closed: { opacity: 0, y: 10 } }}
                >
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-dawn-gold/40 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-dawn-gold/80 group-hover:text-dawn-gold transition-colors">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-white/85 group-hover:text-white text-[12px] font-medium tracking-wide transition-colors">{t('common.contact')}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/youtharabska/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-gradient-to-br from-amber-400/[0.08] via-rose-400/[0.08] to-sky-400/[0.08] hover:from-amber-400/20 hover:via-rose-400/15 hover:to-sky-400/20 border border-white/10 hover:border-white/25 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="text-white/85 group-hover:text-white text-[12px] font-medium tracking-wide transition-colors">Instagram</span>
                  </a>
                </motion.div>
                <p className="text-center text-[10px] text-white/30 tracking-[0.2em] uppercase">
                  © {new Date().getFullYear()} · Youth Arabská
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
