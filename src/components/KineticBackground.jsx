import { useRef, useEffect } from 'react'

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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let spheres = []
    let animFrameId
    
    // Získání hustoty pixelů displeje. Zastropujeme na 2, abychom neuvařili grafiku na mobilech (DPR 3+ by bylo 9x více pixelů k počítání).
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function populateSpheres(width, height) {
      spheres = []
      const density = window.innerWidth <= 768 ? 0.00003 : 0.00004 
      const count = Math.floor(width * height * density)
      const optimalCount = Math.min(Math.max(count, 15), 50) 
      
      for (let i = 0; i < optimalCount; i++) {
        spheres.push(new GlassSphere(width, height, ctx, dpr))
      }
    }

    let lastLogicalWidth = 0

    function handleResize() {
      const logicalWidth = window.innerWidth
      
      // EXTRÉMNÍ OCHRANA PROTI SCROLLOVÁNÍ: 
      // Pokud se změní jen výška (URL lišta mizí/objevuje se), funkci okamžitě ukončíme.
      if (lastLogicalWidth === logicalWidth && lastLogicalWidth !== 0) {
        return
      }
      
      lastLogicalWidth = logicalWidth
      const isMobile = logicalWidth <= 768
      
      // Na mobilu nastavíme plátno na fyzickou velikost celého displeje, ne jen na okno prohlížeče.
      const logicalHeight = isMobile ? window.screen.height : window.innerHeight

      // 1. Nastavíme CSS (logickou) velikost, aby nepřetékalo doprava
      canvas.style.width = `${logicalWidth}px`
      canvas.style.height = `${logicalHeight}px`
      
      // 2. Nastavíme interní (renderovací) velikost znásobenou DPR pro ostrost
      canvas.width = logicalWidth * dpr
      canvas.height = logicalHeight * dpr
      
      // 3. Řekneme kontextu, aby všechno interně škáloval
      ctx.scale(dpr, dpr)

      populateSpheres(logicalWidth, logicalHeight)
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      
      // ClearReact také musí používat logické rozměry, protože ctx je teď pod vlivem ctx.scale()
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      
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
    <div 
      /* FIX 3: Místo h-full použijeme h-[100dvh], což dynamicky reaguje na mizející lištu Chrome */
      className="fixed inset-0 w-full h-[100dvh] z-0 pointer-events-none overflow-hidden bg-[#1a0533]" 
      aria-hidden="true" 
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0d1b3e] to-[#1a1a2e]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}