import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Repo is Sourav1998.github.io (a user page), served from the domain root,
  // so no basePath/assetPrefix is needed. If you ever move this into a
  // project repo (github.com/Sourav1998/some-repo), set:
  // basePath: "/some-repo", assetPrefix: "/some-repo/",
};

export default nextConfig;
