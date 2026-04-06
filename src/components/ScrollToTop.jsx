import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollFrom = sessionStorage.getItem('scrollFrom')
    
    if (scrollFrom && pathname === '/') {
      sessionStorage.removeItem('scrollFrom')
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(scrollFrom)
          if (element) {
            const yOffset = -100
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'auto' })
          }
        }, 150)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
