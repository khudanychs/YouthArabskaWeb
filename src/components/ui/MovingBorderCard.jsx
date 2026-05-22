export default function MovingBorderCard({ children, className = '', borderDuration = '8s', active = false }) {
  return (
    <div className={`relative p-[1px] rounded-2xl overflow-hidden group ${className}`}>
      {/* Rotating gradient border layer */}
      <div
        className="absolute inset-[-300%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #FFD700 15%, #FF7E5F 35%, #C779D0 55%, transparent 70%)',
          animation: `moving-border-spin ${borderDuration} linear infinite`,
        }}
      />
      {/* Idle subtle border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-700"
        style={{
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      {/* Card content */}
      <div
        className="relative h-full rounded-[calc(1rem-1px)] flex flex-col"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.018) 100%)',
          backdropFilter: 'blur(14px) saturate(140%)',
          WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
