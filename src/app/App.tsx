import { RouterProvider } from "react-router";
import { LanguageProvider } from "./contexts/LanguageContext";
import { router } from "./routes.tsx";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
