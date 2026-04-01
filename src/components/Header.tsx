import { useState, useEffect } from 'react'
import { Language, TranslationKeys } from '../translations'
import LanguageToggle from './LanguageToggle'
import Logo from './Logo'

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-lf-navy/98 backdrop-blur-xl border-b border-lf-orange/10 shadow-lg shadow-black/10'
          : 'bg-lf-navy/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Logo variant="light" height={28} />
          </a>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-3">
            <LanguageToggle current={language} onChange={onLanguageChange} />
            <a
              href="#rsvp-form"
              className="hidden md:inline-flex btn-shimmer bg-gradient-to-r from-lf-orange to-lf-orange-light hover:from-lf-orange-dark hover:to-lf-orange text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 text-sm relative overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-lf-orange/25"
            >
              {t.headerCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
