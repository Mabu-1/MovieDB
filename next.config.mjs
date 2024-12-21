/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org", // For movie images
      "facebook.com", // For Facebook icon
      "x.com", // For X (formerly Twitter) icon
      "linkedin.com", // For LinkedIn icon
    ],
  },
};

export default nextConfig;
