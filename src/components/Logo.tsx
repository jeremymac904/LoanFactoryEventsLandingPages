// Loan Factory Logo Component
// Recreated as SVG for crisp rendering at any size
// Matches the official Loan Factory branding: orange accent + dark wordmark

interface Props {
  className?: string
  variant?: 'light' | 'dark' // light = white text (for dark bg), dark = dark text (for light bg)
  height?: number
}

export default function Logo({ className = '', variant = 'light', height = 28 }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1A2229'
  const aspectRatio = 300 / 29
  const width = height * aspectRatio

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 300 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Loan Factory"
    >
      {/* Orange circle accent */}
      <circle cx="14.5" cy="14.5" r="14.5" fill="#F36F20" />
      <text
        x="14.5"
        y="20"
        textAnchor="middle"
        fill="white"
        fontFamily="Nunito, sans-serif"
        fontWeight="800"
        fontSize="16"
      >
        LF
      </text>
      {/* Wordmark */}
      <text
        x="38"
        y="21"
        fill={textColor}
        fontFamily="Nunito, sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="0.5"
      >
        Loan Factory
      </text>
    </svg>
  )
}
