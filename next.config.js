/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  images:{
    domains:["rb.gy","cdn.sanity.io"],
  }
}
