import SEO from '../components/SEO'
import PhotoGrid from '../components/PhotoGrid'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

export default function GalleryPage() {
  const { t } = useTranslation()
  const ref = useReveal()

  return (
    <>
      <SEO
        title="Galerie – Youth Arabská"
        description="Prohlédněte si fotografie z našich akcí, setkání a Event Youth Horizonu. Videa a fotografie z komunity Youth Arabská."
        canonical="/gallery"
        ogTitle="Galerie | Youth Arabská – Momentky z našich akcí"
        ogDescription="Podívejte se na energii a atmosféru naší komunity skrze fotografie z akcí a setkání."
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-start px-4 sm:px-8 py-32 overflow-hidden bg-transparent mt-16 md:mt-0">
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div ref={ref} className="max-w-4xl reveal-enter">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-dawn-gold/60" />
              <span className="text-dawn-gold/80 font-semibold tracking-widest uppercase text-xs">
                Vizuální příběh
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              Galerie naší <br />
              <span className="text-gradient">komunity</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-4">
              Fotografie, videa a momentky, které zachycují energii Youth Arabské. Vidět můžeš atmosféru našich akcí, inspirativní setkání a komunitu, která se neustále učí a roste.
            </p>
          </div>
        </div>
      </section>

      {/* PhotoGrid Section */}
      <PhotoGrid />

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={ref} className="reveal-enter">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Chcete být součástí příběhu?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Připoj se k Youth Arabské a staň se součástí komunity, kde se dějí věci. Fotografie a videa z tvých příspěvků by mohly inspirovat další studenty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/youtharabska/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-gold px-8 py-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-base hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Sleduj nás na Instagramu
              </a>
              <a
                href="/get-involved"
                className="px-8 py-4 rounded-xl border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-200 font-semibold text-base text-center"
              >
                Připoj se k nám
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
