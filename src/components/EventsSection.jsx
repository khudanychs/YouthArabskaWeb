import useReveal from '../hooks/useReveal'

const events = [
  {
    date: 'Září 2025',
    title: 'Veletrh Youth Horizon 2025',
    desc: 'První ročník veletrhu příležitostí, který na půdě Arabské propojil stovky studentů se zástupci vědy, byznysu a veřejného sektoru.',
    status: 'done'
  },
  {
    date: 'Únor 2026',
    title: 'Beyond The Bell',
    desc: 'Přímé setkání studentů s absolventy Arabské studujícími na pražských VŠ. Autentické informace o náročnosti oborů, přijímacím řízení a reálném životě na fakultách, které studentům pomáhají v rozhodování o budoucím směřování.',
    status: 'done'
  }
]

function EventCard({ event, index }) {
  const ref = useReveal(index * 200)
  return (
    <article 
      ref={ref} 
      className="glass-card p-8 group hover:border-dawn-gold/40 transition-all duration-500 reveal-enter"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-dawn-gold/80 text-xs font-bold tracking-widest uppercase">
          {event.date}
        </span>
        <span className="text-[10px] text-white/30 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
          Uskutečněno
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
        {event.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">
        {event.desc}
      </p>
      <div className="flex gap-2">
        <div className="w-8 h-px bg-dawn-gold/30 mt-3 group-hover:w-16 transition-all duration-500" />
      </div>
    </article>
  )
}

export default function EventsSection() {
  const headerRef = useReveal()
  return (
    <section id="akce" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header ref={headerRef} className="text-center mb-16 reveal-enter">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Naše Aktivity
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Vytváříme prostor, kde se teorie setkává s praxí. Podívejte se na projekty, které už mají své místo v naší komunitě.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <EventCard key={event.title} event={event} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
