import { useState } from 'react'
import { Language, TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
  language: Language
}

const videoMap: Record<Language, string> = {
  en: '/videos/vip-invitation-en.mp4',
  es: '/videos/vip-invitation-es.mp4',
  vi: '/videos/vip-invitation-vi.mp4',
  zh: '/videos/vip-invitation-zh.mp4',
}

export default function VideoSection({ t, language }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoSrc = videoMap[language]

  const handlePlay = () => {
    setIsPlaying(true)
    const vid = document.getElementById('invitation-video') as HTMLVideoElement
    if (vid) {
      vid.play()
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Group photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/group-photo.png)' }}
      />
      {/* Semi-transparent overlay — lets group photo show through atmospherically */}
      <div className="absolute inset-0 bg-lf-navy/55" />

      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-lf-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-white">
          {t.videoTitle}
        </h2>
        <div className="w-20 h-1 bg-lf-orange mx-auto mb-12 rounded-full" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 aspect-video group">
          <video
            id="invitation-video"
            key={language}
            className="absolute inset-0 w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Play button overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 cursor-pointer z-10"
            >
              {/* Animated ring */}
              <div className="relative mb-4">
                <div className="absolute inset-0 w-24 h-24 bg-lf-orange/30 rounded-full animate-ping" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-lf-orange to-lf-orange-light rounded-full flex items-center justify-center shadow-2xl shadow-lf-orange/40 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
