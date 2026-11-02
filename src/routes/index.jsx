/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const AhsPage = lazy(() => import("../pages/AhsPage"));
const CypPage = lazy(() => import("../pages/CypPage"));
const ForFamiliesPage = lazy(() => import("../pages/ForFamiliesPage"));
const FaqsPage = lazy(() => import("../pages/FaqsPage"));
const ReferralsPage = lazy(() => import("../pages/ReferralsPage"));
const TestimonialsPage = lazy(() => import("../pages/TestimonialsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const LegalPage = lazy(() => import("../pages/LegalPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const load = (element) => <Suspense fallback={null}>{element}</Suspense>;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: load(<AboutPage />) },
        {
          path: "services",
          children: [
            { index: true, element: load(<ServicesPage />) },
            { path: "adult-homecare", element: load(<AhsPage />) },
            {
              path: "children-and-young-people",
              element: load(<CypPage />),
            },
            {
              path: "cyp",
              element: (
                <Navigate to="/services/children-and-young-people" replace />
              ),
            },
          ],
        },
        { path: "for-families", element: load(<ForFamiliesPage />) },
        { path: "faqs", element: load(<FaqsPage />) },
        { path: "referrals", element: load(<ReferralsPage />) },
        { path: "testimonials", element: load(<TestimonialsPage />) },
        { path: "contact", element: load(<ContactPage />) },
        { path: "privacy", element: load(<LegalPage documentKey="privacy" />) },
        { path: "cookies", element: load(<LegalPage documentKey="cookies" />) },
        { path: "terms", element: load(<LegalPage documentKey="terms" />) },

        // Legacy addresses from the current WordPress site.
        { path: "about-us", element: <Navigate to="/about" replace /> },
        {
          path: "adult-homecare-services",
          element: <Navigate to="/services/adult-homecare" replace />,
        },
        {
          path: "cyp-services",
          element: <Navigate to="/services/children-and-young-people" replace />,
        },
        { path: "contact-us", element: <Navigate to="/contact" replace /> },

        { path: "*", element: load(<NotFoundPage />) },
      ],
    },
  ],
  // The app is served from a subdirectory on GitHub Pages.
  { basename: import.meta.env.BASE_URL.replace(/\/+$/, "") || "/" },
);