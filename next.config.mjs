/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Optional: Ensures clean URLs
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
};

export default nextConfig;
