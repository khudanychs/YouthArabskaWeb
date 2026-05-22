export default function BackgroundBeams({ className = '' }) {
  const beams = [
    { id: 1, x1: '-5%', y1: '0%', x2: '55%', y2: '100%', dur: '6s', delay: '0s' },
    { id: 2, x1: '15%', y1: '0%', x2: '75%', y2: '100%', dur: '8s', delay: '1.5s' },
    { id: 3, x1: '35%', y1: '0%', x2: '90%', y2: '100%', dur: '7s', delay: '3s' },
    { id: 4, x1: '55%', y1: '0%', x2: '105%', y2: '100%', dur: '9s', delay: '0.8s' },
    { id: 5, x1: '75%', y1: '0%', x2: '120%', y2: '100%', dur: '6.5s', delay: '2.2s' },
  ]

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {beams.map((b) => (
            <linearGradient key={b.id} id={`beam-grad-${b.id}`} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFD700" stopOpacity="0" />
              <stop offset="60%" stopColor="#FFD700" stopOpacity="0.55" />
              <stop offset="75%" stopColor="#FF7E5F" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C779D0" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {beams.map((b) => (
          <line
            key={b.id}
            x1={b.x1}
            y1={b.y1}
            x2={b.x2}
            y2={b.y2}
            stroke={`url(#beam-grad-${b.id})`}
            strokeWidth="1.5"
          >
            <animate
              attributeName="stroke-opacity"
              values="0;0.7;0"
              dur={b.dur}
              begin={b.delay}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </line>
        ))}
      </svg>
    </div>
  )
}
