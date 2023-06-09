/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },

    images: {
        formats: ['image/webp'] 
    }
}

module.exports = nextConfig
