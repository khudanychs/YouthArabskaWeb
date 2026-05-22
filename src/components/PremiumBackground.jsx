/**
 * PremiumBackground
 *
 * Static, GPU-cheap, premium "aurora" background:
 *  - Deep navy → purple radial base
 *  - Three large soft color glows (gold / coral / violet) at low opacity
 *  - Very fine SVG noise grain for a tactile, expensive feel
 *  - A vignette to focus the eye on the content
 *
 * No JS, no animation loops, no canvas — renders once and is static.
 * This avoids the lag the kinetic canvas/particle background caused on
 * lower-end devices, while keeping the dawn color identity of the site.
 */
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

      {/* Aurora glow — gold (top-left) */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full"
        style={{
          background: '#FFD700',
          opacity: 0.07,
          filter: 'blur(120px)',
        }}
      />

      {/* Aurora glow — coral (right) */}
      <div
        className="absolute top-[28%] -right-40 w-[720px] h-[720px] rounded-full"
        style={{
          background: '#FF7E5F',
          opacity: 0.06,
          filter: 'blur(140px)',
        }}
      />

      {/* Aurora glow — violet (bottom-left) */}
      <div
        className="absolute -bottom-48 left-[15%] w-[820px] h-[820px] rounded-full"
        style={{
          background: '#C779D0',
          opacity: 0.05,
          filter: 'blur(160px)',
        }}
      />

      {/* Subtle horizontal sheen near the top — adds depth without movement */}
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, transparent 100%)',
        }}
      />

      {/* Fine grain — tactile premium texture, no animation */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
          backgroundSize: '240px 240px',
        }}
      />

      {/* Vignette — focuses content, deepens edges */}
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
