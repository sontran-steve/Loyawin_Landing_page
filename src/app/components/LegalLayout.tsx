// AI Coding
/**
 * @file LegalLayout.tsx
 * @description Khung bố cục dùng chung cho các trang pháp lý và chính sách của LoyaWin.
 */
import React from "react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, Info, AlertTriangle } from "lucide-react";

interface LegalLayoutProps {
  label: string;
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalLayout({ label, title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/30 pt-28 pb-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(87,74,219,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[var(--loyawin-primary)] no-underline transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <div className="w-full mb-12 border-b border-slate-100 pb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "var(--loyawin-primary-xlight)", color: "var(--loyawin-primary)", border: "1px solid rgba(87,74,219,0.12)" }}>
            {label}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4" style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.03em" }}>
            {title}
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>Effective Date: {effectiveDate}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="w-full bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-100/50">
          <div className="legal-content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared Content Primitives ──────────────────────────────────────────────
export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base mb-6">{children}</p>;
}

export function LegalHeading2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-12 mb-5 pb-2 border-b border-slate-100 flex items-center gap-2.5" style={{ fontFamily: "var(--font-head)" }}>
      {children}
    </h2>
  );
}

export function LegalHeading3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-8 mb-4">{children}</h3>;
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3.5 my-6 pl-5 list-none text-slate-600 font-normal text-sm sm:text-base">{children}</ul>;
}

export function LegalListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[var(--loyawin-primary)] mt-2.5 flex-shrink-0 opacity-70" />
      <span className="flex-1 leading-relaxed">{children}</span>
    </li>
  );
}

export function LegalCheckListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold border border-emerald-100">✓</div>
      <span className="flex-1 leading-relaxed">{children}</span>
    </li>
  );
}

export function LegalTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-8 border border-slate-200/60 rounded-2xl shadow-sm bg-white">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  );
}

export function LegalTableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-slate-50 border-b border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-500">{children}</thead>;
}

export function LegalTableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-slate-100 text-slate-600 font-normal">{children}</tbody>;
}

// ─── Alerts Callouts ────────────────────────────────────────────────────────
export function LegalAlertImportant({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-amber-200/60 bg-amber-50/20 my-8 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600 shadow-sm">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <div className="flex-1 mt-0.5">
        <div className="text-amber-900 font-bold text-sm sm:text-base mb-1">Important Notice</div>
        <div className="font-normal text-slate-600">{children}</div>
      </div>
    </div>
  );
}

export function LegalAlertNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-indigo-100/60 bg-indigo-50/15 my-8 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
      <div className="w-10 h-10 rounded-xl bg-indigo-50/80 border border-indigo-100/60 flex items-center justify-center flex-shrink-0 text-[var(--loyawin-primary)] shadow-sm">
        <Info className="w-5 h-5" />
      </div>
      <div className="flex-1 mt-0.5">
        <div className="text-indigo-950 font-bold text-sm sm:text-base mb-1">Note</div>
        <div className="font-normal text-slate-600">{children}</div>
      </div>
    </div>
  );
}
