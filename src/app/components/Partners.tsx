import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export function Partners() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const partners = [
    'Starbucks',
    'Sephora',
    'Circle K',
    'The Coffee Bean',
    'Pizza Hut',
    'Lotte Mart',
    'Jollibee',
    'FPT Retail',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative" id="partners">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center">
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.partners.title}
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 reveal">
          <p
            className="text-center text-sm font-medium mb-7 sm:mb-9"
            style={{ color: '#b0adcc' }}
          >
            200+ brands and retail chains are running on LoyaWin right now
          </p>

          <div className="overflow-hidden relative">
            {/* Gradient overlays */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[60px] sm:w-[100px] md:w-[120px] z-[2] pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, var(--loyawin-bg), transparent)',
              }}
            />
            <div
              className="absolute top-0 bottom-0 right-0 w-[60px] sm:w-[100px] md:w-[120px] z-[2] pointer-events-none"
              style={{
                background:
                  'linear-gradient(-90deg, var(--loyawin-bg), transparent)',
              }}
            />

            {/* Scrolling track */}
            <div className="partners-track flex gap-6 sm:gap-8 md:gap-12 items-center w-max">
              {/* First set */}
              {partners.map((partner) => (
                <div
                  key={`first-${partner}`}
                  className="backdrop-blur-[12px] border rounded-[var(--radius-sm)] px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 sm:gap-2.5 hover:border-[rgba(87,74,219,0.4)]"
                  style={{
                    fontFamily: 'var(--font-head)',
                    background: 'var(--loyawin-glass-bg)',
                    borderColor: 'var(--loyawin-glass-border)',
                    color: 'var(--loyawin-neutral-500)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full opacity-50"
                    style={{ background: 'var(--loyawin-primary)' }}
                  />
                  {partner}
                </div>
              ))}
              
              {/* Second set (duplicate for seamless loop) */}
              {partners.map((partner) => (
                <div
                  key={`second-${partner}`}
                  className="backdrop-blur-[12px] border rounded-[var(--radius-sm)] px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 sm:gap-2.5 hover:border-[rgba(87,74,219,0.4)]"
                  style={{
                    fontFamily: 'var(--font-head)',
                    background: 'var(--loyawin-glass-bg)',
                    borderColor: 'var(--loyawin-glass-border)',
                    color: 'var(--loyawin-neutral-500)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full opacity-50"
                    style={{ background: 'var(--loyawin-primary)' }}
                  />
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}