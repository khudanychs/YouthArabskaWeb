import { useRef, useEffect } from 'react'

class GlassSphere {
  constructor(canvasWidth, canvasHeight, ctx) {
    this.ctx = ctx
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.radius = Math.random() * 60 + 20
    this.x = Math.random() * this.canvasWidth
    this.y = Math.random() * this.canvasHeight // Start ON screen
    this.mass = this.radius
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = -(Math.random() * 0.8 + 0.2)
    this.baseOpacity = Math.random() * 0.15 + 0.05

    // OPTIMALIZACE: Pre-render kuličky do paměti (Offscreen Canvas)
    // Tím ušetříme extrémně náročné počítání gradientů v každém snímku
    this.offscreen = document.createElement('canvas')
    const size = this.radius * 2 + 2 // +2 px rezerva pro obrys
    this.offscreen.width = size
    this.offscreen.height = size
    const octx = this.offscreen.getContext('2d')
    const cx = size / 2
    const cy = size / 2

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
    // Vykreslíme předgenerovaný obrázek (mnohonásobně rychlejší)
    this.ctx.drawImage(this.offscreen, this.x - this.radius - 1, this.y - this.radius - 1)
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.speedX += (Math.random() - 0.5) * 0.02
    if (this.speedX > 1) this.speedX = 1
    if (this.speedX < -1) this.speedX = -1
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let spheres = []
    let animFrameId

    // Nativní rozlišení pro ostré hrany bublin
    const scale = 1 

    function populateSpheres() {
      spheres = []
      // Zvýšení počtu bublinek zpět pro plnější dojem
      const density = window.innerWidth <= 768 ? 0.00003 : 0.00004 
      const count = Math.floor(canvas.width * canvas.height * density)
      const optimalCount = Math.min(Math.max(count, 15), 50) 
      for (let i = 0; i < optimalCount; i++) {
        spheres.push(new GlassSphere(canvas.width, canvas.height, ctx))
      }
    }

    let lastWidth = 0
    let lastHeight = 0

    function handleResize() {
      if (window.innerWidth === lastWidth && window.innerHeight === lastHeight) return
      lastWidth = window.innerWidth
      lastHeight = window.innerHeight

      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale

      if (spheres.length === 0) {
        populateSpheres()
      } else {
        for (let i = 0; i < spheres.length; i++) {
          spheres[i].canvasWidth = canvas.width
          spheres[i].canvasHeight = canvas.height
        }
      }
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < spheres.length; i++) {
        spheres[i].update()
      }
    }

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" style={{ backgroundColor: '#1a0533' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0d1b3e] to-[#1a1a2e]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
