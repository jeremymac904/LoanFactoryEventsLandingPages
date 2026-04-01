// Loan Factory Logo Component
// Recreated to match the official LOAN FACTORY branding
// All-caps wordmark with gear-O design element and ® symbol

interface Props {
  className?: string
  variant?: 'light' | 'dark'
  height?: number
}

export default function Logo({ className = '', variant = 'light', height = 28 }: Props) {
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#1A2229'
  const accentColor = '#F36F20'
  const scale = height / 32

  return (
    <div className={`flex items-center gap-1 ${className}`} style={{ height }}>
      {/* L */}
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: `${22 * scale}px`,
          color: primaryColor,
          letterSpacing: `${3 * scale}px`,
          lineHeight: 1,
        }}
      >
        L
      </span>
      {/* O as gear/cog icon */}
      <svg
        width={22 * scale}
        height={22 * scale}
        viewBox="0 0 24 24"
        fill="none"
        style={{ marginLeft: `-${1 * scale}px`, marginRight: `-${1 * scale}px` }}
      >
        {/* Gear teeth */}
        <path
          d="M12 1l1.5 2.5h3l.5 3 2.5 1.5-1 2.5L20 12l-1.5 2.5 1 2.5-2.5 1.5-.5 3h-3L12 23l-1.5-2.5h-3l-.5-3L4.5 16l1-2.5L4 12l1.5-2.5-1-2.5L7 5.5l.5-3h3L12 1z"
          fill={accentColor}
        />
        {/* Inner circle (the O) */}
        <circle cx="12" cy="12" r="5.5" fill={variant === 'light' ? '#1A2229' : '#FFFFFF'} />
        <circle cx="12" cy="12" r="3.5" fill={accentColor} />
        <circle cx="12" cy="12" r="1.5" fill={variant === 'light' ? '#1A2229' : '#FFFFFF'} />
      </svg>
      {/* AN */}
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: `${22 * scale}px`,
          color: primaryColor,
          letterSpacing: `${3 * scale}px`,
          lineHeight: 1,
        }}
      >
        AN
      </span>
      {/* Spacer */}
      <span style={{ width: `${4 * scale}px` }} />
      {/* FACTORY */}
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: `${22 * scale}px`,
          color: primaryColor,
          letterSpacing: `${3 * scale}px`,
          lineHeight: 1,
        }}
      >
        FACT
      </span>
      {/* Second O as gear */}
      <svg
        width={22 * scale}
        height={22 * scale}
        viewBox="0 0 24 24"
        fill="none"
        style={{ marginLeft: `-${1 * scale}px`, marginRight: `-${1 * scale}px` }}
      >
        <path
          d="M12 1l1.5 2.5h3l.5 3 2.5 1.5-1 2.5L20 12l-1.5 2.5 1 2.5-2.5 1.5-.5 3h-3L12 23l-1.5-2.5h-3l-.5-3L4.5 16l1-2.5L4 12l1.5-2.5-1-2.5L7 5.5l.5-3h3L12 1z"
          fill={accentColor}
        />
        <circle cx="12" cy="12" r="5.5" fill={variant === 'light' ? '#1A2229' : '#FFFFFF'} />
        <circle cx="12" cy="12" r="3.5" fill={accentColor} />
        <circle cx="12" cy="12" r="1.5" fill={variant === 'light' ? '#1A2229' : '#FFFFFF'} />
      </svg>
      {/* RY */}
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: `${22 * scale}px`,
          color: primaryColor,
          letterSpacing: `${3 * scale}px`,
          lineHeight: 1,
        }}
      >
        RY
      </span>
      {/* ® symbol */}
      <span
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          fontSize: `${9 * scale}px`,
          color: primaryColor,
          lineHeight: 1,
          verticalAlign: 'super',
          marginLeft: `${2 * scale}px`,
          opacity: 0.7,
        }}
      >
        ®
      </span>
    </div>
  )
}
