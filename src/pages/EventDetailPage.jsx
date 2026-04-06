import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import useReveal from '../hooks/useReveal'

const eventData = {
  'horizon-2025': {
    key: 'horizon_2025',
    images: [
      { src: '/YouthArabskaWeb/Horizon1.jpg', alt: 'Horizon1' },
      { src: '/YouthArabskaWeb/Horizon2.jpg', alt: 'Horizon2' },
      { src: '/YouthArabskaWeb/Horizon3.jpg', alt: 'Horizon3' },
      { src: '/YouthArabskaWeb/Horizon4.jpg', alt: 'Horizon4' }
    ]
  },
  'beyond-the-bell': {
    key: 'beyond_the_bell',
    images: []
  }
}

export default function EventDetailPage() {
  const { eventId } = useParams()
  const { t } = useTranslation()
  const headerRef = useReveal()
  const contentRef = useReveal(200)

  const event = eventData[eventId]

  if (!event) {
    return (
      <div className="min-h-screen pt-24 sm:pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('event_detail.not_found')}
          </h1>
          <Link 
            to="/akce" 
            className="inline-flex items-center gap-2 text-dawn-gold hover:text-dawn-orange transition-colors text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {t('event_detail.back_to_events')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={t(`events.items.${event.key}.title`)}
        description={t(`events.items.${event.key}.desc`)}
        canonical={`/akce/${eventId}`}
      />
      
      <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/akce" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 sm:mb-8 group text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {t('event_detail.back_to_events')}
          </Link>

          <header ref={headerRef} className="mb-10 sm:mb-12 reveal-enter">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-dawn-gold/80 text-xs font-bold tracking-widest uppercase">
                {t(`events.items.${event.key}.date`)}
              </span>
              <span className="text-[10px] text-white/30 border border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('events.status_done')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t(`events.items.${event.key}.title`)}
            </h1>

            <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              {t(`events.items.${event.key}.desc`)}
            </p>
          </header>

          <div ref={contentRef} className="reveal-enter space-y-8 sm:space-y-12">
            <section className="glass-card p-6 sm:p-8 md:p-12">
              <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                {t('event_detail.about_title')}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/70 leading-relaxed mb-4 text-sm sm:text-base">
                  {t('event_detail.about_text_1')}
                </p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {t('event_detail.about_text_2')}
                </p>
              </div>
            </section>

            {event.images && event.images.length > 0 && (
              <section className="glass-card p-6 sm:p-8 md:p-12">
                <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                  {t('event_detail.gallery_title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {event.images.map((img, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-xl bg-white/5">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={img.src}
                          alt={t(`photogrid.photos.horizon_${idx + 1}.alt`)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {t(`photogrid.photos.horizon_${idx + 1}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="glass-card p-6 sm:p-8 md:p-12 bg-gradient-to-br from-dawn-gold/5 to-dawn-orange/5 border-dawn-gold/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    {t('event_detail.cta_title')}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    {t('event_detail.cta_text')}
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/youtharabska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base w-full md:w-auto justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="hidden sm:inline">{t('event_detail.cta_button')}</span>
                  <span className="sm:hidden">{t('event_detail.cta_button_mobile')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
