// app/layout.tsx
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Loading from './loading';
import LuxeAiAssistance from '@/components/luxeComponents/LuxeAiAssistance';

const ClientProviderWithFallback = dynamic(
  () => import('@/components/chakra-snippets/ClientProvider'),
  { loading: () => <Loading /> },
);

export const metadata = {
  title: 'Luxe Management | The Best Airbnb Property Management In Adelaide',
  description:
    'We provide comprehensive Airbnb management services, designed to deliver a hassle-free hosting experience and maximize your rental income.',
  metadataBase: new URL('https://www.luxemanagements.com'),
  openGraph: {
    title: 'Luxe Management | The Best Airbnb Property Management In Adelaide',
    description: 'Expert Airbnb property management services in Adelaide.',
    url: 'https://www.luxemanagements.com',
    siteName: 'Luxe Management',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxe Management',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Management | The Best Airbnb Property Management In Adelaide',
    description: 'The Best Airbnb property management services in Adelaide.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Luxe Management",
              image: "https://www.luxemanagements.com/logo.png",
              "@id": "https://www.luxemanagements.com",
              url: "https://www.luxemanagements.com",
              telephone: "+61 123 456 789",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Adelaide",
                addressRegion: "SA",
                addressCountry: "AU"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.9285,
                longitude: 138.6007
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                opens: "09:00",
                closes: "17:00"
              },
              sameAs: [
                "https://www.facebook.com/luxemanagements",
                "https://www.instagram.com/luxemanagements"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ background: '#fff', scrollBehavior: 'smooth' }}>
        <Analytics />
        <SpeedInsights />
        <ClientProviderWithFallback>
          <LuxeAiAssistance />
          {children}
        </ClientProviderWithFallback>
      </body>
    </html>
  );
}
