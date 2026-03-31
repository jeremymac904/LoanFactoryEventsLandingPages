import { Language } from '../translations'

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇲🇽', label: 'ES' },
  { code: 'vi', flag: '🇻🇳', label: 'VI' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
]

interface Props {
  current: Language
  onChange: (lang: Language) => void
}

export default function LanguageToggle({ current, onChange }: Props) {
  return (
    <div className="flex items-center gap-1">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => onChange(code)}
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm font-semibold transition-all duration-200 ${
            current === code
              ? 'bg-lf-orange text-white shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          aria-label={`Switch to ${label}`}
        >
          <span className="text-base">{flag}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}
