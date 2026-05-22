import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AllianceSection() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="spojenectvi" className="relative py-20 sm:py-24 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Card with animated gradient border */}
        <div
          ref={cardRef}
          className="relative p-[1px] rounded-2xl opacity-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,126,95,0.1), rgba(199,121,208,0.15), rgba(255,215,0,0.1))',
          }}
        >
          <div
            className="relative rounded-[calc(1rem-1px)] p-7 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-9 sm:gap-12 overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(15,20,38,0.97) 0%, rgba(7,10,23,0.99) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Decorative editorial number */}
            <div
              className="editorial-number absolute -top-8 right-4 text-[12rem] sm:text-[16rem] pointer-events-none select-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 16rem)' }}
              aria-hidden="true"
            >
              01
            </div>

            {/* Left column — CTA text */}
            <div className="relative z-10">
              <p className="inline-flex items-center gap-3 mb-6 text-white/45 text-xs font-medium tracking-widest uppercase">
                <span className="w-5 h-px bg-dawn-gold/60" />
                <span>Připoj se</span>
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {t('alliance.title')}
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-7 sm:mb-9">
                {t('alliance.description')}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-colors">
                  <div className="text-dawn-gold/70 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/45 text-[10px] uppercase tracking-wider font-semibold block mb-0.5">{t('alliance.labels.headquarters')}</span>
                    <span className="text-white/75">{t('common.gymnazium_long')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-dawn-gold/20 transition-colors">
                  <div className="text-dawn-gold/70 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/45 text-[10px] uppercase tracking-wider font-semibold block mb-0.5">{t('alliance.labels.communication')}</span>
                    <a href="mailto:matous.tlamka.s@gyarab.cz" className="text-dawn-gold hover:underline transition-colors break-all">
                      matous.tlamka.s@gyarab.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — form */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {[
                      { id: 'alliance-name', name: 'name', type: 'text', labelKey: 'alliance.labels.name', placeholderKey: 'alliance.placeholders.name', autoComplete: 'name' },
                      { id: 'alliance-email', name: 'email', type: 'email', labelKey: 'alliance.labels.email', placeholderKey: 'alliance.placeholders.email', autoComplete: 'email' },
                    ].map((field, i) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 + i * 0.08, duration: 0.4 }}
                      >
                        <label htmlFor={field.id} className="block text-white/60 text-[10px] font-semibold mb-1.5 tracking-[0.2em] uppercase">
                          {t(field.labelKey)}
                        </label>
                        <input
                          id={field.id}
                          name={field.name}
                          type={field.type}
                          required
                          autoComplete={field.autoComplete}
                          placeholder={t(field.placeholderKey)}
                          className="w-full bg-white/[0.04] border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/[0.07] transition-all duration-200"
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.21, duration: 0.4 }}
                    >
                      <label htmlFor="alliance-vision" className="block text-white/60 text-[10px] font-semibold mb-1.5 tracking-[0.2em] uppercase">
                        {t('alliance.labels.vision')}
                      </label>
                      <textarea
                        id="alliance-vision"
                        name="vision"
                        required
                        rows={5}
                        autoComplete="off"
                        placeholder={t('alliance.placeholders.vision')}
                        className="w-full bg-white/[0.04] border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/[0.07] transition-all duration-200 resize-none leading-relaxed"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="btn-glow-gold w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm uppercase tracking-widest"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {t('alliance.submit')}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center h-full text-center gap-5 py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-dawn-gold/25 to-dawn-orange/15 border border-dawn-gold/30 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.1 }}
                    >
                      <svg className="w-8 h-8 text-dawn-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-white font-bold text-lg mb-2">{t('alliance.success_title')}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{t('alliance.success_text')}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
