/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com","links.papareact.com", "avatars.dicebear.com"]
  },
  reactStrictMode: true,
  env: {
    appId: process.env.APP_ID,
    serverUrl: process.env.SERVER_URL,
  },
}
