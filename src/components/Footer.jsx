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
    { to: '/vize', label: t('common.nav.vize', 'O nás') },
    { to: '/spojenectvi', label: t('common.nav.get_involved', 'Připoj se') },
    { to: '/gallery', label: t('common.nav.gallery', 'Galerie') },
  ]

  const events = [
    { label: 'Youth Horizon 2025', to: '/akce/horizon-2025' },
    { label: 'Beyond the Bell', to: '/akce/beyond-the-bell' },
  ]

  return (
    <footer className="relative mt-16 sm:mt-24" style={{ background: '#020617' }}>
      {/* Premium gradient top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.6) 30%, rgba(255,126,95,0.5) 50%, rgba(199,121,208,0.5) 70%, transparent)' }}
      />
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ boxShadow: '0 0 80px 20px rgba(255,215,0,0.07)' }}
      />

      {/* Aurora accent blobs — very dark/subtle */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.04), transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[250px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,121,208,0.05), transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Brand hero row ── */}
        <div className="py-16 sm:py-20 border-b border-white/[0.05]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — large brand */}
            <div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-serif font-bold tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}>Youth</span>
                <span className="text-gradient font-serif font-bold tracking-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}>Arabská</span>
              </div>
              <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                {t('footer.description')}
              </p>
              {/* Social row */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://www.instagram.com/youtharabska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white/65 hover:text-white text-sm font-medium transition-all duration-200"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dawn-gold/70 group-hover:text-dawn-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  @youtharabska
                </motion.a>
              </div>
            </div>

            {/* Right — contact info */}
            <div>
              <p className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Kontakt</p>
              <div className="space-y-3 mb-8">
                {emails.map((email) => (
                  <motion.a
                    key={email.user}
                    href={`mailto:${email.user}@${email.domain}`}
                    className="group flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-dawn-gold/50 group-hover:text-dawn-gold/80 flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="break-all font-mono text-xs sm:text-sm">{email.label}</span>
                  </motion.a>
                ))}
              </div>
              {/* Address card */}
              <div className="inline-flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <span className="text-white/35 text-[10px] font-semibold tracking-[0.25em] uppercase mb-1">Adresa</span>
                <span className="text-white/70 text-sm">Arabská 14, Praha 6</span>
                <span className="text-white/30 text-xs">Gymnázium Arabská · Czech Republic</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Links grid ── */}
        <div className="py-12 sm:py-14 border-b border-white/[0.05] grid grid-cols-2 sm:grid-cols-4 gap-8">

          {/* Navigation */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Rozcestník</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link to={link.to} className="text-white/55 hover:text-white text-sm transition-colors duration-200 block">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Akce</h4>
            <ul className="space-y-2.5">
              {events.map((ev) => (
                <li key={ev.to}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link to={ev.to} className="text-white/55 hover:text-white text-sm transition-colors duration-200 block">
                      {ev.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">{t('footer.institutions', 'Instituce')}</h4>
            <ul className="space-y-2.5">
              <li>
                <motion.a
                  href="https://www.gyarab.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span>{t('common.gymnazium', 'Gymnázium Arabská')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-35 group-hover:opacity-60 flex-shrink-0">
                    <path d="M7 7h10v10"/>
                    <path d="M7 17 17 7"/>
                  </svg>
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Mission tagline */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Mise</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Propojujeme studenty s budoucností. Každý rok, každou akcí.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-dawn-gold/60 to-dawn-orange/40" />
              <span className="text-dawn-gold/50 text-[10px] font-medium tracking-wider uppercase">Since 2025</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Youth Arabská · {t('footer.copyright', 'Všechna práva vyhrazena.')}
          </p>
          <div className="flex items-center gap-2 text-white/20 text-[10px] tracking-widest uppercase">
            <span className="w-5 h-px bg-gradient-to-r from-dawn-gold/30 to-transparent" />
            <span>Gymnázium Arabská · Praha 6</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
