import useReveal from '../hooks/useReveal'

const sections = [
  {
    title: 'Kdo jsme?',
    text: 'Jsme skupina studentů, kterým není lhostejná budoucnost. Chceme být otevřeným prostorem pro nové nápady a živým místem setkávání, které slouží všem studentům Arabské.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    delay: 0,
  },
  {
    title: 'Co chceme?',
    text: 'Naším cílem je smysluplná aktivita. Pořádáme debaty, workshopy a propojujeme školu s praxí. Chceme, aby studenti měli možnost mluvit nahlas a aktivně se zapojit do veřejného dění.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    delay: 100,
  },
  {
    title: 'Naše mise',
    text: 'Věříme, že budoucnost není to, co přijde, ale to, co uděláme. Skrze projekt Youth Horizon a další aktivity budujeme sebevědomou komunitu připravenou na výzvy moderního světa.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    delay: 200,
  },
]

function SectionCard({ section }) {
  const ref = useReveal(section.delay)
  return (
    <article ref={ref} className="glass-card p-8 flex flex-col gap-4 reveal-enter">
      <div className="text-dawn-gold">{section.icon}</div>
      <h3 className="font-serif text-xl font-bold text-white">{section.title}</h3>
      <p className="text-white/65 text-sm leading-relaxed">{section.text}</p>
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
            Kdo jsme a co chceme
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Vytváříme prostředí pro růst, vzdělání a poznání nových lidí. Youth Arabská je víc než jen iniciativa – je to postoj k budoucnosti.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
}
