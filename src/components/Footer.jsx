import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const emails = [
    { address: 'serhii.khudanych.s@gyarab.cz', label: 'Serhii Khudanych' },
    { address: 'matous.tlamka.s@gyarab.cz', label: 'Vedení Youth Arabská' },
  ]

  return (
    <footer className="relative py-8 sm:py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl bg-black/40 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
            
            <div className="sm:col-span-2">
              <Link to="/" className="flex items-center mb-4 flex-wrap">
                <span className="text-white font-serif font-bold text-xl sm:text-2xl tracking-wide">{t('common.brand_youth')}</span>
                <span className="text-gradient font-serif font-bold text-xl sm:text-2xl tracking-wide ml-1.5">{t('common.brand_arabska')}</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                {t('footer.description')}
              </p>
              
              <div className="flex flex-col gap-3 mb-4">
                {emails.map((email) => (
                  <a 
                    key={email.address}
                    href={`mailto:${email.address}`} 
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-start gap-2 text-xs sm:text-sm bg-white/5 px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 w-fit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span className="break-all">{email.address}</span>
                  </a>
                ))}
              </div>
              
              <a 
                href="https://www.instagram.com/youtharabska/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-dawn-gold transition-colors duration-200 p-2 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 sm:w-auto w-12 self-start"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>

            <div>
              <h4 className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6">{t('footer.navigation', 'Odkazy')}</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/horizon" className="text-white/60 hover:text-white text-sm transition-colors block">{t('common.nav.horizon', 'Youth Horizon')}</Link></li>
                <li><Link to="/akce" className="text-white/60 hover:text-white text-sm transition-colors block">{t('common.nav.akce', 'Naše Akce')}</Link></li>
                <li><Link to="/vize" className="text-white/60 hover:text-white text-sm transition-colors block">{t('common.nav.vize', 'O nás')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6">{t('footer.institutions', 'Instituce')}</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="https://www.gyarab.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="break-words">{t('common.gymnazium', 'Gymnázium Arabská')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 flex-shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Youth Arabská. {t('footer.copyright', 'Všechna práva vyhrazena.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
