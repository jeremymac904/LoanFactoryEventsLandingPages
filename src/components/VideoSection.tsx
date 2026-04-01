import { useState } from 'react'
import { TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
}

export default function VideoSection({ t }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Video path served from public/videos/
  const videoSrc = '/videos/vip-dinner-invitation.mp4'

  const handlePlay = () => {
    setIsPlaying(true)
    // Auto-play the video element after state update
    setTimeout(() => {
      const video = document.querySelector('#invitation-video') as HTMLVideoElement
      if (video) video.play()
    }, 100)
  }

  return (
    <section className="py-20 bg-lf-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-lf-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-white">
          {t.videoTitle}
        </h2>
        <div className="w-20 h-1 bg-lf-orange mx-auto mb-12 rounded-full" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-lf-charcoal aspect-video">
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
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                src={videoSrc}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lf-navy/80 to-transparent" />

              {/* Play button */}
              <div className="relative z-10 w-20 h-20 bg-lf-orange/90 rounded-full flex items-center justify-center mb-6 border-2 border-white/20 shadow-2xl shadow-lf-orange/40 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
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
