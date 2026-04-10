/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for SSG/Static Export
  trailingSlash: true,
  distDir: 'public_html',
  images: {
    unoptimized: true, // Required for static export unless using a third-party loader
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false, 
    buildActivity: false, 
  },
};

export default nextConfig;