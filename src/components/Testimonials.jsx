import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

export default function Testimonials() {
  const { t } = useTranslation()
  const ref = useReveal()

  const testimonials = [
    { id: 'student_1' },
    { id: 'student_2' }
  ]

  return (
    <section className="relative py-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal-enter mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 sm:w-12 h-px bg-dawn-gold/60" />
            <span className="text-dawn-gold/80 font-semibold tracking-widest uppercase text-xs">
              {t('testimonials.badge')}
            </span>
            <div className="w-8 sm:w-12 h-px bg-dawn-gold/60" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 px-4">
            {t('testimonials.title_1')} <span className="text-gradient">{t('testimonials.title_2')}</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative">
              <div className="glass-card p-6 sm:p-8 h-full flex flex-col justify-between hover:border-dawn-gold/50 transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-dawn-gold/40 group-hover:text-dawn-gold/60 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-2.5-6-2.5-1.986 0-2 .75-2 1.972V11c0 1-1 2-1 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  </svg>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  "{t(`testimonials.items.${testimonial.id}.quote`)}"
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t(`testimonials.items.${testimonial.id}.author`)}</p>
                  <p className="text-white/50 text-xs mt-1">{t(`testimonials.items.${testimonial.id}.role`)}</p>
                </div>
              </div>

              <div className="absolute -inset-px bg-gradient-to-br from-dawn-gold/10 to-dawn-orange/10 rounded-xl group-hover:from-dawn-gold/20 group-hover:to-dawn-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <p className="text-white/60 mb-4 text-sm sm:text-base">
            {t('testimonials.cta_text')}
          </p>
          <a
            href="https://www.instagram.com/youtharabska/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="whitespace-nowrap">{t('testimonials.cta_button')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
