import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

export default function WhyAttendSection({ t }: Props) {
  const { ref, isVisible } = useScrollAnimate(0.1)

  const pillars = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t.whyNetworkTitle,
      desc: t.whyNetworkDesc,
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t.whyLearnTitle,
      desc: t.whyLearnDesc,
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: t.whyCareerTitle,
      desc: t.whyCareerDesc,
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-lf-blue/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-heading text-lf-navy scroll-animate ${isVisible ? 'visible' : ''}`}>
          {t.whyTitle}
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-lf-orange to-lf-orange-light mx-auto mb-12 rounded-full scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group text-center p-8 rounded-2xl transition-all duration-500 hover:bg-lf-navy hover:shadow-2xl hover:shadow-lf-navy/20 hover:-translate-y-3 border border-transparent hover:border-lf-orange/10 scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 * (i + 1)}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lf-orange to-lf-orange-light rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-lf-orange/20 group-hover:shadow-xl group-hover:shadow-lf-orange/30">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-lf-navy group-hover:text-lf-orange mb-4 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-lf-gray group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
