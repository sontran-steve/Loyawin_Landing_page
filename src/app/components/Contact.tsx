import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden"
      id="contact"
      style={{ background: 'var(--loyawin-bg2)' }}
    >
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--loyawin-primary), transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.12] blur-[80px]"
        style={{
          background: 'radial-gradient(circle, var(--loyawin-primary-light), transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <div className="reveal">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 sm:mb-6 border"
              style={{
                color: 'var(--loyawin-primary)',
                background: 'var(--loyawin-primary-xlight)',
                borderColor: 'rgba(87,74,219,0.2)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t.contact.badge}
            </div>
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-5"
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                color: 'var(--loyawin-neutral-900)',
              }}
            >
              {t.contact.title.split('\\n').map((line, idx, arr) => (
                <span key={idx}>
                  {idx === arr.length - 1 ? (
                    <>
                      <span 
                        style={{
                          background: 'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {line}
                      </span>
              
                    </>
                  ) : (
                    <>
                      {line}
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h2>
            <p
              className="text-base sm:text-lg md:text-[19px] leading-[1.6]"
              style={{ 
                color: 'var(--loyawin-neutral-600)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t.contact.subtitle.split('\\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx === 0 && <br className="hidden sm:block" />}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="reveal reveal-delay-1 flex flex-col space-y-5 order-2 lg:order-1">
            <div>
              <h3
                className="text-xl sm:text-2xl md:text-[28px] font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-head)',
                  color: 'var(--loyawin-neutral-900)',
                }}
              >
                {t.contact.leftSection.title}
              </h3>
              <p
                className="text-sm sm:text-[15px] leading-[1.7]"
                style={{ color: 'var(--loyawin-neutral-600)' }}
              >
                {t.contact.leftSection.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {[
                { Icon: Mail,   label: t.contact.leftSection.contactDetails[0].label, value: t.contact.leftSection.contactDetails[0].value, color: '#574ADB' },
                { Icon: Clock,  label: t.contact.leftSection.contactDetails[3].label, value: t.contact.leftSection.contactDetails[3].value, color: '#7C3AED' },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1"
                  style={{
                    background: 'rgba(87,74,219,0.03)',
                    border: '1px solid rgba(87,74,219,0.08)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--loyawin-primary-xlight), rgba(255,255,255,0.9))',
                      border: '1px solid rgba(87,74,219,0.15)',
                    }}
                  >
                    <detail.Icon className="w-4 h-4" style={{ color: detail.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] sm:text-[11px] font-medium" style={{ color: 'var(--loyawin-neutral-500)' }}>
                      {detail.label}
                    </div>
                    <div className="text-[15px] sm:text-sm font-semibold break-words" style={{ color: 'var(--loyawin-neutral-900)' }}>
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className="reveal reveal-delay-2 border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden order-1 lg:order-2"
            style={{
              background: 'white',
              borderColor: 'rgba(87,74,219,0.1)',
              boxShadow: '0 8px 32px rgba(87, 74, 219, 0.06)',
            }}
          >
            <form onSubmit={handleSubmit} className="relative flex flex-col h-full">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  {t.contact.form.fullName} <span style={{ color: 'var(--loyawin-primary)' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder={t.contact.form.placeholders.fullName}
                  required
                  disabled={isSubmitted}
                  className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(87,74,219,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--loyawin-neutral-900)',
                    borderColor: '#E5E7EB',
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 mt-5">
                <label
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  {t.contact.form.email} <span style={{ color: 'var(--loyawin-primary)' }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder={t.contact.form.placeholders.email}
                  required
                  disabled={isSubmitted}
                  className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(87,74,219,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--loyawin-neutral-900)',
                    borderColor: '#E5E7EB',
                  }}
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2 mt-5">
                <label
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  {t.contact.form.subject} <span style={{ color: 'var(--loyawin-primary)' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder={t.contact.form.placeholders.subject}
                  required
                  disabled={isSubmitted}
                  className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(87,74,219,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--loyawin-neutral-900)',
                    borderColor: '#E5E7EB',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 mt-5 flex-1">
                <label
                  className="text-[13px] font-semibold"
                  style={{ color: 'var(--loyawin-neutral-700)' }}
                >
                  {t.contact.form.message} <span style={{ color: 'var(--loyawin-primary)' }}>*</span>
                </label>
                <textarea
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                  disabled={isSubmitted}
                  className="px-4 py-3.5 border rounded-xl bg-white outline-none resize-none flex-1 min-h-[160px] transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(87,74,219,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--loyawin-neutral-900)',
                    borderColor: '#E5E7EB',
                  }}
                />
              </div>

              {isSubmitted ? (
                <div
                  className="w-full py-4 rounded-xl text-white border-none text-base font-semibold mt-6 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  {t.contact.form.successMessage}
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white border-none cursor-pointer text-base font-semibold transition-all duration-300 mt-6 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(87,74,219,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))',
                    boxShadow: '0 6px 24px var(--loyawin-primary-glow)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {t.contact.form.submit}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}