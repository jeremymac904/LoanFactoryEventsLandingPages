import { useState } from 'react'
import { TranslationKeys } from '../translations'
import { useScrollAnimate } from '../hooks/useScrollAnimate'

interface Props {
  t: TranslationKeys
}

export default function VideoSection({ t }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, isVisible } = useScrollAnimate(0.1)

  // Video path served from public/videos/
  const videoSrc = '/videos/vip-dinner-invitation.mp4'

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      const video = document.querySelector('#invitation-video') as HTMLVideoElement
      if (video) video.play()
    }, 100)
  }

  return (
    <section className="py-20 bg-lf-navy relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-lf-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float-delayed" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-heading text-white scroll-animate ${isVisible ? 'visible' : ''}`}>
          {t.videoTitle}
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-lf-orange to-lf-orange-light mx-auto mb-12 rounded-full scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }} />

        <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 bg-lf-charcoal aspect-video border border-white/10 scroll-animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {isPlaying ? (
            <video
              id="invitation-video"
              controls
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Video poster / thumbnail overlay */}
              <video
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                src={videoSrc}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lf-navy/80 via-transparent to-lf-navy/40" />

              {/* Animated ring around play button */}
              <div className="relative z-10 mb-6">
                <div className="absolute inset-0 w-24 h-24 -m-2 rounded-full border-2 border-lf-orange/30 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="w-20 h-20 bg-gradient-to-br from-lf-orange to-lf-orange-light rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl shadow-lf-orange/40 transform group-hover:scale-110 transition-all duration-500">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="relative z-10 text-white/90 text-center max-w-md leading-relaxed font-semibold text-lg drop-shadow-lg">
                {t.videoFallback}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
