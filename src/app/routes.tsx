import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { EcosystemPage } from "./pages/EcosystemPage";
import { ContactPage } from "./pages/ContactPage";
import { GastroHubPage } from "./pages/GastroHubPage";
import { MarketingToolPage } from "./pages/MarketingToolPage";

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
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
