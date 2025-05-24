// app/layout.tsx
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loading from "./loading";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Luxe Managements | The Best Airbnb Property Management in Adelaide",
  description:
    "Comprehensive Airbnb management services designed to maximize your rental income in Adelaide.",
  metadataBase: new URL("https://www.luxemanagements.com"),
  alternates: {
    canonical: "https://www.luxemanagements.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Luxe Managements | Airbnb Property Management Adelaide",
    description:
      "Expert Airbnb property management services in Adelaide – full hosting, cleaning, styling, and guest care.",
    url: "https://www.luxemanagements.com",
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements Airbnb property management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Managements | Airbnb Property Management Adelaide",
    description: "Expert Airbnb management – cleaning, styling & guest care.",
    images: ["https://www.luxemanagements.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// eslint-disable-next-line import/no-unused-modules
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Character set & mobile viewport */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* === Schema.org: Site Navigation === */}
        <Script
          id="ld-navigation"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.luxemanagements.com/",
              name: "Luxe Managements",
              hasPart: [
                {
                  "@type": "SiteNavigationElement",
                  name: "Home",
                  url: "https://www.luxemanagements.com/",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Services",
                  url: "https://www.luxemanagements.com/services",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "About Us",
                  url: "https://www.luxemanagements.com/about",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Testimonials",
                  url: "https://www.luxemanagements.com/testimonials",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contact",
                  url: "https://www.luxemanagements.com/contact",
                },
              ],
            }),
          }}
        />

        {/* === Schema.org: LocalBusiness + BreadcrumbList === */}
        <Script
          id="ld-business-and-breadcrumbs"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Luxe Managements",
                  image: "https://www.luxemanagements.com/logo.png",
                  "@id": "https://www.luxemanagements.com",
                  url: "https://www.luxemanagements.com",
                  telephone: "+61 123 456 789",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Adelaide",
                    addressRegion: "SA",
                    addressCountry: "AU",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.9285,
                    longitude: 138.6007,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "17:00",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/luxemanagements",
                    "https://www.instagram.com/luxemanagements",
                    "https://www.tiktok.com/@luxe_managements",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.luxemanagements.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Services",
                      item: "https://www.luxemanagements.com/services",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Furnishing & Styling",
                      item: "https://www.luxemanagements.com/services/furnishing-and-styling",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Property Management",
                      item: "https://www.luxemanagements.com/services/property-management",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Photography",
                      item: "https://www.luxemanagements.com/services/photography",
                    },
                    {
                      "@type": "ListItem",
                      position: 6,
                      name: "Cleaning & Linen",
                      item: "https://www.luxemanagements.com/services/cleaning-and-linen",
                    },
                    {
                      "@type": "ListItem",
                      position: 7,
                      name: "About",
                      item: "https://www.luxemanagements.com/about",
                    },
                    {
                      "@type": "ListItem",
                      position: 8,
                      name: "Testimonials",
                      item: "https://www.luxemanagements.com/testimonials",
                    },
                    {
                      "@type": "ListItem",
                      position: 9,
                      name: "FAQ",
                      item: "https://www.luxemanagements.com/faq",
                    },
                    {
                      "@type": "ListItem",
                      position: 10,
                      name: "Contact",
                      item: "https://www.luxemanagements.com/contact",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>

      <body>
        {/* Accessibility: Skip‐to‐Content */}

        {/* Performance: load non‐critical analytics after hydration */}
        <Analytics />
        <SpeedInsights />

        <ClientProviderWithFallback>
          <LuxeAiAssistance />

          {/* Semantic & a11y: main landmark */}
          <main id="main-content">{children}</main>
        </ClientProviderWithFallback>
      </body>
    </html>
  );
}
