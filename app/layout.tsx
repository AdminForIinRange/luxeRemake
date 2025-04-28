import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Luxe Management",
  description: "We provide comprehensive Airbnb management services, designed to deliver a hassle-free hosting experience...",
};

// Lazy-load ClientProvider to optimize performance
const ClientProviderWithFallback = dynamic(() => import('@/components/chakra-snippets/ClientProvider'), { loading: () => <Loading /> });

export default function RootLayout({ children }) {
  return (
<html lang="en" data-theme="light" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
  <head>
    {/* Preconnect to Google Fonts for faster loading */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    
    {/* Ensure the Raleway font is loaded */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
    />
  </head>
  <body className="font-raleway antialiased" style={{ background: "#fff", scrollBehavior: "smooth" }}>
    <Analytics />
    <SpeedInsights />
    <Suspense fallback={<Loading />}>
      <ClientProviderWithFallback>{children}</ClientProviderWithFallback>
    </Suspense>
  </body>
</html>

  );
}
