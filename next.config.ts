import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: '/pizzas/**' }
    ]
  }
};

export default nextConfig;