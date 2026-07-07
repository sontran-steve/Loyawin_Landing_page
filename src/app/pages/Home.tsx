import image_Ads_1 from '@/imports/Ads-1.png'
import image_my_card from '@/imports/Iluss.png'
import image_LoyawinQR from '@/imports/LoyawinQR.jpeg'
import { useEffect, useRef, useState } from "react";
import {
  Monitor, Banknote, ShieldCheck, Megaphone,
  WalletCards, RefreshCw, Ticket, MapPin,
  ArrowRight, Check, Smartphone, QrCode,
  Star, Zap,
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
            <SectionLabel><Zap className="w-3 h-3" /> Plug-and-Play Loyalty Platform</SectionLabel>
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
                <Smartphone className="w-4 h-4" /> Get the App
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
              className="relative w-full rounded-2xl overflow-hidden"
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
              className="absolute -bottom-6 -right-6 w-[33%]"
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
  { feature: "Customer Wallet", traditional: "Required App download", paper: "Physical card", loyawin: "Mobile App & PWA (Download optional)" },
  { feature: "Marketing & Ads", traditional: "No self-serve ad system", paper: "None", loyawin: "Self-serve Ads on Customer App" },
  { feature: "Card Loss / Forgetting", traditional: "N/A", paper: "Very common – stamps lost", loyawin: "Impossible – always on phone" },
  { feature: "Customer Data", traditional: "Partial, siloed", paper: "Zero data collected", loyawin: "Full real-time ledger" },
  { feature: "Eco Impact", traditional: "Moderate", paper: "Wasteful – printed cards", loyawin: "100% paperless" },
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
          <SectionLabel><Star className="w-3 h-3" /> Why Switch</SectionLabel>
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

// ─── B2B Features ──────────────────────────────────────────────────────────────
const B2B_FEATURES = [
  { icon: Monitor, title: "Decoupled Setup", sub: "Works on any browser-enabled counter device without integrating into your store's POS software. Live in minutes.", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
  { icon: Banknote, title: "Flat-rate €5/mo", sub: "Unlimited locations, staff members, and customers. No transaction fees, no tier upgrades, no hidden costs.", color: "#059669", bg: "rgba(5,150,105,0.1)" },
  { icon: ShieldCheck, title: "Real-time Ledger", sub: "Secure online-only transactions with full audit logs, preventing point duplication or staff fraud.", color: "#D97706", bg: "rgba(217,119,6,0.1)" },
  { icon: Megaphone, title: "Self-serve Marketing", sub: "Design vouchers, set birthday triggers, and launch ad campaigns - all from your merchant dashboard.", color: "#DC2626", bg: "rgba(220,38,38,0.1)" },
];

function B2BSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "white" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>For Businesses</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>Why LoyaWin for Businesses?</h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>Stop losing customers to competitors. Start every visit with a reason to return.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {B2B_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" style={{ background: "white", borderColor: "rgba(87,74,219,0.1)", boxShadow: "0 2px 12px rgba(87,74,219,0.06)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: f.bg }}>
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>{f.title}</h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>{f.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── B2C Features ──────────────────────────────────────────────────────────────
const B2C_FEATURES = [
  { icon: WalletCards, title: "Goodbye Paper Cards", sub: "Store all your loyalty stamp cards inside one digital pocket. Never lose a card or miss a stamp again.", color: "var(--loyawin-primary)", bg: "var(--loyawin-primary-xlight)" },
  { icon: RefreshCw, title: "Real-Time Balance", sub: "Check your points balance and transaction history instantly after every visit. No delays, no paperwork needed.", color: "#059669", bg: "rgba(5,150,105,0.1)" },
  { icon: Ticket, title: "Frictionless Redemptions", sub: "Tap to exchange your points for vouchers and redeem them at the counter instantly with a single scan.", color: "#D97706", bg: "rgba(217,119,6,0.1)" },
  { icon: MapPin, title: "Local Discoveries", sub: "Automatically surface partner stores within a 10km radius using GPS. Find new places with active deals nearby.", color: "#DC2626", bg: "rgba(220,38,38,0.1)" },
];

function B2CSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>For Customers</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>Why Customers Love LoyaWin</h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>One app. Every loyalty card. Real rewards that arrive automatically.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {B2C_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" style={{ background: "white", borderColor: "rgba(87,74,219,0.1)", boxShadow: "0 2px 12px rgba(87,74,219,0.06)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: f.bg }}>
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>{f.title}</h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>{f.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
const BRAND_STEPS = [
  { num: "1", title: "Subscribe", desc: "Activate your €5/mo plan. Your store goes live instantly." },
  { num: "2", title: "Configure", desc: "Set earning rules, design reward vouchers, and schedule birthday triggers." },
  { num: "3", title: "Grow", desc: "Track retention metrics, launch ad campaigns, and watch repeat visits climb." },
];
const CUSTOMER_STEPS = [
  { num: "1", title: "Download", desc: "Access LoyaWin for free - no credit card, no commitment." },
  { num: "2", title: "Scan QR", desc: "Show your personal QR code at checkout. The cashier taps to stamp." },
  { num: "3", title: "Redeem", desc: "Earn points with every visit and claim vouchers from partner brands." },
];

function HowItWorksSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "white" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>Two Paths, One Platform</h2>
          <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>Whether you run a shop or collect stamps, LoyaWin has a role for you.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Brand flow */}
          {[
            {
              audience: "For Brands",
              headline: "Launch your loyalty programme",
              accent: "var(--loyawin-primary)",
              accentLight: "var(--loyawin-primary-xlight)",
              accentBorder: "rgba(87,74,219,0.15)",
              steps: BRAND_STEPS,
              slide: "translateX(-32px)",
              delay: "0.1s",
            },
            {
              audience: "For Customers",
              headline: "Collect rewards everywhere",
              accent: "#059669",
              accentLight: "rgba(5,150,105,0.08)",
              accentBorder: "rgba(5,150,105,0.15)",
              steps: CUSTOMER_STEPS,
              slide: "translateX(32px)",
              delay: "0.2s",
            },
          ].map((card) => (
            <div
              key={card.audience}
              className="rounded-2xl border p-8 flex flex-col gap-8"
              style={{
                background: "white",
                borderColor: card.accentBorder,
                boxShadow: `0 4px 32px rgba(0,0,0,0.04)`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : card.slide,
                transition: `opacity 0.7s ease ${card.delay}, transform 0.7s ease ${card.delay}`,
              }}
            >
              {/* Header */}
              <div>
                <span
                  className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-2 block"
                  style={{ color: card.accent }}
                >
                  {card.audience}
                </span>
                <h3
                  className="text-xl font-extrabold leading-snug"
                  style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
                >
                  {card.headline}
                </h3>
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-0">
                {card.steps.map((s, i) => (
                  <div key={i} className="flex gap-5">
                    {/* Step indicator column */}
                    <div className="flex flex-col items-center" style={{ width: 36, flexShrink: 0 }}>
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                        style={{ background: card.accentLight, color: card.accent }}
                      >
                        {s.num}
                      </div>
                      {i < card.steps.length - 1 && (
                        <div
                          className="w-px my-2"
                          style={{ background: card.accentBorder, flex: 1, minHeight: 24 }}
                        />
                      )}
                    </div>
                    {/* Content */}
                    <div className={i < card.steps.length - 1 ? "pb-5" : ""}>
                      <div
                        className="font-bold text-[15px] mb-1 leading-snug"
                        style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
                      >
                        {s.title}
                      </div>
                      <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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

// ─── App Download Block ────────────────────────────────────────────────────────
function AppDownloadSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="app-download" ref={ref} className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1a1830 0%, #2d2860 100%)" }}>
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(87,74,219,0.25) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(123,113,232,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Smartphone className="w-3 h-3" /> Customer App
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-head)" }}>Claim Your Rewards Today!</h2>
            <p className="text-base text-white/60 leading-[1.7] mb-8">Get your digital member card and start collecting points instantly. Scan the QR or tap the button below to register in seconds with OTP or Google SSO.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[{ label: "App Store", sub: "Download on the", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="#000"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg> }, { label: "Google Play", sub: "Get it on", icon: <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z" /><g><path d="M19.7,19.2L4.3,35.3c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l17.4-9.9L19.7,19.2z" fill="#EA4335" /><path d="M35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04" /><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4" /><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3L19.8,20z" fill="#34A853" /></g></svg> }].map((btn) => (
                <a key={btn.label} href="https://app.loyawin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 rounded-xl no-underline transition-all hover:scale-[1.02]" style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                  {btn.icon}
                  <div>
                    <div className="text-[10px] text-gray-500 leading-tight">{btn.sub}</div>
                    <div className="text-sm font-bold text-gray-900 leading-tight">{btn.label}</div>
                  </div>
                </a>
              ))}
            </div>

          </div>
          <div className="flex items-center justify-center transition-all duration-700 delay-200" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl p-4 flex flex-col items-center gap-2" style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
                <img src={image_LoyawinQR} alt="LoyaWin QR" className="w-48 h-48 object-contain rounded-lg" />
              </div>
              <p className="text-sm text-white/40 text-center max-w-[280px]">Or scan the QR code to open the web app instantly - no download required.</p>
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
      <B2BSection />
      <B2CSection />
      <HowItWorksSection />
      <PricingSection />
      <AppDownloadSection />
    </>
  );
}
