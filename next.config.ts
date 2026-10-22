import type { NextConfig } from "next";

// GitLab Pages serves the site either at the root of its own domain or under /<project>/; the CI job passes that
// path in PAGES_BASE_PATH (see .gitlab-ci.yml). Locally it is absent and the site lives at the root.
const basePath = process.env.PAGES_BASE_PATH?.replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
