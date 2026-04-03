import { useState, useEffect } from 'react'
import { Language, TranslationKeys } from '../translations'
import LanguageToggle from './LanguageToggle'

interface Props {
  t: TranslationKeys
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ t, language, onLanguageChange }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'header-silver-scrolled shadow-xl'
        : 'header-silver'
    }`}>
      {/* Shine sweep on header */}
      <div className="header-shine" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/loanfactory_logo_transparent.png"
              alt="Loan Factory"
              className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md logo-blockbuster-reveal"
            />
          </a>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-3">
            <LanguageToggle current={language} onChange={onLanguageChange} />
            <a
              href="#rsvp-form"
              className="hidden md:inline-flex btn-shimmer bg-gradient-to-r from-lf-orange to-lf-orange-light hover:from-lf-orange-dark hover:to-lf-orange text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-lf-orange/20 relative overflow-hidden"
            >
              {t.headerCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
