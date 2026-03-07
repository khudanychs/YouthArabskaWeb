import useReveal from '../hooks/useReveal'

export default function HeroSection() {
  const ref = useReveal()

  return (
    <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-8 py-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div ref={ref} className="max-w-4xl reveal-enter">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-dawn-gold/60" />
            <span className="text-dawn-gold/80 font-semibold tracking-widest uppercase text-xs">
              Officially recognized student platform
            </span>
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
            <a
              href="#akce"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-base hover:opacity-90 transition-opacity text-center"
            >
              Prozkoumat naše akce
            </a>
            <a
              href="#vize"
              className="px-8 py-4 rounded-xl border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-200 font-semibold text-base text-center"
            >
              Poznat naši filozofii
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
