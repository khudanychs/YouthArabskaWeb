import { useEffect, useRef } from 'react'

export default function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              requestAnimationFrame(() => {
                entry.target.classList.remove('reveal-enter')
                entry.target.classList.add('reveal-visible')
              })
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
