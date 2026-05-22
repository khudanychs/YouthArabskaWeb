import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MovingBorderCard from './ui/MovingBorderCard'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    key: 'who',
    index: '01',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: 'what',
    index: '02',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    key: 'mission',
    index: '03',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
]

function SectionCard({ section, index }) {
  const { t } = useTranslation()
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="h-full"
    >
      <MovingBorderCard className="h-full">
        <div className="p-7 sm:p-8 flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between">
            <div className="text-amber-600 p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              {section.icon}
            </div>
            <span
              className="editorial-number text-4xl sm:text-5xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
              aria-hidden="true"
            >
              {section.index}
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {t(`philosophy.sections.${section.key}.title`)}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            {t(`philosophy.sections.${section.key}.text`)}
          </p>
          <div className="h-px w-full bg-gradient-to-r from-dawn-gold/20 to-transparent mt-2" />
        </div>
      </MovingBorderCard>
    </motion.div>
  )
}

export default function PhilosophySection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 82%', once: true },
        }
      )

      gsap.fromTo(
        Array.from(cardsRef.current.children),
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="vize" className="relative py-20 sm:py-24 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <header ref={headerRef} className="text-center mb-14 sm:mb-20 opacity-0">
          <p className="inline-flex items-center gap-3 mb-6 text-slate-500 text-xs sm:text-sm font-medium tracking-widest uppercase">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-dawn-gold/70" aria-hidden="true" />
            <span>{t('philosophy.badge', 'Naše filozofie')}</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-dawn-gold/70" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-5 leading-tight">
            {t('philosophy.header_title')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            {t('philosophy.header_subtitle')}
          </p>
        </header>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {sections.map((section, idx) => (
            <SectionCard key={section.key} section={section} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
