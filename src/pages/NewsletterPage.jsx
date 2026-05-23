import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const newsletters = [
  {
    id: 'i',
    file: 'news_i.html',
    issue: 'I',
    period: 'Leden — Únor 2026',
    monthRange: '01–02 / 2026',
    description: 'První vydání newsletteru Youth Arabské. Akce, novinky z komunity a co se chystá v novém roce.',
  },
  {
    id: 'ii',
    file: 'news_II.html',
    issue: 'II',
    period: 'Březen — Duben 2026',
    monthRange: '03–04 / 2026',
    description: 'Druhé vydání. Přípravy na jarní akce, zprávy z komunity a nová spolupráce s partnery.',
  },
  {
    id: 'iii',
    file: 'news_III.html',
    issue: 'III',
    period: 'Květen — Červen 2026',
    monthRange: '05–06 / 2026',
    description: 'Třetí vydání. Letní shrnutí celé sezóny a výhled na to, co připravujeme příští rok.',
  },
]

function NewsletterCard({ nl, index }) {
  return (
    <motion.a
      href={`/YouthArabskaWeb/${nl.file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] hover:border-dawn-gold/25 overflow-hidden transition-all duration-500"
      style={{ background: 'linear-gradient(160deg, #0d1526 0%, #070a17 100%)', minHeight: '300px' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.008 }}
    >
      {/* Top glass highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Gold glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.04), transparent 70%)', filter: 'blur(30px)' }}
      />
      {/* Watermark issue number */}
      <div
        className="absolute -bottom-3 -right-2 font-serif font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(5rem, 10vw, 8rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,215,0,0.07)',
        }}
        aria-hidden="true"
      >
        {nl.issue}
      </div>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full" style={{ minHeight: '300px' }}>
        <div>
          {/* Issue + period */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-dawn-gold/20 to-dawn-orange/10 border border-dawn-gold/20 font-serif font-bold text-dawn-gold text-sm flex-shrink-0">
              {nl.issue}
            </span>
            <p className="text-dawn-gold/65 text-[10px] font-bold tracking-[0.25em] uppercase">{nl.monthRange}</p>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-dawn-gold/90 transition-colors duration-300">
            {nl.period}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed">
            {nl.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-8 text-dawn-gold/55 group-hover:text-dawn-gold transition-colors duration-300">
          <div className="h-px bg-dawn-gold/35 group-hover:bg-dawn-gold transition-all duration-500 group-hover:w-10" style={{ width: '1.5rem' }} />
          <span className="text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
            Přečíst
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default function NewsletterPage() {
  return (
    <>
      <SEO
        title="Newsletter – Youth Arabská"
        description="Archiv e-mailových newsletterů Youth Arabské. Novinky, akce a zprávy z komunity každé dva měsíce."
        canonical="/newsletter"
      />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gradient-to-r from-dawn-gold/80 to-dawn-orange/60" />
              <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">
                Archiv vydání
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Newsletter{' '}
              <span className="text-gradient">Youth Arabské</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Každé dva měsíce posíláme e-mailový newsletter s novinkami z komunity, připravovanými akcemi a zajímavými tipy. Tady najdeš všechna dosavadní vydání.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {newsletters.map((nl, i) => (
              <NewsletterCard key={nl.id} nl={nl} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
