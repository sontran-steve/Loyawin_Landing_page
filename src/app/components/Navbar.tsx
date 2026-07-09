import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Menu, X, ChevronDown, UserCircle, Megaphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations";
import type { Language } from "../contexts/LanguageContext";

const languages = [
  { code: "en" as Language, label: "EN", flag: "🇬🇧", name: "English" },
  { code: "de" as Language, label: "DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "vi" as Language, label: "VI", flag: "🇻🇳", name: "Tiếng Việt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const ecosystemRef = useRef<HTMLLIElement>(null);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
    setEcosystemOpen(false);
  }, [location.pathname]);

  // Close ecosystem dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target as Node)) {
        setEcosystemOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: t.nav.products, path: "/product" },
    { label: t.nav.solution, path: "/ecosystem" },
    { label: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] py-3 md:py-4 backdrop-blur-[40px] transition-all duration-500 border-b ${
          scrolled ? "bg-white/70" : "bg-white/60"
        }`}
        style={{
          borderColor: scrolled ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.3)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)"
            : "0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
          background: scrolled
            ? "linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.65) 100%)"
            : "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.55) 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-2.5 flex-shrink-0 no-underline"
              style={{ color: "var(--loyawin-primary)" }}
            >
              <svg
                width="969"
                height="240"
                viewBox="0 0 969 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-9 w-auto"
              >
                <path d="M52.1482 141.333C44.2934 141.333 37.9259 134.966 37.9259 127.111V60.7407H2.26056e-06V141.333C1.01209e-06 162.279 16.98 179.259 37.9259 179.259L75.8519 141.333H52.1482Z" fill="#574ADB" />
                <path d="M127.998 141.333C120.143 141.333 113.776 134.966 113.776 127.111V60.7407H75.8496V141.333C75.8496 162.279 92.8296 179.259 113.776 179.259L151.701 141.333H127.998Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M189.631 60.7407H151.705V141.333L189.631 103.407V60.7407Z" fill="black" />
                <path d="M189.568 148.431L188.88 149.625C183.822 158.411 183.822 169.224 188.88 178.01L189.568 179.203L188.374 178.516C179.588 173.458 168.775 173.458 159.989 178.516L158.796 179.203L159.483 178.01C164.541 169.224 164.541 158.411 159.483 149.625L158.796 148.431L159.989 149.119C168.775 154.177 179.588 154.177 188.374 149.119L189.568 148.431Z" fill="#574ADB" />
                <path d="M880.583 183.825V133.034C880.583 125.688 882.363 119.03 885.921 113.061C889.479 107.093 894.53 102.329 901.072 98.771C907.73 95.2127 915.592 93.4336 924.66 93.4336C933.843 93.4336 941.648 95.2127 948.076 98.771C954.618 102.329 959.611 107.093 963.055 113.061C966.498 119.03 968.22 125.688 968.22 133.034V183.825H941.533V133.722C941.533 130.623 940.787 127.811 939.295 125.286C937.803 122.646 935.737 120.58 933.097 119.088C930.571 117.481 927.702 116.677 924.488 116.677C921.159 116.677 918.175 117.481 915.535 119.088C913.01 120.58 911.001 122.646 909.509 125.286C908.017 127.811 907.27 130.623 907.27 133.722V183.825H880.583Z" fill="#0A0C11" />
                <path d="M835.607 183.819V95.4939H862.466V183.819H835.607Z" fill="#0A0C11" />
                <path d="M700.463 185.881C690.936 185.881 682.499 183.987 675.153 180.199C667.922 176.296 662.24 170.729 658.108 163.498C653.976 156.267 651.91 147.716 651.91 137.844V63.293H680.318V138.877C680.318 143.01 681.122 146.74 682.729 150.069C684.336 153.397 686.631 156.037 689.616 157.989C692.715 159.94 696.331 160.916 700.463 160.916C704.595 160.916 708.153 159.94 711.137 157.989C714.122 156.037 716.417 153.397 718.024 150.069C719.746 146.74 720.607 143.01 720.607 138.877V63.293H749.016V138.877C749.016 143.01 749.819 146.74 751.426 150.069C753.033 153.397 755.329 156.037 758.313 157.989C761.412 159.94 765.028 160.916 769.16 160.916C773.292 160.916 776.851 159.94 779.835 157.989C782.934 156.037 785.287 153.397 786.894 150.069C788.501 146.74 789.304 143.01 789.304 138.877V63.293H817.713V137.844C817.713 147.716 815.647 156.267 811.515 163.498C807.383 170.729 801.644 176.296 794.297 180.199C787.066 183.987 778.687 185.881 769.16 185.881C764.454 185.881 759.977 185.307 755.731 184.159C751.598 183.126 747.753 181.519 744.195 179.338C740.751 177.157 737.595 174.517 734.725 171.418C731.971 174.517 728.814 177.157 725.256 179.338C721.697 181.404 717.852 183.011 713.72 184.159C709.588 185.307 705.169 185.881 700.463 185.881Z" fill="#0A0C11" />
                <path d="M579.203 185.891C571.398 185.891 564.511 183.882 558.542 179.865C552.573 175.848 547.925 170.453 544.596 163.681C541.267 156.794 539.603 149.046 539.603 140.437C539.603 131.484 541.554 123.507 545.457 116.505C549.36 109.388 554.869 103.764 561.986 99.6319C569.217 95.4997 577.711 93.4336 587.467 93.4336C597.339 93.4336 605.718 95.4997 612.605 99.6319C619.606 103.649 624.944 109.216 628.617 116.333C632.405 123.334 634.299 131.197 634.299 139.921V183.825H608.128V169.707H607.44C605.833 172.806 603.767 175.618 601.241 178.143C598.716 180.554 595.617 182.448 591.944 183.825C588.386 185.202 584.139 185.891 579.203 185.891ZM587.123 162.82C591.14 162.82 594.641 161.844 597.626 159.893C600.725 157.827 603.078 155.014 604.685 151.456C606.292 147.898 607.095 143.938 607.095 139.576C607.095 135.329 606.292 131.484 604.685 128.041C603.078 124.597 600.725 121.9 597.626 119.948C594.641 117.882 591.14 116.849 587.123 116.849C582.991 116.849 579.375 117.882 576.276 119.948C573.177 121.9 570.824 124.597 569.217 128.041C567.61 131.484 566.806 135.329 566.806 139.576C566.806 143.938 567.61 147.898 569.217 151.456C570.824 155.014 573.177 157.827 576.276 159.893C579.375 161.844 582.991 162.82 587.123 162.82Z" fill="#0A0C11" />
                <path d="M375.452 185.891C366.384 185.891 358.234 183.882 351.003 179.865C343.772 175.848 338.033 170.338 333.786 163.336C329.653 156.334 327.587 148.472 327.587 139.748C327.587 130.91 329.653 123.048 333.786 116.161C338.033 109.159 343.772 103.649 351.003 99.6319C358.234 95.4997 366.384 93.4336 375.452 93.4336C384.52 93.4336 392.612 95.4997 399.728 99.6319C406.96 103.649 412.641 109.159 416.773 116.161C421.02 123.048 423.144 130.91 423.144 139.748C423.144 148.472 421.02 156.334 416.773 163.336C412.641 170.338 406.96 175.848 399.728 179.865C392.497 183.882 384.405 185.891 375.452 185.891ZM375.452 162.648C379.699 162.648 383.372 161.614 386.471 159.548C389.57 157.482 391.98 154.728 393.702 151.284C395.424 147.841 396.285 143.938 396.285 139.576C396.285 135.329 395.424 131.484 393.702 128.041C391.98 124.597 389.57 121.842 386.471 119.776C383.372 117.71 379.699 116.677 375.452 116.677C371.205 116.677 367.474 117.71 364.26 119.776C361.161 121.842 358.751 124.597 357.029 128.041C355.307 131.484 354.447 135.329 354.447 139.576C354.447 143.938 355.307 147.841 357.029 151.284C358.751 154.728 361.161 157.482 364.26 159.548C367.474 161.614 371.205 162.648 375.452 162.648Z" fill="#0A0C11" />
                <path d="M286.252 183.815C278.791 183.815 272.248 182.15 266.624 178.822C261 175.493 256.638 171.074 253.539 165.564C250.44 160.055 248.89 153.971 248.89 147.314V63.293H277.815V149.38C277.815 152.135 278.791 154.545 280.742 156.611C282.694 158.677 285.104 159.71 287.974 159.71H319.826L303.039 183.815H286.252Z" fill="#0A0C11" />
                <path d="M495.569 226.188C492.496 226.518 485.08 226.712 480.775 225.173C476.471 223.634 472.96 221.216 470.242 217.921C467.637 214.608 466.009 210.853 465.358 206.657C464.443 200.759 464.859 194.828 466.605 188.866C468.465 182.885 471.181 177.179 474.752 171.746C478.305 166.2 482.352 161.217 486.893 156.795C491.548 152.356 496.203 148.672 500.86 145.742L500.36 164.986C495.305 169.835 491.608 175.578 489.269 182.213C486.912 188.735 486.147 194.662 486.974 199.993C487.291 202.034 487.895 203.683 488.787 204.938C489.696 206.307 491.059 206.851 492.873 206.569C495.369 206.182 496.995 205.059 497.752 203.199C498.64 201.435 499.09 199.1 499.104 196.194L498.981 95.2004L525.159 95.2004L525.124 191.557C525.089 198.067 523.997 203.754 521.847 208.618C519.715 213.595 515.107 217.807 511.149 220.745C507.19 223.682 499.504 225.766 495.569 226.188ZM471.753 185.269C462.651 185.752 455.1 183.497 449.098 178.504C443.096 173.511 439.445 166.818 438.142 158.424C437.914 156.95 437.715 155.296 437.547 153.464C437.475 151.5 437.446 149.821 437.462 148.424L437.561 95.1998L464.457 95.2008L464.555 139.679C465.036 148.541 463.083 152.951 471.692 159.766C484.246 166.582 487.475 159.766 490.703 158.69L471.753 185.269Z" fill="#0A0C11" />
                <path d="M870.545 70.7384L869.215 71.0965C859.426 73.7322 851.78 81.3786 849.144 91.1675L848.786 92.4975L848.428 91.1675C845.793 81.3786 838.146 73.7322 828.357 71.0965L827.027 70.7384L828.357 70.3803C838.146 67.7447 845.793 60.0983 848.428 50.3093L848.786 48.9793L849.144 50.3093C851.78 60.0983 859.426 67.7447 869.215 70.3803L870.545 70.7384Z" fill="#574ADB" />
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 list-none">
              {navLinks.map((link) => {
                if (link.path === "/ecosystem") {
                  return (
                    <li
                      key={link.path}
                      className="relative"
                      ref={ecosystemRef}
                      onMouseEnter={() => setEcosystemOpen(true)}
                      onMouseLeave={() => setEcosystemOpen(false)}
                    >
                      <button
                        className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1 border-none outline-none cursor-pointer bg-transparent"
                        style={{
                          color: isActive(link.path) || ecosystemOpen ? "var(--loyawin-primary)" : "var(--loyawin-neutral-700)",
                          background: isActive(link.path) || ecosystemOpen ? "var(--loyawin-primary-xlight)" : "transparent",
                        }}
                      >
                        {link.label}
                        <ChevronDown
                          className="w-3.5 h-3.5 transition-transform duration-200"
                          style={{ transform: ecosystemOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>

                      {ecosystemOpen && (
                        <div
                          className="absolute top-full left-0 pt-1 w-[300px]"
                        >
                          <div
                            className="rounded-2xl overflow-hidden border"
                            style={{
                              background: "#ffffff",
                              borderColor: "rgba(87,74,219,0.15)",
                              boxShadow: "0 16px 48px rgba(87,74,219,0.14)",
                            }}
                          >
                            <div className="p-2">
                              {/* LoyaWin CRM */}
                              <Link
                                to="/gastrohub"
                                className="flex items-center gap-3 px-3 py-3 rounded-xl no-underline transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)]"
                                onClick={() => setEcosystemOpen(false)}
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{
                                    background: "linear-gradient(135deg, var(--loyawin-primary-xlight), rgba(255,255,255,0.9))",
                                    border: "1px solid rgba(87,74,219,0.2)",
                                  }}
                                >
                                  <UserCircle className="w-4 h-4" style={{ color: "var(--loyawin-primary)" }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-sm font-semibold" style={{ color: "var(--loyawin-neutral-900)" }}>
                                      GastroHub
                                    </span>
                                  </div>
                                  <p className="text-xs leading-[1.5]" style={{ color: "var(--loyawin-neutral-500)" }}>
                                    Smart loyalty points, member tier management &amp; automated CRM.
                                  </p>
                                </div>
                              </Link>

                              <div className="mx-3 my-1 h-px" style={{ background: "rgba(87,74,219,0.08)" }} />

                              {/* Marketing Tool */}
                              <Link
                                to="/marketing-tool"
                                className="flex items-center gap-3 px-3 py-3 rounded-xl no-underline transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)]"
                                onClick={() => setEcosystemOpen(false)}
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{
                                    background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(255,255,255,0.9))",
                                    border: "1px solid rgba(59,130,246,0.2)",
                                  }}
                                >
                                  <Megaphone className="w-4 h-4" style={{ color: "#3B82F6" }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-sm font-semibold" style={{ color: "var(--loyawin-neutral-900)" }}>
                                      Marketing Tool
                                    </span>
                                    <span
                                      className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                                      style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6", letterSpacing: "0.05em" }}
                                    >
                                      AI SUITE
                                    </span>
                                  </div>
                                  <p className="text-xs leading-[1.5]" style={{ color: "var(--loyawin-neutral-500)" }}>
                                    Social Auto Post suite, SEO reach booster &amp; automated marketing.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 no-underline block"
                      style={{
                        color: isActive(link.path) ? "var(--loyawin-primary)" : "var(--loyawin-neutral-700)",
                        background: isActive(link.path) ? "var(--loyawin-primary-xlight)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.color = "var(--loyawin-primary)";
                          e.currentTarget.style.background = "var(--loyawin-primary-xlight)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.path)) {
                          e.currentTarget.style.color = "var(--loyawin-neutral-700)";
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:flex flex-1" />

            {/* Desktop Buttons Group */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => window.alert("Customer portal to be implemented")}
                className="bg-transparent border cursor-pointer px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-[var(--loyawin-primary-xlight)] whitespace-nowrap"
                style={{
                  borderColor: "var(--loyawin-primary)",
                  borderWidth: "1.5px",
                  color: "var(--loyawin-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.nav.startTrial}
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-white border-none cursor-pointer px-4 xl:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:translate-y-[-2px] whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                  boxShadow: "0 4px 16px var(--loyawin-primary-glow)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.nav.login}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[var(--loyawin-primary-xlight)]"
              style={{ color: "var(--loyawin-primary)" }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 backdrop-blur-[40px] border rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,1)",
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <ul className="list-none py-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                       to={link.path}
                       className="w-full text-left px-5 py-3 text-sm font-medium transition-colors no-underline block"
                       style={{
                         color: isActive(link.path)
                           ? "var(--loyawin-primary)"
                           : "var(--loyawin-neutral-700)",
                         background: isActive(link.path)
                           ? "var(--loyawin-primary-xlight)"
                           : "transparent",
                       }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-t" style={{ borderColor: "var(--loyawin-neutral-100)" }}>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full text-white border-none cursor-pointer px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))",
                    boxShadow: "0 4px 16px var(--loyawin-primary-glow)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {t.nav.login}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
