// next.config.js (in formato ESM)

import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // le tue altre configurazioni, se ci sono
};

export default nextPwa({
  ...nextConfig,
  dest: 'public',
  register: true,
  skipWaiting: true,
});
