import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`glass-card p-8 md:p-10 grid grid-cols-1 ${isHomePage ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 mb-6`}>
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-serif font-bold text-xl tracking-wide">{t('common.brand_youth')}</span>
              <span className="text-gradient font-serif font-bold text-xl tracking-wide ml-1.5">{t('common.brand_arabska')}</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigace - POUZE na hlavní stránce a POUZE čisté kotvy */}
          {isHomePage && (
            <div>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">{t('footer.navigation')}</h4>
              <ul className="space-y-2">
                <li><a href="#vize" className="text-white/50 hover:text-white text-xs transition-colors">{t('common.nav.vize')}</a></li>
                <li><a href="#horizon" className="text-white/50 hover:text-white text-xs transition-colors">{t('common.nav.horizon')}</a></li>
                <li><a href="#akce" className="text-white/50 hover:text-white text-xs transition-colors">{t('common.nav.akce')}</a></li>
                <li><a href="#spojenectvi" className="text-white/50 hover:text-white text-xs transition-colors">{t('common.nav.spojenectvi')}</a></li>
              </ul>
            </div>
          )}

          {/* Instituce */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">{t('footer.institutions')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.gyarab.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  {t('common.gymnazium')}
                </a>
              </li>
              {isHomePage && (
                <li>
                  <a href="#vize" className="text-white/50 hover:text-white text-xs transition-colors">
                    {t('footer.ethical_code')}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
