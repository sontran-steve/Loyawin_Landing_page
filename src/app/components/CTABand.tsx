import { useNavigate } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations";

export function CTABand() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const navigate = useNavigate();

  return (
    <div
      className="py-12 sm:py-16 md:py-20 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--loyawin-primary), #6B62E8, #8B82F0)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.6, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)",
            animation: "ctaShimmer 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative" style={{ zIndex: 1 }}>
        <h2
          className="reveal text-[32px] sm:text-[40px] md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.5]"
          style={{ fontFamily: "var(--font-head)" }}
        >
          {t.ctaBand.title}
        </h2>

        <p className="reveal reveal-delay-1 text-base sm:text-lg text-white/80 mb-7 sm:mb-9">
          {t.ctaBand.subtitle}
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="reveal reveal-delay-2 bg-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border-none cursor-pointer text-base font-bold transition-all duration-300 hover:scale-[1.05] hover:brightness-110 inline-block no-underline"
          style={{
            color: "var(--loyawin-primary)",
            fontFamily: "var(--font-body)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 12px 48px rgba(255,255,255,0.5), 0 0 32px rgba(255,255,255,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
          }}
        >
          {t.ctaBand.cta}
        </button>
      </div>
    </div>
  );
}
