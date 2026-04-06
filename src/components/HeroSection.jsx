import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function HeroSection() {
  const { t } = useTranslation()
  const ref = useReveal()

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-start px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div ref={ref} className="max-w-4xl lg:max-w-5xl reveal-enter">
          
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10">
            <div className="w-12 sm:w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-dawn-gold to-transparent" />
            <span className="text-dawn-gold/90 font-semibold tracking-widest uppercase text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">
              {t('hero.badge', 'Studentská iniciativa')}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] mb-6 sm:mb-8">
            {t('hero.title_1')} <br />
            <span className="text-gradient">{t('hero.title_2')}</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl lg:max-w-3xl mb-8 sm:mb-12 font-light">
            {t('hero.description', 'Spojujeme aktivní studenty, tvoříme projekty a pořádáme akce, které mají smysl. Přidej se k nám a získej reálné zkušenosti.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
            <Link
              to="/akce/horizon-2025"
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm sm:text-base lg:text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-105 transition-all duration-300 text-center"
            >
              {t('hero.cta_primary', 'Objevte Youth Horizon')}
            </Link>
            
            <a
              href="mailto:serhii.khudanych.s@gyarab.cz"
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg text-center backdrop-blur-sm"
            >
              {t('hero.cta_secondary', 'Napište nám e-mail')}
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}
