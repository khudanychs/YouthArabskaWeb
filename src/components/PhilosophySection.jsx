import useReveal from '../hooks/useReveal'

const pillars = [
  {
    title: 'Hloubka poznání',
    text: 'Odmítáme povrchnost. Zprostředkováváme přímý kontakt s kapacitami v oborech od metafyziky přes vědu až po byznys. Učíme analyzovat a chápat podstatu věcí.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v19M5 10h14M5 17h14" />
      </svg>
    ),
    delay: 0,
  },
  {
    title: 'Propojení světů',
    text: 'Akademická sféra nesmí existovat ve vakuu. Tvoříme pevný most mezi teorií a nekompromisní realitou praktického fungování společnosti.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    delay: 100,
  },
  {
    title: 'Tvorba elity',
    text: 'Budujeme komunitu jedinců s vůlí k moci nad vlastním osudem. Podporujeme ty, kteří mají odvahu měnit zavedené pořádky k lepšímu.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    delay: 200,
  },
]

function PillarCard({ pillar }) {
  const ref = useReveal(pillar.delay)
  return (
    <article ref={ref} className="glass-card p-8 flex flex-col gap-4 reveal-enter">
      <div className="text-dawn-gold">{pillar.icon}</div>
      <h3 className="font-serif text-xl font-bold text-white">{pillar.title}</h3>
      <p className="text-white/65 text-sm leading-relaxed">{pillar.text}</p>
    </article>
  )
}

export default function PhilosophySection() {
  const headerRef = useReveal()
  return (
    <section id="vize" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header ref={headerRef} className="text-center mb-16 reveal-enter">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Kultivace Myšlení
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Ctíme tradici klasického vzdělávání, avšak radikálně inovujeme jeho aplikaci.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
