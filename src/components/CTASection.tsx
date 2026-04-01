import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

export default function CTASection({ t }: Props) {
  const { ref, isVisible } = useScrollAnimate(0.1)

  const steps = [
    {
      num: '1',
      title: t.ctaStep1Title,
      desc: t.ctaStep1Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: '2',
      title: t.ctaStep2Title,
      desc: t.ctaStep2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: '3',
      title: t.ctaStep3Title,
      desc: t.ctaStep3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-lf-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-heading text-lf-navy scroll-animate ${isVisible ? 'visible' : ''}`}>
          {t.ctaTitle}
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-lf-orange to-lf-orange-light mx-auto mb-12 rounded-full scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center group scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 * (i + 1)}s` }}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-lf-orange/15 to-lf-orange/5 rounded-full group-hover:from-lf-orange/25 group-hover:to-lf-orange/10 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-lf-orange group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-lf-orange to-lf-orange-light rounded-full flex items-center justify-center shadow-lg shadow-lf-orange/30">
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
              </div>
              <h3 className="font-bold text-lf-navy text-lg mb-2 group-hover:text-lf-orange transition-colors duration-300">{step.title}</h3>
              <p className="text-lf-gray leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Explore CTA */}
        <div className={`text-center bg-gradient-to-r from-lf-navy via-lf-slate to-lf-navy rounded-2xl p-10 shadow-xl relative overflow-hidden animate-gradient scroll-animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s', backgroundSize: '200% 200%' }}>
          {/* Inner tech grid */}
          <div className="absolute inset-0 tech-grid opacity-50" />
          <div className="relative z-10">
            <p className="text-white/80 mb-4 text-lg">
              {t.ctaExplore}
            </p>
            <a
              href={t.ctaExploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-lf-orange to-lf-orange-light hover:from-lf-orange-dark hover:to-lf-orange text-white font-bold py-3 px-8 rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg shadow-lf-orange/20 hover:shadow-xl hover:shadow-lf-orange/30 relative overflow-hidden"
            >
              {t.ctaExplore}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
