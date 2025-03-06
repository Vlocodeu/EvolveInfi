/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"], // Define supported languages
    defaultLocale: "en", // Set default language
    localeDetection: false, // Optional: Disable automatic browser detection
  },
  trailingSlash: true, // Optional: Ensures clean URLs
};

export default nextConfig;
