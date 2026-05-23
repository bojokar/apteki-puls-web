import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';

const projectDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: 'export',
  outputFileTracingRoot: projectDir,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
