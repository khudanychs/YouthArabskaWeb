import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  { id: 'student_1' },
  { id: 'student_2' },
]

function TestimonialCard({ testimonial }) {
  const { t } = useTranslation()
  return (
    <div className="relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px]">
      <div
        className="relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-100 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
          minHeight: '240px',
        }}
      >
        {/* Big decorative quote */}
        <div
          className="absolute -top-4 -left-1 text-[8rem] sm:text-[10rem] font-serif font-bold leading-none select-none pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,126,95,0.05))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          "
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 relative z-10 pt-4">
          {t(`testimonials.items.${testimonial.id}.quote`)}
        </p>

        <div className="flex items-center gap-3 border-t border-slate-100 pt-4 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-dawn-gold/30 to-dawn-orange/20 border border-white/10 flex-shrink-0 flex items-center justify-center">
            <span className="text-dawn-gold text-xs font-bold">
              {t(`testimonials.items.${testimonial.id}.author`).charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-slate-900 font-semibold text-sm leading-tight">
              {t(`testimonials.items.${testimonial.id}.author`)}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">
              {t(`testimonials.items.${testimonial.id}.role`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const marqueeRef = useRef(null)

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
        marqueeRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: marqueeRef.current, start: 'top 82%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const doubled = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header ref={headerRef} className="text-center mb-14 sm:mb-16 opacity-0">
          <p className="inline-flex items-center gap-3 mb-6 text-slate-500 text-xs sm:text-sm font-medium tracking-widest uppercase">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-dawn-gold/70" aria-hidden="true" />
            <span>{t('testimonials.badge')}</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-dawn-gold/70" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-5 leading-tight">
            {t('testimonials.title_1')}{' '}
            <span className="text-gradient">{t('testimonials.title_2')}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </header>
      </div>

      {/* Full-width marquee */}
      <div ref={marqueeRef} className="relative overflow-hidden opacity-0">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

        <div className="marquee-track gap-5 px-5" style={{ display: 'flex' }}>
          {doubled.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto mt-14 text-center px-4">
        <p className="text-slate-600 mb-5 text-sm sm:text-base">
          {t('testimonials.cta_text')}
        </p>
        <motion.a
          href="https://www.instagram.com/youtharabska/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow-gold inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm sm:text-base"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          <span className="whitespace-nowrap">{t('testimonials.cta_button')}</span>
        </motion.a>
      </div>
    </section>
  )
}
