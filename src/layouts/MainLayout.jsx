import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileCallBar from "../components/MobileCallBar";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-card"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center text-sm text-ink-muted">
              Loading…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileCallBar />
      <WhatsAppButton />
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}