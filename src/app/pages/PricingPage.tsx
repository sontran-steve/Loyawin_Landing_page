// AI Coding
/**
 * @file PricingPage.tsx
 * @description Trang chi tiết Pricing & Subscriptions của LoyaWin.
 */
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalList,
  LegalListItem,
  LegalAlertImportant,
  LegalAlertNote,
  LegalTable,
  LegalTableHead,
  LegalTableBody,
} from "../components/LegalLayout";

export function PricingPage() {
  return (
    <LegalLayout
      label="Pricing &amp; Plan"
      title="Pricing &amp; Subscriptions"
      effectiveDate="July 08, 2026"
    >
      <LegalParagraph>
        LoyaWin is a comprehensive platform for brands to manage digital membership cards, customer loyalty programs, and digital marketing campaigns — all on a single system. Below are the details of our active plans.
      </LegalParagraph>

      <LegalHeading2>1. 30-Day Free Trial</LegalHeading2>
      <span className="text-slate-500/85 italic text-sm -mt-4 mb-6 block">Experience all features of our Subscription plan before officially paying.</span>
      <LegalList>
        <LegalListItem>
          <strong>Trial Period:</strong> 30 days starting from the date of successful activation.
        </LegalListItem>
        <LegalListItem>
          <strong>Cost:</strong> Free during the trial period (€0.00 EUR).
        </LegalListItem>
        <LegalListItem>
          <strong>Payment Method Requirement:</strong> A credit/debit card or PayPal account must be linked via Paddle upon activation to serve as the basis for automatic renewal after the trial ends.
        </LegalListItem>
        <LegalListItem>
          <strong>Unlocking All Features:</strong> No limit on the number of store branches, staff accounts, loyalty campaigns, rewards, and advertising configurations.
        </LegalListItem>
      </LegalList>

      <LegalAlertImportant>
        Important note on automatic renewal: When the 30-day trial expires, the system will automatically charge €5.00 EUR for the first billing cycle to activate the official subscription. If you do not wish to continue using the service, you can cancel the auto-renewal at any time before the trial period ends to avoid being charged.
      </LegalAlertImportant>

      <LegalHeading2>2. Subscription Plan — €5.00 EUR / month</LegalHeading2>
      <span className="text-slate-500/85 italic text-sm -mt-4 mb-6 block">One simple price, unlimited operational scale.</span>

      <LegalTable>
        <LegalTableHead>
          <tr>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Item</th>
            <th className="px-5 py-3 text-sm font-bold text-slate-700">Entitlements</th>
          </tr>
        </LegalTableHead>
        <LegalTableBody>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Store Branches</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Unlimited</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Staff Accounts</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Unlimited</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Members Joined</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Unlimited</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Loyalty Campaigns &amp; Vouchers</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Full Management</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Reports &amp; Data Export</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Full, supports Excel/CSV export</td>
          </tr>
          <tr>
            <td className="px-5 py-3.5 text-sm font-bold text-slate-800">Cloud Infrastructure &amp; Storage</td>
            <td className="px-5 py-3.5 text-sm text-slate-600">Included in the service fee</td>
          </tr>
        </LegalTableBody>
      </LegalTable>

      <LegalParagraph>
        <strong>Billing Cycle:</strong> Automatically renews every 30 days — no hidden fees.
      </LegalParagraph>

      <LegalHeading2>3. In-App Advertising (Pay-as-you-go)</LegalHeading2>
      <span className="text-slate-500/85 italic text-sm -mt-4 mb-6 block">Control your budget, pay exactly for what you use.</span>
      <LegalParagraph>
        The cost of each campaign is dynamically calculated based on three factors:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>
          <strong>Placement:</strong> Where your ad is displayed in the app.
        </LegalListItem>
        <LegalListItem>
          <strong>Audience Reach:</strong> The total size of your targeted audience.
        </LegalListItem>
        <LegalListItem>
          <strong>Duration:</strong> The active runtime of your campaign.
        </LegalListItem>
      </LegalList>
      <LegalParagraph>
        <em>Flexible budget limits and secure prepayment controls are configured directly inside the merchant dashboard.</em>
      </LegalParagraph>

      <LegalHeading2>4. Payments &amp; Invoices</LegalHeading2>
      <span className="text-slate-500/85 italic text-sm -mt-4 mb-6 block">All transactions — from Subscriptions to Ads — are securely processed through Paddle, the authorized Merchant of Record of LoyaWin.</span>
      <LegalList>
        <LegalListItem>
          <strong>VAT / Consumer Tax:</strong> Listed prices do not include VAT or local consumer taxes; taxes will be clearly calculated and displayed at checkout based on your country and tax identification number.
        </LegalListItem>
        <LegalListItem>
          <strong>Official Invoice:</strong> A tax-compliant PDF invoice will be automatically sent to your registered email address after each successful transaction.
        </LegalListItem>
      </LegalList>

      <LegalAlertNote>
        <strong>Need a custom solution for large franchise chains?</strong><br />
        Please contact our support team at <strong>support@loyawin.com</strong> for a tailored plan.
      </LegalAlertNote>
    </LegalLayout>
  );
}
