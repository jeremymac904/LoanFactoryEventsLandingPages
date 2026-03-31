import { Language, TranslationKeys } from '../translations'
import LanguageToggle from './LanguageToggle'

interface Props {
  t: TranslationKeys
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ t, language, onLanguageChange }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lf-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-lf-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">LF</span>
              </div>
              <span className="ml-2 text-white font-bold text-lg hidden sm:block">Loan Factory</span>
            </div>
          </div>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-3">
            <LanguageToggle current={language} onChange={onLanguageChange} />
            <a
              href="#rsvp-form"
              className="hidden md:inline-flex bg-lf-orange hover:bg-lf-orange-dark text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 text-sm"
            >
              {t.headerCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
