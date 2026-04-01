import { useLanguage } from './hooks/useLanguage'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import EventDetailsCards from './components/EventDetailsCards'
import WhyAttendSection from './components/WhyAttendSection'
import VideoSection from './components/VideoSection'
import FormSection from './components/FormSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  const { language, t, changeLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Page load shine overlay */}
      <div className="page-shine-overlay" />
      <Header t={t} language={language} onLanguageChange={changeLanguage} />
      <main>
        <HeroSection t={t} />
        <EventDetailsCards t={t} />
        <WhyAttendSection t={t} />
        <VideoSection t={t} language={language} />
        <FormSection t={t} language={language} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
