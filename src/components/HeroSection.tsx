import { useEffect, useRef } from 'react'
import { TranslationKeys } from '../translations'

interface Props {
  t: TranslationKeys
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.7 ? '#F36F20' : '#FFFFFF',
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > cw) p.vx *= -1
        if (p.y < 0 || p.y > ch) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        // Draw connecting lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#F36F20'
            ctx.globalAlpha = (1 - dist / 120) * 0.15
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function HeroSection({ t }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lf-navy/90 via-lf-charcoal/85 to-lf-slate/90" />
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-[1] tech-grid" />

      {/* Particle network */}
      <ParticleCanvas />

      {/* Animated decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lf-orange/10 rounded-full blur-3xl z-[3] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lf-orange/5 rounded-full blur-3xl z-[3] animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-lf-blue/10 rounded-full blur-3xl z-[3] animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* VIP Tag */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-lf-orange/20 border border-lf-orange/40 rounded-full px-6 py-2 mb-8 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
          <span className="w-2 h-2 bg-lf-orange rounded-full animate-pulse" />
          <span className="text-lf-orange font-bold text-sm tracking-widest uppercase">
            {t.heroTag}
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
          {t.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md" style={{ animationDelay: '0.6s' }}>
          {t.heroSubtitle}
        </p>

        {/* Event Info Pills */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-10" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2 glass rounded-xl px-5 py-3 group hover:border-lf-orange/40 transition-all duration-300">
            <svg className="w-5 h-5 text-lf-orange group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-semibold text-sm">{t.heroDate}</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-xl px-5 py-3 group hover:border-lf-orange/40 transition-all duration-300">
            <svg className="w-5 h-5 text-lf-orange group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-sm">{t.heroVenue}</span>
          </div>
        </div>

        {/* CTA Button with glow + shimmer */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="#rsvp-form"
            className="btn-shimmer inline-flex items-center gap-3 bg-gradient-to-r from-lf-orange to-lf-orange-light hover:from-lf-orange-dark hover:to-lf-orange text-white font-extrabold text-lg py-4 px-10 rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl animate-pulse-glow relative overflow-hidden"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lf-light via-lf-light/50 to-transparent z-10" />
    </section>
  )
}
