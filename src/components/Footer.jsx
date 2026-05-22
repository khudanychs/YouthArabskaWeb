import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export default function Footer() {
  const { t } = useTranslation()

  const emails = [
    { user: 'serhii.khudanych.s', domain: 'gyarab.cz', label: 'serhii.khudanych.s@gyarab.cz' },
    { user: 'matous.tlamka.s', domain: 'gyarab.cz', label: 'matous.tlamka.s@gyarab.cz' },
  ]

  const navLinks = [
    { to: '/akce', label: t('common.nav.akce') },
    { to: '/vize', label: t('common.nav.vize') },
    { to: '/spojenectvi', label: t('common.nav.get_involved', 'Připoj se') },
    { to: '/gallery', label: t('common.nav.gallery', 'Galerie') },
  ]

  return (
    <footer className="relative mt-8">
      {/* Premium gold top divider */}
      <div className="premium-divider" />

      {/* Watermark brand text */}
      <div className="relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap editorial-number select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', bottom: '-0.15em', opacity: 0.018 }}
          aria-hidden="true"
        >
          Youth Arabská
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 pb-10 sm:pb-14 relative z-10">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">

            {/* Brand column */}
            <div className="sm:col-span-2">
              <div className="flex items-center mb-5">
                <span className="text-white font-serif font-bold text-2xl sm:text-3xl tracking-wide">{t('common.brand_youth')}</span>
                <span className="text-gradient font-serif font-bold text-2xl sm:text-3xl tracking-wide ml-1.5">{t('common.brand_arabska')}</span>
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-7 max-w-sm">
                {t('footer.description')}
              </p>

              {/* Contact links */}
              <div className="space-y-2.5 mb-6">
                {emails.map((email) => (
                  <motion.a
                    key={email.user}
                    href={`mailto:${email.user}@${email.domain}`}
                    className="group flex items-center gap-3 text-white/65 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dawn-gold/50 group-hover:text-dawn-gold/80 flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="break-all">{email.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social */}
              <motion.a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-white/65 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dawn-gold/50 group-hover:text-dawn-gold/80 flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>@youtharabska</span>
              </motion.a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 sm:mb-6">
                {t('footer.navigation', 'Rozcestník')}
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <Link
                        to={link.to}
                        className="text-white/65 hover:text-white text-sm transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutions */}
            <div>
              <h4 className="text-white text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 sm:mb-6">
                {t('footer.institutions', 'Instituce')}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <motion.a
                    href="https://www.gyarab.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white/65 hover:text-white text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span>{t('common.gymnazium', 'Gymnázium Arabská')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-70 flex-shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </motion.a>
                </li>
              </ul>

              {/* Address */}
              <div className="mt-6 text-white/35 text-xs leading-relaxed">
                <p>Arabská 14</p>
                <p>Praha 6</p>
                <p className="mt-1 text-white/20 text-[10px]">Czech Republic</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/[0.06]">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Youth Arabská · {t('footer.copyright', 'Všechna práva vyhrazena.')}
            </p>
            <div className="flex items-center gap-1.5 text-white/20 text-[10px] tracking-widest uppercase">
              <span className="w-4 h-px bg-dawn-gold/20" />
              <span>Gymnázium Arabská</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
