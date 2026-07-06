import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export function TheProblem() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section
      id="problem"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(87, 74, 219, 0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 sm:mb-6"
            style={{
              background: 'rgba(87, 74, 219, 0.08)',
              border: '1px solid rgba(87, 74, 219, 0.15)',
            }}
          >
            <span
              className="text-xs sm:text-sm font-bold tracking-wide uppercase"
              style={{
                color: 'var(--loyawin-primary)',
                fontFamily: 'var(--font-head)',
              }}
            >
              {t.problem.badge}
            </span>
          </div>

          <h2
            className="reveal reveal-delay-1 font-bold mb-5 sm:mb-6 leading-tight whitespace-pre-line text-[44px]"
            style={{
              fontFamily: 'var(--font-head)',
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.problem.title}
          </h2>

          <p
            className="reveal reveal-delay-2 leading-relaxed text-[16px]"
            style={{
              color: 'var(--loyawin-neutral-600)',
              fontFamily: 'var(--font-body)',
            }}
          >
            {t.problem.subtitle}
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {t.problem.cards.map((card, index) => (
            <div
              key={card.number}
              className={`reveal reveal-delay-${index + 1} backdrop-blur-[24px] border rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300`}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(87, 74, 219, 0.12)',
                boxShadow: '0 8px 32px rgba(87, 74, 219, 0.08)',
              }}
            >
              {/* Decorative background element */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'var(--loyawin-primary)',
                }}
              />

              {/* Card Number */}
              <div
                className="font-bold mb-4 opacity-10 text-[80px] mx-[0px] mt-[0px] mb-[16px] px-[0px] py-[13px]"
                style={{
                  fontFamily: 'var(--font-head)',
                  color: 'var(--loyawin-primary)',
                }}
              >
                {card.number}
              </div>

              {/* Card Content */}
              <h3
                className="font-bold mb-3 sm:mb-4 text-[20px]"
                style={{
                  fontFamily: 'var(--font-head)',
                  color: 'var(--loyawin-neutral-900)',
                }}
              >
                {card.title}
              </h3>

              <p
                className="leading-relaxed text-[16px]"
                style={{
                  color: 'var(--loyawin-neutral-600)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
