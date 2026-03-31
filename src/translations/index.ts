import { en } from './en'
import { es } from './es'
import { vi } from './vi'
import { zh } from './zh'

export type Language = 'en' | 'es' | 'vi' | 'zh'
export type TranslationKeys = typeof en

export const translations: Record<Language, TranslationKeys> = {
  en,
  es: es as unknown as TranslationKeys,
  vi: vi as unknown as TranslationKeys,
  zh: zh as unknown as TranslationKeys,
}
