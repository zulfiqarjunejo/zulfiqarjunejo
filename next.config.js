/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "zulfiqarjunejo-strapi-backend.herokuapp.com",
      "res.cloudinary.com",
    ],
  },
  env: {
    STRAPI_API_URL: "https://zulfiqarjunejo-strapi-backend.herokuapp.com",
  },
}

module.exports = nextConfig
