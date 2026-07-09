// AI Coding
/**
 * @file ProductPage.tsx
 * @description Bản mẫu/import giới thiệu sản phẩm LoyaWin với thông tin chi tiết về các tính năng bảo mật và vận hành.
 */
import { useEffect, useRef, useState } from "react";
import {
  Check,
  Zap,
  Smartphone,
  LayoutDashboard,
  SplitSquareHorizontal,
  ShieldOff,
  Megaphone,
  TrendingUp,
  Clock,
  Store,
  Lock,
  CreditCard,
  ChevronRight,
  BarChart2,
  Tag,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

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

function CheckItem({ text, light = false }: { text: string; light?: boolean }) {
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
    num: "01",
    title: "Staff Web App",
    sub: "The Frontline Powerhouse",
    highlighted: false,
    icon: Zap,
    features: [
      "QR / Phone check-in completed in under 3 seconds",
      "New staff master the flow in 15 minutes or less",
      "Works on any device - tablet, phone, or desktop browser",
      "PIN-protected actions with full audit trails",
    ],
  },
  {
    num: "02",
    title: "Customer App & PWA",
    sub: "Frictionless Engagement",
    highlighted: true,
    icon: Smartphone,
    features: [
      "Flexible access via Mobile App or PWA browser",
      "Real-time point balance & transaction history",
      "Smart Wallet auto-surfaces the best vouchers",
      "Refer & Earn program built in - no plugins required",
    ],
  },
  {
    num: "03",
    title: "Admin Dashboard",
    sub: "The Command Center",
    highlighted: false,
    icon: LayoutDashboard,
    features: [
      "Voucher usage, Earn/Spend trend reporting built in",
      "Multi-store management - 10 to 100+ locations",
      "Dynamic config with no redeployment needed",
      "New account growth tracking with retention metrics",
    ],
  },
];

function PlatformSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      id="platform"
      className="py-20 sm:py-28 relative"
      style={{ background: "#FAFBFF" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>The Platform</SectionLabel>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
          >
            A Complete Multi-touchpoint Ecosystem
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
            Three purpose-built products working together - your staff, your customers, and your business all in sync.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {PLATFORM_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="rounded-2xl p-7 sm:p-8 border transition-all duration-500 relative overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? card.highlighted ? "translateY(-14px)" : "translateY(0)"
                    : "translateY(32px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  ...(card.highlighted
                    ? {
                        background: "linear-gradient(145deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)",
                        borderColor: "transparent",
                        boxShadow: "0 20px 60px rgba(87,74,219,0.35), 0 4px 16px rgba(87,74,219,0.2)",
                      }
                    : {
                        background: "rgba(255,255,255,0.85)",
                        borderColor: "rgba(87,74,219,0.1)",
                        boxShadow: "0 4px 24px rgba(87,74,219,0.07)",
                      }),
                }}
              >
                {/* Decorative glow for highlighted */}
                {card.highlighted && (
                  <div
                    className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                    style={{ background: "radial-gradient(circle at top right, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
                  />
                )}

                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-extrabold tracking-widest uppercase"
                    style={{ color: card.highlighted ? "rgba(255,255,255,0.6)" : "var(--loyawin-neutral-300)" }}
                  >
                    {card.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: card.highlighted ? "rgba(255,255,255,0.2)" : "var(--loyawin-primary-xlight)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.highlighted ? "white" : "var(--loyawin-primary)" }} />
                  </div>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-1"
                  style={{ color: card.highlighted ? "white" : "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm mb-6 italic"
                  style={{ color: card.highlighted ? "rgba(255,255,255,0.75)" : "var(--loyawin-neutral-500)" }}
                >
                  {card.sub}
                </p>

                <ul className="space-y-3 list-none">
                  {card.features.map((f, fi) => (
                    <CheckItem key={fi} text={f} light={card.highlighted} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2 - Error Correction & Edge Cases ────────────────────────────────
function EdgeCasesSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      id="killer-feature"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(140deg, #2d2469 0%, var(--loyawin-primary) 50%, #6254e8 100%)" }}
    >
      {/* Background noise/glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(255,255,255,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom right, rgba(0,0,0,0.2) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left - copy */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            <SectionLabel light>The Killer Feature</SectionLabel>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5"
              style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
            >
              Error Correction &amp; Edge Cases
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
              The reason generic apps fall at the counter - and why LoyaWin wins. Built to handle real-world chaos, not just happy paths.
            </p>

            {/* Feature list */}
            <div className="space-y-6">
              {[
                {
                  Icon: Store,
                  title: "Context-Aware Operation",
                  desc: "Storefront devices are hardware-bound to specific locations. No manual brand selection or store selection is required by staff-simply scan and reward.",
                },
                {
                  Icon: Smartphone,
                  title: "Two-Phase Verification",
                  desc: "Read-only scans for checking point balances require no login to maximize speed. Entering a staff PIN is only prompted when writing transactions, securing audit trails.",
                },
                {
                  Icon: Lock,
                  title: "Online-Only Verification",
                  desc: "Every transaction is verified by the server in real-time. Offline point buffering is blocked entirely to eliminate point duplication or fraud.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="flex gap-4 transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-head)" }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - scenario cards */}
          <div
            className="space-y-4 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(32px)" }}
          >
            {/* Context-Aware Transactions card */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Store className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg leading-snug pt-1.5" style={{ fontFamily: "var(--font-head)" }}>
                  Context-Aware Transactions
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                Hardware-bound devices automatically inject the store and brand context. No manual brand selection or store selection is required by the storefront staff.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                  Auto store context
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
                >
                  Zero manual selection
                </span>
              </div>
            </div>

            {/* Fraud Prevention card */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <ShieldOff className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg leading-snug pt-1.5" style={{ fontFamily: "var(--font-head)" }}>
                  Fraud &amp; Offline Prevention
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                Online-only verification. The system blocks offline point buffer storage to completely prevent point duplication or double-spending fraud at the storefront. Every stamp is server-confirmed before it counts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                  Zero offline buffer
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
                >
                  Real-time server auth
                </span>
              </div>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "< 3s", label: "Check-in time" },
                { val: "100%", label: "Online verified" },
                { val: "0", label: "Fraud incidents" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center border"
                  style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
                >
                  <div className="text-xl font-extrabold text-white mb-0.5" style={{ fontFamily: "var(--font-head)" }}>{s.val}</div>
                  <div className="text-[10px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3 - Self-Serve Ad Campaign Manager ───────────────────────────────
const AD_STEPS = [
  { Icon: Megaphone, step: "01", title: "Upload Banner", desc: "Brands upload marketing creatives in standard aspect ratios directly from the dashboard." },
  { Icon: Store, step: "02", title: "Choose Placement", desc: "Select from Top Banner, Hot Deals carousel, or Popular section inside the Customer App feed." },
  { Icon: CreditCard, step: "03", title: "Pay via Stripe", desc: "Secure one-click checkout. Campaigns activate instantly once payment is confirmed." },
  { Icon: BarChart2, step: "04", title: "Track Performance", desc: "Real-time impressions, click-through rate, and spend analytics - all visible on the dashboard." },
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

          {/* Left copy */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            <SectionLabel><Megaphone className="w-3 h-3" /> Merchant Marketing</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5"
              style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
            >
              Self-Serve Ad Campaign Manager
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "var(--loyawin-neutral-500)" }}>
              Every merchant on LoyaWin can publish ads directly to the Customer App's homepage feed - no external agency, no waiting. Launch a campaign in minutes, measure it in real time.
            </p>

            {/* Direct Reach callout */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl border"
              style={{
                background: "var(--loyawin-primary-xlight)",
                borderColor: "rgba(87,74,219,0.18)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--loyawin-primary)" }}
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm mb-1" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                  Direct Reach to Active Users
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--loyawin-neutral-600)" }}>
                  Banners display directly on the Customer App's homepage feed - the first screen every loyalty user sees when they open the app. Zero intermediaries between your brand and your audience.
                </p>
              </div>
            </div>
          </div>

          {/* Right - 4-step flow */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-150"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            {AD_STEPS.map(({ Icon, step, title, desc }, i) => (
              <div
                key={step}
                className="rounded-2xl p-5 border group transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]"
                style={{
                  background: "white",
                  borderColor: "rgba(87,74,219,0.1)",
                  boxShadow: "0 2px 12px rgba(87,74,219,0.06)",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, box-shadow 0.2s, translate 0.2s`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--loyawin-primary-xlight)" }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: "var(--loyawin-primary)" }} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest" style={{ color: "var(--loyawin-neutral-300)" }}>
                    {step}
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                  {title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 - Earning & Voucher Rules ──────────────────────────────────────
const RULES = [
  {
    Icon: Clock,
    title: "Flexible Expiry Policy",
    desc: "Configure point reset cycles at 90, 180, or 365-day intervals. Cycles are auto-processed based on the brand's local timezone – no manual intervention needed.",
    tags: ["90 days", "180 days", "365 days", "Auto-timezone"],
    color: "#6366F1",
    bg: "rgba(99,102,241,0.07)",
  },
  {
    Icon: Tag,
    title: "Voucher Inventory Control",
    desc: "Cap total voucher issuance, set per-user redemption limits, and restrict specific vouchers to selected store locations for exclusive offline rewards.",
    tags: ["Total cap", "Per-user limit", "Location-specific"],
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    Icon: Users,
    title: "Flexible Earning Methods",
    desc: "Configure how your customers earn points: via Staff scanning membership QR at register, Customer self-scanning receipts, or run both methods in Dual Mode.",
    tags: ["Staff Scan", "Customer Scan", "Dual Mode"],
    color: "#D97706",
    bg: "rgba(217,119,6,0.07)",
  },
  {
    Icon: MapPin,
    title: "Location-Targeted Campaigns",
    desc: "Run promotions only at specific branches - restrict a seasonal voucher to flagship stores or selected locations.",
    tags: ["Branch-specific", "Launch promos", "Location rules"],
    color: "#DC2626",
    bg: "rgba(220,38,38,0.07)",
  },
];

function EarningRulesSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 relative"
      style={{ background: "linear-gradient(180deg, #F8F9FF 0%, white 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div
          className="max-w-2xl mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>Custom Rules</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
          >
            Advanced Earning &amp; Voucher Rules
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--loyawin-neutral-500)" }}>
            Your loyalty programme is as unique as your brand. Granular controls let you design a programme that fits your business model exactly - not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {RULES.map(({ Icon, title, desc, tags, color, bg }, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              style={{
                background: "white",
                borderColor: "rgba(87,74,219,0.08)",
                boxShadow: "0 2px 12px rgba(87,74,219,0.05)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.2s, translate 0.2s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--loyawin-neutral-500)" }}>
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: bg, color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5 - Security & Trust ────────────────────────────────────────────
const SECURITY_ITEMS = [
  {
    Icon: Lock,
    title: "Isolated Tenant Security",
    desc: "Strict database isolation ensures each brand's customer data is completely siloed. No cross-tenant data leakage - your members belong only to you.",
    detail: "Row-level security enforced at the database layer. Brand A cannot query Brand B's data under any circumstance.",
    accent: "#6366F1",
  },
  {
    Icon: CreditCard,
    title: "Secure Billing via Stripe",
    desc: "Instant merchant onboarding backed by Stripe Checkout with recurring subscription management. PCI-compliant payments, zero card data stored on LoyaWin servers.",
    detail: "Stripe handles all card tokenisation. Webhooks confirm subscription status before dashboard access is granted.",
    accent: "#059669",
  },
  {
    Icon: ShieldOff,
    title: "Fraud-Proof Transaction Layer",
    desc: "Every point award or redemption is validated server-side before it is written to the ledger. Offline transactions and duplicate stamps are architecturally impossible.",
    detail: "Idempotency keys on every write operation prevent race conditions and retry-based fraud.",
    accent: "#D97706",
  },
  {
    Icon: BarChart2,
    title: "Full Audit Ledger",
    desc: "Every action - stamps, refunds, manual entries, PIN overrides - is logged with staff ID, timestamp, and device fingerprint. Uneditable audit trail.",
    detail: "Logs are append-only. No staff member, including admins, can delete or alter historical records.",
    accent: "#DC2626",
  },
];

function SecuritySection() {
  const { ref, visible } = useReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "#0F0E24" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 65%)", filter: "blur(48px)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel light><Lock className="w-3 h-3" /> Security &amp; Trust</SectionLabel>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
          >
            Enterprise-Grade Architecture
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(148,163,184,0.9)" }}>
            Security isn't a feature we added - it's how the system was designed from day one.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECURITY_ITEMS.map(({ Icon, title, desc, detail, accent }, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="text-left rounded-2xl p-6 border transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: expanded === i ? `${accent}55` : "rgba(255,255,255,0.08)",
                boxShadow: expanded === i ? `0 0 0 1px ${accent}33, 0 8px 32px rgba(0,0,0,0.3)` : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
                cursor: "pointer",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: expanded === i ? `${accent}22` : "rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: expanded === i ? accent : "rgba(255,255,255,0.7)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base text-white" style={{ fontFamily: "var(--font-head)" }}>{title}</h3>
                    <ChevronRight
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        transform: expanded === i ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mt-1.5" style={{ color: "rgba(148,163,184,0.85)" }}>{desc}</p>
                  {/* Expandable detail */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: expanded === i ? 80 : 0 }}
                  >
                    <p
                      className="text-xs leading-relaxed mt-3 pt-3 border-t"
                      style={{ color: accent, borderColor: `${accent}33` }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Trust badges row */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {[
            "Stripe-certified billing",
            "Row-level DB isolation",
            "Append-only audit logs",
            "Server-side TX validation",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs font-semibold"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.7)" }}
              />
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
    <section
      ref={ref}
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }}
      />
      <div
        className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5"
          style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
        >
          Ready to run loyalty like a pro?
        </h2>
        <p className="text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
          Set up your merchant account in minutes. No developer, no POS, no fuss - just results.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://brand.loyawin.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:scale-[1.03] hover:shadow-xl"
            style={{
              background: "white",
              color: "var(--loyawin-primary)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
              fontFamily: "var(--font-body)",
            }}
          >
            Start for €5/mo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold no-underline transition-all hover:bg-white/20"
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              color: "white",
              fontFamily: "var(--font-body)",
            }}
          >
            Talk to sales
          </a>
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
      <EdgeCasesSection />
      <AdCampaignSection />
      <EarningRulesSection />
      <SecuritySection />
      <ProductCTA />
    </div>
  );
}
