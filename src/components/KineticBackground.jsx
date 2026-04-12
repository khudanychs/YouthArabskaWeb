import { useRef, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768
const MOBILE_HEIGHT_BUFFER = 300
const MAX_DPR = 1.5

class GlassSphere {
  constructor(canvasWidth, canvasHeight, ctx, dpr) {
    this.ctx = ctx
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.radius = Math.random() * 60 + 20
    this.x = Math.random() * this.canvasWidth
    this.y = Math.random() * this.canvasHeight
    this.mass = this.radius
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = -(Math.random() * 0.8 + 0.2)
    this.baseOpacity = Math.random() * 0.15 + 0.05
    this.size = this.radius * 2 + 2

    // OPTIMALIZACE PRO VYSOKÉ ROZLIŠENÍ
    // Offscreen canvas musí být také znásobený DPR pro krystalickou ostrost
    this.offscreen = document.createElement('canvas')
    this.offscreen.width = this.size * dpr
    this.offscreen.height = this.size * dpr
    const octx = this.offscreen.getContext('2d')
    octx.scale(dpr, dpr) // Vykreslování uvnitř offscreenu zohlední DPR

    const cx = this.size / 2
    const cy = this.size / 2

    octx.beginPath()
    octx.arc(cx, cy, this.radius, 0, Math.PI * 2, false)
    const gradient = octx.createRadialGradient(
      cx - this.radius * 0.3,
      cy - this.radius * 0.3,
      this.radius * 0.1,
      cx,
      cy,
      this.radius
    )
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.baseOpacity + 0.3})`)
    gradient.addColorStop(0.4, `rgba(255, 255, 255, ${this.baseOpacity})`)
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
    octx.fillStyle = gradient
    octx.fill()
    octx.lineWidth = 0.5
    octx.strokeStyle = `rgba(255, 255, 255, ${this.baseOpacity + 0.1})`
    octx.stroke()
    octx.closePath()
  }

  draw() {
    // Vykreslíme high-res offscreen canvas do logických souřadnic main canvasu
    this.ctx.drawImage(
      this.offscreen, 
      this.x - this.radius - 1, 
      this.y - this.radius - 1, 
      this.size, 
      this.size
    )
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.speedX += (Math.random() - 0.5) * 0.02
    
    if (this.speedX > 1) this.speedX = 1
    if (this.speedX < -1) this.speedX = -1
    
    // Plynulý návrat nahoru, když bublina odletí
    if (this.y + this.radius < 0) {
      this.y = this.canvasHeight + this.radius
      this.x = Math.random() * this.canvasWidth
      this.speedY = -(Math.random() * 0.8 + 0.2)
    }
    
    this.draw()
  }
}

export default function KineticBackground() {
  const canvasRef = useRef(null)
  const useCssFallback = (import.meta.env.VITE_KINETIC_BG_MODE || '').toLowerCase() === 'css'
  const cssParticles = Array.from({ length: 12 })

  useEffect(() => {
    if (useCssFallback) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let spheres = []
    let animFrameId

    // Cap DPR to keep GPU cost stable on high-refresh mobile/tablet displays.
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)

    function populateSpheres(width, height) {
      spheres = []
      const density = width <= MOBILE_BREAKPOINT ? 0.00003 : 0.00004
      const count = Math.floor(width * height * density)
      const optimalCount = Math.min(Math.max(count, 15), 50)

      for (let i = 0; i < optimalCount; i++) {
        spheres.push(new GlassSphere(width, height, ctx, dpr))
      }
    }

    function sizeCanvas(logicalWidth, logicalHeight) {
      canvas.style.width = `${logicalWidth}px`
      canvas.style.height = `${logicalHeight}px`

      canvas.width = Math.floor(logicalWidth * dpr)
      canvas.height = Math.floor(logicalHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      populateSpheres(logicalWidth, logicalHeight)
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate)

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      for (let i = 0; i < spheres.length; i++) {
        spheres[i].update()
      }
    }

    const mountedWidth = window.innerWidth
    const isMobileAtMount = mountedWidth <= MOBILE_BREAKPOINT
    let lastKnownWidth = mountedWidth

    if (isMobileAtMount) {
      sizeCanvas(mountedWidth, window.screen.height + MOBILE_HEIGHT_BUFFER)
    } else {
      sizeCanvas(mountedWidth, window.innerHeight)
    }

    animate()

    let cleanupResizeListener = () => {}

    if (isMobileAtMount) {
      const handleOrientationChange = () => {
        const nextWidth = window.innerWidth
        if (nextWidth === lastKnownWidth) return

        lastKnownWidth = nextWidth
        const nextIsMobile = nextWidth <= MOBILE_BREAKPOINT
        const nextHeight = nextIsMobile
          ? window.screen.height + MOBILE_HEIGHT_BUFFER
          : window.innerHeight

        sizeCanvas(nextWidth, nextHeight)
      }

      window.addEventListener('orientationchange', handleOrientationChange)
      cleanupResizeListener = () => {
        window.removeEventListener('orientationchange', handleOrientationChange)
      }
    } else {
      const handleResize = () => {
        const nextWidth = window.innerWidth
        const nextHeight = window.innerHeight

        if (nextWidth === lastKnownWidth && nextHeight === canvas.height / dpr) return
        lastKnownWidth = nextWidth
        sizeCanvas(nextWidth, nextHeight)
      }

      window.addEventListener('resize', handleResize)
      cleanupResizeListener = () => {
        window.removeEventListener('resize', handleResize)
      }
    }

    return () => {
      cancelAnimationFrame(animFrameId)
      cleanupResizeListener()
    }
  }, [useCssFallback])

  return (
    <div
      className="fixed top-0 left-0 z-0 pointer-events-none overflow-hidden bg-[#1a1a2e]"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
      aria-hidden="true"
    >
      {useCssFallback ? (
        <>
          <div className="absolute inset-0 kinetic-gradient-shift" />
          <div className="absolute inset-0 kinetic-vignette" />
          <div className="absolute inset-0">
            {cssParticles.map((_, index) => (
              <span
                key={index}
                className="kinetic-css-particle"
                style={{
                  '--particle-x': `${(index * 73) % 100}%`,
                  '--particle-size': `${16 + (index % 5) * 10}px`,
                  '--particle-delay': `${index * -1.8}s`,
                  '--particle-duration': `${18 + (index % 4) * 6}s`
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0d1b3e] to-[#1a1a2e]" />
          <canvas ref={canvasRef} className="absolute inset-0" />
        </>
      )}
    </div>
  )
}