import type { NextConfig } from "next";
import { GenerateSW } from 'workbox-webpack-plugin'; // Import Workbox for service worker integration

const nextConfig: NextConfig = {
  // TypeScript and ESLint configurations
  typescript: {
    ignoreBuildErrors: true, // Allows build to continue even with TypeScript errors (useful during development)
  },

  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint warnings/errors in production builds
  },

  // Experimental features section
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // Optimizes Chakra UI imports to reduce bundle size
    serverActions: {
      bodySizeLimit: "100MB", // Allows larger payloads in server actions (useful for large file uploads)
    },
  },

  // Image Optimization settings
  images: {
    remotePatterns: [
      {
        protocol: "https",
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
        // Apply cache headers to all assets in the static folder
        source: '/_next/static/(.*)', // Corrected pattern for static assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for 1 year and mark as immutable
          },
        ],
      },
      {
        // Apply cache headers to images
        source: '/images/(.*)', // Corrected pattern for images
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000', // Cache images for 30 days
          },
        ],
      },
    ];
  },

  // Workbox for Service Worker Integration (for offline caching)
  webpack(config) {
    config.plugins.push(
      new GenerateSW({
        clientsClaim: true, // Ensure the service worker takes control immediately
        skipWaiting: true, // Skip the waiting phase and activate the service worker immediately
        runtimeCaching: [
          {
            // Cache JavaScript, CSS, and HTML files using CacheFirst strategy
            urlPattern: /\.(?:js|css|html)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets', // Cache name for static assets
              expiration: {
                maxEntries: 100, // Maximum number of static assets to cache
              },
            },
          },
          {
            // Cache image files using CacheFirst strategy
            urlPattern: /\/images\//,
            handler: 'CacheFirst',
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

  // HTTP/2 and HTTP/3 are automatically supported by platforms like Vercel
  // If you are hosting on custom servers, ensure HTTP/2 and HTTP/3 are enabled for better performance.
};

export default nextConfig;
