import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

const organizers = [
  { name: 'Adam Hruška', email: 'adam.hruska.s@gyarab.cz', role: 'Hlavní organizátor' },
  { name: 'Lujza Palečková', email: 'lujza.paleckova.s@gyarab.cz', role: 'Hlavní organizátorka' },
]

const webTeam = [
  { name: 'Matouš Tlamka', email: 'matous.tlamka.s@gyarab.cz', role: 'Web & Newsletter' },
  { name: 'Serhii Khudanych', email: 'serhii.khudanych.s@gyarab.cz', role: 'Web & Newsletter' },
]

function PersonRow({ person }) {
  return (
    <div>
      <p className="text-white/85 text-sm font-medium leading-tight">{person.name}</p>
      <motion.a
        href={`mailto:${person.email}`}
        className="inline-flex items-center gap-1.5 text-white/40 hover:text-dawn-gold text-[11px] font-mono transition-colors duration-200 mt-0.5"
        whileHover={{ x: 2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <span className="break-all">{person.email}</span>
      </motion.a>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { to: '/akce', label: t('common.nav.akce', 'Naše akce') },
    { to: '/vize', label: t('common.nav.vize', 'O nás') },
    { to: '/spojenectvi', label: t('common.nav.get_involved', 'Připoj se') },
    { to: '/newsletter', label: 'Newsletter' },
    { to: '/gallery', label: t('common.nav.gallery', 'Galerie') },
  ]

  const events = [
    { label: 'Youth Horizon 2025', to: '/akce/horizon-2025' },
    { label: 'Beyond the Bell', to: '/akce/beyond-the-bell' },
  ]

  return (
    <footer className="relative mt-16 sm:mt-24" style={{ background: '#020617' }}>
      {/* Gradient top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.6) 30%, rgba(255,126,95,0.5) 50%, rgba(199,121,208,0.5) 70%, transparent)' }}
      />
      {/* Aurora accents */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.04), transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[250px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,121,208,0.05), transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Brand hero row ── */}
        <div className="py-14 sm:py-20 border-b border-white/[0.05]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — brand + social */}
            <div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-serif font-bold tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>Youth</span>
                <span className="text-gradient font-serif font-bold tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>Arabská</span>
              </div>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                {t('footer.description')}
              </p>
              <motion.a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium transition-all duration-200"
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

            {/* Right — two-column people grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">

              {/* Organizers */}
              <div>
                <p className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Hlavní organizátoři</p>
                <div className="space-y-4">
                  {organizers.map((p) => <PersonRow key={p.email} person={p} />)}
                </div>
              </div>

              {/* Web + address */}
              <div>
                <p className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Web & Newsletter</p>
                <div className="space-y-4 mb-7">
                  {webTeam.map((p) => <PersonRow key={p.email} person={p} />)}
                </div>
                {/* Address */}
                <div className="flex flex-col gap-0.5 px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] w-fit">
                  <span className="text-white/30 text-[10px] font-semibold tracking-[0.25em] uppercase mb-0.5">Adresa</span>
                  <span className="text-white/65 text-xs">Arabská 14, Praha 6</span>
                  <span className="text-white/25 text-[10px]">Gymnázium, Praha 6, Arabská 14</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Links grid ── */}
        <div className="py-10 sm:py-12 border-b border-white/[0.05] grid grid-cols-2 sm:grid-cols-4 gap-8">

          <div>
            <h4 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Rozcestník</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link to={link.to} className="text-white/50 hover:text-white text-sm transition-colors duration-200 block">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Akce</h4>
            <ul className="space-y-2.5">
              {events.map((ev) => (
                <li key={ev.to}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <Link to={ev.to} className="text-white/50 hover:text-white text-sm transition-colors duration-200 block">
                      {ev.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">{t('footer.institutions', 'Instituce')}</h4>
            <ul className="space-y-2.5">
              <li>
                <motion.a
                  href="https://www.gyarab.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span>{t('common.gymnazium')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 group-hover:opacity-60 flex-shrink-0">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </motion.a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-5">Mise</h4>
            <p className="text-white/35 text-xs leading-relaxed">
              Propojujeme studenty s budoucností. Každý rok, každou akcí.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-dawn-gold/60 to-dawn-orange/40" />
              <span className="text-dawn-gold/45 text-[10px] font-medium tracking-wider uppercase">Since 2025</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6">
          <p className="text-white/55 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Youth Arabská · {t('footer.copyright', 'Všechna práva vyhrazena.')}
          </p>
          <div className="flex items-center gap-2 text-white/50 text-[10px] tracking-widest uppercase">
            <span className="w-5 h-px bg-gradient-to-r from-dawn-gold/30 to-transparent" />
            <span>Matouš Tlamka a Serhii Khudanych</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
