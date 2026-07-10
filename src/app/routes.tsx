import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { EcosystemPage } from "./pages/EcosystemPage";
import { ContactPage } from "./pages/ContactPage";
import { GastroHubPage } from "./pages/GastroHubPage";
import { MarketingToolPage } from "./pages/MarketingToolPage";
import { PricingPage } from "./pages/PricingPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { LegalNoticePage } from "./pages/LegalNoticePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: ProductPage },
      { path: "ecosystem", Component: EcosystemPage },
      { path: "contact", Component: ContactPage },
      { path: "gastrohub", Component: GastroHubPage },
      { path: "marketing-tool", Component: MarketingToolPage },
      { path: "pricing", Component: PricingPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "refund-policy", Component: RefundPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
      { path: "legal-notice", Component: LegalNoticePage },
      { path: "cookie-policy", Component: CookiePolicyPage },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
