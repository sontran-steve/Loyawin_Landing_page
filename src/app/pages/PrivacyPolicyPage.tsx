// AI Coding
/**
 * @file PrivacyPolicyPage.tsx
 * @description Trang Chính sách Bảo mật (Privacy Policy) của LoyaWin.
 */
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalHeading3,
  LegalList,
  LegalListItem,
  LegalTable,
  LegalTableHead,
  LegalTableBody,
} from "../components/LegalLayout";

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      label="Legal &amp; Compliance"
      title="Privacy Policy"
      effectiveDate="July 08, 2026"
    >
      <LegalParagraph>
        LoyaWin commits to protecting the privacy and personal data of the Brands, store staff, and customers using our platform. We process personal data in strict compliance with the <strong>EU General Data Protection Regulation (GDPR)</strong> and the <strong>German Federal Data Protection Act (BDSG)</strong>. This Privacy Policy describes how we collect, use, store, and protect information on <code>loyawin.com</code> and its related portals.
      </LegalParagraph>

      <LegalHeading2>1. Information We Collect</LegalHeading2>
      <LegalParagraph>
        To provide our services, we collect the following categories of data:
      </LegalParagraph>

      <LegalHeading3>1.1 Brand Account Information</LegalHeading3>
      <LegalList>
        <LegalListItem>
          <strong>Registration Details:</strong> Business/brand name, address, tax identification number, legal representative name, contact email, phone number.
        </LegalListItem>
        <LegalListItem>
          <strong>Configuration Data:</strong> Logo, self-uploaded advertising assets, list of store branches, lists of staff members.
        </LegalListItem>
        <LegalListItem>
          <strong>Financial Information:</strong> We <strong>do not store</strong> credit card details or bank account numbers directly. All payment transactions are processed securely through our payment partner <strong>Paddle.com</strong> (which complies with the highest international payment security standards).
        </LegalListItem>
      </LegalList>

      <LegalHeading3>1.2 Customer / End-User Information</LegalHeading3>
      <LegalList>
        <LegalListItem>
          <strong>Identification Details:</strong> Phone number or Email address (used for registration, login, and OTP code verification), full name, date of birth, gender (if provided).
        </LegalListItem>
        <LegalListItem>
          <strong>Operational Data:</strong> Points collection/redemption history, transaction purchase invoices (Bill IDs) used to request points, and current points balances at each Brand.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>1.3 Automated Technical Data</LegalHeading3>
      <LegalParagraph>
        The system automatically collects standard technical logs from your device including: IP address, browser type, operating system, device language, access times, referring websites, and user interactions on the interface.
      </LegalParagraph>

      <LegalHeading2>2. Methods of Information Collection</LegalHeading2>
      <LegalTable>
        <LegalTableHead>
          <tr>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Data Source</th>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Collection Method</th>
          </tr>
        </LegalTableHead>
        <LegalTableBody>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Directly from you</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Account registration, system configurations, submitting points requests (Bill IDs), and contacting support.</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Automated from systems</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Cookies and similar tracking technologies used to optimize the user experience.</td>
          </tr>
        </LegalTableBody>
      </LegalTable>

      <LegalHeading2>3. Purpose and Legal Basis of Processing (GDPR Article 6)</LegalHeading2>
      <LegalParagraph>
        In accordance with GDPR Article 6, we process personal data based on the following legal bases:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Performance of Contract (Art. 6(1)(b) GDPR):</strong> Applied to core service operations:
          <ul className="pl-6 mt-2 space-y-1.5 list-disc text-slate-500 text-sm">
            <li><strong>Maintaining Services:</strong> Updating membership points balances instantly at cash registers, and processing points requests.</li>
            <li><strong>Payment Processing:</strong> Syncing transaction records from Paddle to manage and renew plan subscriptions.</li>
            <li><strong>Customer Support:</strong> Resolving complaints, technical issues, or transaction disputes.</li>
          </ul>
        </LegalListItem>
        <LegalListItem>
          <strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> Applied to improvement and security measures:
          <ul className="pl-6 mt-2 space-y-1.5 list-disc text-slate-500 text-sm">
            <li><strong>System Optimization:</strong> Analyzing general usage behavior to improve system features and services.</li>
            <li><strong>Security &amp; Fraud Prevention:</strong> Preventing points fraud and detecting unauthorized access attempts.</li>
          </ul>
        </LegalListItem>
        <LegalListItem>
          <strong>Consent (Art. 6(1)(a) GDPR):</strong> Applied to non-essential cookies for analytical or marketing tracking (only activated after your explicit consent on the cookie consent banner).
        </LegalListItem>
      </LegalList>

      <LegalHeading2>4. Retention Period</LegalHeading2>
      <LegalParagraph>
        Data is only stored for as long as necessary to fulfill the purposes listed above or as required by law (e.g., German/EU tax and accounting regulations require records to be stored for 5 to 10 years). When no longer needed, data is deleted or anonymized securely.
      </LegalParagraph>

      <LegalHeading2>5. Third-Party Sharing</LegalHeading2>
      <LegalParagraph>
        We do not sell or lease your data for advertising purposes without your consent. Data is shared only under the following limited circumstances:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Paddle.com:</strong> Our payment partner processes payments and issues tax-compliant invoices.
        </LegalListItem>
        <LegalListItem>
          <strong>Cloud Infrastructure (AWS, Google Cloud...):</strong> Using secure cloud servers to host our databases.
        </LegalListItem>
        <LegalListItem>
          <strong>Legal Requirements:</strong> When officially requested by competent public authorities or court orders.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>6. Your Rights under GDPR</LegalHeading2>
      <LegalParagraph>
        Under the GDPR, you and your brand's customers (data subjects) possess the following rights:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Right of Access (Art. 15 GDPR):</strong> Request confirmation as to whether your personal data is being processed and obtain a copy of that data.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Rectification (Art. 16 GDPR):</strong> Edit or update inaccurate personal details directly within the brand portal or the membership application.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Erasure - &quot;Right to be Forgotten&quot; (Art. 17 GDPR):</strong> Request permanent deletion of your account and personal data by emailing <strong>support@loyawin.com</strong>. We will process the request within 30 business days (except for data required to be kept under German/EU tax and financial laws).
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Restriction of Processing (Art. 18 GDPR):</strong> Request that we temporarily suspend processing your data in specific scenarios.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Data Portability (Art. 20 GDPR):</strong> Receive your personal data in a structured, electronic format (such as CSV/Excel) to transfer to another service provider.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Object (Art. 21 GDPR):</strong> Object to data processing based on &quot;Legitimate Interests&quot; due to your particular personal situation.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Withdraw Consent (Art. 7(3) GDPR):</strong> Withdraw your consent at any time (e.g., disabling tracking cookies) without affecting the legality of processing prior to withdrawal.
        </LegalListItem>
        <LegalListItem>
          <strong>Right to Lodge a Complaint (Art. 77 GDPR):</strong> Lodge a complaint with a competent Data Protection Supervisory Authority in Germany or the EU country where you reside.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>7. Security Measures</LegalHeading2>
      <LegalList>
        <LegalListItem>
          SSL/TLS (HTTPS) encryption for all data transmitted between your device and our servers.
        </LegalListItem>
        <LegalListItem>
          One-way cryptographic hashing for account passwords.
        </LegalListItem>
        <LegalListItem>
          Continuous network security monitoring and firewalls.
        </LegalListItem>
        <LegalListItem>
          Restricting internal data access to authorized support personnel only.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>8. Changes to Policy</LegalHeading2>
      <LegalParagraph>
        Significant changes to this Privacy Policy will be notified on the homepage or via email at least seven (7) days prior to the effective date.
      </LegalParagraph>

      <LegalHeading2>9. Contact Information</LegalHeading2>
      <LegalParagraph>
        If you have any questions regarding this Privacy Policy, please contact us:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Email:</strong> support@loyawin.com
        </LegalListItem>
        <LegalListItem>
          <strong>Office Address:</strong> support@loyawin.com
        </LegalListItem>
      </LegalList>
    </LegalLayout>
  );
}
