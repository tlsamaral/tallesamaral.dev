import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default nextConfig
