// AI Coding
/**
 * @file RefundPolicyPage.tsx
 * @description Trang Chính sách Hoàn tiền và Hủy gói cước (Refund & Cancellation Policy) của LoyaWin.
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

export function RefundPolicyPage() {
  return (
    <LegalLayout
      label="Billing &amp; Refunds"
      title="Refund &amp; Cancellation Policy"
      effectiveDate="July 08, 2026"
    >
      <LegalParagraph>
        LoyaWin partners with <strong>Paddle.com</strong> as our official payment partner to ensure all transactions are conducted securely and in compliance with international regulations. This policy governs the cancellation terms and refund conditions for our plan subscriptions and advertising services (Ads) on LoyaWin.
      </LegalParagraph>

      <LegalHeading2>1. Cancellation Policy</LegalHeading2>
      <LegalParagraph>
        You may cancel your subscription auto-renewal at any time without any cancellation fees or penalties. The cancellation can be performed directly within the brand portal under the billing management section, which redirects you to Paddle.
      </LegalParagraph>
      <LegalParagraph>
        Upon successful cancellation:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          Your account <strong>will retain full access</strong> to all features of the subscription until the end of the current billing cycle.
        </LegalListItem>
        <LegalListItem>
          The automatic renewal status displayed in LoyaWin will be set to <strong>Inactive</strong>.
        </LegalListItem>
        <LegalListItem>
          When the current billing cycle ends, Paddle will send a subscription termination confirmation &rarr; your account will switch to <strong>Expired</strong> status, temporarily locking the brand portal features and suspending point accumulation/redemption at all connected store branches.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>2. Subscription Refunds</LegalHeading2>
      <LegalParagraph>
        Since LoyaWin offers a <strong>30-day Free Trial</strong> that requires payment method details upfront but allows you to cancel at any time before the trial ends without being charged, the following refund rules apply:
      </LegalParagraph>
      <LegalParagraph>
        <strong>EU 14-Day Right of Withdrawal:</strong> As LoyaWin services are provided exclusively to businesses, brands, and merchants for commercial purposes (B2B transactions), the statutory 14-day right of withdrawal for online consumer purchases without cause under EU/German consumer protection laws (Widerrufsrecht) does not apply. Business clients retain the right to cancel their subscription renewal as outlined in Section 1.
      </LegalParagraph>

      <LegalHeading3>2.1 Non-Refundable Cases</LegalHeading3>
      <LegalList>
        <LegalListItem>
          Canceling the subscription in the middle of a billing cycle (no refunds for the remaining unused days).
        </LegalListItem>
        <LegalListItem>
          The business ceases operations or no longer requires the loyalty system.
        </LegalListItem>
        <LegalListItem>
          Accounts terminated or suspended due to violations of our <em>Terms of Service</em>.
        </LegalListItem>
      </LegalList>

      <LegalHeading3>2.2 Refund Cases Subject to Review</LegalHeading3>
      <LegalParagraph>
        We will review technical logs and consider a refund for the most recent billing cycle under the following conditions:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Prolonged System Outage:</strong> A major server-side failure on LoyaWin's part that renders the loyalty point system completely unusable at your stores for more than 48 consecutive hours, which we are unable to resolve in a timely manner.
        </LegalListItem>
        <LegalListItem>
          <strong>Double Charging:</strong> Your payment method is charged twice or more for the same billing cycle due to a billing system error.
        </LegalListItem>
        <LegalListItem>
          <strong>Charge After Successful Cancellation:</strong> You successfully canceled the subscription and received a confirmation email from Paddle at least 24 hours before the renewal date, but were still charged due to synchronization delay.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>3. Advertising Refunds (Ads)</LegalHeading2>
      <LegalTable>
        <LegalTableHead>
          <tr>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Advertising Case</th>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Refund Policy</th>
          </tr>
        </LegalTableHead>
        <LegalTableBody>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Campaign approved and running/finished</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Non-refundable under any circumstances.</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Campaign rejected during approval</td>
            <td className="px-5 py-3.5 text-sm text-slate-600"><strong>100% refund</strong> via Paddle back to the original payment method.</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Campaign stopped manually mid-run</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">No cash refunds for the unused budget. The remaining balance may be credited as advertising credits for your next campaign.</td>
          </tr>
        </LegalTableBody>
      </LegalTable>

      <LegalHeading2>4. Refund Request Procedure</LegalHeading2>
      <LegalList>
        <LegalListItem>
          <strong>1. Submit Request:</strong> Email your request to <strong>support@loyawin.com</strong> from the email address registered to your Brand account.
        </LegalListItem>
        <LegalListItem>
          <strong>2. Email Content:</strong> Use the subject line: <code>Paddle Refund Request - [Brand Name]</code>. The email must include: the Paddle transaction ID, transaction date, amount, reason for the refund, and any supporting screenshots.
        </LegalListItem>
        <LegalListItem>
          <strong>3. Submission Deadline:</strong> Requests must be sent within <strong>7 business days</strong> from the transaction date.
        </LegalListItem>
        <LegalListItem>
          <strong>4. Processing Time:</strong> Our support team will review the transaction logs and respond within <strong>3–5 business days</strong>.
        </LegalListItem>
        <LegalListItem>
          <strong>5. Fund Return:</strong> Approved refunds will be processed via Paddle back to the original payment method, which typically takes <strong>5–10 business days</strong> depending on your bank.
        </LegalListItem>
      </LegalList>

      <LegalHeading2>5. Contact Information</LegalHeading2>
      <LegalParagraph>
        If you have any questions or complaints regarding this Refund &amp; Cancellation Policy, please contact us:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Email:</strong> support@loyawin.com
        </LegalListItem>
      </LegalList>
    </LegalLayout>
  );
}
