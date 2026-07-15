// AI Coding
/**
 * @file FAQ.tsx
 * @description Component Câu hỏi thường gặp (Frequently Asked Questions) tương tác cho LoyaWin.
 */
import { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  id: number;
  audience: 'All' | 'Brand' | 'Customer';
  category: {
    en: string;
    vi: string;
  };
  question: {
    en: string;
    vi: string;
  };
  answer: {
    en: string;
    vi: string;
  };
  listItems?: {
    title: {
      en: string;
      vi: string;
    };
    text: {
      en: string;
      vi: string;
    };
  }[];
}

const faqData: FAQItem[] = [
  {
    id: 1,
    audience: 'All',
    category: {
      en: 'System Introduction',
      vi: 'Giới thiệu hệ thống'
    },
    question: {
      en: 'What is LoyaWin and how does it work?',
      vi: 'LoyaWin là gì và hoạt động như thế nào?'
    },
    answer: {
      en: 'LoyaWin is an intelligent customer loyalty and point accumulation platform designed for businesses (Brands) and end-consumers (Customers). Businesses use LoyaWin to set up their own loyalty programs, manage store staff, and branch outlets; customers use the LoyaWin mobile application to track their accumulated points across different brands and redeem reward vouchers/gifts.',
      vi: 'LoyaWin là nền tảng tích điểm và chăm sóc khách hàng thân thiết thông minh dành cho doanh nghiệp (Brand) và người tiêu dùng (Customer). Doanh nghiệp sử dụng LoyaWin để thiết lập chương trình khách hàng thân thiết, quản lý nhân viên và các chi nhánh; khách hàng sử dụng ứng dụng di động LoyaWin để theo dõi điểm tích lũy của mình tại nhiều thương hiệu khác nhau và đổi các voucher/quà tặng ưu đãi.'
    }
  },
  {
    id: 2,
    audience: 'Brand',
    category: {
      en: 'Subscriptions & Registration',
      vi: 'Gói dịch vụ & Đăng ký'
    },
    question: {
      en: 'Can I try LoyaWin before paying the subscription fee?',
      vi: 'Tôi có thể dùng thử LoyaWin trước khi thanh toán phí đăng ký không?'
    },
    answer: {
      en: 'Yes. Every newly registered Brand is eligible for a 30-Day Free Trial with full platform capabilities (unlimited store branches, staff accounts, and customer signups). Upon signup, you must link a valid payment method via Paddle. If the subscription is not canceled before the end of the 30th day, the trial will automatically transition into a paid monthly subscription, and Paddle will charge €5.00 EUR/month for the subsequent billing cycle.',
      vi: 'Có. Mỗi doanh nghiệp (Brand) đăng ký mới đều được dùng thử miễn phí 30 ngày (30-Day Free Trial) với đầy đủ tính năng của nền tảng (không giới hạn số chi nhánh, tài khoản nhân viên và lượt đăng ký của khách hàng). Khi đăng ký, bạn cần liên kết phương thức thanh toán hợp lệ qua Paddle. Nếu không hủy trước khi kết thúc ngày thứ 30, gói dùng thử sẽ tự động chuyển sang gói đăng ký trả phí hàng tháng, và Paddle sẽ tính phí €5.00 EUR/tháng cho chu kỳ thanh toán tiếp theo.'
    }
  },
  {
    id: 3,
    audience: 'Brand',
    category: {
      en: 'Security & Fraud Prevention',
      vi: 'Bảo mật & Phòng ngừa gian lận'
    },
    question: {
      en: 'How does LoyaWin secure cashier terminals and prevent staff point fraud?',
      vi: 'LoyaWin bảo mật máy tính tiền và phòng ngừa nhân viên gian lận điểm như thế nào?'
    },
    answer: {
      en: 'LoyaWin integrates a multi-layered security mechanism at the cash register:',
      vi: 'LoyaWin tích hợp cơ chế bảo mật đa lớp tại quầy thu ngân:'
    },
    listItems: [
      {
        title: {
          en: 'Device Binding (Hardware Bind)',
          vi: 'Liên kết thiết bị (Device Binding)'
        },
        text: {
          en: 'Cashier terminals (tablets/mobiles) must be registered via an activation code. The system encrypts the browser fingerprint to ensure only authorized devices can issue or redeem points at the store.',
          vi: 'Máy tính tiền của thu ngân (máy tính bảng/điện thoại) phải được đăng ký qua mã kích hoạt. Hệ thống mã hóa vân tay trình duyệt để đảm bảo chỉ các thiết bị được ủy quyền mới có thể cấp hoặc đổi điểm tại cửa hàng.'
        }
      },
      {
        title: {
          en: 'Staff PIN',
          vi: 'Mã PIN của nhân viên (Staff PIN)'
        },
        text: {
          en: 'Each cashier is issued a unique 6-digit PIN code (hashed via bcrypt in the database) to authorize transactions, allowing management to easily audit each staff member\'s history.',
          vi: 'Mỗi nhân viên thu ngân được cấp một mã PIN 6 chữ số duy nhất (được băm mã bcrypt trong cơ sở dữ liệu) để xác thực giao dịch, giúp ban quản lý dễ dàng đối soát lịch sử của từng nhân viên.'
        }
      },
      {
        title: {
          en: 'Automatic Forced Logout',
          vi: 'Tự động đăng xuất bắt buộc'
        },
        text: {
          en: 'If the brand owner updates the unique "Brand Code", the system will immediately trigger a forced logout of all active cashier terminals across all store branches to prevent unauthorized access.',
          vi: 'Nếu chủ sở hữu thương hiệu cập nhật lại "Mã thương hiệu" (Brand Code), hệ thống sẽ ngay lập tức kích hoạt đăng xuất bắt buộc trên tất cả các máy thu ngân đang hoạt động của mọi chi nhánh để ngăn chặn truy cập trái phép.'
        }
      }
    ]
  },
  {
    id: 4,
    audience: 'Customer',
    category: {
      en: 'Accumulating Points',
      vi: 'Tích lũy điểm'
    },
    question: {
      en: 'How do I accumulate points when shopping at participating stores?',
      vi: 'Làm cách nào để tích điểm khi mua sắm tại các cửa hàng liên kết?'
    },
    answer: {
      en: 'You have two flexible ways to earn points:',
      vi: 'Bạn có hai cách linh hoạt để tích lũy điểm:'
    },
    listItems: [
      {
        title: {
          en: 'Direct Point Accumulation',
          vi: 'Tích điểm trực tiếp'
        },
        text: {
          en: 'Open the mobile app and present your personal membership QR code to the cashier to scan during checkout.',
          vi: 'Mở ứng dụng di động và xuất trình mã QR thành viên cá nhân của bạn cho thu ngân quét trong quá trình thanh toán.'
        }
      },
      {
        title: {
          en: 'Point Request',
          vi: 'Yêu cầu tích điểm (Point Request)'
        },
        text: {
          en: 'If you do not scan directly, you can submit a request on the app by entering the receipt number (Bill ID). Store staff will receive a real-time notification via WebSocket to review and approve the point multiplier (1x, 2x, 3x... default is 1x for 1 flat point) for you.',
          vi: 'Nếu không quét trực tiếp, bạn có thể gửi yêu cầu trên ứng dụng bằng cách nhập mã hóa đơn (Bill ID). Nhân viên cửa hàng sẽ nhận được thông báo thời gian thực qua WebSocket để duyệt và áp dụng hệ số nhân điểm (1x, 2x, 3x... mặc định là 1x cho 1 điểm phẳng) cho bạn.'
        }
      }
    ]
  },
  {
    id: 5,
    audience: 'Customer',
    category: {
      en: 'Redeeming Rewards & Point Validity',
      vi: 'Đổi thưởng & Hạn dùng của điểm'
    },
    question: {
      en: 'Do my accumulated points expire and how do I redeem rewards?',
      vi: 'Điểm tích lũy của tôi có bị hết hạn không và đổi thưởng như thế nào?'
    },
    answer: {
      en: 'You can use the accumulated points of each Brand to redeem discount vouchers or gifts directly in the "Offers Market" section of the app.',
      vi: 'Bạn có thể sử dụng điểm tích lũy của từng Thương hiệu để đổi các voucher giảm giá hoặc quà tặng trực tiếp trong phần "Offers Market" trên ứng dụng.'
    },
    listItems: [
      {
        title: {
          en: 'Point Validity',
          vi: 'Thời hạn của điểm'
        },
        text: {
          en: 'The expiration and automatic reset of points depend on the individual configuration of each Brand where you hold a membership card (the brand owner configures the point reset days in the Brand Portal).',
          vi: 'Việc hết hạn và tự động reset điểm phụ thuộc vào cấu hình riêng của từng Thương hiệu nơi bạn sở hữu thẻ thành viên (chủ thương hiệu định cấu hình số ngày reset điểm trong Brand Portal).'
        }
      },
      {
        title: {
          en: 'Points History',
          vi: 'Lịch sử tích điểm'
        },
        text: {
          en: 'The display of points history is dynamically limited to the last 3 years to ensure optimal application performance.',
          vi: 'Lịch sử hiển thị điểm được giới hạn động trong vòng 3 năm gần nhất để đảm bảo hiệu năng tối ưu cho ứng dụng.'
        }
      },
      {
        title: {
          en: 'Notifications',
          vi: 'Thông báo nhắc nhở'
        },
        text: {
          en: 'The system will automatically send you push notifications warning you before your points or wallet gifts expire to ensure you do not miss your rewards.',
          vi: 'Hệ thống sẽ tự động gửi thông báo đẩy (push notifications) để cảnh báo trước khi điểm hoặc quà tặng trong ví của bạn hết hạn, giúp bạn không bỏ lỡ phần thưởng của mình.'
        }
      }
    ]
  },
  {
    id: 6,
    audience: 'Customer',
    category: {
      en: 'Account Deletion & Data Privacy',
      vi: 'Xóa tài khoản & Quyền riêng tư'
    },
    question: {
      en: 'Can I delete my LoyaWin account and is my personal data secure?',
      vi: 'Tôi có thể xóa tài khoản LoyaWin không và dữ liệu cá nhân của tôi có được bảo mật không?'
    },
    answer: {
      en: 'Yes, absolutely. You can request account deletion in the Profile section of the mobile app. LoyaWin strictly complies with EU GDPR data protection regulations. When you request account deletion, the Anonymization Protocol is activated: All personally identifiable information (Name, Email, Phone number) is permanently overwritten in the database with a secure, randomized cryptographic hash (e.g., GDPR_Deleted_9a8f6d...). The store\'s transactional history is preserved for financial auditing but can no longer be traced back to your identity. After anonymization, your email/phone is immediately freed up for a new signup if desired.',
      vi: 'Có, hoàn toàn được. Bạn có thể yêu cầu xóa tài khoản trong phần Hồ sơ của ứng dụng di động. LoyaWin tuân thủ nghiêm ngặt các quy định bảo vệ dữ liệu GDPR của EU. Khi bạn yêu cầu xóa tài khoản, Giao thức ẩn danh (Anonymization Protocol) sẽ được kích hoạt: Toàn bộ thông tin định danh cá nhân (Tên, Email, Số điện thoại) sẽ bị ghi đè vĩnh viễn trong cơ sở dữ liệu bằng một mã băm ngẫu nhiên bảo mật (ví dụ: GDPR_Deleted_9a8f6d...). Lịch sử giao dịch của cửa hàng được giữ lại để phục vụ đối soát tài chính nhưng không còn liên kết với danh tính của bạn. Sau khi ẩn danh, email/số điện thoại của bạn sẽ lập tức được giải phóng để đăng ký tài khoản mới nếu muốn.'
    }
  },
  {
    id: 7,
    audience: 'All',
    category: {
      en: 'Technical Support',
      vi: 'Hỗ trợ kỹ thuật'
    },
    question: {
      en: 'Who should I contact if I experience transaction issues or display errors?',
      vi: 'Tôi nên liên hệ với ai nếu gặp sự cố giao dịch hoặc lỗi hiển thị?'
    },
    answer: {
      en: 'You can submit a support ticket directly through the Contact Support Form in the LoyaWin app or send an email directly to support@loyawin.com. Our support team will analyze the system error logs and respond to you within 3 to 5 business days.',
      vi: 'Bạn có thể gửi yêu cầu hỗ trợ trực tiếp qua Biểu mẫu liên hệ hỗ trợ trong ứng dụng LoyaWin hoặc gửi email trực tiếp tới support@loyawin.com. Đội ngũ hỗ trợ của chúng tôi sẽ phân tích nhật ký lỗi hệ thống và phản hồi bạn trong vòng 3 đến 5 ngày làm việc.'
    }
  }
];

export function FAQ() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const labels = {
    badge: language === 'vi' ? 'Giải đáp thắc mắc' : 'Frequently Asked Questions',
    title: language === 'vi' ? 'Câu hỏi thường gặp' : 'General & Technical FAQs',
    subtitle: language === 'vi' 
      ? 'Tìm câu trả lời nhanh chóng cho các câu hỏi phổ biến về giải pháp khách hàng thân thiết LoyaWin.' 
      : 'Find quick answers to common questions about LoyaWin\'s loyalty platform.',
  };

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-slate-100/80 relative"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* FAQ Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border"
            style={{
              color: 'var(--loyawin-primary)',
              background: 'var(--loyawin-primary-xlight)',
              borderColor: 'rgba(87,74,219,0.2)',
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            {labels.badge}
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] tracking-[-0.02em] mb-4 text-slate-900"
            style={{ fontFamily: 'var(--font-head)', fontWeight: 700 }}
          >
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base leading-[1.6] text-slate-500"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {labels.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[840px] mx-auto space-y-4">
          {faqData.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const qText = language === 'vi' ? faq.question.vi : faq.question.en;
            const aText = language === 'vi' ? faq.answer.vi : faq.answer.en;
            
            return (
              <div 
                key={faq.id}
                className="border rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                style={{
                  borderColor: isExpanded ? 'rgba(87,74,219,0.25)' : '#E5E7EB',
                  boxShadow: isExpanded ? '0 6px 20px rgba(87,74,219,0.04)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-slate-50/50"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 transition-colors duration-200"
                    style={{ 
                      fontFamily: 'var(--font-head)',
                      color: isExpanded ? 'var(--loyawin-primary)' : 'var(--loyawin-neutral-900)'
                    }}
                  >
                    {qText}
                  </h4>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isExpanded ? 'transform rotate-180 text-[var(--loyawin-primary)]' : ''
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                </button>

                {/* Expandable Panel */}
                <div 
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isExpanded ? '1000px' : '0px',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-50 text-sm sm:text-[15px] leading-[1.7] text-slate-600 space-y-4">
                    <p>{aText}</p>
                    
                    {faq.listItems && (
                      <ol className="space-y-3.5 pl-1.5">
                        {faq.listItems.map((item, idx) => {
                          const itemTitle = language === 'vi' ? item.title.vi : item.title.en;
                          const itemText = language === 'vi' ? item.text.vi : item.text.en;
                          return (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-[var(--loyawin-primary)] flex items-center justify-center mt-0.5">
                                {idx + 1}
                              </span>
                              <div className="flex-1">
                                <strong className="text-slate-800 font-semibold">{itemTitle}: </strong>
                                <span className="text-slate-500 font-normal">{itemText}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
