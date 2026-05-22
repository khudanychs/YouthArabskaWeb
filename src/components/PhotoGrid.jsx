import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  {
    id: 1,
    src: '/YouthArabskaWeb/Horizon1.jpg',
    alt: 'Youth Horizon - Registrace účastníků',
    description: 'Kdokoliv se mohl zúčastnit veletrhu Youth Horizon',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 2,
    src: '/YouthArabskaWeb/Horizon2.jpg',
    alt: 'Youth Horizon - Diskuse s hosty',
    description: 'Inspirativní diskuse s odborníky z různých oborů',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    src: '/YouthArabskaWeb/Horizon5.jpg',
    alt: 'Youth Horizon - Networking',
    description: 'Stánky s interaktivními aktivitami pro účastníky',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    src: '/YouthArabskaWeb/Horizon4.jpg',
    alt: 'Youth Horizon - Organizátoři',
    description: 'Organizátoři akce Youth Horizon - Adam a Lujza',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    src: '/YouthArabskaWeb/Horizon3.jpg',
    alt: 'Youth Horizon - Atmosféra',
    description: 'Výjimečná atmosféra propojování lidí a myšlenek',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 6,
    src: '/YouthArabskaWeb/Horizon6.jpg',
    alt: 'Youth Horizon - Záběry z akce',
    description: 'Živá energie studentů a profesionálů na jednom místě',
    aspect: 'aspect-[4/3]',
  },
]

export default function PhotoGrid() {
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

      const items = gridRef.current.querySelectorAll('.photo-item')
      gsap.fromTo(
        items,
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.75,
          stagger: { amount: 0.65, from: 'start' },
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="photogrid" className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <header ref={headerRef} className="text-center mb-14 sm:mb-18 opacity-0">
          <p className="inline-flex items-center gap-3 mb-6 text-slate-500 text-xs sm:text-sm font-medium tracking-widest uppercase">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-dawn-gold/70" aria-hidden="true" />
            <span>Galerie</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-dawn-gold/70" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-5">
            {t('photogrid.header_title', 'Momentky z našich akcí')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            {t('photogrid.header_subtitle', 'Fotografie zachycující atmosféru a energii naší komunity')}
          </p>
        </header>

        {/* Masonry-style columns grid */}
        <div
          ref={gridRef}
          className="columns-2 md:columns-3 gap-4 sm:gap-5"
          style={{ columnFill: 'balance' }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="photo-item break-inside-avoid mb-4 sm:mb-5 group relative cursor-pointer opacity-0"
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            >
              <div
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] ${photo.aspect}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.p
                    className="text-white/95 text-[11px] sm:text-sm font-light leading-snug drop-shadow-md"
                    initial={{ y: 12, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                  >
                    {photo.description}
                  </motion.p>
                </motion.div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-dawn-gold/60 rounded-tl-xl sm:rounded-tl-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-dawn-gold/60 rounded-br-xl sm:rounded-br-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
