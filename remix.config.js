import { config } from "@netlify/remix-edge-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...config,
  // ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
