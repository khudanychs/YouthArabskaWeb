import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const sections = [
  {
    key: 'who',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    delay: 0,
  },
  {
    key: 'what',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    delay: 100,
  },
  {
    key: 'mission',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    delay: 200,
  },
]

function SectionCard({ section, index }) {
  const { t } = useTranslation()
  const ref = useReveal(section.delay)
  const indexLabel = String(index + 1).padStart(2, '0')
  return (
    <article ref={ref} className="glass-card tap-press p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 reveal-enter">
      <div className="flex items-start justify-between">
        <div className="text-dawn-gold">{section.icon}</div>
        <span className="card-index text-xs font-medium tabular-nums tracking-wider select-none" aria-hidden="true">
          {indexLabel}
        </span>
      </div>
      <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{t(`philosophy.sections.${section.key}.title`)}</h3>
      <p className="text-white/65 text-sm leading-relaxed">{t(`philosophy.sections.${section.key}.text`)}</p>
    </article>
  )
}

export default function PhilosophySection() {
  const { t } = useTranslation()
  const headerRef = useReveal()
  return (
    <section id="vize" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header ref={headerRef} className="text-center mb-12 sm:mb-16 reveal-enter">
          <p className="inline-flex items-center gap-3 mb-5 text-white/55 text-xs sm:text-sm font-medium">
            <span className="w-6 h-px bg-dawn-gold/70" aria-hidden="true" />
            <span>{t('philosophy.badge', 'Naše filozofie')}</span>
            <span className="w-6 h-px bg-dawn-gold/70" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('philosophy.header_title')}
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t('philosophy.header_subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {sections.map((section, idx) => (
            <SectionCard key={section.key} section={section} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
