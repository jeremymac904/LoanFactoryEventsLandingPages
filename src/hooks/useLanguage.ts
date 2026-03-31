import { useState, useCallback, useEffect } from 'react'
import { Language, translations, TranslationKeys } from '../translations'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // Check URL param first, then localStorage, then browser language
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as Language | null
    if (urlLang && translations[urlLang]) return urlLang

    const stored = window.localStorage?.getItem?.('lf-lang') as Language | null
    if (stored && translations[stored]) return stored

    const browserLang = navigator.language.split('-')[0] as Language
    if (translations[browserLang]) return browserLang

    return 'en'
  })

  const t: TranslationKeys = translations[language]

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    try {
      window.localStorage?.setItem?.('lf-lang', lang)
    } catch {}
    // Update html lang attribute
    document.documentElement.lang = lang
    // Update URL without reload
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url.toString())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return { language, t, changeLanguage }
}
