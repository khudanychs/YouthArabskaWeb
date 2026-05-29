import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const eventData = {
  'horizon-2025': {
    key: 'horizon_2025',
    images: [
      { src: '/YouthArabskaWeb/Horizon1.jpg' },
      { src: '/YouthArabskaWeb/Horizon2.jpg' },
      { src: '/YouthArabskaWeb/Horizon5.jpg' },
      { src: '/YouthArabskaWeb/Horizon4.jpg' }
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
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const event = eventData[eventId]

  useEffect(() => {
    if (activeImageIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') { setActiveImageIndex(null); return }
      if (!event?.images?.length) return
      if (e.key === 'ArrowRight') setActiveImageIndex((prev) => (prev + 1) % event.images.length)
      if (e.key === 'ArrowLeft') setActiveImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImageIndex, event])

  if (!event) {
    return (
      <div className="min-h-screen pt-28 sm:pt-36 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t('event_detail.not_found')}
          </h1>
          <Link
            to="/akce"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors text-sm sm:text-base font-medium"
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

      <div className="min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-28 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/akce"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 sm:mb-10 group text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              {t('event_detail.back_to_events')}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            className="mb-12 sm:mb-14"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">
                {t(`events.items.${event.key}.date`)}
              </span>
              <span className="text-[10px] text-slate-500 border border-slate-200 px-3 py-1 rounded-full uppercase tracking-tighter">
                {t('events.status_done')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-5 sm:mb-6 leading-tight">
              {t(`events.items.${event.key}.title`)}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              {t(`events.items.${event.key}.desc`)}
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* About card */}
            <section className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                {t('event_detail.about_title')}
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t('event_detail.about_text_1')}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t('event_detail.about_text_2')}
                </p>
              </div>
            </section>

            {/* Gallery */}
            {event.images && event.images.length > 0 && (
              <section className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
                  {t('event_detail.gallery_title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {event.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className="group relative overflow-hidden rounded-xl border border-slate-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-dawn-gold/60"
                      whileHover={{ scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={img.src}
                          alt={t(`photogrid.photos.horizon_${idx + 1}.alt`)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-light leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {t(`photogrid.photos.horizon_${idx + 1}.description`)}
                        </p>
                      </div>
                      {/* Corner accent */}
                      <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* CTA card */}
            <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50/40">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {t('event_detail.cta_title')}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    {t('event_detail.cta_text')}
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/youtharabska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-gold inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold hover:scale-[1.02] transition-all duration-300 whitespace-nowrap text-sm sm:text-base w-full md:w-auto justify-center flex-shrink-0"
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
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {activeImageIndex !== null && event.images[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={t('event_detail.gallery_title')}
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null) }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label={t('event_detail.close_gallery')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length) }}
            className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={t('event_detail.prev_photo')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={event.images[activeImageIndex].src}
              alt={t(`photogrid.photos.horizon_${activeImageIndex + 1}.alt`)}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <figcaption className="mt-4 text-center text-white/75 text-sm sm:text-base">
              {t(`photogrid.photos.horizon_${activeImageIndex + 1}.description`)}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActiveImageIndex((prev) => (prev + 1) % event.images.length) }}
            className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={t('event_detail.next_photo')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
