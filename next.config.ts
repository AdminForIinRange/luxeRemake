import type { NextConfig } from "next";
import { GenerateSW } from 'workbox-webpack-plugin'; // Import Workbox for service worker integration

const nextConfig: NextConfig = {
  // TypeScript configuration: Ignore build errors in TypeScript files
  typescript: {
    ignoreBuildErrors: true, // Useful during development, but you may want to turn this off in production
  },

  // ESLint configuration: Ignore ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint warnings/errors in production builds (recommended if you don't want to stop the build)
  },

  // Experimental features section
  experimental: {
    // Optimizes package imports for Chakra UI to reduce the final bundle size
    optimizePackageImports: ["@chakra-ui/react"], 
    serverActions: {
      bodySizeLimit: "100MB", // Increase the limit for server actions, allows larger payloads for API calls
    },
  },

  // Image Optimization settings: Configures allowed remote image domains for optimization
  images: {
    remotePatterns: [
      {
        protocol: "https", // Enable images over HTTPS
        hostname: "cdn.pixabay.com", // Allow images from Pixabay CDN
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Allow images from Freepik CDN
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io", // Allow images from Appwrite cloud
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Allow images from Aceternity CDN
      },
      {
        protocol: "https",
        hostname: "aceternity.com", // Another allowed source for images
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow images from Unsplash
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Allow images from Pexels
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow images from Cloudinary
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Allow placeholder images
      },
    ],
  },

  // Custom headers for caching static assets
  async headers() {
    return [
      {
        // Apply cache headers to all static assets in the '_next/static/*' folder
        source: '/_next/static/*', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for 1 year and mark as immutable (won’t change)
          },
        ],
      },
      {
        // Apply cache headers for images
        source: '/images/*', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000', // Cache images for 30 days
          },
        ],
      },
    ];
  },

  // Workbox for Service Worker Integration (for offline caching and better performance on repeat visits)
  webpack(config) {
    config.plugins.push(
      new GenerateSW({
        clientsClaim: true, // Ensure the service worker takes control as soon as possible
        skipWaiting: true, // Skip waiting phase and activate service worker immediately
        runtimeCaching: [
          {
            // Cache JavaScript, CSS, and HTML files using CacheFirst strategy
            urlPattern: /\.(?:js|css|html)$/,
            handler: 'CacheFirst', // Try to fetch from the cache first
            options: {
              cacheName: 'static-assets', // Cache name for static assets
              expiration: {
                maxEntries: 100, // Maximum number of assets to cache
              },
            },
          },
          {
            // Cache image files using CacheFirst strategy
            urlPattern: /\/images\//,
            handler: 'CacheFirst', // Cache images first
            options: {
              cacheName: 'image-cache', // Cache name for image assets
              expiration: {
                maxEntries: 50, // Maximum number of images to cache
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
              },
            },
          },
        ],
      })
    );
    return config;
  },

  // HTTP/2 and HTTP/3 are automatically handled by platforms like Vercel for better performance.
  // Ensure that HTTP/2/3 is enabled on your hosting platform to take advantage of multiplexing, 
  // reducing latency and improving resource loading times.

};

export default nextConfig;
