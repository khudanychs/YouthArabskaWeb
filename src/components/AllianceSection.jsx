import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

export default function AllianceSection() {
  const { t } = useTranslation()
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="spojenectvi" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="glass-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 reveal-enter"
        >
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              {t('alliance.title')}
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              {t('alliance.description')}
            </p>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <strong className="text-white">{t('alliance.labels.headquarters')}:</strong> {t('common.gymnazium_long')}
              </p>
              <p>
                <strong className="text-white">{t('alliance.labels.communication')}:</strong>{' '}
                <a href="mailto:vedeni@youth.gyarab.cz" className="text-dawn-gold hover:underline transition-colors">
                  vedeni@youth.gyarab.cz
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-dawn-gold/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dawn-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">{t('alliance.success_title')}</p>
                <p className="text-white/60 text-sm">{t('alliance.success_text')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    {t('alliance.labels.name')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('alliance.placeholders.name')}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    {t('alliance.labels.email')}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t('alliance.placeholders.email')}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    {t('alliance.labels.vision')}
                  </label>
                  <textarea
                    required
                    rows={8}
                    placeholder={t('alliance.placeholders.vision')}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all resize-none leading-relaxed"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-widest"
                >
                  {t('alliance.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
