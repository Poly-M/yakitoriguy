import type { NextConfig } from "next";

// Static export for GitHub Pages. BASE_PATH is set by the deploy workflow
// (the site lives at poly-m.github.io/yakitoriguy); locally it stays "".
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH ?? "",
  images: { unoptimized: true },
  // unoptimized next/image does not prepend basePath to src — expose it
  // so image paths can be prefixed manually (see LOGO in app/content.ts)
  env: { NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? "" },
};

export default nextConfig;
