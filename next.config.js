/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(withPWA({
  i18n,
  reactStrictMode: true
}))
