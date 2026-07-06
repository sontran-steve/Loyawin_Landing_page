import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { Check } from 'lucide-react';

export function Platform() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
      id="platform"
      style={{ background: 'var(--loyawin-bg1)' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div
            className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 sm:mb-[18px] border"
            style={{
              color: 'var(--loyawin-primary)',
              background: 'var(--loyawin-primary-xlight)',
              borderColor: 'rgba(87,74,219,0.2)',
            }}
          >
            {t.platform.badge}
          </div>
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.platform.title}
          </h2>
          <p
            className="reveal text-base sm:text-[17px] leading-[1.7] max-w-[700px] mx-auto"
            style={{ color: 'var(--loyawin-neutral-500)' }}
          >
            {t.platform.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {t.platform.products.map((product, index) => (
            <div
              key={product.number}
              className={`reveal reveal-delay-${index + 1} backdrop-blur-[20px] border rounded-[var(--radius-lg)] p-6 sm:p-7 md:p-8 transition-all duration-300 relative overflow-hidden group ${
                product.highlighted
                  ? 'lg:translate-y-[-12px]'
                  : ''
              }`}
              style={{
                background: product.highlighted
                  ? 'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))'
                  : 'var(--loyawin-glass-bg)',
                borderColor: product.highlighted
                  ? 'transparent'
                  : 'var(--loyawin-glass-border)',
                boxShadow: product.highlighted
                  ? '0 16px 48px rgba(87, 74, 219, 0.3)'
                  : 'none',
              }}
            >
              {/* Number Badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-bold mb-5"
                style={{
                  background: product.highlighted
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'var(--loyawin-primary-xlight)',
                  color: product.highlighted
                    ? 'white'
                    : 'var(--loyawin-primary)',
                  backdropFilter: product.highlighted ? 'blur(10px)' : 'none',
                }}
              >
                {product.number}
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold mb-1.5"
                style={{
                  fontFamily: 'var(--font-head)',
                  color: product.highlighted
                    ? 'white'
                    : 'var(--loyawin-neutral-900)',
                }}
              >
                {product.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-sm sm:text-base mb-6"
                style={{
                  color: product.highlighted
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'var(--loyawin-neutral-500)',
                  fontStyle: 'italic',
                }}
              >
                {product.subtitle}
              </p>

              {/* Features List */}
              <ul className="space-y-3 list-none">
                {product.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2.5"
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: product.highlighted
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'var(--loyawin-primary-xlight)',
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{
                          color: product.highlighted
                            ? 'white'
                            : 'var(--loyawin-primary)',
                          strokeWidth: 3,
                        }}
                      />
                    </div>
                    <span
                      className="text-sm leading-[1.6]"
                      style={{
                        color: product.highlighted
                          ? 'rgba(255, 255, 255, 0.95)'
                          : 'var(--loyawin-neutral-600)',
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
