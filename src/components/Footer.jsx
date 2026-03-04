import { Link } from 'react-router-dom'

export default function Footer() {
  const navLinks = [
    { to: '/vize', label: 'Filozofie' },
    { to: '/horizont', label: 'Horizont' },
    { to: '/program', label: 'Program' },
    { to: '/spojenectvi', label: 'Spojenectví' },
  ]

  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1 mb-3">
              <span className="text-white/70 font-sans font-light tracking-widest uppercase text-xs">Youth</span>
              <span className="text-gradient font-serif font-bold text-xl">Arabská</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              Platforma pro ty, kteří formují zítřek. Organizátoři projektu Horizont na Gymnáziu Arabská 14.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Navigace</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instituce */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Instituce</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.gyarab.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  Gymnázium Arabská
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">
                  Etický kodex komunity
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs">
          &copy; 2026 Youth Arabská. Konstruováno s respektem k tradici, s vizí do budoucnosti.
        </p>
      </div>
    </footer>
  )
}
