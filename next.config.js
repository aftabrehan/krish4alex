/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com'],
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })

    return config
  },
}
