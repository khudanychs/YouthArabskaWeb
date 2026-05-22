import { useEffect } from 'react'

/**
 * SpotlightTracker
 *
 * Mounts a single global `pointermove` listener that updates two CSS custom
 * properties (`--spot-x`, `--spot-y`) on the nearest `.glass-card` ancestor
 * of the cursor target. The CSS in `index.css` then renders a soft radial
 * glow at those coordinates via a `::after` pseudo-element on each card —
 * the cursor-tracking "spotlight" effect popularized by Linear, Stripe,
 * Vercel and other top-tier marketing sites.
 *
 * Performance:
 *  - Single document-level listener (not per-card)
 *  - `requestAnimationFrame`-throttled — never updates more than once per frame
 *  - Skips fine pointer absent (touch devices) — the effect only activates
 *    on devices where it makes sense visually
 *  - Marked `passive: true`; only writes two CSS vars, no layout thrash
 */
export default function SpotlightTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only enable on devices with a fine pointer (mouse/trackpad).
    // On touch the effect adds nothing and would just waste cycles.
    const supportsHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    if (!supportsHover) return

    let raf = 0
    let pendingTarget = null
    let pendingX = 0
    let pendingY = 0

    const handlePointerMove = (event) => {
      const card = event.target.closest?.('.glass-card')
      if (!card) return

      const rect = card.getBoundingClientRect()
      pendingTarget = card
      pendingX = event.clientX - rect.left
      pendingY = event.clientY - rect.top

      if (raf) return
      raf = requestAnimationFrame(() => {
        if (pendingTarget) {
          pendingTarget.style.setProperty('--spot-x', `${pendingX}px`)
          pendingTarget.style.setProperty('--spot-y', `${pendingY}px`)
        }
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
