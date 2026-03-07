import useReveal from '../hooks/useReveal'

const details = [
  {
    category: 'Státní Správa',
    items: [
      { name: 'Zastoupení EK v ČR', desc: 'Informace o činnosti EU, vysvětlování politik a zprostředkování názorů.' },
      { name: 'Tvoříme Evropu', desc: 'Nezávislé informace o EU, vzdělávací akce a podpora debat.' },
      { name: 'Akademie věd ČR', desc: 'Největší veřejná výzkumná instituce, základní výzkum a popularizace vědy.' },
      { name: 'Česká televize', desc: 'Veřejnoprávní média, příležitosti pro stáže v produkci a žurnalistice.' },
    ]
  },
  {
    category: 'Neziskový Sektor',
    items: [
      { name: 'Pražský studentský summit', desc: 'Modelová jednání OSN a EU, rozvoj argumentačních dovedností.' },
      { name: 'Future Port Youth', desc: 'Technologická konference pro studenty, inovace a udržitelnost.' },
      { name: 'DofE', desc: 'Mezinárodní program rozvoje dovedností, sportu a dobrovolnictví.' },
      { name: 'AmKon', desc: 'Model amerického kongresu, simulace politického dění v USA.' },
    ]
  },
  {
    category: 'Soukromý Sektor',
    items: [
      { name: 'EF Education First', desc: 'Jazykové kurzy a studijní pobyty v zahraničí po celém světě.' },
      { name: 'YFU Česká republika', desc: 'Studium roku nebo semestru v zahraničí pro středoškoláky.' },
      { name: 'Fondee', desc: 'Investiční platforma pro snadné a transparentní investování do ETF.' },
      { name: 'Renome Card', desc: 'Prémiové NFC vizitky pro moderní síťování a prezentaci.' },
    ]
  }
]

export default function HorizonDetails() {
  const ref = useReveal()

  return (
    <section className="py-24 px-4 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 text-center">
            Příležitosti, které otevíráme
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-center">
            Na Youth Horizonu propojujeme studenty s organizacemi, které nabízejí reálnou praxi, stáže a prostor pro růst.
          </p>
        </header>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-enter">
          {details.map((group) => (
            <div key={group.category} className="space-y-8">
              <h3 className="text-dawn-gold text-xs font-bold tracking-[0.2em] uppercase border-b border-dawn-gold/20 pb-4">
                {group.category}
              </h3>
              <div className="space-y-8">
                {group.items.map((item) => (
                  <div key={item.name} className="group">
                    <h4 className="text-white font-serif text-xl font-bold mb-2 group-hover:text-dawn-gold transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
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
