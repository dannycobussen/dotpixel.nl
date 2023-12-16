import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import faStylesheetUrl from '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent fontawesome from dynamically adding its css since we are going to include it manually
config.autoAddCss = false;

import siteCss from "./styles/site.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: siteCss },
  { rel: "stylesheet", href: faStylesheetUrl }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-primary">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
