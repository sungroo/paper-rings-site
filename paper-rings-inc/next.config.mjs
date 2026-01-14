import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  // This explicitly tells Next.js to stay within this folder
  outputFileTracingRoot: __dirname,
  // If you use Turbopack, this silences the specific warning you saw
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;