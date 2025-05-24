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
    description:
      'Expert Airbnb property management services in Adelaide.',
    url: 'https://www.luxemanagements.com',
    siteName: 'Luxe Management',
    images: [
      {
        url: 'https://www.luxemanagements.com/og-image.jpg',
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
    description:
      'The Best Airbnb property management services in Adelaide.',
    images: ['https://www.luxemanagements.com/og-image.jpg',],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Luxe Management',
              url: 'https://www.luxemanagements.com',
              description:
                'The Best Airbnb Property Management In Adelaide. Short-term and holiday rental services tailored to maximize your income.',
              logo: 'https://www.luxemanagements.com/logo.png',
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
