import { useState } from 'react'
import { TranslationKeys, Language } from '../translations'

interface Props {
  t: TranslationKeys
  language: Language
}

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  nmls: string
  interest: string
  hearAbout: string[]
  notes: string
  language: string
}

// Google Apps Script Web App URL — replace with your deployed script URL
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export default function FormSection({ t, language }: Props) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    nmls: '',
    interest: '',
    hearAbout: [],
    notes: '',
    language,
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      hearAbout: prev.hearAbout.includes(value)
        ? prev.hearAbout.filter(v => v !== value)
        : [...prev.hearAbout, value],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = {
      ...formData,
      hearAbout: formData.hearAbout.join(', '),
      language,
      timestamp: new Date().toISOString(),
    }

    try {
      if (FORM_ENDPOINT) {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="py-20 bg-lf-light" id="rsvp-form">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="card py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-lf-navy mb-4">{t.formSuccess}</h3>
            <a
              href="https://www.loanfactory.com/loan-officer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block mt-6"
            >
              {t.ctaExplore}
            </a>
          </div>
        </div>
      </section>
    )
  }

  const hearOptions = [
    { key: 'facebook', label: t.formHearFacebook },
    { key: 'linkedin', label: t.formHearLinkedin },
    { key: 'email', label: t.formHearEmail },
    { key: 'referral', label: t.formHearReferral },
    { key: 'google', label: t.formHearGoogle },
    { key: 'other', label: t.formHearOther },
  ]

  return (
    <section className="py-20 bg-lf-light" id="rsvp-form">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-lf-navy">
          {t.formTitle}
        </h2>
        <p className="text-center text-lf-gray mb-10 max-w-lg mx-auto">
          {t.formSubtitle}
        </p>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formName} <span className="text-lf-orange">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formEmail} <span className="text-lf-orange">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formPhone} <span className="text-lf-orange">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formCompany} <span className="text-lf-gray/50 text-xs font-normal">({t.formOptional})</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* NMLS */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formNmls} <span className="text-lf-gray/50 text-xs font-normal">({t.formOptional})</span>
            </label>
            <input
              type="text"
              name="nmls"
              value={formData.nmls}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Interest in Joining */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-3">
              {t.formInterest} <span className="text-lf-orange">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                { value: 'Yes', label: t.formInterestYes },
                { value: 'No', label: t.formInterestNo },
                { value: 'Maybe', label: t.formInterestMaybe },
              ].map(opt => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.interest === opt.value
                      ? 'border-lf-orange bg-lf-orange/5 text-lf-orange font-bold'
                      : 'border-gray-200 hover:border-lf-orange/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={opt.value}
                    checked={formData.interest === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* How did you hear */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-3">
              {t.formHearAbout} <span className="text-lf-gray/50 text-xs font-normal">({t.formOptional})</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {hearOptions.map(opt => (
                <label
                  key={opt.key}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all text-sm ${
                    formData.hearAbout.includes(opt.key)
                      ? 'border-lf-orange bg-lf-orange/5 text-lf-orange font-semibold'
                      : 'border-gray-200 hover:border-lf-orange/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.hearAbout.includes(opt.key)}
                    onChange={() => handleCheckbox(opt.key)}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-lf-navy mb-1">
              {t.formNotes} <span className="text-lf-gray/50 text-xs font-normal">({t.formOptional})</span>
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder={t.formNotesPlaceholder}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lf-orange focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full btn-primary text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t.formSubmitting}
              </span>
            ) : (
              t.formSubmit
            )}
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-center text-sm">{t.formError}</p>
          )}
        </form>
      </div>
    </section>
  )
}
