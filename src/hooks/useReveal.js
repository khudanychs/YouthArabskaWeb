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
              entry.target.classList.remove('reveal-enter')
              entry.target.classList.add('reveal-visible')
            }, 50 + delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
