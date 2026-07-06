import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export function Pricing() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
      id="pricing"
      style={{ background: 'var(--loyawin-bg2)' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center">
          <div
            className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 sm:mb-[18px] border"
            style={{
              color: 'var(--loyawin-primary)',
              background: 'var(--loyawin-primary-xlight)',
              borderColor: 'rgba(87,74,219,0.2)',
            }}
          >
            {t.pricing.badge}
          </div>
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.pricing.title}
          </h2>
          <p
            className="reveal text-base sm:text-[17px] leading-[1.7] max-w-[560px] mx-auto px-4"
            style={{ color: 'var(--loyawin-neutral-500)' }}
          >
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mt-10 sm:mt-12 md:mt-16">
          {/* Standard License */}
          <div
            className="reveal reveal-delay-1 backdrop-blur-[24px] border rounded-[var(--radius-lg)] p-7 sm:p-9 md:p-11 relative overflow-hidden transition-all duration-300 hover:translate-y-[-6px]"
            style={{
              background: 'var(--loyawin-glass-bg)',
              borderColor: 'var(--loyawin-glass-border)',
            }}
          >
            <div
              className="text-xs font-semibold tracking-[0.1em] uppercase mb-3"
              style={{ color: 'var(--loyawin-primary)' }}
            >
              {t.pricing.standardLicense.badge}
            </div>
            
            <div
              className="text-xl sm:text-2xl md:text-[26px] font-bold mb-1.5"
              style={{
                fontFamily: 'var(--font-head)',
                color: 'var(--loyawin-neutral-900)',
              }}
            >
              {t.pricing.standardLicense.title}
            </div>
            
            <div
              className="text-[13px] italic mb-6 sm:mb-7"
              style={{ color: 'var(--loyawin-neutral-500)' }}
            >
              {t.pricing.standardLicense.subtitle}
            </div>
            
            <div
              className="text-4xl sm:text-5xl font-extrabold leading-none mb-1"
              style={{
                fontFamily: 'var(--font-head)',
                color: 'var(--loyawin-neutral-900)',
              }}
            >
              {t.pricing.standardLicense.price}
            </div>
            
            <div
              className="text-[13px] mb-6 sm:mb-8"
              style={{ color: 'var(--loyawin-neutral-500)' }}
            >
              {t.pricing.standardLicense.period}
            </div>
            
            <div
              className="h-px my-6 sm:my-7"
              style={{ background: 'var(--loyawin-neutral-100)' }}
            />
            
            <div
              className="text-[13px] font-semibold mb-3.5 tracking-[0.04em]"
              style={{ color: 'var(--loyawin-neutral-700)' }}
            >
              {t.pricing.standardLicense.targetTitle}
            </div>
            
            <ul className="list-none flex flex-col gap-2.5 mb-6 sm:mb-8">
              {t.pricing.standardLicense.targetItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-[1.5]"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  <div
                    className="w-[18px] h-[18px] flex-shrink-0 rounded-[5px] grid place-items-center mt-0.5"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                    }}
                  >
                    <span className="text-white text-sm font-bold leading-none">›</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div
              className="text-[13px] font-semibold mb-3.5 tracking-[0.04em]"
              style={{ color: 'var(--loyawin-neutral-700)' }}
            >
              {t.pricing.standardLicense.expansionTitle}
            </div>
            
            <ul className="list-none flex flex-col gap-2.5 mb-6 sm:mb-8">
              {t.pricing.standardLicense.expansionItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-[1.5]"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  <div
                    className="w-[18px] h-[18px] flex-shrink-0 rounded-[5px] grid place-items-center mt-0.5"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                    }}
                  >
                    <span className="text-white text-sm font-bold leading-none">›</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div
              className="border rounded-[var(--radius-sm)] px-4 py-3.5 text-[13px] leading-[1.6] mb-6 sm:mb-7"
              style={{
                background: 'rgba(87,74,219,0.07)',
                borderColor: 'rgba(87,74,219,0.15)',
                color: 'var(--loyawin-neutral-700)',
              }}
            >
              {t.pricing.standardLicense.note}
            </div>
            
            <button
              className="w-full py-3.5 sm:py-4 rounded-full text-white border-none cursor-pointer text-[15px] font-semibold transition-all duration-200 hover:translate-y-[-2px]"
              style={{
                background:
                  'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                boxShadow: '0 6px 24px var(--loyawin-primary-glow)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t.pricing.standardLicense.cta}
            </button>
          </div>

          {/* Enterprise Core */}
          <div
            className="reveal reveal-delay-2 border rounded-[var(--radius-lg)] p-7 sm:p-9 md:p-11 relative overflow-hidden transition-all duration-300 hover:translate-y-[-6px] text-white"
            style={{
              background:
                'linear-gradient(135deg, var(--loyawin-primary) 0%, #6B62E8 50%, #8B82F0 100%)',
              borderColor: 'transparent',
            }}
          >
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/20 border border-white/30 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold">
              {t.pricing.enterpriseCore.popular}
            </div>
            
            <div className="text-xs font-semibold tracking-[0.1em] uppercase mb-3 text-white/80">
              {t.pricing.enterpriseCore.badge}
            </div>
            
            <div
              className="text-xl sm:text-2xl md:text-[26px] font-bold mb-1.5"
              style={{ fontFamily: 'var(--font-head)' }}
            >
              {t.pricing.enterpriseCore.title}
            </div>
            
            <div className="text-[13px] italic mb-6 sm:mb-7 text-white/70">
              {t.pricing.enterpriseCore.subtitle}
            </div>
            
            <div
              className="text-4xl sm:text-5xl font-extrabold leading-none mb-1"
              style={{ fontFamily: 'var(--font-head)' }}
            >
              {t.pricing.enterpriseCore.price}
            </div>
            
            <div className="text-[13px] mb-6 sm:mb-8 text-white/70">
              {t.pricing.enterpriseCore.period}
            </div>
            
            <div className="h-px my-6 sm:my-7 bg-white/20" />
            
            <div className="text-[13px] font-semibold mb-3.5 tracking-[0.04em] text-white/85">
              {t.pricing.enterpriseCore.targetTitle}
            </div>
            
            <ul className="list-none flex flex-col gap-2.5 mb-6 sm:mb-8">
              {t.pricing.enterpriseCore.targetItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-[1.5] text-white/90"
                >
                  <div className="w-[18px] h-[18px] flex-shrink-0 bg-white/25 rounded-[5px] grid place-items-center mt-0.5">
                    <span className="text-white text-sm font-bold leading-none">›</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="text-[13px] font-semibold mb-3.5 tracking-[0.04em] text-white/85">
              {t.pricing.enterpriseCore.includesTitle}
            </div>
            
            <ul className="list-none flex flex-col gap-2.5 mb-6 sm:mb-8">
              {t.pricing.enterpriseCore.includesItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-[1.5] text-white/90"
                >
                  <div className="w-[18px] h-[18px] flex-shrink-0 bg-white/25 rounded-[5px] grid place-items-center mt-0.5">
                    <span className="text-white text-sm font-bold leading-none">›</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="bg-white/12 border border-white/20 rounded-[var(--radius-sm)] px-4 py-3.5 text-[13px] leading-[1.6] mb-6 sm:mb-7 text-white/90">
              {t.pricing.enterpriseCore.note}
            </div>
            
            <button
              className="w-full py-3.5 sm:py-[15px] rounded-full bg-transparent border-[1.5px] border-white/50 text-white cursor-pointer text-[15px] font-semibold transition-all duration-200 hover:bg-white/15 hover:border-white"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t.pricing.enterpriseCore.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
