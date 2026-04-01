import { TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
}

export default function HeroSection({ t }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lf-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* VIP Tag */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-lf-orange/20 border border-lf-orange/40 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-lf-orange rounded-full animate-pulse" />
          <span className="text-lf-orange font-bold text-sm tracking-widest uppercase">
            {t.heroTag}
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          {t.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
          {t.heroSubtitle}
        </p>

        {/* Event Info Pills */}
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
            <svg className="w-5 h-5 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-semibold text-sm">{t.heroDate}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
            <svg className="w-5 h-5 text-lf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-sm">{t.heroVenue}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animate-delay-400">
          <a
            href="#rsvp-form"
            className="inline-flex items-center gap-3 btn-shimmer bg-gradient-to-r from-lf-orange to-lf-orange-light hover:from-lf-orange-dark hover:to-lf-orange text-white font-extrabold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-lf-orange/30 hover:shadow-lf-orange/50 relative overflow-hidden"
          >
            {t.heroCta}
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <p className="mt-4 text-white/60 text-sm">{t.heroSeats}</p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-lf-light to-transparent" />
    </section>
  )
}
