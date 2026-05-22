import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundBeams from './ui/BackgroundBeams'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '2', label: 'Uskutečněné akce' },
  { value: '200+', label: 'Spokojených účastníků' },
  { value: '2025', label: 'Rok vzniku' },
]

export default function HeroSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.65, ease: 'power3.out' }
      )
      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' },
        '-=0.3'
      )
      tl.fromTo(
        line2Ref.current,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' },
        '-=0.65'
      )
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.45'
      )
      tl.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
        '-=0.4'
      )
      tl.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        '-=0.35'
      )
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 overflow-hidden bg-transparent"
    >
      {/* Background beams */}
      <BackgroundBeams className="z-0 opacity-30" />

      {/* Parallax content wrapper */}
      <motion.div
        className="max-w-7xl mx-auto w-full relative z-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl">

          {/* Badge */}
          <div ref={badgeRef} className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 lg:mb-12 opacity-0">
            <span className="w-8 h-px bg-gradient-to-r from-dawn-gold/80 to-dawn-orange/60" aria-hidden="true" />
            <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
              {t('hero.badge', 'Oficiální studentská platforma')}
            </p>
          </div>

          {/* Headline — wrapper with overflow:hidden clips the upward slide reveal cleanly */}
          <h1 className="font-serif leading-[1.18] tracking-tight mb-7 sm:mb-9">
            <span
              ref={line1Ref}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-slate-900 opacity-0"
            >
              {t('hero.title_1')}
            </span>
            <span
              ref={line2Ref}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gradient-animated opacity-0"
            >
              {t('hero.title_2')}
            </span>
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-slate-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl lg:max-w-3xl mb-10 sm:mb-12 font-light opacity-0"
          >
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 mb-14 sm:mb-20 lg:mb-20">
            <Link
              to="/akce/horizon-2025"
              className="btn-glow-gold group relative px-7 py-3.5 sm:px-9 sm:py-[1.125rem] lg:px-11 lg:py-5 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm sm:text-base lg:text-lg hover:scale-[1.02] transition-all duration-300 text-center inline-flex items-center justify-center gap-2.5 opacity-0"
            >
              <span>{t('hero.cta_primary', 'Objev Youth Horizon')}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </motion.svg>
            </Link>

            <a
              href="mailto:serhii.khudanych.s@gyarab.cz"
              className="px-7 py-3.5 sm:px-9 sm:py-[1.125rem] lg:px-11 lg:py-5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg text-center backdrop-blur-sm opacity-0"
            >
              {t('hero.cta_secondary', 'Napište nám e-mail')}
            </a>
          </div>

          {/* Stats bar */}
          <div ref={statsRef} className="flex items-center gap-6 sm:gap-10 lg:gap-14 flex-wrap">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-1 opacity-0">
                <span className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Divider + premium line */}
            <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent ml-2" />
            <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs tracking-widest uppercase">
              <span className="w-5 h-px bg-dawn-gold/40" />
              <span>Gymnázium, Praha 6, Arabská 14</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0 animate-scroll-bounce"
        aria-hidden="true"
      >
        <span className="text-slate-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-400"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
