import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

export default function CompetitiveEdgeSection({ t }: Props) {
  const { ref, isVisible } = useScrollAnimate(0.1)

  const advantages = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.edgePricingTitle,
      desc: t.edgePricingDesc,
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t.edgeCostTitle,
      desc: t.edgeCostDesc,
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t.edgeSpeedTitle,
      desc: t.edgeSpeedDesc,
    },
  ]

  return (
    <section className="py-20 bg-lf-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lf-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lf-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-white mb-4 scroll-animate ${isVisible ? 'visible' : ''}`}>
          {t.edgeTitle}
        </h2>
        <p className={`text-lg text-center text-white/70 max-w-3xl mx-auto mb-8 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {t.edgeSubtitle}
        </p>
        <div className={`w-20 h-1 bg-gradient-to-r from-lf-orange to-lf-orange-light mx-auto mb-12 rounded-full scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }} />

        {/* Provocative Questions */}
        <div className={`max-w-4xl mx-auto mb-16 space-y-6 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-lf-orange font-semibold leading-relaxed">
              {t.edgeQuestion1}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-white/90 font-semibold leading-relaxed">
              {t.edgeQuestion2}
            </p>
          </div>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-lf-orange/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-lf-orange/10 scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.3 + 0.15 * i}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lf-orange to-lf-orange-light rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-lf-orange/20">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-lf-orange mb-4 transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
          <a
            href="#rsvp"
            className="btn-shimmer inline-block bg-gradient-to-r from-lf-orange to-lf-orange-light text-white font-bold px-10 py-4 rounded-xl text-lg shadow-xl shadow-lf-orange/30 hover:shadow-2xl hover:shadow-lf-orange/40 hover:-translate-y-1 transition-all duration-300"
          >
            {t.edgeCta}
          </a>
        </div>
      </div>
    </section>
  )
}
