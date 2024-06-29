/** @type {import('next').NextConfig} */
const nextConfig = {
    //Only allow images from Unsplash
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com'
        }

        ],
    }
};

export default nextConfig;
