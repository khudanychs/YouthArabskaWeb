import useReveal from '../hooks/useReveal'
import { useTranslation } from 'react-i18next'

export default function PhotoGrid() {
  const { t } = useTranslation()
  const ref = useReveal()
  
  const placeholders = [
    { id: 'atmosphere', delay: 0 },
    { id: 'lectures', delay: 100 },
    { id: 'networking', delay: 200 },
    { id: 'community', delay: 300 },
  ]

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            {t('photogrid.header_title')}
          </h2>
          <p className="text-white/60 text-lg">
            {t('photogrid.header_subtitle')}
          </p>
        </header>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-enter">
          {placeholders.map((item) => (
            <div 
              key={item.id} 
              className="relative group cursor-pointer"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-dawn-gold/20 to-dawn-orange/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 mb-4 border-2 border-dawn-gold/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-dawn-gold transition-all duration-500">
                    <svg className="w-6 h-6 text-dawn-gold/50 group-hover:text-dawn-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/40 group-hover:text-white/80 text-sm font-medium tracking-wide uppercase transition-colors">
                    {t(`photogrid.items.${item.id}`)}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-dawn-gold text-xs font-serif italic">{t('photogrid.view_detail')}</p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-dawn-gold/40 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-dawn-gold/40 rounded-br-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
