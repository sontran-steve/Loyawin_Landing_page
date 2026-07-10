// AI Coding
/**
 * @file CookiePolicyPage.tsx
 * @description Trang Chính sách Cookie và Lưu trữ Cục bộ (Cookie & Local Storage Policy) của LoyaWin.
 */
import {
  LegalLayout,
  LegalParagraph,
  LegalHeading2,
  LegalHeading3,
  LegalList,
  LegalListItem,
} from "../components/LegalLayout";

export function CookiePolicyPage() {
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

      <LegalHeading3>4.1 Consent Banner Preferences</LegalHeading3>
      <LegalParagraph>
        When you visit <code>loyawin.com</code> or our portals for the first time, a Cookie Consent Banner will appear. You can:
      </LegalParagraph>
      <LegalList>
        <LegalListItem>Click <strong>&quot;Accept All&quot;</strong> to enable all categories, including analytics.</LegalListItem>
        <LegalListItem>Click <strong>&quot;Reject Non-Essential&quot;</strong> to block all performance and analytical cookies, running only strictly necessary operations.</LegalListItem>
        <LegalListItem>Customize your preferences dynamically at any time.</LegalListItem>
      </LegalList>

      <LegalHeading3>4.2 Browser Settings</LegalHeading3>
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

      <LegalHeading3>4.3 Automatic Clearance on Logout</LegalHeading3>
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
