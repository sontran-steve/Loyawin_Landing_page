import { Fragment, useEffect, useRef, useState } from "react";
import {
  Monitor,
  Banknote,
  ShieldCheck,
  Megaphone,
  WalletCards,
  RefreshCw,
  Ticket,
  MapPin,
  ArrowRight,
  Check,
  Smartphone,
  QrCode,
  Star,
  ChevronLeft,
  ChevronRight,
  Zap,
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

// ─── Simulated brand logos ─────────────────────────────────────────────────────
const PARTNER_BRANDS = [
  { name: "Bếp Mẹ", color: "#E85D04", bg: "#FFF3E0" },
  { name: "CaféSei", color: "#2D6A4F", bg: "#D8F3DC" },
  { name: "NoodleKing", color: "#C77DFF", bg: "#F3EEFF" },
  { name: "BakeryHaus", color: "#D62828", bg: "#FFE8E8" },
  { name: "BrewCo", color: "#5C4033", bg: "#EFEBE9" },
  { name: "GreenBowl", color: "#1B7A3E", bg: "#E8F5E9" },
  { name: "TacoCity", color: "#E65100", bg: "#FBE9E7" },
  { name: "PizzaLab", color: "#C0392B", bg: "#FDEDEC" },
  { name: "SushiBar", color: "#1565C0", bg: "#E3F2FD" },
  { name: "BubbleTea+", color: "#6A1B9A", bg: "#F3E5F5" },
  { name: "FrütBox", color: "#2E7D32", bg: "#E8F5E9" },
  { name: "WokHaus", color: "#BF360C", bg: "#FBE9E7" },
];

const LIVE_ADS = [
  {
    brand: "CaféSei",
    headline: "Double Stamps Every Friday!",
    sub: "Visit any CaféSei location and earn 2× loyalty points all day Friday.",
    badge: "Limited Offer",
    color: "#2D6A4F",
    bg: "linear-gradient(135deg, #D8F3DC 0%, #B7E4C7 100%)",
    accent: "#2D6A4F",
  },
  {
    brand: "BakeryHaus",
    headline: "Free Croissant on Your Birthday",
    sub: "Registered LoyaWin members get a complimentary croissant during their birth month.",
    badge: "Birthday Perk",
    color: "#D62828",
    bg: "linear-gradient(135deg, #FFE8E8 0%, #FFCDD2 100%)",
    accent: "#D62828",
  },
  {
    brand: "GreenBowl",
    headline: "Earn 500 Points Today",
    sub: "New members who visit GreenBowl this week receive a 500-point welcome bonus.",
    badge: "Welcome Bonus",
    color: "#1B7A3E",
    bg: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
    accent: "#1B7A3E",
  },
  {
    brand: "BrewCo",
    headline: "Buy 4, Get the 5th Free",
    sub: "Stamp your card digitally. No paper, no hassle - just great coffee.",
    badge: "Loyalty Deal",
    color: "#5C4033",
    bg: "linear-gradient(135deg, #EFEBE9 0%, #D7CCC8 100%)",
    accent: "#5C4033",
  },
  {
    brand: "BubbleTea+",
    headline: "Refer a Friend - Both Get Rewarded",
    sub: "Invite a friend to join LoyaWin via your referral link. You both receive 200 bonus points.",
    badge: "Referral",
    color: "#6A1B9A",
    bg: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)",
    accent: "#6A1B9A",
  },
];

const HOT_DEALS = [
  { brand: "Bếp Mẹ", deal: "10% Off Any Main Course", points: "800 pts", expires: "Expires Jul 31" },
  { brand: "NoodleKing", deal: "Free Egg Topping Upgrade", points: "300 pts", expires: "Expires Aug 15" },
  { brand: "TacoCity", deal: "Buy 2 Tacos, Get 1 Free", points: "600 pts", expires: "Expires Aug 1" },
  { brand: "SushiBar", deal: "Free Miso Soup with any Set", points: "400 pts", expires: "Expires Jul 28" },
  { brand: "PizzaLab", deal: "Free Delivery on Next Order", points: "500 pts", expires: "Expires Aug 10" },
  { brand: "WokHaus", deal: "Free Spring Roll Starter", points: "350 pts", expires: "Expires Aug 5" },
];

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
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: "white", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center text-[11px] font-medium text-gray-400">
          LoyaWin · Merchant Dashboard
        </div>
      </div>
      {/* Body */}
      <div className="p-4 space-y-3">
        {/* Stat row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Members", val: "1,284", delta: "+34 today" },
            { label: "Points Issued", val: "48.2K", delta: "this month" },
            { label: "Vouchers Used", val: "312", delta: "+12%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3 border"
              style={{ background: "white", borderColor: "rgba(87,74,219,0.1)" }}
            >
              <div className="text-[10px] font-medium text-gray-400 mb-1 leading-tight">{s.label}</div>
              <div className="text-base font-bold" style={{ color: "var(--loyawin-neutral-900)" }}>{s.val}</div>
              <div className="text-[10px]" style={{ color: "var(--loyawin-primary)" }}>{s.delta}</div>
            </div>
          ))}
        </div>
        {/* Earning rule preview */}
        <div
          className="rounded-xl p-3 border flex items-center gap-3"
          style={{ background: "white", borderColor: "rgba(87,74,219,0.1)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--loyawin-primary-xlight)" }}
          >
            <Zap className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-gray-700 truncate">Active Rule: Spend €1 → 10 pts</div>
            <div className="text-[10px] text-gray-400">All locations · Unlimited transactions</div>
          </div>
          <div
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a" }}
          >
            Live
          </div>
        </div>
        {/* Recent transactions */}
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(87,74,219,0.1)" }}>
          <div
            className="px-3 py-2 text-[10px] font-semibold tracking-wider uppercase text-gray-400"
            style={{ background: "#f7f8fc" }}
          >
            Recent Transactions
          </div>
          {[
            { name: "Nguyen T.H.", pts: "+120 pts", time: "2 min ago" },
            { name: "Schmidt M.", pts: "+80 pts", time: "11 min ago" },
            { name: "Tran B.L.", pts: "−300 pts (redeemed)", time: "28 min ago" },
          ].map((tx, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-3 py-2 border-t text-[11px]"
              style={{ borderColor: "rgba(87,74,219,0.06)", background: "white" }}
            >
              <span className="text-gray-600 font-medium">{tx.name}</span>
              <span
                className="font-semibold"
                style={{ color: tx.pts.includes("−") ? "#dc2626" : "#16a34a" }}
              >
                {tx.pts}
              </span>
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
      {/* Notch */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-16 h-1.5 rounded-full bg-white/20" />
      </div>
      {/* Content */}
      <div className={`px-4 pb-6 space-y-3 ${compact ? "pt-2" : "pt-3"}`}>
        <div className="text-center">
          <div className={`font-bold text-white ${compact ? "text-xs" : "text-sm"}`}>My Card</div>
          <div className={`text-white/50 ${compact ? "text-[9px]" : "text-[11px]"}`}>CaféSei · Gold Member</div>
        </div>
        {/* QR */}
        <div
          className="rounded-xl flex items-center justify-center mx-auto"
          style={{
            background: "white",
            width: compact ? 80 : 110,
            height: compact ? 80 : 110,
          }}
        >
          <QrCode className={compact ? "w-12 h-12" : "w-16 h-16"} style={{ color: "#1a1830" }} />
        </div>
        {/* Points */}
        <div
          className="rounded-xl p-2.5 text-center"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div
            className={`font-bold ${compact ? "text-lg" : "text-2xl"}`}
            style={{ color: "var(--loyawin-primary-light)" }}
          >
            2,450
          </div>
          <div className="text-white/50 text-[10px]">Loyalty Points</div>
        </div>
        {/* Stamp row */}
        {!compact && (
          <div className="flex justify-between gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-5 rounded"
                style={{
                  background: i < 4 ? "var(--loyawin-primary)" : "rgba(255,255,255,0.15)",
                }}
              />
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
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(87,74,219,0.13) 0%, transparent 70%), linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(87,74,219,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left copy */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            <SectionLabel><Zap className="w-3 h-3" /> Plug-and-Play Loyalty Platform</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight mb-5"
              style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
            >
              Turn Every Customer Visit Into{" "}
              <span
                style={{
                  background: "linear-gradient(120deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lasting Loyalty.
              </span>
            </h1>
            <p
              className="text-lg leading-[1.7] mb-8 max-w-[520px]"
              style={{ color: "var(--loyawin-neutral-500)" }}
            >
              A plug-and-play loyalty platform for retail &amp; F&amp;B. Grow your sales for just{" "}
              <strong style={{ color: "var(--loyawin-neutral-700)" }}>€5/month</strong>. No complex POS
              integration required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://brand.loyawin.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-base no-underline transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                  boxShadow: "0 8px 28px var(--loyawin-primary-glow)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Start for €5/mo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#app-download"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-base no-underline transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)]"
                style={{
                  border: "1.5px solid var(--loyawin-primary)",
                  color: "var(--loyawin-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Smartphone className="w-4 h-4" />
                Get the App
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {[
                "No POS integration",
                "€5 flat-rate",
                "Unlimited customers",
              ].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                  <Check className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right visuals */}
          <div
            className="relative flex items-center justify-center gap-4 transition-all duration-700 delay-150"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <div className="hidden sm:block">
              <DashboardMockup />
            </div>
            <div className="relative -ml-4 sm:-ml-8 mt-8 sm:mt-16">
              <AppMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ──────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    feature: "Setup Cost",
    traditional: "> $1,000 setup fees",
    paper: "~$0 (printing costs)",
    loyawin: "€5 / month flat-rate",
  },
  {
    feature: "POS Integration",
    traditional: "Complex, weeks of work",
    paper: "None",
    loyawin: "Not required – browser only",
  },
  {
    feature: "Setup Time",
    traditional: "Weeks of training",
    paper: "Minutes",
    loyawin: "Live in under 1 minute",
  },
  {
    feature: "Customer Wallet",
    traditional: "Required App download",
    paper: "Physical card",
    loyawin: "Mobile App & PWA (Download optional)",
  },
  {
    feature: "Marketing & Ads",
    traditional: "No self-serve ad system",
    paper: "None",
    loyawin: "Self-serve Ads on Customer App",
  },
  {
    feature: "Card Loss / Forgetting",
    traditional: "N/A",
    paper: "Very common – stamps lost",
    loyawin: "Impossible – always on phone",
  },
  {
    feature: "Customer Data",
    traditional: "Partial, siloed",
    paper: "Zero data collected",
    loyawin: "Full real-time ledger",
  },
  {
    feature: "Eco Impact",
    traditional: "Moderate",
    paper: "Wasteful – printed cards",
    loyawin: "100% paperless",
  },
  {
    feature: "Hidden Fees",
    traditional: "Transaction & tier fees",
    paper: "Printing & reorder costs",
    loyawin: "None – ever",
  },
];

// Icon helpers for the comparison columns
function IconCheck() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden>
      <circle cx="9" cy="9" r="8.25" fill="url(#chk-fill)" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="chk-fill" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#14B8A6" />
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

  type ColId = "custom" | "paper" | "loyawin";

  const cols: {
    id: ColId;
    label: string;
    sub: string;
    icon: React.ReactNode;
    values: string[];
    isWinner: boolean;
  }[] = [
    {
      id: "custom",
      label: "Custom App",
      sub: "Traditional dev solution",
      icon: (
        <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5" aria-hidden>
          <rect x="2.5" y="2.5" width="17" height="17" rx="4" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M7 11h8M11 7v8" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      values: COMPARISON_ROWS.map((r) => r.traditional),
      isWinner: false,
    },
    {
      id: "paper",
      label: "Paper Cards",
      sub: "Old-school stamp cards",
      icon: (
        <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5" aria-hidden>
          <rect x="2.5" y="5.5" width="17" height="11" rx="3" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M6.5 9.5h5M6.5 12.5h9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      values: COMPARISON_ROWS.map((r) => r.paper),
      isWinner: false,
    },
    {
      id: "loyawin",
      label: "LoyaWin",
      sub: "The modern standard",
      icon: (
        <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5" aria-hidden>
          <path d="M11 2.5l2.36 4.8 5.3.77-3.83 3.73.9 5.27L11 14.5l-4.73 2.57.9-5.27L3.34 8.07l5.3-.77L11 2.5z"
            fill="url(#star-g)" stroke="none" />
          <defs>
            <linearGradient id="star-g" x1="3" y1="2" x2="19" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </svg>
      ),
      values: COMPARISON_ROWS.map((r) => r.loyawin),
      isWinner: true,
    },
  ];

  // Wrapper for the glowing border on the winner column
  const GlowBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
      className={`relative ${className}`}
      style={{
        background: "linear-gradient(160deg, #6366F1 0%, #14B8A6 100%)",
        borderRadius: 20,
        padding: 1.5,
        boxShadow: "0 0 0 4px rgba(99,102,241,0.08), 0 20px 60px rgba(99,102,241,0.18)",
      }}
    >
      <div className="rounded-[18px] overflow-hidden h-full">{children}</div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8F9FF 0%, #F3F4FB 60%, #EEF0FA 100%)" }}
    >
      {/* Soft pastel ambient blobs */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[480px] h-[360px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(20,184,166,0.06) 0%, transparent 65%)",
          filter: "blur(56px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[280px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.05) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(99,102,241,0.08)",
              color: "#6366F1",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <Star className="w-3 h-3" /> Why Switch
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "#0F172A", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}
          >
            Traditional Systems vs.{" "}
            <span
              style={{
                background: "linear-gradient(120deg, #6366F1 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LoyaWin
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#64748B" }}>
            See exactly what you leave behind - and what you gain.
          </p>
        </div>

        {/* ── Desktop layout ── */}
        <div
          className="hidden lg:grid transition-all duration-700 delay-150"
          style={{
            gridTemplateColumns: "200px 1fr 1fr 1fr",
            gap: "0 12px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Column header: spacer */}
          <div />

          {/* Column headers */}
          {cols.map((col) =>
            col.isWinner ? (
              /* Winner header - inside glow wrapper top */
              <div
                key={col.id}
                className="flex flex-col items-center gap-2 pt-5 pb-4 rounded-t-[18px]"
                style={{
                  background: "linear-gradient(160deg, rgba(99,102,241,0.06) 0%, rgba(20,184,166,0.04) 100%)",
                  borderLeft: "1.5px solid #6366F1",
                  borderRight: "1.5px solid #14B8A6",
                  borderTop: "1.5px solid #6366F1",
                  backgroundClip: "padding-box",
                  position: "relative",
                }}
              >
                {/* Gradient border top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-[18px]"
                  style={{ background: "linear-gradient(90deg, #6366F1 0%, #14B8A6 100%)" }}
                />
                <span
                  className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(90deg, #6366F1, #14B8A6)", boxShadow: "0 2px 12px rgba(99,102,241,0.3)" }}
                >
                  ✦ Best Choice
                </span>
                <div className="flex items-center gap-2">
                  {col.icon}
                  <span className="text-sm font-extrabold" style={{ color: "#0F172A" }}>{col.label}</span>
                </div>
                <span className="text-[11px]" style={{ color: "#94A3B8" }}>{col.sub}</span>
              </div>
            ) : (
              <div
                key={col.id}
                className="flex flex-col items-center gap-1.5 pt-5 pb-4 rounded-t-xl"
                style={{
                  background: "rgba(241,245,249,0.8)",
                  border: "1px solid rgba(226,232,240,0.9)",
                  borderBottom: "none",
                }}
              >
                {col.icon}
                <span className="text-sm font-bold" style={{ color: "#64748B" }}>{col.label}</span>
                <span className="text-[11px]" style={{ color: "#94A3B8" }}>{col.sub}</span>
              </div>
            )
          )}

          {/* Data rows */}
          {COMPARISON_ROWS.map((row, i) => {
            const isLast = i === COMPARISON_ROWS.length - 1;
            return (
              <Fragment key={i}>
                {/* Feature label cell */}
                <div
                  className="flex items-center px-2 py-[14px] text-sm font-semibold"
                  style={{ color: "#334155", borderBottom: isLast ? "none" : "1px solid rgba(226,232,240,0.6)" }}
                >
                  {row.feature}
                </div>

                {/* Custom App cell */}
                <div
                  className="flex items-center gap-2.5 px-5 py-[14px] text-sm"
                  style={{
                    background: i % 2 === 0 ? "rgba(241,245,249,0.7)" : "rgba(248,250,252,0.8)",
                    borderLeft: "1px solid rgba(226,232,240,0.9)",
                    borderRight: "1px solid rgba(226,232,240,0.9)",
                    borderBottom: isLast ? "1px solid rgba(226,232,240,0.9)" : "none",
                    borderBottomLeftRadius: isLast ? 12 : 0,
                    color: "#EF4444",
                  }}
                >
                  <IconCross />
                  <span style={{ color: "#64748B" }}>{row.traditional}</span>
                </div>

                {/* Paper Cards cell */}
                <div
                  className="flex items-center gap-2.5 px-5 py-[14px] text-sm"
                  style={{
                    background: i % 2 === 0 ? "rgba(241,245,249,0.7)" : "rgba(248,250,252,0.8)",
                    border: "1px solid rgba(226,232,240,0.9)",
                    borderTop: "none",
                    borderBottom: isLast ? "1px solid rgba(226,232,240,0.9)" : "none",
                    color: "#D97706",
                  }}
                >
                  <IconCross amber />
                  <span style={{ color: "#64748B" }}>{row.paper}</span>
                </div>

                {/* LoyaWin cell - winner */}
                <div
                  className="flex items-center gap-2.5 px-5 py-[14px] text-sm font-semibold"
                  style={{
                    background: i % 2 === 0
                      ? "rgba(99,102,241,0.035)"
                      : "rgba(99,102,241,0.055)",
                    borderLeft: "1.5px solid #6366F1",
                    borderRight: "1.5px solid #14B8A6",
                    borderBottom: isLast ? "1.5px solid #6366F1" : "none",
                    borderBottomLeftRadius: isLast ? 16 : 0,
                    borderBottomRightRadius: isLast ? 16 : 0,
                    color: "#0F172A",
                  }}
                >
                  <IconCheck />
                  <span>{row.loyawin}</span>
                </div>
              </Fragment>
            );
          })}

          {/* CTA footer row */}
          <div />
          {/* Custom App footer */}
          <div
            className="rounded-b-xl py-5 px-5"
            style={{
              background: "rgba(241,245,249,0.7)",
              border: "1px solid rgba(226,232,240,0.9)",
              borderTop: "none",
            }}
          />
          {/* Paper footer */}
          <div
            className="rounded-b-xl py-5 px-5"
            style={{
              background: "rgba(241,245,249,0.7)",
              border: "1px solid rgba(226,232,240,0.9)",
              borderTop: "none",
            }}
          />
          {/* LoyaWin footer - CTA */}
          <div
            className="rounded-b-[18px] px-5 pt-4 pb-6 flex flex-col items-stretch"
            style={{
              background: "linear-gradient(180deg, rgba(99,102,241,0.05) 0%, rgba(99,102,241,0.1) 100%)",
              borderLeft: "1.5px solid #6366F1",
              borderRight: "1.5px solid #14B8A6",
              borderBottom: "1.5px solid #14B8A6",
            }}
          >
            {/* gradient bottom border */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[1.5px]"
              style={{ background: "linear-gradient(90deg, #6366F1 0%, #14B8A6 100%)" }}
            />
            <a
              href="https://brand.loyawin.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-bold py-3.5 rounded-xl no-underline whitespace-nowrap text-white transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)",
                boxShadow: "0 6px 24px rgba(99,102,241,0.35)",
              }}
            >
              Start for €5/mo →
            </a>
          </div>
        </div>

        {/* ── Mobile layout: three stacked cards ── */}
        <div
          className="lg:hidden space-y-4 transition-all duration-700 delay-150"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          {cols.map((col) => {
            const isWinner = col.isWinner;
            return (
              <div
                key={col.id}
                className="rounded-2xl overflow-hidden"
                style={
                  isWinner
                    ? {
                        background: "linear-gradient(160deg, #F0F1FF 0%, #F0FDFC 100%)",
                        boxShadow: "0 0 0 1.5px transparent, 0 12px 40px rgba(99,102,241,0.14)",
                        border: "1.5px solid",
                        borderColor: "transparent",
                        backgroundClip: "padding-box",
                        outline: "1.5px solid",
                        outlineColor: "rgba(99,102,241,0.4)",
                        outlineOffset: "-1.5px",
                      }
                    : {
                        background: "rgba(241,245,249,0.9)",
                        border: "1px solid rgba(226,232,240,0.9)",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                      }
                }
              >
                {/* Card header */}
                <div
                  className="flex items-center justify-between px-5 py-4 border-b"
                  style={{ borderColor: isWinner ? "rgba(99,102,241,0.15)" : "rgba(226,232,240,0.8)" }}
                >
                  <div className="flex items-center gap-2.5">
                    {col.icon}
                    <div>
                      <div className="text-sm font-bold" style={{ color: isWinner ? "#0F172A" : "#64748B" }}>
                        {col.label}
                      </div>
                      <div className="text-[10px]" style={{ color: "#94A3B8" }}>{col.sub}</div>
                    </div>
                  </div>
                  {isWinner && (
                    <span
                      className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ background: "linear-gradient(90deg, #6366F1, #14B8A6)", boxShadow: "0 2px 10px rgba(99,102,241,0.3)" }}
                    >
                      Best Choice
                    </span>
                  )}
                </div>

                {/* Rows */}
                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_1.5fr] gap-3 px-5 py-3.5 border-b last:border-b-0"
                    style={{ borderColor: isWinner ? "rgba(99,102,241,0.08)" : "rgba(226,232,240,0.6)" }}
                  >
                    <span className="text-xs font-semibold leading-snug" style={{ color: "#94A3B8" }}>
                      {row.feature}
                    </span>
                    <div className="flex items-start gap-2">
                      {isWinner ? (
                        <IconCheck />
                      ) : col.id === "custom" ? (
                        <IconCross />
                      ) : (
                        <IconCross amber />
                      )}
                      <span
                        className="text-xs font-medium leading-snug"
                        style={{
                          color: isWinner
                            ? "#1E293B"
                            : col.id === "custom"
                            ? "#64748B"
                            : "#78716C",
                        }}
                      >
                        {col.values[i]}
                      </span>
                    </div>
                  </div>
                ))}

                {isWinner && (
                  <div className="px-5 py-4">
                    <a
                      href="https://brand.loyawin.com/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-sm font-bold py-3.5 rounded-xl no-underline text-white transition-all hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)",
                        boxShadow: "0 6px 24px rgba(99,102,241,0.35)",
                      }}
                    >
                      Start for €5/mo →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── B2B Features ──────────────────────────────────────────────────────────────
const B2B_FEATURES = [
  {
    icon: Monitor,
    title: "Decoupled Setup",
    sub: "Works on any browser-enabled counter device without integrating into your store's POS software. Live in minutes.",
    color: "#574ADB",
    bg: "var(--loyawin-primary-xlight)",
  },
  {
    icon: Banknote,
    title: "Flat-rate €5/mo",
    sub: "Unlimited locations, staff members, and customers. No transaction fees, no tier upgrades, no hidden costs.",
    color: "#059669",
    bg: "rgba(5,150,105,0.1)",
  },
  {
    icon: ShieldCheck,
    title: "Real-time Ledger",
    sub: "Secure online-only transactions with full audit logs, preventing point duplication or staff fraud.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.1)",
  },
  {
    icon: Megaphone,
    title: "Self-serve Marketing",
    sub: "Design vouchers, set birthday triggers, and launch ad campaigns - all from your merchant dashboard.",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.1)",
  },
];

function B2BSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 sm:py-24" style={{ background: "white" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>For Businesses</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
          >
            Why LoyaWin for Businesses?
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>
            Stop losing customers to competitors. Start every visit with a reason to return.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {B2B_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                style={{
                  background: "white",
                  borderColor: "rgba(87,74,219,0.1)",
                  boxShadow: "0 2px 12px rgba(87,74,219,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: f.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>
                    {f.sub}
                  </p>
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
  {
    icon: WalletCards,
    title: "Goodbye Paper Cards",
    sub: "Store all your loyalty stamp cards inside one digital pocket. Never lose a card or miss a stamp again.",
    color: "#574ADB",
    bg: "var(--loyawin-primary-xlight)",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Balance",
    sub: "Check your points balance and transaction history instantly after every visit. No delays, no paperwork needed.",
    color: "#059669",
    bg: "rgba(5,150,105,0.1)",
  },
  {
    icon: Ticket,
    title: "Frictionless Redemptions",
    sub: "Tap to exchange your points for vouchers and redeem them at the counter instantly with a single scan.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.1)",
  },
  {
    icon: MapPin,
    title: "Local Discoveries",
    sub: "Automatically surface partner stores within a 10km radius using GPS. Find new places with active deals nearby.",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.1)",
  },
];

function B2CSection() {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className="py-16 sm:py-24"
      style={{
        background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>For Customers</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
          >
            Why Customers Love LoyaWin
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>
            One app. Every loyalty card. Real rewards that arrive automatically.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {B2C_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                style={{
                  background: "white",
                  borderColor: "rgba(87,74,219,0.1)",
                  boxShadow: "0 2px 12px rgba(87,74,219,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: f.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>
                    {f.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works (Side-by-Side Flow) ─────────────────────────────────────────
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
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>How It Works</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
          >
            Two Paths, One Platform
          </h2>
          <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>
            Whether you run a shop or collect stamps, LoyaWin has a role for you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Brand flow */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: "rgba(87,74,219,0.15)",
              background: "linear-gradient(160deg, var(--loyawin-bg2) 0%, white 100%)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div
              className="px-6 py-4 border-b"
              style={{
                background: "linear-gradient(135deg, var(--loyawin-primary) 0%, var(--loyawin-primary-light) 100%)",
                borderColor: "transparent",
              }}
            >
              <div className="text-sm font-bold text-white/70 tracking-widest uppercase mb-0.5">For Brands</div>
              <div className="text-xl font-extrabold text-white" style={{ fontFamily: "var(--font-head)" }}>
                Launch your loyalty programme
              </div>
            </div>
            <div className="p-6 space-y-0">
              {BRAND_STEPS.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0"
                      style={{ background: "var(--loyawin-primary)", color: "white" }}
                    >
                      {s.num}
                    </div>
                    {i < BRAND_STEPS.length - 1 && (
                      <div className="w-px flex-1 my-1.5" style={{ background: "rgba(87,74,219,0.2)", minHeight: 32 }} />
                    )}
                  </div>
                  <div className={`pb-6 ${i === BRAND_STEPS.length - 1 ? "pb-0" : ""}`}>
                    <div className="font-bold text-base mb-1" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                      {s.title}
                    </div>
                    <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer flow */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: "rgba(87,74,219,0.15)",
              background: "linear-gradient(160deg, #f0fdf4 0%, white 100%)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="px-6 py-4 border-b"
              style={{ background: "linear-gradient(135deg, #059669 0%, #10b981 100%)", borderColor: "transparent" }}
            >
              <div className="text-sm font-bold text-white/70 tracking-widest uppercase mb-0.5">For Customers</div>
              <div className="text-xl font-extrabold text-white" style={{ fontFamily: "var(--font-head)" }}>
                Collect rewards everywhere
              </div>
            </div>
            <div className="p-6 space-y-0">
              {CUSTOMER_STEPS.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0"
                      style={{ background: "#059669", color: "white" }}
                    >
                      {s.num}
                    </div>
                    {i < CUSTOMER_STEPS.length - 1 && (
                      <div className="w-px flex-1 my-1.5" style={{ background: "rgba(5,150,105,0.2)", minHeight: 32 }} />
                    )}
                  </div>
                  <div className={`pb-6 ${i === CUSTOMER_STEPS.length - 1 ? "pb-0" : ""}`}>
                    <div className="font-bold text-base mb-1" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                      {s.title}
                    </div>
                    <p className="text-sm leading-[1.65]" style={{ color: "var(--loyawin-neutral-500)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────────
function PricingSection() {
  const { ref, visible } = useReveal();
  const MERCHANT_FEATURES = [
    "Unlimited store locations",
    "Unlimited staff accounts",
    "Unlimited customer members",
    "Custom earning rules",
    "Voucher designer",
    "Birthday reward automation",
    "Ad campaign tool",
    "Real-time audit ledger",
    "Dashboard analytics",
  ];
  const CUSTOMER_FEATURES = [
    "All loyalty cards in one app",
    "Instant welcome coupon",
    "Automatic birthday rewards",
    "GPS-powered nearby deals",
    "No third-party ads",
    "No hidden fees - ever",
  ];
  return (
    <section
      ref={ref}
      className="py-16 sm:py-24"
      style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <SectionLabel>Pricing</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
          >
            Transparent Pricing. Zero Surprises.
          </h2>
          <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--loyawin-neutral-500)" }}>
            One flat-rate for merchants. Forever free for customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          {/* Merchant Plan */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: "rgba(87,74,219,0.2)",
              boxShadow: "0 16px 60px rgba(87,74,219,0.14)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div
              className="px-6 pt-8 pb-6"
              style={{ background: "linear-gradient(160deg, var(--loyawin-bg3) 0%, white 100%)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--loyawin-primary)" }}>
                Merchant Plan
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
                >
                  €5
                </span>
                <span className="text-lg font-medium mb-2" style={{ color: "var(--loyawin-neutral-500)" }}>
                  / month
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--loyawin-neutral-500)" }}>
                Flat-rate. No transaction fees. No tier upgrades.
              </p>
            </div>
            <div className="px-6 pb-6" style={{ background: "white" }}>
              <ul className="space-y-2.5 my-5">
                {MERCHANT_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--loyawin-neutral-700)" }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "var(--loyawin-primary)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://brand.loyawin.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-white font-semibold py-3.5 rounded-full no-underline transition-all hover:translate-y-[-1px] whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                  boxShadow: "0 6px 20px var(--loyawin-primary-glow)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Start Your Trial
              </a>
            </div>
          </div>

          {/* Customer Plan */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: "rgba(87,74,219,0.1)",
              boxShadow: "0 4px 24px rgba(87,74,219,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="px-6 pt-8 pb-6"
              style={{ background: "linear-gradient(160deg, #f0fdf4 0%, white 100%)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#059669" }}>
                Customer Plan
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
                >
                  Free
                </span>
                <span className="text-lg font-medium mb-2" style={{ color: "var(--loyawin-neutral-500)" }}>
                  forever
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--loyawin-neutral-500)" }}>
                No third-party ads. No hidden fees. Always free.
              </p>
            </div>
            <div className="px-6 pb-6" style={{ background: "white" }}>
              <ul className="space-y-2.5 my-5">
                {CUSTOMER_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--loyawin-neutral-700)" }}>
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#059669" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.loyawin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-semibold py-3.5 rounded-full no-underline transition-all hover:translate-y-[-1px] whitespace-nowrap"
                style={{
                  border: "1.5px solid #059669",
                  color: "#059669",
                  fontFamily: "var(--font-body)",
                  background: "white",
                }}
              >
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
    <section
      id="app-download"
      ref={ref}
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a1830 0%, #2d2860 100%)" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(87,74,219,0.25) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,113,232,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
          >
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Smartphone className="w-3 h-3" /> Customer App
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Claim Your Welcome Rewards Today!
            </h2>
            <p className="text-base text-white/60 leading-[1.7] mb-8">
              Get your digital member card and start collecting points instantly. Scan the QR or tap the
              button below to register in seconds with OTP or Google SSO.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* App Store */}
              <a
                href="https://app.loyawin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl no-underline transition-all hover:scale-[1.02]"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="#000">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-[10px] text-gray-500 leading-tight">Download on the</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">App Store</div>
                </div>
              </a>
              {/* Google Play */}
              <a
                href="https://app.loyawin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl no-underline transition-all hover:scale-[1.02]"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0">
                  <path d="M3.18 23.76a2.01 2.01 0 0 1-1.92-2.08V2.32a2.01 2.01 0 0 1 1.92-2.08l11.52 11.76-11.52 11.76z" fill="#EA4335"/>
                  <path d="M19.8 14.4l-2.76 1.56L14.7 12l2.34-3.96 2.76 1.56A2 2 0 0 1 21 11.4v1.2a2 2 0 0 1-1.2 1.8z" fill="#FBBC05"/>
                  <path d="M3.18.24l11.52 11.76-3.48 3.48L3.18.24z" fill="#4285F4"/>
                  <path d="M3.18 23.76l8.04-15.24 3.48 3.48-11.52 11.76z" fill="#34A853"/>
                </svg>
                <div>
                  <div className="text-[10px] text-gray-500 leading-tight">Get it on</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            {/* Or scan QR */}
            <div className="flex items-center gap-4">
              <div
                className="w-px h-10"
                style={{ background: "rgba(255,255,255,0.15)" }}
              />
              <p className="text-sm text-white/50">
                Or scan the QR code to open the web app instantly - no download required.
              </p>
            </div>
          </div>

          {/* Visuals: App mockup + QR */}
          <div
            className="flex items-center justify-center gap-8 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <AppMockup />
            {/* QR placeholder */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="rounded-2xl p-4 flex flex-col items-center gap-2"
                style={{
                  background: "white",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <QrCode className="w-28 h-28 text-gray-900" />
                <div className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">
                  LoyaWin
                </div>
              </div>
              <p className="text-xs text-white/40 text-center max-w-[120px]">
                Point your camera to join free
              </p>
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
