import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function AllianceSection() {
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
              Připojte se k nám
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Hledáme jedince, kteří jsou ochotni investovat svůj čas do budování něčeho přesahujícího
              je samotné. Ať už toužíte organizovat, tvořit, nebo přinášet nové myšlenky – váš prostor
              je zde.
            </p>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <strong className="text-white">Sídlo:</strong> Gymnázium, Praha 6, Arabská 14
              </p>
              <p>
                <strong className="text-white">Komunikace:</strong>{' '}
                <a href="mailto:vedení@youth.gyarab.cz" className="text-dawn-gold hover:underline">
                  vedení@youth.gyarab.cz
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
                <p className="text-white font-semibold text-lg">Deklarace odeslána</p>
                <p className="text-white/60 text-sm">Brzy se ozveme.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Identifikace (Jméno)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vaše jméno a příjmení"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Akademický E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="@gyarab.cz"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Sféra zájmu
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-gray-900">Zvolte svou doménu...</option>
                    <option value="organizace" className="bg-gray-900">Architektura událostí (Organizace)</option>
                    <option value="technologie" className="bg-gray-900">Technologická infrastruktura</option>
                    <option value="komunikace" className="bg-gray-900">Vnější vztahy a PR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Vaše vize (Motivace)
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Jaký je váš cíl v naší komunitě?"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-dawn-gold/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Odeslat deklaraci
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
