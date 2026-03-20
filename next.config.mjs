/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Это заставит Next.js выдать чистый HTML
  images: {
    unoptimized: true, // Нужно для работы картинок на GitHub Pages
  },
};

export default nextConfig;
