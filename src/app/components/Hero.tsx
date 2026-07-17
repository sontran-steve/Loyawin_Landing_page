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
          <div className="reveal reveal-delay-2 relative mt-8 lg:mt-0 flex justify-center">
            <img
              src="https://i.postimg.cc/QCW1Bt0W/HERORROO.png"
              alt="LoyaWin Loyalty Platform Mockup"
              className="w-full max-w-[540px] h-auto object-contain transition-all duration-300"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(87,74,219,0.12))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
