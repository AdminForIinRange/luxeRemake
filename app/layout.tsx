import { Raleway } from 'next/font/google'; // Import the Raleway font from next/font
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

// Load the Raleway font with specific weights (optimized)
const raleway = Raleway({
  subsets: ['latin'], // Only load Latin subset for smaller file size
  weights: ['400', '500', '600', '700'], // Load only necessary font weights
  display: 'swap', // To prevent FOUT (Flash of Unstyled Text)
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <head>
        {/* No need for preconnect or link for Google Fonts anymore */}
      </head>
      <body className={`${raleway.className} antialiased`} style={{ background: "#fff", scrollBehavior: "smooth" }}>
        <Analytics />
        <SpeedInsights />
        <Suspense fallback={<Loading />}>
          <ClientProviderWithFallback>{children}</ClientProviderWithFallback>
        </Suspense>
      </body>
    </html>
  );
}
