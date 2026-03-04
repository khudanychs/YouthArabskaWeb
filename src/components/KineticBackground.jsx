import { useRef, useEffect } from 'react'

class GlassSphere {
  constructor(canvasWidth, canvasHeight, ctx) {
    this.ctx = ctx
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.radius = Math.random() * 60 + 20
    this.x = Math.random() * this.canvasWidth
    this.y = Math.random() * this.canvasHeight + this.canvasHeight
    this.mass = this.radius
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = -(Math.random() * 0.8 + 0.2)
    this.baseOpacity = Math.random() * 0.15 + 0.05
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    const gradient = this.ctx.createRadialGradient(
      this.x - this.radius * 0.3,
      this.y - this.radius * 0.3,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius
    )
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.baseOpacity + 0.3})`)
    gradient.addColorStop(0.4, `rgba(255, 255, 255, ${this.baseOpacity})`)
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
    this.ctx.fillStyle = gradient
    this.ctx.fill()
    this.ctx.lineWidth = 0.5
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.baseOpacity + 0.1})`
    this.ctx.stroke()
    this.ctx.closePath()
  }

  update(mouseX, mouseY, forceRadius) {
    if (mouseX !== undefined && mouseY !== undefined) {
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < forceRadius + this.radius) {
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const force = (forceRadius - distance) / forceRadius
        this.x -= forceDirectionX * force * 3
        this.y -= forceDirectionY * force * 3
      }
    }
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
    const mouse = { x: undefined, y: undefined, radius: 180 }

    function populateSpheres() {
      spheres = []
      const density = window.innerWidth <= 768 ? 0.00003 : 0.00004
      const count = Math.floor(canvas.width * canvas.height * density)
      const optimalCount = Math.min(Math.max(count, 15), 50)
      for (let i = 0; i < optimalCount; i++) {
        spheres.push(new GlassSphere(canvas.width, canvas.height, ctx))
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      populateSpheres()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < spheres.length; i++) {
        spheres[i].update(mouse.x, mouse.y, mouse.radius)
      }
      animFrameId = requestAnimationFrame(animate)
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function handleMouseOut() {
      mouse.x = undefined
      mouse.y = undefined
    }

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/60 via-blue-950/60 to-indigo-950/60" />
    </div>
  )
}
