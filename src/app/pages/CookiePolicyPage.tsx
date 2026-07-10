// AI Coding
/**
 * @file CookiePolicyPage.tsx
 * @description Trang Cài đặt Quyền riêng tư & Chính sách Cookie tương tác của LoyaWin.
 */
import { useState } from "react";
import { Link } from "react-router";
import { Globe, Check, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalHeading3,
  LegalList,
  LegalListItem,
} from "../components/LegalLayout";

interface ServiceItem {
  id: string;
  name: string;
  category: "Essential" | "Functional" | "Marketing" | "External Media";
  description: string;
  company: string;
  dpo: string;
  purposes: string[];
  collectedData: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "cloudflare",
    name: "Cloudflare Turnstile",
    category: "Essential",
    description: "This service is used for secure bot detection and spam prevention on forms.",
    company: "Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States of America",
    dpo: "privacyquestions@cloudflare.com",
    purposes: ["Spam prevention", "Bot Protection", "Security"],
    collectedData: "IP address, request headers, browser fingerprints, HTTP request data."
  },
  {
    id: "paddle",
    name: "Paddle.com Merchant Checkout",
    category: "Essential",
    description: "This service processes subscription payments, billing renewals, and calculates compliant local VAT/taxes.",
    company: "Paddle.com Market Limited, Core 3, Chelsea Harbour, London, SW10 0XE, United Kingdom",
    dpo: "privacy@paddle.com",
    purposes: ["Billing", "Fraud Prevention", "VAT Calculations", "Subscription Processing"],
    collectedData: "Payment metadata, email address, transaction currency, billing country, and VAT number."
  },
  {
    id: "loyawin_auth",
    name: "LoyaWin Core Auth & Session",
    category: "Essential",
    description: "Maintains active merchant and staff portal sessions, and prevents Cross-Site Request Forgery (CSRF) attacks.",
    company: "LoyaWin Inc., Friedrichstraße 95, 10117 Berlin, Germany",
    dpo: "support@loyawin.com",
    purposes: ["Session Management", "Security", "CSRF Protection"],
    collectedData: "Encrypted JSON Web Tokens (JWT), browser local settings, CSRF validation tokens."
  },
  {
    id: "google_analytics",
    name: "Google Analytics",
    category: "Functional",
    description: "This service collects aggregate data to measure website traffic and optimize layout performance.",
    company: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
    dpo: "support-de@google.com",
    purposes: ["Analytics", "Performance tracking", "UX Optimization"],
    collectedData: "Anonymized IP address, page views, click sequences, interaction timestamps, device specifications."
  }
];

export function CookiePolicyPage() {
  const [activeTab, setActiveTab] = useState<"categories" | "services">("categories");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});
  
  // Consent States
  const [consents, setConsents] = useState({
    Essential: true, // Always true
    Functional: false,
    Marketing: false,
    "External Media": false
  });
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleServiceExpand = (id: string) => {
    setExpandedServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConsentToggle = (category: keyof typeof consents) => {
    if (category === "Essential") return; // Cannot toggle essential
    setConsents(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSave = () => {
    showToast("Settings saved successfully!");
  };

  const handleAcceptAll = () => {
    setConsents({
      Essential: true,
      Functional: true,
      Marketing: true,
      "External Media": true
    });
    showToast("All technologies accepted!");
  };

  return (
    <LegalLayout
      label="Legal &amp; Compliance"
      title="Cookie &amp; Local Storage Policy"
      effectiveDate="July 10, 2026"
    >
      <LegalParagraph>
        This Cookie and Local Storage Policy (&quot;Policy&quot;) describes how LoyaWin (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies, local storage, session storage, and similar web tracking technologies (collectively, &quot;Tracking Technologies&quot;) when you access or use our platforms, services, and websites. This includes:
      </LegalParagraph>

      <LegalList>
        <LegalListItem>The LoyaWin Admin Portal</LegalListItem>
        <LegalListItem>The LoyaWin Brand Portal</LegalListItem>
        <LegalListItem>The LoyaWin Staff Web App</LegalListItem>
        <LegalListItem>The LoyaWin Customer Web App</LegalListItem>
        <LegalListItem>Any related mobile applications, APIs, and subdomains.</LegalListItem>
      </LegalList>

      {/* Interactive Privacy Panel */}
      <div className="border border-slate-200/80 rounded-2xl shadow-lg shadow-slate-100/50 bg-white overflow-hidden my-10 max-w-[900px] mx-auto relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-[var(--loyawin-primary)]" />
              <h4 className="text-lg font-extrabold text-slate-900 m-0" style={{ fontFamily: "var(--font-head)" }}>
                Privacy Settings
              </h4>
            </div>
            <p className="text-xs text-slate-500 m-0">
              This tool helps you select and deactivate various tags, trackers, and analytical tools used on LoyaWin.
            </p>
          </div>
          <div className="flex items-center gap-3.5 text-xs font-semibold text-slate-400">
            <Globe className="w-4 h-4" />
            <Link to="/privacy-policy" className="hover:text-[var(--loyawin-primary)] underline">Privacy Policy</Link>
            <Link to="/legal-notice" className="hover:text-[var(--loyawin-primary)] underline">Imprint</Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-white px-2">
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-6 py-3.5 text-sm font-bold border-b-2 transition-all focus:outline-none ${
              activeTab === "categories"
                ? "border-[var(--loyawin-primary)] text-[var(--loyawin-primary)]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-6 py-3.5 text-sm font-bold border-b-2 transition-all focus:outline-none ${
              activeTab === "services"
                ? "border-[var(--loyawin-primary)] text-[var(--loyawin-primary)]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            Services
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 min-h-[300px]">
          {activeTab === "categories" ? (
            <div className="space-y-4">
              {/* Category: Essential */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">Essential</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">Required</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-0">
                      These technologies are required to activate the core security and primary operational functionality of LoyaWin.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Toggle Locked */}
                    <div className="relative inline-flex items-center cursor-not-allowed">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--loyawin-primary)] opacity-60"></div>
                    </div>
                    <button
                      onClick={() => toggleCategory("Essential")}
                      className="p-1 rounded hover:bg-slate-50 text-slate-400 hover:text-slate-700"
                    >
                      {expandedCategories["Essential"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {expandedCategories["Essential"] && (
                  <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-500 leading-relaxed space-y-2 bg-slate-50/50 p-4 rounded-lg">
                    <p className="font-bold text-slate-700 mb-1">Services in this category include:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong>LoyaWin Core Auth:</strong> Secure JWT encryption to maintain authentication states for Staff and Merchant.</li>
                      <li><strong>Paddle Billing:</strong> Cookie protection for transaction flows, checkouts, and valid VAT calculations.</li>
                      <li><strong>Cloudflare Turnstile:</strong> Bot detection and spam protection mechanisms across form submissions.</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Category: Functional */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">Functional &amp; Analytics</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-0">
                      These technologies enable us to analyze website usage to measure and optimize user interface performance.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Toggle Interactive */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consents.Functional}
                        onChange={() => handleConsentToggle("Functional")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--loyawin-primary)]"></div>
                    </label>
                    <button
                      onClick={() => toggleCategory("Functional")}
                      className="p-1 rounded hover:bg-slate-50 text-slate-400 hover:text-slate-700"
                    >
                      {expandedCategories["Functional"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {expandedCategories["Functional"] && (
                  <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-500 leading-relaxed space-y-2 bg-slate-50/50 p-4 rounded-lg">
                    <p className="font-bold text-slate-700 mb-1">Services in this category include:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong>Google Analytics:</strong> Collects anonymous usage trends, device analytics, and paths to optimize page speed and layout.</li>
                      <li><strong>UI Configuration Memory:</strong> Stores local interface states (such as language configurations or sidebar states).</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Category: Marketing */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">Marketing</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-0">
                      These technologies are used by advertisers to serve ads that are relevant to your business interests.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Toggle Interactive */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consents.Marketing}
                        onChange={() => handleConsentToggle("Marketing")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--loyawin-primary)]"></div>
                    </label>
                    <button
                      onClick={() => toggleCategory("Marketing")}
                      className="p-1 rounded hover:bg-slate-50 text-slate-400 hover:text-slate-700"
                    >
                      {expandedCategories["Marketing"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {expandedCategories["Marketing"] && (
                  <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-500 leading-relaxed bg-slate-50/50 p-4 rounded-lg">
                    Currently, LoyaWin <strong>does not use</strong> or integrate third-party marketing trackers (such as Facebook Pixel or Google AdSense) on this landing page.
                  </div>
                )}
              </div>

              {/* Category: External Media */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">External Media</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-0">
                      These technologies are used by us to display external media elements such as maps or embedded product videos.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Toggle Interactive */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consents["External Media"]}
                        onChange={() => handleConsentToggle("External Media")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--loyawin-primary)]"></div>
                    </label>
                    <button
                      onClick={() => toggleCategory("External Media")}
                      className="p-1 rounded hover:bg-slate-50 text-slate-400 hover:text-slate-700"
                    >
                      {expandedCategories["External Media"] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {expandedCategories["External Media"] && (
                  <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-500 leading-relaxed bg-slate-50/50 p-4 rounded-lg">
                    Used to load interactive maps (e.g. Google Maps for locating branches) or product tutorial videos embedded from platforms like YouTube or Vimeo.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {servicesList.map(service => (
                <div key={service.id} className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-base font-bold text-slate-800">{service.name}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase ${
                          service.category === "Essential"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-indigo-50 text-[var(--loyawin-primary)]"
                        }`}>
                          {service.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 m-0">{service.company.split(",")[0]}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Toggle */}
                      {service.category === "Essential" ? (
                        <div className="relative inline-flex items-center cursor-not-allowed">
                          <div className="w-11 h-6 bg-[var(--loyawin-primary)] rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:translate-x-full opacity-60"></div>
                        </div>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consents.Functional}
                            onChange={() => handleConsentToggle("Functional")}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--loyawin-primary)]"></div>
                        </label>
                      )}
                      <button
                        onClick={() => toggleServiceExpand(service.id)}
                        className="p-1 rounded hover:bg-slate-50 text-slate-400 hover:text-slate-700"
                      >
                        {expandedServices[service.id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {expandedServices[service.id] && (
                    <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-600 leading-relaxed space-y-4 bg-slate-50/50 p-4.5 rounded-lg">
                      <div>
                        <div className="font-bold text-slate-800 mb-1">Description of Service</div>
                        <div className="text-slate-500">{service.description}</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 mb-1">Processing Company</div>
                        <div className="text-slate-500">{service.company}</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 mb-1">Data Protection Officer</div>
                        <div className="text-slate-500">{service.dpo}</div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 mb-1.5">Data Purposes</div>
                        <div className="flex flex-wrap gap-2">
                          {service.purposes.map(pur => (
                            <span key={pur} className="px-2.5 py-0.5 rounded border border-slate-200 bg-white text-slate-600 font-medium">
                              {pur}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 mb-1">Data Collected</div>
                        <div className="text-slate-500">{service.collectedData}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-end items-center gap-3">
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
          >
            Save Services
          </button>
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
            style={{ backgroundColor: "var(--loyawin-primary)" }}
          >
            Accept All
          </button>
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div 
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-4.5 py-3 rounded-xl bg-slate-900/95 text-white text-sm shadow-xl z-50"
            style={{ animation: "cookieToastFadeIn 0.25s ease-out forwards" }}
          >
            <style>{`
              @keyframes cookieToastFadeIn {
                from { opacity: 0; transform: translate(-50%, 12px); }
                to { opacity: 1; transform: translate(-50%, 0); }
              }
            `}</style>
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-medium">{toastMessage}</span>
          </div>
        )}
      </div>

      <LegalHeading2>1. What Are Cookies and Local Storage?</LegalHeading2>
      
      <LegalHeading3>1.1 Cookies</LegalHeading3>
      <LegalParagraph>
        Cookies are small text files containing a string of alphanumeric characters that are downloaded to your browser or device when you visit a website. Cookies allow websites to recognize your device, maintain active sessions, remember user preferences, and securely transmit information between pages.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Session Cookies:</strong> Temporary cookies that expire and are automatically deleted when you close your web browser.
        </LegalListItem>
        <LegalListItem>
          <strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified duration or until you manually clear them.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>1.2 Local Storage and Session Storage</LegalHeading3>
      <LegalParagraph>
        Web storage technologies (HTML5 Local Storage and Session Storage) enable websites to store structured data locally in your browser. Unlike cookies:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          Web storage has a significantly larger storage capacity (typically 5MB vs. 4KB for cookies).
        </LegalListItem>
        <LegalListItem>
          The stored data is not automatically sent to the server with every HTTP request, reducing network overhead and improving performance.
        </LegalListItem>
        <LegalListItem>
          Session Storage is cleared when the tab is closed, whereas Local Storage persists across browser sessions.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>2. Legal Basis for Processing Cookie Data (GDPR &amp; ePrivacy Directive)</LegalHeading2>
      <LegalParagraph>
        In accordance with the <strong>EU General Data Protection Regulation (GDPR)</strong> and the <strong>EU ePrivacy Directive (Directive 2002/58/EC)</strong>, we process data via Tracking Technologies based on the following legal grounds:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Strictly Necessary (Legitimate Interests):</strong> For essential cookies required for the security, system integrity, and primary operational functionality of the platform, the legal basis is <strong>Article 6(1)(f) of the GDPR</strong> (processing is necessary for our legitimate interest in providing a secure, stable, and functional SaaS product).
        </LegalListItem>
        <LegalListItem>
          <strong>Consent:</strong> For analytical, performance, and third-party advertising cookies, the legal basis is <strong>Article 6(1)(a) of the GDPR</strong> (consent). These non-essential cookies are disabled by default and will only be activated after your explicit opt-in choice on our Cookie Consent Banner.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>3. Categories of Cookies and Local Storage in Use</LegalHeading2>
      <LegalParagraph>
        LoyaWin utilizes Tracking Technologies classified under the following categories:
      </LegalParagraph>

      <LegalHeading3>3.1 Strictly Necessary (Essential) Cookies &amp; Storage</LegalHeading3>
      <LegalParagraph>
        These technologies are critical for the primary operation and security of the LoyaWin platform. Without these, core services (such as secure login authentication, portal access, and cashier integrations) cannot be provided.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Authentication &amp; Session State:</strong> We use securely signed and encrypted tokens (JWT) stored in secure cookies or local storage. These retain your active session as you navigate across dashboard modules, preventing you from having to log in repeatedly on every subpage.
        </LegalListItem>
        <LegalListItem>
          <strong>Hardware Binding:</strong> On our Staff Web App, we utilize local storage to store a secure, cryptographically signed <code>Device_Token</code> linked to the browser&apos;s fingerprint. This locks the terminal to a specific physical store location for up to 180 days to prevent transactional fraud and track cashier audit trails.
        </LegalListItem>
        <LegalListItem>
          <strong>Security &amp; Anti-Fraud:</strong> We place CSRF (Cross-Site Request Forgery) protection tokens in session storage to verify the legitimacy of API requests and block malicious script attacks.
        </LegalListItem>
        <LegalListItem>
          <strong>Cookie Preference Storage:</strong> We store your choices regarding cookie consent in a dedicated local storage key to ensure the banner is not repeatedly shown to you on subsequent visits.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>3.2 Preference &amp; Functionality Cookies &amp; Storage</LegalHeading3>
      <LegalParagraph>
        These technologies allow our systems to remember choices you make, enhancing personalization and usability.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Persistent Login (&quot;Remember Me&quot;):</strong> If you actively tick the &quot;Remember Me&quot; box during login, a persistent cookie is created on your device. This keeps your Brand or Admin portal session active for up to 7 days.
        </LegalListItem>
        <LegalListItem>
          <strong>UI Layout Configuration:</strong> We use Local Storage to store user preferences such as navigation sidebar states (collapsed/expanded), display themes (dark mode, light mode, or system default), and preferred application language.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>3.3 Analytics &amp; Performance Cookies</LegalHeading3>
      <LegalParagraph>
        These cookies collect aggregate information on how users interact with our platform. The data is anonymized and used exclusively to monitor performance, diagnose latency issues, identify error logs, and optimize the overall system architecture.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Performance Monitoring:</strong> Tracking page load speeds, active API latency, and layout render times.
        </LegalListItem>
        <LegalListItem>
          <strong>Visitor Behavior Analysis:</strong> Utilizing analytics partners (such as Google Analytics) to measure total unique visitors, page view counts, click events, and traffic sources across our portals.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>3.4 Third-Party &amp; Transactional Billing Cookies</LegalHeading3>
      <LegalParagraph>
        Our subscription payment processor and merchant of record (<strong>Paddle.com</strong>) sets necessary cookies on the checkout and billing portals.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Billing Security:</strong> Paddle utilizes cookies to verify checkout security, prevent duplicate charging errors, and validate credit card fraud risk models during registration and plan renewal.
        </LegalListItem>
        <LegalListItem>
          <strong>Customer Support Integration:</strong> If you interact with our integrated helpdesk widget, third-party functional cookies may be stored to maintain active chat sessions and trace support histories.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>4. How You Can Control Cookies and Opt-Out</LegalHeading2>
      <LegalParagraph>
        You have full control over the use of Tracking Technologies on your device. However, please be aware that restricting essential cookies will limit your ability to access secure areas of our platforms.
      </LegalParagraph>

      <LegalHeading3>4.1 Browser Settings</LegalHeading3>
      <LegalParagraph>
        Most web browsers allow you to manage cookies through their settings menu. You can configure your browser to reject all cookies, accept only first-party cookies, or notify you whenever a cookie is set.
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Google Chrome:</strong> Settings <span className="mx-1 text-slate-400">→</span> Privacy and Security <span className="mx-1 text-slate-400">→</span> Cookies and other site data.
        </LegalListItem>
        <LegalListItem>
          <strong>Apple Safari:</strong> Preferences <span className="mx-1 text-slate-400">→</span> Privacy <span className="mx-1 text-slate-400">→</span> Block all cookies.
        </LegalListItem>
        <LegalListItem>
          <strong>Mozilla Firefox:</strong> Options <span className="mx-1 text-slate-400">→</span> Privacy &amp; Security <span className="mx-1 text-slate-400">→</span> Enhanced Tracking Protection.
        </LegalListItem>
        <LegalListItem>
          <strong>Microsoft Edge:</strong> Settings <span className="mx-1 text-slate-400">→</span> Cookies and site permissions <span className="mx-1 text-slate-400">→</span> Manage and delete cookies and site data.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>4.2 Automatic Clearance on Logout</LegalHeading3>
      <LegalParagraph>
        When you actively click the <strong>Logout</strong> button on any of our portals, the system automatically revokes your active JWT tokens on the server, deletes session cookies, and invalidates authentication credentials stored in your browser storage.
      </LegalParagraph>

      <LegalHeading2>5. Updates to This Policy</LegalHeading2>
      <LegalParagraph>
        We reserve the right to modify this Policy at any time to reflect changes in our technology, legal compliance, or operational guidelines. Any modifications will become effective immediately upon posting. We will notify users of major updates by displaying a banner on our portals or sending an email notification to registered Brand administrators.
      </LegalParagraph>

      <LegalHeading2>6. Contact Us</LegalHeading2>
      <LegalParagraph>
        If you have any questions or concerns regarding our use of cookies and tracking technologies, please contact our support team:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Email:</strong> <a href="mailto:support@loyawin.com" className="text-[var(--loyawin-primary)] hover:underline font-semibold">support@loyawin.com</a>
        </LegalListItem>
        <LegalListItem>
          <strong>Official Website:</strong> <a href="https://www.loyawin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--loyawin-primary)] hover:underline font-semibold">www.loyawin.com</a>
        </LegalListItem>
        <LegalListItem>
          <strong>Postal Address:</strong> Friedrichstraße 95, 10117 Berlin, Germany
        </LegalListItem>
      </LegalList>
    </LegalLayout>
  );
}
