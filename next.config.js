/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Disable static optimization for now
  output: 'export',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Handle static files
  staticPageGenerationTimeout: 300,
  
  // Webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
};

module.exports = nextConfig;
