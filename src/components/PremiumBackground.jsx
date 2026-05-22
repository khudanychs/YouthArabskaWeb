export default function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient — lighter navy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, #1e1545 0%, #101832 45%, #0c1428 100%)',
        }}
      />

      {/* Aurora — gold top-left, drifts slowly */}
      <div
        className="absolute -top-28 -left-28 w-[700px] h-[700px] rounded-full animate-aurora-1"
        style={{
          background: '#FFD700',
          opacity: 0.13,
          filter: 'blur(110px)',
        }}
      />

      {/* Aurora — coral right, opposite drift */}
      <div
        className="absolute top-[22%] -right-36 w-[780px] h-[780px] rounded-full animate-aurora-2"
        style={{
          background: '#FF7E5F',
          opacity: 0.10,
          filter: 'blur(130px)',
        }}
      />

      {/* Aurora — violet bottom-left, slow large drift */}
      <div
        className="absolute -bottom-40 left-[10%] w-[880px] h-[880px] rounded-full animate-aurora-3"
        style={{
          background: '#C779D0',
          opacity: 0.08,
          filter: 'blur(150px)',
        }}
      />

      {/* Extra gold accent top-right */}
      <div
        className="absolute top-4 right-[18%] w-[320px] h-[320px] rounded-full animate-aurora-2"
        style={{
          background: '#FFB800',
          opacity: 0.07,
          filter: 'blur(90px)',
          animationDelay: '-9s',
        }}
      />

      {/* Coral accent mid-left */}
      <div
        className="absolute top-[55%] -left-20 w-[400px] h-[400px] rounded-full animate-aurora-1"
        style={{
          background: '#FF5F7E',
          opacity: 0.06,
          filter: 'blur(110px)',
          animationDelay: '-5s',
        }}
      />

      {/* Subtle top sheen */}
      <div
        className="absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
        }}
      />

      {/* Full-page cursor spotlight */}
      <div className="page-spotlight" />

      {/* Fine grain texture */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
          backgroundSize: '240px 240px',
        }}
      />

      {/* Vignette — softer than before */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 60%, rgba(12,20,40,0.7) 100%)',
        }}
      />
    </div>
  )
}
