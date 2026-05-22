export default function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, #1a0f2e 0%, #0c1124 45%, #070a17 100%)',
        }}
      />

      {/* Aurora glow — gold (top-left), slowly drifts */}
      <div
        className="absolute -top-32 -left-32 w-[680px] h-[680px] rounded-full animate-aurora-1"
        style={{
          background: '#FFD700',
          opacity: 0.07,
          filter: 'blur(120px)',
        }}
      />

      {/* Aurora glow — coral (right), drifts opposite */}
      <div
        className="absolute top-[28%] -right-40 w-[760px] h-[760px] rounded-full animate-aurora-2"
        style={{
          background: '#FF7E5F',
          opacity: 0.06,
          filter: 'blur(140px)',
        }}
      />

      {/* Aurora glow — violet (bottom-left), slow large drift */}
      <div
        className="absolute -bottom-48 left-[15%] w-[860px] h-[860px] rounded-full animate-aurora-3"
        style={{
          background: '#C779D0',
          opacity: 0.05,
          filter: 'blur(160px)',
        }}
      />

      {/* Extra accent glow — small gold top-right */}
      <div
        className="absolute top-8 right-[20%] w-[280px] h-[280px] rounded-full animate-aurora-2"
        style={{
          background: '#FFD700',
          opacity: 0.04,
          filter: 'blur(80px)',
          animationDelay: '-8s',
        }}
      />

      {/* Subtle horizontal sheen near the top */}
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
        }}
      />

      {/* Full-page cursor spotlight (CSS vars set by SpotlightTracker) */}
      <div className="page-spotlight" />

      {/* Fine grain — tactile premium texture */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
          backgroundSize: '240px 240px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(7,10,23,0.85) 100%)',
        }}
      />
    </div>
  )
}
