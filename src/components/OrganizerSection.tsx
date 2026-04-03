import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

export default function OrganizerSection({ t }: Props) {
  const { ref, isVisible } = useScrollAnimate(0.1)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lf-orange/3 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
          {/* Calendar icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-lf-navy rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-lf-navy mb-4">
            {t.orgTitle}
          </h2>
        </div>

        <p className={`text-lg text-lf-gray leading-relaxed max-w-3xl mx-auto mb-6 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {t.orgDesc}
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <a
            href={t.orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lf-orange font-semibold hover:text-lf-orange-light transition-colors duration-300 text-lg"
          >
            {t.orgLinkText}
          </a>
        </div>

        <p className={`text-sm text-lf-gray/60 mt-4 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          {t.orgProducer}
        </p>
      </div>
    </section>
  )
}
