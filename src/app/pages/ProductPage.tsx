// AI Coding
/**
 * @file ProductPage.tsx
 * @description Trang giới thiệu sản phẩm LoyaWin với thông tin chi tiết về các tính năng bảo mật và vận hành.
 */
import { useEffect, useRef, useState } from "react";
import {
  Check, Zap, Smartphone, LayoutDashboard,
  ShieldOff, Megaphone, ShieldCheck, Zap as ZapIcon,
  TrendingUp, Clock, Store, Lock, CreditCard,
  ChevronRight, BarChart2, Tag, MapPin, Users, ArrowRight, Sliders,
} from "lucide-react";
import { Link } from "react-router";
import image_productIllus from "@/imports/productIllus.png";
import image_ruleExpiry from "@/imports/image-2.png";
import image_ruleInventory from "@/imports/image-3.png";
import image_ruleEarning from "@/imports/image-4.png";
import image_ruleLocation from "@/imports/image-7.png";
import image_flexible from "@/imports/flexible.png";
import image_voucher from "@/imports/voucher.png";
import image_earningmethod from "@/imports/earningmethod.png";
import image_location from "@/imports/location.png";
import image_securityIllus from "@/imports/SecurityIllus.png";
import image_customRules from "@/imports/CustomRules.png";







// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Shared primitives ────────────────────────────────────────────────────────
function SectionLabel({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
      style={
        light
          ? { background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.2)" }
          : { background: "var(--loyawin-primary-xlight)", color: "var(--loyawin-primary)", border: "1px solid rgba(87,74,219,0.2)" }
      }
    >
      {children}
    </span>
  );
}

function CheckItem({ text, light = false }: { text: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
        style={{ background: light ? "rgba(255,255,255,0.2)" : "var(--loyawin-primary-xlight)" }}
      >
        <Check className="w-3 h-3" style={{ color: light ? "white" : "var(--loyawin-primary)", strokeWidth: 3 }} />
      </div>
      <span className="text-sm leading-[1.65]" style={{ color: light ? "rgba(255,255,255,0.92)" : "var(--loyawin-neutral-700)" }}>
        {text}
      </span>
    </li>
  );
}

// ─── Section 1 - Platform Overview ───────────────────────────────────────────
const PLATFORM_CARDS = [
  {
    num: "01", title: "Staff", sub: "The Frontline Powerhouse", highlighted: false, icon: Zap,
    features: [
      "3-Second Check-in",
      "Zero-Training Setup",
      "Universal Device Support",
      "Secure PIN Authorization",
    ],
  },
  {
    num: "02", title: "Customer", sub: "Frictionless Engagement", highlighted: true, icon: Smartphone,
    features: [
      "No App Install Required",
      "Real-Time Points Tracker",
      "Smart Reward Wallet",
      "Built-in Referrals",
    ],
  },
  {
    num: "03", title: "Admin", sub: "The Command Center", highlighted: false, icon: LayoutDashboard,
    features: [
      "Live Performance Analytics",
      "Multi-Store Control",
      "Instant Rule Updates",
      "Retention Tracking",
    ],
  },
];

function PlatformSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} id="platform" className="py-20 sm:py-28 relative" style={{ background: "#FAFBFF" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
            A Complete Multi-touchpoint Ecosystem
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
            Three purpose-built products working together - your staff, your customers, and your business all in sync.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {PLATFORM_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="rounded-2xl p-7 sm:p-8 border transition-all duration-500 relative overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? (card.highlighted ? "translateY(-14px)" : "translateY(0)") : "translateY(32px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  ...(card.highlighted
                    ? { background: "linear-gradient(145deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)", borderColor: "transparent", boxShadow: "0 20px 60px rgba(87,74,219,0.35), 0 4px 16px rgba(87,74,219,0.2)" }
                    : { background: "rgba(255,255,255,0.85)", borderColor: "rgba(87,74,219,0.1)", boxShadow: "0 4px 24px rgba(87,74,219,0.07)" }),
                }}
              >
                {card.highlighted && (
                  <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none" style={{ background: "radial-gradient(circle at top right, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
                )}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-1" style={{ color: card.highlighted ? "white" : "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>{card.title}</h3>
                    <p className="text-sm italic" style={{ color: card.highlighted ? "rgba(255,255,255,0.75)" : "var(--loyawin-neutral-500)" }}>{card.sub}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: card.highlighted ? "rgba(255,255,255,0.2)" : "var(--loyawin-primary-xlight)" }}>
                    <Icon className="w-5 h-5" style={{ color: card.highlighted ? "white" : "var(--loyawin-primary)" }} />
                  </div>
                </div>
                <ul className="space-y-3 list-none">
                  {card.features.map((f, fi) => <CheckItem key={fi} text={f} light={card.highlighted} />)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// ─── Section 3 - Self-Serve Ad Campaign Manager ───────────────────────────────
const AD_STEPS = [
  { step: "01", Icon: Megaphone, title: "Create Campaign", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
  { step: "02", Icon: Zap, title: "Launch Ad", color: "#059669", bg: "rgba(5,150,105,0.07)" },
  { step: "03", Icon: BarChart2, title: "Track Performance", color: "#D97706", bg: "rgba(217,119,6,0.07)" },
];


function AdCampaignSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 relative"
      style={{ background: "white" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Title + Sub + 3 Blocks stacked vertically */}
          <div
            className="flex flex-col gap-8 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            {/* Copy */}
            <div>
              <SectionLabel>Merchant Marketing</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5"
                style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
              >
                Self-Serve Ads
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
                Promote your business directly to customers in real time.
              </p>
            </div>

            {/* 3 Blocks stacked horizontally as compact premium cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {AD_STEPS.map(({ step, Icon, title, color, bg }) => (
                <div
                  key={step}
                  className="rounded-3xl p-2.5 sm:p-4 border group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex flex-col items-center justify-start sm:items-start sm:justify-between text-center sm:text-left overflow-hidden"
                  style={{
                    background: "white",
                    borderColor: "rgba(87,74,219,0.06)",
                    boxShadow: "0 8px 24px rgba(87,74,219,0.04)",
                  }}
                >
                  <div className="mb-1.5 sm:mb-4 w-full flex justify-center sm:block">
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" style={{ color }} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-[14px] sm:text-sm text-center sm:text-left leading-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-body)" }}>
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div
            className="hidden md:flex items-center justify-center transition-all duration-700 delay-300 h-full w-full"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            <img
              src={image_productIllus}
              alt="Product Ad Campaign Illustration"
              className="w-full h-auto object-contain max-h-[680px] scale-110 lg:scale-[1.15] transition-transform duration-300 drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Section 4 - Earning & Voucher Rules ──────────────────────────────────────
const RULES = [
  { Icon: Clock, title: "Flexible Expiry Policy", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
  { Icon: Tag, title: "Voucher Inventory Control", color: "#059669", bg: "rgba(5,150,105,0.07)" },
  { Icon: Users, title: "Flexible Earning Methods", color: "#D97706", bg: "rgba(217,119,6,0.07)" },
  { Icon: MapPin, title: "Location-Targeted Campaigns", color: "#DC2626", bg: "rgba(220,38,38,0.07)" },
];

function EarningRulesSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-20 sm:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="max-w-2xl mb-14 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>Custom Rules</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
            Advanced Earning &amp; Voucher Rules
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
            Your loyalty programme is as unique as your brand. Granular controls let you design a programme that fits your business model exactly - not the other way around.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Cards Grid */}
          <div
            className="transition-all duration-700 delay-100 w-full max-w-[480px] mx-auto"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            {/* 4 Cards in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {RULES.map(({ Icon, title, color, bg }, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-3 sm:p-5 border group transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] flex flex-col items-center justify-start sm:items-start sm:justify-between text-center sm:text-left min-h-[106px] sm:min-h-[128px]"
                  style={{
                    background: "white",
                    borderColor: "rgba(87,74,219,0.08)",
                    boxShadow: "0 4px 20px rgba(87,74,219,0.04)",
                  }}
                >
                  <div className="mb-3 w-full flex justify-center sm:block">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color }} />
                    </div>
                  </div>
                  <h3 className="font-medium text-[14px] sm:text-base text-slate-900 leading-snug text-center sm:text-left" style={{ fontFamily: "var(--font-body)" }}>
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div
            className="hidden md:flex items-center justify-center transition-all duration-700 delay-200 w-full relative"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="w-full aspect-[4/3] rounded-3xl flex items-center justify-center overflow-visible relative">
              <img
                src={image_customRules}
                alt="Custom Earning Rules Illustration"
                className="w-full h-full object-contain drop-shadow-[0_12px_36px_rgba(118,81,252,0.08)] lg:absolute lg:w-[125%] lg:h-[125%] lg:max-w-none lg:-right-16 lg:top-1/2 lg:-translate-y-1/2 z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Section 5 - Security & Trust ────────────────────────────────────────────
// ─── Section 5 - Security & Trust ────────────────────────────────────────────
const SECURITY_ITEMS = [
  { Icon: Lock, title: "Isolated Database Security", accent: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
  { Icon: CreditCard, title: "Secure Payments", accent: "#059669", bg: "rgba(5,150,105,0.07)" },
  { Icon: ShieldOff, title: "Fraud-Proof Transaction Layer", accent: "#D97706", bg: "rgba(217,119,6,0.07)" },
  { Icon: BarChart2, title: "Immutable Audit Ledger", accent: "#DC2626", bg: "rgba(220,38,38,0.07)" },
];

function SecuritySection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "white" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Title + Sub + Cards Grid */}
          <div
            className="flex flex-col gap-8 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            <div>
              <SectionLabel>Security &amp; Trust</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
                Enterprise Security
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
                Built with security at the core, protecting your business and customers.
              </p>
            </div>

            {/* 4 Cards in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {SECURITY_ITEMS.map(({ Icon, title, accent, bg }, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-3 sm:p-5 border group transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] flex items-start justify-center text-center sm:block sm:text-left"
                  style={{
                    background: "white",
                    borderColor: "rgba(87,74,219,0.08)",
                    boxShadow: "0 4px 20px rgba(87,74,219,0.04)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 w-full">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" style={{ color: accent }} />
                    </div>
                    <h3 className="font-medium text-[14px] sm:text-base text-slate-900 leading-snug text-center sm:text-left" style={{ fontFamily: "var(--font-head)" }}>{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Security Illustration */}
          <div
            className="hidden md:flex items-center justify-center transition-all duration-700 delay-300 w-full"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            <div className="w-full aspect-[4/3] rounded-3xl flex items-center justify-center overflow-hidden relative">
              <img
                src={image_securityIllus}
                alt="Enterprise Security Illustration"
                className="w-full h-full object-contain drop-shadow-[0_12px_36px_rgba(118,81,252,0.08)]"
              />
            </div>
          </div>

        </div>

        {/* Centered badges at the bottom of the section */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 transition-all duration-700 delay-300" style={{ opacity: visible ? 1 : 0 }}>
          {["Stripe-certified billing", "Row-level DB isolation", "Append-only audit logs", "Server-side TX validation"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs sm:text-sm font-semibold" style={{ color: "var(--loyawin-neutral-500)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--loyawin-primary)" }} />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA Band ───────────────────────────────────────────────────────────
function ProductCTA() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-20 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }} />
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5" style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
          Ready to run loyalty like a pro?
        </h2>
        <p className="text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
          Set up your merchant account in minutes. No developer, no POS, no fuss - just results.
        </p>
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            href="https://brand.loyawin.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold no-underline transition-all hover:scale-[1.03] hover:shadow-xl whitespace-nowrap"
            style={{ background: "white", color: "var(--loyawin-primary)", boxShadow: "0 8px 28px rgba(0,0,0,0.2)", fontFamily: "var(--font-body)" }}
          >
            Start for €5/mo <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold no-underline transition-all hover:bg-white/20 whitespace-nowrap"
            style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white", fontFamily: "var(--font-body)" }}
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function ProductPage() {
  return (
    <div className="pt-14 md:pt-[60px]">
      <PlatformSection />
      <AdCampaignSection />
      <EarningRulesSection />
      <SecuritySection />
      <ProductCTA />
    </div>
  );
}
