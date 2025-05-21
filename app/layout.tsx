import dynamic from "next/dynamic";
import { Suspense, ReactNode } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

// Lazy-load ClientProvider
const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// Export metadata for SEO
export const metadata = {
  title:
    "Luxe Management - Expert Airbnb Property Management in Adelaide | Short Term Rental Management | Holiday Rental Management | Property Management Services",
  description:
    "We provide comprehensive Airbnb management services, designed to deliver a hassle-free hosting experience and maximize your rental income.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className="antialiased" style={{ background: "#fff", scrollBehavior: "smooth" }}>
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
