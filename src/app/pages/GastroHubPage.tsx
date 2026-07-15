// AI Coding
/**
 * @file GastroHubPage.tsx
 * @description Trang giới thiệu hệ điều hành vận hành nhà hàng GastroHub.
 */
import image_gasillus from "@/imports/gasillus.png";
import image_functions1 from "@/imports/functions1.png";
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
                className="reveal reveal-delay-2 text-base sm:text-[17px] leading-[1.7] mb-8 max-w-[500px] mx-auto"
                style={{ color: "var(--loyawin-neutral-500)" }}
              >
                GastroHub replaces 15 disconnected tools with
                one beautiful dashboard - covering menus, HR,
                payroll, reservations, and social marketing for
                the DACH hospitality market.
              </p>

              <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start w-full">
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
              </div>

              <div className="reveal reveal-delay-4 grid grid-cols-3 gap-4 sm:gap-6 md:gap-9 mt-8 sm:mt-12 pt-6 sm:pt-9 border-t border-slate-100 justify-center w-full max-w-[540px] mx-auto">
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

            {/* Right - visual illustration (Desktop Only) */}
            <div className="reveal reveal-delay-2 hidden lg:flex justify-center items-center relative w-full max-w-[740px] lg:max-w-none mx-auto lg:scale-110 transition-all duration-500">
              <img
                src={image_gasillus}
                alt="GastroHub Illustration"
                className="w-full h-auto object-contain block filter drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)]"
                draggable={false}
              />
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

          <img
            src={image_functions1}
            alt="GastroHub Modules"
            className="reveal mx-auto mt-8 w-full max-w-[600px] h-auto drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)] hidden md:block"
          />
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
              className="px-8 py-4 rounded-full text-white cursor-pointer text-base font-semibold inline-flex items-center justify-center gap-2 border-none transition-all duration-300 hover:translate-y-[-2px]"
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