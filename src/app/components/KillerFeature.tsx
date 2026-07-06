import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { Edit3, RotateCcw, Shield, Users, Undo2, WifiOff, Check } from 'lucide-react';

const iconMap = {
  users: Users,
  undo: Undo2,
  'wifi-off': WifiOff,
};

const colorMap = {
  blue: {
    bg: 'rgba(99, 102, 241, 0.1)',
    border: 'rgba(99, 102, 241, 0.3)',
    icon: 'rgb(99, 102, 241)',
    badge: 'rgba(99, 102, 241, 0.15)',
  },
  orange: {
    bg: 'rgba(249, 115, 22, 0.1)',
    border: 'rgba(249, 115, 22, 0.3)',
    icon: 'rgb(249, 115, 22)',
    badge: 'rgba(249, 115, 22, 0.15)',
  },
  red: {
    bg: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.3)',
    icon: 'rgb(239, 68, 68)',
    badge: 'rgba(239, 68, 68, 0.15)',
  },
};

export function KillerFeature() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const featureIconMap = [Edit3, RotateCcw, Shield];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      id="killer-feature"
      style={{ 
        background: 'linear-gradient(135deg, #3d2e7c 0%, #574ad9 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Features */}
          <div>
            <div
              className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 sm:mb-[18px]"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {t.killerFeature.badge}
            </div>
            
            <h2
              className="reveal text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4"
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                color: 'white',
              }}
            >
              {t.killerFeature.title}
            </h2>
            
            <p
              className="reveal text-base sm:text-[17px] leading-[1.7] mb-8 sm:mb-10"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {t.killerFeature.subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-5 sm:space-y-6">
              {t.killerFeature.features.map((feature, index) => {
                const Icon = featureIconMap[index];
                return (
                  <div
                    key={index}
                    className="reveal reveal-delay-1 flex items-start gap-4"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'white' }} />
                    </div>
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-1.5"
                        style={{
                          fontFamily: 'var(--font-head)',
                          color: 'white',
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-[1.6]"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Scenarios */}
          <div className="space-y-4 sm:space-y-5">
            {t.killerFeature.scenarios.map((scenario, index) => {
              const Icon = iconMap[scenario.icon as keyof typeof iconMap];
              const colors = colorMap[scenario.color as keyof typeof colorMap];
              
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${index + 2} backdrop-blur-[20px] border rounded-[var(--radius-lg)] p-5 sm:p-6 transition-all duration-300 hover:transform hover:translate-x-1`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'white' }} />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold flex-1 pt-1.5"
                      style={{
                        fontFamily: 'var(--font-head)',
                        color: 'white',
                      }}
                    >
                      {scenario.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-[1.6] mb-3.5"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    {scenario.description}
                  </p>

                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                      color: 'white',
                    }}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {scenario.badge}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}