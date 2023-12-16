import * as build from "@remix-run/dev/server-build";
import { createRequestHandler } from "@netlify/remix-edge-adapter";
import { Config } from "@netlify/edge-functions";

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default handler;

export const config: Config = { cache: "manual", path: "/*", excludedPath: ["/build/*", "/favicon.ico"] }
