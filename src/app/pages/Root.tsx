import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RootContent() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  useScrollReveal([language, pathname]);

  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export function Root() {
  return <RootContent />;
}
