import SEO from '../components/SEO'
import PhotoGrid from '../components/PhotoGrid'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function GalleryPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Galerie – Youth Arabská"
        description="Prohlédněte si fotografie z našich akcí, setkání a Youth Horizonu. Momentky z komunity Youth Arabská."
        canonical="/gallery"
        ogTitle="Galerie | Youth Arabská – Momentky z našich akcí"
        ogDescription="Podívejte se na energii a atmosféru naší komunity skrze fotografie z akcí a setkání."
      />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gradient-to-r from-dawn-gold/80 to-dawn-orange/60" />
              <span className="text-dawn-gold text-xs font-semibold tracking-widest uppercase">
                Vizuální příběh
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Galerie naší{' '}
              <span className="text-gradient">komunity</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Fotografie a momentky, které zachycují energii Youth Arabské — atmosféru akcí, inspirativní setkání a komunitu, která se neustále učí a roste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PhotoGrid */}
      <PhotoGrid />

      {/* CTA */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50/40 p-10 sm:p-14 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Chceš být součástí příběhu?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Připoj se k Youth Arabské a staň se součástí komunity, kde se dějí věci. Fotky z tvých příspěvků by mohly inspirovat další studenty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-gold px-7 py-3.5 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-sm sm:text-base hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Sleduj nás na Instagramu
              </a>
              <Link
                to="/spojenectvi"
                className="px-7 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 font-semibold text-sm sm:text-base text-center"
              >
                Připoj se k nám
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
