import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

export default function HorizonSection() {
  const { t } = useTranslation()
  const ref = useReveal()

  const stats = [
    { value: '40+', name: t('horizon.stats.personalities') },
    { value: '15',  name: t('horizon.stats.institutions') },
    { value: '600+', name: t('horizon.stats.participants') },
  ]

  return (
    <section id="horizon" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="glass-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-enter"
        >
          {/* Content */}
          <div>
            <span className="text-dawn-gold/80 text-xs font-semibold tracking-widest uppercase mb-3 block">
              {t('horizon.badge')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              {t('horizon.title')}
            </h2>
            <div className="space-y-4 text-white/65 text-sm leading-relaxed mb-8">
              <p>
                {t('horizon.description_1')}
              </p>
              <p>
                {t('horizon.description_2')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.name} className="bg-white/5 rounded-xl p-4 text-center">
                  <span className="block text-2xl md:text-3xl font-bold text-gradient font-serif">{s.value}</span>
                  <span className="block text-xs text-white/50 mt-1">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex items-end justify-center gap-3 h-48 md:h-64">
            <div className="w-16 md:w-20 bg-gradient-to-t from-dawn-purple/60 to-dawn-gold/40 rounded-xl h-full opacity-80" />
            <div className="w-16 md:w-20 bg-gradient-to-t from-dawn-orange/60 to-dawn-purple/40 rounded-xl h-2/3 opacity-80" />
            <div className="w-16 md:w-20 bg-gradient-to-t from-dawn-gold/60 to-dawn-orange/40 rounded-xl h-1/2 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
