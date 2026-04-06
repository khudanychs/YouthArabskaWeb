import useReveal from '../hooks/useReveal'
import { useTranslation } from 'react-i18next'

export default function PhotoGrid() {
  const { t } = useTranslation()
  const ref = useReveal()
  
  const photos = [
    { 
      id: 1, 
      src: '/YouthArabskaWeb/Horizon1.jpg',
      alt: 'Youth Horizon - Registrace účastníků',
      description: 'Kdokoliv se mohl zúčastnit veletrhu Youth Horizon'
    },
    { 
      id: 2, 
      src: '/YouthArabskaWeb/Horizon2.jpg',
      alt: 'Youth Horizon - Diskuse s hosty',
      description: 'Inspirativní diskuse s odborníky z různých oborů'
    },
    { 
      id: 3, 
      src: '/YouthArabskaWeb/Horizon5.jpg',
      alt: 'Youth Horizon - Networking',
      description: 'Stánky s interaktivními aktivitami pro účastníky Youth Horizon'
    },
    { 
      id: 4, 
      src: '/YouthArabskaWeb/Horizon4.jpg',
      alt: 'Youth Horizon - Prezentace',
      description: 'Organizátoři akce Youth Horizon - Adam a Lujza'
    },
  ]

  return (
    <section id="photogrid" className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 overflow-hidden">
      {/* ZMĚNA: Zvětšil jsem max-width na 90rem (cca 1440px), takže na desktopu to bude masivnější */}
      <div className="max-w-[90rem] mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Momentky z našich akcí
          </h2>
          <p className="text-white/60 text-base sm:text-lg px-4">
            Fotografie zachycující atmosféru a energii naší komunity
          </p>
        </header>

        {/* ZMĚNA: grid-cols-2 je teď výchozí (mobil). xl:grid-cols-4 zajistí 1 řadu až na velkých monitorech */}
        <div ref={ref} className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 reveal-enter">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative group cursor-pointer rounded-xl sm:rounded-2xl transition-transform duration-500 sm:hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5 group-hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] transition-shadow duration-500">
                
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="relative w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* ZMĚNA: Menší padding a text na mobilu, aby popisky nepůsobily na malých 2x2 fotkách obrovsky */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-full sm:h-2/3 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-5 lg:p-6">
                  <p className="text-white/95 text-[10px] sm:text-sm font-light tracking-wide leading-snug sm:leading-relaxed drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {photo.description}
                  </p>
                </div>
              </div>

              {/* Dekorativní rožky - na mobilu jsou o něco menší (w-3 h-3) */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-dawn-gold/60 rounded-tl-xl sm:rounded-tl-2xl z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-dawn-gold/60 rounded-br-xl sm:rounded-br-2xl z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}