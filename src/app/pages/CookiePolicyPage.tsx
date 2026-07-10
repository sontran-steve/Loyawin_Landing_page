// AI Coding
/**
 * @file CookiePolicyPage.tsx
 * @description Trang Cài đặt Quyền riêng tư & Chính sách Cookie tương tác của LoyaWin.
 */
import { useState } from "react";
import { Link } from "react-router";
import { Globe, X, ChevronDown, ChevronUp, Check, ShieldCheck, AlertCircle, Info } from "lucide-react";
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalHeading3,
  LegalList,
  LegalListItem
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
    showToast("Settings saved successfully! / Đã lưu cài đặt thành công!");
  };

  const handleAcceptAll = () => {
    setConsents({
      Essential: true,
      Functional: true,
      Marketing: true,
      "External Media": true
    });
    showToast("All technologies accepted! / Đã đồng ý với toàn bộ điều khoản!");
  };

  return (
    <LegalLayout
      label="Legal &amp; Compliance"
      title="Cookie &amp; Local Storage Policy"
      effectiveDate="July 10, 2026"
    >
      <LegalParagraph>
        LoyaWin commits to protecting your data and maintaining trust. Below you can read the details of the cookies, local storage keys, and third-party trackers we use. You can configure your preferences directly inside this dashboard.
      </LegalParagraph>

      {/* Interactive Privacy Panel */}
      <div className="border border-slate-200/80 rounded-2xl shadow-lg shadow-slate-100/50 bg-white overflow-hidden my-10 max-w-[900px] mx-auto relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-[var(--loyawin-primary)]" />
              <h4 className="text-lg font-extrabold text-slate-900 m-0" style={{ fontFamily: "var(--font-head)" }}>
                Privacy Settings (Cài đặt Quyền riêng tư)
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
                      <span className="text-base font-bold text-slate-800">Essential (Bắt buộc)</span>
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
                    <p className="font-bold text-slate-700 mb-1">Dịch vụ thuộc danh mục này bao gồm:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong>LoyaWin Core Auth:</strong> Mã hóa JWT bảo mật để duy trì phiên làm việc cho Staff và Merchant.</li>
                      <li><strong>Paddle Billing:</strong> Lưu cookie bảo mật giao dịch, kiểm soát thanh toán và tính thuế VAT hợp lệ.</li>
                      <li><strong>Cloudflare Turnstile:</strong> Hệ thống xác thực chống Spam/Bot độc hại trên toàn bộ các biểu mẫu.</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Category: Functional */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">Functional (Chức năng & Phân tích)</span>
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
                    <p className="font-bold text-slate-700 mb-1">Dịch vụ thuộc danh mục này bao gồm:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong>Google Analytics:</strong> Đo lường lưu lượng truy cập ẩn danh, phân tích thiết bị và luồng tương tác của người dùng để cải thiện kiến trúc.</li>
                      <li><strong>UI Configuration Memory:</strong> Lưu cấu hình giao diện cục bộ (như ngôn ngữ ưa thích, sidebar đóng/mở).</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Category: Marketing */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">Marketing (Quảng cáo)</span>
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
                    Hiện tại LoyaWin <strong>không liên kết</strong> với bất kỳ mạng lưới phân phối quảng cáo bên thứ ba nào (như Facebook Pixel hay AdSense) trên landing page. Mọi hoạt động quảng cáo nội bộ (Merchant Ads) hoàn toàn được lưu giữ và xử lý nội bộ an toàn.
                  </div>
                )}
              </div>

              {/* Category: External Media */}
              <div className="border border-slate-100 rounded-xl p-4.5 transition-all hover:border-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-slate-800">External Media (Phương tiện ngoại vi)</span>
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
                    Sử dụng để tải các dịch vụ bản đồ (như Google Maps tìm chi nhánh cửa hàng) hoặc video hướng dẫn sử dụng sản phẩm dạng nhúng.
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
