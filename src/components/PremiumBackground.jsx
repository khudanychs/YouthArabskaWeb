export default function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* White base */}
      <div className="absolute inset-0 bg-white" />

      {/* Aurora — warm gold, very subtle */}
      <div
        className="absolute -top-48 -left-48 w-[900px] h-[900px] rounded-full animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, #FFD700 0%, #FF7E5F 60%, transparent 80%)',
          opacity: 0.055,
          filter: 'blur(120px)',
        }}
      />

      {/* Aurora — coral right */}
      <div
        className="absolute top-[15%] -right-48 w-[800px] h-[800px] rounded-full animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, #FF7E5F 0%, #C779D0 60%, transparent 80%)',
          opacity: 0.045,
          filter: 'blur(140px)',
        }}
      />

      {/* Aurora — violet bottom */}
      <div
        className="absolute -bottom-48 left-[5%] w-[1000px] h-[1000px] rounded-full animate-aurora-3"
        style={{
          background: 'radial-gradient(circle, #C779D0 0%, #FFD700 60%, transparent 80%)',
          opacity: 0.04,
          filter: 'blur(160px)',
        }}
      />

      {/* Extra warm gold accent top-right */}
      <div
        className="absolute top-8 right-[12%] w-[400px] h-[400px] rounded-full animate-aurora-2"
        style={{
          background: '#FFB800',
          opacity: 0.035,
          filter: 'blur(100px)',
          animationDelay: '-9s',
        }}
      />

      {/* Full-page cursor spotlight */}
      <div className="page-spotlight" />

      {/* Very subtle warm grain texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.018,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
          backgroundSize: '240px 240px',
        }}
      />
    </div>
  )
}
