/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Changed from "/drt20nb92/image/**" to catch all directories like "/danioarzz"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Added https to catch secured image links securely
      },
    ]
  }
};

export default nextConfig;
