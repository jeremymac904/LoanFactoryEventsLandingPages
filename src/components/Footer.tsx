import { TranslationKeys } from '../translations'
import Logo from './Logo'

interface Props {
  t: TranslationKeys
}

export default function Footer({ t }: Props) {
  return (
    <footer className="bg-lf-navy text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo variant="light" height={24} />
            </div>
            <p className="text-sm">{t.footerNmls}</p>
            <p className="text-sm">{t.footerEqual}</p>
            <p className="text-sm mt-1">{t.footerCeo}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.loanfactory.com" target="_blank" rel="noopener noreferrer" className="hover:text-lf-orange transition-colors">
                  Loan Factory
                </a>
              </li>
              <li>
                <a href="https://www.loanfactory.com/loan-officer" target="_blank" rel="noopener noreferrer" className="hover:text-lf-orange transition-colors">
                  {t.ctaExplore}
                </a>
              </li>
              <li>
                <a href={t.footerReferralLink} target="_blank" rel="noopener noreferrer" className="hover:text-lf-orange transition-colors">
                  {t.footerReferral}
                </a>
              </li>
              <li>
                <a href="https://www.originatorconnectnetwork.com/events/california-mortgage-expo-irvine" target="_blank" rel="noopener noreferrer" className="hover:text-lf-orange transition-colors">
                  CA Mortgage Expo
                </a>
              </li>
              <li>
                <a href="https://galpaogauchousa.com/location/irvine-ca/" target="_blank" rel="noopener noreferrer" className="hover:text-lf-orange transition-colors">
                  Galp&atilde;o Gaucho Irvine
                </a>
              </li>
            </ul>
          </div>

          {/* Event Quick Info */}
          <div>
            <h4 className="text-white font-bold mb-3">{t.eventTitle}</h4>
            <p className="text-sm mb-1">May 7, 2026 | 3:30 PM &ndash; 7:00 PM PST</p>
            <p className="text-sm mb-3">1830 Main St, Irvine, CA 92614</p>
            <a
              href="#rsvp-form"
              className="inline-block bg-lf-orange hover:bg-lf-orange-dark text-white font-bold py-2 px-6 rounded-lg text-sm transition-all"
            >
              {t.headerCta}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            {t.footerDisclaimer}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-white/40">
            <span>&copy; {new Date().getFullYear()} Loan Factory Inc.</span>
            <span>|</span>
            <span>{t.footerNmls}</span>
            <span>|</span>
            <span>{t.footerEqual}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
