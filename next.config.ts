import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
