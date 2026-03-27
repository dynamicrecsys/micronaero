import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "micronaero.com",
        pathname: "/cdn/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/collections/all",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/pages/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pages/become-a-dealer",
        destination: "/become-a-dealer",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
      {
        source: "/pages/privacy-policy",
        destination: "/policies/privacy-policy",
        permanent: true,
      },
      {
        source: "/pages/refund-policy",
        destination: "/policies/refund-policy",
        permanent: true,
      },
      {
        source: "/pages/shipping-policy",
        destination: "/policies/shipping-policy",
        permanent: true,
      },
      {
        source: "/pages/terms-of-service",
        destination: "/policies/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
