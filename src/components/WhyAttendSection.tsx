import { TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
}

export default function WhyAttendSection({ t }: Props) {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-lf-navy">
          {t.whyTitle}
        </h2>
        <div className="w-20 h-1 bg-lf-orange mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-2xl transition-all duration-500 hover:bg-lf-navy hover:shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-lf-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-lf-orange/20">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-lf-navy group-hover:text-lf-orange mb-4 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-lf-gray group-hover:text-white/80 leading-relaxed transition-colors">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
