/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        formats: ['image/webp', 'image/avif'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'soul-menu-prod.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'soul-menu-dev.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'soul-menu-qa.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
