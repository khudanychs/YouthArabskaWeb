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

  const bgOpacity = useTransform(scrollY, [0, 60], [0.72, 0.95])
  const shadowOpacity = useTransform(scrollY, [0, 60], [0, 1])
  const bgColorValue = useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`)
  const shadowValue = useTransform(
    shadowOpacity,
    (v) => `0 4px 24px rgba(0,0,0,${(0.06 * v).toFixed(3)}), 0 1px 4px rgba(0,0,0,${(0.04 * v).toFixed(3)})`
  )

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
      {/* Floating pill header wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-4">
        <motion.header
          className="w-full max-w-5xl"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative backdrop-blur-2xl backdrop-saturate-200 rounded-2xl border border-black/[0.07]"
            style={{
              backgroundColor: bgColorValue,
              boxShadow: shadowValue,
            }}
          >
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-4">

              {/* Logo */}
              {location.pathname === '/' ? (
                <span className="flex items-center flex-shrink-0">
                  <span className="text-slate-900 font-serif font-bold text-xl sm:text-2xl tracking-wide">
                    {t('common.brand_youth')}
                  </span>
                  <span className="text-gradient font-serif font-bold text-xl sm:text-2xl tracking-wide ml-1.5">
                    {t('common.brand_arabska')}
                  </span>
                </span>
              ) : (
                <Link to="/" className="flex items-center flex-shrink-0 group" aria-label={t('common.nav.home')}>
                  <motion.span
                    className="text-slate-900 font-serif font-bold text-xl sm:text-2xl tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {t('common.brand_youth')}
                  </motion.span>
                  <motion.span
                    className="text-gradient font-serif font-bold text-xl sm:text-2xl tracking-wide ml-1.5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {t('common.brand_arabska')}
                  </motion.span>
                </Link>
              )}

              {/* Mobile hamburger */}
              <motion.button
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-dawn-gold/60 transition-colors"
                onClick={() => setNavOpen((v) => !v)}
                aria-expanded={navOpen}
                aria-controls="main-navigation"
                aria-label={t('common.nav.menu')}
                whileTap={{ scale: 0.94 }}
              >
                <span className="relative block w-[18px] h-[14px]" aria-hidden="true">
                  <motion.span
                    className="absolute left-0 right-0 h-[1.75px] rounded-full bg-slate-700"
                    animate={navOpen ? { top: '50%', y: '-50%', rotate: 45 } : { top: 0, y: 0, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    style={{ position: 'absolute' }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 h-[1.75px] top-1/2 -translate-y-1/2 rounded-full bg-slate-700"
                    animate={navOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 h-[1.75px] rounded-full bg-slate-700"
                    animate={navOpen ? { bottom: '50%', y: '50%', rotate: -45 } : { bottom: 0, y: 0, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    style={{ position: 'absolute' }}
                  />
                </span>
              </motion.button>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
                <ul className="flex items-center gap-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to
                    return (
                      <li key={link.to} className="relative">
                        <motion.div whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                          <Link
                            to={link.to}
                            onClick={(e) => handleNavLinkClick(e, link.to)}
                            className={`relative block px-4 py-2 rounded-xl transition-colors duration-200 text-sm font-medium tracking-wide ${
                              isActive
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            {link.label}
                            {isActive && (
                              <motion.div
                                layoutId="nav-underline"
                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-dawn-gold to-dawn-orange"
                                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Desktop actions */}
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                <motion.a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {t('common.contact', 'Napiš nám')}
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/youtharabska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-500 hover:text-dawn-orange border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer — white */}
      <AnimatePresence>
        {navOpen && (
          <motion.aside
            id="main-navigation"
            className="fixed top-0 right-0 bottom-0 w-[min(100vw,22rem)] bg-white border-l border-slate-100 shadow-2xl z-50 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-dawn-gold via-dawn-orange to-dawn-purple pointer-events-none" />

            <div
              className="flex flex-col h-full overflow-y-auto px-5 pb-5"
              style={{ paddingTop: 'max(env(safe-area-inset-top), 1.25rem)' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-100">
                <div className="min-w-0 flex items-center">
                  <span className="font-serif text-lg font-bold tracking-wide text-slate-900">{t('common.brand_youth')}</span>
                  <span className="text-gradient font-serif text-lg font-bold tracking-wide ml-1.5">{t('common.brand_arabska')}</span>
                </div>
                <motion.button
                  className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
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

              {/* Nav label */}
              <p className="text-slate-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 px-1">Navigace</p>

              <ul className="flex flex-col gap-1 mb-8">
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
                        className={`group flex items-center justify-between py-3 px-4 rounded-xl text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                          isActive
                            ? 'bg-amber-50 text-slate-900 border border-amber-200/70'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <span>{link.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-all ${isActive ? 'text-dawn-gold opacity-100' : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'}`}>
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-auto">
                <p className="text-slate-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 px-1">Spojení</p>
                <motion.div
                  className="grid grid-cols-2 gap-2.5 mb-6"
                  variants={{ open: { opacity: 1, y: 0, transition: { delay: 0.22 } }, closed: { opacity: 0, y: 10 } }}
                >
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-dawn-gold group-hover:text-dawn-orange transition-colors">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-slate-700 group-hover:text-slate-900 text-[12px] font-medium tracking-wide transition-colors">{t('common.contact')}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/youtharabska/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 hover:from-amber-100 hover:via-rose-100 hover:to-purple-100 border border-slate-200 hover:border-slate-300 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-slate-900 transition-colors">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="text-slate-700 group-hover:text-slate-900 text-[12px] font-medium tracking-wide transition-colors">Instagram</span>
                  </a>
                </motion.div>
                <p className="text-center text-[10px] text-slate-400 tracking-[0.2em] uppercase">
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
