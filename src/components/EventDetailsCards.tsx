import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

const icons = {
  calendar: (
    <svg className="w-8 h-8 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  location: (
    <svg className="w-8 h-8 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  dinner: (
    <svg className="w-8 h-8 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  speaker: (
    <svg className="w-8 h-8 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
}

export default function EventDetailsCards({ t }: Props) {
  const { ref, isVisible } = useScrollAnimate(0.1)

  const cards = [
    { icon: icons.calendar, label: t.eventDateLabel, value: t.eventDateValue },
    { icon: icons.location, label: t.eventLocationLabel, value: t.eventLocationValue },
    { icon: icons.dinner, label: t.eventDinnerLabel, value: t.eventDinnerValue },
    { icon: icons.speaker, label: t.eventSpeakerLabel, value: t.eventSpeakerValue },
  ]

  return (
    <section className="py-20 bg-lf-light relative" id="details">
      {/* Subtle tech grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-heading text-lf-navy scroll-animate ${isVisible ? 'visible' : ''}`}>
          {t.eventTitle}
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-lf-orange to-lf-orange-light mx-auto mb-12 rounded-full scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card card-shine tilt-card flex gap-5 border border-transparent hover:border-lf-orange/20 scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-lf-orange/15 to-lf-orange/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-lf-navy text-lg mb-2">{card.label}</h3>
                <p className="text-lf-gray leading-relaxed whitespace-pre-line">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Link */}
        <div className={`mt-8 text-center scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
          <a
            href="https://maps.google.com/?q=Galpao+Gaucho+Brazilian+Steakhouse+1830+Main+St+Irvine+CA+92614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lf-orange hover:text-lf-orange-dark font-semibold transition-all duration-300 hover:gap-3 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
