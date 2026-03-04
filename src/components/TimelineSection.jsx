import useReveal from '../hooks/useReveal'

const nodes = [
  {
    date: 'Podzim 2026',
    title: 'Iniciační Fórum',
    desc: 'Otevřená debata na téma směřování moderní společnosti a role jednotlivce v ní. Definování cílů pro aktuální akademický rok.',
    apex: false,
    delay: 0,
  },
  {
    date: 'Zima 2026/2027',
    title: 'Strategické Workshopy',
    desc: 'Cyklus setkání zaměřených na kritické myšlení, rétoriku a praktické dovednosti nezbytné pro úspěch v profesionálním světě.',
    apex: false,
    delay: 150,
  },
  {
    date: 'Jaro 2027',
    title: 'Veletrh Horizont',
    desc: 'Vyvrcholení celoročního úsilí. Setkání studentů s představiteli vědy, byznysu a veřejného života tváří v tvář.',
    apex: true,
    delay: 300,
  },
]

function TimelineNode({ node }) {
  const ref = useReveal(node.delay)
  return (
    <div ref={ref} className="flex gap-6 reveal-enter">
      {/* Marker + line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${
            node.apex
              ? 'bg-dawn-gold shadow-[0_0_16px_4px_rgba(255,215,0,0.4)]'
              : 'bg-white/30 border border-white/50'
          }`}
        />
        <div className="flex-1 w-px bg-white/10 mt-2" />
      </div>
      {/* Content */}
      <div
        className={`mb-10 flex-1 rounded-2xl p-6 border ${
          node.apex
            ? 'bg-white/15 backdrop-blur-xl border-dawn-gold/30 shadow-2xl'
            : 'glass-card'
        }`}
      >
        <span className="text-xs font-semibold text-dawn-gold/80 tracking-widest uppercase">{node.date}</span>
        <h3 className="font-serif text-xl font-bold text-white mt-1 mb-2">{node.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{node.desc}</p>
        {node.apex && (
          <button className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-dawn-gold to-dawn-orange text-black font-semibold text-sm hover:opacity-90 transition-opacity">
            Zajistit si místo
          </button>
        )}
      </div>
    </div>
  )
}

export default function TimelineSection() {
  const headerRef = useReveal()
  return (
    <section id="program" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <header ref={headerRef} className="text-center mb-16 reveal-enter">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Architektura Roku
          </h2>
          <p className="text-white/60 text-lg">
            Systematický plán našich kroků směrem k Horizontu.
          </p>
        </header>

        <div>
          {nodes.map((node) => (
            <TimelineNode key={node.title} node={node} />
          ))}
        </div>
      </div>
    </section>
  )
}
