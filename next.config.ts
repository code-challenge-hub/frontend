import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/api/v1/:path*',
        destination:
          'http://ec2-43-202-77-64.ap-northeast-2.compute.amazonaws.com:8080/api/v1/:path*',
        permanent: true,
      },
    ]
  },
  /* config options here */
}

export default nextConfig
