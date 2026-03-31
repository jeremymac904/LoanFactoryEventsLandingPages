import { TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
}

export default function VideoSection({ t }: Props) {
  // HeyGen video URLs will be added here per language
  // For now, showing placeholder
  const videoUrl = '' // Will be replaced with actual HeyGen embed URL

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
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="VIP Afterparty Invitation Video"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {/* Play button placeholder */}
              <div className="w-20 h-20 bg-lf-orange/20 rounded-full flex items-center justify-center mb-6 border-2 border-lf-orange/40">
                <svg className="w-10 h-10 text-lf-orange ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/70 text-center max-w-md leading-relaxed">
                {t.videoFallback}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
