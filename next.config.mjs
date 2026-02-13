/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cairo-health-care-landingpage/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cairo-health-care-landingpage' : '',
}

export default nextConfig
