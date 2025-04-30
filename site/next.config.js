/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'NEO Server',
    description: 'The custom store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://NEOherozzz.github.io/kasm-registry/',
    contactUrl: 'https://github.com/NEOherozzz/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
