import {
  Languages,
  Image,
  TrendingUp,
  QrCode,
  ShieldAlert,
  Calendar,
  Clock,
  DollarSign,
  Layers,
  Users,
  UtensilsCrossed,
  Megaphone,
  Search,
  SlidersVertical,
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Activity,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const GASTROHUB_URL = "";

const highlights = [
  {
    icon: Languages,
    color: "var(--loyawin-primary)",
    bg: "var(--loyawin-primary-xlight)",
    border: "rgba(87,74,219,0.2)",
    title: "Smart Menu Suite",
    description:
      "AI-powered menu translation in 40+ languages, allergen scanning, QR codes, and food photography - all from one dashboard.",
    items: [
      "Layout-preserving translation",
      "AI food image generation",
      "Allergen auto-detection",
    ],
  },
  {
    icon: Calendar,
    color: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.2)",
    title: "HR & Operations",
    description:
      "Shift scheduling, attendance tracking, payroll reconciliation - tailored for the restaurant industry's legal requirements.",
    items: [
      "AI-assisted shift planning",
      "Double-ledger payroll exports",
      "Contractual hour compliance",
    ],
  },
  {
    icon: Megaphone,
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.2)",
    title: "Marketing & Reservations",
    description:
      "Commission-free table bookings, social media auto-posting, and local SEO snapshots to grow your restaurant's reach.",
    items: [
      "Commission-free reservations",
      "Social auto-post copilot",
      "Local SEO optimization",
    ],
  },
];

const modules = [
  {
    icon: Languages,
    label: "AI Menu Translation",
    color: "#a78bfa",
  },
  {
    icon: UtensilsCrossed,
    label: "Table Booking Engine",
    color: "var(--loyawin-primary-light)",
  },
  {
    icon: Calendar,
    label: "AI Shift Planner",
    color: "#60a5fa",
  },
  {
    icon: DollarSign,
    label: "Payroll Reconciliation",
    color: "#34d399",
  },
  {
    icon: Megaphone,
    label: "Social Auto-Post",
    color: "var(--loyawin-primary-light)",
  },
  { icon: Activity, label: "SEO Snapshot", color: "#f59e0b" },
];

export function GastroHubPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[112px] pb-16 md:pb-24"
        style={{ background: "var(--loyawin-bg)" }}
      >
        {/* Ambient orbs */}
        <div
          className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #574ADB, #a89ef0)",
            opacity: 0.12,
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #a89ef0, #574ADB)",
            opacity: 0.1,
            filter: "blur(90px)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="reveal inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-5 border"
                style={{
                  color: "var(--loyawin-primary)",
                  background: "var(--loyawin-primary-xlight)",
                  borderColor: "rgba(87,74,219,0.2)"
                }}
              >
                <Sparkles className="w-3 h-3" />
                Part of the LoyaWin Ecosystem
              </div>

              <h1
                className="reveal reveal-delay-1 text-[32px] sm:text-[44px] md:text-[52px] leading-[1.08] tracking-[-0.02em] mb-5"
                style={{
                  fontFamily: "var(--font-head)",
                  fontWeight: 800,
                  color: "var(--loyawin-neutral-900)",
                }}
              >
                The all-in-one OS for{" "}
                <span
                  style={{ color: "var(--loyawin-primary)" }}
                >
                  modern restaurants.
                </span>
              </h1>

              <p
                className="reveal reveal-delay-2 text-base sm:text-[17px] leading-[1.7] mb-8 max-w-[500px]"
                style={{ color: "var(--loyawin-neutral-500)" }}
              >
                GastroHub replaces 15 disconnected tools with
                one beautiful dashboard - covering menus, HR,
                payroll, reservations, and social marketing for
                the DACH hospitality market.
              </p>

              <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  className="px-8 py-4 rounded-full text-white border-none cursor-pointer text-base font-semibold inline-flex items-center justify-center gap-2 transition-all duration-[250ms] hover:translate-y-[-3px]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                    boxShadow:
                      "0 6px 28px var(--loyawin-primary-glow)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Visit GastroHub
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  className="px-7 py-4 rounded-full bg-transparent border-[1.5px] cursor-pointer text-base font-medium inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)]"
                  style={{
                    borderColor: "var(--loyawin-neutral-300)",
                    color: "var(--loyawin-neutral-700)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Explore Features
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="reveal reveal-delay-4 grid grid-cols-3 gap-4 sm:gap-6 md:gap-9 mt-8 sm:mt-12 pt-6 sm:pt-9 ">
                {[
                  { num: "11,212+", label: "Active Venues" },
                  { num: "35%", label: "Operations Saved" },
                  { num: "4.9 ★", label: "Trustpilot Score" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1"
                  >
                    <span
                      className="text-xl sm:text-2xl md:text-[30px] font-bold"
                      style={{
                        fontFamily: "var(--font-head)",
                        color: "var(--loyawin-primary)",
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="text-xs sm:text-[13px]"
                      style={{
                        color: "var(--loyawin-neutral-500)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - dark terminal card */}
            <div className="reveal reveal-delay-2">
              <div
                className="rounded-3xl p-6 overflow-hidden"
                style={{
                  background: "#0f0e1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  className="flex items-center justify-between pb-4 mb-6"
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider ml-1">
                      GastroHub Operational Deck
                    </span>
                  </div>
                  <span className="text-[8px] font-black bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {modules.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-2.5 p-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border:
                          "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                        }}
                      >
                        <m.icon
                          className="w-3.5 h-3.5"
                          style={{ color: m.color }}
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-white/70 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="pt-4 flex items-center justify-between text-[11px] font-bold"
                  style={{
                    borderTop:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="flex items-center gap-1.5 text-white/60">
                    <Activity
                      className="w-3.5 h-3.5"
                      style={{
                        color: "var(--loyawin-primary-light)",
                      }}
                    />
                    14 Integrated Modules
                  </span>
                  <span
                    className="flex items-center gap-1 font-bold opacity-50"
                    style={{
                      color: "var(--loyawin-primary-light)",
                    }}
                  >
                    Open Platform
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Highlights ── */}
      <section
        className="py-12 sm:py-16 md:py-20 relative"
        style={{
          background: "var(--loyawin-bg2)",
          borderTop: "1px solid var(--loyawin-neutral-100)",
          borderBottom: "1px solid var(--loyawin-neutral-100)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-10 sm:mb-14">
            <div
              className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 border"
              style={{
                color: "var(--loyawin-primary)",
                background: "var(--loyawin-primary-xlight)",
                borderColor: "rgba(87,74,219,0.2)",
              }}
            >
              What GastroHub Covers
            </div>
            <h2
              className="reveal text-[26px] sm:text-[34px] md:text-[38px] leading-[1.1] tracking-[-0.02em] mb-4"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                color: "var(--loyawin-neutral-900)",
              }}
            >
              Three systems, one platform
            </h2>
            <p
              className="reveal text-base leading-[1.7] max-w-[540px] mx-auto"
              style={{ color: "var(--loyawin-neutral-500)" }}
            >
              Every tool your restaurant needs - purpose-built
              for the hospitality industry, not retrofitted from
              generic software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`reveal reveal-delay-${i + 1} bg-white border rounded-2xl sm:rounded-3xl p-7 sm:p-8 relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300`}
                style={{
                  borderColor: "rgba(87,74,219,0.1)",
                  boxShadow: "0 4px 24px rgba(87,74,219,0.06)",
                }}
              >
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-300 pointer-events-none"
                  style={{ background: h.color }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-105 transition-transform"
                  style={{
                    background: h.bg,
                    borderColor: h.border,
                  }}
                >
                  <h.icon
                    className="w-5 h-5"
                    style={{ color: h.color }}
                  />
                </div>
                <h3
                  className="text-base font-bold mb-2.5"
                  style={{
                    fontFamily: "var(--font-head)",
                    color: "var(--loyawin-neutral-900)",
                  }}
                >
                  {h.title}
                </h3>
                <p
                  className="text-sm leading-[1.7] mb-5"
                  style={{
                    color: "var(--loyawin-neutral-500)",
                  }}
                >
                  {h.description}
                </p>
                <ul
                  className="space-y-2 pt-4"
                  style={{
                    borderTop:
                      "1px solid var(--loyawin-neutral-100)",
                  }}
                >
                  {h.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{
                        color: "var(--loyawin-neutral-700)",
                      }}
                    >
                      <CircleCheck className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules Grid ── */}
      <section
        className="py-12 sm:py-16 md:py-20 relative"
        style={{ background: "var(--loyawin-bg)" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="mb-10 sm:mb-12">
            <div
              className="reveal inline-block text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-4 border"
              style={{
                color: "var(--loyawin-primary)",
                background: "var(--loyawin-primary-xlight)",
                borderColor: "rgba(87,74,219,0.2)",
              }}
            >
              14 Built-in Modules
            </div>
            <h2
              className="reveal text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] mb-3"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                color: "var(--loyawin-neutral-900)",
              }}
            >
              Everything your restaurant needs, out of the box
            </h2>
            <p
              className="reveal text-sm sm:text-base leading-[1.7] max-w-[560px]"
              style={{ color: "var(--loyawin-neutral-500)" }}
            >
              Each module is purpose-built for hospitality. No
              generic tools, no complicated setup - just open
              and start using.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: Languages,
                category: "Culinary AI",
                title: "AI Menu Translation",
                description:
                  "Preserve layout fonts and column grids while translating menus into 40+ languages instantly.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(87,74,219,0.15)",
                cardBg: "rgba(87,74,219,0.03)",
                flagship: true,
              },
              {
                icon: Image,
                category: "Stable Diff",
                title: "AI Food Images",
                description:
                  "Generate hyper-realistic food and beverage photography matched to your ingredients list.",
                iconColor: "#7C3AED",
                cardBorder: "rgba(124,58,237,0.12)",
                cardBg: "rgba(124,58,237,0.03)",
              },
              {
                icon: TrendingUp,
                category: "FinOps",
                title: "Menu Price Sync",
                description:
                  "Analyze menu profitability and perform instant batch pricing modifications in seconds.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(87,74,219,0.12)",
                cardBg: "rgba(87,74,219,0.02)",
              },
              {
                icon: QrCode,
                category: "Vector Export",
                title: "Smart QR Codes",
                description:
                  "Generate beautiful, brand-customized scan-to-order QR codes with embedded language flags.",
                iconColor: "#7C3AED",
                cardBorder: "rgba(232,121,249,0.15)",
                cardBg: "rgba(232,121,249,0.03)",
              },
              {
                icon: ShieldAlert,
                category: "Compliance",
                title: "Allergen Intelligence",
                description:
                  "Scan recipes automatically to flag dietary warnings, cross-contamination, and vegan options.",
                iconColor: "#DC2626",
                cardBorder: "rgba(220,38,38,0.12)",
                cardBg: "rgba(220,38,38,0.02)",
              },
              {
                icon: Calendar,
                category: "HR Scheduler",
                title: "AI Shift Planner",
                description:
                  "Drag-and-drop worker shifts, set weekly budgets, and automatically compute holiday premiums.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(87,74,219,0.12)",
                cardBg: "rgba(87,74,219,0.02)",
              },
              {
                icon: Clock,
                category: "Liveness",
                title: "Attendance & Check-in",
                description:
                  "Real-time employee clock-in log, location verification, and shift duration calculations.",
                iconColor: "#2563EB",
                cardBorder: "rgba(37,99,235,0.12)",
                cardBg: "rgba(37,99,235,0.02)",
              },
              {
                icon: DollarSign,
                category: "Finance OS",
                title: "Payroll Reconciliation",
                description:
                  "Reconcile hours logged with dual-ledger payroll files and export formats ready for accounting.",
                iconColor: "#059669",
                cardBorder: "rgba(5,150,105,0.12)",
                cardBg: "rgba(5,150,105,0.02)",
              },
              {
                icon: Layers,
                category: "Workplace",
                title: "Leave & Flextime",
                description:
                  "Track sick days, flexible vacation models, and verify contract target hours compliance.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(236,72,153,0.12)",
                cardBg: "rgba(236,72,153,0.02)",
              },
              {
                icon: Users,
                category: "RBAC Admin",
                title: "Staff & Permission Roles",
                description:
                  "Admin panel to configure user accounts, department bounds, and specific access restrictions.",
                iconColor: "#0D9488",
                cardBorder: "rgba(13,148,136,0.12)",
                cardBg: "rgba(13,148,136,0.02)",
              },
              {
                icon: UtensilsCrossed,
                category: "Guest Relations",
                title: "GastroHub Table Booking",
                description:
                  "Commission-free table reservation engine, client database, and beautiful dining layout logger.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(87,74,219,0.15)",
                cardBg: "rgba(87,74,219,0.04)",
              },
              {
                icon: Megaphone,
                category: "Copilot",
                title: "Social Auto-Post",
                description:
                  "Synthesize marketing copy and post menu announcements directly to connected social feeds.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(124,58,237,0.12)",
                cardBg: "rgba(124,58,237,0.02)",
              },
              {
                icon: Search,
                category: "Lighthouse Audit",
                title: "GastroHub SEO Snapshot",
                description:
                  "Run a maps rankings assessment, detect citation irregularities, and boost neighborhood traffic.",
                iconColor: "#374151",
                cardBorder: "rgba(55,65,81,0.12)",
                cardBg: "rgba(55,65,81,0.02)",
              },
              {
                icon: SlidersVertical,
                category: "Campaign Auto",
                title: "GastroHub Campaign Engine",
                description:
                  "Design high-converting SMS coupon campaigns and trigger them automatically before your empty hours.",
                iconColor: "var(--loyawin-primary)",
                cardBorder: "rgba(232,121,249,0.15)",
                cardBg: "rgba(232,121,249,0.02)",
              },
            ].map((mod, i) => (
              <div
                key={mod.title}
                className={`reveal reveal-delay-${(i % 3) + 1} relative border rounded-2xl p-6 flex flex-col justify-between group transition-all duration-200 overflow-hidden`}
                style={{
                  background: mod.cardBg,
                  borderColor: mod.cardBorder,
                  boxShadow: "0 2px 12px rgba(87,74,219,0.05)",
                }}
              >
                {(mod as any).flagship && (
                  <div
                    className="absolute top-0 right-0 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1"
                    style={{
                      background: "var(--loyawin-primary)",
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Flagship
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{
                        border:
                          "1px solid var(--loyawin-neutral-100)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                    >
                      <mod.icon
                        className="w-5 h-5"
                        style={{ color: mod.iconColor }}
                      />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{
                        background:
                          "var(--loyawin-neutral-100)",
                        color: "var(--loyawin-neutral-500)",
                      }}
                    >
                      {mod.category}
                    </span>
                  </div>
                  <h3
                    className="text-[15px] font-bold mb-2 flex items-center gap-1 group-hover:text-[var(--loyawin-primary)] transition-colors"
                    style={{
                      color: "var(--loyawin-neutral-900)",
                      fontFamily: "var(--font-head)",
                    }}
                  >
                    {mod.title}
                    <ChevronRight
                      className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        color: "var(--loyawin-primary)",
                      }}
                    />
                  </h3>
                  <p
                    className="text-xs sm:text-[13px] leading-[1.6]"
                    style={{
                      color: "var(--loyawin-neutral-500)",
                    }}
                  >
                    {mod.description}
                  </p>
                </div>
                <div
                  className="flex items-center justify-between mt-5 pt-4 text-xs font-semibold"
                  style={{
                    borderTop:
                      "1px solid var(--loyawin-neutral-100)",
                  }}
                >
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      color: "var(--loyawin-neutral-500)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available on GastroHub
                  </span>
                  <span
                    className="inline-flex items-center gap-1 group-hover:underline"
                    style={{ color: "var(--loyawin-primary)" }}
                  >
                    Try it{" "}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── External CTA ── */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: "var(--loyawin-neutral-900)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "var(--loyawin-primary)",
            opacity: 0.08,
            filter: "blur(120px)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <div
            className="reveal inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-6 border"
            style={{
              color: "var(--loyawin-primary-light)",
              background: "rgba(87,74,219,0.15)",
              borderColor: "rgba(87,74,219,0.3)",
            }}
          >
            <ArrowUpRight className="w-3 h-3" />
            Standalone Platform
          </div>
          <h2
            className="reveal text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] tracking-[-0.02em] mb-4 text-white"
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 700,
            }}
          >
            GastroHub runs on its own dedicated platform
          </h2>
          <p
            className="reveal reveal-delay-1 text-sm sm:text-base leading-[1.7] mb-8 max-w-[500px] mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            GastroHub is a standalone product - click below to
            visit the full platform, sign up, and start managing
            your restaurant operations from day one.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-9 py-4 rounded-full text-white cursor-pointer text-base font-semibold inline-flex items-center justify-center gap-2 border-none transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                boxShadow:
                  "0 6px 24px var(--loyawin-primary-glow)",
                fontFamily: "var(--font-body)",
              }}
            >
              Go to GastroHub
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              className="px-8 py-4 rounded-full border cursor-pointer text-base font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white/15"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "var(--font-body)",
              }}
            >
              Request a Demo
            </button>
          </div>
          <p
            className="mt-6 text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            gastrohub.app - Independent product, same ecosystem
          </p>
        </div>
      </section>
    </div>
  );
}