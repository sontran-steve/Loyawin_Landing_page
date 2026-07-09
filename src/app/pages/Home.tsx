import image_Ads_1 from '@/imports/Ads-1.png'
import image_my_card from '@/imports/Iluss.png'
import image_LoyawinQR from '@/imports/LoyawinQR.jpeg'
import { useEffect, useRef, useState } from "react";
import {
  Monitor, Banknote, ShieldCheck, Megaphone,
  WalletCards, RefreshCw, Ticket, MapPin,
  ArrowRight, Check, Smartphone, QrCode,
  Star, Zap, Gift, Store,
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
      style={{
        background: "var(--loyawin-primary-xlight)",
        color: "var(--loyawin-primary)",
        border: "1px solid rgba(87,74,219,0.18)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Merchant Dashboard Mockup ─────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden border shadow-2xl w-full max-w-[480px]"
      style={{
        background: "#FAFBFC",
        borderColor: "rgba(87,74,219,0.15)",
        boxShadow: "0 24px 80px rgba(87,74,219,0.18), 0 4px 16px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "white", borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center text-[11px] font-medium text-gray-400">
          LoyaWin · Merchant Dashboard
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Members", val: "1,284", delta: "+34 today" },
            { label: "Points Issued", val: "48.2K", delta: "this month" },
            { label: "Vouchers Used", val: "312", delta: "+12%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-3 border" style={{ background: "white", borderColor: "rgba(87,74,219,0.1)" }}>
              <div className="text-[10px] font-medium text-gray-400 mb-1 leading-tight">{s.label}</div>
              <div className="text-base font-bold" style={{ color: "var(--loyawin-neutral-900)" }}>{s.val}</div>
              <div className="text-[10px]" style={{ color: "var(--loyawin-primary)" }}>{s.delta}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-3 border flex items-center gap-3" style={{ background: "white", borderColor: "rgba(87,74,219,0.1)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--loyawin-primary-xlight)" }}>
            <Zap className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-gray-700 truncate">Active Rule: Spend €1 → 10 pts</div>
            <div className="text-[10px] text-gray-400">All locations · Unlimited transactions</div>
          </div>
          <div className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a" }}>Live</div>
        </div>
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(87,74,219,0.1)" }}>
          <div className="px-3 py-2 text-[10px] font-semibold tracking-wider uppercase text-gray-400" style={{ background: "#f7f8fc" }}>
            Recent Transactions
          </div>
          {[
            { name: "Nguyen T.H.", pts: "+120 pts", time: "2 min ago" },
            { name: "Schmidt M.", pts: "+80 pts", time: "11 min ago" },
            { name: "Tran B.L.", pts: "−300 pts (redeemed)", time: "28 min ago" },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-2 border-t text-[11px]" style={{ borderColor: "rgba(87,74,219,0.06)", background: "white" }}>
              <span className="text-gray-600 font-medium">{tx.name}</span>
              <span className="font-semibold" style={{ color: tx.pts.includes("−") ? "#dc2626" : "#16a34a" }}>{tx.pts}</span>
              <span className="text-gray-400">{tx.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Customer App Mockup ───────────────────────────────────────────────────────
function AppMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-[2rem] overflow-hidden border shadow-2xl ${compact ? "w-[160px]" : "w-[220px]"} flex-shrink-0 mx-auto`}
      style={{
        background: "linear-gradient(160deg, #1a1830 0%, #2d2860 100%)",
        borderColor: "rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(87,74,219,0.3), 0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-16 h-1.5 rounded-full bg-white/20" />
      </div>
      <div className={`px-4 pb-6 space-y-3 ${compact ? "pt-2" : "pt-3"}`}>
        <div className="text-center">
          <div className={`font-bold text-white ${compact ? "text-xs" : "text-sm"}`}>My Card</div>
          <div className={`text-white/50 ${compact ? "text-[9px]" : "text-[11px]"}`}>CaféSei · Gold Member</div>
        </div>
        <div className="rounded-xl flex items-center justify-center mx-auto" style={{ background: "white", width: compact ? 80 : 110, height: compact ? 80 : 110 }}>
          <QrCode className={compact ? "w-12 h-12" : "w-16 h-16"} style={{ color: "#1a1830" }} />
        </div>
        <div className="rounded-xl p-2.5 text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div className={`font-bold ${compact ? "text-lg" : "text-2xl"}`} style={{ color: "var(--loyawin-primary-light)" }}>2,450</div>
          <div className="text-white/50 text-[10px]">Loyalty Points</div>
        </div>
        {!compact && (
          <div className="flex justify-between gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex-1 h-5 rounded" style={{ background: i < 4 ? "var(--loyawin-primary)" : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center pt-24 pb-12 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(87,74,219,0.13) 0%, transparent 70%), linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)" }}
    >
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(87,74,219,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}>
            <SectionLabel>Plug-and-Play Loyalty Platform</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight mb-5"
              style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
            >
              Turn Every Customer Visit Into{" "}
              <span style={{ background: "linear-gradient(120deg, var(--loyawin-primary), var(--loyawin-primary-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Lasting Loyalty.
              </span>
            </h1>
            <p className="text-lg leading-[1.7] mb-8 max-w-[520px]" style={{ color: "var(--loyawin-neutral-500)" }}>
              A plug-and-play loyalty platform for retail &amp; F&amp;B. Grow your sales for just{" "}
              <strong style={{ color: "var(--loyawin-neutral-700)" }}>€5/month</strong>. No complex POS integration required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://brand.loyawin.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-base no-underline transition-all duration-200 hover:translate-y-[-2px]"
                style={{ background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))", boxShadow: "0 8px 28px var(--loyawin-primary-glow)", fontFamily: "var(--font-body)" }}
              >
                Start for €5/mo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#app-download"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)]"
                style={{ border: "1.5px solid var(--loyawin-primary)", color: "var(--loyawin-primary)", fontFamily: "var(--font-body)" }}
              >
                Free Trial
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {["No POS integration", "€5 flat-rate", "Unlimited customers"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                  <Check className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} /> {b}
                </span>
              ))}
            </div>
          </div>
          <div
            className="relative transition-all duration-700 delay-150"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            {/* Back image - desktop dashboard */}
            <div
              className="relative w-full rounded-2xl -top-8 overflow-hidden"
              style={{
                boxShadow: "0 20px 64px rgba(87,74,219,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(87,74,219,0.12)",
              }}
            >
              <img
                src={image_Ads_1}
                alt="LoyaWin Dashboard - Manage Ads"
                className="w-full h-auto block"
                draggable={false}
              />
            </div>

            {/* Front image - mobile view, smaller, floating in front */}
            <div
              className="absolute -bottom-20 -right-12 w-[37%]"
              style={{
                zIndex: 10,
              }}
            >
              <img
                src={image_my_card}
                alt="LoyaWin Customer App"
                className="w-full h-auto block filter drop-shadow-[0_20px_40px_rgba(26,24,48,0.25)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ──────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  { feature: "Setup Cost", traditional: "> $1,000 setup fees", paper: "~$0 (printing costs)", loyawin: "€5 / month flat-rate" },
  { feature: "POS Integration", traditional: "Complex, weeks of work", paper: "None", loyawin: "Not required – browser only" },
  { feature: "Setup Time", traditional: "Weeks of training", paper: "Minutes", loyawin: "Live in under 1 minute" },
  { feature: "Marketing & Ads", traditional: "No self-serve ad system", paper: "None", loyawin: "Self-serve Ads on Customer App" },
  { feature: "Hidden Fees", traditional: "Transaction & tier fees", paper: "Printing & reorder costs", loyawin: "None – ever" },
];

function IconCheck() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden>
      <circle cx="9" cy="9" r="8.25" fill="url(#chk-fill)" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="chk-fill" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--loyawin-primary)" />
          <stop offset="1" stopColor="var(--loyawin-primary-light)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconCross({ amber = false }: { amber?: boolean }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden>
      <circle cx="9" cy="9" r="8.25" fill={amber ? "rgba(251,191,36,0.12)" : "rgba(239,68,68,0.1)"} />
      <path d="M6 6l6 6M12 6l-6 6" stroke={amber ? "#D97706" : "#EF4444"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ComparisonSection() {
  const { ref, visible } = useReveal();

  const customIcon = (<svg viewBox="0 0 22 22" fill="none" className="w-5 h-5" aria-hidden><rect x="2.5" y="2.5" width="17" height="17" rx="4" stroke="#94A3B8" strokeWidth="1.5" /><path d="M7 11h8M11 7v8" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" /></svg>);
  const paperIcon = (<svg viewBox="0 0 22 22" fill="none" className="w-5 h-5" aria-hidden><rect x="2.5" y="5.5" width="17" height="11" rx="3" stroke="#94A3B8" strokeWidth="1.5" /><path d="M6.5 9.5h5M6.5 12.5h9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" /></svg>);
  const starIcon = (<svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden><path d="M10 2l2.09 4.26 4.71.68-3.4 3.32.8 4.69L10 12.77l-4.2 2.18.8-4.69L3.2 6.94l4.71-.68L10 2z" fill="var(--loyawin-primary)" /></svg>);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, var(--loyawin-bg3) 60%, var(--loyawin-bg2) 100%)" }}>
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(87,74,219,0.07) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}>
          <SectionLabel>Why Switch</SectionLabel>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
            Traditional Systems vs.{" "}
            <span style={{ background: "linear-gradient(120deg, var(--loyawin-primary), var(--loyawin-primary-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>LoyaWin</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>See exactly what you leave behind - and what you gain.</p>
        </div>

        {/* ── Desktop table - single card approach ── */}
        <div className="hidden lg:block transition-all duration-700 delay-150" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}>
          <div className="rounded-2xl overflow-hidden border bg-white" style={{ borderColor: "rgba(87,74,219,0.12)", boxShadow: "0 8px 40px rgba(87,74,219,0.08)" }}>

            {/* Column headers */}
            <div className="grid" style={{ gridTemplateColumns: "220px 1fr 1fr 1fr" }}>
              {/* Feature label spacer */}
              <div className="px-6 py-5 border-b border-r" style={{ borderColor: "rgba(87,74,219,0.08)" }} />

              {/* Custom App */}
              <div className="flex flex-col items-center gap-1.5 px-6 py-5 border-b border-r text-center" style={{ borderColor: "rgba(87,74,219,0.08)", background: "#fafbfc" }}>
                {customIcon}
                <span className="text-sm font-bold mt-1" style={{ color: "var(--loyawin-neutral-700)" }}>Custom App</span>
                <span className="text-[11px]" style={{ color: "var(--loyawin-neutral-500)" }}>Traditional dev solution</span>
              </div>

              {/* Paper Cards */}
              <div className="flex flex-col items-center gap-1.5 px-6 py-5 border-b border-r text-center" style={{ borderColor: "rgba(87,74,219,0.08)", background: "#fafbfc" }}>
                {paperIcon}
                <span className="text-sm font-bold mt-1" style={{ color: "var(--loyawin-neutral-700)" }}>Paper Cards</span>
                <span className="text-[11px]" style={{ color: "var(--loyawin-neutral-500)" }}>Old-school stamp cards</span>
              </div>

              {/* LoyaWin - winner */}
              <div className="flex flex-col items-center gap-1.5 px-6 py-5 border-b text-center" style={{ borderColor: "rgba(87,74,219,0.12)", background: "var(--loyawin-primary-xlight)" }}>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "linear-gradient(90deg, var(--loyawin-primary), var(--loyawin-primary-light))", boxShadow: "0 2px 10px var(--loyawin-primary-glow)" }}>
                  ✦ Best Choice
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  {starIcon}
                  <span className="text-sm font-extrabold" style={{ color: "var(--loyawin-neutral-900)" }}>LoyaWin</span>
                </div>
                <span className="text-[11px]" style={{ color: "var(--loyawin-neutral-500)" }}>The modern standard</span>
              </div>
            </div>

            {/* Data rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div key={i} className="grid" style={{ gridTemplateColumns: "220px 1fr 1fr 1fr", borderBottom: i < COMPARISON_ROWS.length - 1 ? "1px solid rgba(87,74,219,0.06)" : "none" }}>
                {/* Feature label */}
                <div className="flex items-center px-6 py-4 border-r text-sm font-semibold" style={{ borderColor: "rgba(87,74,219,0.08)", color: "var(--loyawin-neutral-900)" }}>
                  {row.feature}
                </div>
                {/* Custom App */}
                <div className="flex items-center gap-2.5 px-6 py-4 border-r text-sm" style={{ borderColor: "rgba(87,74,219,0.06)", background: i % 2 === 0 ? "white" : "#fafbfc" }}>
                  <IconCross />
                  <span style={{ color: "var(--loyawin-neutral-500)" }}>{row.traditional}</span>
                </div>
                {/* Paper Cards */}
                <div className="flex items-center gap-2.5 px-6 py-4 border-r text-sm" style={{ borderColor: "rgba(87,74,219,0.06)", background: i % 2 === 0 ? "white" : "#fafbfc" }}>
                  <IconCross amber />
                  <span style={{ color: "var(--loyawin-neutral-500)" }}>{row.paper}</span>
                </div>
                {/* LoyaWin */}
                <div className="flex items-center gap-2.5 px-6 py-4 text-sm font-semibold" style={{ background: i % 2 === 0 ? "rgba(87,74,219,0.04)" : "rgba(87,74,219,0.07)", color: "var(--loyawin-neutral-900)" }}>
                  <IconCheck />
                  <span>{row.loyawin}</span>
                </div>
              </div>
            ))}

            {/* CTA footer row */}
            <div className="grid" style={{ gridTemplateColumns: "220px 1fr 1fr 1fr", borderTop: "1px solid rgba(87,74,219,0.08)" }}>
              <div className="px-6 py-5" />
              <div className="px-6 py-5 border-r" style={{ borderColor: "rgba(87,74,219,0.08)", background: "#fafbfc" }} />
              <div className="px-6 py-5 border-r" style={{ borderColor: "rgba(87,74,219,0.08)", background: "#fafbfc" }} />
              <div className="px-6 py-5" style={{ background: "rgba(87,74,219,0.06)" }}>
                <a
                  href="https://brand.loyawin.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm font-bold py-3.5 rounded-xl no-underline text-white transition-all hover:scale-[1.02] hover:shadow-lg whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)", boxShadow: "0 6px 24px var(--loyawin-primary-glow)" }}
                >
                  Start for €5/mo →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="lg:hidden space-y-4 transition-all duration-700 delay-150" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}>
          {[
            { id: "loyawin", label: "LoyaWin", sub: "The modern standard", icon: starIcon, isWinner: true, values: COMPARISON_ROWS.map((r) => r.loyawin) },
            { id: "custom", label: "Custom App", sub: "Traditional dev solution", icon: customIcon, isWinner: false, values: COMPARISON_ROWS.map((r) => r.traditional) },
            { id: "paper", label: "Paper Cards", sub: "Old-school stamp cards", icon: paperIcon, isWinner: false, values: COMPARISON_ROWS.map((r) => r.paper) },
          ].map((col) => (
            <div key={col.id} className="rounded-2xl overflow-hidden border" style={col.isWinner ? { background: "var(--loyawin-primary-xlight)", border: "1.5px solid rgba(87,74,219,0.2)", boxShadow: "0 12px 40px rgba(87,74,219,0.14)" } : { background: "white", border: "1px solid rgba(87,74,219,0.1)", boxShadow: "0 4px 16px rgba(87,74,219,0.05)" }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(87,74,219,0.08)" }}>
                <div className="flex items-center gap-2.5">
                  {col.icon}
                  <div>
                    <div className="text-sm font-bold" style={{ color: "var(--loyawin-neutral-900)" }}>{col.label}</div>
                    <div className="text-[10px]" style={{ color: "var(--loyawin-neutral-500)" }}>{col.sub}</div>
                  </div>
                </div>
                {col.isWinner && <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "linear-gradient(90deg, var(--loyawin-primary), var(--loyawin-primary-light))", boxShadow: "0 2px 10px var(--loyawin-primary-glow)" }}>Best Choice</span>}
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1.5fr] gap-3 px-5 py-3 border-b last:border-b-0" style={{ borderColor: "rgba(87,74,219,0.06)" }}>
                  <span className="text-xs font-semibold leading-snug" style={{ color: "var(--loyawin-neutral-500)" }}>{row.feature}</span>
                  <div className="flex items-start gap-2">
                    {col.isWinner ? <IconCheck /> : col.id === "custom" ? <IconCross /> : <IconCross amber />}
                    <span className="text-xs font-medium leading-snug" style={{ color: col.isWinner ? "var(--loyawin-neutral-900)" : "var(--loyawin-neutral-500)" }}>{col.values[i]}</span>
                  </div>
                </div>
              ))}
              {col.isWinner && (
                <div className="px-5 py-4">
                  <a href="https://brand.loyawin.com/register" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm font-bold py-3.5 rounded-xl no-underline text-white transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)", boxShadow: "0 6px 24px var(--loyawin-primary-glow)" }}>
                    Start for €5/mo →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why LoyaWin (merged B2B + B2C with toggle) ─────────────────────────────
const WHY_TABS = {
  business: [
    { icon: Monitor, title: "No POS Integration Needed", sub: "Works on any browser-enabled device at the counter. Go live in under a minute with zero hardware.", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
    { icon: Banknote, title: "€5 Flat-Rate, No Surprises", sub: "One price covers unlimited locations, staff, and customers. No transaction fees, no tier upgrades.", color: "#059669", bg: "rgba(5,150,105,0.1)" },
    { icon: ShieldCheck, title: "Fraud-Proof Ledger", sub: "Every stamp is verified online and logged. No offline loopholes, no duplicate points, no abuse.", color: "#D97706", bg: "rgba(217,119,6,0.1)" },
    { icon: Megaphone, title: "Self-Serve Marketing", sub: "Design vouchers, trigger birthday rewards, and run ad campaigns - all from your dashboard.", color: "#DC2626", bg: "rgba(220,38,38,0.1)" },
  ],
  customer: [
    { icon: WalletCards, title: "All Cards, One App", sub: "Every loyalty stamp card in your pocket. Never lose a card or miss a stamp again.", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
    { icon: RefreshCw, title: "Instant Balance Updates", sub: "See your points and transaction history the moment you leave the counter. No delays.", color: "#059669", bg: "rgba(5,150,105,0.1)" },
    { icon: Ticket, title: "One-Tap Redemptions", sub: "Exchange points for vouchers and redeem at checkout with a single scan.", color: "#D97706", bg: "rgba(217,119,6,0.1)" },
    { icon: MapPin, title: "Discover Local Deals", sub: "GPS surfaces partner stores within 10km with active rewards. Find great places nearby.", color: "#DC2626", bg: "rgba(220,38,38,0.1)" },
  ],
};

function WhyLoyaWinSection() {
  const { ref, visible } = useReveal();
  const [tab, setTab] = useState<"business" | "customer">("business");
  const features = WHY_TABS[tab];
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "white" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>Why LoyaWin</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>Built for Every Side of Loyalty</h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
          <div className="inline-flex rounded-full p-1" style={{ background: "var(--loyawin-bg2)", border: "1px solid rgba(87,74,219,0.12)" }}>
            {(["business", "customer"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-250 cursor-pointer"
                style={{
                  background: tab === t ? "var(--loyawin-primary)" : "transparent",
                  color: tab === t ? "white" : "var(--loyawin-neutral-500)",
                  boxShadow: tab === t ? "0 4px 16px rgba(87,74,219,0.25)" : "none",
                  fontFamily: "var(--font-head)",
                }}
              >
                {t === "business" ? "For Businesses" : "For Customers"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                style={{
                  background: "white",
                  borderColor: "rgba(87,74,219,0.1)",
                  boxShadow: "0 2px 12px rgba(87,74,219,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, box-shadow 0.2s ease`,
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: f.bg }}>
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>{f.title}</h3>
                  <p className="text-base leading-[1.6]" style={{ color: "var(--loyawin-neutral-500)" }}>{f.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works (visual flowchart v2) ──────────────────────────────────────
const HOW_STEPS = [
  {
    icon: Store, label: "Create Your QR", stepLabel: "STEP 01",
    desc: "Sign up and instantly receive a unique QR for your shop. Activate your loyalty programme in under a minute.",
    color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)",
  },
  {
    icon: QrCode, label: "Customer Scans", stepLabel: "STEP 02",
    desc: "Shoppers show their personal QR at the counter. Staff scan it to stamp - the whole check-in takes 3 seconds.",
    color: "#059669", bg: "rgba(5,150,105,0.12)",
  },
  {
    icon: Gift, label: "Reward Earned", stepLabel: "STEP 03",
    desc: "Points accumulate automatically after every visit. Customers tap once to redeem a voucher at the next visit.",
    color: "#D97706", bg: "rgba(217,119,6,0.12)",
  },
];

function HowItWorksSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.03em" }}>Three Steps. Infinite Visits.</h2>
          <p className="mt-3 text-base max-w-sm mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>The complete loyalty loop - from sign-up to first redemption.</p>
        </div>

        {/* Icon row */}
        <div className="grid grid-cols-3 gap-0 mb-8 relative max-w-[960px] mx-auto">
          {/* Arrow 1 */}
          <div className="hidden md:flex absolute top-10 -translate-y-1/2 left-[33.33%] -translate-x-1/2 items-center justify-center" style={{ zIndex: 1 }}>
            <ArrowRight className="w-7 h-7 stroke-[1.5]" style={{ color: "rgba(87,74,219,0.35)" }} />
          </div>
          {/* Arrow 2 */}
          <div className="hidden md:flex absolute top-10 -translate-y-1/2 left-[66.66%] -translate-x-1/2 items-center justify-center" style={{ zIndex: 1 }}>
            <ArrowRight className="w-7 h-7 stroke-[1.5]" style={{ color: "rgba(87,74,219,0.35)" }} />
          </div>

          {HOW_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s` }}>
                {/* Circle icon */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: step.bg }}>
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold text-white" style={{ background: step.color, fontFamily: "var(--font-head)" }}>
                    {i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {HOW_STEPS.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border p-5 text-center"
              style={{
                background: "white",
                borderColor: "rgba(87,74,219,0.08)",
                boxShadow: "0 2px 16px rgba(87,74,219,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
              }}
            >
              <div className="text-[12px] font-extrabold tracking-[0.12em] uppercase mb-2" style={{ color: step.color }}>{step.stepLabel}</div>
              <h3 className="text-md font-extrabold mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>{step.label}</h3>
              <p className="text-base leading-[1.6] px-1" style={{ color: "var(--loyawin-neutral-500)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────────
function PricingSection() {
  const { ref, visible } = useReveal();
  const MERCHANT_FEATURES = ["Unlimited store locations", "Unlimited staff accounts", "Unlimited customer members", "Ad campaign tool", "Real-time audit ledger", "Dashboard analytics"];
  const CUSTOMER_FEATURES = ["All loyalty cards in one app", "Instant welcome coupon", "Automatic birthday rewards", "GPS-powered nearby deals", "No third-party ads", "No hidden fees - ever"];
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>Transparent Pricing. Zero Surprises.</h2>
          <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>One flat-rate for merchants. Forever free for customers.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 max-w-[860px] mx-auto items-stretch">
          {/* Merchant */}
          <div className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(87,74,219,0.2)", boxShadow: "0 16px 60px rgba(87,74,219,0.14)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
            <div className="px-6 pt-8 pb-6" style={{ background: "linear-gradient(160deg, var(--loyawin-bg3) 0%, white 100%)" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--loyawin-primary)" }}>Merchant Plan</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-extrabold" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>€5</span>
                <span className="text-lg font-medium mb-2" style={{ color: "var(--loyawin-neutral-500)" }}>/ month</span>
              </div>
              <p className="text-sm" style={{ color: "var(--loyawin-neutral-500)" }}>Flat-rate. No transaction fees. No tier upgrades.</p>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1" style={{ background: "white" }}>
              <ul className="space-y-2.5 mt-5 flex-1">
                {MERCHANT_FEATURES.map((f) => (<li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--loyawin-neutral-700)" }}><Check className="w-4 h-4 flex-shrink-0" style={{ color: "var(--loyawin-primary)" }} />{f}</li>))}
              </ul>
              <a href="https://brand.loyawin.com/register" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-white font-semibold py-3.5 rounded-full no-underline transition-all hover:translate-y-[-1px] whitespace-nowrap mt-6" style={{ background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))", boxShadow: "0 6px 20px var(--loyawin-primary-glow)", fontFamily: "var(--font-body)" }}>
                Start Your Trial
              </a>
            </div>
          </div>
          {/* Customer */}
          <div className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(87,74,219,0.1)", boxShadow: "0 4px 24px rgba(87,74,219,0.06)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <div className="px-6 pt-8 pb-6" style={{ background: "linear-gradient(160deg, #f0fdf4 0%, white 100%)" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#059669" }}>Customer Plan</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-extrabold" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>Free</span>
                <span className="text-lg font-medium mb-2" style={{ color: "var(--loyawin-neutral-500)" }}>forever</span>
              </div>
              <p className="text-sm" style={{ color: "var(--loyawin-neutral-500)" }}>No third-party ads. No hidden fees. Always free.</p>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1" style={{ background: "white" }}>
              <ul className="space-y-2.5 mt-5 flex-1">
                {CUSTOMER_FEATURES.map((f) => (<li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--loyawin-neutral-700)" }}><Check className="w-4 h-4 flex-shrink-0" style={{ color: "#059669" }} />{f}</li>))}
              </ul>
              <a href="https://app.loyawin.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center font-semibold py-3.5 rounded-full no-underline transition-all hover:translate-y-[-1px] whitespace-nowrap mt-6" style={{ border: "1.5px solid #059669", color: "#059669", fontFamily: "var(--font-body)", background: "white" }}>
                Download Free App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <WhyLoyaWinSection />
      <HowItWorksSection />
      <PricingSection />
    </>
  );
}
