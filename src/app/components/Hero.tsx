import { Play } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations";

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const navigate = useNavigate();

  return (
    <section
      className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative overflow-hidden"
      id="home"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Left Side */}
          <div>
            <h1
              className="reveal reveal-delay-1 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 800,
                color: "var(--loyawin-neutral-900)",
              }}
            >
              <span style={{ color: "var(--loyawin-primary)" }}>
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.title}
            </h1>

            <p
              className="reveal reveal-delay-2 text-base sm:text-lg leading-[1.7] mb-8 sm:mb-10 max-w-[460px]"
              style={{ color: "var(--loyawin-neutral-500)" }}
            >
              {t.hero.subtitle}
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-white border-none cursor-pointer text-base font-semibold transition-all duration-[250ms] hover:translate-y-[-3px] inline-block no-underline text-center"
                style={{
                  background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                  boxShadow: "0 6px 28px var(--loyawin-primary-glow)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.hero.ctaPrimary}
              </button>

              <button
                onClick={() => navigate("/ecosystem")}
                className="px-6 sm:px-7 py-3 sm:py-[15px] rounded-full bg-transparent border-[1.5px] cursor-pointer text-base font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 no-underline hover:bg-[var(--loyawin-primary-xlight)]"
                style={{
                  borderColor: "var(--loyawin-neutral-300)",
                  color: "var(--loyawin-neutral-700)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Play className="w-[18px] h-[18px]" />
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div
              className="reveal reveal-delay-4 grid grid-cols-3 gap-4 sm:gap-6 md:gap-9 mt-8 sm:mt-12 pt-6 sm:pt-9 b"
            >
              {[
                { num: "2,500+", label: t.hero.stats.stores },
                { num: "4.2M+", label: t.hero.stats.members },
                { num: "68%", label: t.hero.stats.returnRate },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-xl sm:text-2xl md:text-[30px] font-bold"
                    style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-primary)" }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-xs sm:text-[13px]" style={{ color: "var(--loyawin-neutral-500)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="reveal reveal-delay-2 relative mt-8 lg:mt-0">
            {/* Float Card Top Right */}
            <div
              className="float-card fc1 absolute -top-2 sm:-top-4 md:-top-6 -right-2 sm:-right-3 md:-right-5 px-3 sm:px-4 md:px-[18px] py-2.5 sm:py-3 md:py-3.5 rounded-[var(--radius-sm)] backdrop-blur-[20px] border z-[3]"
              style={{
                background: "var(--loyawin-glass-bg)",
                borderColor: "var(--loyawin-glass-border)",
                boxShadow: "var(--loyawin-glass-shadow)",
              }}
            >
              <div className="text-base sm:text-lg md:text-[20px] mb-0.5 sm:mb-1">📈</div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: "var(--loyawin-neutral-500)" }}>
                Revenue this month
              </div>
              <div
                className="text-sm sm:text-base font-bold mt-0.5"
                style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-primary)" }}
              >
                +34.6%
              </div>
            </div>

            {/* Float Card Bottom Left */}
            <div
              className="float-card fc2 absolute bottom-3 sm:bottom-4 md:bottom-5 -left-2 sm:-left-4 md:-left-8 px-3 sm:px-4 md:px-[18px] py-2.5 sm:py-3 md:py-3.5 rounded-[var(--radius-sm)] backdrop-blur-[20px] border z-[3]"
              style={{
                background: "var(--loyawin-glass-bg)",
                borderColor: "var(--loyawin-glass-border)",
                boxShadow: "var(--loyawin-glass-shadow)",
              }}
            >
              <div className="text-base sm:text-lg md:text-[20px] mb-0.5 sm:mb-1">🎁</div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: "var(--loyawin-neutral-500)" }}>
                Rewards redeemed
              </div>
              <div
                className="text-sm sm:text-base font-bold mt-0.5"
                style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-primary)" }}
              >
                12,840
              </div>
            </div>

            {/* Main Card */}
            <div
              className="backdrop-blur-[24px] border rounded-[var(--radius-lg)] p-5 sm:p-6 md:p-8 relative z-[2]"
              style={{
                background: "var(--loyawin-glass-bg)",
                borderColor: "var(--loyawin-glass-border)",
                boxShadow: "var(--loyawin-glass-shadow)",
              }}
            >
              {/* Loyalty Card */}
              <div
                className="rounded-[var(--radius-md)] p-5 sm:p-6 md:p-7 text-white mb-4 sm:mb-5 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--loyawin-primary), #8B82F0, #a89ef0)" }}
              >
                <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-[30px] -left-5 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] rounded-full bg-white/[0.07]" />
                <div className="w-8 sm:w-10 h-6 sm:h-[30px] bg-white/25 rounded-md mb-4 sm:mb-5 grid place-items-center relative z-10">
                  <div className="w-5 sm:w-6 h-[15px] sm:h-[18px] bg-white/40 rounded-[3px]" />
                </div>
                <div className="relative z-10">
                  <div className="text-base sm:text-lg font-bold mb-1" style={{ fontFamily: "var(--font-head)" }}>
                    Andrew Collins
                  </div>
                  <div className="text-xs opacity-80 mb-3 sm:mb-4">12,450 points earned</div>
                  <div className="bg-white/20 rounded-full h-1.5">
                    <div className="bg-white h-1.5 rounded-full w-[68%]" />
                  </div>
                  <div className="flex justify-between mt-2.5 sm:mt-3 text-[11px] sm:text-xs opacity-90">
                    <span>Gold Member</span>
                    <span>1,550 pts to Platinum</span>
                  </div>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { num: "47", label: "Purchases" },
                  { num: "$8.9K", label: "Total spent" },
                  { num: "23", label: "Rewards used" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border rounded-[var(--radius-sm)] p-2.5 sm:p-3 md:p-3.5 text-center"
                    style={{ borderColor: "var(--loyawin-neutral-100)" }}
                  >
                    <div
                      className="text-lg sm:text-xl font-bold"
                      style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-primary)" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-[10px] sm:text-[11px] mt-0.5" style={{ color: "var(--loyawin-neutral-500)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
