import { useNavigate } from "react-router";
import { Sparkles, Calendar, TrendingUp, ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "No more writer's block. Our customized LLM creates highly engaging, brand-specific restaurant copy, emojis, and local hashtags designed to make mouth-watering dishes pop.",
  },
  {
    icon: Calendar,
    title: "Auto-Schedule Posts",
    description: "Plan ahead without manual worry. Drop your photo, select your target hours, and watch our calendar pipeline deliver your marketing directly to Instagram, Facebook, and Threads.",
  },
  {
    icon: TrendingUp,
    title: "Track Engagement & Performance",
    description: "Know what drives bookings. Deep analytics track click-through rates, profile views, and menu opens directly linked to your direct reservation system.",
  },
];

import image_marketing from "@/imports/marketing.png";
import image_sample from "@/imports/Sample.png";

export function MarketingToolPage() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "var(--font-body)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-[0px] pt-[112px] pb-[80px]" style={{ background: "var(--loyawin-bg)" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <div
                className="reveal inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-5 border"
                style={{ color: "var(--loyawin-primary)", background: "var(--loyawin-primary-xlight)", borderColor: "rgba(87,74,219,0.2)" }}
              >
                <Sparkles className="w-3 h-3" />
                Marketing Tool - AI Suite
              </div>

              <h1
                className="reveal reveal-delay-1 text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--loyawin-neutral-900)" }}
              >
                From kitchen to{" "}
                <span style={{ color: "var(--loyawin-primary)" }}>Instagram feed</span>{" "}
                instantly.
              </h1>

              <p
                className="reveal reveal-delay-2 text-base sm:text-[17px] leading-[1.7] mb-8 max-w-[500px]"
                style={{ color: "var(--loyawin-neutral-500)" }}
              >
                Empower your restaurant brand with automated, beautiful posts. Our intelligent auto-publisher captures dish creations, writes savory descriptions, and triggers scheduled delivery to your Instagram and Facebook audiences instantly.
              </p>

              <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-start gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 rounded-full text-white border-none cursor-pointer text-base font-semibold transition-all duration-[250ms] hover:translate-y-[-3px] inline-flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                    boxShadow: "0 6px 28px var(--loyawin-primary-glow)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Explore Live Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="reveal reveal-delay-4 flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm font-semibold" style={{ color: "var(--loyawin-neutral-500)" }}>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
                  100% Free Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
                  No Password Required
                </span>
              </div>
            </div>

            {/* Right - social visual */}
            <div className="reveal reveal-delay-2 flex justify-center items-center relative w-full max-w-[850px] lg:max-w-none mx-auto lg:scale-125 lg:translate-x-10 transition-all duration-500">
              <img
                src={image_marketing}
                alt="Social Cross-Posting Visual Mockup"
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Feature Cards ── */}
      <section className="py-12 sm:py-16 md:py-20 relative" style={{ background: "var(--loyawin-bg2)", borderTop: "1px solid var(--loyawin-neutral-100)", borderBottom: "1px solid var(--loyawin-neutral-100)" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <div
              className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 border"
              style={{ color: "var(--loyawin-primary)", background: "var(--loyawin-primary-xlight)", borderColor: "rgba(87,74,219,0.2)" }}
            >
              Marketing Suite Features
            </div>
            <h2
              className="reveal text-[26px] sm:text-[34px] md:text-[38px] leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--loyawin-neutral-900)" }}
            >
              Designed for visual growth & foodie engagement
            </h2>
            <p className="reveal text-sm sm:text-base leading-[1.7] max-w-[580px] mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>
              We handle the complex formatting, smart scheduling, and caption writing so your kitchen and marketing staff can focus on cooking delicious food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 1} bg-white border rounded-2xl sm:rounded-3xl p-7 sm:p-8 relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300`}
                style={{ borderColor: "rgba(87,74,219,0.1)", boxShadow: "0 4px 24px rgba(87,74,219,0.06)" }}
              >
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-300 pointer-events-none"
                  style={{ background: "var(--loyawin-primary)" }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-105 transition-transform"
                  style={{ background: "var(--loyawin-primary-xlight)", borderColor: "rgba(87,74,219,0.2)" }}
                >
                  <f.icon className="w-5 h-5" style={{ color: "var(--loyawin-primary)" }} />
                </div>
                <h3 className="text-base font-bold mb-2.5" style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-neutral-900)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Editor Preview ── */}
      <section className="py-12 sm:py-16 md:py-20 relative" style={{ background: "var(--loyawin-bg)" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="mb-10 sm:mb-12">
            <div
              className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 border"
              style={{ color: "var(--loyawin-primary)", background: "var(--loyawin-primary-xlight)", borderColor: "rgba(87,74,219,0.2)" }}
            >
              Interactive Editor Preview
            </div>
            <h2
              className="reveal text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] mb-3"
              style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--loyawin-neutral-900)" }}
            >
              Craft beautiful updates in a unified dashboard
            </h2>
            <p className="reveal text-sm sm:text-base leading-[1.7] max-w-[560px]" style={{ color: "var(--loyawin-neutral-500)" }}>
              Take a look at how straightforward it is. We pair the creative power of AI with real visual previews, giving you total confidence before you hit publish.
            </p>
          </div>

          <div className="reveal reveal-delay-1 flex justify-center items-center">
            <div className="w-full max-w-[960px] mx-auto">
              <img
                src={image_sample}
                alt="GastroHub Publisher Dashboard Mockup"
                className="w-full h-auto object-contain block filter drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "var(--loyawin-neutral-900)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: "var(--loyawin-primary)", opacity: 0.1, filter: "blur(100px)" }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] tracking-[-0.02em] mb-4 text-white"
            style={{ fontFamily: "var(--font-head)", fontWeight: 700 }}
          >
            Automate your social feeds effortlessly
          </h2>
          <p className="reveal reveal-delay-1 text-sm sm:text-base leading-[1.7] mb-10 max-w-[480px] mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Eliminate commission-eating channels. Let GastroHub Social Auto Post sync and format your food descriptions so they arrive perfectly suited for hungry local foodies.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full text-white border-none cursor-pointer text-base font-semibold transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                boxShadow: "0 6px 24px var(--loyawin-primary-glow)",
                fontFamily: "var(--font-body)",
              }}
            >
              Start Free Trial
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
