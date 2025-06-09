/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for now
  output: 'standalone',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  },
  
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
};

module.exports = nextConfig;
