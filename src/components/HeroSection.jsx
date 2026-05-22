import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function HeroSection() {
  const { t } = useTranslation()
  const ref = useReveal()

  return (
    <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div ref={ref} className="max-w-4xl lg:max-w-5xl reveal-enter">

          <p className="flex items-center gap-3 mb-7 sm:mb-9 lg:mb-11 text-white/55 text-xs sm:text-sm font-medium">
            <span className="w-6 h-px bg-dawn-gold/70" aria-hidden="true" />
            <span>{t('hero.badge', 'Oficiální studentská platforma')}</span>
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8">
            {t('hero.title_1')} <br />
            <span className="text-gradient-animated">{t('hero.title_2')}</span>
          </h1>

          <p className="text-white/75 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl lg:max-w-3xl mb-10 sm:mb-14 font-light">
            {t('hero.description', 'Spojujeme aktivní studenty, tvoříme projekty a pořádáme akce, které mají smysl. Přidej se k nám a získej reálné zkušenosti.')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
            <Link
              to="/akce/horizon-2025"
              className="btn-glow-gold group relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm sm:text-base lg:text-lg hover:scale-[1.02] transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <span>{t('hero.cta_primary', 'Objevte Youth Horizon')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <a
              href="mailto:serhii.khudanych.s@gyarab.cz"
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg text-center backdrop-blur-sm"
            >
              {t('hero.cta_secondary', 'Napište nám e-mail')}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
