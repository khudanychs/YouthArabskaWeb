import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Vždy, když se změní cesta (např. z / na /vize), scrollujeme nahoru
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
