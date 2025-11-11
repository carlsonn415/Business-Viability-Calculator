/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly expose environment variables to Next.js runtime
  // This is required for Amplify serverless functions to access env vars
  env: {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ?? "",
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET ?? "",
    BRAVE_API_KEY: process.env.BRAVE_API_KEY ?? "",
    IAM_AWS_ACCESS_KEY_ID: process.env.IAM_AWS_ACCESS_KEY_ID ?? "",
    IAM_AWS_SECRET_ACCESS_KEY: process.env.IAM_AWS_SECRET_ACCESS_KEY ?? "",
    IAM_AWS_REGION: process.env.IAM_AWS_REGION ?? "",
    RAG_LAMBDA_FUNCTION_NAME: process.env.RAG_LAMBDA_FUNCTION_NAME ?? "",
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

