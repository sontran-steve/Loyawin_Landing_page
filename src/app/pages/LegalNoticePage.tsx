// AI Coding
/**
 * @file LegalNoticePage.tsx
 * @description Trang Ấn bản Pháp lý (Legal Notice / Imprint) của LoyaWin.
 */
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalHeading3,
  LegalList,
  LegalListItem,
} from "../components/LegalLayout";

export function LegalNoticePage() {
  return (
    <LegalLayout
      label="Legal &amp; Imprint"
      title="Legal Notice (Imprint)"
      effectiveDate="July 08, 2026"
    >
      <LegalParagraph>
        Information according to § 5 Digital Services Act (DDG):
      </LegalParagraph>

      <LegalHeading2>1. Provider Information</LegalHeading2>
      <LegalList>
        <LegalListItem>
          <strong>Company Name:</strong> LoyaWin Inc.
        </LegalListItem>
        <LegalListItem>
          <strong>Registered Address:</strong> Friedrichstraße 95, 10117 Berlin, Germany
        </LegalListItem>
        <LegalListItem>
          <strong>Managing Director / Represented by:</strong> Son Tran
        </LegalListItem>
        <LegalListItem>
          <strong>E-Mail:</strong> <a href="mailto:support@loyawin.com" className="text-[var(--loyawin-primary)] hover:underline font-semibold">support@loyawin.com</a>
        </LegalListItem>
        <LegalListItem>
          <strong>Website:</strong> <a href="https://www.loyawin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--loyawin-primary)] hover:underline font-semibold">www.loyawin.com</a>
        </LegalListItem>
      </LegalList>

      <LegalHeading2>2. Register &amp; TAX Information</LegalHeading2>
      <LegalList>
        <LegalListItem>
          <strong>Commercial Register Court:</strong> District Court of Charlottenburg (Berlin) <span className="text-amber-600 font-bold ml-2 text-sm">[Pending Commercial Register Certificate / Đang chờ chứng nhận đăng ký kinh doanh]</span>
        </LegalListItem>
        <LegalListItem>
          <strong>Register Number:</strong> HRB 248910 B <span className="text-amber-600 font-bold ml-2 text-sm">[Pending Register Number / Đang chờ cấp số đăng ký doanh nghiệp]</span>
        </LegalListItem>
        <LegalListItem>
          <strong>VAT Identification Number (USt-IdNr.):</strong> DE 358 123 456 <span className="text-amber-600 font-bold ml-2 text-sm">[Pending VAT ID Certificate / Đang chờ chứng nhận mã số thuế VAT]</span>
        </LegalListItem>
      </LegalList>

      <LegalParagraph>
        <em>Note: This imprint applies to all websites operated by LoyaWin, including <code>loyawin.com</code>, the merchant portals, and related sub-applications.</em>
      </LegalParagraph>

      <LegalHeading2>3. Disclaimer</LegalHeading2>
      
      <LegalHeading3>Liability for contents</LegalHeading3>
      <LegalParagraph>
        The contents of our pages were created with greatest care. However, we cannot assume any guarantee for the correctness, completeness and topicality of the contents. According to § 7 para. 1 DDG as a service provider we are responsible for our own contents on these pages in accordance with the general laws. According to §§ 8 to 10 DDG, as a service provider we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this respect is only possible from the moment of knowledge of a concrete legal violation. As soon as we become aware of such infringements, we will remove these contents immediately.
      </LegalParagraph>

      <LegalHeading3>Liability for links</LegalHeading3>
      <LegalParagraph>
        Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the websites is always responsible for the contents of the linked websites. The linked websites were checked for possible legal infringements at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content-related control of the linked websites is not reasonable without concrete evidence of a legal violation. We will remove such links immediately upon becoming aware of any legal violations.
      </LegalParagraph>

      <LegalHeading3>Copyright</LegalHeading3>
      <LegalParagraph>
        The contents and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the prior written consent of the respective author or creator. Downloads and copies of this site are permitted for private, non-commercial use only. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, we kindly ask for an appropriate reference. As soon as we become aware of any legal violations, we will remove such content immediately.
      </LegalParagraph>
    </LegalLayout>
  );
}
