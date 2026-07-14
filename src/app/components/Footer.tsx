import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations";
import type { Language } from "../contexts/LanguageContext";

const languages = [
  { code: "en" as Language, flag: "🇬🇧", name: "English" },
  { code: "de" as Language, flag: "🇩🇪", name: "Deutsch" },
  { code: "vi" as Language, flag: "🇻🇳", name: "Tiếng Việt" },
];

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);
  const [langOpen, setLangOpen] = useState(false);
  const currentLang =
    languages.find((l) => l.code === language) || languages[0];

  return (
    <footer
      className="py-12 sm:py-16 md:py-20 pb-8 sm:pb-10 relative overflow-hidden"
      style={{ background: "var(--loyawin-neutral-900)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(87,74,219,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] mb-10 sm:mb-12 md:mb-[60px]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 md:gap-2.5 mb-3 sm:mb-4 inline-flex no-underline"
              style={{ fontFamily: "var(--font-head)" }}
            >
              <svg
                width="969"
                height="240"
                viewBox="0 0 969 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 md:h-8 w-auto"
              >
                <path
                  d="M52.1482 141.333C44.2934 141.333 37.9259 134.966 37.9259 127.111V60.7407H2.26056e-06V141.333C1.01209e-06 162.279 16.98 179.259 37.9259 179.259L75.8519 141.333H52.1482Z"
                  fill="white"
                />
                <path
                  d="M127.998 141.333C120.143 141.333 113.776 134.966 113.776 127.111V60.7407H75.8496V141.333C75.8496 162.279 92.8296 179.259 113.776 179.259L151.701 141.333H127.998Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M189.631 60.7407H151.705V141.333L189.631 103.407V60.7407Z"
                  fill="white"
                />
                <path
                  d="M189.568 148.431L188.88 149.625C183.822 158.411 183.822 169.224 188.88 178.01L189.568 179.203L188.374 178.516C179.588 173.458 168.775 173.458 159.989 178.516L158.796 179.203L159.483 178.01C164.541 169.224 164.541 158.411 159.483 149.625L158.796 148.431L159.989 149.119C168.775 154.177 179.588 154.177 188.374 149.119L189.568 148.431Z"
                  fill="white"
                />
                <path
                  d="M880.584 183.825V133.034C880.584 125.688 882.363 119.03 885.921 113.061C889.479 107.093 894.53 102.329 901.072 98.771C907.73 95.2127 915.592 93.4336 924.66 93.4336C933.843 93.4336 941.648 95.2127 948.076 98.771C954.619 102.329 959.612 107.093 963.055 113.061C966.499 119.03 968.22 125.688 968.22 133.034V183.825H941.533V133.722C941.533 130.623 940.787 127.811 939.295 125.286C937.803 122.646 935.737 120.58 933.097 119.088C930.572 117.481 927.702 116.677 924.488 116.677C921.159 116.677 918.175 117.481 915.535 119.088C913.01 120.58 911.001 122.646 909.509 125.286C908.017 127.811 907.271 130.623 907.271 133.722V183.825H880.584Z"
                  fill="white"
                />
                <path
                  d="M835.607 183.819V95.4939H862.466V183.819H835.607Z"
                  fill="white"
                />
                <path
                  d="M700.463 185.881C690.936 185.881 682.499 183.987 675.153 180.199C667.922 176.296 662.24 170.729 658.108 163.498C653.976 156.267 651.91 147.716 651.91 137.844V63.293H680.319V138.877C680.319 143.01 681.122 146.74 682.729 150.069C684.336 153.397 686.632 156.037 689.616 157.989C692.715 159.94 696.331 160.916 700.463 160.916C704.595 160.916 708.153 159.94 711.138 157.989C714.122 156.037 716.418 153.397 718.025 150.069C719.746 146.74 720.607 143.01 720.607 138.877V63.293H749.016V138.877C749.016 143.01 749.819 146.74 751.426 150.069C753.033 153.397 755.329 156.037 758.313 157.989C761.413 159.94 765.028 160.916 769.16 160.916C773.293 160.916 776.851 159.94 779.835 157.989C782.934 156.037 785.287 153.397 786.894 150.069C788.501 146.74 789.305 143.01 789.305 138.877V63.293H817.713V137.844C817.713 147.716 815.647 156.267 811.515 163.498C807.383 170.729 801.644 176.296 794.298 180.199C787.066 183.987 778.687 185.881 769.16 185.881C764.454 185.881 759.978 185.307 755.731 184.159C751.599 183.126 747.753 181.519 744.195 179.338C740.752 177.157 737.595 174.517 734.726 171.418C731.971 174.517 728.814 177.157 725.256 179.338C721.698 181.404 717.853 183.011 713.72 184.159C709.588 185.307 705.169 185.881 700.463 185.881Z"
                  fill="white"
                />
                <path
                  d="M579.203 185.891C571.398 185.891 564.511 183.882 558.542 179.865C552.574 175.848 547.925 170.453 544.596 163.681C541.268 156.794 539.603 149.046 539.603 140.437C539.603 131.484 541.555 123.507 545.457 116.505C549.36 109.388 554.869 103.764 561.986 99.6319C569.217 95.4997 577.711 93.4336 587.468 93.4336C597.339 93.4336 605.718 95.4997 612.605 99.6319C619.607 103.649 624.944 109.216 628.617 116.333C632.405 123.334 634.299 131.197 634.299 139.921V183.825H608.128V169.707H607.44C605.833 172.806 603.767 175.618 601.242 178.143C598.716 180.554 595.617 182.448 591.944 183.825C588.386 185.202 584.139 185.891 579.203 185.891ZM587.123 162.82C591.141 162.82 594.642 161.844 597.626 159.893C600.725 157.827 603.078 155.014 604.685 151.456C606.292 147.898 607.095 143.938 607.095 139.576C607.095 135.329 606.292 131.484 604.685 128.041C603.078 124.597 600.725 121.9 597.626 119.948C594.642 117.882 591.141 116.849 587.123 116.849C582.991 116.849 579.375 117.882 576.276 119.948C573.177 121.9 570.824 124.597 569.217 128.041C567.61 131.484 566.807 135.329 566.807 139.576C566.807 143.938 567.61 147.898 569.217 151.456C570.824 155.014 573.177 157.827 576.276 159.893C579.375 161.844 582.991 162.82 587.123 162.82Z"
                  fill="white"
                />
                <path
                  d="M375.452 185.891C366.384 185.891 358.235 183.882 351.003 179.865C343.772 175.848 338.033 170.338 333.786 163.336C329.654 156.334 327.588 148.472 327.588 139.748C327.588 130.91 329.654 123.048 333.786 116.161C338.033 109.159 343.772 103.649 351.003 99.6319C358.235 95.4997 366.384 93.4336 375.452 93.4336C384.52 93.4336 392.612 95.4997 399.729 99.6319C406.96 103.649 412.642 109.159 416.774 116.161C421.021 123.048 423.144 130.91 423.144 139.748C423.144 148.472 421.021 156.334 416.774 163.336C412.642 170.338 406.96 175.848 399.729 179.865C392.497 183.882 384.405 185.891 375.452 185.891ZM375.452 162.648C379.699 162.648 383.372 161.614 386.471 159.548C389.57 157.482 391.981 154.728 393.702 151.284C395.424 147.841 396.285 143.938 396.285 139.576C396.285 135.329 395.424 131.484 393.702 128.041C391.981 124.597 389.57 121.842 386.471 119.776C383.372 117.71 379.699 116.677 375.452 116.677C371.205 116.677 367.475 117.71 364.261 119.776C361.162 121.842 358.751 124.597 357.029 128.041C355.308 131.484 354.447 135.329 354.447 139.576C354.447 143.938 355.308 147.841 357.029 151.284C358.751 154.728 361.162 157.482 364.261 159.548C367.475 161.614 371.205 162.648 375.452 162.648Z"
                  fill="white"
                />
                <path
                  d="M286.252 183.815C278.791 183.815 272.249 182.15 266.624 178.822C261 175.493 256.638 171.074 253.539 165.564C250.44 160.055 248.89 153.971 248.89 147.314V63.293H277.816V149.38C277.816 152.135 278.791 154.545 280.743 156.611C282.694 158.677 285.104 159.71 287.974 159.71H319.826L303.039 183.815H286.252Z"
                  fill="white"
                />
                <path
                  d="M495.569 226.188C492.497 226.518 485.08 226.712 480.776 225.173C476.471 223.634 472.96 221.216 470.242 217.921C467.637 214.608 466.009 210.853 465.358 206.657C464.443 200.759 464.859 194.828 466.605 188.866C468.465 182.885 471.181 177.179 474.752 171.746C478.305 166.2 482.353 161.217 486.894 156.795C491.548 152.356 496.204 148.672 500.86 145.742L500.361 164.986C495.305 169.835 491.608 175.578 489.269 182.213C486.912 188.735 486.148 194.662 486.975 199.993C487.291 202.034 487.896 203.683 488.787 204.938C489.697 206.307 491.059 206.851 492.874 206.569C495.369 206.182 496.995 205.059 497.752 203.199C498.64 201.435 499.091 199.1 499.104 196.194L498.981 95.2004L525.159 95.2004L525.125 191.557C525.089 198.067 523.997 203.754 521.847 208.618C519.716 213.595 515.107 217.807 511.149 220.745C507.191 223.682 499.505 225.766 495.569 226.188ZM471.753 185.269C462.652 185.752 455.1 183.497 449.098 178.504C443.097 173.511 439.445 166.818 438.143 158.424C437.914 156.95 437.715 155.296 437.547 153.464C437.475 151.5 437.447 149.821 437.462 148.424L437.561 95.1998L464.457 95.2008L464.555 139.679C465.036 148.541 463.084 152.951 471.692 159.766C484.247 166.581 487.475 159.766 490.703 158.69L471.753 185.269Z"
                  fill="white"
                />
                <path
                  d="M870.546 70.7384L869.216 71.0965C859.427 73.7322 851.78 81.3786 849.145 91.1675L848.787 92.4975L848.428 91.1675C845.793 81.3786 838.146 73.7322 828.357 71.0965L827.027 70.7384L828.357 70.3803C838.146 67.7447 845.793 60.0983 848.428 50.3093L848.787 48.9793L849.145 50.3093C851.78 60.0983 859.427 67.7447 869.216 70.3803L870.546 70.7384Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="text-sm text-white/50 leading-[1.7] max-w-[280px] mb-5">
              The plug-and-play loyalty platform for retail &amp; F&amp;B.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "App Store",
                  sub: "Download on the",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 flex-shrink-0"
                      fill="white"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ),
                },
                {
                  label: "Google Play",
                  sub: "Get it on",
                  icon: (
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0,0h40v40H0V0z" />
                      <g>
                        <path
                          d="M19.7,19.2L4.3,35.3c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l17.4-9.9L19.7,19.2z"
                          fill="#EA4335"
                        />
                        <path
                          d="M35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                          fill="#4285F4"
                        />
                        <path
                          d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3L19.8,20z"
                          fill="#34A853"
                        />
                      </g>
                    </svg>
                  ),
                },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href="https://app.loyawin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4.5 py-3 rounded-xl no-underline transition-all hover:bg-white/10 border border-white/15"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  {btn.icon}
                  <div>
                    <div className="text-[10px] text-white/40 leading-tight mb-0.5">
                      {btn.sub}
                    </div>
                    <div className="text-[13px] font-bold text-white/90 leading-tight">
                      {btn.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-sm font-semibold text-white/80 mb-4 sm:mb-[18px] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Support
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                "Help Center / FAQs",
                "Merchant Guidebook",
                "Contact Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[var(--loyawin-primary-light)]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4
              className="text-sm font-semibold text-white/80 mb-4 sm:mb-[18px] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Legal
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <ul className="list-none flex flex-col gap-2.5">
                {[
                  { name: "Pricing", href: "/pricing" },
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Refund Policy", href: "/refund-policy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[var(--loyawin-primary-light)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="list-none flex flex-col gap-2.5">
                {[
                  { name: "Terms of Service", href: "/terms-of-service" },
                  { name: "Cookie Policy", href: "/cookie-policy" },
                  { name: "Legal Notice", href: "/legal-notice" },
                ].map((item) => (
                  <li key={item.name}>
                    {item.href === "#" ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[var(--loyawin-primary-light)]"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[var(--loyawin-primary-light)]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-[13px] text-white/35 text-center sm:text-left">
            © 2026 LoyaWin. All rights reserved. LoyaWin Inc.
          </span>

          {/* Language Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-medium transition-colors hover:border-white/30 hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.name}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {langOpen && (
              <div
                className="absolute bottom-full right-0 mb-2 rounded-xl overflow-hidden min-w-[160px] border"
                style={{
                  background: "rgba(26,24,48,0.98)",
                  borderColor: "rgba(255,255,255,0.12)",
                  boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <ul className="list-none py-1">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium flex items-center gap-2 transition-colors hover:bg-white/10"
                        style={{
                          color:
                            lang.code === language
                              ? "white"
                              : "rgba(255,255,255,0.55)",
                        }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
