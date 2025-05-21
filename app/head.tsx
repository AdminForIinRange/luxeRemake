export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Primary Meta Description */}
      <meta
        name="description"
        content="Expert Airbnb property management in Adelaide. Luxe Management maximizes your rental income with full-service hosting, cleaning, styling, and guest care."
      />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content="Luxe Management | Airbnb Property Management Adelaide" />
      <meta property="og:description" content="Expert Airbnb property management in Adelaide. Luxe Management maximizes your rental income with full-service hosting, cleaning, styling, and guest care." />
      <meta property="og:url" content="https://www.luxemanagements.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.luxemanagements.com/og-image.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Luxe Management | Airbnb Property Management Adelaide" />
      <meta name="twitter:description" content="Expert Airbnb property management in Adelaide. Luxe Management maximizes your rental income with full-service hosting, cleaning, styling, and guest care." />
      <meta name="twitter:image" content="https://www.luxemanagements.com/og-image.jpg" />
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Luxe Management",
            url: "https://www.luxemanagements.com",
            description:
              "Airbnb property management in Adelaide. Short-term and holiday rental services tailored to maximize your income.",
            logo: "https://www.luxemanagements.com/logo.png",
          }),
        }}
      />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Page Title */}
      <title>Luxe Management | Airbnb Property Management Adelaide</title>
    </>
  );
}
