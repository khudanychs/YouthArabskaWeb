import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const details = [
  {
    categoryKey: 'state',
    itemKeys: ['ek_cr', 'tvorime_evropu', 'av_cr', 'ct']
  },
  {
    categoryKey: 'nonprofit',
    itemKeys: ['summit', 'future_port', 'dofe', 'amkon']
  },
  {
    categoryKey: 'private',
    itemKeys: ['ef', 'yfu', 'fondee', 'renome']
  }
]

export default function HorizonDetails() {
  const { t } = useTranslation()
  const ref = useReveal()

  return (
    <section className="py-24 px-4 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 text-center">
            {t('horizon.details.header_title')}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-center">
            {t('horizon.details.header_subtitle')}
          </p>
        </header>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-enter">
          {details.map((group) => (
            <div key={group.categoryKey} className="space-y-8">
              <h3 className="text-dawn-gold text-xs font-bold tracking-[0.2em] uppercase border-b border-dawn-gold/20 pb-4">
                {t(`horizon.details.categories.${group.categoryKey}`)}
              </h3>
              <div className="space-y-8">
                {group.itemKeys.map((itemKey) => (
                  <div key={itemKey} className="group">
                    <h4 className="text-white font-serif text-xl font-bold mb-2 group-hover:text-dawn-gold transition-colors">
                      {t(`horizon.details.items.${itemKey}.name`)}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t(`horizon.details.items.${itemKey}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
