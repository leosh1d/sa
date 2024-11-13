/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.userapi.com'
            }
        ],
        unoptimized: true
    }
};

export default nextConfig;
