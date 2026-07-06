import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { Layers, Plug, BarChart3, MapPin, Smartphone, Ticket } from 'lucide-react';

export function Features() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      icon: Layers,
      title: t.features.items[0].title,
      description: t.features.items[0].description,
    },
    {
      icon: Plug,
      title: t.features.items[1].title,
      description: t.features.items[1].description,
    },
    {
      icon: BarChart3,
      title: t.features.items[2].title,
      description: t.features.items[2].description,
    },
    {
      icon: MapPin,
      title: t.features.items[3].title,
      description: t.features.items[3].description,
    },
    {
      icon: Smartphone,
      title: t.features.items[4].title,
      description: t.features.items[4].description,
    },
    {
      icon: Ticket,
      title: t.features.items[5].title,
      description: t.features.items[5].description,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
      id="features"
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
            {t.features.badge}
          </div>
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              color: 'var(--loyawin-neutral-900)',
            }}
          >
            {t.features.title}
          </h2>
          <p
            className="reveal text-base sm:text-[17px] leading-[1.7] max-w-[640px] mx-auto"
            style={{ color: 'var(--loyawin-neutral-500)' }}
          >
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-10 sm:mt-12 md:mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${((index % 3) + 1)} backdrop-blur-[24px] border rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300`}
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
                
                <div
                  className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] md:w-[52px] md:h-[52px] border rounded-[12px] md:rounded-[14px] flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--loyawin-primary-xlight), rgba(87,74,219,0.06))',
                    borderColor: 'rgba(87,74,219,0.2)',
                  }}
                >
                  <IconComponent 
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: 'var(--loyawin-primary)' }}
                  />
                </div>
                
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 sm:mb-2.5"
                  style={{
                    fontFamily: 'var(--font-head)',
                    color: 'var(--loyawin-neutral-900)',
                  }}
                >
                  {feature.title}
                </h3>
                
                <p
                  className="text-sm leading-[1.7]"
                  style={{ color: 'var(--loyawin-neutral-500)' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}