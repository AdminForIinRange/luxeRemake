import { arial } from "next/font/google"; // Import the arial font from next/font
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

export const metadata = {
  title:
    "Luxe Management - Expert Airbnb Property Management in Adelaide | Short Term Rental Management | Holiday Rental Management | Property Management Services",
  description:
    "We provide comprehensive Airbnb management services, designed to deliver a hassle-free hosting experience and maximize your rental income.",
};

// Lazy-load ClientProvider to optimize performance
const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// Load the arial font with specific weights (optimized)

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        {/* Preload fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=arial:wght@400;500;600;700&display=swap"
          as="style"
        />
      </head>
      <body
        className={` antialiased`}
        style={{ background: "#fff", scrollBehavior: "smooth" }}
      >
        <Analytics />
        <SpeedInsights />
        <Suspense fallback={<Loading />}>
          <ClientProviderWithFallback>
            <LuxeAiAssistance />
            {children}
          </ClientProviderWithFallback>
        </Suspense>
      </body>
    </html>
  );
}
