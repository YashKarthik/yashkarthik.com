/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withMDX = require('@next/mdx')()
module.exports = withMDX()
