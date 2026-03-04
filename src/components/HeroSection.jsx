import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function HeroSection() {
  const ref = useReveal()

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto w-full">
        <div
          ref={ref}
          className="glass-card p-8 md:p-16 reveal-enter"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-dawn-gold/40 bg-dawn-gold/10 text-dawn-gold text-xs font-semibold tracking-widest uppercase">
            Aetas Aurea Vzdělávání
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Překračujeme <br />
            <span className="text-gradient">Zavedené Hranice</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Nejsme jen komunitou. Jsme katalyzátorem změny na Gymnáziu Arabská 14.
            Vytváříme dokonalý prostor pro ty, kteří chápou, že skutečné poznání a formování
            vlastní cesty začíná tam, kde končí běžné osnovy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/horizont"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-base hover:opacity-90 transition-opacity text-center"
            >
              Vstoupit do Horizontu
            </Link>
            <Link
              to="/vize"
              className="px-8 py-4 rounded-xl border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-200 font-semibold text-base text-center"
            >
              Poznat naši filozofii
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
