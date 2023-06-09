/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    
    trailingSlash: true,
    output: 'export'
}

module.exports = nextConfig
