import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`glass-card p-8 md:p-10 grid grid-cols-1 ${isHomePage ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 mb-6`}>
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-serif font-bold text-xl tracking-wide">Youth</span>
              <span className="text-gradient font-serif font-bold text-xl tracking-wide ml-1.5">Arabská</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              Platforma pro studenty, kteří chtějí víc. Organizátoři projektu Youth Horizon na Gymnáziu Arabská 14.
            </p>
          </div>

          {/* Navigace - POUZE na hlavní stránce a POUZE čisté kotvy */}
          {isHomePage && (
            <div>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Navigace</h4>
              <ul className="space-y-2">
                <li><a href="#vize" className="text-white/50 hover:text-white text-xs transition-colors">O nás</a></li>
                <li><a href="#horizon" className="text-white/50 hover:text-white text-xs transition-colors">Youth Horizon</a></li>
                <li><a href="#akce" className="text-white/50 hover:text-white text-xs transition-colors">Akce</a></li>
                <li><a href="#spojenectvi" className="text-white/50 hover:text-white text-xs transition-colors">Spojenectví</a></li>
              </ul>
            </div>
          )}

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
              {isHomePage && (
                <li>
                  <a href="#vize" className="text-white/50 hover:text-white text-xs transition-colors">
                    Etický kodex komunity
                  </a>
                </li>
              )}
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
