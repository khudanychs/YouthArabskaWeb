import { useEffect } from 'react'

export default function SpotlightTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const supportsHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    if (!supportsHover) return

    let raf = 0
    let pendingCard = null
    let pendingCX = 0, pendingCY = 0
    let pendingGX = 0, pendingGY = 0

    const handlePointerMove = (event) => {
      // Per-card spotlight (existing glass-card effect)
      const card = event.target.closest?.('.glass-card')
      if (card) {
        const rect = card.getBoundingClientRect()
        pendingCard = card
        pendingCX = event.clientX - rect.left
        pendingCY = event.clientY - rect.top
      }

      // Global page spotlight
      pendingGX = event.clientX
      pendingGY = event.clientY

      if (raf) return
      raf = requestAnimationFrame(() => {
        if (pendingCard) {
          pendingCard.style.setProperty('--spot-x', `${pendingCX}px`)
          pendingCard.style.setProperty('--spot-y', `${pendingCY}px`)
        }
        // Update global cursor vars for the page-spotlight div in PremiumBackground
        document.documentElement.style.setProperty('--cursor-x', `${pendingGX}px`)
        document.documentElement.style.setProperty('--cursor-y', `${pendingGY}px`)
        raf = 0
      })
    }

    document.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
