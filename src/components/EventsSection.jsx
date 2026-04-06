import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const events = [
  {
    key: 'horizon_2025',
    status: 'done',
    id: 'horizon-2025'
  },
  {
    key: 'beyond_the_bell',
    status: 'done',
    id: 'beyond-the-bell'
  }
]

function EventCard({ event, index }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const ref = useReveal(index * 200)

  const handleClick = () => {
    sessionStorage.setItem('scrollFrom', 'akce')
    navigate(`/akce/${event.id}`)
  }

  return (
    <article 
      ref={ref} 
      onClick={handleClick}
      className="glass-card p-6 sm:p-8 group hover:border-dawn-gold/40 transition-all duration-500 reveal-enter cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4 gap-2">
        <span className="text-dawn-gold/80 text-xs font-bold tracking-widest uppercase">
          {t(`events.items.${event.key}.date`)}
        </span>
        <span className="text-[10px] text-white/30 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-tighter flex-shrink-0">
          {t('events.status_done')}
        </span>
      </div>
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gradient transition-all leading-tight">
        {t(`events.items.${event.key}.title`)}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4 sm:mb-6">
        {t(`events.items.${event.key}.desc`)}
      </p>
      <div className="flex gap-2 items-center">
        <div className="w-8 h-px bg-dawn-gold/30 group-hover:w-16 transition-all duration-500" />
        <span className="text-dawn-gold/60 text-xs group-hover:text-dawn-gold transition-colors whitespace-nowrap flex items-center gap-1">
          <span>{t('events.view_detail')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </span>
      </div>
    </article>
  )
}

export default function EventsSection() {
  const { t } = useTranslation()
  const headerRef = useReveal()
  return (
    <section id="akce" className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header ref={headerRef} className="text-center mb-12 sm:mb-16 reveal-enter">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('events.header_title')}
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t('events.header_subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, idx) => (
            <EventCard key={event.key} event={event} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
