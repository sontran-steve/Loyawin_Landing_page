import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export function Testimonials() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="testimonials">
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
            {t.testimonials.badge}
          </div>
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.testimonials.title.split('\\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12 md:mt-16">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`reveal reveal-delay-${index + 1} backdrop-blur-[20px] border rounded-[var(--radius-md)] p-6 sm:p-7 md:p-8 transition-all duration-300 hover:translate-y-[-4px]`}
              style={{
                background: 'var(--loyawin-glass-bg)',
                borderColor: 'var(--loyawin-glass-border)',
              }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-sm sm:text-[15px]">
                    ⭐
                  </span>
                ))}
              </div>

              <p
                className="text-sm sm:text-[15px] leading-[1.75] mb-5 sm:mb-6 italic relative"
                style={{ color: 'var(--loyawin-neutral-700)' }}
              >
                <span
                  className="text-3xl sm:text-[40px] leading-none align-[-12px] sm:align-[-15px] mr-1"
                  style={{
                    fontFamily: 'var(--font-head)',
                    color: 'var(--loyawin-primary)',
                  }}
                >
                  "
                </span>
                {testimonial.text}
              </p>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-white flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-head)',
                    background:
                      'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                  }}
                >
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: 'var(--loyawin-neutral-900)' }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: 'var(--loyawin-neutral-500)' }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
