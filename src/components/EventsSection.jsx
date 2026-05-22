import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
  { key: 'horizon_2025', id: 'horizon-2025', image: '/YouthArabskaWeb/Horizon2.jpg', featured: true },
  { key: 'beyond_the_bell', id: 'beyond-the-bell', image: null, featured: false },
]

function FeaturedEventCard({ event }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <motion.article
      onClick={() => navigate(`/akce/${event.id}`)}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{ minHeight: '380px' }}
      whileHover={{ scale: 1.008 }}
      transition={{ type: 'spring', stiffness: 250, damping: 28 }}
    >
      {/* Background image */}
      {event.image && (
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={t(`events.items.${event.key}.title`)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a17] via-[#070a17]/75 to-[#070a17]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a17]/60 to-transparent" />
        </div>
      )}

      {/* No-image fallback */}
      {!event.image && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(255,126,95,0.04) 50%, rgba(199,121,208,0.04) 100%)',
          }}
        />
      )}

      {/* Glass border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-dawn-gold/30 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-7 sm:p-9 lg:p-10" style={{ minHeight: '380px' }}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-dawn-gold text-xs font-bold tracking-widest uppercase">
            {t(`events.items.${event.key}.date`)}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-dawn-gold/50" />
          <span className="text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-tight">
            {t('events.status_done')}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5">
          {t(`events.items.${event.key}.title`)}
        </h3>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
          {t(`events.items.${event.key}.desc`)}
        </p>

        <div className="flex items-center gap-3 text-dawn-gold/70 group-hover:text-dawn-gold transition-colors duration-300">
          <motion.div
            className="h-px bg-dawn-gold/50 group-hover:bg-dawn-gold"
            initial={{ width: '2rem' }}
            whileHover={{ width: '4rem' }}
            transition={{ duration: 0.4 }}
            style={{ width: '2rem' }}
          />
          <span className="text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
            {t('events.view_detail')}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function SecondaryEventCard({ event }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <motion.article
      onClick={() => navigate(`/akce/${event.id}`)}
      className="tap-press p-6 sm:p-8 flex flex-col justify-between group cursor-pointer rounded-2xl border border-slate-200 bg-white hover:border-dawn-gold/40 hover:shadow-lg transition-all duration-500"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div>
        {/* Date as editorial element */}
        <div className="mb-5">
          <div className="text-dawn-gold/80 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
            {t(`events.items.${event.key}.date`)}
          </div>
          <div className="w-8 h-px bg-dawn-gold/30 group-hover:w-14 transition-all duration-500" />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-dawn-gold/90 transition-colors duration-300">
          {t(`events.items.${event.key}.title`)}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {t(`events.items.${event.key}.desc`)}
        </p>
      </div>

      <div className="flex items-center gap-2 text-dawn-gold/60 group-hover:text-dawn-gold transition-colors duration-300">
        <span className="text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
          {t('events.view_detail')}
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </span>
      </div>
    </motion.article>
  )
}

export default function EventsSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 82%', once: true },
        }
      )
      gsap.fromTo(
        Array.from(gridRef.current.children),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.16, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="akce" className="relative py-20 sm:py-24 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="text-center mb-14 sm:mb-18 opacity-0">
          <p className="inline-flex items-center gap-3 mb-6 text-slate-500 text-xs sm:text-sm font-medium tracking-widest uppercase">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-dawn-gold/70" aria-hidden="true" />
            <span>{t('events.badge', 'Akce')}</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-dawn-gold/70" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-5">
            {t('events.header_title')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            {t('events.header_subtitle')}
          </p>
        </header>

        {/* Magazine bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {/* Featured event — 2 columns */}
          <div className="md:col-span-2 opacity-0">
            <FeaturedEventCard event={events[0]} />
          </div>
          {/* Secondary event — 1 column */}
          <div className="opacity-0">
            <SecondaryEventCard event={events[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}
